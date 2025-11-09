import { prismadb } from "@/lib/prismadb";
import { stripe } from "@/utils/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  if (!process.env.STRIPE_WEBHOOK_SECRET)
    throw new Error("Stripe webhook secret not set");

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err);
    return NextResponse.json(
      { error: "Webhook signature verification failed." },
      { status: 400 }
    );
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Retrieve Stripe subscription from the session
  const stripeSubscription = await stripe.subscriptions.retrieve(
    session.subscription as string
  );

  if (event.type === "checkout.session.completed") {
    if (!session?.metadata?.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    await prismadb.subscription.create({
      data: {
        userId: session.metadata.userId,
        stripeSubscriptionId: stripeSubscription.id,
        stripeCustomerId: stripeSubscription.customer as string,
        stripeCurrentPeriodEnd: new Date(
          stripeSubscription.current_period_end * 1000
        ),
      },
    });
  } else if (event.type === "invoice.payment_succeeded") {
    const subscriptionFromDB = await prismadb.subscription.findFirst({
      where: {
        stripeSubscriptionId: stripeSubscription.id,
      },
    });

    if (!subscriptionFromDB) {
      return new NextResponse("Subscription not found", { status: 404 });
    }

    await prismadb.subscription.update({
      where: {
        stripeSubscriptionId: stripeSubscription.id,
      },
      data: {
        stripeCurrentPeriodEnd: new Date(
          stripeSubscription.current_period_end* 1000
        ),
      },
    });
  }

  return new NextResponse(null, { status: 200 });
}

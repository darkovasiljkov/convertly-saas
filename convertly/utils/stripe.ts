import Stripe from "stripe";
import dayjs from "dayjs";
import { Subscription } from "@/lib/generated/prisma";


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
apiVersion: "2025-09-30.clover",
typescript: true,
});

export const getPayingStatus = (subscription: Subscription | null): boolean => {
  return (
    !!subscription &&
    !!subscription.stripeCurrentPeriodEnd &&
    dayjs(subscription.stripeCurrentPeriodEnd).isAfter(dayjs())
  );
};
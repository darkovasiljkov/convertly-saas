import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <main className="w-full">
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <SocialProof />
        <CTA />
      </main>
    </div>
  );
}

export default LandingPage;

const Hero = () => {
  return (
    <div className="mx-4 mb-16 mt-10 flex flex-1 flex-col items-center text-center sm:mb-14 md:mb-24 md:mt-24">
      <div className="mb-4 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-700">
        <span className="mr-2 flex h-2 w-2">
          <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
        </span>
        No coding required • AI-powered • Ready in minutes
      </div>

      <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
        Turn Your Content Into
        <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
          {" "}AI-Powered Lead Magnets
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
        Convertly helps you engage your audience with interactive AI experiences
        that capture leads and guide them seamlessly to your products, courses, or services—no coding required.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/lead-magnets">
          <Button size="lg" className="bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Get Started Free
          </Button>
        </Link>
        <Link href="#how-it-works">
          <Button variant="outline" size="lg" className="border-sky-300 px-8 py-6 text-lg font-semibold text-sky-700 hover:bg-sky-50">
            See How It Works
          </Button>
        </Link>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Free to start</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>No credit card required</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Setup in 5 minutes</span>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: "✨",
      title: "AI-Powered Conversations",
      description: "Your lead magnets engage visitors with intelligent, personalized conversations that understand their needs and guide them naturally."
    },
    {
      icon: "🎯",
      title: "Smart Lead Capture",
      description: "Capture emails at the perfect moment when visitors are most engaged, dramatically improving conversion rates."
    },
    {
      icon: "🎨",
      title: "Fully Customizable",
      description: "Match your brand with custom colors, logos, messaging, and AI personalities—no design skills needed."
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Track performance, conversion rates, and visitor engagement with real-time analytics and insights."
    },
    {
      icon: "⚡",
      title: "Instant Setup",
      description: "Create and launch your first AI lead magnet in minutes. Just add your content, customize, and share your unique link."
    },
    {
      icon: "🔗",
      title: "Easy Integration",
      description: "Share your lead magnet anywhere—embed on your website, add to social bios, or use in email campaigns."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-sky-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Everything You Need to
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Convert Visitors</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Powerful features that make lead generation effortless
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-sky-100 bg-white p-6 transition-all hover:shadow-lg hover:scale-105">
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Add your brand details, upload your logo, and customize your lead magnet's appearance to match your style."
    },
    {
      number: "2",
      title: "Configure AI Behavior",
      description: "Set up how your AI assistant will interact with visitors. Define its personality, knowledge base, and conversation goals."
    },
    {
      number: "3",
      title: "Capture Emails",
      description: "Design your email capture flow—choose when and how to ask for contact information for maximum conversions."
    },
    {
      number: "4",
      title: "Share & Convert",
      description: "Get your unique link and share it everywhere. Watch as your AI lead magnet converts visitors into qualified leads 24/7."
    }
  ];

  return (
    <section id="how-it-works" className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Launch Your Lead Magnet in
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> 4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            From idea to live lead magnet in minutes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-gradient-to-r from-sky-300 to-blue-400 lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/lead-magnets">
            <Button size="lg" className="bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105">
              Start Building Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const useCases = [
    {
      title: "Course Creators",
      description: "Guide potential students through your course offerings with an AI assistant that answers questions and captures interested leads.",
      gradient: "from-sky-400 to-blue-500"
    },
    {
      title: "Coaches & Consultants",
      description: "Qualify leads automatically by having your AI assess their needs and collect information before booking discovery calls.",
      gradient: "from-blue-400 to-sky-500"
    },
    {
      title: "SaaS Companies",
      description: "Help visitors understand your product features and pricing while capturing qualified leads for your sales team.",
      gradient: "from-sky-500 to-blue-600"
    },
    {
      title: "Content Creators",
      description: "Turn your blog traffic into subscribers with interactive content experiences that provide value and build your email list.",
      gradient: "from-blue-500 to-sky-600"
    },
    {
      title: "Service Providers",
      description: "Pre-qualify clients by gathering project details and requirements through conversational AI before they reach out.",
      gradient: "from-sky-400 to-blue-500"
    },
    {
      title: "E-commerce Brands",
      description: "Create product recommendation experiences that guide shoppers and capture emails for abandoned cart recovery.",
      gradient: "from-blue-400 to-sky-500"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-sky-50 to-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Built For Every
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Business Type</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            No matter your industry, Convertly helps you capture more leads
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group border-sky-100 bg-white p-6 transition-all hover:shadow-xl hover:scale-105">
              <div className={`mb-4 inline-block rounded-lg bg-gradient-to-r ${useCase.gradient} px-4 py-2 text-sm font-semibold text-white`}>
                {useCase.title}
              </div>
              <p className="text-gray-600">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-12 text-center text-white shadow-2xl">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Join Thousands of Businesses
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Already converting more leads with Convertly
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl font-bold">10,000+</div>
              <div className="text-sky-100">Lead Magnets Created</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl font-bold">2M+</div>
              <div className="text-sky-100">Conversations Started</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl font-bold">45%</div>
              <div className="text-sky-100">Average Conversion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-sky-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
          Ready to
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Transform Your Lead Generation?</span>
        </h2>
        <p className="mb-8 text-lg text-gray-600 md:text-xl">
          Start creating AI-powered lead magnets today. No credit card required.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/lead-magnets">
            <Button size="lg" className="bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105">
              Get Started Free
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="outline" size="lg" className="border-sky-300 px-8 py-6 text-lg font-semibold text-sky-700 hover:bg-sky-50">
              Learn More
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free forever plan</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No setup fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};
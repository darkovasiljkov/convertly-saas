import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Briefcase, Check, Crown, FileText,
 Github, GraduationCap, Laptop, Link2, 
 Linkedin, Mail, MessageSquare, Palette, Rocket, Settings, Share2, ShoppingCart, Target, User, Users, X, Zap } from "lucide-react"
import Image from "next/image";
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
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;

const Hero = () => {
  return (
    <div className="mt-10 md:mt-24 mb-16 flex flex-col-reverse md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto gap-8">
      <div className="flex-1 text-center md:text-left">
        <div className="mb-4 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-700">
          <span className="mr-2 flex h-2 w-2 relative">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
          </span>
          No coding required • AI-powered • Automate lead capture
        </div>

        <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl max-w-lg">
          Turn Your Content Into{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            AI-Powered Lead Magnets
          </span>
        </h1>

        <p className="mt-6 max-w-md text-base text-gray-600 sm:text-lg md:text-xl">
          Create interactive AI-powered lead magnets that engage your audience, capture emails, and guide them to your offers.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/lead-magnets">
            <Button className="bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Start For Free →
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="outline" className="border-sky-300 px-8 py-6 text-lg font-semibold text-sky-700 hover:bg-sky-50">
              See How It Works
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-gray-500">
          {["Free to start", "No credit card required", "Setup in 5 minutes"].map((text, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <svg className="h-5 w-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mt-20">
  <Image
    src="/PublishedLeadMagnet.png"
    alt="Published Lead Magnet"
    width={800} 
    height={3000} 
    className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
  />
</div>
    </div>
  );
};

const Features = () =>{
  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Conversations",
      description: "Your lead magnets engage visitors with intelligent, personalized conversations that understand their needs and guide them naturally.",
      color: "sky"
    },
    {
      icon: Target,
      title: "Smart Lead Capture",
      description: "Capture emails at the perfect moment when visitors are most engaged, dramatically improving conversion rates.",
      color: "blue"
    },
    {
      icon: Palette,
      title: "Fully Customizable",
      description: "Match your brand with custom colors, logos, messaging, and AI personalities—no design skills needed.",
      color: "sky"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track performance, conversion rates, and visitor engagement with real-time analytics and insights.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Create and launch your first AI lead magnet in minutes. Just add your content, customize, and share your unique link.",
      color: "sky"
    },
    {
      icon: Link2,
      title: "Easy Integration",
      description: "Share your lead magnet anywhere—embed on your website, add to social bios, or use in email campaigns.",
      color: "blue"
    }
  ];

  return (
    <section id="features" className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything You Need to
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"> Convert Visitors</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            Powerful features that make lead generation effortless
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group border-2 border-gray-100 bg-white p-8 transition-all hover:border-sky-200 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-${feature.color}-100 to-${feature.color}-200 transition-transform group-hover:scale-110`}>
                  <Icon className={`h-7 w-7 text-${feature.color}-600`} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}


const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: User,
      title: "Create Your Profile",
      description: "Add your brand details, upload your logo, and customize your lead magnet's appearance to match your style."
    },
    {
      number: "2",
      icon: Settings,
      title: "Configure AI Behavior",
      description: "Set up how your AI assistant will interact with visitors. Define its personality, knowledge base, and conversation goals."
    },
    {
      number: "3",
      icon: Mail,
      title: "Capture Emails",
      description: "Design your email capture flow—choose when and how to ask for contact information for maximum conversions."
    },
    {
      number: "4",
      icon: Share2,
      title: "Share & Convert",
      description: "Get your unique link and share it everywhere. Watch as your AI lead magnet converts visitors into qualified leads 24/7."
    }
  ];

  return (
    <section id="how-it-works" className="w-full bg-gradient-to-b from-sky-50 to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Launch Your Lead Magnet in
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"> 4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            From idea to live lead magnet in minutes
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-sky-200 via-blue-300 to-sky-200 lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full lg:w-5/12 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`inline-block ${isEven ? "lg:float-right" : "lg:float-left"} max-w-md`}>
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-sky-500 to-blue-600 text-3xl font-bold text-white shadow-xl lg:mx-8">
                    {step.number}
                  </div>

                  <div className="w-full lg:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/lead-magnets">
            <Button
              size="lg"
              className="h-12 bg-gradient-to-r from-sky-500 to-blue-600 px-8 text-base font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Start Building Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


const UseCases = () => {
  const useCases = [
    {
      icon: GraduationCap,
      title: "Course Creators",
      description: "Guide potential students through your course offerings with an AI assistant that answers questions and captures interested leads.",
      gradient: "from-sky-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Coaches & Consultants",
      description: "Qualify leads automatically by having your AI assess their needs and collect information before booking discovery calls.",
      gradient: "from-blue-500 to-sky-600"
    },
    {
      icon: Laptop,
      title: "SaaS Companies",
      description: "Help visitors understand your product features and pricing while capturing qualified leads for your sales team.",
      gradient: "from-sky-600 to-blue-700"
    },
    {
      icon: FileText,
      title: "Content Creators",
      description: "Turn your blog traffic into subscribers with interactive content experiences that provide value and build your email list.",
      gradient: "from-blue-600 to-sky-700"
    },
    {
      icon: Briefcase,
      title: "Service Providers",
      description: "Pre-qualify clients by gathering project details and requirements through conversational AI before they reach out.",
      gradient: "from-sky-500 to-blue-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Brands",
      description: "Create product recommendation experiences that guide shoppers and capture emails for abandoned cart recovery.",
      gradient: "from-blue-500 to-sky-600"
    }
  ];

  return (
    <section id="use-cases" className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Built For Every
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"> Business Type</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            No matter your industry, Convertly helps you capture more leads
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden border-2 border-gray-100 bg-white p-8 transition-all hover:border-sky-200 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${useCase.gradient} transition-transform group-hover:scale-110`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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

const Footer = () => {
  const navigation = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Use Cases", href: "#use-cases" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "API Reference", href: "/api" },
      { name: "Templates", href: "/templates" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
    ],
  };

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Image
              src="/ConvertlyTransparent_Logo.png"
              alt="Convertly Logo"
              width={140}
              height={140}
              className="object-contain"
            />
            <p className="text-sm text-gray-600 max-w-xs">
              Create AI-powered lead magnets that convert visitors into qualified leads—no coding required.
            </p>
             <p className="text-sm text-sky-600 max-w-xs">
              Built with ❤️ by Vasiljkov Darko.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <X className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/darkovasiljkov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.github.com/in/darkovasiljkov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-600 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-600 transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                  Product
                </h3>
                <ul className="mt-4 space-y-3">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-sky-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-sky-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-sky-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-sky-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Convertly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const Pricing = () => {
 const plans = [
    {
      name: "Free",
      icon: Zap,
      price: "0",
      description: "Perfect for getting started",
      features: [
        "2 AI Lead Magnet",
        "100 conversations/month",
        "Basic customization",
        "Email capture",
        "Analytics dashboard",
        "Community support"
      ],
      cta: "Start Free Plan",
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Premium",
      icon: Rocket,
      price: "10",
      description: "For growing businesses or individuals",
      features: [
        "Unlimited AI Lead Magnets",
        "2,000 conversations/month",
        "Advanced customization",
        "Custom branding",
        "Priority support",
        "Integration webhooks"
      ],
      cta: "Start Premium Plan",
      popular: true,
      gradient: "from-sky-500 to-blue-600"
    },
    {
      name: "Business",
      icon: Crown,
      description: "For scaling companies",
      features: [
        "Unlimited Lead Magnets",
        "10,000 conversations/month",
        "White-label options",
        "Custom domain",
        "Dedicated support",
        "API access",
        "Team collaboration",
        "Custom integrations",
        "SLA guarantee"
      ],
      cta: "Book a call with CEO",
      popular: false,
      gradient: "from-blue-600 to-sky-700"
    }
  ];

  return (
    <section id="pricing" className="w-full bg-gradient-to-b from-white to-sky-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, Transparent
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            Choose the perfect plan for your business. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 bg-white p-8 transition-all hover:shadow-2xl ${
                  plan.popular ? "border-sky-500 shadow-xl scale-105" : "border-gray-200 hover:border-sky-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-0 bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${plan.gradient}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    {plan.name === "Business" ? (
                      <span className="text-5xl font-bold tracking-tight text-gray-900">Contact us</span> 
                      ) : (
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      ${plan.price}
                    </span>)}
                         {plan.name === "Business" ? "" : (<span className="ml-1 text-xl font-medium text-gray-500">/month</span>)}
                  </div>
                </div>

                <Link href="/account">
                  <Button
                    className={`mb-6 w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg hover:shadow-xl"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100">
                        <Check className="h-3 w-3 text-sky-600" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="mt-4 inline-block text-sm font-medium text-sky-600 hover:text-sky-700">
            Need a custom plan? Contact us →
          </Link>
        </div>
      </div>
    </section>
  );

}

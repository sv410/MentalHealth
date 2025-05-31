import { type NextRequest, NextResponse } from "next/server"

const pricingPlans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "month",
    description: "Perfect for getting started",
    features: [
      "Basic mood tracking",
      "Meditation library access",
      "Community forums",
      "Weekly wellness tips",
      "Basic progress insights",
    ],
    popular: false,
    maxUsers: 1,
    support: "Community",
    analytics: "Basic",
  },
  {
    id: "basic",
    name: "Basic",
    price: 29,
    period: "month",
    description: "For regular mental wellness support",
    features: [
      "Everything in Free",
      "2 therapy sessions/month",
      "AI-powered insights",
      "Priority support",
      "Advanced mood analytics",
      "Personalized recommendations",
    ],
    popular: true,
    maxUsers: 1,
    support: "Email & Chat",
    analytics: "Advanced",
  },
  {
    id: "premium",
    name: "Premium",
    price: 79,
    period: "month",
    description: "Complete mental wellness solution",
    features: [
      "Everything in Basic",
      "Unlimited therapy sessions",
      "Personal wellness coach",
      "Custom meditation plans",
      "Family account sharing",
      "Priority booking",
      "Advanced analytics dashboard",
    ],
    popular: false,
    maxUsers: 5,
    support: "24/7 Phone & Chat",
    analytics: "Premium",
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const planId = searchParams.get("planId")

    if (planId) {
      const plan = pricingPlans.find((p) => p.id === planId)
      if (!plan) {
        return NextResponse.json({ error: "Plan not found" }, { status: 404 })
      }
      return NextResponse.json({ plan })
    }

    return NextResponse.json({ plans: pricingPlans })
  } catch (error) {
    console.error("Pricing API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

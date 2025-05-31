import { type NextRequest, NextResponse } from "next/server"

const faqs = [
  {
    id: 1,
    question: "How does the AI-powered therapy work?",
    answer:
      "Our AI analyzes your responses and provides personalized recommendations, coping strategies, and connects you with the most suitable therapists based on your needs. The AI uses evidence-based therapeutic approaches and continuously learns from your interactions to provide better support.",
    category: "AI & Technology",
    featured: true,
  },
  {
    id: 2,
    question: "Is my data secure and private?",
    answer:
      "Absolutely. We use end-to-end encryption and comply with HIPAA regulations. Your mental health data is never shared without your explicit consent. We employ bank-level security measures and regular security audits to protect your information.",
    category: "Privacy & Security",
    featured: true,
  },
  {
    id: 3,
    question: "Can I switch therapists if needed?",
    answer:
      "Yes, you can switch therapists at any time. We'll help you find a better match based on your preferences and therapy goals. There's no additional cost for switching, and we maintain continuity in your care by securely transferring relevant session notes with your consent.",
    category: "Therapy Services",
    featured: true,
  },
  {
    id: 4,
    question: "What's included in the free plan?",
    answer:
      "The free plan includes basic mood tracking, access to our meditation library, community support forums, weekly wellness tips, and basic progress insights. It's a great way to get started with your mental wellness journey.",
    category: "Pricing & Plans",
    featured: true,
  },
  {
    id: 5,
    question: "How do I book a therapy session?",
    answer:
      "Booking is simple! Browse our network of licensed therapists, view their profiles and availability, then select a time that works for you. You can book sessions through our web platform or mobile app, and receive confirmation and reminders.",
    category: "Therapy Services",
    featured: false,
  },
  {
    id: 6,
    question: "What types of therapy are available?",
    answer:
      "We offer various evidence-based therapy approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), mindfulness-based therapy, and more. Our therapists specialize in different areas to match your specific needs.",
    category: "Therapy Services",
    featured: false,
  },
  {
    id: 7,
    question: "Can I use MindFlow on mobile devices?",
    answer:
      "Yes! MindFlow is fully responsive and works seamlessly on all devices. We also have dedicated mobile apps for iOS and Android with full feature parity and offline capabilities for meditation and journaling.",
    category: "Technical",
    featured: false,
  },
  {
    id: 8,
    question: "Do you accept insurance?",
    answer:
      "We're working with major insurance providers to offer coverage. Currently, we accept HSA/FSA payments and provide detailed receipts for potential reimbursement. Contact your insurance provider to check your mental health benefits.",
    category: "Pricing & Plans",
    featured: false,
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const featured = searchParams.get("featured") === "true"
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    let filteredFaqs = faqs

    if (category) {
      filteredFaqs = faqs.filter((faq) => faq.category.toLowerCase() === category.toLowerCase())
    }

    if (featured) {
      filteredFaqs = filteredFaqs.filter((faq) => faq.featured)
    }

    const limitedFaqs = filteredFaqs.slice(0, limit)

    return NextResponse.json({
      faqs: limitedFaqs,
      total: filteredFaqs.length,
      categories: [...new Set(faqs.map((faq) => faq.category))],
    })
  } catch (error) {
    console.error("FAQ API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { question, email } = await request.json()

    if (!question || !email) {
      return NextResponse.json({ error: "Question and email are required" }, { status: 400 })
    }

    // Here you would typically save to database or send to support team
    console.log("New FAQ submission:", { question, email })

    return NextResponse.json(
      { message: "Question submitted successfully. We'll get back to you soon!" },
      { status: 201 },
    )
  } catch (error) {
    console.error("FAQ submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

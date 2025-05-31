import { type NextRequest, NextResponse } from "next/server"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Manager",
    content:
      "This platform completely transformed my approach to mental wellness. The AI tools are incredibly intuitive.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Software Engineer",
    content: "Finding the right therapist was seamless. The booking system and video sessions work flawlessly.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Teacher",
    content: "The mood tracking features helped me understand my patterns better. Highly recommend!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Designer",
    content: "The meditation library is extensive and the guided sessions are perfect for my busy schedule.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const verified = searchParams.get("verified") === "true"

    let filteredTestimonials = testimonials

    if (verified) {
      filteredTestimonials = testimonials.filter((t) => t.verified)
    }

    const limitedTestimonials = filteredTestimonials.slice(0, limit)

    return NextResponse.json({
      testimonials: limitedTestimonials,
      total: filteredTestimonials.length,
    })
  } catch (error) {
    console.error("Testimonials API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, role, content, rating } = await request.json()

    // Validate required fields
    if (!name || !role || !content || !rating) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 })
    }

    // Here you would typically save to database
    const newTestimonial = {
      id: testimonials.length + 1,
      name,
      role,
      content,
      rating,
      image: "/placeholder.svg?height=60&width=60",
      verified: false,
      createdAt: new Date().toISOString(),
    }

    console.log("New testimonial:", newTestimonial)

    return NextResponse.json(
      { message: "Testimonial submitted successfully", testimonial: newTestimonial },
      { status: 201 },
    )
  } catch (error) {
    console.error("Testimonial submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

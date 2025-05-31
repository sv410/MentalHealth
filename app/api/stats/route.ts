import { type NextRequest, NextResponse } from "next/server"

const stats = {
  usersHelped: 52847,
  licensedTherapists: 1247,
  satisfactionRate: 96.8,
  sessionsCompleted: 125690,
  averageRating: 4.9,
  countriesServed: 45,
}

export async function GET(request: NextRequest) {
  try {
    // Simulate real-time stats with small random variations
    const realTimeStats = {
      usersHelped: stats.usersHelped + Math.floor(Math.random() * 100),
      licensedTherapists: stats.licensedTherapists + Math.floor(Math.random() * 10),
      satisfactionRate: Math.round((stats.satisfactionRate + (Math.random() - 0.5) * 2) * 10) / 10,
      sessionsCompleted: stats.sessionsCompleted + Math.floor(Math.random() * 500),
      averageRating: Math.round((stats.averageRating + (Math.random() - 0.5) * 0.2) * 10) / 10,
      countriesServed: stats.countriesServed,
    }

    return NextResponse.json({
      stats: realTimeStats,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Stats API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

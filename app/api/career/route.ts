import { type NextRequest, NextResponse } from "next/server"

// This route is kept for backward compatibility but now just redirects to the Google Sheets form
export async function POST(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      message: "Form submission is now handled directly by Google Sheets",
    })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

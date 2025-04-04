import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, phone, position, experience, message, resumeLink } = body

    if (!name || !email || !position) {
      return NextResponse.json({ error: "Name, email and position are required" }, { status: 400 })
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Construct the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "thebagaboo@gmail.com",
      subject: `Ignivox Career Application: ${position} - ${name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Experience:</strong> ${experience || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
        <p><strong>Resume Link:</strong> ${resumeLink ? `<a href="${resumeLink}">View Resume</a>` : "Not provided"}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    // Return a success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { firstName, lastName, email, phone, company, projectType, message } = await request.json();
//   console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Project Inquiry from ${firstName} ${lastName}`,
    text: `
New Contact Request from your website:

👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📞 Phone: ${phone}
🏢 Company: ${company || "N/A"}
💡 Project Type: ${projectType}
📝 Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}

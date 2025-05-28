import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'Contact Form <contact@resend.dev>',
      to: ['maxstouten@gmail.com'],
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}

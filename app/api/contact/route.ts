import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import { Inquiry } from "@/lib/inquiry";
import { z } from "zod";

const inquirySchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "A valid email is required." }),
  phone: z.string().min(10, { message: "A valid phone number is required." }),
  message: z.string().min(1, { message: "A message is required." }),
});

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const validation = inquirySchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input", issues: validation.error.issues },
        { status: 400 }
      );
    }

    const { firstName, lastName, phone, email, message } = validation.data;

    await Inquiry.create({ firstName, lastName, phone, email, message });

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Something went wrong on the server." },
      { status: 500 }
    );
  }
}

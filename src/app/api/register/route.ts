import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    console.log("Registration attempt for:", email);

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await (prisma as any).user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log("User already exists:", email);
      return NextResponse.json({ error: "An account with this email already exists." }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await (prisma as any).user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'USER'
      },
    });

    console.log("User registered successfully:", user.id);
    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error: any) {
    console.error("CRITICAL REGISTRATION ERROR:", error);
    return NextResponse.json({ error: "Internal Server Error. Please try again later." }, { status: 500 });
  }
}

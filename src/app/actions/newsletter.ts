"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return { success: false, message: "Invalid email address." };
  }

  try {
    const existing = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return { success: true, message: "You are already subscribed!" };
    }

    await prisma.subscriber.create({
      data: { email },
    });

    revalidatePath("/admin/subscribers");
    return { success: true, message: "Successfully subscribed!" };
  } catch (error) {
    // Subscription error handling
    console.error("Newsletter Subscription Error:", error);
    return { success: false, message: "An error occurred. Please try again later." };
  }
}

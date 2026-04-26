"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface PostData {
  title: string;
  slug: string;
  content: string;
  published: boolean;
}

export async function updatePost(id: string, data: PostData) {
  try {
    await prisma.post.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        published: data.published,
      }
    });
    
    revalidatePath("/admin/content");
    revalidatePath(`/blog/${data.slug}`);
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update post:", error);
    return { success: false, error: "Failed to update post." };
  }
}

export async function deletePost(id: string) {
  try {
    await prisma.post.delete({
      where: { id }
    });
    
    revalidatePath("/admin/content");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete post:", error);
    return { success: false, error: "Failed to delete post." };
  }
}

export async function createPost(data: PostData & { authorId: string }) {
  try {
    const post = await prisma.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        published: data.published,
        authorId: data.authorId,
      }
    });
    
    revalidatePath("/admin/content");
    return { success: true, id: post.id };
  } catch (error) {
    console.error("Failed to create post:", error);
    return { success: false, error: "Failed to create post." };
  }
}

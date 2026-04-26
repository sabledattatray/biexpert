import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import PostEditor from "./editor";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const post = await prisma.post.findUnique({
    where: { id }
  });

  if (!post) {
    notFound();
  }

  return (
    <PostEditor post={{
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.content,
      published: post.published,
    }} />
  );
}

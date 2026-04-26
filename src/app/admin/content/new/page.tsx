"use client";

import React from "react";
import PostEditor from "../[id]/editor";

export default function NewPostPage() {
  const emptyPost = {
    title: "",
    slug: "",
    content: "",
    image: "",
    excerpt: "",
    metaTitle: "",
    metaDesc: "",
    published: false,
  };

  return (
    <PostEditor post={emptyPost} isNew={true} />
  );
}

"use client";

import React from "react";
import PostEditor from "../[id]/editor";

export default function NewPostPage() {
  const emptyPost = {
    title: "",
    slug: "",
    content: "",
    published: false,
    metaTitle: "",
    metaDesc: "",
  };

  return (
    <PostEditor post={emptyPost} isNew={true} />
  );
}

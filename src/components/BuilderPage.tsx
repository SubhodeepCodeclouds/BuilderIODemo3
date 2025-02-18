"use client"; // Ensure it's a Client Component
import React, { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

export default function BuilderPage({ urlPath }: { urlPath: string }) {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    async function fetchPage() {
      const fetchedPage = await builder
        .get("page", {
          userAttributes: { urlPath },
        })
        .toPromise();
      setPage(fetchedPage);
    }

    fetchPage();
  }, [urlPath]);

  if (!page) return <h1>Loading...</h1>;

  return <BuilderComponent model="page" content={page} />;
}

"use client";
import { useEffect, useState } from "react";
import { builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

export function useLinks() {
  const [links, setLinks] = useState<any>(null);

  useEffect(() => {
    async function fetchLinks() {
      const linksData = await builder.get("links").toPromise();
      setLinks(linksData?.data);
    }

    fetchLinks();
  }, []);

  return links;
}

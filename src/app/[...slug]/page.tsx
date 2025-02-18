// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { builder, BuilderComponent } from "@builder.io/react";

// // Builder Public API Key set in .env file
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// export default function DynamicPage() {
//   const params = useParams();
//   const slug = params?.slug ? `/${params.slug.join("/")}` : "/";
//   const [pageContent, setPageContent] = useState<any>(null);

//   useEffect(() => {
//     async function fetchPage() {
//       const page = await builder
//         .get("page", {
//           userAttributes: {
//             urlPath: slug,
//           },
//         })
//         .toPromise();
//       setPageContent(page);
//     }

//     fetchPage();
//   }, [slug]);

//   if (!pageContent) return <h1>Page Not Found</h1>;

//   return <BuilderComponent model="page" content={pageContent} />;
// }

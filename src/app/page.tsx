import BuilderPage from "@/components/BuilderPage";

export default function Home() {
  return <BuilderPage urlPath="/" />;
}

// "use client";
// import { useEffect, useState } from "react";
// import { builder, BuilderComponent } from "@builder.io/react";

// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

// export default function HomePage() {
//   const [pageContent, setPageContent] = useState<any>(null);

//   useEffect(() => {
//     async function fetchPage() {
//       const page = await builder
//         .get("page", {
//           userAttributes: {
//             urlPath: "/",
//           },
//         })
//         .toPromise();
//       setPageContent(page);
//     }

//     fetchPage();
//   }, []);

//   if (!pageContent) return <h1>Loading...</h1>;

//   return <BuilderComponent model="page" content={pageContent} />;
// }
import BuilderHeader from "@/components/BuilderHeader";
import BuilderFooter from "@/components/BuilderFooter";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BuilderHeader />
        <main>{children}</main>
        <BuilderFooter />
      </body>
    </html>
  );
}


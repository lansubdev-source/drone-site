// app/layout.tsx
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MagicCursor from "@/components/MagicCursor";

export const metadata = {
  title: "Magic Myna | Drone Solutions",
  description: "Next-gen drone solutions website",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Fonts – Open Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="transition-colors duration-300 bg-white text-black"
        style={{
          fontFamily:
            '"Open Sans", "PingFang SC", Arial, sans-serif',
        }}
      >
        <MagicCursor/>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

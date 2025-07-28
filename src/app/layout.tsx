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
      </head>
      <body className="bg-white text-black transition-colors duration-300 font-sans">
        <MagicCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

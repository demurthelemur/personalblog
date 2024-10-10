import "./globals.css";
import Navbar from "../components/ui/navbar"; // Import the Navbar component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="md:px-28 px-12">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "./providers/queryClientProvider";
import { Sidebar } from "./components/sidebar";

const encondeSans = Encode_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jogoteca",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${encondeSans.className} antialiased bg-blue-gray`}>
        <QueryClientProvider>
          <div className="grid grid-cols-12 gap-2 px-2 m-5">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <main className="col-span-10 grid-cols-subgrid grid gap-6">
          {children}
        </main>
        </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}

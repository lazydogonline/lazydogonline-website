import type React from "react"
import type { Metadata } from "next"
import { Inter, Fredoka } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import JsonLd from "@/components/JsonLd"

const inter = Inter({ subsets: ["latin"] })
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  title: "Lazydogonline Designs - Children's Books, Songs & Coloring Pages",
  description:
    "Fun, educational adventures through stories, songs, and coloring pages for curious kids ages 3-8. Every book comes with its own original song!",
  keywords:
    "children's books, kids books, coloring books, educational books, songs for kids, family books, basset hound, Cooper",
  authors: [{ name: "Lazydogonline Designs" }],
  openGraph: {
    title: "Lazydogonline Designs - Where Books, Songs & Coloring Come to Life!",
    description: "Fun, educational adventures through stories, songs, and coloring pages for curious kids ages 3-8.",
    url: "https://lazydogonline.com",
    siteName: "Lazydogonline Designs",
    images: [
      {
        url: "/images/hero-dog-watercolor.jpg",
        width: 1200,
        height: 630,
        alt: "Cooper the basset hound - Lazydogonline mascot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazydogonline Designs - Children's Books & Songs",
    description: "Fun, educational adventures for kids ages 3-8 with original songs!",
    images: ["/images/hero-dog-watercolor.jpg"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fredoka.variable}>
      <head>
        {/* Pinterest Domain Verification */}
        <meta name="p:domain_verify" content="24363d614fdc2634fd7aaf235026468e" />
        <JsonLd />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

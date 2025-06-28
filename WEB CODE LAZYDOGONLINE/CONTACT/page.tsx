import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Lazydogonline Designs",
  description:
    "Get in touch with Cooper and the Lazydogonline team. We'd love to hear from you about our books, songs, and adventures!",
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <ContactPageClient />
      <Footer />
    </main>
  )
}

import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import BooksSection from "@/components/BooksSection"
import AboutSection from "@/components/AboutSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import NewsletterSection from "@/components/NewsletterSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <BooksSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}

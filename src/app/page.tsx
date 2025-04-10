import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Features } from "../components/features"
import { Benefits } from "../components/benefits"
import { Audience } from "../components/audience"
import { CaseStudy } from "../components/case-study"
import { Ecosystem } from "../components/ecosystem"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Audience />
      <CaseStudy />
      <Ecosystem />
      <Contact />
      <Footer />
    </main>
  )
}

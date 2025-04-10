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
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Features />
        <Benefits />
        <Audience />
        <CaseStudy />
        <Ecosystem />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

import { ArrowRight } from "lucide-react"

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Part of the <span className="text-neon-green">Powerhouse Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The Decentralized Operations Platform is one of the three core platforms of Powerhouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card group">
            <h3 className="text-xl font-semibold mb-3">Governance and Security</h3>
            <p className="text-gray-400 mb-6">Structure for Consensus. Power for Execution.</p>
            <a href="#" className="inline-flex items-center text-neon-green hover:underline group-hover:underline">
              Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="card group">
            <h3 className="text-xl font-semibold mb-3">Builder Platform</h3>
            <p className="text-gray-400 mb-6">Build for the Future. Get Credited and Compensated.</p>
            <a href="#" className="inline-flex items-center text-neon-green hover:underline group-hover:underline">
              Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

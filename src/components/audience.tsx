import { Users, Globe, Code } from "lucide-react"

export function Audience() {
  return (
    <section id="audience" className="py-20 bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Who It's <span className="text-neon-green">For</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform is designed for organizations that operate outside traditional corporate structures but still
            need efficient operational tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card flex flex-col items-center text-center p-8 hover:translate-y-[-8px]">
            <Users className="h-12 w-12 text-neon-green mb-6" />
            <h3 className="text-xl font-semibold mb-3">Ops Leaders</h3>
            <p className="text-gray-400">
              Ops Leaders in emerging DAOs and collectives looking to streamline operations and improve coordination.
            </p>
          </div>

          <div className="card flex flex-col items-center text-center p-8 hover:translate-y-[-8px]">
            <Globe className="h-12 w-12 text-neon-green mb-6" />
            <h3 className="text-xl font-semibold mb-3">Platform Builders</h3>
            <p className="text-gray-400">
              Platform builders spinning up ecosystems or services marketplaces that need scalable operational
              infrastructure.
            </p>
          </div>

          <div className="card flex flex-col items-center text-center p-8 hover:translate-y-[-8px]">
            <Code className="h-12 w-12 text-neon-green mb-6" />
            <h3 className="text-xl font-semibold mb-3">Protocol Teams</h3>
            <p className="text-gray-400">
              Protocol teams seeking long-term scalability without centralization, maintaining their decentralized
              ethos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

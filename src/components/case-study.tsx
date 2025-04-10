import Image from "next/image"

export function CaseStudy() {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Example in <span className="text-neon-green">Action</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-background-light rounded-xl overflow-hidden border border-gray-800">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-xl overflow-hidden bg-background flex items-center justify-center border border-gray-700 shadow-[0_0_15px_rgba(52,235,79,0.25)]">
                  <Image
                    src="/logos/sky-logo.svg"
                    alt="Sky Ecosystem"
                    width={135}
                    height={135}
                    className="w-3/4 h-auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Sky Ecosystem Implementation</h3>
                <p className="text-gray-300 mb-6">
                  Fusion was built for Sky Ecosystem, as well as partners experimenting with project-based governance
                  and transparent roadmap funding.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm">Governance</span>
                  <span className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm">
                    Transparent Funding
                  </span>
                  <span className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm">
                    Project Management
                  </span>
                  <span className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm">
                    Decentralized Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

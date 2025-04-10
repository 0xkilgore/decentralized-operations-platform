import { AnimatedGrid } from "./animated-grid"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedGrid />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
            <span className="block">Decentralized Operations Platform</span>
          </h1>

          <p className="text-lg md:text-xl text-neon-green neon-glow mb-8">
            Streamlining Processes for Distributed Organizations
          </p>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">The operating system for the sovereign worker</p>

          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Powerhouse's Decentralized Operations Platform is optimized for a new generation of network organizations
            that do not have a traditional corporate structure but still aim to maximize efficiency and scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#features" className="btn-primary">
              Explore Features
            </a>
            <a href="#contact" className="btn-secondary">
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

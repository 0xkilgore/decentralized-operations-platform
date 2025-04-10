import { Network, Clock, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              Why It <span className="text-neon-green">Matters</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Too many decentralized organizations fail at the basics: coordination, consistency, clarity. Powerhouse's
              Decentralized Operations Platform automates administrative and coordination tasks for mission-driven, open
              organizations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-neon-green/10">
                  <Network className="h-6 w-6 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Scale without centralized control</h3>
                  <p className="text-gray-400">Maintain your decentralized ethos while growing your organization.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-neon-green/10">
                  <Clock className="h-6 w-6 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Reduce coordination overhead</h3>
                  <p className="text-gray-400">Automate routine tasks and streamline communication channels.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-neon-green/10">
                  <CheckCircle className="h-6 w-6 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Increase execution reliability</h3>
                  <p className="text-gray-400">Ensure consistent delivery with automated workflows and checkpoints.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-neon-green/10">
                  <TrendingUp className="h-6 w-6 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Enable investable outcomes</h3>
                  <p className="text-gray-400">
                    Create transparent, trackable results that attract funding and support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px]">
            {/* First screenshot (positioned in front) */}
            <div className="absolute top-0 right-0 w-4/5 h-auto rounded-lg overflow-hidden shadow-[0_0_20px_rgba(52,235,79,0.2)] border border-gray-700 z-10 transform hover:translate-y-[-5px] transition-transform duration-300">
              <Image
                src="/images/fusion-1.png"
                alt="Fusion Dashboard"
                width={600}
                height={350}
                className="w-full h-auto"
              />
            </div>

            {/* Second screenshot (positioned behind and offset) */}
            <div className="absolute bottom-0 left-0 w-4/5 h-auto rounded-lg overflow-hidden shadow-[0_0_20px_rgba(52,235,79,0.2)] border border-gray-700 transform hover:translate-y-[-5px] transition-transform duration-300">
              <Image
                src="/images/fusion-3.png"
                alt="Fusion Analytics"
                width={600}
                height={350}
                className="w-full h-auto"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-1/3 h-1/3 border border-neon-green rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-1/4 h-1/4 border border-neon-green/30 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

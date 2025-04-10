import { CreditCard, BarChart3, Workflow } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-20 bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What It <span className="text-neon-green">Includes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform provides the essential tools needed for decentralized organizations to operate efficiently and
            scale effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card group">
            <div className="mb-6 p-3 rounded-full bg-background inline-block group-hover:bg-neon-green/10 transition-colors duration-300">
              <CreditCard className="h-8 w-8 text-neon-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Pay contributors around the world</h3>
            <p className="text-gray-400">
              Monthly payment transaction processing through our platform to countries around the world. Receive
              payments directly from a DAO.
            </p>
          </div>

          <div className="card group">
            <div className="mb-6 p-3 rounded-full bg-background inline-block group-hover:bg-neon-green/10 transition-colors duration-300">
              <BarChart3 className="h-8 w-8 text-neon-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Operational Budgeting Flows</h3>
            <p className="text-gray-400">
              Submit, approve, and track budgets transparently—tied to actual work delivery.
            </p>
          </div>

          <div className="card group">
            <div className="mb-6 p-3 rounded-full bg-background inline-block group-hover:bg-neon-green/10 transition-colors duration-300">
              <Workflow className="h-8 w-8 text-neon-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Workflow Automation Templates</h3>
            <p className="text-gray-400">
              From contributor onboarding to RFP evaluation and fund disbursement, Fusion supports repeatable process
              automation for every team function.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">
            Learn <span className="text-neon-green">More</span>
          </h2>
          <p className="text-gray-400 mb-10">Get early access, request a demo, or explore open source.</p>

          <div className="bg-background-light rounded-xl p-8 border border-gray-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <div>
                <button type="submit" className="w-full btn-primary py-4">
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

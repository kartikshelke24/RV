"use client"

import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you need digital marketing, web development, custom software, or programming education, we are here to
          help you succeed
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
            Contact Us Now
            <ArrowRight size={18} />
          </button>
          <button className="px-8 py-3 border border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
            Schedule Consultation
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-16 space-y-4 text-muted-foreground">
          <p>
            📍 Chistiya Chowk Rd, opposite of Rajiv Gandhi stadium,
            <br />
            Sai Nagar, N 5, Cidco, Chhatrapati Sambhajinagar
          </p>
          <p>📱 +91 84213 16173</p>
          <p>✉️ ashishlk616@gmail.com</p>
        </div>
      </div>
    </section>
  )
}

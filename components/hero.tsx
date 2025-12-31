"use client"

import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-card pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Your Digital Excellence Partner</span>
          </div>

          {/* Main Heading - Updated to reflect new tagline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            <span className="text-gradient">Where Your Brand's Story</span>
            <br />
            Becomes An Unforgettable Journey
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Expert digital marketing, cutting-edge web development, custom software solutions, and comprehensive
            programming education all in one place
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 border border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

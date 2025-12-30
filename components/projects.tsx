"use client"

import { Sparkles } from "lucide-react"

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Services in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans digital marketing, web development, and software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: "Web Development",
              icon: "🌐",
              description: "Full-featured e-commerce platforms, responsive websites, and custom web solutions",
            },
            {
              category: "Brand Strategy",
              icon: "✨",
              description: "Logo design, color palettes, brand guidelines, and complete identity packages",
            },
            {
              category: "Social Campaigns",
              icon: "📱",
              description: "Multi-platform strategies with content creation, ads, and analytics",
            },
            {
              category: "Software Development",
              icon: "⚙️",
              description: "Custom admin dashboards, real-time data visualization, and management tools",
            },
            {
              category: "Digital Marketing",
              icon: "📈",
              description: "Strategic campaigns, SEO optimization, and audience engagement strategies",
            },
            {
              category: "Creative Design",
              icon: "🎨",
              description: "Social media assets, marketing collateral, and visual content creation",
            },
          ].map((item) => (
            <div
              key={item.category}
              className="group relative overflow-hidden rounded-lg bg-card border border-border p-8 hover:border-accent transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{item.category}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-10 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-accent" size={24} />
            <h3 className="text-2xl font-bold">Ready to see your project come to life?</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can bring your vision to reality
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Palette, Code, Rocket, Smartphone, TrendingUp, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Digital Marketing",
    description: "Strategic campaigns, content creation, and brand building to elevate your online presence",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logo design, branding packages, social media assets, and marketing collateral",
  },
  {
    icon: Code,
    title: "Web Design & Development",
    description: "Responsive websites, e-commerce platforms, and custom web solutions",
  },
  {
    icon: Rocket,
    title: "Software Development",
    description: "Custom business software, admin panels, and SaaS applications built with modern tech",
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description: "Community management, content strategy, and audience engagement campaigns",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Responsive design and mobile-first development for all platforms",
  },
]

const smmPackages = [
  {
    name: "Basic SMM Package",
    features: [
      "Social Media Channels: Facebook, Instagram",
      "5 Reels (Motion Graphics Videos)",
      "1 Facebook Ad Campaign per month",
      "Account Management & Strategy Creation",
      "Calendar & Content Planning",
      "Instagram Highlights",
      "15 Creative Designs",
      "Community Follow-Up & Engagement",
    ],
  },
  {
    name: "Professional SMM Package",
    features: [
      "Social Media Channels: Facebook, Instagram",
      "10 Reels (Motion Graphics Videos)",
      "3 Facebook Ad Campaigns per month",
      "Account Management & Strategy Creation",
      "Calendar & Content Planning",
      "Instagram Highlights",
      "30 Creative Designs",
      "Community Follow-Up & Engagement",
      "Performance Analytics & Reporting",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions for digital marketing, web development, custom software, and professional training
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4 p-3 w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-20 pt-20 border-t border-border">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <BarChart3 className="text-accent" size={36} />
              Social Media Marketing Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive monthly packages to boost your brand's social presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smmPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="p-8 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-accent">{pkg.name}</h3>
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* <button className="mt-8 w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity">
                  Get Started
                </button> */}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-card border border-border rounded-lg">
            <h4 className="font-semibold mb-3 text-accent">Terms & Conditions</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Customization available based on client needs and expectations</li>
              <li>• Minimum 3-month package recommended for optimal results</li>
              <li>• Extra charges apply for services outside the mentioned scope</li>
              <li>• Ad spend is separate and billed as per actual expenses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Courses } from "@/components/courses"
import { Projects } from "@/components/projects"
import { Technologies } from "@/components/technologies"
import { CTA } from "@/components/cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Courses />
      <Projects />
      <Technologies />
      <CTA />
      <Footer />
    </div>
  )
}

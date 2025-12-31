"use client"

import { Clock, BookOpen } from "lucide-react"

const courses = [
  {
    title: "C Programming",
    description: "Master the fundamentals of programming with C - essential for system-level coding",
    duration: "45 days",
  },
  {
    title: "HTML & Web Basics",
    description: "Learn to build web pages from scratch with semantic HTML and modern practices",
    duration: "45 days",
  },
  {
    title: "Python Programming",
    description: "Python essentials for web development, data science, and automation projects",
    duration: "45 days",
  },
  {
    title: "PHP Web Development",
    description: "Full-stack web development with PHP, databases, and server-side programming",
    duration: "45 days",
  },
]

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Programming Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert-guided programming education to start your coding journey
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group relative p-6 rounded-lg bg-background border border-border hover:border-accent transition-all duration-300"
            >
              <div className="mb-4">
                <BookOpen className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

              {/* Duration Badge */}
              <div className="flex items-center gap-2 text-accent text-sm font-medium">
                <Clock size={16} />
                {course.duration}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to start learning?</p>
          <a
            href="https://forms.gle/pc5cjuvN3xpwBMBeA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  )
}

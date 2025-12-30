"use client"

export function Technologies() {
  const techs = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: ".NET Core", category: "Backend" },
    { name: "MS SQL Server", category: "Database" },
    { name: "PHP", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "REST APIs", category: "Integration" },
    { name: "JavaScript", category: "Frontend" },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Technologies We Use</h2>
          <p className="text-muted-foreground">Modern stack for robust, scalable solutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-lg bg-background border border-border text-center hover:border-accent hover:bg-accent/5 transition-all"
            >
              <p className="font-semibold text-foreground">{tech.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

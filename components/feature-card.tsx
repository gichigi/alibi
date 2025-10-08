import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 text-center shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}


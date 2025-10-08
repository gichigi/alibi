import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-lg border ${popular ? "border-amber-500" : ""} bg-background p-6 shadow-sm ${popular ? "shadow-amber-500/20" : ""}`}
    >
      {popular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-white">
          Most Popular
        </div>
      )}
      <div className="mb-6 flex flex-col gap-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-muted-foreground">{period}</span>}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="mb-6 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-amber-500" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/signup">
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          {buttonText}
        </Button>
      </Link>
    </div>
  )
}


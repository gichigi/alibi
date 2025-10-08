interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm">
      <div className="flex flex-col gap-4">
        <div className="text-lg italic text-muted-foreground">"{quote}"</div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700 font-serif font-bold">
            {author[0]}
          </div>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}


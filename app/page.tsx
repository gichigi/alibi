"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, BarChart2, FileText, Eye, Lock, ChevronRight, Menu, X } from "lucide-react"
import { useState } from "react"
import TestimonialCard from "@/components/testimonial-card"
import FeatureCard from "@/components/feature-card"
import PricingCard from "@/components/pricing-card"
import FaqAccordion from "@/components/faq-accordion"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-amber-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-background">A</span>
              </div>
            </div>
            <span className="font-serif text-xl font-bold">Alibi</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Evidence
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hidden md:inline-flex">
                Access Case Files
              </Button>
            </Link>
            <Link href="/signup">
              <Button>Open Your Case</Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Evidence
                </Link>
                <Link
                  href="#testimonials"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-b from-background to-background/95">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Your Billable Hours,
                    <br />
                    <span className="text-amber-500">Defended.</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Build an airtight case for every billable hour. When clients question your invoice, present
                    irrefutable evidence.
                  </p>
                  <p className="max-w-[600px] text-sm text-muted-foreground/80 md:text-base">
                    Automatic time tracking that proves you worked, when you worked, and what you worked on—so you never have to guess or defend your billable hours again.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1">
                      Begin Your Defense <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline">
                      See The Evidence
                    </Button>
                  </Link>
                </div>
                <div className="text-xs text-muted-foreground italic border-l-2 border-muted pl-2 mt-6">
                  * Your Honor, all tracking is local and designed for your eyes only. The prosecution has no access.
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative h-[350px] sm:h-[400px] w-full max-w-[500px] rounded-lg bg-muted overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-background/90 flex items-center px-4 border-b">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto font-mono text-sm opacity-70">Alibi Timeline - Exhibit A</div>
                  </div>
                  <div className="pt-12 px-4 h-full">
                    <div className="space-y-4 py-4">
                      <div className="flex justify-between border-b border-border pb-3">
                        <div className="font-medium">09:15 AM - 10:30 AM</div>
                        <div className="text-amber-500 font-medium">1h 15m</div>
                      </div>
                      <div className="pl-4 border-l-2 border-green-500 py-1">
                        <div className="font-medium">Brief review</div>
                        <div className="text-sm text-muted-foreground">Focus time: 92% (Exhibit B)</div>
                      </div>
                      <div className="flex justify-between border-b border-border pb-3">
                        <div className="font-medium">10:35 AM - 11:20 AM</div>
                        <div className="text-amber-500 font-medium">45m</div>
                      </div>
                      <div className="pl-4 border-l-2 border-yellow-500 py-1">
                        <div className="font-medium">Zoom Deposition</div>
                        <div className="text-sm text-muted-foreground">Client: Acme Corp. v. Time Waste</div>
                      </div>
                      <div className="flex justify-between border-b border-border pb-3">
                        <div className="font-medium">11:30 AM - 12:15 PM</div>
                        <div className="text-amber-500 font-medium">45m</div>
                      </div>
                      <div className="pl-4 border-l-2 border-red-500 py-1">
                        <div className="font-medium">Drafting</div>
                        <div className="text-sm text-muted-foreground">In your defense: No distractions detected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-20 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700">
                  Case Exhibits
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Evidence In Your Favor
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The jury will find these features both material and compelling.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
              <FeatureCard
                icon={<Clock className="h-8 w-8" />}
                title="Timeline Breakdown"
                description="See your day, hour-by-hour, based on what was on your screen. The timeline never lies, Your Honor."
              />
              <FeatureCard
                icon={<BarChart2 className="h-8 w-8" />}
                title="Task Inference"
                description="Alibi groups focus time into labels like 'Brief review,' 'Drafting,' 'Editing,' or 'Feedback loop.'"
              />
              <FeatureCard
                icon={<FileText className="h-8 w-8" />}
                title="Client Reports"
                description="Auto-generates a timeline summary to send with your invoice. Objection overruled."
              />
              <FeatureCard
                icon={<Eye className="h-8 w-8" />}
                title="Pattern Analysis"
                description="Shows you where you lose focus or when you work best. Cross-examination of your habits."
              />
              <FeatureCard
                icon={<Lock className="h-8 w-8" />}
                title="Private by Default"
                description="All tracking is local and designed for your eyes first. Attorney-client privilege."
              />
              <div className="flex h-full items-center justify-center rounded-lg border bg-gradient-to-br from-amber-500/10 to-amber-700/10 p-8">
                <div className="text-center">
                  <h3 className="text-xl font-serif font-bold">And More...</h3>
                  <p className="mt-2 text-muted-foreground">New evidence admitted to the court weekly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700">
                  Exhibit A
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Defense Presents
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Watch how Alibi builds an airtight case for your productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl pt-12">
              <div className="relative aspect-video max-h-64 sm:max-h-none overflow-hidden rounded-xl border bg-muted shadow-xl">
                <img 
                  src="/demo-video.png" 
                  alt="Alibi dashboard showing legal case tracking with data visualizations, gavel, and legal documents"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
                  <div className="rounded-full bg-white p-4 inline-block shadow-2xl">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-20 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700">
                  Witness Testimonies
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Sworn Statements
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The following witnesses have vouched for Alibi under oath.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
              <TestimonialCard
                quote="Alibi saved me from myself. I would have billed 3 hours, but Alibi proved I deserved 5. The jury of my clients was convinced."
                author="Maya J."
                role="Freelance Designer"
              />
              <TestimonialCard
                quote="I was about to plead guilty to 'not working enough' until Alibi presented the timeline evidence. Case dismissed!"
                author="Thomas R."
                role="Content Strategist"
              />
              <TestimonialCard
                quote="Your Honor, I'd like to submit Alibi as evidence that I am, in fact, not wasting my time on Twitter. The data speaks for itself."
                author="Samantha L."
                role="Marketing Consultant"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700">
                  Retainer Fees
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Enlist Legal Counsel
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Affordable representation for your time management needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-12">
              <PricingCard
                title="Alibi Lite"
                price="Free"
                description="Basic time defense for individuals"
                features={["Basic Timeline Tracking", "5 Task Categories", "1 Week History", "Basic Reports"]}
                buttonText="Start Your Defense"
                popular={false}
              />
              <PricingCard
                title="Alibi Pro"
                price="$9.99"
                period="/month"
                description="Full representation for professionals"
                features={[
                  "Advanced Timeline Tracking",
                  "Unlimited Task Categories",
                  "Unlimited History",
                  "Client-Ready Reports",
                  "Pattern Analysis",
                  "Export to PDF/CSV",
                ]}
                buttonText="Retain Services"
                popular={true}
              />
              <PricingCard
                title="Alibi Teams"
                price="$29.99"
                period="/month"
                description="Legal team for your whole company"
                features={[
                  "Everything in Pro",
                  "Team Dashboard",
                  "Project Tracking",
                  "Admin Controls",
                  "Team Reports",
                  "API Access",
                ]}
                buttonText="Request a Hearing"
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-20 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700">
                  Cross-Examination
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Common inquiries from the jury.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl pt-12">
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Make Your Case?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The court is now in session. Don't let another billable hour go undefended.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1">
                    Begin Your Defense <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="text-xs text-muted-foreground italic border-l-2 border-muted pl-2 mt-4 max-w-md">
                * The defense would like to note that a 14-day free trial is available, no objections.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-12">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-amber-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-xl font-bold text-background">A</span>
                </div>
              </div>
              <span className="font-serif text-xl font-bold">Alibi</span>
            </div>
            <nav className="grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-4">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Evidence</h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="#features"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Case Exhibits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Retainer Fees
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Case Updates
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">The Firm</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Court Background
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Legal Briefs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Join the Bar
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Resources</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Case Files
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Court Clerk
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Cross-Examination
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:justify-between md:gap-12">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Alibi Time Defense Co. All rights reserved. Case closed.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


import Link from "next/link"
import { CodeXml } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <CodeXml className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-headline font-semibold">SD Web Solutions</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Projects
        </Link>
        <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Testimonials
        </Link>
        <Link href="#ai-tool" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          AI Tool
        </Link>
        <Button asChild>
            <Link href="#contact">Contact Me</Link>
        </Button>
      </nav>
    </header>
  )
}

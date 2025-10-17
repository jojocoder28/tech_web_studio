import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="bg-muted py-6 w-full">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tech Web Studio. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/jojocoder28" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/swarnadeep-das-0836b3221/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

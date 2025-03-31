import { Github, Mail } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl mb-8">contact</h1>
      <p className="mb-8">i'd love to hear from you. feel free to reach out through any of the channels below.</p>

      <div className="space-y-6">
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-4" />
          <Link href="mailto:your.email@example.com" className="hover:text-amber-800 transition-colors">
            ss3296@cornell.edu
          </Link>
        </div>

        <div className="flex items-center">
          <Github className="w-5 h-5 mr-4" />
          <Link
            href="https://github.com/sakshamsood04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-800 transition-colors"
          >
            github.com/yourusername
          </Link>
        </div>
      </div>
    </div>
  )
}


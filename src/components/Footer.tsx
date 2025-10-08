import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">The Chitrakar</h3>
            <p className="text-primary-foreground/80 text-sm">
              Capturing life's most precious moments with elegance and artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="/"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:hello@eternalmoments.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@eternalmoments.com
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} The Chitrakar Photography. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

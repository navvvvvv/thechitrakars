import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import { FaFacebook, FaInstagram } from 'react-icons/fa'
const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to capture your special moments? We're here to help make your
            vision come to life.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Phone Card */}
            <a
              href="tel:+1234567890"
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth border border-border hover:border-accent"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss your photography needs over the phone
              </p>
              <div className="text-accent font-semibold group-hover:underline">
                +1 (234) 567-890
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:hello@eternalmoments.com"
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth border border-border hover:border-accent"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us a detailed message about your event
              </p>
              <div className="text-accent font-semibold group-hover:underline break-all">
                hello@eternalmoments.com
              </div>
            </a>

            {/* WhatsApp/Message Card */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth border border-border hover:border-accent"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Us</h3>
              <p className="text-muted-foreground mb-4">
                Quick questions? Chat with us on WhatsApp
              </p>
              <div className="text-accent font-semibold group-hover:underline">
                Start a conversation
              </div>
            </a>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Location & Hours */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Our Studio</h3>
                  <p className="text-muted-foreground">
                    123 Photography Lane
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() =>
                      window.open('https://maps.google.com', '_blank')
                    }
                  >
                    Get Directions
                  </Button>
                </div>
              </div>

              <div className="border-t border-border pt-6 mt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between gap-8">
                        <span className="text-muted-foreground">
                          Monday - Friday
                        </span>
                        <span className="font-semibold">
                          10:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-semibold">
                          11:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-semibold">By Appointment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Additional Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <h3 className="text-xl font-bold mb-4">Follow Our Work</h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with our latest shoots and behind-the-scenes
                  content
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-accent text-primary-foreground p-4 rounded-xl hover:scale-105 transition-smooth flex items-center justify-center gap-2"
                  >
                    <FaInstagram className="h-5 w-5" />
                    <span className="font-semibold">Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary text-secondary-foreground p-4 rounded-xl hover:scale-105 transition-smooth flex items-center justify-center gap-2"
                  >
                    <FaFacebook className="h-5 w-5" />
                    <span className="font-semibold">Facebook</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-accent text-primary-foreground rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-bold mb-3">
                  Quick Response Guarantee
                </h3>
                <p className="text-primary-foreground/90">
                  We typically respond to all inquiries within 24 hours. For
                  urgent bookings, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact

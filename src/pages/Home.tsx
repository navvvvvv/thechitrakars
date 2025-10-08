import candidImage from '@/assets/candid-1.jpg'
import eventImage from '@/assets/event-1.jpg'
import heroImage from '@/assets/hero-wedding.jpg'
import preweddingImage from '@/assets/prewedding-1.jpg'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative z-10 text-center text-white px-4 fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Capturing Your
            <br />
            The Chitrakar
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Where love meets artistry. We transform your special moments into
            timeless memories.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="shadow-elegant">
              Book Your Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the beautiful stories we've had the privilege to
            capture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: preweddingImage,
              title: 'Pre-Wedding',
              desc: 'Romantic outdoor sessions'
            },
            {
              img: candidImage,
              title: 'Candid Moments',
              desc: 'Genuine emotions captured'
            },
            { img: eventImage, title: 'Events', desc: 'Elegant celebrations' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover image-hover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-serif font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We blend creativity, expertise, and passion to deliver exceptional
              photography
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Artistic Vision',
                desc: "Every shot is crafted with an artist's eye for composition, light, and emotion."
              },
              {
                title: 'Professional Experience',
                desc: "Years of capturing life's most precious moments across countless celebrations."
              },
              {
                title: 'Personalized Approach',
                desc: 'Your story is unique, and so is our approach to telling it through imagery.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card p-8 rounded-lg shadow-soft text-center"
              >
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's Create Magic Together
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Ready to preserve your precious moments? Get in touch and let's
            discuss your vision.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home

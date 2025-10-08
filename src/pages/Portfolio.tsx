import candidImage from '@/assets/candid-1.jpg'
import eventImage from '@/assets/event-1.jpg'
import heroImage from '@/assets/hero-wedding.jpg'
import preweddingImage from '@/assets/prewedding-1.jpg'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Portfolio = () => {
  // Using the same images for galleries - in production, you'd have many unique images
  const galleries = {
    wedding: [heroImage, candidImage, eventImage, heroImage],
    prewedding: [
      preweddingImage,
      preweddingImage,
      preweddingImage,
      preweddingImage
    ],
    candid: [candidImage, candidImage, candidImage, candidImage],
    events: [eventImage, eventImage, eventImage, eventImage]
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover the timeless stories we've brought to life through our
            lens.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="wedding" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="wedding">Wedding</TabsTrigger>
              <TabsTrigger value="prewedding">Pre-Wedding</TabsTrigger>
              <TabsTrigger value="candid">Candid</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            {Object.entries(galleries).map(([key, images]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-muted">
                        <img
                          src={img}
                          alt={`${key} photography ${idx + 1}`}
                          className="w-full h-full object-cover image-hover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Like what you see? Let's create something beautiful together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Portfolio

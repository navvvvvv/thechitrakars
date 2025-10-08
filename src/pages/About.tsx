import photographerImage from '@/assets/photographer.jpg'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Award, Camera, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground">
            The story behind the lens
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At The Chitrakar, photography is not just a profession—it's
                  our passion and craft. For over a decade, we have been honored
                  to document some of the most important moments in people’s
                  lives, specializing in weddings, pre-wedding shoots, and
                  milestone events.
                </p>
                <p>
                  Our journey began with a simple belief: every love story and
                  celebration deserves to be told with authenticity, creativity,
                  and heart. Through years of experience, we have refined our
                  skills to not only capture images but to tell compelling
                  stories that you and your family will cherish forever.
                </p>
                <p>
                  Whether it's the delicate anticipation before the ceremony,
                  the joyous celebration on the dance floor, or the quiet
                  intimate moments shared between couples, our team approaches
                  each shoot with sensitivity and professionalism. We understand
                  that wedding days are filled with fleeting moments that can
                  never be recreated, and we are committed to capturing them
                  with precision and artistry.
                </p>
                <p>
                  Beyond weddings, our expertise extends to pre-wedding
                  sessions, engagement shoots, anniversary celebrations, and
                  special events where capturing genuine emotion is key. We
                  blend artistic vision with technical excellence, using
                  cutting-edge equipment and innovative techniques to produce
                  timeless photographs.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={photographerImage}
                  alt="Professional Photographer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Camera,
                title: 'Creative Excellence',
                desc: 'We continuously push creative boundaries, crafting images that tell your unique story with style and emotion.'
              },
              {
                icon: Heart,
                title: 'Personalized Experience',
                desc: 'Building a genuine connection with every client allows us to create a comfortable atmosphere where natural moments shine.'
              },
              {
                icon: Award,
                title: 'Unmatched Professionalism',
                desc: 'From consultation to delivery, we prioritize punctuality, professionalism, and quality to ensure a seamless photography experience.'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="bg-muted/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg">
              At The Chitrakar, we believe the most unforgettable photographs
              come from authentic moments that unfold naturally—moments filled
              with genuine love, laughter, and emotion. Our role is to observe
              patiently and capture these moments with artistry and respect.
              <br />
              <br />
              We see photography as a collaborative process, built on trust and
              understanding, to ensure you feel comfortable and confident in
              front of the camera. Our commitment is to deliver images that not
              only look stunning but also tell your unique story in a way that
              feels personal and timeless.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About

import portfolioAquarium1 from '../assets/portfolio-aquarium-1.jpg'
import portfolioAquarium2 from '../assets/portfolio-aquarium-2.jpg'
import portfolioTerrarium1 from '../assets/portfolio-terrarium-1.jpg'
import Bubbles from './Bubbles'
const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovative Design",
      description: "Our custom aquarium designs blend artistic vision with scientific precision to create stunning aquatic environments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Premium Materials",
      description: "We use only the highest quality glass, filtration systems, and aquatic supplies for lasting beauty and performance."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Support",
      description: "Our team provides ongoing support and maintenance to ensure your aquarium thrives for years to come."
    }
  ]

  const portfolioItems = [
    {
      image: portfolioAquarium1,
      title: "Custom Living Room Aquarium",
      category: "Residential",
      description: "A stunning 200-gallon custom aquarium designed to be the centerpiece of a modern living room."
    },
    {
      image: portfolioAquarium2,
      title: "Commercial Office Installation",
      category: "Commercial",
      description: "Large-scale aquarium system for a corporate office, featuring automated maintenance and monitoring."
    },
    {
      image: portfolioTerrarium1,
      title: "Terrarium Ecosystem",
      category: "Specialty",
      description: "A unique terrarium that combines aquatic and terrestrial elements for a truly special display."
    }
  ]

  return (
    <section className=" relative overflow-hidden section-padding theme-dark-gradient">
      <Bubbles />
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-100 leading-tight">
                We Deliver
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  {" "}Exceptional Results
                </span>
              </h2>
              <p className="text-lg text-secondary-300 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction sets us apart in the aquarium industry. 
                We don't just build aquariums – we create living works of art.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: '98%', label: 'Customer Satisfaction' },
                { number: '200+', label: 'Projects Completed' },
                { number: '3+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-secondary-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Portfolio Showcase */}
          <div className="space-y-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

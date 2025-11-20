import { aboutData } from "../Data/AboutData.jsx";
import Bubbles from './Bubbles';

const About = () => {
  return (
    <section id="about" className=" relative overflow-hidden section-padding theme-dark-gradient  pb-5">
      <Bubbles />
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              {/* <div className="inline-flex items-center px-6 py-4 bg-blue-100 text-blue-800 rounded-full text-xl font-semibold">
                {aboutData.subHeading}
              </div> */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {aboutData.heading.split("Aquarium Experts")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Aquarium Experts
                </span>
              </h2>
              <p className="text-lg text-secondary-200 leading-relaxed">
                {aboutData.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {aboutData.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-200 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              {/* <button className="btn-primary">
                {aboutData.cta}
              </button> */}
            </div>
          </div>

          {/* Right Column - Image */}


          <div className="relative">
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutData.image} 
                  alt="Custom Aquarium Design" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">Custom Aquarium</p>
                  <p className="text-sm opacity-90">Professional Installation</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

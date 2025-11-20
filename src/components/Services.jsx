import portfolioAquarium1 from '../assets/portfolio-aquarium-1.jpg'
import portfolioAquarium2 from '../assets/portfolio-aquarium-2.jpg'
import portfolioTerrarium1 from '../assets/vivarium plants.jpg'
import portfolioTerrarium2 from '../assets/terrarium_plants.jpg'
import portfolioPaludarium1 from '../assets/portfolio-paludarium-1.jpg'
import portfolioVivarium1 from '../assets/palevdourium.jpg'
import Bubbles from './Bubbles';
import FadeInOnScroll from './FadeInOnScroll.jsx';
import { motion } from 'framer-motion';
const Services = () => {
  const services = [
    { title: 'Custom Aquarium Design', image: portfolioAquarium1, color: 'from-blue-500 to-blue-600', features: ['Custom Dimensions','Style Consultation','3D Design Preview','Installation Service'] },
    { title: 'Fish & Aquatic Supplies', image: portfolioAquarium2, color: 'from-cyan-500 to-cyan-600', features: ['Premium Fish Food','Filtration Systems','Lighting Solutions','Water Treatments'] },
    { title: 'Vivarium plants', image: portfolioTerrarium1, color: 'from-teal-500 to-teal-600', features: ['Strong Root System','Low to Medium Light Requirement','Sturdy & Resilient','High Humidity Tolerance'] },
    { title: 'Terrarium Plants', image: portfolioTerrarium2, color: 'from-green-500 to-green-600', features: ['Nature Aquarium Style',
    'Moisture Loving',
    'Decorative Foliage',
    'Low Light Requirement'] },
    { title: 'Aquarium Consultation', image: portfolioPaludarium1, color: 'from-indigo-500 to-indigo-600', features: ['Setup Planning','Problem Solving','Best Practices','Ongoing Support'] },
    { title: ' Paludarium plants', image: portfolioVivarium1, color: 'from-purple-500 to-purple-600', features: ['Extreme Humidity Tolerance','Moisture-Loving','Low to Medium Light','Strong Rooting or Anchoring'] },
  ]

  return (
    <section id="services" className="relative overflow-hidden section-padding theme-dark-gradient ">
      <Bubbles />
      <div className="container-custom">
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-md border border-white/10">Our Services</div> */}
          <h2 className="heading-soft text-3xl md:text-4xl lg:text-5xl mb-4">What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Offer</span></h2>
          <p className="text-soft max-w-3xl mx-auto">Everything you need to create and maintain a beautiful aquatic environment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInOnScroll key={index} delay={index * 0.05}>
              <motion.div 
                className="glass glass-hover rounded-2xl p-6 transition-all duration-300"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="w-full h-44 rounded-xl overflow-hidden mb-5">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-soft text-xl font-bold mb-3 text-white">{service.title}</h3>
                <ul className="space-y-2 mb-5">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center text-soft text-sm">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3"></span>{f}
                    </li>
                  ))}
                </ul>
                {/* <button className="btn-secondary w-full">Learn More</button> */}
              </motion.div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

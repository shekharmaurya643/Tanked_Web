import Bubbles from './Bubbles';
const Testimonials = () => {
  const testimonials = [
    { name: 'Rahul', text: 'Beautiful craftsmanship and professional installation. Our lobby aquarium is a showstopper!' },
    { name: 'Anita', text: 'Excellent maintenance service. The team is punctual and very knowledgeable.' },
    { name: 'Vikram', text: 'They designed a stunning custom tank for our cafe. Customers love it.' },
  ]

  return (
    <section id="testimonials" className="relative overflow-hidden section-padding theme-dark-gradient">
      <Bubbles />
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-md border border-white/10">Testimonials</div>
          <h2 className="heading-soft text-3xl md:text-4xl lg:text-5xl mb-4">What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Say</span></h2>
          <p className="text-soft max-w-3xl mx-auto">Real experiences from our happy customers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <p className="text-soft">“{t.text}”</p>
              <div className="mt-4 heading-soft font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

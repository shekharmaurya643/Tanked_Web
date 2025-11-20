// import { useState } from 'react'
// import bgTank from '../assets/bg tank.jpg'

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
//   const handleSubmit = (e) => { e.preventDefault(); console.log('Form submitted:', formData) }

//   const contactInfo = [
//     { title: 'Visit Our Showroom', details: 'THE HUB, PLOT NO - 346, F-1, Sector 4, Vaishali, Ghaziabad, Uttar Pradesh 201010' },
//     { title: 'Call Us', details: '+91 9211216148' },
//     { title: 'Email Us', details: 'tankedind@gmail.com' }
//   ]

//   const socialLinks = [
//     { name: 'Facebook', href: '#', icon: 'M18 2H6a4 4 0 00-4 4v12a4 4 0 004 4h6v-7H9v-3h3V9.5C12 6.74 13.79 5 16.21 5c1.07 0 1.99.08 2.26.11v2.62h-1.55c-1.22 0-1.46.58-1.46 1.43V12h3l-.39 3h-2.61v7H18a4 4 0 004-4V6a4 4 0 00-4-4z' },
//     { name: 'Instagram', href: '#', icon: 'M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm11 1a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10z' },
//     { name: 'YouTube', href: '#', icon: 'M10 15l5.19-3L10 9v6zm12-6.5v7c0 1.93-1.57 3.5-3.5 3.5h-17C1.57 19 0 17.43 0 15.5v-7C0 6.57 1.57 5 3.5 5h17C20.43 5 22 6.57 22 8.5z' }
//   ]

//   return (
//     <section id="contact" className="section-padding relative overflow-hidden theme-dark-gradient">
//       <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${bgTank})` }}></div>
//       <div className="container-custom relative z-10">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-md border border-white/10">Get In Touch</div>
//           <h2 className="heading-soft text-3xl md:text-4xl lg:text-5xl mb-4">Let's Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Dream Aquarium</span></h2>
//           <p className="text-soft max-w-3xl mx-auto">Ready to transform your space? Contact us for a free consultation.</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-10">
//           <div className="theme-panel rounded-2xl p-8">
//             <h3 className="heading-soft text-2xl font-bold mb-6">Send Us a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid md:grid-cols-2 gap-5">
//                 <input className="w-full px-4 py-3 theme-panel rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required />
//                 <input className="w-full px-4 py-3 theme-panel rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
//               </div>
//               <div className="grid md:grid-cols-2 gap-5">
//                 <input className="w-full px-4 py-3 theme-panel rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} />
//                 <select className="w-full px-4 py-3 theme-panel rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" name="service" value={formData.service} onChange={handleChange}>
//                   <option className="text-black" value="">Select a service</option>
//                   <option className="text-black" value="custom-aquarium">Custom Aquarium Design</option>
//                   <option className="text-black" value="fish-supplies">Fish & Supplies</option>
//                   <option className="text-black" value="maintenance">Maintenance</option>
//                   <option className="text-black" value="consultation">Consultation</option>
//                 </select>
//               </div>
//               <textarea className="w-full px-4 py-3 theme-panel rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" rows={5} placeholder="Tell us about your vision..." name="message" value={formData.message} onChange={handleChange} required />
//               <button type="submit" className="btn-primary w-full">Send Message</button>
//             </form>
//           </div>

//           <div className="space-y-6">
//             <div className="grid gap-4">
//               {contactInfo.map((c, i) => (
//                 <div key={i} className="theme-panel rounded-xl p-5">
//                   <div className="heading-soft text-lg font-semibold mb-1">{c.title}</div>
//                   <div className="text-soft">{c.details}</div>
//                 </div>
//               ))}
//             </div>

//             <div className="theme-panel rounded-xl p-6">
//               <div className="heading-soft text-lg font-semibold mb-4">Follow Us</div>
//               <div className="flex items-center gap-3">
//                 {socialLinks.map((s, i) => (
//                   <a key={i} href={s.href} className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-105 transition-transform" title={s.name}>
//                     <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon} /></svg>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact

import React, { useState } from 'react';
import bgTank from '../assets/bg tank.jpg';
import Bubbles from './Bubbles';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log('Form submitted:', formData); 
    // Add your form submission logic here (e.g., Netlify, EmailJS)
  };

  const contactInfo = [
    { 
      title: 'Visit Our Showroom', 
      details: 'THE HUB, PLOT NO - 346, F-1, Sector 4, Vaishali, Ghaziabad, Uttar Pradesh 201010',
      href: 'https://maps.app.goo.gl/wY6jSDE1Z2a7b8c9A' // Google Maps link
    },
    { 
      title: 'Call Us', 
      details: '+91 9211216148',
      href: 'tel:+919211216148' // Click-to-call link
    },
    { 
      title: 'Email Us', 
      details: 'tankedind@gmail.com',
      href: 'mailto:tankedind@gmail.com' // Click-to-email link
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'M18 2H6a4 4 0 00-4 4v12a4 4 0 004 4h6v-7H9v-3h3V9.5C12 6.74 13.79 5 16.21 5c1.07 0 1.99.08 2.26.11v2.62h-1.55c-1.22 0-1.46.58-1.46 1.43V12h3l-.39 3h-2.61v7H18a4 4 0 004-4V6a4 4 0 00-4-4z' },
    { name: 'Instagram', href: 'https://www.instagram.com/tanked_ind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm11 1a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10z' },
    { name: 'YouTube', href: 'https://youtube.com/@tanked_ind?si=YcqyYZcoBAY7a-qi', icon: 'M10 15l5.19-3L10 9v6zm12-6.5v7c0 1.93-1.57 3.5-3.5 3.5h-17C1.57 19 0 17.43 0 15.5v-7C0 6.57 1.57 5 3.5 5h17C20.43 5 22 6.57 22 8.5z' }
  ];

  return (
    <section id="contact" className="relative overflow-hidden section-padding theme-dark-gradient">
      <Bubbles />
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${bgTank})` }}></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-soft text-3xl md:text-4xl lg:text-5xl mb-4">Let's Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Dream Aquarium</span></h2>
          <p className="text-soft max-w-3xl mx-auto">Ready to transform your space? Contact us for a free consultation.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="theme-panel rounded-2xl p-8 h-auto"> {/* Changed h-[500px] to h-auto */}
            <h3 className="heading-soft text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input className="w-full px-4 py-3 theme-panel rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                <input className="w-full px-4 py-3 theme-panel rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input className="w-full px-4 py-3 theme-panel rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                <select className="w-full px-4 py-3 theme-panel rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" name="service" value={formData.service} onChange={handleChange}>
                  <option className="text-black" value="">Select a service</option>
                  <option className="text-black" value="custom-aquarium">Custom Aquarium Design</option>
                  <option className="text-black" value="fish-supplies">Fish & Supplies</option>
                  <option className="text-black" value="maintenance">Maintenance</option>
                  <option className="text-black" value="consultation">Consultation</option>
                </select>
              </div>
              <textarea className="w-full px-4 py-3 theme-panel rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" rows={5} placeholder="Tell us about your vision..." name="message" value={formData.message} onChange={handleChange} required />
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4">
              {contactInfo.map((c, i) => (
                <a 
                  key={i} 
                  href={c.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="theme-panel rounded-xl p-5 block hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="heading-soft text-lg font-semibold mb-1">{c.title}</div>
                  <div className="text-soft">{c.details}</div>
                </a>
              ))}
            </div>

            <div className="theme-panel rounded-xl p-6">
              <div className="heading-soft text-lg font-semibold mb-4">Follow Us</div>
              <div className="flex items-center gap-3">
                {socialLinks.map((s, i) => (
                  <a 
                    key={i} 
                    href={s.href} 
                    // --- THIS IS THE FIX ---
                    target="_blank" 
                    rel="noopener noreferrer" 
                    // --- END OF FIX ---
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-105 transition-transform" 
                    title={s.name}
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon} /></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="theme-panel rounded-xl overflow-hidden ">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.957597561845!2d77.34685807535168!3d28.63102377566504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5917411135%3A0x6335ddde32a1f0a!2sTHE%20HUB!5e0!3m2!1sen!2sin!4v1727708573212!5m2!1sen!2sin" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of The Hub"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
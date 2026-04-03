/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  ArrowRight,
  Zap,
  Users,
  Trophy,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BUSINESS_NAME = "Alpha Fitness Studio";
const PHONE_NUMBER = "9063360963";
const WHATSAPP_NUMBER = "9063360963";
const ADDRESS = "21-628/3, Suraram Main Rd, Sivalaya Nagar Colony, Suraram, Hyderabad, Telangana 500055";
const MAP_LINK = "https://maps.app.goo.gl/uxKe7YgeE5pFjHzE7";

const PROGRAMS = [
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific goals and fitness level.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Strength Training",
    description: "Build muscle and increase power with our expert-led strength programs.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "HIIT Classes",
    description: "High-intensity interval training for maximum calorie burn and cardiovascular health.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Weight Lifting",
    description: "Master the art of lifting with our comprehensive range of weights and machines.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
  },
];

const SERVICES = [
  "Zumba", "Yoga", "Aerobics", "Functional Training", "Diet Suggestions", "Cardio Machines", "Changing Room + Lockers", "AC / Fans"
];

const HOURS = [
  { day: "Mon - Thu", time: "5:30 AM – 12 PM, 5 PM – 10 PM" },
  { day: "Friday", time: "5 AM – 12 PM, 5 PM – 10 PM" },
  { day: "Saturday", time: "5 AM – 12 PM, 5 PM – 10 PM" },
  { day: "Sunday", time: "6 AM – 9 AM" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-secondary selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <Dumbbell className="text-black w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Alpha <span className="text-secondary">Fitness</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Programs', 'Membership', 'Gallery', 'Services', 'About', 'Schedule'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-white/70 hover:text-secondary transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="px-6 py-2.5 bg-secondary text-black text-sm font-bold rounded-full hover:bg-white transition-all duration-300 uppercase tracking-widest"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Programs', 'Membership', 'Gallery', 'Services', 'About', 'Schedule'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-bold text-white/90 hover:text-secondary text-left uppercase"
                >
                  {item}
                </button>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="w-full py-4 bg-secondary text-black text-center font-bold rounded-xl uppercase">Call Us</a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="w-full py-4 border border-secondary text-secondary text-center font-bold rounded-xl uppercase">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
            alt="Gym Interior" 
            className="w-full h-full object-cover scale-110 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-3 h-3" /> Suraram, Hyderabad
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 uppercase italic">
              Grow <span className="text-secondary">Stronger</span> <br /> Every Day
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-10 font-light leading-relaxed">
              Transform with confidence at Alpha Fitness Studio. Premium equipment, expert coaching, and a community that drives you to your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-secondary text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 uppercase tracking-widest"
              >
                Visit Us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 uppercase tracking-widest"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats/Trust */}
      <section className="py-12 bg-secondary text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { label: "3+ Floors Large Gym", icon: MapPin },
              { label: "Expert Coaches", icon: Trophy },
              { label: "Modern Equipment", icon: Zap },
              { label: "Flexible Plans", icon: Calendar },
              { label: "Active Community", icon: Users },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="w-6 h-6" />
                <span className="font-bold uppercase tracking-tighter text-xs md:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Membership</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase italic mb-4">Choose Your <span className="text-secondary">Plan</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">Select the perfect membership plan to achieve your fitness goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "1 Month Plan", price: "₹1,500", duration: "Per Month", features: ["Full Gym Access", "General Trainer", "Cardio & Weights"] },
              { name: "3 Months Plan", price: "₹4,000", duration: "Quarterly", features: ["Full Gym Access", "General Trainer", "Diet Suggestions", "Save ₹500"] },
              { name: "6 Months Plan", price: "₹7,500", duration: "Half Yearly", features: ["Full Gym Access", "General Trainer", "Diet Suggestions", "Save ₹1,500"] },
              { name: "12 Months Plan", price: "₹12,000", duration: "Annually", features: ["Full Gym Access", "Personalized Diet", "2 PT Sessions", "Best Value"] }
            ].map((plan, i) => (
              <div key={i} className="relative p-8 rounded-3xl border border-secondary/20 bg-black/40 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Dumbbell className="text-secondary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase italic mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-secondary">{plan.price}</span>
                  <span className="text-white/50 text-sm ml-2">/ {plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20subscribe%20to%20the%20${encodeURIComponent(plan.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-secondary text-black text-center font-bold rounded-xl uppercase tracking-widest hover:bg-white transition-colors block"
                >
                  Subscribe
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Our Programs</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase italic">Elevate Your <span className="text-secondary">Performance</span></h2>
            </div>
            <p className="max-w-md text-white/50">
              From beginner basics to advanced athletic performance, our programs are designed to push your limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((program, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden luxury-border"
              >
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-2 uppercase italic">{program.title}</h3>
                  <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Studio Gallery</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase italic mb-4">Inside <span className="text-secondary">Alpha Fitness</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">Take a look at our premium facility and equipment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "171TTHeiYSkoUlsUN47wrcBDJcD2Vde1M",
              "1xTnR3l96G8WRm2k152S7ao3lX9q-oxM-",
              "1Vyro8nzPllM7IoooNSrBxtT2XmRwk6oe",
              "1StkAD8pxQArah2q4LpKBV76fr3G4wQvP",
              "11bxrtxogx1eXQnI7kfS72I8BBVo5MN03",
              "1V7SnzH0bqRYQVMcHBJRLfzNmDVft1aPs"
            ].map((id, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="aspect-[4/5] rounded-3xl overflow-hidden luxury-border bg-white/5 shadow-2xl group"
              >
                <img 
                  src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`}
                  alt={`Gallery Image ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase italic mb-4">Studio <span className="text-secondary">Amenities</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">Everything you need for a complete and comfortable workout experience.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((service, i) => (
              <div key={i} className="p-6 bg-black/40 border border-white/5 rounded-xl flex items-center gap-4 hover:border-secondary/30 transition-colors">
                <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" />
                <span className="font-medium text-sm md:text-base">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden luxury-border">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000" 
                  alt="Trainer" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl text-black hidden md:block">
                <p className="text-4xl font-black italic leading-none">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest mt-1">Dedication</p>
              </div>
            </div>

            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">About Alpha Fitness</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase italic mb-8 leading-tight">
                More Than Just A Gym, <br /> It's A <span className="text-secondary">Lifestyle</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Alpha Fitness Studio is dedicated to helping the Suraram community transform their lives through fitness. We believe that everyone has the potential to grow stronger, and we provide the tools, environment, and expertise to make it happen.
                </p>
                <p>
                  Our facility is an expansive, multi-level training sanctuary spanning across three floors of dedicated fitness zones. From high-energy cardio decks to specialized strength floors and serene yoga spaces, we offer a truly premium environment designed for peak performance.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold text-secondary mb-1 italic">Expert</p>
                  <p className="text-xs uppercase tracking-widest text-white/50">Guidance</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary mb-1 italic">Modern</p>
                  <p className="text-xs uppercase tracking-widest text-white/50">Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase italic mb-8 leading-tight">
                Training <span className="text-secondary">Hours</span>
              </h2>
              <p className="text-white/50 mb-10">
                We offer flexible hours to fit your busy lifestyle. Start your day with an early morning session or unwind with a late-night workout.
              </p>
              <div className="space-y-4">
                {HOURS.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="font-bold uppercase tracking-widest text-sm">{item.day}</span>
                    <span className="text-secondary font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black p-10 rounded-3xl luxury-border">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Clock className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase italic">Open 7 Days</h3>
                  <p className="text-white/50 text-sm">Consistency is the key to success.</p>
                </div>
              </div>
              <p className="text-white/70 mb-8 italic">
                "The only bad workout is the one that didn't happen. Our doors are open to help you stay on track."
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 bg-secondary text-black font-bold rounded-xl uppercase tracking-widest hover:bg-white transition-colors"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Location */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase italic mb-8 leading-tight">
                Start Your <span className="text-secondary">Transformation</span> Today
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">Our Location</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{ADDRESS}</p>
                    <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="text-secondary text-xs font-bold uppercase tracking-widest mt-2 inline-flex items-center gap-1 hover:underline">
                      Get Directions <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">Call Us</h4>
                    <p className="text-white/60 text-sm">{PHONE_NUMBER}</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-secondary text-xs font-bold uppercase tracking-widest mt-2 inline-flex items-center gap-1 hover:underline">
                      Call Now <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">WhatsApp</h4>
                    <p className="text-white/60 text-sm">Chat with us for inquiries</p>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-secondary text-xs font-bold uppercase tracking-widest mt-2 inline-flex items-center gap-1 hover:underline">
                      Message Us <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold uppercase italic mb-6">Send A Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:border-secondary outline-hidden transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:border-secondary outline-hidden transition-colors" />
                </div>
                <select className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:border-secondary outline-hidden transition-colors appearance-none text-white/50">
                  <option>Select Program</option>
                  <option>Personal Training</option>
                  <option>Strength Training</option>
                  <option>HIIT Classes</option>
                  <option>General Membership</option>
                </select>
                <textarea placeholder="Your Message" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:border-secondary outline-hidden transition-colors" />
                <button className="w-full py-4 bg-secondary text-black font-bold rounded-xl uppercase tracking-widest hover:bg-white transition-colors">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-secondary text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">Ready To Transform?</h2>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
            Join Alpha Fitness Studio today and start your journey towards a stronger, healthier you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20join%20Alpha%20Fitness%20Studio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-black text-secondary font-bold rounded-full flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-lg"
            >
              <MessageSquare className="w-6 h-6" /> WhatsApp Us
            </a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-black text-black font-bold rounded-full flex items-center justify-center gap-3 hover:bg-black hover:text-secondary transition-all duration-300 uppercase tracking-widest text-lg"
            >
              <Phone className="w-6 h-6" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <Dumbbell className="text-black w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase">{BUSINESS_NAME}</span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/50 hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>

            <p className="text-white/30 text-xs uppercase tracking-widest">
              © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons (Mobile) */}
      <div className="fixed bottom-6 left-6 right-6 z-50 flex gap-3 md:hidden">
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="flex-1 bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl"
        >
          <Phone className="w-5 h-5" /> Call
        </a>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`} 
          className="flex-1 bg-secondary text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl"
        >
          <MessageSquare className="w-5 h-5" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MessageSquare, Facebook, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Construct WhatsApp message
    const messageText = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/94725510768?text=${messageText}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    toast.success("Opening WhatsApp with your message!");
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };
  
  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="text-brand-green" size={24} />,
      title: 'Email',
      value: 'graphicdesigninglk@gmail.com',
      link: 'mailto:graphicdesigninglk@gmail.com'
    },
    {
      icon: <Phone className="text-brand-green" size={24} />,
      title: 'Phone',
      value: '+94 72 551 0768',
      link: 'tel:+94725510768'
    },
    {
      icon: <MessageSquare className="text-brand-green" size={24} />,
      title: 'WhatsApp',
      value: '+94 72 551 0768',
      link: 'https://wa.me/0725510768'
    },
    {
      icon: <Facebook className="text-brand-green" size={24} />,
      title: 'Facebook',
      value: 'PATHUMSANJAYA979',
      link: 'https://web.facebook.com/PATHUMSANJAYA979/'
    },
    {
      icon: <MapPin className="text-brand-green" size={24} />,
      title: 'Location',
      value: 'Sri Lanka',
      link: null
    }
  ];
  
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-secondary to-gray-100">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Want to collaborate? Feel free to reach out.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="animate-fade-up"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="mt-1 bg-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-brand-green transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="animate-slide-in-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-brand-green transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send via WhatsApp <Send size={18} />
                  </motion.button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    This will open WhatsApp with your message pre-filled
                  </p>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

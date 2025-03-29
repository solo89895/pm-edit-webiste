import React, { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { ArrowRight, Mail, Phone, Facebook, MapPin, Loader2, Send, MessageCircle, X } from 'lucide-react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  const [loadingStates, setLoadingStates] = useState({
    facebook: false,
    instagram: false,
    telegram: false,
    whatsapp: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ type: 'user' | 'bot'; message: string }[]>([
    { type: 'bot', message: 'Hi! How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSocialClick = async (platform: keyof typeof loadingStates, url: string) => {
    setLoadingStates(prev => ({ ...prev, [platform]: true }));
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    window.open(url, '_blank');
    
    setLoadingStates(prev => ({ ...prev, [platform]: false }));
  };

  const handleEmailClick = async () => {
    try {
      setIsLoading(true);
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=pathumsanjaya979@gmail.com&su=Design%20Inquiry&body=Hello%20Pathum%2C%0A%0AI%20am%20reaching%20out%20regarding%20', '_blank');
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Failed to open email client:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Hello Pathum, I would like to discuss about design work";
    const whatsappUrl = `https://wa.me/94725510768?text=${encodeURIComponent(message)}`;
    handleSocialClick('whatsapp', whatsappUrl);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { type: 'user', message: chatMessage }]);
    const userMessage = chatMessage.toLowerCase();
    setChatMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let response = "I'm here to help! You can ask me about our design services, contact information, or how to get started with your project.";
      
      // Comprehensive keyword-based responses
      if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
        response = "Hello! 👋 I'm your design assistant. How can I help you today? Feel free to ask about our services, pricing, or how to get started!";
      } 
      // Design Services
      else if (userMessage.includes('design') || userMessage.includes('service')) {
        response = "We offer a wide range of design services including:\n• Logo Design & Brand Identity\n• Social Media Design\n• Print Design\n• Digital Illustration\n• Motion Graphics\n\nWhat type of design service are you interested in?";
      }
      // Pricing
      else if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('rate')) {
        response = "Our pricing varies based on project requirements. For a custom quote, you can:\n1. Contact us on WhatsApp (+94 72 551 0768)\n2. Email us at graphicdesigninglk@gmail.com\n3. Use our contact form\n\nWould you like me to connect you with any of these options?";
      }
      // Contact Information
      else if (userMessage.includes('contact') || userMessage.includes('reach') || userMessage.includes('talk')) {
        response = "You can reach us through:\n• WhatsApp: +94 72 551 0768\n• Email: graphicdesigninglk@gmail.com\n• Facebook: PATHUMSANJAYA979\n• Location: Sri Lanka\n\nWhat's your preferred way to connect?";
      }
      // Portfolio/Work
      else if (userMessage.includes('portfolio') || userMessage.includes('work') || userMessage.includes('example')) {
        response = "You can view our portfolio and recent work in the Design section. Would you like me to show you the link to our portfolio?";
      }
      // Timeline/Duration
      else if (userMessage.includes('time') || userMessage.includes('long') || userMessage.includes('duration')) {
        response = "Project timelines vary depending on complexity:\n• Logo Design: 3-5 days\n• Social Media Designs: 1-2 days\n• Print Design: 2-4 days\n• Complex Projects: 1-2 weeks\n\nWould you like to discuss your specific project timeline?";
      }
      // Process
      else if (userMessage.includes('process') || userMessage.includes('how') || userMessage.includes('work')) {
        response = "Our design process includes:\n1. Initial Consultation\n2. Requirements Gathering\n3. Design Concepts\n4. Revisions & Feedback\n5. Final Delivery\n\nWould you like to start with a consultation?";
      }
      // Business Hours
      else if (userMessage.includes('hour') || userMessage.includes('open') || userMessage.includes('available')) {
        response = "Our Business Hours:\n• Monday - Friday: 9:00 AM - 6:00 PM\n• Saturday: 10:00 AM - 2:00 PM\n• Sunday: Closed\n\nWe're currently accepting new projects!";
      }
      // Payment
      else if (userMessage.includes('payment') || userMessage.includes('pay') || userMessage.includes('accept')) {
        response = "We accept various payment methods including:\n• Bank Transfer\n• Online Payment\n• International Wire Transfer\n\nWould you like details about our payment process?";
      }
      // Start Project
      else if (userMessage.includes('start') || userMessage.includes('begin') || userMessage.includes('project')) {
        response = "To start your project:\n1. Share your project details via WhatsApp or email\n2. Get a custom quote\n3. Discuss timeline and requirements\n4. Make initial payment\n5. Begin the design process\n\nReady to get started?";
      }
      // Help/Support
      else if (userMessage.includes('help') || userMessage.includes('support') || userMessage.includes('assist')) {
        response = "I can help you with:\n• Design Services Information\n• Pricing Details\n• Contact Information\n• Project Timeline\n• Portfolio Access\n\nWhat specific information do you need?";
      }
      // WhatsApp
      else if (userMessage.includes('whatsapp')) {
        response = "You can reach us on WhatsApp at +94 72 551 0768. Would you like me to open WhatsApp for you?";
      }
      // Email
      else if (userMessage.includes('email') || userMessage.includes('mail')) {
        response = "Our email is graphicdesigninglk@gmail.com. Would you like me to help you compose an email?";
      }
      // Facebook
      else if (userMessage.includes('facebook') || userMessage.includes('fb')) {
        response = "You can find us on Facebook as PATHUMSANJAYA979. Would you like me to open our Facebook page?";
      }
      // Location
      else if (userMessage.includes('location') || userMessage.includes('where') || userMessage.includes('address')) {
        response = "We're based in Sri Lanka and serve clients worldwide through digital collaboration. Would you like to discuss how we can work together remotely?";
      }
      // Thank you
      else if (userMessage.includes('thank') || userMessage.includes('thanks')) {
        response = "You're welcome! 😊 Is there anything else you'd like to know about our design services?";
      }
      // Goodbye
      else if (userMessage.includes('bye') || userMessage.includes('goodbye')) {
        response = "Thank you for chatting! Feel free to return if you have more questions. Have a great day! 👋";
      }

      setChatHistory(prev => [...prev, { type: 'bot', message: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero-section')?.getBoundingClientRect();
      if (rect) {
        mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.1);
        mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <Layout>
      <section id="hero-section" className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="w-full max-w-[1400px] relative z-10 pl-2 sm:pl-4 md:pl-6 lg:pl-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
            {/* Text Content */}
            <div className="animate-fade-up order-2 md:order-1 flex flex-col items-start text-left pr-0 md:pr-8 mt-32 md:mt-44">
              <h1 className="text-5xl md:text-7xl leading-tight mb-12 -ml-1">
                Creative Design
                <br />
                <span className="text-brand-green">Excellence.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-14 max-w-[95%] md:max-w-md -ml-1">
                Crafting innovative and impactful visual experiences that elevate your brand. Clean, modern, and purposeful.
              </p>
              <div className="flex flex-col items-start gap-5 -ml-1">
                <Link 
                  to="/design" 
                  className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-brand-green transition-colors duration-300 hover:scale-105 transform"
                >
                  View My Work <ArrowRight size={20} />
                </Link>
                {/* Social Media Icons */}
                <div className="flex items-center gap-4 mt-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSocialClick('facebook', 'https://facebook.com/PATHUMSANJAYA979')}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-brand-green transition-colors duration-200 relative"
                    disabled={loadingStates.facebook}
                  >
                    {loadingStates.facebook ? (
                      <Loader2 size={22} className="text-white animate-spin" />
                    ) : (
                      <Facebook size={22} className="text-white" />
                    )}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSocialClick('instagram', 'https://instagram.com/pathum_sanjaya979')}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-brand-green transition-colors duration-200 relative"
                    disabled={loadingStates.instagram}
                  >
                    {loadingStates.instagram ? (
                      <Loader2 size={22} className="text-white animate-spin" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    )}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSocialClick('telegram', 'https://t.me/+94725510768')}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-brand-green transition-colors duration-200 relative"
                    disabled={loadingStates.telegram}
                  >
                    {loadingStates.telegram ? (
                      <Loader2 size={22} className="text-white animate-spin" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/>
                      </svg>
                    )}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsAppClick}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-brand-green transition-colors duration-200 relative group"
                    disabled={loadingStates.whatsapp}
                  >
                    {loadingStates.whatsapp ? (
                      <Loader2 size={22} className="text-white animate-spin" />
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          Message on WhatsApp
                        </span>
                      </>
                    )}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmailClick}
                    disabled={isLoading}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-brand-green transition-colors duration-200 relative"
                  >
                    {isLoading ? (
                      <Loader2 size={22} className="text-white animate-spin" />
                    ) : (
                      <Mail size={22} className="text-white" />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="animate-slide-in-right order-1 md:order-2 relative -ml-20 md:-ml-32 lg:-ml-40">
              <div className="relative group h-full flex items-center justify-center pb-0">
                {/* Base green circle background */}
                <div 
                  className="absolute top-[53%] left-1/2 w-[92%] aspect-square bg-[#39E535] rounded-full -z-10"
                  style={{
                    transform: 'translate(-50%, -47%) scale(0.92)',
                    opacity: 0.75,
                    filter: 'blur(1px)'
                  }}
                />

                {/* Large floating circles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`large-circle-${i}`}
                    className="absolute -z-10"
                    style={{
                      width: 35 + i * 10,
                      height: 35 + i * 10,
                      top: '53%',
                      left: '50%',
                      background: `rgba(57, 229, 53, ${0.35 - i * 0.05})`,
                      borderRadius: '50%',
                      transform: 'translate(-50%, -47%)',
                      boxShadow: `0 0 30px rgba(57, 229, 53, ${0.3 - i * 0.05})`
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                      x: [
                        Math.cos(i * 72 * (Math.PI / 180)) * 200,
                        Math.cos((i * 72 + 180) * (Math.PI / 180)) * 200
                      ],
                      y: [
                        Math.sin(i * 72 * (Math.PI / 180)) * 200,
                        Math.sin((i * 72 + 180) * (Math.PI / 180)) * 200
                      ]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 2
                    }}
                  />
                ))}

                {/* Image */}
                <img 
                  src="/lovable-uploads/home-portrait.png"
                  alt="Pathum Sanjaya Portrait" 
                  className="w-full h-full object-contain max-w-lg relative z-10"
                  loading="eager"
                  style={{
                    filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.08))',
                    marginBottom: 0
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Box */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-black to-gray-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-white font-medium">Design Assistant</h3>
                  <p className="text-xs text-gray-300">Online | Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="h-[460px] flex flex-col bg-gray-50">
              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth">
                {chatHistory.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                  >
                    {msg.type === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={14} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        msg.type === 'user'
                          ? 'bg-brand-green text-white rounded-br-sm'
                          : 'bg-white text-gray-800 shadow-sm rounded-bl-sm'
                      }`}
                    >
                      <p className="whitespace-pre-line text-sm">{msg.message}</p>
                      <span className="text-[10px] mt-1 block opacity-70">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    {msg.type === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center">
                      <MessageCircle size={14} className="text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm">
                      <div className="flex gap-1">
                        <motion.span 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-brand-green rounded-full"
                        />
                        <motion.span 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-brand-green rounded-full"
                        />
                        <motion.span 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-brand-green rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-gray-100">
                <form onSubmit={handleChatSubmit} className="relative">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none bg-gray-50 placeholder-gray-400 text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-green text-white p-2 rounded-lg hover:bg-black transition-colors duration-200"
                  >
                    <Send size={18} />
                  </button>
                </form>
                <div className="mt-2 flex gap-2 justify-center">
                  <button 
                    onClick={() => setChatMessage("What design services do you offer?")}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => setChatMessage("How much do your services cost?")}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  >
                    Pricing
                  </button>
                  <button 
                    onClick={() => setChatMessage("How can I contact you?")}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsChatOpen(prev => !prev)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-black rounded-full flex items-center justify-center hover:bg-brand-green transition-colors duration-200 shadow-lg z-50 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} className="text-white" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">1</span>
        <span className="absolute -top-12 right-0 bg-black text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Chat with us!
        </span>
      </motion.button>

    </Layout>
  );
};

export default Index;

import React, { useState, useEffect } from 'react';
import { Play, Mic, Book, Users, Gift, ChevronRight, ArrowRight, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import { NavLink, MobileNavLink } from './components/Navigation';
import { FeatureCard } from './components/FeatureCard';
import { StepCard } from './components/StepCard';
import { PricingCard } from './components/PricingCard';
import { DemoConversation } from './components/DemoConversation';
import { VoiceDemo } from './components/VoiceDemo';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(null);

  // Handle scroll events for navbar animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample conversation demo data
  const demoConversations = [
    {
      question: "What was your childhood like?",
      answer: "Growing up in the 1960s was quite different from today. We spent most of our time outdoors, playing with neighbors and creating our own adventures. There weren't any video games or smartphones – we made our own fun."
    },
    {
      question: "Tell me about your first job",
      answer: "My first job was at a local diner when I was 16. I learned so much about responsibility and hard work. The owner, Mrs. Johnson, became a mentor to me and taught me valuable lessons about customer service and business."
    },
    {
      question: "What's your best life advice?",
      answer: "Always stay curious and never stop learning. The world is full of opportunities if you keep an open mind. And remember, it's never too late to start something new – I started my own business at 45!"
    }
  ];

  const features = [
    {
      icon: <Mic className="h-8 w-8 text-indigo-600" />,
      title: "Voice Capture",
      description: "Record your stories and memories through our easy-to-use app or with help from our memoir assistants."
    },
    {
      icon: <Play className="h-8 w-8 text-indigo-600" />,
      title: "Interactive Playback",
      description: "Ask questions and hear personalized responses in your loved one's voice."
    },
    {
      icon: <Book className="h-8 w-8 text-indigo-600" />,
      title: "AI Enhancement",
      description: "Our AI technology adds context and makes conversations feel natural and engaging."
    }
  ];

  const plans = [
    {
      tier: "Basic",
      price: "$99",
      features: [
        "5 hours of voice recording",
        "Basic AI integration",
        "Mobile app access",
        "1 year of storage"
      ]
    },
    {
      tier: "Premium",
      price: "$199",
      features: [
        "15 hours of voice recording",
        "Advanced AI integration",
        "Priority support",
        "Unlimited storage"
      ],
      highlighted: true
    },
    {
      tier: "Legacy",
      price: "$399",
      features: [
        "Unlimited recording",
        "Premium AI features",
        "Personal memoir assistant",
        "Family collaboration tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.nav
        className="fixed w-full z-50 bg-white"
        initial={{ y: 0 }}
        animate={{
          y: 0,
          boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold text-indigo-600">EchoMemoir</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how-it-works">How It Works</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <motion.button
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>
                  Features
                </MobileNavLink>
                <MobileNavLink href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
                  How It Works
                </MobileNavLink>
                <MobileNavLink href="#pricing" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </MobileNavLink>
                <motion.button
                  className="w-full text-left block px-3 py-2 text-base font-medium text-white bg-indigo-600 rounded-md"
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <div className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Preserve Your Voice, Share Your Story
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Create interactive, AI-powered audio memoirs that let future generations
              connect with their heritage through real conversations.
            </p>
            <motion.div
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 inline-flex items-center">
                Start Your Memoir
                <ChevronRight className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Try It Out
          </motion.h2>

          {/* Voice Recording Demo */}
          <VoiceDemo />

          {/* Sample Conversations */}
          <motion.h3
            className="text-2xl font-semibold text-center mt-20 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sample Conversations
          </motion.h3>
          <DemoConversation
            conversations={demoConversations}
            activeDemo={activeDemo}
            setActiveDemo={setActiveDemo}
          />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Record Your Stories"
              description="Use our app to record your memories or schedule sessions with our memoir assistants."
            />
            <StepCard
              number="2"
              title="AI Processing"
              description="Our AI organizes and enhances your recordings for interactive conversations."
            />
            <StepCard
              number="3"
              title="Share & Connect"
              description="Family members can interact with your stories through voice commands or our app."
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Choose Your Plan
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EchoMemoir</h3>
              <p className="text-gray-400">Preserving voices, connecting generations.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
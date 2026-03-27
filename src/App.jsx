import { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  User, 
  ShoppingCart, 
  MessageCircle,
  Shield,
  Truck,
  CreditCard,
  MapPin,
  Star,
  Sparkles
} from 'lucide-react'
import products from './data/products.json'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppOrder = (product) => {
    const message = `Hello KDX Premier Retail! I wish to purchase the ${product.name} for Rs. ${product.price}. Please guide me through the next steps for my order.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/94700000000?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const FloatingButton = ({ children, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={`relative group transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_30px_rgba(238,0,0,0.6)] ${className}`}
      style={{
        transform: 'translateZ(0)', // Force GPU acceleration
        willChange: 'transform, box-shadow'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-kdx-red/20 to-transparent rounded-lg blur-sm group-hover:from-kdx-red/40 transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-kdx-red to-red-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg border border-kdx-red/30">
        {children}
      </div>
    </button>
  )

  return (
    <div className="min-h-screen bg-kdx-bg text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-kdx-red/20 shadow-[0_10px_30px_rgba(238,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4 group">
              <div className="text-2xl font-bold bg-gradient-to-r from-kdx-red via-red-500 to-red-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                KDX
              </div>
              <div className="w-2 h-2 bg-kdx-red rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <span className="text-gray-400 text-sm font-light tracking-wider">PREMIER RETAIL</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white hover:text-kdx-red transition-all duration-300 text-sm tracking-wide">Home</a>
              <a href="#collection" className="text-gray-300 hover:text-white hover:text-kdx-red transition-all duration-300 text-sm tracking-wide">Collection</a>
              <a href="#excellence" className="text-gray-300 hover:text-white hover:text-kdx-red transition-all duration-300 text-sm tracking-wide">Excellence</a>
              <a href="#contact" className="text-gray-300 hover:text-white hover:text-kdx-red transition-all duration-300 text-sm tracking-wide">Contact</a>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-kdx-glass-hover rounded-full transition-all duration-300 group">
                <User size={24} className="text-gray-400 group-hover:text-white transition-colors" />
              </button>
              <div className="relative">
                <button className="p-2 hover:bg-kdx-glass-hover rounded-full transition-all duration-300 group">
                  <ShoppingCart size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-kdx-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-kdx-red/20 py-4 animate-fade-slide-up">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-300 hover:text-kdx-red transition-colors py-2 text-lg">Home</a>
                <a href="#collection" className="text-gray-300 hover:text-kdx-red transition-colors py-2 text-lg">Collection</a>
                <a href="#excellence" className="text-gray-300 hover:text-kdx-red transition-colors py-2 text-lg">Excellence</a>
                <a href="#contact" className="text-gray-300 hover:text-kdx-red transition-colors py-2 text-lg">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" data-animate className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-kdx-red/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(238,0,0,0.15),transparent_50%)] pointer-events-none"></div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <Sparkles size={48} className="mx-auto text-kdx-red animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-kdx-red via-red-500 to-red-400 bg-clip-text text-transparent">
              Elevate Your Lifestyle.
            </span>
            <br />
            <span className="font-serif text-white">KDX Premier Retail.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Curated Excellence. Fast Islandwide & Tourist Zone Delivery. Direct to Your Door.
          </p>
          <div className="space-x-6">
            <FloatingButton onClick={() => document.getElementById('collection').scrollIntoView({ behavior: 'smooth' })}>
              Explore Collection
            </FloatingButton>
            <button className="relative group transition-all duration-500 ease-out hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-kdx-red/10 to-transparent rounded-lg blur-sm group-hover:via-kdx-red/20 transition-all duration-500"></div>
              <div className="relative border-2 border-kdx-red/30 text-kdx-red px-8 py-4 rounded-lg font-semibold hover:bg-kdx-red hover:text-white transition-all duration-500">
                View Excellence
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Curated Collection */}
      <section id="collection" data-animate className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.collection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Curated Collection</h2>
            <p className="text-gray-400 text-lg">Hand-selected pieces for the discerning individual</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: 'translateZ(0)', // Force GPU acceleration
                  willChange: 'transform'
                }}
              >
                <div className="relative glass-card overflow-hidden rounded-2xl group-hover:scale-[1.02] transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(238,0,0,0.3)]">
                  {/* Floating Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-kdx-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={`${product.name} - ${product.description}`}
                      loading="lazy"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-kdx-red/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {product.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                      <Star size={20} className="text-yellow-400" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-kdx-red transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-kdx-red">{product.price}</span>
                      <div className="flex items-center space-x-2 text-kdx-red">
                        <MessageCircle size={20} />
                        <span className="text-sm">WhatsApp Order</span>
                      </div>
                    </div>
                    
                    <FloatingButton 
                      onClick={() => handleWhatsAppOrder(product)}
                      className="w-full"
                    >
                      Order Premium Edition
                    </FloatingButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Banner */}
      <section id="excellence" data-animate className="py-20 bg-gradient-to-r from-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.excellence ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Excellence Guaranteed</h2>
            <p className="text-gray-400">Our commitment to premium service and quality</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center group hover:scale-[1.02] transition-all duration-500 ease-out">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-kdx-red/20 rounded-full blur-xl group-hover:bg-kdx-red/40 transition-colors duration-500"></div>
                <Truck size={48} className="mx-auto text-kdx-red relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Islandwide White-Glove Delivery</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium handling and fast delivery across Sri Lanka. 
                Your items arrive in pristine condition, every time.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center group hover:scale-[1.02] transition-all duration-500 ease-out">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-kdx-red/20 rounded-full blur-xl group-hover:bg-kdx-red/40 transition-colors duration-500"></div>
                <Shield size={48} className="mx-auto text-kdx-red relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">100% Secure Payments</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bank transfers processed through secure channels. 
                Your financial safety is our highest priority.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center group hover:scale-[1.02] transition-all duration-500 ease-out">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-kdx-red/20 rounded-full blur-xl group-hover:bg-kdx-red/40 transition-colors duration-500"></div>
                <CreditCard size={48} className="mx-auto text-kdx-red relative z-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Curated Quality Guarantee</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every product hand-selected for excellence. 
                We stand behind the quality of every item we offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready for Excellence?</h2>
            <p className="text-gray-400 text-lg mb-12">
              Contact us via WhatsApp for personalized assistance and premium ordering experience
            </p>
            
            <div className="glass-card p-12 hover:scale-[1.02] transition-all duration-500 ease-out">
              <div className="flex items-center justify-center space-x-6 mb-8">
                <MessageCircle size={48} className="text-kdx-red animate-pulse" />
                <div className="text-left">
                  <div className="text-3xl font-bold">+94 70 000 0000</div>
                  <div className="text-gray-400 text-sm">Available 24/7</div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 text-lg">
                Our concierge team is ready to assist with your premium selections
              </p>
              <FloatingButton>
                Chat on WhatsApp
              </FloatingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-kdx-red/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 group">
              <div className="text-2xl font-bold bg-gradient-to-r from-kdx-red via-red-500 to-red-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                KDX
              </div>
              <div className="w-2 h-2 bg-kdx-red rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              <span className="text-gray-400 font-light tracking-wider">PREMIER RETAIL</span>
            </div>
            <div className="text-gray-500 text-sm">
              A Legacy of Premier Service. Since 2026.
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <MapPin size={20} />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
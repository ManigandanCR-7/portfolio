function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white header-shadow' : 'bg-transparent'}`} data-id="ecyij87c3" data-path="js/components/Header.js">
      <div className="blog-container py-4" data-id="rhxplr3ye" data-path="js/components/Header.js">
        <div className="flex items-center justify-between" data-id="in1xbnnh7" data-path="js/components/Header.js">
          <div className="flex items-center" data-id="frbl4330d" data-path="js/components/Header.js">
            <h1 className="text-2xl font-bold text-serene-600" data-id="jygmovpfp" data-path="js/components/Header.js">
              <span className="gradient-text" data-id="84errzzqv" data-path="js/components/Header.js">Portfolio</span>Space
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8" data-id="md96aprs7" data-path="js/components/Header.js">
            <a href="#" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="988ctauk1" data-path="js/components/Header.js">Home</a>
            <a href="#projects" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="w0l1tae27" data-path="js/components/Header.js">Projects</a>
            <a href="#skills" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="i8wmuhjj0" data-path="js/components/Header.js">Skills</a>
            <a href="#about" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="rj3xgihcv" data-path="js/components/Header.js">About</a>
            <a href="#contact" className="nav-link text-gray-700 hover:text-serene-500 transition-all" data-id="7ww3q9y8e" data-path="js/components/Header.js">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4" data-id="mj9dbara1" data-path="js/components/Header.js">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-serene-100 text-serene-600 hover:bg-serene-200 transition-all" data-id="z2z2780b4" data-path="js/components/Header.js">
              <i className="fas fa-search" data-id="23v7d5a0e" data-path="js/components/Header.js"></i>
            </button>
            
            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)} data-id="0qlanqgb1" data-path="js/components/Header.js">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} data-id="4rwa3kop3" data-path="js/components/Header.js"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen &&
        <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg" data-id="pdblcb3zm" data-path="js/components/Header.js">
            <nav className="flex flex-col space-y-4 px-4" data-id="w5hk0rb0c" data-path="js/components/Header.js">
              <a href="#" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="4vudbp8os" data-path="js/components/Header.js">Home</a>
              <a href="#projects" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="u0urj4dla" data-path="js/components/Header.js">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="pn6si2tel" data-path="js/components/Header.js">Skills</a>
              <a href="#about" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="dxr6fhe03" data-path="js/components/Header.js">About</a>
              <a href="#contact" className="text-gray-700 hover:text-serene-500 transition-all py-2" data-id="nnzxvyq3z" data-path="js/components/Header.js">Contact</a>
              <div className="pt-2 pb-1 border-t border-gray-100" data-id="o479r0rmf" data-path="js/components/Header.js">
                <button className="flex items-center text-serene-600 hover:text-serene-700 transition-all" data-id="ahrogb4n3" data-path="js/components/Header.js">
                  <i className="fas fa-search mr-2" data-id="fmv69o8we" data-path="js/components/Header.js"></i> Search
                </button>
              </div>
            </nav>
          </div>
        }
      </div>
    </header>);

}
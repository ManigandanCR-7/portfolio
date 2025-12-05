function Hero() {
  return (
    <section id="home" className="hero-bg py-16 md:py-24" data-id="adp9j9mm7" data-path="js/components/Hero.js">

      <div className="blog-container" data-id="hnwes9956" data-path="js/components/Hero.js">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-id="f4bcikiux" data-path="js/components/Hero.js">

          {/* LEFT SIDE */}
          <div className="fade-in" data-id="2q34s3ztm" data-path="js/components/Hero.js">
            <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-6" data-id="hn0kmi5vx" data-path="js/components/Hero.js">
              Hello, I'm Manigandan
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-id="xhvt6a67u" data-path="js/components/Hero.js">
              Creative <span className="gradient-text" data-id="ha07sb08t" data-path="js/components/Hero.js">Developer</span> & Designer
            </h1>
            
            <p className="text-gray-600 text-lg mb-8" data-id="o479iw8qs" data-path="js/components/Hero.js">
              I got Expertized in creating beautiful, functional websites and Webapps
              with a focus on user experience and modern UX designs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4" data-id="1f8e26evq" data-path="js/components/Hero.js">
              
              {/* DOWNLOAD RESUME BUTTON */}
              <a
                href="B Manigandan - Resume .pdf"
                download="B Manigandan - Resume .pdf"
                className="px-6 py-3 bg-transparent border-2 border-serene-300 text-serene-700 rounded-lg hover:bg-serene-50 transition-all flex items-center justify-center cursor-pointer"
                data-id="xxc4uovef"
              >
                <i className="fas fa-download mr-2" data-id="6p9x5zk4m"></i>
                Download Resume
              </a>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE CARD */}
          <div className="fade-in" style={{ animationDelay: '0.3s' }} data-id="24x3zznho">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-500" data-id="14sv9ttua">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Professional developer"
                className="w-full h-[400px] object-cover"
                data-id="sf9vpjms8"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white" data-id="anhov8zl3">
                <h3 className="text-xl font-semibold mb-2" data-id="fqrbmt974">Creative Solutions</h3>
                <p className="text-white/80" data-id="4vug1krer">Transforming ideas into exceptional digital experiences</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-lg transform hover:rotate-12 transition-all cursor-pointer" data-id="wjagub1dv">
                <i className="fas fa-heart text-serene-500" data-id="25h9eucah"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;





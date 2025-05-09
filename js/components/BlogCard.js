function BlogCard({ post, delay = 0 }) {
  return (
    <div
      className="blog-card bg-white fade-in"
      style={{ animationDelay: `${delay}s` }} data-id="c2emqddvg" data-path="js/components/BlogCard.js">

      <div className="blog-card-image" data-id="c2atfvxyq" data-path="js/components/BlogCard.js">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover" data-id="g8fk664ky" data-path="js/components/BlogCard.js" />

      </div>
      
      <div className="blog-card-content" data-id="uuts4jcw7" data-path="js/components/BlogCard.js">
        <div className="flex flex-wrap mb-3" data-id="9i3g19ep5" data-path="js/components/BlogCard.js">
          {post.tags.map((tag, index) =>
          <span
            key={index}
            className="blog-tag bg-serene-50 text-serene-700" data-id="drsobbjf4" data-path="js/components/BlogCard.js">

              {tag}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2 hover:text-serene-600 transition-all" data-id="bjz1q7n9k" data-path="js/components/BlogCard.js">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4" data-id="hxg4burwb" data-path="js/components/BlogCard.js">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between" data-id="1wplnut0j" data-path="js/components/BlogCard.js">
          <div className="flex items-center" data-id="6h0ka0is1" data-path="js/components/BlogCard.js">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover mr-3" data-id="lr00h89fn" data-path="js/components/BlogCard.js" />

            <div data-id="b4ojvuoc5" data-path="js/components/BlogCard.js">
              <p className="text-sm font-medium" data-id="igji1pa3u" data-path="js/components/BlogCard.js">{post.author.name}</p>
              <p className="text-xs text-gray-500" data-id="si19l8q92" data-path="js/components/BlogCard.js">{post.date}</p>
            </div>
          </div>
          
          <button className="flex items-center text-serene-600 hover:text-serene-700 transition-all" data-id="5p0i1bfj2" data-path="js/components/BlogCard.js">
            <span className="mr-1 text-sm font-medium custom-underline" data-id="qjleqt298" data-path="js/components/BlogCard.js">Read More</span>
            <i className="fas fa-arrow-right text-xs" data-id="6dahpgecc" data-path="js/components/BlogCard.js"></i>
          </button>
        </div>
      </div>
    </div>);

}

function BlogPosts() {
  const blogPosts = [
  {
    id: 1,
    title: "The Art of Mindful Living",
    excerpt: "Discover how practicing mindfulness can transform your daily life and increase your overall well-being.",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Mindfulness", "Lifestyle"],
    date: "May 15, 2023",
    author: {
      name: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 2,
    title: "Embracing Simplicity in a Complex World",
    excerpt: "Learn how the philosophy of minimalism can help you find clarity and purpose in today's overwhelming environment.",
    image: "https://images.unsplash.com/photo-1448318440207-ef1893eb8ac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2VyZW5lJTIwYW5kJTIwbWluaW1hbGlzdGljJTIwaW1hZ2UlMjBzaG93Y2FzaW5nJTIwYSUyMGNhbG0lMjBhbmQlMjBwZWFjZWZ1bCUyMGVudmlyb25tZW50JTJDJTIwZW1waGFzaXppbmclMjBzaW1wbGljaXR5JTIwYW5kJTIwY2xhcml0eS58ZW58MHx8fHwxNzQ2NDI0NzMyfDA&ixlib=rb-4.0.3&q=80&w=200$w=800",
    tags: ["Minimalism", "Philosophy"],
    date: "June 2, 2023",
    author: {
      name: "David Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: 3,
    title: "The Healing Power of Forest Bathing",
    excerpt: "Explore the Japanese practice of Shinrin-yoku and how immersing yourself in nature can reduce stress and boost immunity.",
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Nature", "Wellness"],
    date: "July 10, 2023",
    author: {
      name: "Sophia Kim",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  },
  {
    id: 4,
    title: "Cultivating a Sustainable Garden Sanctuary",
    excerpt: "Transform your outdoor space into a sustainable haven that nurtures both you and the environment.",
    image: "https://images.unsplash.com/photo-1460533893735-45cea2212645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2VyZW5lJTIwYW5kJTIwc3VzdGFpbmFibGUlMjBnYXJkZW4lMjBzYW5jdHVhcnklMjB3aXRoJTIwbHVzaCUyMGdyZWVuZXJ5JTIwYW5kJTIwYSUyMHBlYWNlZnVsJTIwYW1iaWFuY2UufGVufDB8fHx8MTc0NjQyNDczNHww&ixlib=rb-4.0.3&q=80&w=200$w=800",
    tags: ["Gardening", "Sustainability"],
    date: "August 18, 2023",
    author: {
      name: "Miguel Santos",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  },
  {
    id: 5,
    title: "The Gentle Path to Self-Discovery",
    excerpt: "Journey inward with reflective practices that help you connect with your authentic self and live with intention.",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Self-Care", "Personal Growth"],
    date: "September 5, 2023",
    author: {
      name: "Olivia Thompson",
      avatar: "https://randomuser.me/api/portraits/women/24.jpg"
    }
  }];


  return (
    <section id="articles" className="py-16 bg-serene-50/50" data-id="un3ypcbqg" data-path="js/components/BlogCard.js">
      <div className="blog-container" data-id="ukx3oiqdn" data-path="js/components/BlogCard.js">
        <div className="text-center mb-12" data-id="6tpge7f8q" data-path="js/components/BlogCard.js">
          <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-4" data-id="9hukmgm8j" data-path="js/components/BlogCard.js">
            Our Articles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="g6dshhra1" data-path="js/components/BlogCard.js">Latest From The Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="ljny579i0" data-path="js/components/BlogCard.js">
            Dive into our collection of thoughtful articles on mindfulness, sustainability,
            and finding harmony in today's fast-paced world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="u6ntuo3km" data-path="js/components/BlogCard.js">
          {blogPosts.map((post, index) =>
          <BlogCard key={post.id} post={post} delay={0.1 * index} />
          )}
        </div>
        
        <div className="text-center mt-12" data-id="ilmed52cp" data-path="js/components/BlogCard.js">
          <button className="px-8 py-3 bg-white border-2 border-serene-300 text-serene-700 rounded-lg hover:bg-serene-50 transition-all" data-id="cvnnjqb3x" data-path="js/components/BlogCard.js">
            View All Articles
            <i className="fas fa-long-arrow-alt-right ml-2" data-id="y8fzbzrnz" data-path="js/components/BlogCard.js"></i>
          </button>
        </div>
      </div>
    </section>);

}
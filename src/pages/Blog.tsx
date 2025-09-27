import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI in Professional Training",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we approach skill development and career advancement in 2024.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "/api/placeholder/800/400"
  };

  const posts = [
    {
      title: "10 Essential Soft Skills Every Professional Needs",
      excerpt: "Discover the critical interpersonal skills that can accelerate your career growth and improve workplace relationships.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "5 min read",
      category: "Career Development",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Digital Marketing Trends to Watch in 2024",
      excerpt: "Stay ahead of the curve with these emerging digital marketing strategies and technologies.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Digital Marketing",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Building Effective Remote Teams",
      excerpt: "Practical strategies for managing and leading distributed teams in the modern workplace.",
      author: "David Park",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Leadership",
      image: "/api/placeholder/400/250"
    },
    {
      title: "The Rise of No-Code Development",
      excerpt: "How no-code platforms are democratizing software development and what it means for businesses.",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Technology",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Mastering Prompt Engineering for Business",
      excerpt: "Learn how to leverage AI tools effectively to boost productivity and automate routine tasks.",
      author: "Alex Thompson",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "AI & Innovation",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Corporate Training ROI: Measuring Success",
      excerpt: "How to quantify the impact of employee training programs and demonstrate value to stakeholders.",
      author: "Jennifer Kim",
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "Corporate Training",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    "All", "Career Development", "Digital Marketing", "Technology", 
    "Leadership", "AI & Innovation", "Corporate Training"
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog & Insights | ABHIDH Group</title>
        <meta name="description" content="Stay updated with the latest trends in education, technology, and business growth through our expert insights and practical guides." />
      </Helmet>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24" style={{ backgroundColor: '#1A1F71' }}>
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 drop-shadow-xl">
                Blog & Insights
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Stay updated with the latest trends in education, technology, and business growth through our expert insights and practical guides.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="bg-gradient-card shadow-elegant border-0 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <div className="bg-muted h-full flex items-center justify-center">
                    <span className="text-muted-foreground">Featured Image</span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {featuredPost.author} • {featuredPost.readTime}
                    </div>
                    <Link 
                      to="#" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === "All" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="bg-gradient-card shadow-elegant border-0 overflow-hidden group hover:shadow-hover transition-all duration-300">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Article Image</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <Link 
                      to="#" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mt-4 text-sm"
                    >
                      Read Article
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 bg-gradient-primary">
          <div className="container text-center">
            <div className="text-white max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Subscribe to our newsletter and never miss the latest insights on career development, technology trends, and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 bg-white/10 backdrop-blur text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
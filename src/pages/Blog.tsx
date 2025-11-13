import React, { useState, useEffect } from 'react';
import { Container } from '../styles/GlobalStyles';
import {
  BlogWrapper,
  BlogHeader,
  BlogTitle,
  BlogSubtitle,
  BlogContent,
  FeaturedPost,
  FeaturedImage,
  FeaturedContent,
  FeaturedTitle,
  FeaturedExcerpt,
  FeaturedMeta,
  PostsGrid,
  BlogPost,
  PostImage,
  PostContent,
  PostTitle,
  PostExcerpt,
  PostMeta,
  AuthorInfo,
  AuthorAvatar,
  AuthorDetails,
  AuthorName,
  PostDate,
  CategoryTag,
  SearchSection,
  SearchInput,
  FilterButtons,
  FilterButton,
  LoadMoreButton,
  SidebarSection,
  SidebarTitle,
  PopularPosts,
  PopularPost,
  PopularPostTitle,
  NewsletterSignup,
  NewsletterTitle,
  NewsletterInput,
  NewsletterButton,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalImage,
  ModalBody,
  ModalTitle,
  ModalMeta,
  ModalAuthor,
  ModalAuthorAvatar,
  ModalAuthorInfo,
  ModalAuthorName,
  ModalPostDate,
  ModalCategoryTag,
  ModalContent_Text,
  ClickablePost,
  ClickableFeaturedPost
} from '../styles/pages/BlogStyles';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  comingSoon?: boolean;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPostData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'English Basics', 'Writing Skills', 'Grammar Tips', 'Course Updates', 'Learning Tips', 'English Tutorials'];

  const blogPosts: BlogPostData[] = [
    {
      id: 1,
      title: "English Writing for Beginners: Your Complete Learning Roadmap 2025",
      excerpt: "Start your English learning journey with confidence. This comprehensive guide covers everything from basic writing principles to advanced grammar techniques, with hands-on exercises and study advice.",
      content: "English writing has become one of the most sought-after skills, and for good reason. In this comprehensive guide, we'll walk you through everything you need to know to master professional English writing and grammar...",
      image: "/images/img_1.jpg",
      author: "English E-Courses Team",
      date: "October 1, 2025",
      category: "English Basics",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Writing Basics vs Grammar: Choosing the Right English Learning Approach",
      excerpt: "Confused about which skill to learn first? We break down the differences between writing fundamentals and grammar rules to help you make the right choice for your English learning journey.",
      content: "Choosing the right English learning approach is crucial for your language development. This comprehensive comparison will help you understand when to focus on writing basics vs grammar...",
      image: "/images/img_2.jpg",
      author: "English E-Courses Team",
      date: "September 28, 2025",
      category: "English Basics",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "New Course Launch: Complete English Writing Mastery",
      excerpt: "We're excited to announce our latest advanced course covering advanced grammar, essay writing, professional communication techniques, and comprehensive English language portfolio development.",
      content: "Our newest course takes you deep into the art of English writing, covering everything from fundamental grammar principles to advanced composition techniques...",
      image: "/images/img_3.jpg",
      author: "English E-Courses Team",
      date: "September 26, 2025",
      category: "Course Updates",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Top 10 English Learning Tools Every Student Should Know in 2025",
      excerpt: "Stay ahead with the most essential English learning tools of 2025. From grammar checkers to writing apps, discover the tools that's driving modern English language success.",
      content: "The English learning ecosystem is constantly evolving in 2025. Here are the ten most important learning tools that every English student should master...",
      image: "/images/img_4.jpg",
      author: "English E-Courses Team",
      date: "September 25, 2025",
      category: "English Basics",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Student Success Story: From Beginner to Fluent English Writer in 4 Months",
      excerpt: "Meet Sarah Johnson, who transformed her writing skills from basic to professional through our comprehensive English language course program. Learn about her inspiring learning journey.",
      content: "Sarah's story proves that with dedication and the right education, anyone can master professional English writing. Here's how she made the language transition...",
      image: "/images/img_5.jpg",
      author: "English E-Courses Team",
      date: "September 23, 2025",
      category: "Learning Tips",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Creating Your First English Writing Portfolio: Complete Tutorial",
      excerpt: "Ready to build your first professional writing portfolio? This step-by-step tutorial walks you through creating a complete essay collection from concept to final draft.",
      content: "Nothing beats learning by doing. In this practical tutorial, we'll build a complete English writing portfolio together, covering every step from initial brainstorming to final editing...",
      image: "/images/img_6.jpg",
      author: "English E-Courses Team",
      date: "September 22, 2025",
      category: "English Tutorials",
      readTime: "15 min read"
    },
    {
      id: 7,
      title: "English Writing Best Practices: Creating Clear and Effective Communication",
      excerpt: "Learn the essential principles of creating clear, effective, and professional written communication. Master grammar standards, writing workflow optimization, and professional English writing practices.",
      content: "Creating professional English writing is an art form itself. As your writing projects grow, following best practices becomes crucial for clarity and impact development...",
      image: "/images/img_7.jpg",
      author: "English E-Courses Team",
      date: "September 21, 2025",
      category: "English Basics",
      readTime: "9 min read"
    },
    {
      id: 8,
      title: "Grammar Fundamentals: From Nouns to Verbs and Beyond",
      excerpt: "Dive into the powerful world of English grammar. Master parts of speech, sentence structure, and language patterns in this comprehensive guide to grammar essentials.",
      content: "Grammar fundamentals are the foundation of modern English communication. Learn how to transform simple sentences into clear, effective writing that engages and informs...",
      image: "/images/img_8.jpg",
      author: "English E-Courses Team",
      date: "September 20, 2025",
      category: "Writing Skills",
      readTime: "11 min read"
    },
    {
      id: 9,
      title: "English Writing Workflow: Streamline Your Writing Process",
      excerpt: "Discover how optimized writing workflows can transform your productivity. Learn professional techniques for brainstorming, drafting, editing, and revision optimization.",
      content: "Writing workflow optimization can transform your output. From efficient planning techniques to advanced editing strategies, professional workflows can elevate your writing...",
      image: "/images/img_1.jpg",
      author: "English E-Courses Team",
      date: "September 20, 2025",
      category: "English Tutorials",
      readTime: "13 min read"
    },
    {
      id: 10,
      title: "🌟 Coming Soon: Advanced English Composition & Academic Writing Mastery",
      excerpt: "We're preparing an exclusive deep-dive into advanced English composition, essay techniques, academic writing, and professional-level communication tactics. Stay tuned for expert insights on professional English writing.",
      content: "This exciting new article is currently in development and will be published soon...",
      image: "/images/img_2.jpg",
      author: "English E-Courses Team",
      date: "Coming Soon",
      category: "Grammar Tips",
      readTime: "Coming Soon",
      comingSoon: true
    }
  ];

  const popularPosts = [
    { id: 1, title: "English Writing for Beginners: Complete Roadmap", readTime: "8 min" },
    { id: 2, title: "Writing Basics vs Grammar: Comparison Guide", readTime: "12 min" },
    { id: 3, title: "English Learning Success Guide", readTime: "7 min" },
    { id: 4, title: "🌟 Advanced English Composition", readTime: "Coming Soon", comingSoon: true }
  ];

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle newsletter subscription
  const handleSubscribe = async () => {
    setEmailError('');
    
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success alert
      alert(`🎉 Success! Welcome to English E-Courses newsletter!\n\nEmail: ${email}\n\nYou'll receive the latest English language tutorials and course updates directly in your inbox.`);
      
      setEmail('');
    } catch (error) {
      alert('❌ Subscription failed. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  // Modal functions
  const openModal = (post: BlogPostData) => {
    if (post.comingSoon) return; // Don't open modal for coming soon posts
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [isModalOpen]);

  // Handle click outside modal
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured).slice(0, visiblePosts);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <BlogWrapper>
      <Container>
        <BlogHeader>
          <BlogTitle>English E-Courses Blog</BlogTitle>
          <BlogSubtitle>
            Tutorials, insights, and updates from the world of professional English language education
          </BlogSubtitle>
        </BlogHeader>

        <SearchSection>
          <SearchInput
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
          <FilterButtons>
            {categories.map(category => (
              <FilterButton
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterButtons>
        </SearchSection>

        <BlogContent>
          <div style={{ flex: 1 }}>
            {featuredPost && selectedCategory === 'All' && !searchTerm && (
              <ClickableFeaturedPost onClick={() => openModal(featuredPost)}>
                <FeaturedPost>
                  <FeaturedImage src={featuredPost.image} alt={featuredPost.title} />
                  <FeaturedContent>
                    <CategoryTag>{featuredPost.category}</CategoryTag>
                    <FeaturedTitle>{featuredPost.title}</FeaturedTitle>
                    <FeaturedExcerpt>{featuredPost.excerpt}</FeaturedExcerpt>
                    <FeaturedMeta>
                      <AuthorInfo>
                        <AuthorAvatar src="/images/img_3.jpg" alt={featuredPost.author} />
                        <AuthorDetails>
                          <AuthorName>{featuredPost.author}</AuthorName>
                          <PostDate>{featuredPost.date} • {featuredPost.readTime}</PostDate>
                        </AuthorDetails>
                      </AuthorInfo>
                    </FeaturedMeta>
                  </FeaturedContent>
                </FeaturedPost>
              </ClickableFeaturedPost>
            )}

            <PostsGrid>
              {regularPosts.map(post => (
                <ClickablePost key={post.id} onClick={() => openModal(post)}>
                  <BlogPost 
                    style={{
                      opacity: post.comingSoon ? 0.85 : 1,
                      border: post.comingSoon ? '2px dashed #667eea' : 'none',
                      background: post.comingSoon ? 'linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)' : 'white',
                      animation: post.comingSoon ? 'glow 3s infinite' : 'none'
                    }}
                  >
                  <div style={{ position: 'relative' }}>
                    <PostImage 
                      src={post.image} 
                      alt={post.title}
                      style={{
                        filter: post.comingSoon ? 'grayscale(50%) blur(1px)' : 'none'
                      }}
                    />
                    {post.comingSoon && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'rgba(102, 126, 234, 0.95)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                        backdropFilter: 'blur(4px)'
                      }}>
                        🚀 Coming Soon
                      </div>
                    )}
                  </div>
                  <PostContent>
                    <CategoryTag style={{
                      background: post.comingSoon ? 
                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      opacity: post.comingSoon ? 0.8 : 1,
                      animation: post.comingSoon ? 'pulse 2s infinite' : 'none'
                    }}>
                      {post.comingSoon ? '📅 ' + post.category : post.category}
                    </CategoryTag>
                    <PostTitle style={{
                      color: post.comingSoon ? '#667eea' : '#2d3748'
                    }}>
                      {post.title}
                    </PostTitle>
                    <PostExcerpt style={{
                      fontStyle: post.comingSoon ? 'italic' : 'normal',
                      color: post.comingSoon ? '#5a67d8' : '#666'
                    }}>
                      {post.excerpt}
                    </PostExcerpt>
                    <PostMeta>
                      <AuthorInfo>
                        <AuthorAvatar 
                          src="/images/img_4.jpg" 
                          alt={post.author}
                          style={{
                            filter: post.comingSoon ? 'grayscale(30%)' : 'none'
                          }}
                        />
                        <AuthorDetails>
                          <AuthorName style={{
                            color: post.comingSoon ? '#667eea' : '#2d3748'
                          }}>
                            {post.author}
                          </AuthorName>
                          <PostDate style={{
                            color: post.comingSoon ? '#667eea' : '#999',
                            fontWeight: post.comingSoon ? '600' : 'normal'
                          }}>
                            {post.comingSoon ? (
                              <span>
                                🕐 {post.date} • {post.readTime}
                              </span>
                            ) : (
                              `${post.date} • ${post.readTime}`
                            )}
                          </PostDate>
                        </AuthorDetails>
                      </AuthorInfo>
                    </PostMeta>
                    {post.comingSoon && (
                      <div style={{
                        marginTop: '15px',
                        padding: '10px',
                        background: 'rgba(102, 126, 234, 0.1)',
                        borderRadius: '8px',
                        textAlign: 'center',
                        fontSize: '0.85rem',
                        color: '#667eea',
                        fontWeight: '500'
                      }}>
                        💡 Subscribe to our newsletter to be notified when this article is published!
                      </div>
                    )}
                  </PostContent>
                </BlogPost>
                </ClickablePost>
              ))}
            </PostsGrid>

            {regularPosts.length < filteredPosts.filter(post => !post.featured).length && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <LoadMoreButton onClick={handleLoadMore}>
                  Load More Articles
                </LoadMoreButton>
              </div>
            )}
          </div>

          <SidebarSection>
            <div>
              <SidebarTitle>Popular Articles</SidebarTitle>
              <PopularPosts>
                {popularPosts.map((post: any) => (
                  <PopularPost 
                    key={post.id}
                    style={{
                      background: post.comingSoon ? 'linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)' : 'transparent',
                      border: post.comingSoon ? '1px dashed #667eea' : 'none',
                      borderRadius: post.comingSoon ? '8px' : '0',
                      padding: post.comingSoon ? '12px' : '15px 0'
                    }}
                  >
                    <PopularPostTitle style={{
                      color: post.comingSoon ? '#667eea' : '#2d3748',
                      fontStyle: post.comingSoon ? 'italic' : 'normal'
                    }}>
                      {post.title}
                    </PopularPostTitle>
                    <PostDate style={{
                      color: post.comingSoon ? '#667eea' : '#999',
                      fontWeight: post.comingSoon ? '600' : 'normal'
                    }}>
                      {post.comingSoon ? '🕐 ' + post.readTime : post.readTime}
                    </PostDate>
                  </PopularPost>
                ))}
              </PopularPosts>
            </div>

            <NewsletterSignup>
              <NewsletterTitle>Stay Updated</NewsletterTitle>
              <p>Get the latest English language tutorials delivered to your inbox</p>
              <div style={{ position: 'relative' }}>
                <NewsletterInput
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  style={{
                    borderColor: emailError ? '#e53e3e' : undefined,
                    marginBottom: emailError ? '5px' : '15px'
                  }}
                />
                {emailError && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '0.8rem',
                    marginBottom: '10px',
                    textAlign: 'left'
                  }}>
                    {emailError}
                  </div>
                )}
              </div>
              <NewsletterButton 
                onClick={handleSubscribe}
                disabled={isSubscribing}
                style={{
                  opacity: isSubscribing ? 0.7 : 1,
                  cursor: isSubscribing ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubscribing ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid #667eea',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></span>
                    Subscribing...
                  </span>
                ) : (
                  'Subscribe'
                )}
              </NewsletterButton>
              <style>
                {`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                  
                  @keyframes pulse {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 1; }
                  }
                  
                  @keyframes glow {
                    0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.3); }
                    50% { box-shadow: 0 0 15px rgba(102, 126, 234, 0.6); }
                  }
                `}
              </style>
            </NewsletterSignup>
          </SidebarSection>
        </BlogContent>
      </Container>
      
      {/* Modal */}
      {isModalOpen && selectedPost && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeModal}>
              ✕
            </ModalCloseButton>
            
            <ModalHeader>
              <ModalImage src={selectedPost.image} alt={selectedPost.title} />
            </ModalHeader>
            
            <ModalBody>
              <ModalTitle>{selectedPost.title}</ModalTitle>
              
              <ModalMeta>
                <ModalCategoryTag>{selectedPost.category}</ModalCategoryTag>
                <ModalAuthor>
                  <ModalAuthorAvatar src="/images/img_6.jpg" alt={selectedPost.author} />
                  <ModalAuthorInfo>
                    <ModalAuthorName>{selectedPost.author}</ModalAuthorName>
                    <ModalPostDate>{selectedPost.date} • {selectedPost.readTime}</ModalPostDate>
                  </ModalAuthorInfo>
                </ModalAuthor>
              </ModalMeta>
              
              <ModalContent_Text>
                {selectedPost.content}
                
                <h3>Key Takeaways</h3>
                <ul>
                  <li>English writing is transforming communication through innovative grammar techniques</li>
                  <li>Modern writing methods provide unlimited creative possibilities and professional communication workflows</li>
                  <li>Grammar principles can bring clarity and precision to life through effective writing</li>
                  <li>The future of English learning combines traditional techniques with cutting-edge teaching methods</li>
                </ul>
                
                <blockquote>
                  "Professional English writing opens endless possibilities for communication, from academic essays to professional emails and creative writing that connects people worldwide."
                </blockquote>
                
                <h3>What's Next?</h3>
                <p>As we continue to explore the potential of English language learning, we're seeing unprecedented opportunities for communication innovation, writing development, and academic success. The key is mastering the fundamentals while staying current with modern writing techniques and grammar rules.</p>
                
                <p>Ready to dive deeper into professional English writing? Explore our comprehensive courses and join thousands of students who are already creating incredible written work with professional English language techniques.</p>
              </ModalContent_Text>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </BlogWrapper>
  );
};

export default Blog;
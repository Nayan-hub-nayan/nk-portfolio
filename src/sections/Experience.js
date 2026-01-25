import React, { useEffect, useRef, useState } from 'react';
import gsap from 'https://cdn.skypack.dev/gsap@3.12.2';
import ScrollTrigger from 'https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger';

const HorizontalTimeline = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hideIndicator, setHideIndicator] = useState(false);

  const timelineData = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of scalable web applications using modern frameworks. Mentoring junior developers and architecting cloud-native solutions.',
      tags: ['React', 'Node.js', 'AWS', 'TypeScript']
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products on time.',
      tags: ['JavaScript', 'Python', 'MongoDB', 'Docker']
    },
    {
      year: '2017 - 2021',
      title: 'Bachelor of Computer Science',
      company: 'State University',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and data structures. Led multiple student projects and hackathons.',
      tags: ['GPA 3.8', "Dean's List", 'Research']
    },
    {
      year: '2020 - 2021',
      title: 'Software Development Intern',
      company: 'StartUp Labs',
      description: 'Developed features for mobile and web platforms. Participated in agile development processes and code reviews.',
      tags: ['React Native', 'Firebase', 'Git']
    },
    {
      year: '2015 - 2017',
      title: 'High School Diploma',
      company: 'Central High School',
      description: 'Excelled in mathematics and science. Member of robotics club and computer science team. Won regional coding competition.',
      tags: ['Valedictorian', 'STEM Award']
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const sections = gsap.utils.toArray('.timeline-card');
    
    // Kill existing triggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Create horizontal scroll
    const tl = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + container.offsetWidth * (sections.length - 1),
        onUpdate: (self) => {
          setScrollProgress(self.progress * 100);
          setHideIndicator(self.progress > 0.05);
        }
      }
    });

    // Animate cards
    sections.forEach((section) => {
      const content = section.querySelector('.card-content');
      gsap.from(content, {
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
          trigger: section,
          containerAnimation: tl,
          start: 'left center',
          end: 'center center',
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes scroll {
          0%, 100% { top: 10px; opacity: 1; }
          50% { top: 25px; opacity: 0.5; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }

        .card-content::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe);
          border-radius: 30px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .timeline-card:hover .card-content::before {
          opacity: 0.3;
        }

        .horizontal-container {
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .horizontal-wrapper {
          display: flex;
          width: 100%;
          height: 100%;
        }
      `}</style>

      <div className="relative w-full bg-gradient-to-r from-[#1c1b1b] via-black to-black overflow-x-hidden">
        {/* Fixed Background */}
        <div className="fixed inset-0 opacity-60 pointer-events-none z-0">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
          
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,140,0,0.08) 30%, transparent 70%)',
              filter: 'blur(60px)'
            }}
          />

          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'pulse 8s ease-in-out infinite'
            }}
          />
          
          <div 
            className="absolute top-1/3 right-1/4 w-[600px] h-[600px]"
            style={{
              background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 60%)',
              filter: 'blur(60px)',
              animation: 'float 10s ease-in-out infinite'
            }}
          />

          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div ref={containerRef} className="horizontal-container relative">
          <div className="horizontal-wrapper">
            {/* Header - Outside the cards */}
            <div className="absolute top-8 sm:top-12 md:top-14 left-8 sm:left-12 md:left-14 z-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                Journey
              </h2>
            </div>

            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className="timeline-card w-full h-full flex items-center justify-center flex-shrink-0 px-6 sm:px-12 md:px-20 lg:px-24"
              >
                <div className="card-content w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 border border-white/10 relative overflow-hidden">
                  <div className="inline-block px-4 sm:px-5 py-2 bg-[#667eea]/10 rounded-full mb-4 sm:mb-5">
                    <span className="text-xs sm:text-sm font-semibold text-[#667eea] uppercase tracking-widest">
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 leading-tight bg-gradient-to-r from-white to-[#667eea] bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  
                  <div className="text-base sm:text-lg md:text-xl text-gray-400 mb-5 sm:mb-6 md:mb-7 font-medium">
                    {item.company}
                  </div>
                  
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-5 sm:mb-6 md:mb-7">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-[#667eea]/20 border border-[#667eea]/30 rounded-full text-xs sm:text-sm font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="fixed bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-80 h-1 bg-white/10 rounded-full overflow-hidden z-50">
          <div 
            className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`fixed bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 text-center z-50 transition-opacity duration-300 ${
            hideIndicator ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="text-xs sm:text-sm text-gray-500 mb-2 tracking-widest">SCROLL DOWN</div>
          <div className="w-7 sm:w-8 h-11 sm:h-12 border-2 border-white/30 rounded-full relative mx-auto">
            <div 
              className="absolute w-1.5 h-2 sm:h-2.5 bg-[#667eea] rounded-full left-1/2 transform -translate-x-1/2"
              style={{
                animation: 'scroll 2s infinite',
                top: '10px'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalTimeline;
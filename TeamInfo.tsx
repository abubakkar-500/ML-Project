import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionTitle from './SectionTitle';
import { GraduationCap, Linkedin, Mail, Github } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const TeamInfo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Abu Bakkar",
      role: "Computer Systems engineer | ML | Web Developer",
      avatar: "/images/profile04.jpg",
      bio: "Degree in Computer Systems Engineering from UET Peshawar with specialization in deep learning architectures and image enhancement.",
      social: {
        linkedin: "https://www.linkedin.com/in/abu-bakkar-915984286/",
        github: "https://github.com/abubakkar-2004/",
        email: "abubakkarkhan50154@gmail.com"
      }
    },
    {
      id: 2,
      name: "Laiba Saeed",
      role: "AI | ML Engineer",
      avatar: "/images/Gprofile01.jpeg",
      bio: "Expert in GANs and neural network optimization with experience in deploying vision models at scale.",
      social: {
        linkedin: "#",
        github: "#",
        email: "laiba@gmail.com"
      }
    },
    {
      id: 3,
      name: "Areeba Sarwer",
      role: "ML Engineer",
      avatar: "/images/Gprofile03.jpeg",
      bio: "Expert in machine learning, business intelligence (BI), and designing and building ML models.",
      social: {
        linkedin: "#",
        email: "sarwer@gmail.com"
      }
    }
  ];

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <SectionTitle>Team Info</SectionTitle>
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md border border-slate-100 transition-all duration-700 delay-${index * 150} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-60">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <div className="flex items-center text-purple-300 mt-1">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    <span className="text-sm">{member.role}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-slate-600">{member.bio}</p>
                
                <div className="mt-4 flex space-x-2">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 p-6 bg-slate-100 rounded-lg border border-slate-200 max-w-3xl mx-auto text-center transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <h3 className="text-xl font-semibold mb-3 text-slate-800">Join Our Research</h3>
          <p className="text-slate-700 mb-4">
            We're always looking for talented students and researchers interested in computer vision and 
            deep learning to join our team. If you're passionate about pushing the boundaries of AI-powered 
            image enhancement, get in touch!
          </p>
          <a 
            href="mailto:research@example.com" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamInfo;
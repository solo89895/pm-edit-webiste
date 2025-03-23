
import React from 'react';
import { Facebook, Mail, Instagram, Send, MessageSquare } from 'lucide-react';

interface SocialLinksProps {
  size?: 'small' | 'medium' | 'large';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ size = 'medium' }) => {
  // Size classes
  const sizeClasses = {
    small: 'w-10 h-10',
    medium: 'w-12 h-12',
    large: 'w-14 h-14'
  };
  
  const iconSize = {
    small: 18,
    medium: 20,
    large: 24
  };
  
  // Social links data
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/PATHUMSANJAYA979/',
      icon: <Facebook size={iconSize[size]} />
    },
    {
      name: 'Instagram',
      url: '#',
      icon: <Instagram size={iconSize[size]} />
    },
    {
      name: 'Telegram',
      url: 'https://t.me/0725510768',
      icon: <Send size={iconSize[size]} />
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/0725510768`,
      icon: <MessageSquare size={iconSize[size]} />
    },
    {
      name: 'Email',
      url: 'mailto:graphicdesigninglk@gmail.com',
      icon: <Mail size={iconSize[size]} />
    }
  ];
  
  return (
    <div className="flex space-x-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon ${sizeClasses[size]} hover:scale-110 transition-all duration-300`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

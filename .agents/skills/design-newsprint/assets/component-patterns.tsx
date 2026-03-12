/**
 * Newsprint Design System - Component Patterns
 * 
 * Copy and adapt these components for your React/Next.js project.
 * 
 * Prerequisites:
 * - Tailwind CSS configured
 * - lucide-react installed
 * - class-variance-authority (optional, for variant handling)
 * - tailwind-merge (optional, for class merging)
 */

import React from 'react';
import { ArrowRight, Plus, Minus, Menu, X } from 'lucide-react';

// ============================================
// BUTTONS
// ============================================

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold uppercase tracking-widest transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs min-h-[36px]',
    md: 'px-6 py-3 text-sm min-h-[44px]',
    lg: 'px-8 py-4 text-base min-h-[52px]',
  };
  
  const variantStyles = {
    primary: 'bg-[#111111] text-[#F9F9F7] border border-transparent hover:bg-white hover:text-[#111111] hover:border-[#111111]',
    secondary: 'border border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-[#F9F9F7]',
    ghost: 'hover:bg-[#E5E5E0] hover:text-[#111111] text-[#111111]',
    link: 'text-[#111111] underline-offset-4 decoration-2 decoration-[#CC0000] hover:underline p-0',
  };
  
  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ============================================
// CARDS
// ============================================

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = false 
}) => {
  return (
    <div 
      className={`
        border border-[#111111] 
        bg-[#F9F9F7] 
        p-6 
        ${hoverable ? 'hard-shadow-hover cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// Grid Cell Card (for collapsed border grids)
interface GridCellProps {
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

export const GridCell: React.FC<GridCellProps> = ({ 
  children, 
  className = '',
  isLast = false 
}) => {
  return (
    <div 
      className={`
        border-r border-b border-[#111111] 
        bg-[#F9F9F7] 
        p-6
        ${isLast ? '' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// ============================================
// INPUTS
// ============================================

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block font-mono text-xs uppercase tracking-widest text-neutral-600 mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full
          border-b-2 border-[#111111] 
          bg-transparent 
          px-3 py-2 
          font-mono text-sm
          placeholder:text-neutral-500
          focus-visible:bg-[#F0F0F0] 
          focus-visible:outline-none
          transition-colors duration-200
          min-h-[44px]
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

// ============================================
// TYPOGRAPHY
// ============================================

// Hero Headline
export const HeroHeadline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h1 className="font-serif font-black text-[#111111] text-5xl sm:text-6xl lg:text-9xl leading-[0.9] tracking-tighter">
      {children}
    </h1>
  );
};

// Section Header
export const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h2 className="font-serif font-black text-[#111111] text-4xl lg:text-5xl leading-tight tracking-tight uppercase">
      {children}
    </h2>
  );
};

// Card Title
export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h3 className="font-serif font-bold text-[#111111] text-2xl lg:text-3xl leading-snug">
      {children}
    </h3>
  );
};

// Body Text
export const BodyText: React.FC<{ children: React.ReactNode; justify?: boolean }> = ({ 
  children, 
  justify = false 
}) => {
  return (
    <p className={`font-body text-[#111111] text-base lg:text-lg leading-relaxed ${justify ? 'text-justify' : ''}`}>
      {children}
    </p>
  );
};

// Metadata
export const Metadata: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
      {children}
    </span>
  );
};

// Label
export const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#111111]">
      {children}
    </span>
  );
};

// Drop Cap Paragraph
export const DropCapParagraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const text = typeof children === 'string' ? children : '';
  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);
  
  return (
    <p className="font-body text-[#111111] text-base lg:text-lg leading-relaxed">
      <span className="float-left text-7xl font-serif font-black leading-none mr-3 mt-1 text-[#CC0000]">
        {firstLetter}
      </span>
      {restOfText}
    </p>
  );
};

// ============================================
// ICONS
// ============================================

interface IconBoxProps {
  icon: React.ReactNode;
  className?: string;
}

export const IconBox: React.FC<IconBoxProps> = ({ icon, className = '' }) => {
  return (
    <div 
      className={`
        border border-[#111111] 
        h-12 w-12 
        flex items-center justify-center
        hover:bg-[#111111] hover:text-[#F9F9F7]
        transition-all duration-200
        ${className}
      `}
    >
      {icon}
    </div>
  );
};

// ============================================
// NAVIGATION
// ============================================

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive = false }) => {
  return (
    <a
      href={href}
      className={`
        font-sans text-sm uppercase tracking-widest
        transition-colors duration-200
        ${isActive ? 'text-[#CC0000]' : 'text-[#111111] hover:text-[#CC0000]'}
      `}
    >
      {children}
    </a>
  );
};

// ============================================
// ACCORDION
// ============================================

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  title, 
  children, 
  isOpen, 
  onToggle 
}) => {
  return (
    <div className="border-b border-[#111111]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span className="font-serif font-bold text-xl">{title}</span>
        <div 
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <Plus className="h-6 w-6 stroke-1" strokeWidth={1.5} />
        </div>
      </button>
      <div 
        className="grid transition-all duration-300 ease-in-out"
        style={{ 
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-neutral-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MARQUEE TICKER
// ============================================

// Requires: npm install react-fast-marquee

interface TickerItem {
  text: string;
  type?: 'text' | 'badge';
}

interface MarqueeTickerProps {
  items: TickerItem[];
}

// Note: Uncomment and use when react-fast-marquee is installed
// export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ items }) => {
//   return (
//     <div className="bg-[#111111] text-white py-3 overflow-hidden">
//       <Marquee speed={40} gradient={false}>
//         {items.map((item, i) => (
//           <React.Fragment key={i}>
//             {item.type === 'badge' ? (
//               <span className="mx-8 text-[#CC0000]">&#x25A0;</span>
//             ) : (
//               <span className="mx-8 font-mono text-sm uppercase tracking-widest">
//                 {item.text}
//               </span>
//             )}
//           </React.Fragment>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// ============================================
// EDITION METADATA
// ============================================

export const EditionHeader: React.FC = () => {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="border-b border-[#111111] py-2">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-600">
          Vol. 1 | {date} | New York Edition
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-600">
          Price: Free
        </span>
      </div>
    </div>
  );
};

export const EditionFooter: React.FC = () => {
  return (
    <div className="border-t border-[#111111] py-4 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
        Edition: Vol 1.0 | Printed in NYC | All Rights Reserved
      </span>
    </div>
  );
};

// ============================================
// ORNAMENTAL DIVIDERS
// ============================================

export const OrnamentalDivider: React.FC = () => {
  return (
    <div className="py-8 text-center font-serif text-2xl text-neutral-400 tracking-[1em]">
      &#x2727; &#x2727; &#x2727;
    </div>
  );
};

export const LineDivider: React.FC = () => {
  return (
    <div className="py-8">
      <div className="border-b border-[#111111]" />
    </div>
  );
};

// ============================================
// IMAGE WITH CAPTION
// ============================================

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  figureNumber?: string;
}

export const Figure: React.FC<FigureProps> = ({ 
  src, 
  alt, 
  caption, 
  figureNumber 
}) => {
  return (
    <figure className="m-0">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-auto grayscale hover:sepia-[50%] transition-all duration-200"
      />
      {(caption || figureNumber) && (
        <figcaption className="mt-2 font-mono text-xs text-neutral-500">
          {figureNumber && <span className="text-[#CC0000]">{figureNumber}</span>}
          {figureNumber && caption && ' — '}
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// ============================================
// LAYOUT PATTERNS
// ============================================

// Container
export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

// Hero Split Layout (8/4)
export const HeroSplit: React.FC<{
  main: React.ReactNode;
  sidebar: React.ReactNode;
}> = ({ main, sidebar }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-[#111111] p-6 lg:p-8">
        {main}
      </div>
      <div className="lg:col-span-4 p-6 lg:p-8">
        {sidebar}
      </div>
    </div>
  );
};

// 4-Column Feature Grid
export const FeatureGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#111111]">
      {children}
    </div>
  );
};

// Inverted Section
export const InvertedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <section className={`bg-[#111111] text-white py-16 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

// ============================================
// EXAMPLE USAGE
// ============================================

/*
Example page layout:

import {
  Container,
  HeroHeadline,
  SectionHeader,
  Button,
  Card,
  Input,
  Metadata,
  BodyText,
  EditionHeader,
  EditionFooter,
  HeroSplit,
  FeatureGrid,
  GridCell,
  OrnamentalDivider,
  Accordion,
  InvertedSection,
} from './component-patterns';

export default function NewsprintPage() {
  const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <EditionHeader />
      
      <Container className="py-16">
        <HeroSplit
          main={
            <>
              <Metadata>Breaking News</Metadata>
              <HeroHeadline>The Future of Print Journalism</HeroHeadline>
              <BodyText className="mt-6">
                Exploring how traditional media adapts to the digital age while maintaining editorial integrity and visual authority.
              </BodyText>
              <Button className="mt-8">Read Full Story</Button>
            </>
          }
          sidebar={
            <div className="space-y-4">
              <Card hoverable>
                <Metadata>Featured</Metadata>
                <h3 className="font-serif font-bold text-xl mt-2">Editor's Pick</h3>
              </Card>
              <Card hoverable>
                <Metadata>Trending</Metadata>
                <h3 className="font-serif font-bold text-xl mt-2">Most Read</h3>
              </Card>
            </div>
          }
        />
      </Container>

      <OrnamentalDivider />

      <Container className="py-16">
        <SectionHeader>Latest Stories</SectionHeader>
        <FeatureGrid>
          {[1, 2, 3, 4].map((i) => (
            <GridCell key={i}>
              <Metadata>Politics</Metadata>
              <h3 className="font-serif font-bold text-xl mt-2">Story Title {i}</h3>
            </GridCell>
          ))}
        </FeatureGrid>
      </Container>

      <InvertedSection>
        <SectionHeader>How It Works</SectionHeader>
        <div className="mt-8 space-y-4">
          {[1, 2, 3].map((i) => (
            <Accordion
              key={i}
              title={`Step ${i}: Process`}
              isOpen={openAccordion === i}
              onToggle={() => setOpenAccordion(openAccordion === i ? null : i)}
            >
              Detailed explanation of step {i}...
            </Accordion>
          ))}
        </div>
      </InvertedSection>

      <EditionFooter />
    </div>
  );
}
*/

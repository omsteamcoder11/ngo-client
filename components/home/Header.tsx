"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Search, Heart, ShieldCheck, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavItem {
  topText: string;
  bottomText: string;
  key: string;
  columns: { label: string; href: string }[][];
}

interface DropdownLinkProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface NavTriggerProps {
  topText: string;
  bottomText: string;
  isOpen: boolean;
  onClick: (e: React.MouseEvent) => void;
  id: string;
  controlsId: string;
}

interface MobileAccordionProps {
  title: string;
  children: React.ReactNode;
}

interface DropdownContainerProps {
  children: React.ReactNode;
  id: string;
  isOpen: boolean;
}

interface NavItemWrapperProps {
  navKey: string;
  activeMenu: string | null;
  onOpen: (key: string) => void;
  onClose: () => void;
  children: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    key: 'learn',
    topText: 'LEARN',
    bottomText: 'ABOUT US',
    columns: [
      [
        { label: 'ACCOUNTABILITY',       href: '/accountability' },
        { label: 'CONTACT US',           href: '/contact'        },
        { label: 'FAQS',                 href: '/faqs'           },
        { label: 'OUR MISSION & VISION', href: '/mission'        },
        { label: 'OUR LEADERSHIP',       href: '/leadership'     },
      ],
      [
        { label: 'NEWSROOM & RESOURCES', href: '/news'    },
        { label: 'STRATEGIC PARTNERS',   href: '/partner' },
        { label: 'CAREERS',              href: '/careers' },
        { label: 'GLOBAL PHILANTHROPY',  href: '/global'  },
      ],
    ],
  },
  {
    key: 'difference',
    topText: 'MAKE A',
    bottomText: 'DIFFERENCE',
    columns: [
      [
        { label: 'SPONSOR A CHILD',    href: '/sponsor-a-child' },
        { label: 'DONATE',             href: '/donate'          },
        { label: 'OTHER WAYS TO HELP', href: '/help'            },
      ],
      [
        { label: 'WAYS TO DONATE',    href: '/donate'   },
        { label: 'GIFT PLANNING',     href: '/gift'     },
        { label: 'EMPLOYER MATCHING', href: '/employer' },
      ],
    ],
  },
  {
    key: 'impact',
    topText: 'SEE OUR',
    bottomText: 'IMPACT',
    columns: [
      [
        { label: 'OUR PROGRAMS',          href: '/programs' },
        { label: 'WHERE WE WORK',         href: '/work'     },
        { label: 'HOW SPONSORSHIP WORKS', href: '/sponsers' },
      ],
      [
        { label: 'OUR STORIES',   href: '/stories' },
        { label: 'WHY CHOOSE US', href: '/why-us'  },
      ],
    ],
  },
  {
    key: 'employment',
    topText: 'INTO EMPLOYMENT',
    bottomText: 'PROGRAM',
    columns: [
      [
        { label: 'ABOUT INTO EMPLOYMENT', href: '/employment' },
        { label: 'IMPACT',                href: '/impact'     },
      ],
      [
        { label: 'JOURNEY', href: '/journey' },
        { label: 'DONATE',  href: '/donate'  },
      ],
    ],
  },
  {
    key: 'activity',
    topText: 'OUR',
    bottomText: 'ACTIVITY',
    columns: [
      [
        { label: 'TESTIMONIALS',       href: '/testimonials' },
        { label: 'VOLUNTEER WITH US',  href: '/volunteer'    },
        { label: 'AWARENESS PROGRAMS', href: '/awareness'    },
         { label: 'EVENTS & FUNDRAISERS',href: '/events'       },
      ],
      [
        { label: 'CAMPAIGNS',       href: '/campaigns' },
        { label: 'MEDIA & GALLERY', href: '/gallery'   },
      ],
    ],
  },

  
];

// ─── NavTrigger ───────────────────────────────────────────────────────────────
const NavTrigger = ({
  topText, bottomText, isOpen, onClick, id, controlsId,
}: NavTriggerProps) => (
  <button
    id={id}
    aria-haspopup="true"
    aria-expanded={isOpen}
    aria-controls={controlsId}
    onClick={onClick}
    className="flex flex-col items-center group outline-none
      focus-visible:ring-2 focus-visible:ring-[#8B235E]
      focus-visible:ring-offset-2 rounded-sm px-1 py-0.5"
  >
    <span
      className={`text-[10px] font-black transition-colors duration-200
        uppercase tracking-[0.2em] mb-0.5
        ${isOpen ? 'text-[#8B235E]' : 'text-gray-400 group-hover:text-[#8B235E]'}`}
    >
      {topText}
    </span>
    <div className="flex items-center space-x-1.5">
      <span
        className={`text-[14px] font-bold transition-colors duration-200
          uppercase tracking-tight
          ${isOpen ? 'text-[#009270]' : 'text-gray-700 group-hover:text-[#009270]'}`}
      >
        {bottomText}
      </span>
      <ChevronDown
        size={14}
        aria-hidden="true"
        className={`transition-all duration-300
          ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${isOpen
            ? 'rotate-180 text-[#009270]'
            : 'rotate-0 text-gray-400 group-hover:text-[#009270]'}`}
      />
    </div>
    {/* Underline */}
    <div className={`h-[3px] bg-[#009270] rounded-full transition-all
      duration-300 mt-1.5
      ${isOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}
    />
  </button>
);

// ─── DropdownContainer ────────────────────────────────────────────────────────
const DropdownContainer = ({ children, id, isOpen }: DropdownContainerProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // single rAF — sufficient, no hydration risk
      const t = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(t);
    } else {
      setMounted(false);
    }
  }, [isOpen]);

  return (
    <div
      id={id}
      role="region"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted
          ? 'translateY(0px) translateX(-50%) scale(1)'
          : 'translateY(-12px) translateX(-50%) scale(0.96)',
        transition: 'opacity 220ms cubic-bezier(0.16,1,0.3,1), transform 280ms cubic-bezier(0.34,1.2,0.64,1)',
        pointerEvents: mounted ? 'auto' : 'none',
        willChange: 'opacity, transform',
      }}
      className="absolute top-full left-1/2 mt-3
        w-[580px] bg-white/98 backdrop-blur-xl
        shadow-[0_24px_80px_rgba(0,0,0,0.13)]
        rounded-2xl border border-gray-100 p-8
        grid grid-cols-2 gap-x-12 z-[9999]"
    >
      {/* Gradient top accent — from improved version */}
      <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full
        bg-gradient-to-r from-[#8B235E] via-[#009270] to-[#8B235E] opacity-50"
      />

      {/* Arrow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2
        -translate-y-1/2 w-3 h-3 bg-white border-l border-t
        border-gray-100 rotate-45"
      />

      {/* Staggered columns */}
      {React.Children.map(children, (child, colIdx) => (
        <div
          key={colIdx}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(8px)',
            transition: `opacity 280ms ease ${colIdx * 40 + 80}ms,
                         transform 280ms ease ${colIdx * 40 + 80}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

// ─── DropdownLink ─────────────────────────────────────────────────────────────
const DropdownLink = ({ label, href = '#', onClick }: DropdownLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className="group flex items-center gap-2 py-2.5 px-2 -mx-2
      text-[13px] font-semibold text-gray-600 hover:text-[#8B235E]
      transition-all duration-200 tracking-wide rounded-md
      hover:bg-[#8B235E]/[0.04]
      focus-visible:outline-none focus-visible:text-[#8B235E]"
  >
    <span className="w-0 h-[2px] bg-[#8B235E] rounded-full
      transition-all duration-300 group-hover:w-3 flex-shrink-0"
    />
    <span className="transition-transform duration-200
      group-hover:translate-x-0.5"
    >
      {label}
    </span>
  </Link>
);

// ─── MobileAccordion ──────────────────────────────────────────────────────────
const MobileAccordion = ({ title, children }: MobileAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex items-center justify-between w-full py-4
          text-left group focus-visible:outline-none
          focus-visible:text-[#009270]"
      >
        <span
          className={`text-sm font-bold tracking-wider uppercase
            transition-colors duration-200
            ${isOpen ? 'text-[#009270]' : 'text-gray-800 group-hover:text-[#009270]'}`}
        >
          {title}
        </span>
        {/* Spring-eased chevron pill — from improved version */}
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center
            transition-all duration-300
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${isOpen
              ? 'bg-[#009270] rotate-180 shadow-[0_2px_8px_rgba(0,146,112,0.3)]'
              : 'bg-gray-100 rotate-0 group-hover:bg-[#009270]/10'}`}
        >
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-colors duration-200
              ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-[#009270]'}`}
          />
        </div>
      </button>

      {/* scrollHeight from original — single source of truth */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight ?? 500}px`
            : '0px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
          transition: 'max-height 350ms cubic-bezier(0.4,0,0.2,1), opacity 250ms ease, transform 250ms ease',
        }}
        className="overflow-hidden"
      >
        <div className="pl-4 flex flex-col space-y-1
          border-l-2 border-[#009270]/20 ml-1 pb-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// ─── NavItemWrapper ───────────────────────────────────────────────────────────
const NavItemWrapper = ({
  navKey, activeMenu, onOpen, onClose, children,
}: NavItemWrapperProps) => {
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    enterTimer.current = setTimeout(() => onOpen(navKey), 80);
  }, [navKey, onOpen]);

  const handleMouseLeave = useCallback(() => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
    leaveTimer.current = setTimeout(() => onClose(), 200);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (enterTimer.current) clearTimeout(enterTimer.current);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// ─── Header ───────────────────────────────────────────────────────────────────
const Header = () => {
  const [activeMenu, setActiveMenu]         = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]         = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // ── Scroll listener — window guarded for SSR safety ──
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 8);
      setScrollProgress(Math.min(y / 120, 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Click outside ──
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current &&
        !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── ESC key ──
  useEffect(() => {
    const handleEsc = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMenu(null);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // ── Body scroll lock ──
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const openMenu    = useCallback((key: string) => setActiveMenu(key), []);
  const closeMenu   = useCallback(() => setActiveMenu(null), []);
  const toggleMenu  = useCallback((key: string) => {
    setActiveMenu((prev) => (prev === key ? null : key));
  }, []);
  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header
        ref={headerRef}
        role="banner"
        className={`w-full bg-white/95 backdrop-blur-md py-3 md:py-4
          px-4 md:px-6 fixed top-0 left-0 z-[999] transition-all
          duration-300 border-b border-gray-100
          ${isScrolled
            ? 'shadow-[0_4px_24px_-4px_rgba(0,0,0,0.10)] border-gray-100'
            : 'shadow-none border-transparent'}`}
      >
        {/* Scroll-progress bar — SSR safe: starts at 0 */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 h-[2.5px] rounded-r-full
            bg-gradient-to-r from-[#8B235E] via-[#d4427a] to-[#009270]
            transition-[width] duration-150 ease-out pointer-events-none"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        <div className="max-w-7xl mx-auto flex items-center
          justify-between gap-4"
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="ChildSave — Home"
            className="flex items-center space-x-3 flex-shrink-0 group"
          >
            <div
              className="relative w-10 h-10 md:w-12 md:h-12 flex
                items-center justify-center bg-[#8B235E] rounded-xl
                shadow-lg
                group-hover:shadow-[#8B235E]/30
                group-hover:-rotate-2 group-hover:scale-105
                transition-all duration-300
                ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            >
              <ShieldCheck
                className="text-white absolute w-6 h-6 md:w-8 md:h-8"
                strokeWidth={1.5} aria-hidden="true"
              />
              <Heart
                className="text-[#FFCC29] w-2 h-2 md:w-3 md:h-3
                  absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2
                  fill-[#FFCC29] animate-pulse"
                aria-hidden="true"
              />
            </div>
            <div className="leading-tight">
              <p className="text-[#8B235E] font-extrabold text-lg
                md:text-2xl tracking-tighter uppercase italic"
              >
                Child<span className="text-[#009270]">Save</span>
              </p>
              <p className="text-[8px] md:text-[10px] text-gray-500
                font-bold tracking-[0.25em] uppercase -mt-1"
              >
                Protecting Futures
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            aria-label="Main navigation"
            className="hidden xl:flex items-center space-x-8 2xl:space-x-10"
          >
            {NAV_ITEMS.map((item) => (
              <NavItemWrapper
                key={item.key}
                navKey={item.key}
                activeMenu={activeMenu}
                onOpen={openMenu}
                onClose={closeMenu}
              >
                <NavTrigger
                  id={`nav-btn-${item.key}`}
                  controlsId={`nav-menu-${item.key}`}
                  topText={item.topText}
                  bottomText={item.bottomText}
                  isOpen={activeMenu === item.key}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(item.key);
                  }}
                />
                {activeMenu === item.key && (
                  <DropdownContainer
                    id={`nav-menu-${item.key}`}
                    isOpen={activeMenu === item.key}
                  >
                    {item.columns.map((col, colIdx) => (
                      <div key={colIdx} className="space-y-0.5">
                        {col.map((link) => (
                          <DropdownLink
                            key={link.href + link.label}
                            label={link.label}
                            href={link.href}
                            onClick={closeMenu}
                          />
                        ))}
                      </div>
                    ))}
                  </DropdownContainer>
                )}
              </NavItemWrapper>
            ))}
          </nav>

          {/* ── Right Actions ── */}
          <div className="flex items-center space-x-2 md:space-x-3
            flex-shrink-0"
          >
            <button
              aria-label="Search"
              className="p-2 text-gray-500 hover:text-[#8B235E]
                hover:bg-[#8B235E]/[0.07] rounded-full transition-all
                duration-200 hidden sm:flex items-center justify-center
                active:scale-90
                focus-visible:ring-2 focus-visible:ring-[#8B235E]
                focus-visible:ring-offset-2 group"
            >
              <Search
                size={20} strokeWidth={2.5} aria-hidden="true"
                className="transition-transform duration-200
                  group-hover:scale-110"
              />
            </button>

            <Link
              href="/donate"
              className="relative overflow-hidden bg-[#8B235E] text-white
                px-4 md:px-5 py-2.5 rounded-lg font-bold
                text-xs md:text-sm uppercase tracking-wider
                transition-all duration-300 active:scale-95
                shadow-[0_2px_10px_rgba(139,35,94,0.25)]
                hover:shadow-[0_4px_18px_rgba(139,35,94,0.4)]
                hover:-translate-y-0.5 group"
            >
              <span className="relative z-10">Give</span>
              <div className="absolute inset-0 bg-[#6b1b48] opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            <Link
              href="/sponsor-a-child"
              className="hidden md:inline-flex relative overflow-hidden
                bg-[#009270] text-white px-5 py-2.5 rounded-lg
                font-bold text-sm uppercase tracking-wider
                transition-all duration-300 active:scale-95
                shadow-[0_2px_10px_rgba(0,146,112,0.25)]
                hover:shadow-[0_4px_18px_rgba(0,146,112,0.4)]
                hover:-translate-y-0.5 group"
            >
              <span className="relative z-10">Sponsor</span>
              <div className="absolute inset-0 bg-[#007a5d] opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-drawer"
              className="xl:hidden p-2 text-gray-600 hover:bg-gray-100
                hover:text-[#8B235E] rounded-lg transition-all
                duration-200 active:scale-90"
            >
              <Menu size={26} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[9999] xl:hidden transition-all
          duration-300
          ${isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={closeMobile}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm
            transition-opacity duration-300
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Drawer panel — spring easing from improved version */}
        <div
          style={{
            transition: 'transform 480ms cubic-bezier(0.32,0.72,0,1)',
          }}
          className={`absolute top-0 right-0 h-full w-[85%]
            sm:w-[380px] bg-white
            shadow-[-16px_0_48px_rgba(0,0,0,0.12)]
            flex flex-col
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Brand gradient bar */}
          <div aria-hidden="true" className="h-[3px] w-full flex-shrink-0
            bg-gradient-to-r from-[#8B235E] via-[#d4427a] to-[#009270]"
          />

          {/* Drawer header */}
          <div className="p-5 border-b flex items-center justify-between
            bg-gray-50/50 flex-shrink-0"
          >
            <Link
              href="/"
              onClick={closeMobile}
              className="flex items-center space-x-2 group"
            >
              <div className="w-8 h-8 flex items-center justify-center
                bg-[#8B235E] rounded-lg shadow-md
                group-hover:-rotate-2 transition-all duration-300
                ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              >
                <ShieldCheck
                  className="text-white w-5 h-5"
                  strokeWidth={1.5} aria-hidden="true"
                />
              </div>
              <span className="font-extrabold text-[#8B235E] italic
                text-base uppercase tracking-tighter"
              >
                Child<span className="text-[#009270]">Save</span>
              </span>
            </Link>
            <button
              onClick={closeMobile}
              aria-label="Close navigation menu"
              className="p-2 hover:bg-gray-200 hover:text-[#8B235E]
                rounded-full transition-all duration-200 active:scale-90"
            >
              <X size={22} className="text-gray-700" aria-hidden="true" />
            </button>
          </div>

          {/* Nav items */}
          <div
            role="navigation"
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto px-5 py-3 space-y-1"
          >
            {NAV_ITEMS.map((item) => (
              <MobileAccordion
                key={item.key}
                title={`${item.topText} ${item.bottomText}`}
              >
                {item.columns.flat().map((link) => (
                  <DropdownLink
                    key={link.href + link.label}
                    label={link.label}
                    href={link.href}
                    onClick={closeMobile}
                  />
                ))}
              </MobileAccordion>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="p-5 border-t bg-gray-50 flex flex-col
            gap-3 flex-shrink-0"
          >
            <Link
              href="/sponsor-a-child"
              onClick={closeMobile}
              className="w-full bg-[#009270] text-white py-3.5
                rounded-xl font-bold text-center uppercase text-sm
                shadow-[0_2px_10px_rgba(0,146,112,0.3)]
                hover:shadow-[0_4px_16px_rgba(0,146,112,0.4)]
                hover:-translate-y-0.5 active:scale-95
                transition-all duration-300 tracking-wider"
            >
              Sponsor a Child
            </Link>
            <Link
              href="/donate"
              onClick={closeMobile}
              className="w-full bg-[#8B235E] text-white py-3 rounded-xl
                font-bold text-center uppercase text-sm
                shadow-[0_2px_10px_rgba(139,35,94,0.25)]
                hover:shadow-[0_4px_16px_rgba(139,35,94,0.35)]
                hover:-translate-y-0.5 active:scale-95
                transition-all duration-300 tracking-wider"
            >
              Give Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
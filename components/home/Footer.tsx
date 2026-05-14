import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Heart, Mail, Phone, MapPin } from 'lucide-react';
const NAV_ITEMS = [
  {
    key: 'learn',
    topText: 'LEARN',
    bottomText: 'ABOUT US',
    columns: [
      [
        { label: 'Accountability', href: '/accountability' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Our Mission & Vision', href: '/mission' },
        { label: 'Our Leadership', href: '/leadership' },
      ],
      [
        { label: 'Newsroom & Resources', href: '/news' },
        { label: 'Strategic Partners', href: '/partner' },
        { label: 'Careers', href: '/careers' },
        { label: 'Global Philanthropy', href: '/global' },
      ],
    ],
  },
  {
    key: 'difference',
    topText: 'MAKE A',
    bottomText: 'DIFFERENCE',
    columns: [
      [
        { label: 'Sponsor a Child', href: '/sponsor-a-child' },
        { label: 'Donate', href: '/donate' },
        { label: 'Other Ways to Help', href: '/help' },
      ],
      [
        { label: 'Ways to Donate', href: '/donate' },
        { label: 'Gift Planning', href: '/gift' },
        { label: 'Employer Matching', href: '/employer' },
      ],
    ],
  },
  {
    key: 'impact',
    topText: 'SEE OUR',
    bottomText: 'IMPACT',
    columns: [
      [
        { label: 'Our Programs', href: '/programs' },
        { label: 'Where We Work', href: '/work' },
        { label: 'How Sponsorship Works', href: '/sponsers' },
      ],
      [
        { label: 'Our Stories', href: '/stories' },
        { label: 'Why Choose Us', href: '/why-us' },
      ],
    ],
  },
  {
    key: 'employment',
    topText: 'INTO EMPLOYMENT',
    bottomText: 'PROGRAM',
    columns: [
      [
        { label: 'About Into Employment', href: '/employment' },
        { label: 'Impact', href: '/impact' },
      ],
      [
        { label: 'Journey', href: '/journey' },
        { label: 'Donate', href: '/donate' },
      ],
    ],
  },
  {
    key: 'activity',
    topText: 'OUR',
    bottomText: 'ACTIVITY',
    columns: [
      [
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Volunteer With Us', href: '/volunteer' },
        { label: 'Awareness Programs', href: '/awareness' },
      ],
      [
        { label: 'Campaigns', href: '/campaigns' },
        { label: 'Field Updates', href: '/field-updates' },
        { label: 'Media & Gallery', href: '/gallery' },
      ],
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: '#',
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    svg: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0f0f0f] text-white">


      {/* ── MAIN FOOTER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">

          {/* ── LEFT: Brand + Contact + Social ── */}
          <div className="flex flex-col gap-8">

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="relative w-12 h-12 flex items-center justify-center bg-[#8B235E]">
                <ShieldCheck className="text-white w-7 h-7" strokeWidth={1.5} />
                <Heart className="text-[#FFCC29] w-3 h-3 absolute bottom-2 right-2 fill-[#FFCC29] animate-pulse" />
              </div>
              <div className="leading-tight">
                <p className="text-[#f0a0cc] font-extrabold text-2xl tracking-tighter uppercase italic">
                  Child<span className="text-[#00c99a]">Save</span>
                </p>
                <p className="text-[10px] text-gray-400 font-bold tracking-[0.25em] uppercase -mt-1">
                  Protecting Futures
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              ChildSave is dedicated to protecting children's futures through education, healthcare, and community support programs across India.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a href="mailto:info@childsave.org" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B235E] transition-colors">
                  <Mail size={14} />
                </div>
                info@childsave.org
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B235E] transition-colors">
                  <Phone size={14} />
                </div>
                +91 12345 67890
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                123, NGO Colony, Chennai,<br />Tamil Nadu — 600001
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
             {SOCIAL_LINKS.map(({ svg, href, label }) => (
  <a key={label} href={href} aria-label={label}
    className="w-9 h-9 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#8B235E] hover:text-white transition-all"
  >
    {svg}
  </a>
))}
            </div>
          </div>

          {/* ── RIGHT: Nav Links ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.key}>
                <div className="mb-4">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                    {item.topText}
                  </p>
                  <p className="text-sm font-bold text-white uppercase tracking-tight mt-0.5">
                    {item.bottomText}
                  </p>
                  <div className="w-6 h-[2px] bg-[#009270] mt-2" />
                </div>
                <ul className="space-y-2.5">
                  {item.columns.flat().map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-gray-400 hover:text-white hover:pl-1.5 transition-all duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Newsletter ── */}
        <div className="mt-12 sm:mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Get the latest news and impact stories from ChildSave.
              </p>
            </div>
            <div className="flex w-full sm:w-auto gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#8B235E] transition-colors"
              />
              <button className="bg-[#8B235E] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#6b1b48] transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {currentYear} ChildSave. All rights reserved. Registered NGO under Indian Trust Act.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap'].map((item) => (
              
              <a  key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
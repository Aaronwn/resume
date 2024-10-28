'use client';

import { useEffect, useState } from 'react';
import Container from './Container';
import { ThemeToggle } from './ThemeToggle';

function MobileNavigation({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80">
      <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="flex flex-row-reverse items-center justify-between">
          <button
            type="button"
            className="-m-1 p-1"
            aria-label="Close menu"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-zinc-500 dark:text-zinc-400">
              <path d="M5 5l14 14M5 19L19 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            导航
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <li>
              <a
                href="#about"
                className="block py-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
              >
                关于我
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
              >
                工作经历
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
              >
                项目经验
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

function DesktopNavigation() {
  return (
    <nav className="pointer-events-auto">
      <ul className="flex rounded-full px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:text-zinc-200 dark:ring-white/10 bg-white/90 dark:bg-zinc-800/90">
        <li>
          <a
            href="#about"
            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            关于我
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            工作经历
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            项目经验
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isShowingMobileMenu, setIsShowingMobileMenu] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
        isScrolled
          ? 'bg-white/75 border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900/75'
          : 'bg-white/0 border-transparent'
      }`}
    >
      <Container>
        <div className="flex flex-col items-center justify-between py-6">
          <div className="relative flex items-center gap-16">
            <div className="flex lg:flex-1">
              <button type="button" className="lg:hidden" onClick={() => setIsShowingMobileMenu(true)}>
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-zinc-500">
                  <path d="M3 4h18M3 12h18M3 20h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-10">
              <DesktopNavigation />
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {isShowingMobileMenu && (
        <MobileNavigation onClose={() => setIsShowingMobileMenu(false)} />
      )}
    </header>
  )
}

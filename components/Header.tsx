'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from './Container'
import { ThemeToggle } from './ThemeToggle'

function MobileNavigation() {
  return (
    <div className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80">
      <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="flex flex-row-reverse items-center justify-between">
          <button
            type="button"
            className="-m-1 p-1"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-zinc-500 dark:text-zinc-400">
              <path d="M5 5l14 14M5 19L19 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <li><Link href="/about" className="block py-2">About</Link></li>
            <li><Link href="/articles" className="block py-2">Articles</Link></li>
            <li><Link href="/projects" className="block py-2">Projects</Link></li>
            <li><Link href="/speaking" className="block py-2">Speaking</Link></li>
            <li><Link href="/uses" className="block py-2">Uses</Link></li>
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
        <li><Link href="/about" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">About</Link></li>
        <li><Link href="/articles" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Articles</Link></li>
        <li><Link href="/projects" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Projects</Link></li>
        <li><Link href="/speaking" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Speaking</Link></li>
        <li><Link href="/uses" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Uses</Link></li>
      </ul>
    </nav>
  )
}

function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={onClick}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      >
        <path d="M2 6h20v2H2zM2 16h20v2H2z" />
      </svg>
    </button>
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
      className={`pointer-events-none relative z-50 flex flex-col ${
        isScrolled
          ? 'bg-white/75 backdrop-blur dark:bg-zinc-900/75'
          : ''
      }`}
    >
      <div className="top-0 z-10 h-16 pt-6">
        <Container>
          <div className="relative flex items-center justify-center">
            <div className="flex justify-center">
              <div className="pointer-events-auto md:hidden">
                <MobileMenuButton onClick={() => setIsShowingMobileMenu(true)} />
              </div>
              <div className="hidden md:block">
                <DesktopNavigation />
              </div>
            </div>
            <div className="pointer-events-auto absolute right-0">
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </div>
      {isShowingMobileMenu && (
        <MobileNavigation />
      )}
    </header>
  )
}

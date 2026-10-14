'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

const CODES: Record<string, string> = { en: 'EN', fr: 'FR', el: 'EL' }
const NAMES: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  el: 'Ελληνικά',
}

export function LanguageToggle() {
  const pathname = usePathname()
  const current = useLocale()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return

    function onPointerDown(e: PointerEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const others = routing.locales.filter((l) => l !== current)

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={listId}
        className="button-1-style flex items-center gap-1"
      >
        <span className="sr-only">Language: </span>
        <span className="text-sm font-medium pr-2">{CODES[current]}</span>
        <span aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul
          id={listId}
          className="absolute right-0 mt-1 min-w-32 rounded border shadow"
        >
          {others.map((locale) => (
            <li key={locale}>
              <Link
                href={pathname}
                locale={locale}
                replace
                lang={locale}
                hrefLang={locale}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-navy button-1-style"
              >
                {NAMES[locale]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Da‘wah Salafiyyah Sierra Leone',
    default: 'Da‘wah Salafiyyah Sierra Leone - 7th Annual Conference',
  },
  description:
    'The Importance of Tawheed in a Person’s Life',
  openGraph: {
    title: 'Da‘wah Salafiyyah Sierra Leone',
    description: 'Da‘wah Salafiyyah Sierra Leone - 7th Annual Conference',
    url: 'https://dawah-salafiyyah.vercel.app/',
    siteName: 'Da‘wah Salafiyyah Sierra Leone',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-slate-900 antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full bg-slate-900">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}

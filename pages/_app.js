import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@/vercel/analytics/react'

import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${merriweather.className}`}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>

      <Analytics />
    </main>
  )
}

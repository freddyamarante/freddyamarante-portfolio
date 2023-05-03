import { Suspense, lazy, useEffect, useState } from 'react'

import DarkModeToggle from '@/components/DarkModeToggle'
import Headline from './Headline'
const Experience = lazy(() => import('@/components/Experience/Experience'))

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <section className="h-screen">
      <nav className="relative flex flex-row justify-end pt-4 pr-8">
        <DarkModeToggle />
      </nav>
      <div className="h-full max-h-[88vh] border-2 border-night dark:border-white justify-center items-center mx-2 lg:mx-8 my-5">
        <div className="flex h-full w-full justify-center items-center">
          {isMounted && (
            <Suspense>
              <Experience />
            </Suspense>
          )}

          <Headline />
        </div>
      </div>
    </section>
  )
}

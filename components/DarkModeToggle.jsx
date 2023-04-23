import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'
import { useState } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    const newTheme = newDarkMode ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <Switch
      checked={darkMode}
      onChange={toggleDarkMode}
      className={`${
        darkMode ? 'bg-white' : 'bg-night'
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out`}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={`${
          darkMode ? 'translate-x-5 bg-blackbean' : 'translate-x-0 bg-white'
        } pointer-events-none relative inline-block h-5 w-5 transform shadow ring-0 transition duration-200 ease-in-out`}
      >
        <span
          className={`${
            darkMode
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in'
          }
            absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          className={`${
            darkMode
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out'
          }
            absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-night dark:text-white"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
    </Switch>
  )
}

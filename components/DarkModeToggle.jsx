import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [wasClicked, setWasClicked] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setDarkMode(true)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    const newTheme = newDarkMode ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const handleFirstSwitchClick = () => {
    setWasClicked(true)
  }

  return (
    <div className="flex flex-row">
      {wasClicked ? null : (
        <div className="flex flex-row animate-pulse">
          <div class="text-sm">Activate/deactivate dark mode!</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        onClick={handleFirstSwitchClick}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
      </Switch>
    </div>
  )
}

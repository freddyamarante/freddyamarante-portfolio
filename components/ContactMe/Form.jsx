import { useState } from 'react'

import { sendContactForm } from '@/lib/api'

const initValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const initState = { values: initValues }

export default function Form() {
  const [formState, setFormState] = useState(initState)

  const { values } = formState

  const handleChange = ({ target }) => {
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))
  }

  const handleSubmit = async () => {
    await sendContactForm(values).then(() => setFormState(initState))
  }
  return (
    <form action="#" method="POST" className="pt-8 sm:pt-14 lg:pt-18">
      <div className="grid grid-cols-3 gap-6 mx-auto">
        {/* Name */}
        <div className="col-span-3 md:col-span-1">
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              autoComplete="given-name"
              className="block w-full border-2 border-night px-3.5 py-3 text-night dark:text-white bg-transparent shadow-sm ring-2 ring-inset ring-neutral-300 placeholder:text-neutral-400 sm:leading-6"
            />
          </div>
        </div>
        {/* Email */}
        <div className="col-span-3 md:col-span-2">
          <label
            htmlFor="Email"
            className="block text-sm font-semibold leading-6"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="email"
              className="block w-full border-2 border-night px-3.5 py-3 text-night dark:text-white bg-transparent shadow-sm ring-2 ring-inset ring-neutral-300 placeholder:text-neutral-400 sm:leading-6"
            />
          </div>
        </div>
        {/* Subject */}
        <div className="col-span-3">
          <label
            htmlFor="subject"
            className="block text-sm font-semibold leading-6"
          >
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              value={values.subject}
              onChange={handleChange}
              autoComplete="subject"
              className="block w-full border-2 border-night px-3.5 py-3 text-night dark:text-white bg-transparent shadow-sm ring-2 ring-inset ring-neutral-300 placeholder:text-neutral-400 sm:leading-6"
            />
          </div>
        </div>
        {/* Message */}
        <div className="col-span-3">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              name="message"
              id="message"
              value={values.message}
              onChange={handleChange}
              rows={6}
              className="block w-full border-2 border-night px-3.5 py-3 text-night dark:text-white bg-transparent shadow-sm ring-2 ring-inset ring-neutral-300 placeholder:text-neutral-400 sm:leading-6"
              defaultValue={''}
            />
          </div>
        </div>
        <div className="col-start-1 col-span-3 sm:col-start-2 sm:col-span-2 flex justify-center sm:justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center font-semibold shadow-sm gap-2 px-6 py-2.5 text-lg justify-center bg-night dark:bg-white text-white dark:text-night hover:bg-marian dark:hover:bg-madder dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night dark:focus-visible:outline-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            Send message
          </button>
        </div>
      </div>
    </form>
  )
}

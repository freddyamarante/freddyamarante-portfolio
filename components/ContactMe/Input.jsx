import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'

import { findInputError, isFormInvalid } from '@/utils'

export const Input = ({
  label = 'label',
  type = 'text',
  id,
  name,
  span = 3,
  textarea = false,
  handleChange,
}) => {
  const {
    register,
    formsState: { errors },
  } = useFormContext()

  const inputError = findInputError(errors, label)
  const isInvalid = isFormInvalid(inputError)

  return (
    <div className={`col-span-${span}`}>
      <label
        htmlFor={name}
        className="block text-sm fo
        export { findInputError } from './findInputError'
        export { isFormInvalid } from './isFormInvalid'nt-semibold leading-6 capitalize"
      >
        {label}
      </label>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
      <div className="mt-1">
        {textarea ? (
          <textarea
            name={name}
            id={id}
            onChange={handleChange}
            rows={6}
            className="block w-full border-2 border-night px-3.5 py-3 text-night dark:text-white bg-transparent shadow-sm ring-2 ring-inset ring-neutral-300 placeholder:text-neutral-400 sm:leading-6"
            {...register(label, {
              required: {
                value: true,
                message: 'required',
              },
            })}
          />
        ) : (
          <input
            type={type}
            name={name}
            id={id}
            onChange={handleChange}
            autoComplete="given-name"
            className="block w-full border-2 border-night px-3.5 py-3 text-night dark:text-white bg-transparent shadow-sm ring-2 ring-inset ring-neutral-300 placeholder:text-neutral-400 sm:leading-6"
            {...register(label, {
              required: {
                value: true,
                message: 'required',
              },
            })}
          />
        )}
      </div>
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 text-madder bg-red-100 rounded-md"
      {...framer_error}
    >
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

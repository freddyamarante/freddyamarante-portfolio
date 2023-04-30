import { useFormContext } from 'react-hook-form'

export default function Input({
  label = 'label',
  type = 'text',
  id,
  name,
  span = 3,
  textarea = false,
  value,
  handleChange,
}) {
  const { register } = useFormContext()
  return (
    <div className={`col-span-3 md:col-span-${span}`}>
      <label
        htmlFor={name}
        className="block text-sm font-semibold leading-6 capitalize"
      >
        {label}
      </label>
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

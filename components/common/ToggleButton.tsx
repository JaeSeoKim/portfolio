import React, { ChangeEvent } from 'react'

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  style?: React.CSSProperties
  className?: string
  checked?: boolean
}

const ToggleButton: React.FunctionComponent<Props> = ({
  onChange,
  style,
  className,
  checked = false
}) => {
  return (
    <div className={className} style={style}>
      <label className='flex items-center cursopointer'>
        <div className='relative'>
          <input
            type='checkbox'
            className='hidden'
            onChange={onChange}
            checked={checked}
          />
          <div className='toggle__line w-10 h-4 bg-gray-600 rounded-full shadow-inner'></div>
          <div className='toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0'></div>
        </div>
      </label>
      <style jsx>
        {`
          .toggle__dot {
            top: -0.25rem;
            left: -0.25rem;
            transition: all 0.3s ease-in-out;
          }

          input:checked ~ .toggle__dot {
            transform: translateX(100%);
            background-color: #484848;
            box-shadow: inset 0 2px 4px 0 rgba(100, 100, 100, 0.2);
          }
        `}
      </style>
    </div>
  )
}

export default ToggleButton

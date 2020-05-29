import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'

type Props = {
  githubUrl?: string
  userName?: string
}

const Footer: React.FunctionComponent<Props> = ({
  githubUrl = 'https://github.com/JaeSeoKim',
  userName = 'JaeSeoKim'
}) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div
      style={isDarkMode ? { background: '#282c35' } : { background: '#e2e8f0' }}
      className={'flex justify-center'}
    >
      <div className='p-6'>
        <a
          href={githubUrl}
          className={
            isDarkMode
              ? 'text-sm text-gray-300 hover:text-gray-500 mt-4 lg:mt-0'
              : 'text-sm text-gray-700 hover:text-gray-500 mt-4 lg:mt-0'
          }
        >
          &copy;<span className='text-bold'>{userName}</span>
        </a>
      </div>
    </div>
  )
}

export default Footer

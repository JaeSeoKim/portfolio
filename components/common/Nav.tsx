import React, { useContext } from 'react'
import Link from 'next/link'
import { whiteModeColor, darkModeColor } from '../../setting/setting'
import ThemeContext from '../../lib/context/ThemContext'

type Props = {
  githubUrl: string
  githubAvatar: string
  userName: string
}

const Nav: React.FunctionComponent<Props> = ({
  githubUrl,
  githubAvatar,
  userName
}) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <nav
      style={
        isDarkMode
          ? {
              background: `linear-gradient(90deg, ${darkModeColor.mainColor1} 0%, ${darkModeColor.mainColor2} 100%)`
            }
          : {
              background: `linear-gradient(90deg, ${whiteModeColor.mainColor1} 0%, ${whiteModeColor.mainColor2} 100%)`
            }
      }
    >
      <div className='container mx-auto navigation flex items-center justify-between flex-wrap p-6'>
        <Link href='/'>
          <a className='flex items-center flex-shrink-0 text-white mr-6'>
            <img
              src={githubAvatar}
              alt='siteIcon'
              className='fill-current rounded-full h-8 w-8 mr-2'
              width='54'
              height='54'
            />
            <span className='font-semibold text-xl tracking-tight'>
              {userName} Portfolio
            </span>
          </a>
        </Link>
        <div className='block lg:hidden'>
          <button
            className='flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:text-gray-300'
            onClick={() => {
              document?.getElementById('navMenuBtn')?.classList.toggle('hidden')
            }}
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div
          id='navMenuBtn'
          className='hidden w-full block flex-grow mt-auto lg:flex lg:items-center lg:w-auto '
        >
          <div className='text-sm lg:flex-grow'>
            <Link href='/#Profile'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'>
                Profile
              </a>
            </Link>
            <Link href='/#Education'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'>
                Education
              </a>
            </Link>
            <Link href='/#Awards'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'>
                Awards
              </a>
            </Link>
            <Link href='/#Certification'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'>
                Certification
              </a>
            </Link>

            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'
            >
              Skills
            </a>

            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'
            >
              Projects
            </a>

            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'
            >
              Lecture
            </a>
          </div>
          <div>
            <a
              href={githubUrl}
              className='inline-block text-sm text-white hover:text-gray-300 mt-4 lg:mt-0'
            >
              <div className='flex justify-center'>
                <svg
                  className='inline fill-current h-4 w-4 mr-1 my-auto'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>GitHub icon</title>
                  <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                </svg>
                GitHub
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

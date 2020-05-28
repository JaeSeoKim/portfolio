import React from 'react'
import Link from 'next/link'

type Props = {
  githubUrl: string,
  githubAvatar: string,
  userName: string
}

const Nav: React.FunctionComponent<Props> = ({
  githubUrl = 'https://github.com/JaeSeoKim',
  githubAvatar = 'https://avatars3.githubusercontent.com/u/48559454?s=54&v=4',
  userName = 'JaeSeoKim'
}) => {
  return (
    <nav
      style={{ background: 'linear-gradient(90deg, #7f7fd5 0%, #86a8e7 100%)' }}
    >
      <div className='container mx-auto navigation flex items-center justify-between flex-wrap p-6'>
        <Link href='/'>
          <a className='flex items-center flex-shrink-0 text-white mr-6'>
            <img
              src={githubAvatar}
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
              document?.getElementById('navMenu')?.classList.toggle('hidden')
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
          id='navMenu'
          className='hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto'
        >
          <div className='text-sm lg:flex-grow'>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'
            >
              Profile
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'
            >
              Education
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'
            >
              Awards
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4'
            >
              Certification
            </a>

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
              <svg
                className='inline fill-current h-4 w-4'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>GitHub</title>
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
              </svg>
              {'\t'}GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

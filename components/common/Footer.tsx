import React from 'react'

type Props = {
  githubUrl: string,
  userName: string
}

const Footer: React.FunctionComponent<Props> = ({
  githubUrl = 'https://github.com/JaeSeoKim',
  userName = 'JaeSeoKim'
}) => {
  return (
    <div className='flex justify-center'>
      <div className='p-6'>
        <a
          href={githubUrl}
          className='text-sm text-gray-700 hover:text-gray-500 mt-4 lg:mt-0'
        >
          &copy;{userName}
        </a>
      </div>
    </div>
  )
}

export default Footer

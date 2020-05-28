import React from 'react'

type Props = { isColor?: any }

const Divder: React.FunctionComponent<Props> = ({ isColor }) => {
  return (
    <div className='flex justify-center'>
      <div className='divder w-full h-2 m-3 bg-gray-300 rounded-full'></div>
      {isColor && (
        <style jsx>{`
          .divder {
            background: linear-gradient(
              270deg,
              #7f7fd5 0%,
              #86a8e7 50%,
              #91eac9 100%
            );
          }
        `}</style>
      )}
    </div>
  )
}

export default Divder

import React from 'react'

type Props = {
  img: string
  style?: React.CSSProperties
  className?: string
}

const PhotoFrame: React.FunctionComponent<Props> = ({
  img,
  style,
  className
}) => {
  return (
    <div style={style} className={className}>
      <img
        src={img}
        alt='userImg'
        className='rounded-full border border-purple-300 h-64 w-64 m-5'
      />
    </div>
  )
}

export default PhotoFrame

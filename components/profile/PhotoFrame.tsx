import React from 'react'

type Props = { img: string, style?: React.CSSProperties }

const PhotoFrame: React.FunctionComponent<Props> = ({ img, style }) => {
  return (
    <div style={style}>
      <img
        src={img}
        className='rounded-full border border-purple-300 h-64 w-64 m-5'
      />
    </div>
  )
}

export default PhotoFrame

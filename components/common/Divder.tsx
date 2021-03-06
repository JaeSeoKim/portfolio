import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import { darkModeColor, whiteModeColor } from '../../setting/setting'

type Props = { color?: any; id?: string }

const Divder: React.FunctionComponent<Props> = ({ color, id }) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className='flex justify-center' id={id}>
      <div
        className='divder w-full h-2 m-3 bg-gray-300 rounded-full'
        style={
          color && isDarkMode
            ? {
                background: `linear-gradient(270deg, ${darkModeColor.mainColor1} 0%, ${darkModeColor.mainColor2} 50%, ${darkModeColor.mainColor3} 100%)`
              }
            : {
                background: `linear-gradient(270deg, ${whiteModeColor.mainColor1} 0%, ${whiteModeColor.mainColor2} 50%, ${whiteModeColor.mainColor3} 100%)`
              }
        }
      ></div>
    </div>
  )
}

export default Divder

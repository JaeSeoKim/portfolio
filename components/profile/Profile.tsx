import React, { useContext } from 'react'
import { profileType } from '../../interfaces'
import ThemeContext from '../../lib/context/ThemContext'
import marked from 'marked'
import PhotoFrame from './PhotoFrame'
import Divder from '../common/Divder'

type Props = {
  profileData: profileType
  style?: React.CSSProperties
  className?: string
}

const Profile: React.FunctionComponent<Props> = ({
  profileData,
  style,
  className
}) => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div style={style} className={className}>
      <div id='Profile' className='flex justify-center'>
        <div className='flex flex-col md:flex-row'>
          <PhotoFrame img={profileData.img} className='my-auto mx-auto' />
          <div
            className={
              isDarkMode
                ? 'flex flex-col lg:my-6 max-w-2xl text-white'
                : 'flex flex-col lg:my-6 max-w-2xl text-gray-700'
            }
          >
            <h1 className='text-3xl lg:text-4xl text-center'>
              {profileData.name_en}
            </h1>
            <h2 className='text-2xl lg:text-4xl text-center'>
              {profileData.name_ko}
              {'\t'}({profileData.name_ch})
            </h2>
            <Divder color />
            <div
              className='px-4 break-words'
              dangerouslySetInnerHTML={{ __html: marked(profileData.about) }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

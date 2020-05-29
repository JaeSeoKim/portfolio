import marked from 'marked'
import PhotoFrame from '../components/profile/PhotoFrame'
import Divder from '../components/common/Divder'
import GitContributions from '../components/profile/GitContributions'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { useContext } from 'react'
import ThemeContext from '../lib/context/ThemContext'
import { profileData } from '../setting/profile'

const IndexPage = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className='flex justify-center flex-col'>
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
      <GitContributions
        className={'m-4 mx-auto'}
        githubId={profileData.githubId}
      />
      <Divder color id='Education' />
      <div className='mx-4'>
        <a href='#Education'>
          <p
            className={
              isDarkMode
                ? 'inline font-bold text-2xl text-white'
                : 'inline font-bold text-2xl text-gray-700'
            }
          >
            # Education
          </p>
        </a>
        <div>
          <VerticalTimeline className={'overflow-x-hidden px-1'}>
            {profileData.education.map((value, index) => (
              <VerticalTimelineElement
                key={index}
                className='vertical-timeline-element--work'
                contentStyle={{
                  background: `linear-gradient(180deg,${value.bgColor1} 0%,${value.bgColor2} 100%)`,
                  color: value.textColor
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${value.bgColor1}`
                }}
                date={value.date}
                dateClassName={isDarkMode ? 'text-white' : 'text-black'}
                iconStyle={{
                  background: `linear-gradient(180deg,${value.bgColor1} 0%,${value.bgColor2} 100%)`,
                  color: value.textColor
                }}
                icon={value.icon}
              >
                <h3 className='text-lg font-semibold'>{value.title}</h3>
                <h4 className='text-base font-medium'>{value.subTitle}</h4>
                <div className='text-sm font-normal'>{value.innerText}</div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <Divder color id='Awards' />
      </div>
    </div>
  )
}

export default IndexPage

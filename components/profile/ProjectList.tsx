import ThemeContext from '../../lib/context/ThemContext'
import { useContext } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import PhotoFrame from './PhotoFrame'
import marked from 'marked'
import { ProjectType } from '../../interfaces'

type Props = {
  style?: React.CSSProperties
  className?: string
  data?: ProjectType[]
}

const ProjectList: React.FunctionComponent<Props> = ({
  style,
  className,
  data = []
}) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={className} style={style}>
      <a href={`# Projects`}>
        <p
          className={
            isDarkMode
              ? 'inline font-bold text-2xl text-white'
              : 'inline font-bold text-2xl text-gray-700'
          }
        >
          # Projects
        </p>
      </a>
      <VerticalTimeline className={'overflow-x-hidden px-1'}>
        {data.map((value, index) => (
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
            <h1 className='text-lg font-semibold'>{value.title}</h1>
            <div className='flex flex-col justify-center'>
              {/* <Link href='/[project]' as={`/${value.title}`}> */}
              <a className='my-auto mx-auto mt-4'>
                <PhotoFrame alt='Project Img' img={value.img} className='' />
              </a>
              {/* </Link> */}
              <div
                className='text-sm overflow-y-auto'
                dangerouslySetInnerHTML={{
                  __html: marked(value.markdown)
                }}
              />
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default ProjectList

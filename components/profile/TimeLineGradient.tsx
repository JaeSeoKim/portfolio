import React, { useContext } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { timeLineType } from '../../interfaces'
import ThemeContext from '../../lib/context/ThemContext'

type Props = {
  style?: React.CSSProperties
  className?: string
  title: string
  data: timeLineType[]
}

const TimeLineGradient: React.FunctionComponent<Props> = ({
  data,
  style,
  className,
  title
}) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={className} style={style}>
      <a href={`#${title}`}>
        <p
          className={
            isDarkMode
              ? 'inline font-bold text-2xl text-white'
              : 'inline font-bold text-2xl text-gray-700'
          }
        >
          # {title}
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
            <h3 className='text-lg overflow-y-auto font-semibold'>
              {value.title}
            </h3>
            <h4 className='text-base overflow-y-auto font-medium'>
              {value.subTitle}
            </h4>
            <div className='text-sm overflow-y-auto font-normal'>
              {value.innerText}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default TimeLineGradient

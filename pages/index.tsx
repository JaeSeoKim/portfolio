import marked from 'marked'
import PhotoFrame from '../components/profile/PhotoFrame'
import { profileData } from '../interfaces'
import Divder from '../components/common/Divder'
import GitContributions from '../components/profile/GitContributions'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { MdSecurity } from 'react-icons/md'
import { useContext } from 'react'
import ThemeContext from '../lib/context/ThemContext'

const data: profileData = {
  githubId: 'JaeSeoKim',
  img:
    'https://avatars3.githubusercontent.com/u/48559454?s=460&u=a5ca89eef46c643ba9e49f7373c27ad2f27c90d3&v=4',
  name_en: 'JaeSeoKim',
  name_ko: '김재서',
  name_ch: '金材書',
  about: `
  - GitHub : [jaeseokim](https://github.com/JaeSeoKim)
  - Blog : [tistory](http://jaeseokim.tistory.com/)
  - **Kshield Jr 3기 정보보호 관리진단** 수료
  - Kshield Jr 3기 **KISA 원장 인증상** 수상
  - 서울특별시 창의아이디어 경진대회 은상 수상 ( **서울 시장상** )
  - [**TeamMODU**](http://modusecurity.xyz/) 소속
  `,
  //  https://react-icons.github.io/
  education: [
    {
      title: 'Kshield Jr 3기',
      subTitle: '정보보호 관리진단',
      innerText: 'KISA 정보보안 인재 양성 프로그램',
      date: '2019.07? - 2019.11',
      bgColor1: '#7f7fd5',
      bgColor2: '#86a8e7',
      textColor: '#FFF',
      icon: <MdSecurity />
    },
    {
      title: '테스트2',
      subTitle: '테스트',
      date: '2019.07? - 2019.11',
      bgColor1: '#7f7fd5',
      bgColor2: '#86a8e7',
      textColor: '#FFF',
      icon: <MdSecurity />
    },
    {
      title: 'Kshield Jr 3기',
      subTitle: '정보보호 관리진단',
      innerText: 'KISA 정보보안 인재 양성 프로그램',
      date: '2019.07? - 2019.11',
      bgColor1: '#7f7fd5',
      bgColor2: '#86a8e7',
      textColor: '#FFF',
      icon: <MdSecurity />
    },
    {
      title: 'Kshield Jr 3기',
      subTitle: '정보보호 관리진단',
      innerText: 'KISA 정보보안 인재 양성 프로그램',
      date: '2019.07? - 2019.11',
      bgColor1: '#7f7fd5',
      bgColor2: '#86a8e7',
      textColor: '#FFF',
      icon: <MdSecurity />
    }
  ]
}

const IndexPage = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className='flex justify-center flex-col'>
      <div id='Profile' className='flex justify-center'>
        <div className='flex flex-col md:flex-row'>
          <PhotoFrame img={data.img} className='my-auto mx-auto' />
          <div
            className={
              isDarkMode
                ? 'flex flex-col lg:my-6 max-w-2xl text-white'
                : 'flex flex-col lg:my-6 max-w-2xl text-gray-700'
            }
          >
            <h1 className='text-3xl lg:text-4xl text-center'>{data.name_en}</h1>
            <h2 className='text-2xl lg:text-4xl text-center'>
              {data.name_ko}
              {'\t'}({data.name_ch})
            </h2>
            <Divder color />
            <div
              className='px-4 break-words'
              dangerouslySetInnerHTML={{ __html: marked(data.about) }}
            ></div>
          </div>
        </div>
      </div>
      <GitContributions className={'m-4 mx-auto'} githubId={data.githubId} />
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
          <VerticalTimeline>
            {data.education.map((value, index) => (
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
      </div>
    </div>
  )
}

export default IndexPage

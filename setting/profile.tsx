import { profileType, educationType } from '../interfaces/index'
import { user } from './constants'
import { MdSecurity, MdSchool } from 'react-icons/md'
import { RiHomeGearLine } from 'react-icons/ri'

export const educationData: educationType[] = [
  {
    title: '서일대학교',
    subTitle: '- 소프트웨어공학과',
    innerText: '재학중',
    date: '2020.03. ~ Prevent',
    bgColor1: '#7f7fd5',
    bgColor2: '#86a8e7',
    textColor: '#FFF',
    icon: <MdSchool />
  },
  {
    title: '잠신고등학교',
    subTitle: '- 일반고등학교',
    innerText: '졸업',
    date: '2017.03. ~ 2020.01',
    bgColor1: '#ff79c6',
    bgColor2: '#bd93f9',
    textColor: '#FFF',
    icon: <MdSchool />
  },
  {
    title: '종로산업정보학교',
    subTitle: '- 컴퓨터보안학과(위탁학급)',
    innerText: '수료',
    date: '2019.03. ~ 2020.01',
    bgColor1: '#7f7fd5',
    bgColor2: '#86a8e7',
    textColor: '#FFF',
    icon: <MdSchool />
  },
  {
    title: 'Kshield Jr 3기',
    subTitle: '- 정보보호 관리진단',
    innerText: 'KISA 정보보안 인재 양성 프로그램(수료)',
    date: '2019.08. ~ 2019.12',
    bgColor1: '#ff79c6',
    bgColor2: '#bd93f9',
    textColor: '#FFF',
    icon: <MdSecurity />
  },
  {
    title: 'KISA 융합보안인력양성 교육',
    subTitle: '- 스마트 홈가전 정보보호 교육',
    innerText: '수료',
    date: '2019.12.02 ~ 2019.12.04',
    bgColor1: '#7f7fd5',
    bgColor2: '#86a8e7',
    textColor: '#FFF',
    icon: <RiHomeGearLine />
  }
]

export const profileData: profileType = {
  githubId: user.githubId,
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
  education: educationData
}

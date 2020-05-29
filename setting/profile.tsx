import { profileType, timeLineType } from '../interfaces/index'
import { user } from './constants'
import {
  MdSecurity,
  MdSchool,
  MdLightbulbOutline,
  MdAttachMoney,
  MdInfo,
  MdComputer,
  MdDeveloperMode,
  MdSpeakerNotes
} from 'react-icons/md'
import { RiHomeGearLine, RiLockPasswordLine } from 'react-icons/ri'
import { FaNetworkWired, FaLinux } from 'react-icons/fa'
import { TiDocumentText } from 'react-icons/ti'
import { GrDocker } from 'react-icons/gr'
import { FiMic } from 'react-icons/fi'
import { AiOutlineAndroid } from 'react-icons/ai'
import { IoIosGitNetwork } from 'react-icons/io'

/**
 * 📑 educationData 학력 정보 작성
 * 학력정보는 Array 형태로 이루어져 있습니다.
 * Title : 제목 부분에 해당됩니다.
 * subTitle: 부제목 입니다. 학과 정보나 특이사항을 기록하시면 됩니다.
 * innerText: 부가적으로 더 작성을 하고 싶으시다면 여기 필드를 사용하시면 됩니다.
 * date: 언제부터 언제까지 다녔는지에 대해 작성 하시면 됩니다!
 * bgColor1, bgColor2: Gradient Background Color에 대한 항목입니다.
 * textColor: 글자색에 대한 항목입니다.
 * icon: Icon에 대한 항목으로 "react-icons"의 아이콘을 사용하시는 것을 추천합니다. (JSX.Element)
 */

export const educationData: timeLineType[] = [
  {
    title: '서일대학교',
    subTitle: '- 소프트웨어공학과',
    innerText: '재학중',
    date: '2020.03. ~ Present',
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
    bgColor1: '#BBD2C5',
    bgColor2: '#536976',
    textColor: '#FFF',
    icon: <MdSchool />
  },
  {
    title: 'Kshield Jr 3기',
    subTitle: '- 정보보호 관리진단',
    innerText: 'KISA 정보보안 인재 양성 프로그램(수료)',
    date: '2019.08. ~ 2019.12',
    bgColor1: '#314755',
    bgColor2: '#26a0da',
    textColor: '#FFF',
    icon: <MdSecurity />
  },
  {
    title: 'KISA 융합보안인력양성 교육',
    subTitle: '- 스마트 홈가전 정보보호 교육',
    innerText: '수료',
    date: '2019.12.02 ~ 2019.12.04',
    bgColor1: '#2b5876',
    bgColor2: '#4e4376',
    textColor: '#FFF',
    icon: <RiHomeGearLine />
  }
]

/**
 * 📑 awardsData 수상 정보 작성
 * 수상정보는 Array 형태로 이루어져 있습니다.
 * Title : 제목 부분에 해당됩니다.
 * subTitle: 부제목 입니다. 기관명, 행사명 등 을 기록하시면 됩니다..
 * innerText: 부가적으로 더 작성을 하고 싶으시다면 여기 필드를 사용하시면 됩니다.
 * date: 언제 수상하였는지에 대해 작성하시면 됩니다.
 * bgColor1, bgColor2: Gradient Background Color에 대한 항목입니다.
 * textColor: 글자색에 대한 항목입니다.
 * icon: Icon에 대한 항목으로 "react-icons"의 아이콘을 사용하시는 것을 추천합니다. (JSX.Element)
 */

const awardsData: timeLineType[] = [
  {
    title: '우수 정보보호 취업인재 증명서',
    subTitle: '- 한국인터넷 진흥원(KISA) 원장상',
    innerText: 'K-Shield Jr 3기 수료식',
    date: '2019.12.12',
    bgColor1: '#91eac9',
    bgColor2: '#86a8e7',
    textColor: '#FFF',
    icon: <MdSecurity />
  },
  {
    title: '제 13회 서울특별시 직업계고 창의아이디어 경진대회 은상',
    subTitle: '- 서울특별시 시장상',
    innerText: `제 13회 서울특별시 직업계고 창의아이디어 경진대회
      (https://blog.naver.com/PostView.nhn?blogId=2019sca&logNo=221651596973)`,
    date: '2019.11.05',
    bgColor1: '#86a8e7',
    bgColor2: '#6272a4',
    textColor: '#FFF',
    icon: <MdLightbulbOutline />
  },
  {
    title: '제16회 특성화고교생 사장되기 창업대회(Be the CEOs)',
    subTitle: '- 우수상',
    innerText: '(사)한국시민자원 봉사회',
    date: '2019.08.20',
    bgColor1: '#7f7fd5',
    bgColor2: '#bd93f9',
    textColor: '#FFF',
    icon: <MdAttachMoney />
  }
]

const certificationData: timeLineType[] = [
  {
    title: '네트워크관리사 2급',
    subTitle: '- 한국정보통신자격협회',
    date: '2019.09.17',
    bgColor1: '#e65c00',
    bgColor2: '#F9D423',
    textColor: '#FFF',
    icon: <FaNetworkWired />
  },
  {
    title: '정보처리기능사',
    subTitle: '- 한국산업인력공단',
    date: '2019.09.05',
    bgColor1: '#2193b0',
    bgColor2: '#6dd5ed',
    textColor: '#FFF',
    icon: <MdInfo />
  },
  {
    title: '해킹보안전문가 3급',
    subTitle: '- 한국해킹보안협회장',
    date: '2019.08.05',
    bgColor1: '#cc2b5e',
    bgColor2: '#753a88',
    textColor: '#FFF',
    icon: <MdComputer />
  },
  {
    title: '리눅스마스터 2급',
    subTitle: '- 한국정보통신진흥협회',
    date: '2019.07.05',
    bgColor1: '#ec008c',
    bgColor2: '#fc6767',
    textColor: '#FFF',
    icon: <FaLinux />
  },
  {
    title: 'ITQ 한글엑셀 A등급',
    subTitle: '- 한국생산성본부',
    date: '2019.10.31',
    bgColor1: '#1488CC',
    bgColor2: '#2B32B2',
    textColor: '#FFF',
    icon: <TiDocumentText />
  }
]

const skillsData: timeLineType[] = [
  {
    title: 'Development',
    innerText: (
      <div>
        <p>- Programing: Python, Java, JavaScript, TypeScript</p>
        <p>- Web: Node.js, React, Mongo, MySQL</p>
      </div>
    ),
    bgColor1: '#00467F',
    bgColor2: '#A5CC82',
    textColor: '#FFF',
    icon: <MdDeveloperMode />
  },
  {
    title: 'Security',
    innerText: (
      <div>
        <p>- Web Hacking, Reversing, Forensic</p>
      </div>
    ),
    bgColor1: '#BBD2C5',
    bgColor2: '#536976',
    textColor: '#FFF',
    icon: <MdSecurity />
  },
  {
    title: 'DevOps',
    innerText: (
      <div>
        <p>- GItHub, Docker, Linux</p>
      </div>
    ),
    bgColor1: '#9796f0',
    bgColor2: '#fbc7d4',
    textColor: '#FFF',
    icon: <GrDocker />
  }
]

const lectureData: timeLineType[] = [
  {
    title: '모의 쇼핑몰 사이트 해킹하기! (SQL Injection)(2일)',
    innerText: (
      <div>
        <p>- 종로산업정보학교 신입생 진로체험 프로그램</p>
      </div>
    ),
    date: '2019.09.16 ~ 2019.09.23',
    bgColor1: '#536976',
    bgColor2: '#292E49',
    textColor: '#FFF',
    icon: <FiMic />
  },
  {
    title: 'CTF풀이(HashCat, JWT-Tool, USB PCAP 분석 등)',
    innerText: (
      <div>
        <p>- TeamMODU 오프라인 모임</p>
      </div>
    ),
    date: '2019.11.24',
    bgColor1: '#acb6e5',
    bgColor2: '#86fde8',
    textColor: '#FFF',
    icon: <MdSpeakerNotes />
  },
  {
    title: '안드로이드 스튜디오를 이용한 TO DO 어플 제작 (SQLite 이용!)',
    innerText: (
      <div>
        <p>- 안드로이드 프로젝트 스터디</p>
      </div>
    ),
    date: '2019.12.06',
    bgColor1: '#FFE000',
    bgColor2: '#799F0C',
    textColor: '#FFF',
    icon: <AiOutlineAndroid />
  },
  {
    title: '안드로이드 layoutInflater, Activity, intent 에 대한 개념 정리',
    innerText: (
      <div>
        <p>- 안드로이드 프로젝트 스터디</p>
      </div>
    ),
    date: '2019.12.19',
    bgColor1: '#ffe259',
    bgColor2: '#ffa751',
    textColor: '#FFF',
    icon: <AiOutlineAndroid />
  },
  {
    title: 'DnSpy 사용법',
    innerText: (
      <div>
        <p>- TeamMODU 오프라인 모임</p>
      </div>
    ),
    date: '2019.12.28',
    bgColor1: '#799F0C',
    bgColor2: '#ACBB78',
    textColor: '#FFF',
    icon: <MdComputer />
  },
  {
    title: 'SCP, Length Extension Attack에 대하여',
    innerText: (
      <div>
        <p>- TeamMODU 오프라인 모임</p>
      </div>
    ),
    date: '2020.02.16',
    bgColor1: '#5433FF',
    bgColor2: '#20BDFF',
    textColor: '#FFF',
    icon: <RiLockPasswordLine />
  },
  {
    title: 'UTCTF2020문제풀이 (scapy 사용하여 패킷제작)',
    innerText: (
      <div>
        <p>- 2020.03.15</p>
      </div>
    ),
    date: '2020.02.16',
    bgColor1: '#20BDFF',
    bgColor2: '#A5FECB',
    textColor: '#FFF',
    icon: <IoIosGitNetwork />
  }
]

/**
 * 📑 profileData 개인 정보 작성
 * githubId: 'setting/constants.ts' 에서 작성한 내용을 사용하는 것을 추천 드립니다.
 * img: 개인 유저 프로필 사진의 URL를 사용하시면 됩니다. Static으로 서버내부에 파일을 올려 상대경로도 가능합니다.
 * name_*: 각 언어별 이름을 작성하시면 됩니다.
 * about: 자신에 대해 소개하시는 글을 작성하시면 됩니다. 여기서는 "MarkDown" 문법이 적용 됩니다!
 * education: 위에 작성한 education 항목입니디. 기본 그대로 사용하시면 됩니다.
 */

export const profileData: profileType = {
  githubId: user.githubId,
  img:
    'https://avatars3.githubusercontent.com/u/48559454?s=460&u=a5ca89eef46c643ba9e49f7373c27ad2f27c90d3&v=4',
  name_en: 'JaeSeoKim',
  name_ko: '김재서',
  name_ch: '金材書',
  about: `
  - GitHub : [JaeSeoKim](https://github.com/JaeSeoKim)
  - Blog : [Tistory](http://jaeseokim.tistory.com/)
  - **Kshield Jr 3기 정보보호 관리진단** 수료
  - Kshield Jr 3기 **KISA 원장 인증상** 수상
  - 서울특별시 창의아이디어 경진대회 은상 수상 ( **서울 시장상** )
  - [**TeamMODU**](http://modusecurity.xyz/) 소속
    `,
  education: educationData,
  awards: awardsData,
  certification: certificationData,
  skills: skillsData,
  lecture: lectureData
}

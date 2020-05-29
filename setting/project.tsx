import { ProjectType } from '../interfaces'

import { RiHomeGearLine, RiYoutubeLine } from 'react-icons/ri'
import {
  AiOutlineMedicineBox,
  AiOutlineCheckCircle,
  AiOutlineMessage,
  AiFillRobot,
  AiOutlineAndroid,
  AiOutlineFire
} from 'react-icons/ai'
import { MdChat, MdTrain } from 'react-icons/md'

export const projectsData: ProjectType[] = [
  {
    title: '모두의보안 커뮤니티 제작',
    markdown:
      '**사이트목적**:\t보안 정보 공유 활성화 커뮤니티 제작\n\n' +
      '**개발 환경**:\n\n' +
      '\tBack-end(Node.js, MongoDB, Next.js)\n' +
      '\tFront-end(React, AntDesign)\n' +
      '\tDev-Ops(Docker, DCOS, Jenkins, GitLab)\n\n' +
      '**진행 현황**:\t기본적인 게시판 형태 구현 완료, Next.js를 사용하여 SEO 최적화 일부 구현 완료',
    img: '/image/projects/모두의보안 커뮤니티 제작.png',
    date: '2020.01. ~ Present',
    bgColor1: '#4364F7',
    bgColor2: '#A5FECB',
    textColor: '#FFF',
    icon: <RiHomeGearLine />
  },
  {
    title: 'YouTube Clone Coding - MyTube',
    markdown:
      '**개발 동기**:\t제대로 된 웹 서비스를 개발을 하고 싶어서 Youtube Clone Coding 강좌를 보며 개발을 시작!\n\n' +
      '**개발 환경**:\n\n' +
      '\tBack-end(Node.js, express ,MongoDB)\n' +
      '\tFront-end(Pug, Scss, WebPack)\n' +
      '\tDev-Ops(Docker(MongoDB Server), GitHub)\n\n' +
      '**GitHub**:\t[https://github.com/JaeSeoKim/MyTube](https://github.com/JaeSeoKim/MyTube)',
    img: '/image/projects/YouTube Clone Coding - MyTube.png',
    date: '2020.02.26 ~ 2020.05.22',
    bgColor1: '#334d50',
    bgColor2: '#cbcaa5',
    textColor: '#FFF',
    icon: <RiYoutubeLine />
  },
  {
    title: 'ToDo App 제작 및 구글 플레이 스토어 등록',
    markdown:
      '**개발 동기**:\t구글 개발자로 등록을 하고 아직 어떤 어플도 등록을 하지 않아서 한번 평소에 관심이 있었던 React Native로 개발을 하게됨!\n\n' +
      '**개발 환경**:\tReact Native(Expo)\n\n' +
      '**PlayStore**:\t[https://play.google.com/store/apps/details?id=com.devjs.todo](https://play.google.com/store/apps/details?id=com.devjs.todo)\n\n' +
      '**GitHub**:\t[https://github.com/JaeSeoKim/ToDo](https://github.com/JaeSeoKim/ToDo)\n\n',
    img: '/image/projects/ToDo App 제작 및 구글 플레이 스토어 등록.png',
    date: '2020.04.20 ~ 2020.04.21',
    bgColor1: '#ffdde1',
    bgColor2: '#799F0C',
    textColor: '#FFF',
    icon: <AiOutlineCheckCircle />
  },
  {
    title: '공적 마스크맵 제작',
    markdown:
      '**사이트목적**:\t공적 마스크 판매처 정보 제공\n\n' +
      '**개발 환경**:\n\n' +
      '\tBack-end(GitHub-Pages)\n' +
      '\tFront-end(React, AntDesign, KakaoMap-Api)\n\n' +
      '**개발 동기**:\t코로나 사태가 심각해지면서 공익을 위해 무언가를 개발해보고 싶다는 찰나에 마스크API가 공개 되어서 제작한 사이트!\n\n' +
      '**사이트 주소**:\t[https://map.devjs.cf/](https://map.devjs.cf/)\n\n',
    img: '/image/projects/공적 마스크맵 제작.png',
    date: '2020.03.16 ~ 2020.03.18',
    bgColor1: '#FFE000',
    bgColor2: '#6dd5ed',
    textColor: '#FFF',
    icon: <AiOutlineMedicineBox />
  },

  {
    title: '재난 문자 확인 서비스 제작',
    markdown:
      '**사이트목적**:\t재난 문자 확인 서비스 제공\n\n' +
      '**개발 환경**:\n\n' +
      '\tBack-end(GitHub-Pages)\n' +
      '\tFront-end(React, AntDesign)\n' +
      '\tDev-Ops(Docker, DCOS, Jenkins, GitLab)\n\n' +
      '**개발 동기**:\t코로나 사태가 심각해지면서 공익을 위해 무언가 개발을 해볼까 생각을 하다 일단 간단한 것 부터 개발을 시작하고자 재난문자 API를 이용하여 제작!\n\n' +
      '**사이트 주소**:\t[http://msg.devjs.cf/](http://msg.devjs.cf/)',
    img: '/image/projects/재난 문자 확인 서비스 제작.png',
    date: '2020.03.11 ~ 2020.03.16',
    bgColor1: '#00416A',
    bgColor2: '#86a8e7',
    textColor: '#FFF',
    icon: <AiOutlineMessage />
  },
  {
    title: '[Selenium] naver-login-feed-crawling',
    markdown:
      '**개발 동기**:\tWeb Hacking 관련 CTF 문제를 풀면서 Selenium으로 스크립트를 작성하는 문제를 보고 한번 공부를 하고자 만들어 본 스크립트 \n\n' +
      '**개발 환경**:\tPython3, venv, Selenium, FireFox \n\n' +
      '**GitHub**:\t[https://github.com/JaeSeoKim/naver-login-feed-crawling](https://github.com/JaeSeoKim/naver-login-feed-crawling)\n\n' +
      '**Blog**:\t[https://jaeseokim.tistory.com/93](https://jaeseokim.tistory.com/93)',
    img: '/image/projects/[Selenium] naver-login-feed-crawling.png',
    date: '2020.01.28',
    bgColor1: '#ffdde1',
    bgColor2: '#86a8e7',
    textColor: '#FFF',
    icon: <AiFillRobot />
  },
  {
    title: 'Android_Project_Study',
    markdown:
      '**스터디 동기**:\t매주 서로 각자 파트를 하나씩 정하여 공부 정리하여 매주 발표 하여 학습 그리고 공부한 내용을 토대로 앱 개발\n\n' +
      '**GitHub**:\t[https://github.com/JaeSeoKim/Android_Project_Study](https://github.com/JaeSeoKim/Android_Project_Study)\n\n' +
      '**결과물**:\n\n' +
      '**발표자료**:\t[https://github.com/JaeSeoKim/Android_Project_Study/tree/master/doc/학습%20및%20발표/](https://github.com/JaeSeoKim/Android_Project_Study/tree/master/doc/학습%20및%20발표/)\n\n' +
      '**제작어플**:\t[https://github.com/JaeSeoKim/To-Do-Android_APP](https://github.com/JaeSeoKim/To-Do-Android_APP)\n',
    img: '/image/projects/Android_Project_Study.png',
    date: '2019.12.05 ~ 2019.12.25',
    bgColor1: '#7f7fd5',
    bgColor2: '#6dd5ed',
    textColor: '#FFF',
    icon: <AiOutlineAndroid />
  },
  {
    title:
      '㈜시큐리티허브 코디네이션 고객사 대상 보유 웹 서비스 대상 진단 및 모의침투',
    markdown:
      '**개요**:\t㈜시큐리티허브 코디네이션 고객사의 운영 중인 웹 서비스에 대하여 웹 취약점 점검 및 모의 해킹을 수행하고 \n\n' +
      '발견된 취약점이 서비스 및 시스템에 미치는 영향을 파악하여 침해 사고 예방과 웹 서비스의 안정성을 확보하는 것에 목적을 두었습니다.\n\n' +
      '**점검기준**:\t"2017 주요정보통신기반시설 취약점 분석평가 웹 기준"(과학기술정보통신부 고시)\n\n' +
      '**프로젝트 산출물**:\n\n' +
      '취약점 점검 보고서, 침투테스트 시나리오 보고서, 위험 조치 계획서, 모의해킹 최종 보고서',
    img:
      '/image/projects/㈜시큐리티허브 코디네이션 고객사 대상 보유 웹 서비스 대상 진단 및 모의침투.png',
    date: '2019.10.29 ~ 2019.11.05',
    bgColor1: '#2C5364',
    bgColor2: '#FBD786',
    textColor: '#FFF',
    icon: <AiOutlineFire />
  },
  {
    title: '지하철 간편 민원 시스템 구축',
    markdown:
      '**프로젝트 동기**:\t평소에 일상생활에서 격는 불편함에 무엇이 있나 생각을 하다 지하철 민원 시스템의 불편함에 개선하는 방안을 찾고자 시작하였습니다. \n\n' +
      '**개발 기능**:\tNFC, QR코드, WIFI(Captive Portal) 3가지 방식을 통해 빠르고 간편하게 민원신고가 가능함, URL에 지하철 정보를 포함하여 민원이 발생할 시에 양식 내용만 전송하여 민원 신고가 가능함.\n\n' +
      '**GitHub**:\t[https://github.com/JaeSeoKim/metro_helper](https://github.com/JaeSeoKim/metro_helper)\n\n' +
      '**사이트 주소**:\t [https://jaeseokim.github.io/metro_helper/](https://jaeseokim.github.io/metro_helper/)\n\n',
    img: '/image/projects/지하철 간편 민원 시스템 구축.png',
    date: '2019.05. ~ 2019.11.05',
    bgColor1: '#203A43',
    bgColor2: '#2C5364',
    textColor: '#FFF',
    icon: <MdTrain />
  },
  {
    title: '제로페이 챗봇 (서울시 챗봇톤 참여 작품) - telegram',
    markdown:
      '**프로젝트 동기**:\t서울시 챗봇톤에 참여하면서 평소 제로페이에 관해 많이 들어보기는 했지만 정확하게 어떤 서비스를 제공하고 또 어떻게 사용해야 하는지 대부분이 정확히 모르는 것 같아 챗봇을 제작 \n\n' +
      '**개발 환경**:\n\n' +
      '\t개발 플랫폼: Telegram\n\n' +
      '\t개발 언어: Python\n\n' +
      '\t개발 모듈: python-telegram-bot api\n\n' +
      '**GitHub**:\t[https://github.com/JaeSeoKim/Ze_Robot](https://github.com/JaeSeoKim/Ze_Robot)\n\n',
    img:
      '/image/projects/제로페이 챗봇 (서울시 챗봇톤 참여 작품) - telegram.png',
    date: '2019.10.09',
    bgColor1: '#12c2e9',
    bgColor2: '#86a8e7',
    textColor: '#FFF',
    icon: <MdChat />
  }
]

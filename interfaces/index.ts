import * as CSS from 'csstype'

export type ProjectType = {
  title: string
  markdown: string
  img: string
  date: string
  bgColor1: CSS.Color
  bgColor2: CSS.Color
  textColor: CSS.Color
  icon: JSX.Element
}

export type timeLineType = {
  title: string
  subTitle?: string
  innerText?: string | JSX.Element
  date?: string
  bgColor1: CSS.Color
  bgColor2: CSS.Color
  textColor: CSS.Color
  icon: JSX.Element
}
export type profileType = {
  githubId: string
  name_en: string
  name_ko: string
  name_ch: string
  img: string
  about: string
  education: timeLineType[]
  awards: timeLineType[]
  certification: timeLineType[]
  skills: timeLineType[]
  lecture: timeLineType[]
}

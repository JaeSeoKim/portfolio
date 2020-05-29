import * as CSS from 'csstype'

export type timeLineType = {
  title: string
  subTitle: string
  innerText?: string
  date: string
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
}

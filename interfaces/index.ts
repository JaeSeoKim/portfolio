import * as CSS from 'csstype'

export type education = {
  title: string
  subTitle: string
  innerText?: string
  date: string
  bgColor1: CSS.Color
  bgColor2: CSS.Color
  textColor: CSS.Color
  icon: JSX.Element
}
export type profileData = {
  githubId: string
  name_en: string
  name_ko: string
  name_ch: string
  img: string
  about: string
  education: education[]
}

import { NextPage } from 'next'

interface Props {
  userAgent?: string
}

// TODO: 프로젝트 설명 페이지 MarkDown 형태로 보여주기!

const Page: NextPage<Props> = ({ userAgent }) => (
  <main>Your user agent: {userAgent}</main>
)

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Page

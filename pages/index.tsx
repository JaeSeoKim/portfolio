import Divder from '../components/common/Divder'
import GitContributions from '../components/profile/GitContributions'
import { profileData } from '../setting/profile'
import TimeLine from '../components/profile/TimeLine'
import Profile from '../components/profile/Profile'

const IndexPage = () => {
  return (
    <div className='flex justify-center flex-col'>
      <Profile profileData={profileData} />
      <GitContributions
        className={'m-4 mx-auto'}
        githubId={profileData.githubId}
      />
      <Divder color id='Education' />
      <TimeLine
        title={'Education'}
        className='mx-4'
        data={profileData.education}
      />
      <Divder color id='Awards' />
      <TimeLine title={'Awards'} className='mx-4' data={profileData.awards} />
    </div>
  )
}

export default IndexPage

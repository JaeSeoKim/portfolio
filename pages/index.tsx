import Divder from '../components/common/Divder'
import GitContributions from '../components/profile/GitContributions'
import { profileData } from '../setting/profile'
import TimeLineGradient from '../components/profile/TimeLineGradient'
import Profile from '../components/profile/Profile'
import ProjectList from '../components/profile/ProjectList'
import { projectsData } from '../setting/project'
import { NextPage } from 'next'

type Props = {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className='flex justify-center flex-col'>
      <Profile profileData={profileData} />
      <GitContributions
        className={'m-4 mx-auto'}
        githubId={profileData.githubId}
      />
      <Divder color id='Education' />
      <TimeLineGradient
        title={'Education'}
        className='mx-4'
        data={profileData.education}
      />
      <Divder color id='Awards' />
      <TimeLineGradient
        title={'Awards'}
        className='mx-4'
        data={profileData.awards}
      />
      <Divder color id='Certification' />
      <TimeLineGradient
        title={'Certification'}
        className='mx-4'
        data={profileData.certification}
      />
      <Divder color id='Skills' />
      <TimeLineGradient
        title={'Skills'}
        className='mx-4'
        data={profileData.skills}
      />
      <Divder color id='Projects' />
      <ProjectList data={projectsData} />
      <Divder color id='Lecture' />
      <TimeLineGradient
        title={'Lecture'}
        className='mx-4'
        data={profileData.lecture}
      />
    </div>
  )
}

export default Page

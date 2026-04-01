import OurTeam from '@/component/about/OurTeam'
import Ourvision from '@/component/about/Ourvision'
import Progress from '@/component/about/Progress'
import Vision from '@/component/about/Vision'
import ShineLine from '@/component/home/ShineLine'
import Subscriptions from '@/component/home/Subscriptions'
import OurVision2 from '@/component/about/OurVision2'

const page = () => {
  return (
    <div>
        <Progress />
        <Ourvision />
        <OurVision2 />
        <OurTeam />
        <ShineLine />
        <Vision />
        <Subscriptions />
    </div>
  )
}

export default page
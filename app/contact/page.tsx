import Connect from '@/component/contact/Connect'
import Location from '@/component/contact/Location'
import Looking from '@/component/contact/Looking'
import Subscriptions from '@/component/home/Subscriptions'
import React from 'react'

const page = () => {
  return (
    <div>
        <Connect />
        <Looking />
        <Location />
        <Subscriptions />
        
    </div>
  )
}

export default page
import React from 'react'
import Firstcomp from '../../components/Firstcomp'
import Secondcomp from '../../components/Secondcomp'
import Thirdcomp from '../../components/Thirdcomp'
import Fourthcomp from '../../components/Fourthcomp'
import Fifthcomp from '../../components/Fifthcomp'
import Banner from '../../components/Banner'

const Home = () => {
  return (
    <div className='font-mono'>
      {/* banner */}
      <Banner/>
      {/* 1nd component */}
      <Firstcomp/>
      {/* 2nd component */}
      <Secondcomp/>
      {/* 3rd component  */}
      <Thirdcomp/> 
      {/* 4th  component  */}
      <Fourthcomp/>
      {/* 5th  component  */}
      <Fifthcomp/>
    </div>
  )
}

export default Home
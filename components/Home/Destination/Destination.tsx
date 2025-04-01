import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className="pt-15 pb-15">
      {/* SectionHeading */}
      <SectionHeading heading="Exploring Popular Destination" />
      
      {/* Section Content */}
      <div className="mt-14 w-[-80px] height-[10px] mx-auto"></div>

      {/* slider */}
      <DestinationSlider />
    </div>
  )
}

export default Destination
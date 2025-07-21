import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import { testimonialData } from '../../resources/Constants'
import GlowCard from '../../components/GlowCard'

const Testimonials = ({refData}: {refData:React.RefObject<HTMLDivElement | null>}) => {
  return (
    <section
    
    ref={refData}
    className='flex-center section-padding'
    >
      <div className='w-full px-5 md:px-10'>
            <SectionHeader
            title="Don't Just Take My Word for It..."
            subtitle='Real Words. Real Impact. 💬'
            />

            <div className='lg:columns-3 md:columns-2 columns-1
            mt-16
            '>
                 {testimonialData.map((item, index)=>(
                   <GlowCard index={index} key={index} card={item} >
                        <div className='flex gap-x-3 items-center'>
                            <div>

                            <img className='h-[50px] rounded-3xl' src={item.imgPath} alt={`${item.name}'s review`} />
                            </div>

                              <div>
                            <p className='font-bold'>{item.name}</p>
                            <p className='text-white'>{item.mentions}</p>
                        </div> 
                        </div>
                     
                   </GlowCard>
                 ))}   
            </div>
      </div>
    </section>
  )
}

export default Testimonials

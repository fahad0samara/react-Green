import React, { useState } from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'

const testimonials = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    quote: "At our site, we believe in the power of community. That's why we offer a range of resources to help you learn from others who share your passion for plants. From forums and discussion boards to video tutorials and expert tips",
    author: 'Adetola Afolabi',
    origin: 'CEO of Planting'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1559418162-0d309d8d10a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    quote: 'Here at our platform, we value the strength of community and strive to provide a variety of resources to facilitate learning from like-minded individuals who share your passion. Whether its through discussion boards, expert tutorials or engaging forums, weve got you covered',
    author: 'Maaz Ijaz',
    origin: ''
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1586716402203-79219bede43c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;w=200',
    quote: '"We believe that together we can achieve great things. Thats why we provide a diverse range of resources to help you connect with others who share your interests and passions. From lively forums and discussion boards to insightful video tutorials and expert tips, weve got everything you need to learn and grow alongside a vibrant community.',
    author: '',
    origin: ''
  }

]

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevious = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className='home-testimonials'>
      <div className='home-container1'>
        <div className='home-content2'>
          <div className='active-quote quote'>
            <img
              alt='image'
              src={testimonials[activeIndex].image}
              role='quote-avatar'
              className='home-image07' />
            <p role='quote-content' className='home-quote1'>
              {testimonials[activeIndex].quote}
            </p>
            <div className='quote-author'>
              {testimonials[activeIndex].author && <p role='quote-author' className='home-author'>
                                                     {testimonials[activeIndex].author}
                                                   </p>}
              {testimonials[activeIndex].origin && <p role='quote-origin' className='home-origin'>
                                                     {testimonials[activeIndex].origin}
                                                   </p>}
            </div>
          </div>
          <div className='quote-navigation'>
            <button className='quote-button' onClick={handlePrevious}>
              <GrLinkPrevious />
            </button>
            <button className='quote-button' onClick={handleNext}>
              <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider

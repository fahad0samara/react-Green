import React, { useState } from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import { FcMenu } from 'react-icons/fc'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'
import { BsArrowUpRight } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'

import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu () {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='home-container'>
      <Helmet>
        <title>
          Green
        </title>
        <meta property='og:title' content='Remarkable template' />
      </Helmet>
      <div className='home-navbar'>
        <header data-thq='thq-navbar' className='home-navbar-interactive'>
          <div className='home-branding'>
            <span className='home-text'>Green</span>
            <svg viewBox='0 0 1024 1024' className='home-icon'>
              <path d='M128 128h768v768h-768z'></path>
            </svg>
            <span className='home-text01'>Green</span>
          </div>
          <div data-thq='thq-navbar-nav' data-role='Nav' className='home-desktop-menu'>
            <nav className='home-links'>
              <button className='home-button button'>
                <span>Our offers</span>
              </button>
              <button className='home-button01 button'>
                <span>Get a fast quote</span>
              </button>
              <button className='home-button02 button'>
                Menu
              </button>
            </nav>
          </div>
          <div data-thq='thq-burger-menu' className='home-burger-menu'>
            <FcMenu size={28} onClick={toggleMenu} className='' />
          </div>
          <div data-thq='thq-mobile-menu' className={`home-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className='home-top'>
              <div className='home-branding1'>
                <span className='home-text04'>Green</span>
                <svg viewBox='0 0 1024 1024' className='home-icon02'>
                  <path d='M128 128h768v768h-768z'></path>
                </svg>
              </div>
              <div className='home-menu-close'>
                <AiFillCloseCircle size={26} onClick={toggleMenu} />
              </div>
            </div>
            <nav className='home-links1'>
              <button className='home-button03 button'>
                <span>Our offers</span>
              </button>
              <button className='home-button04 button'>
                <span>Get a fast quote</span>
              </button>
              <button className='home-button05 button'>
                Menu
              </button>
            </nav>
          </div>
        </header>
      </div>
      <header className='home-hero'>
        <div className='home-content'>
          <h1 className='home-title'>We help you scale your plants</h1>
          <span className='home-description'>We are a team of designers and developers that create high quality</span>
          <img
            alt='image'
            src='/playground_assets/line-300w.png'
            loading='lazy'
            className='home-image' />
        </div>
        <div className='home-image01'>
          <img
            alt='image'
            src='https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI3fHxwbGFudHN8ZW58MHx8fHwxNjgxNzI1MTYx&amp;ixlib=rb-4.0.3&amp;w=700'
            loading='eager'
            className='home-image02' />
          <img alt='image' src='https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQzfHxwbGFudHN8ZW58MHx8fHwxNjgxNzI1MTYx&amp;ixlib=rb-4.0.3&amp;h=500'
            className='home-image03' />
          <img alt='image' src='https://images.unsplash.com/photo-1618220179428-22790b461013?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxwbGFudHN8ZW58MHx8fHwxNjgxNzI1MTYw&amp;ixlib=rb-4.0.3&amp;h=500'
            className='home-image04' />
        </div>
      </header>
      <section className='home-mission'>
        <h2 className='home-text08'>We are a team of professionals who are passionate about helping</h2>
        <button className='button home-button06'>
          <span className='home-text09'>Learn about our mission</span>
        </button>
      </section>
      <section className='home-improve'>
        <div className='home-heading'>
          <h2 className='home-text10'>We help you improve your plants</h2>
          <p className='home-text11'>
          </p>
        </div>
        <div className='home-tabs'>
          <div className='home-switches'>
            <span className='switch switch-active'>Connect with professionals</span>
            <span className='switch'>Connect with mentors</span>
          </div>
          <div className='home-content1'>
            <div className='home-details'>
              <div className='home-header'>
                <h2 className='home-text12'>Connect with professionals</h2>
                <div className='home-description1'>
                  <p className='home-text13'>
                    Welcome to our site! We're dedicated to helping you scale your plants and take your gardening to the next level. With our expert advice and top-quality products,
                    you'll be able to grow healthier plants, increase your yield, and reach new heights of success. Whether you're a seasoned pro or just starting out,
                    we're here to support you every step of the way. Let's get started and help your plants thrive!
                  </p>
                </div>
              </div>
              <button className='button'>
                <span className='home-text15'><span>get started</span>
                <br></br>
                </span>
              </button>
            </div>
            <div className='home-image05'>
              <img
                alt='image'
                src='https://images.unsplash.com/photo-1598114335739-c36310a137ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDY4fHxwbGFudHN8ZW58MHx8fHwxNjgxNzI1MTk1&amp;ixlib=rb-4.0.3&amp;w=700'
                loading='lazy'
                className='home-image06' />
            </div>
          </div>
        </div>
      </section>
      <section className='home-testimonials'>
        <div className='home-container1'>
          <div className='home-content2'>
            <div className='active-quote quote'>
              <img
                alt='image'
                src='https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
                role='quote-avatar'
                className='home-image07' />
              <p role='quote-content' className='home-quote1'>
                At our site, we believe in the power of community. That's why we offer a range of resources to help you learn from others who share your passion for plants. From
                forums and discussion boards to video tutorials and expert tips
              </p>
              <div className='home-author'>
                <span role='quote-author' className='home-name'><span>Adetola Afolabi</span></span>
                <span role='quote-origin' className='home-origin'><span>CEO of Planting</span></span>
              </div>
            </div>
            <div className='quote'>
              <img
                alt='image'
                src='https://images.unsplash.com/photo-1559418162-0d309d8d10a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                role='quote-avatar'
                className='home-image08' />
              <p role='quote-content' className='home-quote3'>
                <span className='home-text19'>"This is a very fascinating website&quot</span>
                <br></br>
                <span>"I love the way it looks and the way it works. It's very easy to use and I love the way it looks and the way it works. It's very easy to use and I love the way it looks and the way &quot</span>
                <br></br>
              </p>
              <div className='home-author1'>
                <span role='quote-author' className='home-name1'>Maaz Ijaz</span>
                <span role='quote-origin' className='home-origin1'><span></span></span>
              </div>
            </div>
            <div className='quote'>
              <img
                alt='image'
                src='https://images.unsplash.com/photo-1586716402203-79219bede43c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;w=200'
                role='quote-avatar'
                className='home-image09' />
              <p role='quote-content' className='home-quote5'>
                <span className='home-text23'>"I really love how well this is done! :D&quot</span>
                <br></br>
                <span>"I really love how well this is done! :D I really love how well this is done! :D I really love how well this is done! :D I really love how well this is done! :D I really love how well &quot</span>
                <br></br>
                <span></span>
                <br></br>
              </p>
              <div className='home-author2'>
                <span role='quote-author' className='home-name2'></span>
                <span role='quote-origin' className='home-origin2'></span>
              </div>
            </div>
            <div className='quote'>
              <img
                alt='image'
                src='https://images.unsplash.com/photo-1559138741-441acdebf148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                role='quote-avatar'
                className='home-image10' />
              <p role='quote-content' className='home-quote7'>
                <span className='home-text29'>"Nothing will every beat this!&quot</span>
                <br></br>
                <span></span>
                <br></br>
              </p>
              <div className='home-author3'>
                <span role='quote-author' className='home-name3'><span>Rebo</span></span>
                <span role='quote-origin' className='home-origin3'>Jordy</span>
              </div>
            </div>
            <div className='home-controls'>
              <div id='quote-previous' className='home-previous'>
                <GrLinkPrevious className='home-image11' />
              </div>
              <div id='quote-next' className='home-next'>
                <GrLinkNext className='home-image12' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML html={`<script>
              const quotes = document.querySelectorAll('.quote')
              const quoteControls = document.querySelectorAll('.home-controls')
              let currentQuote = 0
              quotes[currentQuote].classList.add('active-quote')
              quoteControls.forEach((control) => {
                control.addEventListener('click', () => {
                  quotes[currentQuote].classList.remove('active-quote')
                  if (control.id === 'quote-next') {
                    currentQuote = (currentQuote + 1) % quotes.length
                  } else {
                    if (currentQuote === 0) {
                      currentQuote = quotes.length
                    }
                    currentQuote = (currentQuote - 1) % quotes.length
                  }
                  quotes[currentQuote].classList.add('active-quote')
                })
              })
            </script>`}></DangerousHTML>
        </div>
      </section>
      <section className='home-services1'>
        <div className='home-heading1'>
          <h2 className='home-text35'>Take a look at the latest articles</h2>
          <p className='home-text36'>
            At our site, we're always on the lookout for the latest news and insights in the world of plants and gardening.
          </p>
        </div>
        <div className='home-sections'>
          <div className='home-row3'>
            <div className='home-section'>
              <div className='home-header1'>
                <h3 className='home-text37'>The Top 10 Plants for Beginners</h3>
                <div className='home-description2'>
                  <p className='home-text38'>
                    In this article, we'll share our favorite plants for those new to gardening. From easy-to-care-for succulents to colorful flowering plants, we'll help you find the
                    perfect plants to get started with.
                  </p>
                  <p className='home-text39'>
                    This article will also include photos of each plant so readers can see what they look like.
                    <span dangerouslySetInnerHTML={{ __html: ' ' }} />
                  </p>
                </div>
              </div>
              <button className='button'>
                <span><span>Read more</span>
                <br></br>
                </span>
              </button>
            </div>
            <div className='home-section1'>
              <div className='home-header2'>
                <h3 className='home-text43'>Pest Control 101</h3>
                <div className='home-description3'>
                  <p className='home-text44'>
                    How to Keep Your Plants Safe from Common Pests": In this article, we'll cover the most common pests that can affect plants, such as aphids, spider mites, and whiteflies.
                    We'll provide tips for identifying these pests and offer natural remedies and preventative measures readers can take to keep their plants healthy
                  </p>
                  <p className='home-text45'>
                    We'll also include photos of each pest so readers can identify them if they spot them in their garden.
                    <span dangerouslySetInnerHTML={{ __html: ' ' }} />
                  </p>
                </div>
              </div>
              <button className='button'>
                <span><span>Read more</span>
                <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className='home-row4'>
            <div className='home-section2'>
              <div className='home-header3'>
                <h3 className='home-text49'>Maximizing Your Indoor Garden Space</h3>
                <div className='home-description4'>
                  <p className='home-text50'>
                    For those who don't have a lot of outdoor space, this article will provide ideas for creating an indoor garden oasis. We'll cover space-saving techniques, such as
                    vertical gardening and hanging plants,
                  </p>
                  <p className='home-text51'>
                    as well as our favorite indoor plant picks. We'll also provide tips for caring for indoor plants, such as proper watering and lighting requirements.
                    <span dangerouslySetInnerHTML={{ __html: ' ' }} />
                  </p>
                </div>
              </div>
              <button className='button'>
                <span><span>Read more</span>
                <br></br>
                </span>
              </button>
            </div>
            <div className='home-section3'>
              <div className='home-header4'>
                <h3 className='home-text55'>The Benefits of Gardening for Your Mental Health</h3>
                <div className='home-description5'>
                  <p className='home-text56'>
                    In this article, we'll explore the many ways that gardening can improve mental health. We'll cover topics such as reducing stress and anxiety, boosting mood and
                    self-esteem, and promoting mindfulness and relaxation. We'll also include tips for incorporating gardening into a daily self-care routine
                  </p>
                  <p className='home-text57'>
                    and provide resources for readers who want to learn more about the mental health benefits of gardening.
                    <span dangerouslySetInnerHTML={{ __html: ' ' }} />
                  </p>
                </div>
              </div>
              <button className='button'>
                <span><span>Read more</span>
                <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='home-banner'>
        <div className='home-container2'>
          <div className='home-header5'>
            <h2 className='home-title1'>Let's work together to make your garden grow</h2>
            <p className='home-description6'>
              Are you ready to take your gardening to the next level? Look no further than our team of expert gardeners! We're here to help you grow the garden of your dreams,
              whether you're a seasoned pro or just starting out
            </p>
          </div>
          <button className='button'>
            <span><span>Book a call</span>
            <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className='home-mission1'>
        <div className='home-content4'>
          <h2 className='home-text64'>Our mission is to help <br></br> you grow the garden of your dreams</h2>
          <div className='home-description7'>
            <p className='home-text65'>
              At Green , we believe that everyone deserves to have a beautiful garden that brings them joy and relaxation. That's why our mission is to help you grow the garden
              of your dreams! Whether you're looking to create a lush backyard oasis or a vibrant indoor garden, our team of expert gardeners is here to help. We'll
              work with you to understand your vision and provide customized solutions that fit your unique needs and preferences. From plant selection and soil preparation
              to ongoing maintenance and care
            </p>
            <p className='home-text66'>
              , we'll be there every step of the way to ensure your garden thrives. We're here to help you grow the garden of your dreams, so let's get started!
            </p>
          </div>
        </div>
      </section>
      <section className='home-galleries'>
        <div className='home-gallery-desktop'>
          <div className='home-column07'>
            <img alt='image' src='https://images.unsplash.com/photo-1563297729-0dcb084b5c1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2MHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=1300'
              className='home-image44' />
          </div>
          <div className='home-column08'>
            <div className='home-row5'>
              <div className='home-yellow'></div>
              <img alt='image' src='https://images.unsplash.com/photo-1589998772499-f1421f6085bd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1MHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=1300'
                className='home-image45' />
            </div>
            <div className='home-row6'>
              <img alt='image' src='https://images.unsplash.com/photo-1597394982558-65b8f037fce9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=500'
                className='home-image46' />
              <img alt='image' src='https://images.unsplash.com/photo-1597394982558-65b8f037fce9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=500'
                className='home-image47' />
            </div>
          </div>
        </div>
        <div className='home-gallery-mobile'>
          <div className='home-column09'>
            <img alt='image' src='https://images.unsplash.com/photo-1597394982558-65b8f037fce9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=500'
              className='home-image48' />
            <img alt='image' src='https://images.unsplash.com/photo-1597394982558-65b8f037fce9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=500'
              className='home-image49' />
          </div>
          <div className='home-column10'>
            <img alt='image' src='https://images.unsplash.com/photo-1589998772499-f1421f6085bd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1MHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=1300'
              className='home-image50' />
            <div className='home-row7'>
              <img alt='image' src='https://images.unsplash.com/photo-1563297729-0dcb084b5c1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2MHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=1300'
                className='home-image51' />
            </div>
          </div>
        </div>
      </section>
      <section className='home-mission2'>
        <div className='home-content5'>
          <cite className='home-quote8'>At Green, we're passionate about green living and sustainability.</cite>
          <div className='home-author4'>
            <img alt='image' src='https://images.unsplash.com/photo-1559192823-e1d8e87def54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              className='home-avatar' />
            <div className='home-details1'>
              <span className='home-name4'>Munib Saad <span dangerouslySetInnerHTML={{ __html: ' ' }} /></span>
              <span className='home-text69'>founder Green</span>
            </div>
          </div>
        </div>
      </section>
      <section className='home-newsletter'>
        <div className='home-header6'>
          <h2 className='home-text67'>Stay up to date with the latest news</h2>
          <p className='home-text68'>
            Sign up for our newsletter to receive the latest news and updates from
            <span dangerouslySetInnerHTML={{ __html: ' ' }} />
            <span className='home-text69'>Green</span>
          </p>
        </div>
        <div className='home-content6'>
          <div className='home-email'>
            <input type='text' placeholder='Enter your email' className='home-textinput input' />
            <div className='home-submit'>
              <BsArrowUpRight className='home-image52' />
            </div>
          </div>
          <div className='home-notice'>
            <span className='home-notice1'>By signing up, you agree to our <span dangerouslySetInnerHTML={{ __html: ' ' }} /> <a href='#' className='home-link1'>Privacy Policy</a> <span dangerouslySetInnerHTML={{ __html: ' ' }} /> and <span dangerouslySetInnerHTML={{ __html: ' ' }} /> <a href='#' className='home-link1'>Terms of Service</a> <span dangerouslySetInnerHTML={{ __html: ' ' }} /></span>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <div className='
                                Rights
                                      '>
        <p className='
                                  Rights-Reserved
                                '>
          © 2023 Green | All Rights Reserved
        </p>
        <p className='
                                  Rights-Made
                        '>
          Made with ❤️ fahad
        </p>
        <p className='Rights-Made1'>
          <a className='' href='#'>Privacy Policy</a>
          <span>|</span>
          <a className='' href='#'>Terms of Service</a>
        </p>
      </div>
    </div>
  )
}

export default Home

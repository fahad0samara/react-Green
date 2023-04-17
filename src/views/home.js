import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Card from '../components/card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          Green
        </title>
        <meta property="og:title" content="Remarkable template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <span className="home-text">Green</span>
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 128h768v768h-768z"></path>
            </svg>
            <span className="home-text01">Green</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav className="home-links">
              <button className="home-button button">
                <span>Our offers</span>
              </button>
              <button className="home-button01 button">
                <span>Get a fast quote</span>
              </button>
              <button className="home-button02 button">Menu</button>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <img
              alt="image"
              src="/playground_assets/group%202084%5B1%5D.svg"
              className="home-hamburger"
            />
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-top">
              <div className="home-branding1">
                <span className="home-text04">Green</span>
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M128 128h768v768h-768z"></path>
                </svg>
                <span className="home-text05">Green</span>
              </div>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <button className="home-button03 button">
                <span>Our offers</span>
              </button>
              <button className="home-button04 button">
                <span>Get a fast quote</span>
              </button>
              <button className="home-button05 button">Menu</button>
            </nav>
            <div className="home-social-bar">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero">
        <div className="home-content">
          <h1 className="home-title">We help you scale your plants

          </h1>
          <span className="home-description">
            We are a team of designers and developers that create high quality
     
         
          </span>
          <img
            alt="image"
            src="/playground_assets/line-300w.png"
            loading="lazy"
            className="home-image"
          />
        </div>
        <div className="home-image01">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI3fHxwbGFudHN8ZW58MHx8fHwxNjgxNzI1MTYx&amp;ixlib=rb-4.0.3&amp;w=700"
            loading="eager"
            className="home-image02"
          />
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQzfHxwbGFudHN8ZW58MHx8fHwxNjgxNzI1MTYx&amp;ixlib=rb-4.0.3&amp;h=500"
            className="home-image03"
          />
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxwbGFudHN8ZW58MHx8fHwxNjgxNzI1MTYw&amp;ixlib=rb-4.0.3&amp;h=500"
            className="home-image04"
          />
        </div>
      </header>
      <section className="home-mission">
        <h2 className="home-text08">
          We are a team of professionals who are passionate about helping
         
        </h2>
        <button className="button home-button06">
          <span className="home-text09">Learn about our mission</span>
        </button>
      </section>
      <section className="home-improve">
        <div className="home-heading">
          <h2 className="home-text10">
            We help you improve your plants
          
          </h2>
          <p className="home-text11">

           
          </p>
        </div>
        <div className="home-tabs">
          <div className="home-switches">
            <span className="switch switch-active">
              Connect with professionals
            </span>
            <span className="switch">Connect with mentors</span>
          </div>
          <div className="home-content1">
            <div className="home-details">
              <div className="home-header">
                <h2 className="home-text12">
                  Connect with professionals
                  

                </h2>
                <div className="home-description1">
                  <p className="home-text13">
              "Welcome to our site! We're dedicated to helping you scale your plants and take your gardening to the next level. With our expert advice and top-quality products, you'll be able to grow healthier plants, increase your yield, and reach new heights of success. Whether you're a seasoned pro or just starting out, we're here to support you every step of the way. Let's get started and help your plants thrive!"
                  </p>
                
                </div>
              </div>
              <button className="button">
                <span className="home-text15">
                  <span>
                    get
                   started

                  </span>
                  <br></br>
                </span>
              </button>
            </div>
            <div className="home-image05">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1598114335739-c36310a137ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDY4fHxwbGFudHN8ZW58MHx8fHwxNjgxNzI1MTk1&amp;ixlib=rb-4.0.3&amp;w=700"
                loading="lazy"
                className="home-image06"
              />
            </div>
          </div>
        </div>
      </section>
 
      <section className="home-testimonials">
        <div className="home-container1">
          <div className="home-content2">
            <div className="active-quote quote">
              <img
                alt="image"
                src="/playground_assets/foto-sushi-6anudmpilw4-unsplash-200h.png"
                role="quote-avatar"
                className="home-image07"
              />
              <p role="quote-content" className="home-quote1">
                &quot;
                At our site, we believe in the power of community. That's why we offer a range of resources to help you learn from others who share your passion for plants. From forums and discussion boards to video tutorials and expert tips, 

                &quot;
              </p>
              <div className="home-author">
                <span role="quote-author" className="home-name">
                  Michael B.
                </span>
                <span role="quote-origin" className="home-origin">
                  Clean Tech
                </span>
              </div>
            </div>
            <div className="quote">
              <img
                alt="image"
                src="/playground_assets/foto-sushi-ocow8-uiajk-unsplash%20%5B1%5D%201-200h.png"
                role="quote-avatar"
                className="home-image08"
              />
              <p role="quote-content" className="home-quote3">
                <span className="home-text19">
                  &quot;This is a very fascinating website&quot;
                </span>
                <br></br>
                <span>
                  eiusmod tempor incididunt ut laborqua. Ut enim ad minim
                  veniam, quis nostrud exercitation.
                </span>
                <br></br>
              </p>
              <div className="home-author1">
                <span role="quote-author" className="home-name1">
                  Michael B.
                </span>
                <span role="quote-origin" className="home-origin1">
                  Clean Tech
                </span>
              </div>
            </div>
            <div className="quote">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1586716402203-79219bede43c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;w=200"
                role="quote-avatar"
                className="home-image09"
              />
              <p role="quote-content" className="home-quote5">
                <span className="home-text23">
                  &quot;I really love how well this is done! :D&quot;
                </span>
                <br></br>
                <span>eiusmod tempor incididunt ut labore et</span>
                <br></br>
                <span> dolore magna aliqua. Ut enim </span>
                <br></br>
              </p>
              <div className="home-author2">
                <span role="quote-author" className="home-name2">
                  Herola
                </span>
                <span role="quote-origin" className="home-origin2">
                  TechCo
                </span>
              </div>
            </div>
            <div className="quote">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;w=200"
                role="quote-avatar"
                className="home-image10"
              />
              <p role="quote-content" className="home-quote7">
                <span className="home-text29">
                  &quot;Nothing will every beat this!&quot;
                </span>
                <br></br>
                <span>
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation Nsdadasd
                  asdadasd
                </span>
                <br></br>
              </p>
              <div className="home-author3">
                <span role="quote-author" className="home-name3">
                  John A.
                </span>
                <span role="quote-origin" className="home-origin3">
                  Rebo
                </span>
              </div>
            </div>
            <div className="home-controls">
              <div id="quote-previous" className="home-previous">
                <img
                  alt="image"
                  src="/playground_assets/frame.svg"
                  className="home-image11"
                />
              </div>
              <div id="quote-next" className="home-next">
                <img
                  alt="image"
                  src="/playground_assets/frame.svg"
                  className="home-image12"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
  /*
              Quote Slider - Code Embed
              */

              let current = 1;

              const nextButton = document.querySelector("#quote-next");
              const previousButton = document.querySelector("#quote-previous");
              const quotes = document.querySelectorAll(".quote");

              if(nextButton&&previousButton){
                nextButton.addEventListener("click", () => {
                quotes.forEach((quote) => {
                quote.classList.remove("active-quote");
                });

                current == quotes.length ? current = 1 : current++
                quotes[current-1].classList.add("active-quote")
                });

                previousButton.addEventListener("click", () => {
                quotes.forEach((quote) => {
                quote.classList.remove("active-quote");
                });

                current == 1 ? current = quotes.length : current--
                quotes[current-1].classList.add("active-quote")
                });

              }
</script>
`}
          ></DangerousHTML>
        </div>
      </section>
   
      <section className="home-services1">
        <div className="home-heading1">
          <h2 className="home-text35">Take a look at the latest articles</h2>
          <p className="home-text36">
            At our site, we're always on the lookout for the latest news and insights in the world of plants and gardening. 
          </p>
        </div>
        <div className="home-sections">
          <div className="home-row3">
            <div className="home-section">
              <div className="home-header1">
                <h3 className="home-text37">The Top 10 Plants for Beginners</h3>
                <div className="home-description2">
                  <p className="home-text38">
                  In this article, we'll share our favorite plants for those new to gardening. From easy-to-care-for succulents to colorful flowering plants, we'll help you find the perfect plants to get started with.
                  </p>
                  <p className="home-text39">
                 This article will also include photos of each plant so readers can see what they look like.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <button className="button">
                <span>
                  <span>Read more</span>
                  <br></br>
                </span>
              </button>
            </div>
            <div className="home-section1">
              <div className="home-header2">
                <h3 className="home-text43">Pest Control 101</h3>
                <div className="home-description3">
                  <p className="home-text44">
                How to Keep Your Plants Safe from Common Pests": In this article, we'll cover the most common pests that can affect plants, such as aphids, spider mites, and whiteflies. We'll provide tips for identifying these pests and offer natural remedies and preventative measures readers can take to keep their plants healthy
                  </p>
                  <p className="home-text45">
                 We'll also include photos of each pest so readers can identify them if they spot them in their garden.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <button className="button">
                <span>
                  <span>Read more</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="home-row4">
            <div className="home-section2">
              <div className="home-header3">
                <h3 className="home-text49">Maximizing Your Indoor Garden Space</h3>
                <div className="home-description4">
                  <p className="home-text50">
                     For those who don't have a lot of outdoor space, this article will provide ideas for creating an indoor garden oasis. We'll cover space-saving techniques, such as vertical gardening and hanging plants,
                  </p>
                  <p className="home-text51">
                  as well as our favorite indoor plant picks. We'll also provide tips for caring for indoor plants, such as proper watering and lighting requirements.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <button className="button">
                <span>
                  <span>Read more</span>
                  <br></br>
                </span>
              </button>
            </div>
            <div className="home-section3">
              <div className="home-header4">
                <h3 className="home-text55">The Benefits of Gardening for Your Mental Health</h3>
                <div className="home-description5">
                  <p className="home-text56">
                  In this article, we'll explore the many ways that gardening can improve mental health. We'll cover topics such as reducing stress and anxiety, boosting mood and self-esteem, and promoting mindfulness and relaxation. We'll also include tips for incorporating gardening into a daily self-care routine
                  </p>
                  <p className="home-text57">
                  and provide resources for readers who want to learn more about the mental health benefits of gardening.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <button className="button">
                <span>
                  <span>Read more</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-banner">
        <div className="home-container2">
          <div className="home-header5">
            <h2 className="home-title1">
              Let's work together to make your garden grow
            </h2>
            <p className="home-description6">
              Are you ready to take your gardening to the next level? Look no further than our team of expert gardeners! We're here to help you grow the garden of your dreams, whether you're a seasoned pro or just starting out


              
            </p>
          </div>
          <button className="button">
            <span>
              <span>Book a call</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-mission1">
        <div className="home-content4">
          <h2 className="home-text64">
            Our mission is to help
                 <br></br>
            you grow the garden of your dreams
          </h2>
          <div className="home-description7">
            <p className="home-text65">
              At 
        Green
              
              , we believe that everyone deserves to have a beautiful garden that brings them joy and relaxation. That's why our mission is to help you grow the garden of your dreams! Whether you're looking to create a lush backyard oasis or a vibrant indoor garden, our team of expert gardeners is here to help. We'll work with you to understand your vision and provide customized solutions that fit your unique needs and preferences. From plant selection and soil preparation to ongoing maintenance and care
            </p>
            <p className="home-text66">
            , we'll be there every step of the way to ensure your garden thrives. We're here to help you grow the garden of your dreams, so let's get started!
            </p>
          </div>
        </div>
      </section>
      <section className="home-galleries">
        <div className="home-gallery-desktop">
          <div className="home-column07">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1563297729-0dcb084b5c1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2MHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=1300"
              className="home-image44"
            />
          </div>
          <div className="home-column08">
            <div className="home-row5">
              <div className="home-yellow"></div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1589998772499-f1421f6085bd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1MHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=1300"
                className="home-image45"
              />
            </div>
            <div className="home-row6">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1597394982558-65b8f037fce9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=500"
                className="home-image46"
              />
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1597394982558-65b8f037fce9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=500"
                className="home-image47"
              />
            </div>
          </div>
        </div>
        <div className="home-gallery-mobile">
          <div className="home-column09">
            <img
              alt="image"
               src="https://images.unsplash.com/photo-1597394982558-65b8f037fce9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=500"
              className="home-image48"
            />
            <img
              alt="image"
                src="https://images.unsplash.com/photo-1597394982558-65b8f037fce9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=500"
              className="home-image49"
            />
          </div>
          <div className="home-column10">
          
            <img
              alt="image"
                 src="https://images.unsplash.com/photo-1589998772499-f1421f6085bd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1MHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=1300"
              className="home-image50"
            />
            <div className="home-row7">
              <img
                alt="image"
             src="https://images.unsplash.com/photo-1563297729-0dcb084b5c1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2MHx8cGxhbnRzfGVufDB8fHx8MTY4MTczMjMxOQ&amp;ixlib=rb-4.0.3&amp;w=1300"
                className="home-image51"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-mission2">
        <div className="home-content5">
      <cite className='home-quote8'>At Green, we're passionate about green living and sustainability. </cite>
          <div className="home-author4">
            <img
              alt="image"
              src="/playground_assets/foto-sushi-ocow8-uiajk-unsplash%20%5B1%5D%201-200h.png"
              className="home-avatar"
            />
            <div className="home-details1">
              <span className="home-name4">
            fahad mokdad 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text69">founder Green
             

              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-newsletter">
        <div className="home-header6">
          <h2 className="home-text67">
            Stay up to date with the latest news
          </h2>
          <p className="home-text68">
            Sign up for our newsletter to receive the latest news and updates from
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
            <span className="home-text69">Green</span>


     
          </p>
        </div>
        <div className="home-content6">
          <div className="home-email">
            <input
              type="text"
              placeholder="Enter your email"
              className="home-textinput input"
            />
            <div className="home-submit">
              <img
                alt="image"
                src="/playground_assets/frame.svg"
                className="home-image52"
              />
            </div>
          </div>
          <div className="home-notice">
            <span className="home-notice1">
              By signing up, you agree to our
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
              <a href="#" className="home-link1">
                Privacy Policy
              </a>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
              and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
              <a href="#" className="home-link1">
                Terms of Service
              </a>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />

              
            </span>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <div>
        <DangerousHTML
          html={`<style>
    .partner-container:hover .partner-image{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(75deg) brightness(101%) contrast(102%);
    }
</style>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home

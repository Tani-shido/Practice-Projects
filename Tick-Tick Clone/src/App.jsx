import { useState } from 'react';

function App() {
  return (
    <div>
      <TodoApp />
    </div>
  )
}

function TodoApp() {

  return (
    <div className="Container">
      <div className='main'>
        <nav className="nav">
          <div className="navHeaderLogo"><a href='http://localhost:5173/'>C<img src="https://www.svgrepo.com/show/495772/tick-circle.svg" alt="Tick Svg" width={20} />mplete it.</a></div>
          <div className="navHeaderOptions">
            <ul>
              <li><a href=''>Features</a></li>
              <li><a href=''>Download</a></li>
              <li><a href=''>Premium</a></li>
              <li><a href=''>Resources <img src="https://www.svgrepo.com/show/58069/down-arrow.svg" alt="Down arrow svg" width={10} /></a></li>
              <li><a href=''>Sign In</a></li>
            </ul>
            <button className='navSignUpInBtn'>Sign Up for Free</button>
          </div>
        </nav>

        <section className='heroSection'>
          <div className="heroDiv">
            <div className="heroHeadings">
              <h1 className='heroHeading'>Stay Organized, Stay Creative.</h1>
              <p className='heroSubHeading'>Join millions of people to capture ideas, organize life, and do<br />something creative.</p>
            </div>
            
            <div className="heroButtons">
              <button className='heroButton1'>Get Started</button>
              <button className='heroButton2'>Download</button>
            </div>
          </div>
        </section>

        <section className='heroImageSection'>
            <div className="heroImage">
                <img className='heroImage1' src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/header1.jpg" alt="Hero Main Image"/>
                <img className='heroImage2' src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/header2.jpg" alt="Hero Sub Image"/>
            </div>
            <div className="heroImage3">
                <img className='img' src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/choice1.png" alt="Editor's Choice (App Store) PNG" width={240} />
                <img className='img' src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/choice2.png" alt="App of the Day PNG" width={240} />
                <img className='img' src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/choice3.png" alt="Editor's Choice (Google Play) PNG" width={240} />
                <img className='img' src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/choice4.png" alt="Ratings PNG" width={240} />
            </div>
        </section>

        <section className='todoListSection'>

          <div className="todoListVideoSection">
            <video className='todoListVideo' loop muted playsInline>  
              <source src='https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/features/card1.mp4' type='video/mp4'/>
            </video>

          <div className="todoListTextSection">

            <p className='todoListSHeading'>
              Todo List
            </p>
            <h1 className='todoListMainHeading'>
              Organize everything in your life
            </h1>
            <p className='todoListText'>
              Whether it's work projects, personal tasks, or study plans, TickTick helps you organize and confidently tackle everything in your life.
            </p>
          </div>
          </div>
          
        </section>

        <section className='CalendarViewSection'>
          <div className="CalendarViewVideoSection">

            <video className='CalendarViewVideo' loop muted playsInline >  
              <source src='https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/features/card2.mp4' />
            </video>

          </div>

          <div className="CalendarViewTextSection">

            <p className='CalendarViewSHeading'>
              Calendar Views
            </p>
            <h1 className='CalendarViewMainHeading'>
              Easily plan your schedule
            </h1>
            <p className='CalendarViewText'>
              Different calendar views like monthly, weekly, daily, and agenda offer diverse choices for planning your time more efficiently.
            </p>
          </div>
          
        </section>
        
        <section className='PomodoroSection'>

          <div className="PomodoroVideoSection">
            <video className='PomodoroVideo' loop muted playsInline >  
              <source src='https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/features/card3.mp4' />
            </video>
          </div>

          <div className="PomodoroTextSection">

            <p className='PomodoroSHeading'>
              Pomodoro
            </p>
            <h1 className='PomodoroMainHeading'>
              Track time and stay focused
            </h1>
            <p className='PomodoroText'>
              Adopt the popular "Pomodoro Technique"—break tasks into 25-minute intervals to stay focused and achieve a productive flow.
            </p>
          </div>
          
        </section>

        <section className='HabitTrackerSection'>

          <div className="HabitTrackerVideoSection">
            <video className='HabitTrackerVideo' loop muted playsInline>  
              <source src='https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/features/card4.mp4' />
            </video>
          </div>

          <div className="HabitTrackerTextSection">

            <p className='HabitTrackerSHeading'>
              Habit Tracker
            </p>
            <h1 className='HabitTrackerMainHeading'>
              Develop and maintain good habits
            </h1>
            <p className='HabitTrackerText'>
              A rich habit library, flexible tracking options, and thoughtful data review help you build good habits effortlessly and lead a fulfilling life.
            </p>
          </div>
          
        </section>

        <section className='halfwaySection'>
          <div className="halfwayHeadingSection">
            <h1 className='headingOne'>Powerful and intuitive features</h1>
            <h1 className='headingTwo'>Simplify your daily planning</h1>
          </div>

          <div className="halfwayMainContentSection">
            <div className="halfwayButtonSection">
              <button className='halfwayButtonOne' id='halfwayButtons'><img id='svg' src='https://www.svgrepo.com/show/395397/calender.svg' alt='Calender SVG' width={20} height={20} /> Calender</button>
              <button className='halfwayButtonTwo' id='halfwayButtons'><img id='svg' src='https://www.svgrepo.com/show/377386/kanban.svg' alt='Kanban SVG' width={20} height={20} />Kanban</button>
              <button className='halfwayButtonThree' id='halfwayButtons'><img id='svg' src='https://www.svgrepo.com/show/94398/timeline.svg' alt='Timeline SVG' width={20} height={20} />Timeline</button>
              <button className='halfwayButtonFour' id='halfwayButtons'><img id='svg' src='https://www.svgrepo.com/show/491712/square-4-grid.svg' alt='Eisenhower Matrix SVG' width={20} height={20} />Eisenhower Matrix</button>
              <button className='halfwayButtonFive' id='halfwayButtons'><img id='svg' src='https://www.svgrepo.com/show/391345/sticky-note.svg' alt='Sticky Note SVG' width={20} height={20} />Sticky Note</button>
            </div>
            <div className="halfwayContentSection">
              <div className="halfwayContentImageSection">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/features/playback/calendar.jpg" alt="" />
              </div>
              <div className="halfwayContentTextSection">
                <h1>Efficient Calendar Views</h1>
                <ul>
                  <li><img src='https://www.svgrepo.com/show/520627/check.svg' alt='Check SVG' width={20}/> Monthly View gives a clear overall layout.</li>
                  <li><img src='https://www.svgrepo.com/show/520627/check.svg' alt='Check SVG' width={20}/> Weekly View clarifies busy and free intervals.</li>
                  <li><img src='https://www.svgrepo.com/show/520627/check.svg' alt='Check SVG' width={20}/> Agenda View ensures tasks are executed in order.</li>
                  <li><img src='https://www.svgrepo.com/show/520627/check.svg' alt='Check SVG' width={20}/> Multi-Day View enables dynamic adjustments.</li>
                  <li><img src='https://www.svgrepo.com/show/520627/check.svg' alt='Check SVG' width={20}/> Multi-Week View lets you shift weeks for changes.</li>
                </ul>
              </div>
            </div>
          </div>

            <div className="secondHeadingSection">
              <h1 className='FirstHeading'>Rich and diverse features</h1>
              <h1 className='SecondHeading'>Meet your unique needs</h1>
            </div>
        </section>

        <section className='nineBlocks'>
          <span id='Blocks' className="blockOne">
            <img src='https://www.svgrepo.com/show/525622/alarm.svg' alt='Constant Reminder SVG'/>
            <div>
              <h1>Constant Reminder</h1>
              <p>With constant reminder, notifications will keep ringing until you handle them.</p>
            </div>
          </span>
          <span id='Blocks' className="blockTwo">
            <img src='https://www.svgrepo.com/show/526150/repeat.svg' alt='Repeat Reminder SVG'/>
            <div>
              <h1>Repeat Reminder</h1>
              <p>With recurring rules like weekly, monthly, yearly and custom ones at your service, you'll never forget a thing.</p>
            </div>
          </span>
          <span id='Blocks' className="blockThree">
            <img src='https://www.svgrepo.com/show/522768/box-minimalistic.svg' alt='NLP SVG'/>
            <div>
              <h1>NLP</h1>
              <p>Smart time recognition from your input when adding tasks, with automatic reminders set.</p>
            </div>
          </span>
          <span id='Blocks' className="blockFour">
            <img src='https://www.svgrepo.com/show/524551/filter.svg' alt='Filter SVG'/>
            <div>
              <h1>Filter</h1>
              <p>Easily customize filters like "high-priority tasks for this week" to view quickly.</p>
            </div>
          </span>
          <span id='Blocks' className="blockFive">
            <img src='https://www.svgrepo.com/show/524665/keyboard.svg' alt='Keyboard SVG'/>
            <div>
              <h1>Keyboard Shortcuts</h1>
              <p>Use shortcuts and command menus to perform quick operations.</p>
            </div>
          </span>
          <span id='Blocks' className="blockSix">
            <img src='https://www.svgrepo.com/show/525504/share-circle.svg' alt='Collaboration SVG'/>
            <div>
              <h1>Collaboration</h1>
              <p>Share lists with friends and colleagues, assign tasks, and improve collaboration.</p>
            </div>
          </span>
          <span id='Blocks' className="blockSeven">
            <img src='https://www.svgrepo.com/show/522735/add-circle.svg' alt='Integration SVG'/>
            <div>
              <h1>Integration</h1>
              <p>Subscribe calendar and integrate with other apps. Manage all matters in TickTick.</p>
            </div>
          </span>
          <span id='Blocks' className="blockEight">
            <img src='https://www.svgrepo.com/show/522735/add-circle.svg' alt='Statistics SVG'/>
            <div>
              <h1>Statistics</h1>
              <p>Track tasks, focus duration, and habit logs to get a comprehensive view of your progress.</p>
            </div>
          </span>
          <span id='Blocks' className="blockNine">
            <img src='https://www.svgrepo.com/show/525464/paint-roller.svg' alt='Theme SVG'/>
            <div>
              <h1>Theme</h1>
              <p>Choose from 40+ themes to customize your personalized productivity tool.</p>
            </div>
          </span>
        </section>

        <button className='MoreButton'>More<img src='https://www.svgrepo.com/show/511422/arrow-right-336.svg' alt='Side Arrow SVG'/></button>
      </div>
      <div className="SecondMain">

        <section className='downloadSection'>

          <div className="downloadTextSection">
            <h1>Sync across all platforms</h1>
            <p>Whether it's your phone, computer, tablet, or watch, TickTick offers real-time sync and seamless connection.</p>
            <button className='DownloadButton'>Download</button>
          </div>

          <div className="downloadImageSection">
            <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/platform.png" alt="Download PNG" />
          </div>

        </section>

        <section className='PromotionSection' >
          <div className="PromotionFirstHeadingSection">
            <h1 className='headingOne'>Recommended by top media</h1>
            <h1 className='headingTwo'>Standing out among other apps</h1>
          </div>

          <div className="PromotionCardsSection">
            <div>
              <a href='https://www.youtube.com/watch?v=-pTGc7cIBIA&t=566s' id='Cards' className="CardOne">

                <div className="UpperHalfCard">
                  <img src="https://yt3.ggpht.com/PEwQfVuhh5jO7_NDDufCq349q0W6MgZeYlgeMyW3OSRMxMx9W5yre5Fgbi4Bql56L1cPwoteOA=s48-c-k-c0x00ffffff-no-rj" alt="The MKBHD Logo" /> 
                  <h1>MKBHD</h1>
                </div>

                <div className="LowerHalfCard">
                  <p className='normalText'><span className='hilightedText'>My favourite app of the year entire year</span> which is my to-do app. It's called TickTick.</p>
                </div>
              </a>
            </div>

            <div>
              <a href='https://www.nytimes.com/wirecutter/reviews/best-to-do-list-app/' id='Cards' className="CardTwo">

                <div className="UpperHalfCard">
                  <img src="https://pbs.twimg.com/profile_images/1455607764172955655/2L7OQxYZ_400x400.png" alt="The Wirecutter Logo" /> 
                  <h1>Wirecutter</h1>
                </div>

                <div className="LowerHalfCard">
                  <p className='normalText'>TickTick offers <span className='hilightedText'>the most comprehensive free service</span> we've tested, packed with features and delivering a great user experience.</p>
                </div>
              </a>
            </div>

            <div>
              <a href='https://www.theverge.com/24226646/productivity-tools-tips-tricks-vergecast' id='Cards' className="CardThree">

                <div className='UpperHalfCard'>
                  <img src="https://pbs.twimg.com/profile_images/1569656103528448000/d0BzVIPL_400x400.jpg" alt="The Verge Logo" /> 
                  <h1>THE Verge</h1> 
                </div>

                <div className="LowerHalfCard">
                  <p className='normalText'>Eventually I found TickTick, which has been a <span className='hilightedText'>game changer</span> for me and I've relied on it for years. So <span className='hilightedText'>99% of my organization</span> is in Tick Tick.</p>
                </div>
              </a>
            </div>
          </div>

          <div className="PromotionCardLogoSection">
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/mkbhd.png" alt="" />
              </div>
            </a>
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/wirecutter.png" alt="" />
              </div>
            </a>
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/the_verge.png" alt="" />
              </div>
            </a>
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/mashable.png" alt="" />
              </div>
            </a>
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/digitaltrends.png" alt="" />
              </div>
            </a>
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/lifehacker.png" alt="" />
              </div>
            </a>
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/gizmodo.png" alt="" />
              </div>
            </a>
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/androidcentral.png" alt="" />
              </div>
            </a>
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/androidauthority.png" alt="" />
              </div>
            </a>
            <a href="" id='cardLogos'>
              <div className="cardLogo">
                <img src="https://d107mjio2rjf74.cloudfront.net/sites/res/newHome/tick/media/makeuseof.png" alt="" />
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}



export default App
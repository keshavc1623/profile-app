import './App.scss';
// import img from './assets/profileImg.png'
import { AboutMe } from './components/aboutMe/AboutMe';
import { Contact } from './components/contact/Contact';
import { Timer } from './components/experimental/Timer';
import { IntroPage } from './components/heroPage/IntroPage';
import { Navbar } from './components/navBar/Navbar'
import { Projects } from './components/projects/Projects';
import { ThemeOptions } from './components/themeOptions/ThemeOptions';
import { Work } from './components/work/work';
import { SocialMediaOptions } from './components/socialMedia/SocialMediaOptions'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='orientation_left'>
        <SocialMediaOptions />
      </div>
      <div className='main'>
        <IntroPage />
        <AboutMe />
        <Work />
        <Projects />
        <Contact />
      </div>
      <div className='orientation_top_right'>
        <ThemeOptions />
      </div>
      <div className='orientation_right'>
        <a className='mail' target='_blank' href="mailto:keshavc1623@gmail.com">keshavc1623@gmail.com</a>
      </div>
    </div>
  );
}

export default App;

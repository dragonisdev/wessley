
import './App.css'
import './index.css'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import tiktok from './assets/tik-tok 1.png'
import soundcloud from './assets/soundcloud.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import group1 from './assets/group1.png'
import separator from './assets/separator.png'
import line from './assets/line.png'
import deezer from './assets/streaming/deezer.png'
import tidal from './assets/streaming/tidal.png'
import soundcloud2 from './assets/streaming/soundcloud.png'
import apple from './assets/streaming/music.png'
import spotify from './assets/streaming/spotify.png'

export default function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      
      <div className="container">
            <div className="bg-main">
                <h2 className="wessley drop-in">Wessley</h2>
                  <br/>
                <p className="regular-text drop-in-2 ">
                    
                </p>

                <img className="line" src={line}/>

                <div className="icons-menu a">
                    <a  className="icon" href="https://www.instagram.com/heywessley/" target="blank"><img src={instagram}/></a>
                    <a  className="icon" href="https://soundcloud.com/heywessley" target="blank"><img src={twitter}/></a>
                    <a className="icon" href="https://www.tiktok.com/@wessleymusic/" target="blank"><img src={tiktok}/></a>
                    <a className="icon" href="https://twitter.com/heywessley" target="blank"><img src={soundcloud}/></a>
                </div>
                <a href="#middle" className="arrow" onClick={(e) => handleScroll(e, '#middle')}> </a>
                <a href="#middle" className="arrow2" onClick={(e) => handleScroll(e, '#middle')}> </a>
            </div>
            
            
              <div className='separator'><img src={separator}/></div>
              
            
                

            
            
            <div id="middle" className='bg-2' >
                <div className='releases-section' >
                  <div className='releases-text'>
                    <h1 className='latest' data-aos="zoom-in">LATEST RELEASE</h1>
                    
                    <p className='justadmit' data-aos="zoom-in">"justadmit"</p>
                  </div>
                  <img className="release" data-aos="fade-right" data-aos-duration="1500" src={group1}/>
                  <div className='streaming'>
                    
                    <a href=''><img src={apple}/></a>
                    <a href='https://soundcloud.com/heywessley/justadmit-1'><img src={soundcloud2}/></a>
                    <a href=''><img src={tidal}/></a>
                    <a href=''><img src={spotify}/></a>
                    <a href=''><img src={deezer}/></a>
                  </div>
                </div>

                <div className="footer-content releases-text">
                <p className=''>Contact me at <a href="mailto:contact@example.com">wessley@example.com</a></p>
              </div>
            </div>
            
            <footer>
              
            </footer>
        </div>
    </>
  )
}



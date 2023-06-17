
import './App.css'
import './index.css'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import tiktok from './assets/tik-tok 1.png'
import soundcloud from './assets/soundcloud.png'


import line from './assets/line.png'


function App() {
  

  return (
    <>
      
      <div className="container">
            <div className="bg-main">
                <h2 className="wessley drop-in">Wessley</h2>
                
                <p className="regular-text drop-in-2">
                    "just a college kid"
                </p>

                <img className="line" src={line}/>

                <div className="icons-menu a">
                    <a className="icon" href="https://www.instagram.com/heywessley/" target="blank"><img src={instagram}/></a>
                    <a className="icon" href="https://soundcloud.com/heywessley" target="blank"><img src={twitter}/></a>
                    <a className="icon" href="https://www.tiktok.com/@wessleymusic/" target="blank"><img src={tiktok}/></a>
                    <a className="icon" href="https://twitter.com/heywessley" target="blank"><img src={soundcloud}/></a>
                </div>
                <a href="#middle" className="arrow" > </a>
                <a href="#middle" className="arrow2" > </a>
            </div>
            
            

                

            
            
            <div id="middle">
                Hello
            </div>
        </div>
    </>
  )
}

export default App

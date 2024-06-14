
import { Component } from 'react';
import '../assets/css/Home.css';
import Cards from './Cards';
import AppNavbar from '../Components/AppNavbar';
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />

        <div className="home-container">
          <div className="image-container">
            <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708526709/p9_k8k73k.jpg" alt="Special Event" />
          </div>
          <div className="text-container">
            <h2>Your special day deserves a special celebration! Lock in your birthday booking now and let the countdown to a fantastic party begin.</h2>
          </div>  
          </div>
          <div>
          <Cards />
          </div>
          <br></br>
          <br></br>
          <h1 style={{textAlign:"center", fontFamily:"Bernard MT Condensed",color:"#543f3f"}}>JOYFUL JAMBOREES</h1>
          <h2 style={{textAlign:"center" , fontFamily:"Bahnschrift Condensed",color:"#543f3f"}}>Life should not only be lived, but it should be celebrated. Here is to celebrating the incredible person you are! Let the birthday bash commence!</h2>
          <h3></h3>
      <div style={{display:"flex", width:"100%"}}>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}>Cakes</h2>
      <div className='home-list'><ul >
        <li><Link to="/cakes">Theme Cakes</Link></li>
        <li><Link to="/cakes">Flavour Cakes</Link></li>
        <li><Link to="/cakes">Eggless Cakes</Link></li>
        <li><Link to="/cakes">Cup Cakes</Link></li>
        <li><Link to="/cakes">Brownies</Link></li>
      </ul></div>
      </div>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}>Entertainment</h2>
      <div className='home-list'><ul >
        <li><Link to="/entertainment">Sound and Ligthing</Link></li>
        <li><Link to="/entertainment">Games</Link></li>
        <li><Link to="/entertainment">Hand Crafts</Link></li>
        <li><Link to="/entertainment">Magician</Link></li>
        <li><Link to="/entertainment">Stalls</Link></li>
      </ul></div>
      </div>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}>Phtography</h2>
      <div className='home-list'><ul >
        <li><Link to="/photography">Traditional</Link></li>
        <li><Link to="/photography">Outdoor</Link></li>
        <li><Link to="/photography">Traditional + Outdoor</Link></li>
      </ul></div>
      </div>
      </div>
      <div style={{display:"flex", width:"100%"}}>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}>Return Gifts</h2>
      <div className='home-list'>
        <ul >
        <li><Link to="/return">Kids Return Gifts</Link></li>
        <li><Link to="/return">Flowers and Plants</Link></li>
      </ul>
      </div>
      </div>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}>Foods</h2>
      <div className='home-list'>
        <ul >
        <li><Link to="/foods">Vegetarian</Link></li>
        <li>BreakFast</li>
        <li> Lunch</li>
        <li>Dinner</li>
        <li><Link to="/foods">Non-Vegetarian</Link></li>
        <li>BreakFast</li>
        <li>Lunch</li>
        <li>Dinner</li>
      </ul>
      </div>
      </div>
      <div className="cakes-container">
      <h2 className="font" style={{textAlign:"center"}}>Decorations</h2>
      <div className='home-list'>
        <ul >
        <li><Link to="/deco">Balloon Decorations</Link></li>
        <li><Link to="/deco">Theme Decorations</Link></li>
        <li><Link to="/deco">Flower Decorations</Link></li>
      </ul>
      </div>
      </div>
      </div>

      {/* <footer style={{marginTop:"15%"}}> */}
      {/* </footer> */}

      </div>
    );
  }
}

export default Home;

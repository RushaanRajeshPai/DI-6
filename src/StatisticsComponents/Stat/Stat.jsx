import React from 'react'
import logo from '../Assets/logo.png'
import one from '../Assets/one.png'
import two from '../Assets/two.png'
import three from '../Assets/three.png'
import four from '../Assets/four.png'
import five from '../Assets/five.png'
import six from '../Assets/six.png'
import seven from '../Assets/seven.png'
import { Link } from 'react-router-dom'

const Stat = () => {
  return (
    <div className='dashentire'>
      <div className='dashentireleft'>
        <img src={logo} alt="" id='logo' />
        <div className='navbar'>
          <div className='nav1'>
            <div><img src={one} alt="" /></div>
            <li>
              <Link to="/" id='navp'>Dashboard</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={two} alt="" /></div>
            <li>
              <Link to="/project" id='navp'>Project</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={three} alt="" /></div>
            <li>
              <Link to="/analytics" id='navp'>Analytics</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={four} alt="" /></div>
            <li>
              <Link to="/statistics" id='navp'>Statistics</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={five} alt="" /></div>
            <li>
              <Link to="/message" id='navp'>Message</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={six} alt="" /></div>
            <li>
              <Link to="/settings" id='navp'>Settings</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={seven} alt="" /></div>
            <li>
              <Link to="/logout" id='navp'>Log Out</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stat
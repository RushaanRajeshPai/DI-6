import React from 'react'
import './Dash.css'
import logo from '../Assets/logo.png'
import one from '../Assets/one.png'
import two from '../Assets/two.png'
import three from '../Assets/three.png'
import four from '../Assets/four.png'
import five from '../Assets/five.png'
import six from '../Assets/six.png'
import seven from '../Assets/seven.png'
import search from '../Assets/search.png'
import msg from '../Assets/msg.png'
import bell from '../Assets/bell.png'
import corny from '../Assets/corny.png'
import projects from '../Assets/projects.png'
import docs from '../Assets/docs.png'
import note from '../Assets/note.png'
import client from '../Assets/client.png'
import graph from '../Assets/graph.png'
import dots from '../Assets/dots.png'
import load from '../Assets/load.png'
import { Link } from 'react-router-dom'

const Dash = () => {
  return (
    <div className='dashentire'>
      <div className='dashentireleft'>
        <img src={logo} alt="" id='logo' />
        <div className='navbar'>
          <div className='nav1'>
            <div><img src={one} alt="" /></div>
            <li id='navp'>
              <Link to="/" >Dashboard</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={two} alt="" /></div>
            <li id='navp'>
              <Link to="/project" >Project</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={three} alt="" /></div>
            <li id='navp'>
              <Link to="/analytics" >Analytics</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={four} alt="" /></div>
            <li id='navp'>
              <Link to="/statistics" >Statistics</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={five} alt="" /></div>
            <li id='navp'>
              <Link to="/message" >Message</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={six} alt="" /></div>
            <li id='navp'>
              <Link to="/settings">Settings</Link>
            </li>
          </div>
          <div className='nav1'>
            <div><img src={seven} alt="" /></div>
            <li id='navp'>
              <Link to="/logout" >Log Out</Link>
            </li>
          </div>
        </div>
      </div>
      <div className='dashentireright'>
        <div className='header'>
          <div className='searchcontainer'>
            <input type="text" placeholder='Search for your keywords' id='searchbox' />
            <div id='search'><img src={search} alt="" /></div>
          </div>
          <div className='leftcorner'>
            <div><img src={msg} alt="" /></div>
            <div><img src={bell} alt="" /></div>
            <div id='corny'><img src={corny} alt="" /></div>
          </div>
        </div>
        <div className='dashbelow'>
          <div className='live'>
            <div className='liveone'>
              <p id='livep'><span>+1.02%</span>last month</p>
              <h1 id='liveh1'>124</h1>
              <div className='liveinterior'>
                <h5 id='liveh5'>Total Projects</h5>
                <div id='total'><img src={projects} alt="" /></div>
              </div>
            </div>
            <div className='liveone'>
              <p id='livep'><span>+1.02%</span>last month</p>
              <h1 id='liveh1'>3.450</h1>
              <div className='liveinterior'>
                <h5 id='liveh5'>Total Clients</h5>
                <div id='clients'><img src={client} alt="" /></div>
              </div>
            </div>
            <div className='liveone'>
              <p id='livep'><span>+1.02%</span>last month</p>
              <h1 id='liveh1'>86</h1>
              <div className='liveinterior'>
                <h5 id='liveh5'>Total Ongoing Tasks</h5>
                <div id='projects'><img src={note} alt="" /></div>
              </div>
            </div>
            <div className='liveone'>
              <p id='livep'><span>+1.02%</span>last month</p>
              <h1 id='liveh1'>32</h1>
              <div className='liveinterior'>
                <h5 id='liveh5'>New Projects</h5>
                <div id='projs'><img src={docs} alt="" /></div>
              </div>
            </div>
          </div>
          <div className='dashbottom'>
            <div className='dashbelowleft'>
              <div className='upper'>
                <div id='graph'><img src={graph} alt="" /></div>
              </div>
              <div className='lower'>
                <div className='lower1'>
                  <h2>Upcoming Project</h2>
                  <p id='lower1p'>View all</p>
                </div>
                <div className='lower2'>
                  <p id='lower2p'>Project Name</p>
                  <div className='lower2side'>
                    <p id='lower2p'>Type of Project</p>
                    <p id='lower2p'>Start Day</p>
                    <p id='lower2p'>Deadline</p>
                  </div>
                </div>
                <div className='lower3'>
                  <div className='lower3line'>
                    <h4>General Motors</h4>
                    <div className='lower3side'>
                      <p>Web App</p>
                      <p>Jun 30,2022</p>
                      <p>Jul 22,2022</p>
                    </div>
                  </div>
                  <div className='lower3line'>
                    <h4>Fueleral Motors</h4>
                    <div className='lower3side'>
                      <p>Web App</p>
                      <p>Jun 30,2022</p>
                      <p>Jul 22,2022</p>
                    </div>
                  </div>
                  <div className='lower3line'>
                    <h4>Giracles Motors</h4>
                    <div className='lower3side'>
                      <p>Mob App</p>
                      <p>Jun 30,2022</p>
                      <p>Jul 22,2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='dashbelowright'>
              <div className='topper'>
                <h2 id='topperh2'>Important Projects</h2>
                <div className='toppera'>
                  <div className='topper1'>
                    <div className='topper1left'>
                      <h4>Green House</h4>
                      <p id='topp'>Spa Studio App Mobile</p>
                    </div>
                    <div id='dots'><img src={dots} alt="" /></div>
                  </div>
                  <div className='topper2'>
                    <p>Task Completed</p>
                    <p id='topper2numbers'><span>38</span>/45</p>
                  </div>
                  <div className='topper3'><img src={load} alt="" /></div>
                  <div className='topper4'>
                    <p>Deadline</p>
                    <p id='topdate'><strong>June 30,2022</strong></p>
                  </div>
                </div>
                <div className='topperb'>
                  <div className='topper1'>
                    <div className='topper1left'>
                      <h4>Moni Group</h4>
                      <p id='topp'>Furniture Shop App Mobile</p>
                    </div>
                    <div id='dot'><img src={dots} alt="" /></div>
                  </div>
                  <div className='topper2'>
                    <p>Task Completed</p>
                    <p id='topper2numbers'><span>32</span>/65</p>
                  </div>
                  <div className='topper3'><img src={load} alt="" /></div>
                  <div className='topper4'>
                    <p>Deadline</p>
                    <p id='topdate'><strong>July 12,2022</strong></p>
                  </div>
                </div>
              </div>
              <div className='backer'>
                <h2>Recent Message</h2>
                <div className='backer1'>
                  <div className='backer1a'>
                    <h4>Jane Cooper</h4>
                    <p id='bp'>Aliqua id fugiat nostrud...</p>
                  </div>
                  <p id='backertime'>53s ago</p>
                </div>
                <div className='backer1'>
                  <div className='backer1a'>
                    <h4>Kate Murphy</h4>
                    <p id='bp'>Aliqua id fugiat nostrud...</p>
                  </div>
                  <p id='backertime'>2m ago</p>
                </div>
                <div className='backer1'>
                  <div className='backer1a'>
                    <h4>Devon Lane </h4>
                    <p id='bp'>Aliqua id fugiat nostrud...</p>
                  </div>
                  <p id='backertime'>7m ago</p>
                </div>
                <div className='backer1'>
                  <div className='backer1a'>
                    <h4>Robert Fox </h4>
                    <p id='bp'>Aliqua id fugiat nostrud...</p>
                  </div>
                  <p id='backertime'>1h ago</p>
                </div>
                <div className='backer1'>
                  <div className='backer1a'>
                    <h4>Eleonar Pena</h4>
                    <p id='bp'>Aliqua id fugiat nostrud...</p>
                  </div>
                  <p id='backertime'>3h ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dash
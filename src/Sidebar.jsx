import React from 'react'
import './sidebar.css'
import {BsPlusSquare} from 'react-icons/bs'
import {FcDocument} from 'react-icons/fc'
import {GoScreenFull} from 'react-icons/go'
import {MdFormatAlignCenter} from 'react-icons/md'
import {AiFillThunderbolt} from 'react-icons/ai'
import {IoIosAirplane} from 'react-icons/io'
import {MdOutlineDraw} from 'react-icons/md'
import {FcFrame} from 'react-icons/fc'
import {Link} from 'react-router-dom'
function sidebar() {
  return (
      <>
    <div className='sbar'>
    <p className='divide__s'>COLORFUL LARGE</p>
        <ul>
        <Link to="/documents" style={{ textDecoration: 'none' }}><li className='listItem__1'><FcDocument className='logo__2'/>Documents</li></Link>
        <Link to="/Students" style={{ textDecoration: 'none' }}><li className='listItem__2'><BsPlusSquare className='logo__1'/>&nbsp;&nbsp;Students</li></Link>
        <Link to="/presentations" style={{ textDecoration: 'none' }}><li className='listItem__3'><GoScreenFull className='logo__3'/>Presentations</li></Link>
        <Link to="/forms" style={{ textDecoration: 'none' }}><li className='listItem__4'><MdFormatAlignCenter className='logo__4'/>Forms</li></Link>
        </ul>
    </div>
    <div className='divide'></div>
    <p className='divide__p'>OTHER ACTIVITIES</p>
            <div className='sbar__below'>
            <ul>
            <Link to="/wireframing" style={{ textDecoration: 'none' }}><li className='listItem__5'><FcFrame className='logo__5'/>Wireframing</li></Link>
            <Link to="/colorscheme" style={{ textDecoration: 'none' }}><li className='listItem__6'><MdOutlineDraw className='logo__6'/>Color Scheme</li></Link>
            <Link to="/creativity" style={{ textDecoration: 'none' }}><li className='listItem__7'><AiFillThunderbolt className='logo__7'/>Creativity</li></Link>
            <Link to="/airplane" style={{ textDecoration: 'none' }}><li className='listItem__8'><IoIosAirplane className='logo__8'/>Airplane</li></Link>
            </ul>
        </div>
        </>
  )
}

export default sidebar
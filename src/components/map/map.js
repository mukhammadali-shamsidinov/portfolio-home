import React from 'react'
import Iframe from "react-iframe";
import './map.css'
const Map = () => {
  return (
    <div className={'map-container'}>
        <div className="title">
            <h1>Kagon</h1>
            <p>Uzbekistan Bukhara Kagan City</p>
        </div>
        <br/>
        <Iframe className={'map'}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49061.007696487664!2d64.3877786399541!3d39.77753103765192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1675573356517!5m2!1sru!2s"
            width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></Iframe>
    </div>
  )
}

export default Map
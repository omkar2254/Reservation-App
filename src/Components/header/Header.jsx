import React from 'react'
import "./header.css"
import { faBed, faBus, faCalendar, faCalendarDays, faPerson, faPlane, faRestroom, faTaxi, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { useState } from "react"
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import {format} from "date-fns"
const Header = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 0
  })
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Beds</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBus} />
            <span>Bus</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faRestroom} />
            <span>Restroom</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faWifi} />
            <span>Wifi</span>
            </div>
        </div>
        <h1 className="headertitle">We provide best Travelling experience</h1>
        <p className="headerDesc">Get rewarded upto 20% or more with a free OmkarTours&Travellers account</p>
        <button className="headerbtn">Sign in / Register</button>

        <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon"/>
          
            <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          {openDate &&<DateRange
            editableDateInputs={true}
             onChange={item => setDate([item.selection])}
             moveRangeOnFirstSelection={false}
             ranges={date}
             className="date"
          />}
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
          <span className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
          <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <button className="optionCounterButton">+</button>
              <span className="optionCounterNumber">1</span>
              <button className="optionCounterButton">-</button>
            </div>
          </div>
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn">Search</button>
        </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Header

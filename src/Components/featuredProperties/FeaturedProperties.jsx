import React from 'react'
import "./featuredProperties.css"
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
      <img src="https://source.unsplash.com/500x500/?japan" alt="" className='fpImg' />
      <span className="fpName">Japan</span>
      <span className="fpCity">New York</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img src="https://source.unsplash.com/500x500/?India" alt="" className='fpImg'/>
      <span className="fpName">India</span>
      <span className="fpCity">New York</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img src="https://source.unsplash.com/500x500/?Maldives" alt="" className='fpImg'/>
      <span className="fpName">Maldives</span>
      <span className="fpCity">New York</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img src="https://source.unsplash.com/500x500/?Thailand" alt="" className='fpImg'/>
      <span className="fpName">Thailand</span>
      <span className="fpCity">New York</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>
    </div>
  )
}

export default FeaturedProperties

import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src="https://source.unsplash.com/500x500/?NewYork" alt="nice_img" />
            <div className="featuredTitles">
            <h1>New York</h1>
            <h2>Information</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://source.unsplash.com/500x500/?Italy" alt="nice_img" />
            <div className="featuredTitles">
            <h1>Italy</h1>
            <h2>Information</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://source.unsplash.com/500x500/?London" alt="nice_img" />
            <div className="featuredTitles">
            <h1>London</h1>
            <h2>Information</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured

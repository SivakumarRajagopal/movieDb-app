import {Link} from 'react-router-dom'

import './index.css'

const EachCard = props => {
  const {eachItemDetails} = props
  const {id, title, posterPath, voteAverage} = eachItemDetails

  const posterImgUrl = `https://image.tmdb.org/t/p/w500${posterPath}`

  return (
    <li className="cardItem">
      <img src={posterImgUrl} alt={title} className="card-img" />
      <div className="card-details">
        <h1 className="title">{title}</h1>
        <p className="rating">{voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`} className="link-item">
        <button type="button" className="view-detail-btn">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default EachCard

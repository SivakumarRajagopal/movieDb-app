import './index.css'

const CastCard = props => {
  const {castDetails} = props
  const {originalName, character, profilePath} = castDetails

  const castImgUrl = `https://image.tmdb.org/t/p/w500${profilePath}`

  return (
    <li className="cast-card">
      <img src={castImgUrl} alt={originalName} className="cast-img" />
      <div className="cast-card-details">
        <p className="character-name">Character : {character}</p>
        <p className="original-name">Original Name : {originalName}</p>
      </div>
    </li>
  )
}

export default CastCard

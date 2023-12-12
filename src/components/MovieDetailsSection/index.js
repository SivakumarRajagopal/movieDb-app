import './index.css'

const MovieDetailsSection = props => {
  const {MovieDetails} = props

  const {
    backdropPath,
    budget,
    genres,
    originalTitle,
    overview,
    posterPath,
    productionCompanies,
    productionCountries,
    releaseDate,
    revenue,
    spokenLanguages,
  } = MovieDetails

  const BannerImgUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`

  const posterImgUrl = `https://image.tmdb.org/t/p/w500${posterPath}`

  return (
    <div className="movie-section-container">
      <img src={BannerImgUrl} alt={originalTitle} className="banner-img" />
      <div className="movie-details-container">
        <img src={posterImgUrl} alt={originalTitle} className="poster-img" />

        <div className="movie-main-content">
          <h1 className="title">{originalTitle}</h1>
          <p className="sub-title">Genre :</p>
          <ul className="genre-container">
            {genres.map(eachGenre => (
              <li key={eachGenre.id} className="each-genre">
                {eachGenre.name}
              </li>
            ))}
          </ul>
          <p className="sub-title">Language : </p>

          <ul className="genre-container">
            {spokenLanguages.map(eachLanguage => (
              <li key={eachLanguage.name} className="each-genre">
                {eachLanguage.name}
              </li>
            ))}
          </ul>

          <p className="sub-title">
            Description : <span className="description">{overview}</span>
          </p>
          <p>Budget : {budget}</p>
          <p>Revenue : {revenue}</p>
          <p>Release Date : {releaseDate}</p>
          <p className="sub-title">Produced by: </p>
          <ul className="genre-container">
            {productionCompanies.map(eachCompanies => (
              <li key={eachCompanies.name} className="each-genre">
                {eachCompanies.name}
              </li>
            ))}
          </ul>
          <p className="sub-title">Produced In: </p>
          <ul className="genre-container">
            {productionCountries.map(eachCompanies => (
              <li key={eachCompanies.name} className="each-genre">
                {eachCompanies.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsSection

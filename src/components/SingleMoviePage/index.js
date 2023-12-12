import {useState, useEffect} from 'react'
import './index.css'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'
import CastContainer from '../CastContainer'
import MovieDetailsSection from '../MovieDetailsSection'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const SingleMoviePage = props => {
  const [apiMovieResponse, setApiMovieResponse] = useState({
    status: apiStatusConstant.initial,
    errorMsg: null,
    movieData: null,
  })

  const [apiCastResponse, setApiCastResponse] = useState({
    status: apiStatusConstant.initial,
    errorMsg: null,
    castData: null,
  })

  useEffect(() => {
    const getMovieDetailsData = async () => {
      setApiMovieResponse(prevApiResponse => ({
        ...prevApiResponse,
        status: apiStatusConstant.inProgress,
      }))

      const {match} = props
      const {params} = match
      const {id} = params

      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=cc8b4da86102dbe023605d3cfe6d65c1&language=en-US`
      const response = await fetch(url)
      const responseData = await response.json()
      console.log(responseData)
      if (response.ok) {
        setApiMovieResponse(prevApiResponse => ({
          ...prevApiResponse,
          status: apiStatusConstant.success,
          movieData: responseData,
        }))
      } else {
        setApiMovieResponse(prevApiResponse => ({
          ...prevApiResponse,
          status: apiStatusConstant.failure,
          errorMsg: responseData.status_message,
        }))
      }
    }

    getMovieDetailsData()
  }, [props])

  useEffect(() => {
    const getCastDetailsData = async () => {
      setApiCastResponse(prevApiResponse => ({
        ...prevApiResponse,
        status: apiStatusConstant.inProgress,
      }))

      const {match} = props
      const {params} = match
      const {id} = params

      const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cc8b4da86102dbe023605d3cfe6d65c1&language=en-US`
      const response = await fetch(url)
      const responseData = await response.json()
      console.log(responseData)
      if (response.ok) {
        setApiCastResponse(prevApiResponse => ({
          ...prevApiResponse,
          status: apiStatusConstant.success,
          castData: responseData,
        }))
      } else {
        setApiCastResponse(prevApiResponse => ({
          ...prevApiResponse,
          status: apiStatusConstant.failure,
          errorMsg: responseData.status_message,
        }))
      }
    }

    getCastDetailsData()
  }, [props])

  const renderSuccessMovieDetailsView = () => {
    const {movieData} = apiMovieResponse

    const formattedMovieData = {
      backdropPath: movieData.backdrop_path,
      budget: movieData.budget,
      genres: movieData.genres,
      id: movieData.id,
      originalTitle: movieData.original_title,
      overview: movieData.overview,
      popularity: movieData.popularity,
      posterPath: movieData.poster_path,
      productionCompanies: movieData.production_companies.map(eachItem => ({
        name: eachItem.name,
      })),
      productionCountries: movieData.production_countries.map(eachItem => ({
        name: eachItem.name,
      })),
      releaseDate: movieData.release_date,
      revenue: movieData.revenue,
      spokenLanguages: movieData.spoken_languages.map(eachItem => ({
        name: eachItem.english_name,
      })),
    }

    console.log(formattedMovieData)
    return <MovieDetailsSection MovieDetails={formattedMovieData} />
  }

  const renderSuccessCastDetailsView = () => {
    const {castData} = apiCastResponse

    const formattedCastData = castData.cast.map(eachItem => ({
      adult: eachItem.adult,
      castId: eachItem.cast_id,
      character: eachItem.character,
      creditId: eachItem.credit_id,
      gender: eachItem.gender,
      id: eachItem.id,
      knownForDepartment: eachItem.known_for_department,
      name: eachItem.name,
      order: eachItem.order,
      originalName: eachItem.original_name,
      popularity: eachItem.popularity,
      profilePath: eachItem.profile_path,
    }))

    return <CastContainer CastData={formattedCastData} />
  }

  const renderFailureMovieDetailsView = () => {
    const {errorMsg} = apiMovieResponse
    return <FailureView errMsg={errorMsg} />
  }

  const renderFailureCastDetailsView = () => {
    const {errorMsg} = apiCastResponse
    return <FailureView errMsg={errorMsg} />
  }

  const renderLoadingView = () => <LoaderView />

  const renderMovieDetailsSection = () => {
    const {status} = apiMovieResponse

    switch (status) {
      case apiStatusConstant.success:
        return renderSuccessMovieDetailsView()
      case apiStatusConstant.failure:
        return renderFailureMovieDetailsView()
      case apiStatusConstant.inProgress:
        return renderLoadingView()

      default:
        return null
    }
  }

  const renderCastDetailsSection = () => {
    const {status} = apiCastResponse

    switch (status) {
      case apiStatusConstant.success:
        return renderSuccessCastDetailsView()
      case apiStatusConstant.failure:
        return renderFailureCastDetailsView()
      case apiStatusConstant.inProgress:
        return renderLoadingView()

      default:
        return null
    }
  }
  return (
    <div className="page-container">
      <h1 className="page-title">Movies Details</h1>
      {renderMovieDetailsSection()}
      <h1 className="page-title">Cast Details</h1>
      {renderCastDetailsSection()}
    </div>
  )
}

export default SingleMoviePage

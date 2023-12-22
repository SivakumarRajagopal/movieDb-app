import {useState, useEffect} from 'react'

import CardDisplay from '../CardDisplay'

import './index.css'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const FetchComponent = props => {
  const {routeInformation} = props
  const {url, heading} = routeInformation

  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  })

  const [pageNo, setPageNo] = useState(1)

  const handlePrevPageBtn = () => {
    setPageNo(prev => (parseInt(prev) !== 1 ? parseInt(prev) - 1 : 1))
  }

  const handleNextPageBtn = () => {
    setPageNo(prev => parseInt(prev) + 1)
  }

  useEffect(() => {
    const getPopularData = async () => {
      setApiResponse(prevApiResponse => ({
        ...prevApiResponse,
        status: apiStatusConstants.inProgress,
      }))

      const newUrl = url.concat(pageNo)
      console.log(newUrl)

      //   const url = `https://api.themoviedb.org/3/movie/popular?api_key=cc8b4da86102dbe023605d3cfe6d65c1&language=en-US&page=1`
      const response = await fetch(newUrl)
      console.log(response)

      const responseData = await response.json()
      if (response.ok) {
        setApiResponse(prevApiResponse => ({
          ...prevApiResponse,
          status: apiStatusConstants.success,
          data: responseData,
        }))
      } else {
        setApiResponse(prevApiResponse => ({
          ...prevApiResponse,
          status: apiStatusConstants.failure,
          errorMsg: responseData.status_message,
        }))
      }
    }
    getPopularData()
  }, [pageNo, url])

  const renderSuccessView = () => {
    const {data} = apiResponse

    const formattedData = data.results.map(eachItem => ({
      adult: eachItem.adult,
      backdropPath: eachItem.backdrop_path,
      genreIds: eachItem.genre_ids,
      id: eachItem.id,
      originalLanguage: eachItem.original_language,
      originalTitle: eachItem.original_title,
      overview: eachItem.overview,
      popularity: eachItem.popularity,
      posterPath: eachItem.poster_path,
      releaseDate: eachItem.release_date,
      title: eachItem.title,
      video: eachItem.video,
      voteAverage: eachItem.vote_average,
      voteCount: eachItem.vote_count,
    }))

    return (
      <>
        <CardDisplay formattedData={formattedData} />
      </>
    )
  }

  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return <FailureView errMsg={errorMsg} />
  }

  const renderLoadingView = () => <LoaderView />

  const renderPopularPage = () => {
    const {status} = apiResponse

    switch (status) {
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
    // Your code goes here...
  }

  return (
    <div className="page-container">
      <div className="page-content-container">
        <h1 className="page-title">{heading}</h1>
        {renderPopularPage()}
        <div className="pagination-container">
          <button
            type="button"
            className="pagination-btn"
            onClick={handlePrevPageBtn}
          >
            Prev
          </button>
          <p className="current-page-no">{pageNo}</p>
          <button
            type="button"
            className="pagination-btn"
            onClick={handleNextPageBtn}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default FetchComponent

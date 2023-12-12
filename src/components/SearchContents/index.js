import FetchComponent from '../FetchComponent'

const SearchContents = props => {
  const {match} = props
  const {params} = match
  const {query} = params

  const routeInformation = {
    heading: 'Search Results',
    url: `https://api.themoviedb.org/3/search/movie?api_key=cc8b4da86102dbe023605d3cfe6d65c1&language=en-US&query=${query}&page=1`,
  }

  return <FetchComponent routeInformation={routeInformation} />
}

export default SearchContents

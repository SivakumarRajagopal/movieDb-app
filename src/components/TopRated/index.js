import './index.css'
import FetchComponent from '../FetchComponent'

const routeInformation = {
  heading: 'TopRated',
  url: `https://api.themoviedb.org/3/movie/top_rated?api_key=cc8b4da86102dbe023605d3cfe6d65c1&language=en-US&page=1`,
}

const TopRated = () => <FetchComponent routeInformation={routeInformation} />

export default TopRated

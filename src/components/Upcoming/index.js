import './index.css'
import FetchComponent from '../FetchComponent'

const routeInformation = {
  heading: 'Upcoming',
  url: `https://api.themoviedb.org/3/movie/upcoming?api_key=cc8b4da86102dbe023605d3cfe6d65c1&language=en-US&page=`,
}

const Upcoming = () => <FetchComponent routeInformation={routeInformation} />

export default Upcoming

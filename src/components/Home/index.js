import './index.css'
import FetchComponent from '../FetchComponent'

const routeInformation = {
  heading: 'Popular',
  url: `https://api.themoviedb.org/3/movie/popular?api_key=cc8b4da86102dbe023605d3cfe6d65c1&language=en-US&page=`,
}

const Home = () => <FetchComponent routeInformation={routeInformation} />

export default Home

import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import SingleMoviePage from './components/SingleMoviePage'
// import SearchBar from './components/SearchBar'
import SearchContents from './components/SearchContents'

// write your code here
const App = () => (
  <>
    <Header />
    {/* <SearchBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/movie/:id" component={SingleMoviePage} />
      <Route exact path="/search/:query" component={SearchContents} />
    </Switch>
  </>
)

export default App

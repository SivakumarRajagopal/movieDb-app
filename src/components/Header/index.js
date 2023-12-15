// import {useState} from 'react'

// import {MdMenu} from 'react-icons/md'
// import {RiCloseLine} from 'react-icons/ri'

import {Link} from 'react-router-dom'
import SearchBar from '../SearchBar'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      {/* <Link to="/" className="title-home-link"> */}
      <h1 className="website-title">movieDB</h1>
      {/* </Link> */}
      <SearchBar />
      {/* <div className="menu-web">
        <Link to="/" className="nav-link">
          <h6 className="nav-heading">Popular</h6>
        </Link>
        <Link to="/top-rated" className="nav-link">
          <h6 className="nav-heading">Top Rated</h6>
        </Link>
        <Link to="/upcoming" className="nav-link">
          <h6 className="nav-heading">Upcoming</h6>
        </Link>
      </div> */}
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>
            <button type="button" className="nav-btn">
              Popular
            </button>
          </li>
        </Link>
        <Link to="/top-rated" className="nav-link">
          <li>
            <button type="button" className="nav-btn">
              Top Rated
            </button>
          </li>
        </Link>
        <Link to="/upcoming" className="nav-link">
          <li>
            <button type="button" className="nav-btn">
              Upcoming
            </button>
          </li>
        </Link>
      </ul>
    </div>
  </nav>
)

//   const [showMobileMenu, setMenu] = useState(false)

//   return (
//     <nav className="nav-header">
//       <div className="nav-content">
//         <Link to="/" className="title-home-link">
//           <h1 className="website-title">movieDB</h1>
//         </Link>
//         <ul className="nav-menu">
//           <Link to="/" className="nav-link">
//             <li>
//               <button type="button" className="nav-btn">
//                 Popular
//               </button>
//             </li>
//           </Link>
//           <Link to="/top-rated" className="nav-link">
//             <li>
//               <button type="button" className="nav-btn">
//                 TopRated
//               </button>
//             </li>
//           </Link>
//           <Link to="/upcoming" className="nav-link">
//             <li>
//               <button type="button" className="nav-btn">
//                 Upcoming
//               </button>
//             </li>
//           </Link>
//         </ul>
//       </div>

/* <div className="mobile-nav-content">
        <Link to="/" className="title-home-link">
          <h1 className="website-title">movieDB</h1>
        </Link>
        {showMobileMenu ? (
          <RiCloseLine className="menu-icon" onClick={() => setMenu(false)} />
        ) : (
          <MdMenu className="menu-icon" onClick={() => setMenu(true)} />
        )}
        {showMobileMenu && (
          <ul className="nav-menu-mobile">
            <Link to="/" className="nav-link nav-mobile-menu-item">
              <li>
                <button type="button" className="nav-btn">
                  Popular
                </button>
              </li>
            </Link>
            <Link to="/top-rated" className="nav-link nav-mobile-menu-item">
              <li>
                <button type="button" className="nav-btn">
                  TopRated
                </button>
              </li>
            </Link>
            <Link to="/upcoming" className="nav-link nav-mobile-menu-item">
              <li>
                <button type="button" className="nav-btn">
                  Upcoming
                </button>
              </li>
            </Link>
          </ul>
        )}
      </div> */

export default Header

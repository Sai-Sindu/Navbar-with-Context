// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme(isDarkTheme)
      }

      const navbarClassName = isDarkTheme
        ? 'dark-theme-nav-bar-card'
        : 'light-theme-nav-bar-card'
      const navTextClassName = isDarkTheme
        ? 'dark-theme-nav-text'
        : 'light-theme-nav-text'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <nav className={navbarClassName}>
          <img src={websiteLogo} className="website-logo" alt="website logo" />
          <ul className="nav-links-card">
            <Link to="/" className="link-text">
              <li className={navTextClassName}>Home</li>
            </Link>
            <Link to="/about" className="link-text">
              <li className={navTextClassName}>About</li>
            </Link>
          </ul>
          <button
            className="theme-button"
            type="button"
            data-testid="theme"
            onClick={onToggleTheme}
          >
            <img src={themeImage} alt="theme" className="theme-img" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar

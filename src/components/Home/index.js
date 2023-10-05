// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainerClassName = isDarkTheme
        ? 'dark-theme-home-container'
        : 'light-theme-home-container'

      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTitle = isDarkTheme ? 'dark-home-title' : 'light-home-title'

      return (
        <>
          <Navbar />
          <div className={homeContainerClassName}>
            <img src={homeImg} alt="home" className="home-img" />
            <h1 className={homeTitle}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home

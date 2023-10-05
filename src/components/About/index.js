// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutContainerClassName = isDarkTheme
        ? 'dark-theme-about-container'
        : 'light-theme-about-container'

      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTitleClassName = isDarkTheme
        ? 'dark-about-title'
        : 'light-about-title'

      return (
        <>
          <Navbar />
          <div className={aboutContainerClassName}>
            <img src={aboutImg} alt="about" className="about-img" />
            <h1 className={aboutTitleClassName}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

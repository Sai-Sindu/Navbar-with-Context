// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundContainerClassName = isDarkTheme
        ? 'dark-theme-not-found-container'
        : 'light-theme-not-found-container'
      const notFoundTitleClassName = isDarkTheme
        ? 'dark-not-found-title'
        : 'light-not-found-title'

      const notFoundDescriptionClassName = isDarkTheme
        ? 'dark-not-found-description'
        : 'light-not-found-description'

      return (
        <>
          <Navbar />
          <div className={notFoundContainerClassName}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={notFoundTitleClassName}>Lost Your Way?</h1>
            <p className={notFoundDescriptionClassName}>
              we cannot seem to find the page your looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

import React, { useEffect, useState, ChangeEvent } from 'react'
import Nav from './common/Nav'
import Footer from './common/Footer'
import { user } from '../setting/constants'
import ToggleButton from './common/ToggleButton'
import ThemeContext from '../lib/context/ThemContext'

type Props = {}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false)

  const toggleThemMode = (e: ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.currentTarget.checked)
    if (!isDarkMode) {
      localStorage.setItem('isDarkMode', 'true')
    } else {
      localStorage.setItem('isDarkMode', 'false')
    }
  }

  useEffect(() => {
    if (window) {
      try {
        const mode = localStorage.getItem('isDarkMode')
        if (mode === 'true') {
          setDarkMode(true)
        } else {
          setDarkMode(false)
        }
      } catch (error) {
        localStorage.setItem('isDarkMode', 'false')
      }
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <div
        style={
          isDarkMode ? { background: '#282c35' } : { background: '#e2e8f0' }
        }
      >
        <header>
          <Nav
            githubAvatar={user.githubAvatar}
            githubUrl={user.githubUrl}
            userName={user.userName}
          />
        </header>
        <button />
        <div className='container min-h-screen mx-auto px-6'>
          <ToggleButton
            onChange={toggleThemMode}
            checked={isDarkMode}
            className='flex justify-end'
          />
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout

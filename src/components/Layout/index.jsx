import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by John Doe">
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        </Helmet>
        {children}
        <div className="footer">
          Created with passion🍻by <a href="https://twitter.com/_bayotop" target="_blank">bayo</a> and <a href="https://twitter.com/martinmakarsky" target="blank">makma 🚀</a>.
        </div>
      </div>
    )
  }
}

export default Layout

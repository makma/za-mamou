import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Wizard from '../components/Wizard'

class IndexRoute extends React.Component {
  render() {
    const routeData = this.props
    const items = []
    const title = routeData.data.kontentItemSiteMetadata.elements.title.value
    const subtitle = routeData.data.kontentItemSiteMetadata.elements.subtitle.value

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar isHomePage />
          <div className="content">
            <div className="content__inner"><Wizard></Wizard></div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    kontentItemSiteMetadata(system: {codename: {eq: "site_metadata"}}) {
      elements {
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
  }
`

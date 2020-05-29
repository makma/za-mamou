import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Wizard from '../components/Wizard'

class IndexRoute extends React.Component {
  render() {
    const routeData = this.props
    const title = routeData.data.kontentItemSiteMetadata.elements.title.value
    const subtitle = routeData.data.kontentItemSiteMetadata.elements.subtitle.value

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
            <meta property="og:title" content="Za mamou - môžem ísť na Slovensko?" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://zamamou.sk/" />
            <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/800px-Flag_of_Slovakia.svg.png" />
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

import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTemplateDetails from '../components/PageTemplateDetails'

class PageTemplate extends React.Component {
  render() {
    const pageTemplateData = this.props
    const title = pageTemplateData.data.kontentItemSiteMetadata.elements.title.value
    const subtitle = pageTemplateData.data.kontentItemPage.elements.title.value

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${title} - ${subtitle}`}</title>
            <meta name="description" content={pageTemplateData.data.kontentItemPage.elements.meta_description.value} />
            <meta property="og:title" content="Za mamou - môžem ísť na Slovensko?" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://zamamou.sk/" />
            <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/800px-Flag_of_Slovakia.svg.png" />
          </Helmet>
          <PageTemplateDetails {...pageTemplateData} />
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    kontentItemSiteMetadata(system: {codename: {eq: "site_metadata"}}) {
      elements {
        copyright {
          value
        }
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
    kontentItemMenu(system: {codename: {eq: "navigation_menu"}}) {
      elements {
        menu_items {
          value {
            ... on kontent_item_menu_item {
              id
              elements {
                label {
                  value
                }
                path {
                  value
                }
              }
            }
          }
        }
      }
    }
    kontentItemPage(elements: {slug: {value: {eq: $slug}}}) {
      id
      system {
        id
      }
      elements {
        description {
          value
        }
        meta_description  {
          value
        }
        title {
          value
        }
      }
    }
  }
`

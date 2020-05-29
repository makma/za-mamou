import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Menu from '../Menu'
import './style.scss'

const sidebar = ({ isHomePage }) => {
  const data = useStaticQuery(graphql`
  query SidebarQuery {
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
  }
`
  )

  const menu = data.kontentItemMenu
  const copyright = data.kontentItemSiteMetadata.elements.copyright.value

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <div>
          <Menu data={menu} />
          <p className="sidebar__copyright">{copyright}</p>
        </div>
      </div>
    </div>
  )
}

export default sidebar

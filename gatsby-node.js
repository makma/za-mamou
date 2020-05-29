const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page-template.jsx')

    graphql(`
    {
      allKontentItemPage(filter: {preferred_language: {eq: "default"}}) {
        nodes {
          elements {
            slug {
              value
            }
          }
        }
      }
    }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      _.each(result.data.allKontentItemPage.nodes, node => {
        createPage({
          path: `/${node.elements.slug.value}/`,
          component: slash(pageTemplate),
          context: { slug: `${node.elements.slug.value}` },
        })
      })

      resolve()
    })
  })
}

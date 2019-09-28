/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Bio from "./Bio"
import Footer from "./Footer"
import "./layout.module.scss"

const Layout = props => {
  console.log(props);
  const data = useStaticQuery(graphql`
    query { 
      allContentfulProject {
        edges {
          node {
            projectTitle
            projectImage {
              file {
                url
              }
            }
            published
          }
        }
      }
    }
    
  `)

  console.log(data)
  return (
    <>
      <Header />
      <div>
        {/* <ul>
          {data.allContentfulProject.edges.map(index => {
            return (
              <li>{index.node.projectTitle}</li>
            )
          })}
        </ul> */}
        <main>{props.children}</main>
        <Bio />
        <Footer />
      </div>
    </>
  )
}


export default Layout

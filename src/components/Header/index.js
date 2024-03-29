import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styles from "./header.module.scss";

const Header = props => {
    //     const data = useStaticQuery(graphql`
    //       query {
    //       allContentfulProject {
    //     edges {
    //       node {
    //         projectTitle
    //         projectImage {
    //           file {
    //             url
    //           }
    //         }
    //         published
    //       }
    //     }
    //   }
    // }`)

    // console.log(data)
    return (
        <div id={styles.topbanner}>
            <h1>Philip Benson</h1>
            <div>
                <Link to="/">About</Link> &nbsp; | &nbsp;
                <Link to="/portfolio">Portfolio</Link> &nbsp; | &nbsp;
                <Link to="/contact">Contact</Link>
            </div>
            {/* <ul>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul> */}

            <div>
                {/* <ul>
                    {data.allContentfulProject.edges.map(index => {
                        return (
                            <li>{index.node.projectTitle}</li>
                        )
                    })}
                </ul> */}
            </div>
        </div>
    )
};

export default Header;

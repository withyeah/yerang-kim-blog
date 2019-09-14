import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
// import profileGIF from '../profile.gif'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              {/* <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                // src="http://gph.is/2xZrgId"
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
              /> */}
              {/* <img
                className="author-image"
                src="profile.gif"
                alt="{author}"
                style={{
                  borderRadius: `100%`,
                }}
              /> */}
              <img
                src="https://user-images.githubusercontent.com/45819975/64905994-32548700-d71b-11e9-82de-572dd6473537.GIF"
                alt="profile"
                width="100px"
                height="100px"
                className="author-image"
                style={{
                  borderRadius: `100%`,
                }}
              />
              {/* <iframe
                src="https://user-images.githubusercontent.com/45819975/64905994-32548700-d71b-11e9-82de-572dd6473537.GIF"
                width="100px"
                height="100px"
                align="center"
                frameBorder="0"
                padding-top="15px"
              ></iframe> */}

              <div className="author-name">
                <span className="author-name-prefix">Written by</span>
                <Link to={'/about'} className="author-name-content">
                  <span>{author}</span>
                </Link>
                <div className="author-introduction">{introduction}</div>
                <p className="author-socials">
                  {social.github && (
                    <a href={`https://github.com/${social.github}`}>GitHub</a>
                  )}
                  {social.medium && (
                    <a href={`https://medium.com/${social.medium}`}>Medium</a>
                  )}
                  {social.twitter && (
                    <a href={`https://twitter.com/${social.twitter}`}>
                      Twitter
                    </a>
                  )}
                  {social.facebook && (
                    <a href={`https://www.facebook.com/${social.facebook}`}>
                      Facebook
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
        }
      }
    }
  }
`

export default Bio

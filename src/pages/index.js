import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Home = () => {

	// WP post cG9zdDoxNzU1 contains plenty of inline images which cause the error.
	const data = useStaticQuery(graphql`
		query BlogPostById {
			wpPost(id: {eq: "cG9zdDoxNzU1"}) {
				content
			}
		}
	`)

  return (
    <div dangerouslySetInnerHTML={{__html: data.wpPost.content}} />
  )
}

export default Home
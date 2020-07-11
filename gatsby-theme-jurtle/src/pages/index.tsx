import * as React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/Header";

export const pageQuery = graphql`
    query blogIndex {
        allMdx {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <Header>Awesome MDX Blog</Header>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
              <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogIndex

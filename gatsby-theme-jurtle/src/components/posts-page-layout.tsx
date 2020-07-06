import * as React from 'react';
import { graphql } from "gatsby";
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from 'gatsby';
import Header from "./Header";

const shortcodes = { Link }

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
      mdx(id: { eq: $id }) {
          id
          body
          frontmatter {
              title
          }
      }
  }
`
export default function PageTemplate({ data: { mdx }}) {
  return (
    <div>
      <Header>{mdx.frontmatter.title}</Header>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

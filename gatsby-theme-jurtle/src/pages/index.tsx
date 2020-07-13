import * as React from "react";
import styled from 'styled-components';
import { Link, graphql } from "gatsby";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

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
const Content = styled.div`
  padding-top: 80px;
  min-height: calc(100vh - 60px);
  background-color: #f5f5f5;
`

const PostList = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <>
      <Header>Awesome MDX Blog</Header>
      <Content>
      <PostList>
        {posts.map(({ node: post }) => <PostCard />)}
      </PostList>
      </Content>
    </>
  )
}

export default BlogIndex

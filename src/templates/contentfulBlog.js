import React, {Fragment} from "react";
import { graphql } from "gatsby"

import Header from "../components/Header";
import Layout from "./Layout";

const Blog = ({ data }) => {
    let {contentfulBlogPosts: {
      title,
      subtitle,
      content,
      topImage: {
        fluid: {
          src
        }
      }
    }} = data;
    return (
        <Fragment>
            <Header />
            <Layout>
                <div>{title}</div>
                <div>{subtitle}</div>
                <div>
                  <img src={src} alt={title}></img>
                </div>
                <div dangerouslySetInnerHTML={{__html: content.raw}}></div>
            </Layout>
        </Fragment>
    );
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: {eq: $slug}) {
      title
      subtitle
      id
      content {
        raw
      }
      topImage {
        fluid {
          src
        }
      }
    }
  }
`

export default Blog;

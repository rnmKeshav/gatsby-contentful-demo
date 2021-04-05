import React, {Fragment} from "react";
import { graphql } from "gatsby"

import Header from "../components/Header";
import Layout from "./Layout";

const Blog = ({ data }) => {
    
    return (
        <Fragment>
            <Header />
            <Layout>

                <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
            </Layout>
        </Fragment>
    );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Blog;

import React from "react";
import { graphql, Link } from "gatsby"

import Header from "../components/Header";

const BlogList = (props) => {
    console.log("props", props);
    
    let {allContentfulBlogPosts: {edges}} = props.data;

    return (
        <div>
          <Header />
          <div className="blog-list">
            {edges.map(item => {
              let {title, subtitle, id, slug} = item.node;

              return (
                <div className="blog-item" key={id}>
                  <Link to={slug} className="blog-link">
                    <div className="font-24 u-bold">
                      This is a blog header which goes to {slug}
                    </div>
                    <div className="padding-top-12">{title}</div>
                    <div className="padding-top-12">{subtitle}</div>
                  </Link>
                  <div className="padding-top-12">
                    This blog post renders from contentful. 
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    );
}


export const query = graphql`
  query {
    allContentfulBlogPosts {
      edges {
        node {
          title
          subtitle
          id
          slug
        }
      }
    }
  }
`

export default BlogList;

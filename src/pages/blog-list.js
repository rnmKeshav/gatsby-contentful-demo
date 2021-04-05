import React from "react";
import { graphql, Link } from "gatsby"

import computePageData from "../containers/BlogList/index";
import Header from "../components/Header";

const BlogList = (props) => {
    console.log("props", props);
    let {blog_header_list} = computePageData(props);
    console.log("page_data", blog_header_list);
    //let {heading, content} = page_data;

    return (
        <div>
          <Header />
          <div className="blog-list">
            {blog_header_list.map(item => {
              let {fileAbsolutePath, content, id, page_url} = item;

              return (
                <div className="blog-item" key={id}>
                  <Link to={page_url} className="blog-link">
                    <div className="font-24 u-bold">
                      This is a blog header which goes to {page_url}
                    </div>
                    <div className="padding-top-12">{content}</div>
                  </Link>
                  <div className="padding-top-12">
                    This blog post renders from <a href={`file://${fileAbsolutePath}`}>file location</a>
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
    allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
            id
            fileAbsolutePath
            excerpt
            fields {
              slug
            }
          }
        }
    }
  }
`

export default BlogList;

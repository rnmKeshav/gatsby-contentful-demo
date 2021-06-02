const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    
    const { createNodeField } = actions
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "pages" });
        console.log("slug", slug);
        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
    } else if (node.internal.type === "ContentfulNameOfContentType") {
      // const slug = createFilePath({ node, getNode, basePath: "pages" });
      // console.log("contentful slug", slug);
      //   createNodeField({
      //       node,
      //       name: "slug",
      //       value: slug,
      //   });
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const markdownPageResult = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    markdownPageResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    });

    const contentfulPageResults = await graphql(`
      query {
        allContentfulNameOfContentType {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulBlogPosts {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);
    contentfulPageResults.data.allContentfulBlogPosts.edges.forEach(({node}) => {
      createPage({
        path: `contentful-blog-list/${node.slug}`,
        component: path.resolve(`./src/templates/contentfulBlog.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      })
    })
}
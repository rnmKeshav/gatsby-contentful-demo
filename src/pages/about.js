import React from "react";
import {Helmet} from "react-helmet";
import {graphql} from "gatsby";

import Header from "../components/Header";

import computePageData from "../containers/about/Index";

const About = (props) => {
    //console.log("props", data.site.siteMetadata.title);
    let {title} = computePageData(props);

    return (
        <div className="about-page">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <Header />
            <div className="center font-24">
                Hi this is a test page
            </div>
        </div>
    )
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export default About;
import React from "react";
import {Helmet} from "react-helmet";

import Header from "../components/Header";

const About = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>This is an about page</title>
            </Helmet>
            <Header />
            Hi
        </div>
    )
};

export default About;
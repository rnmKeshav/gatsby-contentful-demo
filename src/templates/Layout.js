import React from "react";


const Layout = ({children}) => {
    return (
        <div style={{margin: "auto", width: "80vw"}}>
            {children}
        </div>
    );
}

export default Layout;

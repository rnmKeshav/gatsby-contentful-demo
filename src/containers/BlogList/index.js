import mergeProps from "../../utils/mergeProps";

const mapQueryDataToProps = (query_data) => {
    let {data} = query_data;

    let {
        allMarkdownRemark: {
            edges
        }
    } = data;

    let blog_header_list = edges.map(edge => {
        let {node: {excerpt, fileAbsolutePath, id, fields: {slug}}} = edge;

        return {
            fileAbsolutePath: fileAbsolutePath,
            content: excerpt,
            id,
            page_url: slug
        }
    });


    return {
        blog_header_list
    }
}

export default mergeProps(mapQueryDataToProps);

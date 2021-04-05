import isEmpty from "lodash.isempty";

import mergeProps from "../../utils/mergeProps";

const mapQueryDataToProps = (query_data) => {
    let {data} = query_data;

    if (isEmpty(data)) {
        // Do the failure case handling
        return {}
    }

    let {title} = data.site.siteMetadata;

    return {
        title
    }
}

const mapActionsToProps = () => {
    return {}
}

export default mergeProps(mapQueryDataToProps, mapActionsToProps);

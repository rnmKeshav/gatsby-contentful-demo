const mergeProps = (mapQueryDataToProps, mapActionsToProps) => (query_data, ...other_props) => {
    let merged_props = {};

    if (mapQueryDataToProps) {
        merged_props = {...merged_props, ...mapQueryDataToProps(query_data, ...other_props)}
    }

    if (mapActionsToProps) {
        merged_props = {...merged_props, ...mapActionsToProps(query_data, ...other_props)}
    }

    return merged_props;
}

export default mergeProps;

import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle, name } ) => {

    

    return (
        <>
            <h1 data-testid="test-title" > { title } </h1>
            <p> { subTitle } </p>
            <p> { subTitle } </p>
            <p> { name } </p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Kakaroto',
    subTitle: 'Sub-title does not found',
    //title: 'Title does not found',
}
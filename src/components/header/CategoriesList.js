import React from 'react';
import Loading from 'react-loading';
import PropTypes from 'prop-types';
import CategoriesListRow from "./CategoriesListRow";

const CategoriesList = ({error, loading, categories}) => (

    error ? <div>Error loading data from the API: {error.message}</div> :
    loading ? <Loading delay={200} type='spin' color='#222' className='loading' /> :
    categories.map( category => <CategoriesListRow category={category} />)

)

CategoriesList.propTypes = {
    error: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    categories: PropTypes.array.isRequired
}

export default CategoriesList;
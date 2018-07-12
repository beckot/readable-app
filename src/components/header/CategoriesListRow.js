import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function trim (str) {
    return str.length > 16
      ? str.slice(0, 16) + '...'
      : str
  }

const CategoriesListRow = ({category}) => {
  return (
    <div key={category.path} className='category'><Link to={`/category/${category.path}`}>{trim(category.name)}</Link></div>
  )
}

CategoriesListRow.propTypes = {
    post: PropTypes.object.isRequired
}

export default CategoriesListRow;
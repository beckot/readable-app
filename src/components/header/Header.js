import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchCategories} from '../../actions/categoriesActions'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CategoriesList from './CategoriesList'

class Header extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
        return(
            <header>
                <Link to="/">All Posts</Link>
                <div>Posts by Category: </div>
                <CategoriesList {...this.props} />
            </header>
        );
    }

}

Header.propTypes = {
    categories: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    categories: state.categories.items,
    loading: state.categories.loading,
    error: state.categories.error
  });


export default connect(mapStateToProps)(Header);
import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children }) => {
  return (
    <Link
      to={filter === 'all' ? '' : filter}
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      {children}
    </Link>
  )
}

export default FilterLink
/*
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from './Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

// const mmapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
*/

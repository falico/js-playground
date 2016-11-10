import React from 'react'
import { VisibilityFilters } from '../actions/constants'
import FilterLink from '../containers/FilterLink'
import RouteFilterLink from '../containers/RouteFilterLink'

const Footer = () => (
  <div>
    <p>Click the filters to see the <b>top</b> list change</p>
    <div>
      Show:
      {" "}
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      {", "}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      {", "}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
    <div>
      <p>Click the filters to see the <b>URL & the bottom</b> list change</p>
      Show:
      {" "}
      <RouteFilterLink filter='all'>
        All
      </RouteFilterLink>
      {", "}
      <RouteFilterLink filter='active'>
        Active
      </RouteFilterLink>
      {", "}
      <RouteFilterLink filter='completed'>
        Completed
      </RouteFilterLink>
    </div>
  </div>
)

export default Footer

import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({ currentPage, page2, page3 }) => {
  return (
    <section className='breadcrumb main-layout2 w-100'>
      <div className='container'>
        <ul className='breadcrumb-list'>
          <li><NavLink to="/">Home</NavLink></li>
          { currentPage == null ? null : <li>{currentPage}</li> }
          { page2 == null ? null : <li>{page2}</li> }
          { page3 == null ? null : <li>{page3}</li> }
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumb
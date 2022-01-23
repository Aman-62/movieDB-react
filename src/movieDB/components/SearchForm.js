import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  })

  const searchMovie = () => {
    setSearchTerm(searchValue.current.value)
  }
  return (
    <section className='search-container container'>
      <form action="" onSubmit={(e) => { e.preventDefault() }}>
        <div className='search-input'>
          <label htmlFor="name">
          </label>
          <input type="text" id='name' placeholder='search' ref={searchValue} onChange={searchMovie} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm

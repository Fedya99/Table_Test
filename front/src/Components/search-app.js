import React, { useState } from 'react'

export default function SearchApp({ChangeSearch, sourse, Filter, setFilter}) {
  const [term, setTerm] = useState('')
  const [select, setSelect] = useState("Филтр по колонкам")
  const onChangeSearch = (e) =>{
    const term = e.target.value
    setTerm(term)
    ChangeSearch(term)
  }
  const ActiveFilter = () => {
    const newarr = sourse.filter((elem) => elem)
    Filter(newarr)
  }

  const onSelectChange = (e) => {
    const { value } = e.target
    setSelect(value)
    setFilter(value)
  }
  return(
    <div className="row mb-3">
      <div className="col-6 d-flex">
        <input 
          placeholder="search" 
          className="form-control"
          value={term}
          onChange={onChangeSearch} 
          aria-label="Text input with dropdown button"
        />
        <button type="button" onClick={ActiveFilter} style={{display: 'none'}}></button>
        <select 
          className="form-select" 
          aria-label="Default select example"
          onChange={onSelectChange}
          value={select}  
        >
          <option selected>Филтр по колонкам</option>
          <option value="date">Дата</option>
          <option value="name">Название</option>
          <option value="count">Количество</option>
          <option value="distance">Растояние</option>
        </select>
      </div>
    </div>
  )
}
import React, { useState, useEffect } from 'react'
import SearchApp from './Components/search-app'
import Pagination from './Components/Pagination'
import Table from './Components/Table'
// {"id":"1","date":"2020-12-01","name":"Name1","count":"125","distance":"12"},
//     {"id":"2","date":"2020-12-02","name":"Name2","count":"10","distance":"50"},
//     {"id":"3","date":"2020-12-03","name":"Name3","count":"1","distance":"12"},
//     {"id":"4","date":"2020-12-04","name":"Name4","count":"34","distance":"84"},
//     {"id":"5","date":"2020-12-05","name":"Name5","count":"5","distance":"6"},
//     {"id":"6","date":"2020-12-06","name":"Name6","count":"6","distance":"7"},
//     {"id":"7","date":"2020-12-07","name":"Name7","count":"7","distance":"8"},
//     {"id":"8","date":"2020-12-08","name":"Name8","count":"8","distance":"9"},
//     {"id":"9","date":"2020-12-09","name":"Name9","count":"9","distance":"10"},
//     {"id":"10","date":"2020-12-10","name":"Name10","count":"10","distance":"11"},
//     {"id":"11","date":"2020-12-11","name":"Name11","count":"11","distance":"12"},
//     {"id":"12","date":"2020-12-12","name":"Name12","count":"12","distance":"13"},
//     {"id":"13","date":"2020-12-13","name":"Name13","count":"13","distance":"14"},
//     {"id":"14","date":"2020-12-14","name":"Name14","count":"14","distance":"15"},
//     {"id":"15","date":"2020-12-15","name":"Name15","count":"15","distance":"16"},
//     {"id":"16","date":"2020-12-16","name":"Name16","count":"16","distance":"17"},
//     {"id":"17","date":"2020-12-17","name":"Name17","count":"17","distance":"18"},
//     {"id":"18","date":"2020-12-18","name":"Name18","count":"18","distance":"19"},
//     {"id":"19","date":"2020-12-19","name":"Name19","count":"19","distance":"20"},
//     {"id":"20","date":"2020-12-20","name":"Name20","count":"20","distance":"21"},
//     {"id":"21","date":"2020-12-21","name":"Name21","count":"21","distance":"22"}
export default function App() {

  const [posts, setPosts] = useState([])

  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)

  const [postsPerPage] = useState(10)

  const [filter, setFilter] = useState('name')

  const Get = async (url) => {
    setLoading(true)
    const res = await fetch(url)
    const json = await res.json()
    setPosts(json)
    setLoading(false)
  }

  useEffect(() => {
    Get("http://localhost/beckend/objects/resourses.php")
  },[])

  const [term, setTerm] = useState('')

  const onChangeSearch = (term) => setTerm(term)

  const search = (items, term) => {
    if(term.length === 0){
      return items
    }
    console.log(filter)
    if(filter === 'date'){
      return items.filter((item) => {
        return item.date.toUpperCase().indexOf(term.toUpperCase()) > -1
      })
    }
    if(filter === 'name'){
      return items.filter((item) => {
        return item.name.toUpperCase().indexOf(term.toUpperCase()) > -1
      })
    }
    if(filter === 'count'){
      return items.filter((item) => {
        return item.count.toUpperCase().indexOf(term.toUpperCase()) > -1
      })
    }
    if(filter === 'distance'){
      return items.filter((item) => {
        return item.distance.toUpperCase().indexOf(term.toUpperCase()) > -1
      })
    }
  }

  const ChangeFilter = (newarr) => setPosts(newarr)
  
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const visibleItem = search(currentPosts, term)

  return(
    <>
      <SearchApp ChangeSearch = {onChangeSearch} posts = {posts} Filter = {ChangeFilter} setFilter={setFilter}/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Дата</th>
            <th scope="col">Название</th>
            <th scope="col">Количество</th>
            <th scope="col">Расстояние</th>
          </tr>
        </thead>
        <Table posts = {visibleItem} loading={loading}/>
      </table>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </>
  )

}
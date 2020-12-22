import React from 'react'
// import TodoListItem from './todo-list-item'

export default function Table({posts, loading}) {
  if(loading) {
    return (<h2>Loading...</h2>)
  }
  const el = posts.map((item)=>{
    const {date,id, name, count, distance} = item
    return(
      <tr key={id}>
        <th scope="row">{id}</th>
        <td>{date}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{distance}</td>
      </tr>
    )
  })
  return(
    <tbody>
      {el}
    </tbody>
  )
}
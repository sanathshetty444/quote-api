import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import withLoader from '../hoc/withLoader'
import { Category } from '../redux/quote/type'
import CategroyComponent from './Category'

type Props = {
    categories:Category[]
}
function CategoryList({categories}:Props) {

  return (
   
    <ul>{categories.map((item,index)=>(
        <li>
            <CategroyComponent category={item}/>
        </li>
   ))}</ul>
  )
}

export default withLoader(CategoryList)
import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import withLoader from '../hoc/withLoader'
import { Category } from '../redux/quote/type'
import CategroyComponent from './Category'

type Props = {
  categories: Category[]
}
function CategoryList({ categories }: Props) {

  return (

    <Container className='w-100 py-3'>
      <h3>Quote Categories</h3>
      {categories.map((item, index) => (
        <CategroyComponent key={`category-${index}`} category={item} />
      ))}
    </Container>
  )
}

export default withLoader(CategoryList)
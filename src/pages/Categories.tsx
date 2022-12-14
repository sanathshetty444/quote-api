import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import Container from 'react-bootstrap/Container';

import { Category } from '../redux/quote/type'
import * as actionCreators from '../redux/quote/action'
import { RootState } from '../redux/store'
import CategoryList from '../components/CategoryList'

export default function Categories() {
  const dispatch = useDispatch()
  const categories: Category[] = useSelector((state: RootState) => state.quote.categories) || []
  const { fetchCategories } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Container fluid>
        <CategoryList categories={categories} />
      </Container>
    </div>
  )
}

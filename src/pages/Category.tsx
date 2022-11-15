import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../redux/quote/action'
import { RootState } from '../redux/store'
import { useParams } from 'react-router-dom'
import { CategoryDescription } from '../redux/quote/type'
import CategoryDetail from '../components/CategoryDetail'

export default function Category() {
  const dispatch = useDispatch()
  const { category: arg } = useParams();

  const category: CategoryDescription | null = useSelector((state: RootState) => state.quote.selectedCategory)
  const { fetchCategory } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    fetchCategory(arg || "")
  }, [])

  return (
    <div className='w-100 d-flex justify-content-center lign-items-center'><CategoryDetail description={category} /></div>
  )
}

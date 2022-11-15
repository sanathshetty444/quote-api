import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { Category as CategoryType } from '../redux/quote/type';

type Props = {
    category: CategoryType
}
export default function Category({category}:Props) {
    const navigate = useNavigate();
    const {name} = category
  return (
    <Card style={{cursor:'pointer'}} onClick={()=>{
        navigate(`/categories/${name}`)
      }}>
    <Card.Body>{name}</Card.Body>
  </Card>
    
  )
}

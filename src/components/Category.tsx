import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { Category as CategoryType } from '../redux/quote/type';
import styles from "../styles/Category.module.css"
import { getRandomColor } from '../utils';

type Props = {
  category: CategoryType
}
export default function Category({ category }: Props) {
  const navigate = useNavigate();
  const { name } = category
  return (
    <Card className={`${styles.categoryCard}`} style={{ backgroundColor: getRandomColor() }} onClick={() => {
      navigate(`/categories/${name}`)
    }}>
      <Card.Body><b>{name}</b></Card.Body>
    </Card>

  )
}

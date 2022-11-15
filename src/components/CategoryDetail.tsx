import React from 'react'

import { Container, Image } from 'react-bootstrap';

import withLoader from '../hoc/withLoader'
import { CategoryDescription } from '../redux/quote/type'
import styles from "../styles/Category.module.css"

type Props = {
    description: CategoryDescription | null
}

function CategoryDetail({ description }: Props) {
    const { author, background, quoteString, tags } = description || {}
    return (
        <Container fluid className='p-0 position-relative' style={{ height: "100vh" }}>
            <Image src={background} width="100%" height="100%" style={{ opacity: 0.28 }} />
            <div className={`position-absolute text-dark ${styles.quoteString}`}>
                <i className='fs-3'>{quoteString}</i>
                <p className='text-right mt-2'>By: <b>{author}</b></p>

                <div className='mt-5'>
                    {tags?.map((tag, index) => (
                        <span key={`tag-${index}`} className={`${styles.tag} rounded`}>{tag.name}</span>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default withLoader(CategoryDetail)
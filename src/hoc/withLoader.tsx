import React from 'react'
import { Container } from 'react-bootstrap';

import Spinner from 'react-bootstrap/Spinner';

import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export default function withLoader<T extends object>(Component: React.ComponentType<T>) {
    return (hocProps: T) => {
        const loading: boolean = useSelector((state: RootState) => state.quote.loading)
        return <>
            {loading ? <Container fluid style={{ height: "100vh" }} className='w-100 d-flex justify-content-center align-items-center'><Spinner /></Container> : <Component {...hocProps} />}
        </>
    }
}

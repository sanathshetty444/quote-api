import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export default function withLoader<T extends object>(Component:React.ComponentType<T>) {
    return (hocProps:T)=>{
        const loading:boolean = useSelector((state:RootState)=>state.quote.loading)
        return <>
        {loading ? <div>Loading</div> : <Component {...hocProps}/>}
    </>
    }
}

import { useState, useEffect } from 'react'

export const ProductosApi = () => {

    let url="https://rickandmortyapi.com/api/character/"

    const [todos, setTodos] = useState()

    const fetchApi=async(url)=>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON.results)
    }

    useEffect(()=>{
        fetchApi(url)
    },[])

    return (
        todos
    )
 
}

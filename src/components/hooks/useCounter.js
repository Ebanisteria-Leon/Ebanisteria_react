import { useState } from 'react'

export const useCounter = () => {
    const [counter, setCounter] = useState(1)

    const add = () => setCounter(counter + 1)

    const remove = () => setCounter(counter - 1)

    return {
        counter,
        add,
        remove,
    }
}

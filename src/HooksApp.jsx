import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithHook } from './01-useState/CounterWithHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormWithHook } from './02-useEffect/SimpleFormWithHook'

export const HooksApp = () => {
    return (
        <>
            <CounterApp />
            <CounterWithHook />
            <SimpleForm/>
            <SimpleFormWithHook/>
        </>
    )
}

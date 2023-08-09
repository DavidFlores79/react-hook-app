import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithHook } from './01-useState/CounterWithHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormWithHook } from './02-useEffect/SimpleFormWithHook'
import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-Memos/Memorize'
import { MemoHook } from './06-Memos/MemoHook'
import { CallbackHook } from './06-Memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'

export const HooksApp = () => {
    return (
        <>
            <CounterApp />
            <CounterWithHook />
            <SimpleForm />
            <SimpleFormWithHook />
            <MultipleCustomHooks />
            <FocusScreen/>
            <Layout/>
            <Memorize/>
            <MemoHook/>
            <CallbackHook/>
            <Padre/>
            <TodoApp/>
        </>
    )
}

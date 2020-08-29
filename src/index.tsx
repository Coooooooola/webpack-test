import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './App'

const {a, ...rest} = App

console.log(process.env.NODE_ENV, rest)

ReactDOM.render(<App />, document.getElementById('root'))

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App.jsx' // get the APP function from APP jsx defines the react component


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
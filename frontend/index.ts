import ReactDOM from 'react-dom/client'
import 'Frontend/src/index.css'
import App from './src/App.js'
import { createElement } from 'react'

ReactDOM.createRoot(document.getElementById('outlet')!).render(createElement(App));

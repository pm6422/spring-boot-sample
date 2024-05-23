import { createRoot } from "react-dom/client"
import 'Frontend/src/index.css'
import App from './src/app.js'
import { createElement } from 'react'

createRoot(document.getElementById('root')!).render(createElement(App));

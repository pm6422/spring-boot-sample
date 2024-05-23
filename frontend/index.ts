import { createRoot } from "react-dom/client"
import 'Frontend/src/index.css'
import Main from './src/main'
import { createElement } from 'react'

createRoot(document.getElementById('root')!).render(createElement(Main));

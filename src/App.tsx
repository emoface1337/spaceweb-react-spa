import React, { FC, ReactElement } from 'react'
import './App.sass'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

const App: FC = (): ReactElement => {
    return (
        <div className="app-container">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App

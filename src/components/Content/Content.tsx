import React, { FC, ReactElement } from 'react'
import Header from '../Header/Header'
import Articles from '../Articles/Articles'

const Content: FC = (): ReactElement => {
    return (
        <div className="content">
            <Header/>
            <main className="content-main">
                <div className="content-main__header">
                    <div className="content-main__breadcrumb">Бортовой журнал</div>
                    <h2 className="content-main__title">Бортовой журнал</h2>
                </div>
                <div className="articles-wrapper">
                    <Articles/>
                </div>
            </main>
        </div>
    )
}

export default Content
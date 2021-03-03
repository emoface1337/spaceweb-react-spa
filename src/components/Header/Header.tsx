import React, { FC, ReactElement } from 'react'
import NotificationIcon from '../NotificationIcon'

const Header: FC = (): ReactElement => {
    return (
        <header className="header">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="" className="header__balance">100.00 ₽</a>
            <div className="header-profile">
                <div className="header-profile__notifications">
                    <NotificationIcon/>
                    <span>1</span>
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="header-profile__user" href="">vikavishny</a>
            </div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="" className="header-profile__exit">Выйти</a>
        </header>
    )
}

export default Header
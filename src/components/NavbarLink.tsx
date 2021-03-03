import React, { FC, ReactElement } from 'react'

type Props = {
    icon: any
    title: string
    active: boolean
}

const NavbarLink: FC<Props> = ({ icon, title, active }): ReactElement => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className={`navbar-link ${active ? 'active' : ''}`} href="#">
            <div className="navbar-link__icon"><img src={icon} alt={`Иконка ${title}`}/></div>
            <div className="navbar-link__text">{title}</div>
        </a>
    )
}

export default NavbarLink
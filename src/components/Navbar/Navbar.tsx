import React, { FC, ReactElement, useState } from 'react'

import UserIcon from './../../assets/user.png'
import VpsIcon from './../../assets/vps.png'
import DomainIcon from './../../assets/domains.png'
import HelpIcon from './../../assets/help.png'

import Logo from '../Logo/Logo'
import NavbarLink from '../NavbarLink'

type MenuItemType = {
    icon: string
    title: string
}

const MenuItems: MenuItemType[] = [
    {
        icon: UserIcon,
        title: 'Аккаунт'
    },
    {
        icon: VpsIcon,
        title: 'VPS'
    },
    {
        icon: DomainIcon,
        title: 'Домены'
    },
    {
        icon: HelpIcon,
        title: 'Бортовой журнал'
    }
]

const Navbar: FC = (): ReactElement => {

    const [activeLinkIndex, setActiveLinkIndex] = useState(3)

    //TODO
    // 1. упростить функционал активного индекса ссылки можно с помощью react-router-dom (NavLink) без использования стейта

    return (
        <div className="navbar">
            <Logo/>
            {
                MenuItems.map((item, index: number) =>
                    (
                        <div onClick={() => setActiveLinkIndex(index)} key={index}>
                            <NavbarLink icon={item.icon} title={item.title} active={activeLinkIndex === index}/>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Navbar
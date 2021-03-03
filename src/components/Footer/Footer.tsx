import React, { FC, ReactElement } from 'react'

const Footer: FC = (): ReactElement => {
    return (
        <footer className="footer">
            <div className="footer-info">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <p>© 2001– 2018 ООО <a href="">«СпейсВэб»</a></p>
                <p>Все права защищены.</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <p>Лицензия <a href="">№163230</a></p>
            </div>
            <div className="footer-contacts">
                <div><a href="tel:+7 (812) 334-12-22">+7 (812) 334-12-22</a> (в Санкт-Петербурге)</div>
                <div><a href="tel:+7 (495) 663-16-12">+7 (495) 663-16-12</a> (в Москве)</div>
                <div><a href="tel:(800) 100-16-15">(800) 100-16-15</a> (бесплатно по России)</div>
            </div>
        </footer>
    )
}

export default Footer
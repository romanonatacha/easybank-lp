import React, { useState } from 'react'
import Button from '../Button/Button'
import './Header.scss'
import logo from '../../assets/images/logo.svg'
import close from '../../assets/images/icon-close.svg'
import hamburger from '../../assets/images/icon-hamburger.svg'

const nav = ['Home', 'About', 'Content', 'Blog', 'Careers']

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        if (openMenu) {
            setOpenMenu(false)
        } else {
            setOpenMenu(true)
        }
    }

    const menuClick = () => {
        setOpenMenu(false)
    }

    return (
        <>
            <div className="header">
                <div className="container header_content">
                    <div className="header_content_logo">
                        <img src={logo} alt="easybank logo" />
                    </div>
                    <div className="header_content_nav mb_tb_hide">
                        {nav.map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </div>
                    <div className="header_content_btn">
                        <div className="mb_tb_hide">
                            <Button text="Request Invite" />
                        </div>
                        <button className="dt_hide" onClick={handleClick}>
                            {openMenu &&
                                <img src={close} alt="close" />
                            }
                            {!openMenu &&
                                <img src={hamburger} alt="open menu" />
                            }
                        </button>
                    </div>
                </div>
            </div>
            {openMenu &&
                <div className="mb_nav dt_hide">
                    {nav.map((item, i) => (
                        <div onClick={menuClick} key={i}>{item}</div>
                    ))}
                </div>
            }
        </>
    )
}

export default Header
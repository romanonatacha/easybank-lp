import React from 'react'
import Button from '../Button/Button'
import './Header.scss'
import logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="container header_content">
                <div className="header_content_logo">
                    <img src={logo} />
                </div>
                <div className="header_content_nav">
                    <span>Home</span>
                    <span>About</span>
                    <span>Content</span>
                    <span>Blog</span>
                    <span>Careers</span>
                </div>
                <div className="header_content_btn">
                    <Button text="Request Invite" />
                </div>
            </div>
        </div>
    )
}

export default Header
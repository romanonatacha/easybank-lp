import React from 'react'
import './Section.scss'

const Section = (props) => {
    const { seClass, children } = props

    return (
        <div className={`${'section ' + seClass}`}>
            {children}
        </div>
    )
}

export default Section
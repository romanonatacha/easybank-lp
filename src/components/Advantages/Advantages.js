import React from 'react'
import './Advantages.scss'
import online from '../../assets/images/icon-online.svg'
import budgeting from '../../assets/images/icon-budgeting.svg'
import onboarding from '../../assets/images/icon-onboarding.svg'
import api from '../../assets/images/icon-api.svg'

const advantages = [
    {
        image: online,
        title: "Online Banking",
        desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
        image: budgeting,
        title: "Simple Budgeting",
        desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    {
        image: onboarding,
        title: "Fast Onboarding",
        desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        image: api,
        title: "Open API",
        desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
]

const Advantages = () => {
    return (
        <>
            {advantages.map((adv, i) => (
                <div key={i} className="advantage">
                    <div className="advantage_image">
                        <img src={adv.image} />
                    </div>
                    <h3>{adv.title}</h3>
                    <p>{adv.desc}</p>
                </div>
            ))}
        </>
    )
}

export default Advantages
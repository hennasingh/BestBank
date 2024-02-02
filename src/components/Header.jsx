import React from 'react'
import logo from '../assets/bestBankLogo.png'

export default function Header() {

    return (
        <>
        <img className='logo' src={logo} alt='logo of BestBank, mono pyramid'/>
        <nav>
            <ul className='nav-list'>
                <li>Home</li>
                <li>Payments</li>
                <li>Savings</li>
                <li>Financing</li>
                <li>Stocks</li>
            </ul>

        </nav>
        </>
    )
}
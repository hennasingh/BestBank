import React from 'react'
import logo from '../assets/bestBankLogo.png'

export default function Header() {

    return (
        <header>
            <img className='logo' src={logo} alt='logo of BestBank, mono pyramid'/>
            <nav>
                <ul className='nav-list'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Savings</a></li>
                    <li><a href="#">Financing</a></li>
                    <li><a href="#">Stocks</a></li>
                </ul>

            </nav>
        </header>
    )
}
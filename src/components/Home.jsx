import React from 'react'
import { getAccounts } from '../api'

export default function Home() {

    getAccounts()


    return (
        <div>
            <div>
                <button className="action-btn">Pay</button>
                <button className="action-btn">Transfer</button>
            </div>
        </div>
    )

}
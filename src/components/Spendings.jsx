import React from 'react'

export default function Spendings({accountSpendings}) {

    const spendingElements = accountSpendings.spendings?.length == 0
    ? <p>You dont have any spendings!</p>
    : accountSpendings.spendings?.map((spending, index) =>(
        <div className="progress-container" key={index}>
            <div className='progress-bar' style={{width: `${(spending.spent / accountSpendings.balance) * 100 + 60}%`}}>
                <p>{spending.category}</p>
                <p>$ {Number(spending.spent).toLocaleString()}</p>
            </div>
        </div>                                                   
    ))

    return (
        <div className="div-spendings">
        <h2>Spendings</h2>
        <div className="spending-list">
            { spendingElements}
        </div>
    </div>
    )

}
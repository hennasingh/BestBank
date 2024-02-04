import React from 'react'
import { getAccounts } from '../api'

export default function Home() {

    const [accounts, setAccounts] = React.useState([])
    const [clickedAccount , setClickedAccount] = React.useState()
    const [accountSpendings, setAccountSpendings] = React.useState({})

   React.useEffect(() => {
        async function loadAccounts() {
            try {
                const data = await getAccounts()
                setAccounts(data)
            } catch (err) {
                console.log(err)
            }
        }
        loadAccounts()
   }, [])

   React.useEffect(() => {
    
    if(accounts.length>0) {
        displaySpendings(1)
    }
   },[accounts])

   const accountElements = accounts.map(account => (        
        
        <li className={`account ${clickedAccount == account.id ? 'selected': ''}`} key={account.id} onClick={() => displaySpendings(account.id)}>
            <p>{account.title} </p>
            <p>$ {Number(account.balance).toLocaleString('en-US')}</p>
        </li> 
   ))

   const displaySpendings = (accountId) => {
        setClickedAccount(accountId)
        const account = accounts.filter(account => account.id == accountId)[0]
        setAccountSpendings({
            spendings: account.spendings, 
            balance: account.balance}
            )
   }


    return (
        <main>
            <section>
                <div className="buttons">
                    <button className="action-btn">Pay</button>
                    <button className="action-btn">Transfer</button>
                </div>
            </section>
            <section className="section-accounts">
                <div className="container">
                    <div className='account-list'>
                        <h2>Accounts</h2>
                        <ul>
                            { accountElements}
                        </ul>
                    </div>
                    <div className="div-spendings">
                        <h2>Spendings</h2>
                        <div className="spending-list">
                            {
                                accountSpendings.spendings?.map((spending, index) =>(
                                    <div className="progress-container" key={index}>
                                        <div className='progress-bar' style={{width: `${(accountSpendings.balance - spending.spent) / 100}%`}}>
                                            <p>{spending.category}</p>
                                            <p>$ {Number(spending.spent).toLocaleString()}</p>
                                        </div>
                                    </div>                                                   
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}
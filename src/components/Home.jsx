import React from 'react'
import { getAccounts } from '../api'
import Account from './Account'
import Spendings from './Spendings'
import Error from './Error'

export default function Home() {

    const [accounts, setAccounts] = React.useState([])
    const [clickedAccount , setClickedAccount] = React.useState()
    const [accountSpendings, setAccountSpendings] = React.useState({})
    const [errorState, setErrorState] = React.useState(false)
    const [error, setError] = React.useState(null)

   React.useEffect(() => {
        async function loadAccounts() {
            try {
                const data = await getAccounts()
                setAccounts(data)
            } catch (err) {
                console.log(err)
                setErrorState(true)
                setError(err)
            }
        }
        loadAccounts()
   }, [])

   React.useEffect(() => {
    
    if(accounts.length>0) {
        displaySpendings(1)
    }
   },[accounts])


   const displaySpendings = (accountId) => {
        setClickedAccount(accountId)
        const account = accounts.filter(account => account.id == accountId)[0]
        setAccountSpendings({
            spendings: account.spendings, 
            balance: account.balance
        })
   }

    return (
        <main>
            <section>
                <div className="container-action-buttons">
                    <button className="action-btn">Pay</button>
                    <button className="action-btn">Transfer</button>
                </div>
            </section>
            <section className="section-accounts">
                <div className="container">
                    <Account 
                        accounts={accounts} 
                        clickedAccount={clickedAccount}
                        displaySpendings={displaySpendings}
                    />
                    <Spendings accountSpendings={accountSpendings} />
                </div>
            </section>
            { errorState && 
                <section className="section-error">
                     <Error error={error} />
                 </section>
            }
        </main>
    )

}
import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox';
import { getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const mybanks = async () => {

  
        const loggedIn = await getLoggedInUser();
        if (!loggedIn) {
            // Handle the case where the user is not logged in
            return <div>User is not logged in</div>;
        }
        const accounts = await getAccounts({ userId: loggedIn.$id })
    
       
  return (
     <section className='felx'>
      <div className='my-banks'>
      <HeaderBox 
          title='My Bank Accounts'
          subtext='Effortlessly manage your bank accounts.'
        />
        <div className='space-y-4'>
          <h2 className='header-2'>
            Your Cards
          </h2>
          <div className='flex flex-wrap gap-6'>
            {accounts && accounts.data.map((a: Account)=>(
              <BankCard 
                key={a.id}
                account={a}
                userName={loggedIn?.firstName}
              />
            ))}
             
          </div>
        </div>
      </div>
     </section>
    )
}

export default mybanks
import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const transfers = async () => {

  const loggedIn = await getLoggedInUser();
      const accounts = await getAccounts({ userId: loggedIn.$id })
  
      if(!accounts) return;
      const accountdata = accounts?.data;

  return (
    <section className='payment-transfer'>
      <HeaderBox
         title="Payment Transfer"
         subtext='Transfer money to other banks or accounts' 
      />
      <section className='size-full pt-5'>
        <PaymentTransferForm
           accounts={accountdata}
        />
      </section>
    </section>
  )
}

export default transfers
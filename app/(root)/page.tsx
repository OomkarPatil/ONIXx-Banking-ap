import HeaderBox from '@/components/HeaderBox' 
import RecentTransactions from '@/components/RecentTransactions';
import RightSideBar from '@/components/RightSideBar';
import TotalBalancebox from '@/components/TotalBalancebox';
import {  getAccount, getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.action';

const Home = async ({ searchParams:{ id, page}}:SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({ userId: loggedIn.$id })

    if(!accounts) return;
    const accountdata = accounts?.data;
    const appwriteItemId = (id as string) || accountdata[0]?.appwriteItemId; 

    const account = await getAccount({appwriteItemId})

    
    
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                       type = "greeting"
                       title = "Welcome"
                       user = {loggedIn?.firstName || "Guest"}
                       subtext = "Access and manage Account and Transactioxxx  Efficiently"
                    />

                    <TotalBalancebox
                       accounts = {accountdata}
                       totalBanks = {accounts.totalBanks}
                       totalCurrentBalance = {accounts?.totalCurrentBalance} 
                    />
                </header>

                <RecentTransactions
                   accounts={accountdata}
                   transactions={account?.transactions}
                   appwriteItemId={appwriteItemId}
                   page={currentPage}
                />
            </div>


            <RightSideBar 
              user = {loggedIn}
              transactions = {account?.transactions}
              banks = {accountdata?.slice(0,2)}
            />
        </section>
    )
}

export default Home 
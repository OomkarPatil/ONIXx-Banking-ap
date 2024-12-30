import HeaderBox from '@/components/HeaderBox' 
import RightSideBar from '@/components/RightSideBar';
import TotalBalancebox from '@/components/TotalBalancebox';
import { getLoggedInUser } from '@/lib/actions/user.action';

const Home = async () => {
    const loggedIn = await getLoggedInUser();

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                       type = "greeting"
                       title = "Welcome"
                       user = {loggedIn?. name || 'Guest'}
                       subtext = "Access and manage Account and Transactioxxx  Efficiently"
                    />

                    <TotalBalancebox
                       accounts = {[]}
                       totalBanks = {1}
                       totalCurrentBalance = {40000.20} 
                    />
                </header>

                RECENT TRANSACTION
            </div>


            <RightSideBar 
              user = {loggedIn}
              transactions = {[]}
              banks = {[{currentBalance:123.50}, {currentBalance:400000}]}
            />
        </section>
    )
}

export default Home 
import HeaderBox from '@/components/HeaderBox' 
import RightSideBar from '@/components/RightSideBar';
import TotalBalancebox from '@/components/TotalBalancebox';

const Home = () => {
    const loggedIn = {firstName: 'Omkar', lastName: 'Patil', email: 'Omkarpatil5053@gmail.com'} ;

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                       type = "greeting"
                       title = "Welcome"
                       user = {loggedIn?. firstName || 'Guest'}
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
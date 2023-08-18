import {Link} from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
            {/* Change image for final version */}
            <div className="home_donate_bar">
                <img src='donation_icon.png' alt='Donate Icon' width='80px' height='80px' />
                <Link to="/donate">Click Here to Donate</Link>
            </div>
            <div className='home_main_content'>
                <img src='retreat_center_front.jpg' alt='Retreat Center' width='752px' height='423px' />
                <div className='home_explanation'>
                    <h2>Who are we?</h2>
                    <p>
                        Archangel Ministries is a Catholic, non-profit, charitable organization
                         - focused on living the Gospel of Jesus Christ through the Spiritual and 
                         Corporal Works of Mercy. We are called to counsel the doubtful, instruct the ignorant, 
                         admonish the sinner, comfort the sorrowful, forgive all injuries, bear wrongs patiently, 
                         pray for the living and the dead, feed the hungry, give drink to the thirsty, clothe the naked, 
                         shelter the homeless, visit the sick, visit the imprisoned and bury the dead.
                    </p>
                </div>
            </div>
            <div className='home_quote'>
                <h2>"Therefore, encourage one another and build one another up, as indeed you do."</h2>
                <h3>1 Thessalonians 5:11</h3>
            </div>
        </div>
     );
}
 
export default Home;
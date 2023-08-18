import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return ( 
        <nav className="navigation_bar">
            <Link to="/"><h1>Archangel Ministries</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/regnum-dei-center">Regnum Dei Center</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/donate">Donate</Link>
            </div>
        </nav>
     );
}
 
export default NavigationBar;
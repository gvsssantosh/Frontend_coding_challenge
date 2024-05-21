import "./userHome.css";
import { Link } from 'react-router-dom';

function NavigationBar() {

    return (
        <nav className='nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/customerHome">Customers</Link></li>
                <li><Link to="/aboutUs">About Us</Link></li>
                <li><Link to="/contactUs">Contact Us</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
export default NavigationBar;
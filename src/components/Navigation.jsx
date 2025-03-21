
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/checkBox">Check Box</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>

        </>
    );
}
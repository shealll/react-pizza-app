import './shop/shop.css';
import {Link} from 'react-router-dom';

export const ThankYou = () => {

    return (
        <div className="content-container">
            <h2>Thank You For Ordering!</h2>
            <p>Your order was successful and you will be notified when your item is on the way.</p>
            <h3>Estimated Time: 60 minutes</h3>

            <Link to="/react-pizza-app" className="site-button">
                    Back to Site
            </Link>

        </div>
    )
}
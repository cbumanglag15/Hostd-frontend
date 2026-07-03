import "./MainNavBar.css";
export default function MainNavBar() {
    return (
        <div className="mainNavBar">
            <nav className="mainNavBarLinks">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Offers</a></li>
                    <li><a href="/">Hostd Rewards Club</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Hostd For Businesses</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
}
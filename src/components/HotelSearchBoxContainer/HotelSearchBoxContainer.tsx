import "./HotelSearchBoxContainer.css";

export default function HotelSearchBoxContainer() {
    return (
        <div className="hotelSearchBoxContainer">
            <div>
                <h2 className="hotelSearchBoxTitle">Find Your Perfect Stay</h2>
            </div>
            <form className="hotelSearchForm">
                <input type="text" placeholder="Destination" className="hotelSearchInput" />
                <input type="text" placeholder="Check-in Date" className="hotelSearchInput" />
                <input type="text" placeholder="Check-out Date" className="hotelSearchInput" />
                <input type="text" placeholder="Guests" className="hotelSearchInput" />
            </form>
            <button className="hotelSearchButton">Search</button>
        </div>
    );
}

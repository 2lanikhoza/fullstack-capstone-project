import React, { useState } from "react";
import "./MainPage.css";

const destinations = [
  {
    title: "Boulders Beach",
    type: "beach",
    country: "South Africa",
    location: "Cape Town, South Africa",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    description:
      "A beautiful beach destination with soft sand, ocean views, and a relaxing coastal atmosphere.",
  },
  {
    title: "Clifton Beach",
    type: "beach",
    country: "South Africa",
    location: "Cape Town, South Africa",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description:
      "A popular beach recommendation for travellers who enjoy sunshine, swimming, and scenic views.",
  },
  {
    title: "Golden Temple",
    type: "temple",
    country: "India",
    location: "Amritsar, India",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
    description:
      "A peaceful temple destination known for its beautiful architecture and cultural importance.",
  },
  {
    title: "Wat Arun Temple",
    type: "temple",
    country: "Thailand",
    location: "Bangkok, Thailand",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
    description:
      "A stunning temple recommendation for visitors interested in history, culture, and sightseeing.",
  },
  {
    title: "Table Mountain",
    type: "mountain",
    country: "South Africa",
    location: "Cape Town, South Africa",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=900&q=80",
    description:
      "A famous mountain attraction offering amazing views, hiking routes, and unforgettable scenery.",
  },
  {
    title: "Kruger National Park",
    type: "wildlife",
    country: "South Africa",
    location: "South Africa",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
    description:
      "A wildlife destination where travellers can experience nature, animals, and safari adventures.",
  },
];

function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  const handleSearch = () => {
    const results = destinations.filter(
      (place) =>
        place.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredDestinations(results);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredDestinations(destinations);
  };

  return (
    <div className="main-page">
      <nav className="navbar">
        <div className="logo">TravelBloom</div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        <div className="search-area">
          <input
            type="text"
            placeholder="Search beach, temple, South Africa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Explore Dream Destinations Around the World</h1>
          <p>
            Welcome to TravelBloom, your travel recommendation website. We help
            travellers discover beautiful beaches, cultural temples, scenic
            mountains, wildlife destinations, and country-based travel ideas for
            their next adventure.
          </p>
          <a href="#recommendations" className="hero-button">
            View Recommendations
          </a>
        </div>
      </section>

      <section id="recommendations" className="recommendations-section">
        <h2>Travel Recommendations</h2>
        <p className="section-intro">
          Use the search bar to find recommended places such as beaches,
          temples, mountains, wildlife destinations, and countries.
        </p>

        <div className="cards-container">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((place, index) => (
              <div className="destination-card" key={index}>
                <img src={place.image} alt={place.title} />
                <div className="card-content">
                  <h3>{place.title}</h3>
                  <h4>{place.location}</h4>
                  <p>{place.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">
              No destinations found. Try searching for beach, temple, South
              Africa, mountain, or wildlife.
            </p>
          )}
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>

        <p>
          TravelBloom is a travel recommendation company that helps users
          discover exciting travel destinations around the world. Our website
          provides destination suggestions based on user interests such as
          beaches, temples, mountains, wildlife, and countries.
        </p>

        <p>
          Our mission is to make travel planning simple by giving users clear
          recommendations, destination images, and useful information in one
          place. We aim to inspire travellers to explore new places and choose
          destinations that match their travel goals.
        </p>

        <div className="company-info">
          <h3>Company Information</h3>
          <ul>
            <li>
              <strong>Company Name:</strong> TravelBloom
            </li>
            <li>
              <strong>Industry:</strong> Travel and Tourism
            </li>
            <li>
              <strong>Service:</strong> Online travel recommendations
            </li>
            <li>
              <strong>Goal:</strong> Helping users find beaches, temples, and
              country-based destinations.
            </li>
          </ul>
        </div>

        <div className="team-box">
          <h3>Meet Our Team</h3>

          <div className="team-grid">
            <div className="team-member">
              <h4>Thulani Khoza</h4>
              <p>
                <strong>Role:</strong> Front-End Developer
              </p>
              <p>
                Responsible for building the website layout, navigation bar,
                search feature, and user interface.
              </p>
            </div>

            <div className="team-member">
              <h4>Amukelani Nkuna</h4>
              <p>
                <strong>Role:</strong> Travel Content Specialist
              </p>
              <p>
                Responsible for selecting destination information, travel
                categories, and recommendation content.
              </p>
            </div>

            <div className="team-member">
              <h4>TravelBloom Support Team</h4>
              <p>
                <strong>Role:</strong> Customer Support
              </p>
              <p>
                Responsible for helping users with travel enquiries and contact
                form responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need help choosing a destination? Contact our travel
          recommendation team using the form below.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email address" required />
          <textarea placeholder="Write your message here" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <p className="contact-email">Email: travelbloom@example.com</p>
      </section>
    </div>
  );
}

export default MainPage;
// src/pages/Home.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to AmberStudent</h1>
      <Carousel autoPlay infiniteLoop showThumbs={false} dynamicHeight>
        <div>
          <img src="/assets/campus-view.jpg" alt="Campus Life" />
          <p className="legend">Campus views you'll love</p>
        </div>
        <div>
          <img src="/assets/social-lounge.jpg" alt="Social Lounge" />
          <p className="legend">Meet friends in shared spaces</p>
        </div>
        <div>
          <img src="/assets/study-room.jpg" alt="Study Room" />
          <p className="legend">Quiet study zones available</p>
        </div>
      </Carousel>
      <p>
        Find and book your perfect student home. Explore verified listings and student-friendly amenities.
      </p>
    </div>
  );
}

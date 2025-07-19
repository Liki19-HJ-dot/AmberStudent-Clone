// src/App.js
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OfferBanner from "./components/OfferBanner";

// Lazy-load main pages for route-based code splitting
const Home = React.lazy(() => import("./pages/Home"));
const Listings = React.lazy(() => import("./pages/Listings"));
const Shortlist = React.lazy(() => import("./pages/Shortlist"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const FAQ = React.lazy(() => import("./pages/FAQ"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Terms = React.lazy(() => import("./pages/Terms"));
const Privacy = React.lazy(() => import("./pages/Privacy"));

// Protect routes for authenticated users
function PrivateRoute({ children }) {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        {/* Optional: promotional offer/referral banner */}
        <OfferBanner />
        <Suspense fallback={<div style={{padding: "3rem", textAlign: "center"}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route
              path="/shortlist"
              element={
                <PrivateRoute>
                  <Shortlist />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* 404 Not Found Route */}
            <Route path="*" element={<div style={{padding: "2rem"}}>Page Not Found</div>} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

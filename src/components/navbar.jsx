// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("auth-token");
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("auth-token");
//     setIsAuthenticated(false);
//     navigate("/login");
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav style={styles.navContainer}>
//       {/* Logo Section */}
//       <div style={styles.logoSection}>
//         <img src="/ThynkCafe.png" alt="Logo" style={styles.logoImage} />
//         <div style={styles.logoContainer}>
//           <h1 style={styles.logo}>
//             <span style={styles.ener}>Ener</span>
//             <span style={styles.trans}>Tra</span>
//             <span style={styles.sition}>nsition.com</span>
//           </h1>
//           <span style={styles.tagline}>A Unit of Pro H2Vis Solutions</span>
//         </div>
//       </div>

//       {/* Mobile Menu Button */}
//       <div style={styles.mobileMenuButton} onClick={toggleMenu}>
//         <div style={{...styles.menuBar, ...(menuOpen ? styles.menuBarTop : {})}}></div>
//         <div style={{...styles.menuBar, ...(menuOpen ? styles.menuBarMiddle : {})}}></div>
//         <div style={{...styles.menuBar, ...(menuOpen ? styles.menuBarBottom : {})}}></div>
//       </div>

//       {/* Navigation Links */}
//       <ul style={{
//         ...styles.navLinks,
//         ...(menuOpen ? styles.navLinksMobile : styles.navLinksHidden)
//       }}>
//         <li style={styles.navItem}>
//           <Link to="/" style={styles.navLink} onClick={() => setMenuOpen(false)}>Home</Link>
//         </li>
//         <li style={styles.navItem}>
//           <Link to="/latestpreprints" style={styles.navLink} onClick={() => setMenuOpen(false)}>Latest Preprints</Link>
//         </li>
//         <li style={styles.navItem}>
//           <Link to="/tools & Services" style={styles.navLink} onClick={() => setMenuOpen(false)}>Tools & Services</Link>
//         </li>
//         <li style={styles.navItem}>
//           <Link to="/about" style={styles.navLink} onClick={() => setMenuOpen(false)}>About</Link>
//         </li>
//         <li style={styles.navItem}>
//           <Link to="/team" style={styles.navLink} onClick={() => setMenuOpen(false)}>Team</Link>
//         </li>
//         <li style={styles.navItem}>
//           {isAuthenticated ? (
//             <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
//           ) : (
//             <Link to="/login" style={styles.navLink} onClick={() => setMenuOpen(false)}>Login</Link>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// // Modern Glassmorphism + Professional Academic Style with Mobile Responsiveness
// const styles = {
//   navContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 30px",
//     background: "rgba(255, 255, 255, 0.85)",
//     backdropFilter: "blur(10px)",
//     borderBottom: "2px solid #e0e0e0",
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//     fontFamily: "Arial, sans-serif",
//     flexWrap: "wrap",
//   },
//   logoSection: {
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//     zIndex: 1001,
//   },
//   logoImage: {
//     height: "50px",
//     "@media (max-width: 768px)": {
//       height: "40px",
//     }
//   },
//   logoContainer: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "4px",
//   },
//   logo: {
//     fontSize: "22px",
//     margin: 0,
//     fontWeight: "bold",
//     color: "#2c3e50",
//     "@media (max-width: 768px)": {
//       fontSize: "18px",
//     }
//   },
//   ener: {
//     color: "#3498db",
//   },
//   trans: {
//     color: "#e74c3c",
//   },
//   sition: {
//     color: "#2c3e50",
//   },
//   tagline: {
//     fontSize: "12px",
//     color: "#7f8c8d",
//     "@media (max-width: 768px)": {
//       fontSize: "10px",
//     }
//   },
//   navLinks: {
//     listStyle: "none",
//     display: "flex",
//     gap: "20px",
//     alignItems: "center",
//     margin: 0,
//     padding: 0,
//   },
//   navLinksHidden: {
//     "@media (max-width: 768px)": {
//       display: "none",
//     }
//   },
//   navLinksMobile: {
//     "@media (max-width: 768px)": {
//       display: "flex",
//       flexDirection: "column",
//       position: "absolute",
//       top: "70px",
//       left: 0,
//       width: "100%",
//       background: "rgba(255, 255, 255, 0.95)",
//       backdropFilter: "blur(10px)",
//       padding: "20px 0",
//       boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
//       zIndex: 1000,
//       textAlign: "center",
//     }
//   },
//   navItem: {
//     position: "relative",
//     "@media (max-width: 768px)": {
//       margin: "10px 0",
//       width: "100%",
//     }
//   },
//   navLink: {
//     textDecoration: "none",
//     fontSize: "16px",
//     fontWeight: 500,
//     color: "#2c3e50",
//     padding: "8px 15px",
//     transition: "all 0.3s ease",
//     borderRadius: "20px",
//     "@media (max-width: 768px)": {
//       display: "block",
//       padding: "12px 20px",
//     }
//   },
//   navLinkHover: {
//     background: "rgba(52, 152, 219, 0.1)",
//   },
//   logoutButton: {
//     background: "#e74c3c",
//     color: "#fff",
//     border: "none",
//     padding: "8px 15px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "14px",
//     transition: "all 0.3s ease",
//     "@media (max-width: 768px)": {
//       width: "80%",
//       padding: "12px 20px",
//     }
//   },
//   mobileMenuButton: {
//     display: "none",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     width: "30px",
//     height: "21px",
//     cursor: "pointer",
//     zIndex: 1001,
//     "@media (max-width: 768px)": {
//       display: "flex",
//     }
//   },
//   menuBar: {
//     height: "3px",
//     width: "100%",
//     backgroundColor: "#2c3e50",
//     borderRadius: "10px",
//     transition: "all 0.3s ease-in-out",
//   },
//   menuBarTop: {
//     transform: "rotate(45deg) translate(5px, 5px)",
//   },
//   menuBarMiddle: {
//     opacity: 0,
//   },
//   menuBarBottom: {
//     transform: "rotate(-45deg) translate(7px, -8px)",
//   },
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pageCSS/Navbar.css"; // Import the CSS

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="logo-section">
        <img src="/ThynkCafe.png" alt="Logo" className="logo-image" />
        <div className="logo-container">
          <h1 className="logo">
            <span className="ener">Ener</span>
            <span className="trans">Tra</span>
            <span className="sition">nsition.com</span>
          </h1>
          <span className="tagline">A Unit of Pro H2Vis Solutions</span>
        </div>
      </div>

      <div className="mobile-menu-button" onClick={toggleMenu}>
        <div className={`menu-bar ${menuOpen ? "menu-bar-top" : ""}`}></div>
        <div className={`menu-bar ${menuOpen ? "menu-bar-middle" : ""}`}></div>
        <div className={`menu-bar ${menuOpen ? "menu-bar-bottom" : ""}`}></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "nav-links-mobile" : "nav-links-hidden"}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/latestpreprints" className="nav-link" onClick={() => setMenuOpen(false)}>Latest Preprints</Link>
        </li>
        <li className="nav-item">
          <Link to="/tools & Services" className="nav-link" onClick={() => setMenuOpen(false)}>Tools & Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link" onClick={() => setMenuOpen(false)}>Team</Link>
        </li>
        <li className="nav-item">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="logout-button">Logout</button>
          ) : (
            <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

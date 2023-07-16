import React, { Component } from 'react';
import video from './component/video/v10.mp4';
import image1 from './component/images/a111.png';
import image2 from './component/images/a3.jpg';
import image3 from './component/images/a4.jpg';
import image4 from './component/images/a5.jpg';
import image5 from './component/images/a6.jpg';
import image6 from './component/images/a7.jpg';
import image8 from './component/images/a8.jpg';
import image9 from './component/images/a9.png';
import LoginForm from './component/login';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isContactOpen: false
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  };

  toggleContact = () => {
    this.setState((prevState) => ({
      isContactOpen: !prevState.isContactOpen
    }));
  };

  render() {
    const { isDropdownOpen, isContactOpen } = this.state;

    return (
      <div style={{backgroundColor: "#CAF1DE"}}>
        <header style={{ position: 'sticky', top: 0, zIndex: 999, backgroundColor: '#e3f2fd', color: 'white' }}>
          <nav style={{ display: 'flex', height: '78px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '0.01%' }}>
              <img className="a1" style={{ display: '100%', width: '25em', height: '88px' }} src={image1} alt="Logo" />
            </div>
            <ul style={{ display: "flex", justifyContent: "space-between", marginLeft: "190px", marginTop: "43px" }}>
              <li style={{ marginLeft: "40px", marginTop: "-7px" }}>
                <button onClick={this.toggleDropdown} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", color: "#000000" }}>COURSES</button>
                {isDropdownOpen && (
                  <div className="dropdown-content" style={{ backgroundColor: "#CAF1DE", padding: "10px" }}>
                    <div>
                      <h3 style={{ color: "#000000" }}>SELF STUDY COURSES</h3>
                      <a href="/" style={{ color: "#000000" }}>Movie Songs</a>
                      <br />
                      <a href="/" style={{ color: "#000000" }}>Devotional Songs</a>
                      <br />
                      <a href="/" style={{ color: "#000000" }}>Rhymes To Swaras</a>
                    </div>
                    <div>
                      <h3 style={{ color: "#000000" }}>TEACHER LED COURSES</h3>
                      <a href="/" style={{ color: "#000000" }}>Indian Classical Vocal</a>
                      <br />
                      <a href="/" style={{ color: "#000000" }}>Ghazal</a>
                      <br />
                      <a href="/" style={{ color: "#000000" }}>Bhajan</a>
                      <br />
                      <a href="/" style={{ color: "#000000" }}>Sufi</a>
                      <br />
                      <a href="/" style={{ color: "#000000" }}>Bollywood</a>
                      <br />
                      <a href="/" style={{ color: "#000000" }}>Instruments</a>
                      <br />
                    </div>
                  </div>
                )}
              </li>
              <li style={{ marginLeft: "40px" }}><a className='nav-link' style={{ color: "black" }}>HOME</a></li><li style={{ marginLeft: "40px" }}>
  <a className='nav-link' style={{ color: "black" }} href="https://blog-eight-alpha.vercel.app/">BLOG/POST</a>
</li>
              <li style={{ marginLeft: "40px" }}><a href = '#LoginPage' className='nav-link' style={{ color: "black" }}>Sign In</a></li>
              <li style={{ marginLeft: "40px" }}>
                <a className='nav-link' style={{ color: "black" }} onClick={this.toggleContact}>Schedule a Call</a>
                {isContactOpen && (
                  <div className="contact-popup">
                    <p style={{ color: "black" }}>+91 9990140556</p>
                    <p style={{ color: "black" }}>+91 7654690422 (WhatsApp Also Available)</p>
                    <p style={{ color: "black" }}>Email us: sangeetarchanama@gmail.com</p>
                  </div>
                )}
              </li>
            </ul>
            <img className='a2' style={{ display: "inline", width: "100px", height: "75px", borderRadius: "50%" }} src={image9} alt="Logo" />
          </nav>
        </header>
        
        {/* <div style={{ position: "relative", width: "100%", height: "0", paddingTop: "56.25%", }}> */}
            <video
              style={{ position: "absolute", paddingTop: "1.25%", left: "66%", width: "30%", height: "30%" }}
              controls
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
            </video>
            <div style={{backgroundColor: "#CAF1DE"}}>
        <h1 style={{ marginTop: "0%" }}>
            <strong>
              <span>
                Choose the course that’s right for you.
              </span>
            </strong>
          </h1>
          <div>
            <span>
              <h2>
                <ul>
                  <li>Weekly live, online sessions with expert instructors.</li>
                  <li>Each session is 45 minutes in duration.</li>
                  <li>Intimate batch sizes of 1 to 3 students.</li>
                  <li>Flexible timings to choose for your sessions.</li>
                  <li>Get started right away with just a laptop/computer, internet connection, and headphones.</li>
                </ul>
              </h2>
            </span>
          </div>
        </div>
        <div style={{backgroundColor: "#CAF1DE"}}>
          <strong>
            <h3 style={{ textAlign: "center", fontSize: "28pt" }}>
              Vocals
            </h3>
          </strong>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" , backgroundColor: "#CAF1DE"}}>
          <div>
            <img className='a2' style={{ display: "inline", width: "100%", height: "auto", borderRadius: "50%" }} src={image2} alt="Logo" />
          </div>
          <div>
            <img className='a2' style={{ display: "inline", width: "100%", height: "auto", borderRadius: "50%" }} src={image3} alt="Logo" />
          </div>
          <div>
            <img className='a2' style={{ display: "inline", width: "100%", height: "auto", borderRadius: "50%" }} src={image4} alt="Logo" />
          </div>
          <div>
            <img className='a2' style={{ display: "inline", width: "100%", height: "auto", borderRadius: "50%" }} src={image5} alt="Logo" />
          </div>
          <div>
            <img className='a2' style={{ display: "inline", width: "100%", height: "auto", borderRadius: "50%" }} src={image6} alt="Logo" />
          </div>
          <div>
            <img className='a2' style={{ display: "inline", width: "100%", height: "auto", borderRadius: "50%" }} src={image8} alt="Logo" />
          </div>
        </div>
        <div style={{ backgroundColor: "#fce4ae" }}>
        <div>
          <strong>
            <h4 style={{ textAlign: "center", fontSize: "28pt" }}>
              Contact Us
            </h4>
          </strong>
        </div>
        <div>
          <span>
            <h4 style={{ textAlign: "center", fontSize: "18pt" }}>
              Admission Team: +91 9990140556, +91 7654690422 (WhatsApp on same numbers)
            </h4>
          </span>
        </div>
        <div>
          <span>
            <h4 style={{ textAlign: "center", fontSize: "22pt" }}>
              Write to us
            </h4>
          </span>
        </div>
        <div>
          <span>
            <h4 style={{ textAlign: "center", fontSize: "18pt" }}>
              sangeetarchanama@gmail.com
            </h4>
          </span>
          </div>
       
        </div>
     {/* </div> */}
     
    </div>
  )}
}

export default MyComponent;

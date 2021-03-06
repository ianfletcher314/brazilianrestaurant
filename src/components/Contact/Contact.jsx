// ------------this is where any files this component needs are imported-----------
import "./style.css";
// ------------this is the function that returns this component's UI---------------
function Contact() {
  return (
    <>
      {/* ------------------HTML for contact on large tablets and laptops------------------ */}
      <div className="contact row" id="contact">
        {/* #phone contains hours and phone number */}
        <div id="phone" className="col-5">
          <div className="hours-holder">
            <h2 className="logoSmall">Reserve a table now!</h2>
            <h3 className="logoSmall">
              <a href="314-932-1034">314-932-1034</a>
            </h3>
            <ul className="times">
              <li>Wednesday || Tursday: 5pm - 9pm </li>
              <li>Friday || Saturday: 5pm - 10pm </li>
              <li>Sunday Brunch Buffet: 11am - 2:30pm </li>
              <li>Sunday Dinner: 5pm - 9pm </li>
            </ul>
          </div>
        </div>
        {/* #location contains the address and map */}
        <div id="location" className="col-6">
          <div className="map-holder">
            <h3 className="logoSmall roof">
              3212 Grand Bulivard St. Louis, MO
            </h3>
            <iframe
              title="googleMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.1865676419293!2d-90.24492294883655!3d38.59857587200708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4683ad31d91%3A0x7a790fceb95709e3!2sBrasilia%20Bar%20%26%20Restaurant!5e0!3m2!1sen!2sus!4v1639177245498!5m2!1sen!2sus"
              width="550"
              height="250"
              allowfullscreen=""
              loading="lazy"
              id="googleMap"
            ></iframe>
          </div>
        </div>
      </div>
      {/* ---------------this is the html for contact when on tablets and phones-------------- */}
      <div className="contact row" id="smallContact">
        {/* #phoneSmall contains hours and phone number for small screens */}
        <div id="phoneSmall" className="col-12">
          <div className="hours-holder">
            <h2 className="logoSmall">Reserve a table now!</h2>
            <h3 className="logoSmall">
              <a href="314-932-1034">314-932-1034</a>
            </h3>
            <ul>
              <li>Wednesday || Tursday: 5pm - 9pm </li>
              <li>Friday || Saturday: 5pm - 10pm </li>
              <li>Sunday Brunch Buffet: 11am - 2:30pm </li>
              <li>Sunday Dinner: 5pm - 9pm </li>
            </ul>
          </div>
        </div>
        {/* #locationSmall contains address and map for small screens */}
        <div id="locationSmall" className="col-12">
          <div className="map-holder">
            <h3 className="logoSmall roof">
              3212 Grand Bulivard St. Louis, MO
            </h3>
            <iframe
              title="googleMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.1865676419293!2d-90.24492294883655!3d38.59857587200708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4683ad31d91%3A0x7a790fceb95709e3!2sBrasilia%20Bar%20%26%20Restaurant!5e0!3m2!1sen!2sus!4v1639177245498!5m2!1sen!2sus"
              width="550"
              height="250"
              allowfullscreen=""
              loading="lazy"
              id="googleMap"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;

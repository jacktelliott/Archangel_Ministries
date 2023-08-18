const Contact = () => {
    return ( 
        <div className="contact">
            <div className="contact_info">
                <h2>We can't wait to hear from you!</h2>
                <h3>ArchAngel Ministries</h3>
                <h4>
                    316 Janua Coeli Way<br />
                    Rutherfordton, NC<br />
                    regnumdeiretreatcenter@gmail.com<br />
                    828.980.0601<br />
                    <br />
                    <i>Or simply fill out the form below!</i>
                </h4>
            </div>
            <div className="contact_form">
                <input type="text" id="first_name" placeholder="First Name"></input>
                <input type="text" id="last_name" placeholder="Last Name"></input><br />
                <input type="text" id="email" placeholder="Email"></input>
                <input type="text" id="subject" placeholder="Subject"></input><br />
                <input type="text" id="message" placeholder="Type your message here..."></input><br />
                <button>Submit</button>
            </div>
        </div>
     );
}
 
export default Contact;
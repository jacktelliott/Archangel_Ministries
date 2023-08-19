import { useState } from 'react';

const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    //implement button
    const handleSubmit = (e) => {
        e.preventDefault();

        setHasSubmitted(true);
    }

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
            <form className="contact_form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                /><br />
                <input
                    type="text"
                    required
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                /><br />
                <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                /><br />
                <button>Submit</button>
                {hasSubmitted &&
                    <p>
                        Thanks for reaching out to us! Someone will be in touch shortly. <br />
                        May God bless you! Soli Deo gloria!
                    </p>}
            </form>
        </div>
     );
}
 
export default Contact;

import NavigationBar from "./navbar";

function Contact() {
    

    return (
        <>
            <NavigationBar />
            <div className="contact-us">
                <h1>Contact Us</h1>
                <p>If you have any questions or feedback, our team is here to help.</p>

                <div className="founders">
                    <h2>Our Founders</h2>
                    <div className="founder">
                        <h3>Jaswanth Kandregula</h3>
                        <p>For inquiries related to cloud computing and big data analytics, reach out to Jaswanth at <a href="mailto:jaswanth@zira.com">jaswanth@zira.com</a>.</p>
                    </div>
                    <div className="founder">
                        <h3>Meghamsh Anand</h3>
                        <p>For inquiries related to artificial intelligence and machine learning, contact Meghamsh at <a href="mailto:meghamsh@zira.com">meghamsh@zira.com</a>.</p>
                    </div>
                </div>

                <p>For general support, please email our customer service team at <a href="mailto:support@zira.com">support@zira.com</a>.</p>
                <p>We look forward to hearing from you!</p>
            </div>
        </>
    );

}

export default Contact;


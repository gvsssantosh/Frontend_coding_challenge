
import "./userHome.css";
import NavigationBar from "./navbar";
function About() {
    
    return <>
        <NavigationBar />
        <div className="about-us">

            <h1>About Us</h1>
            <p>Welcome to Zira! We're passionate about providing exceptional customer experiences and simplifying your interactions with our platform.</p>
            <p>Our mission is to empower businesses by offering innovative solutions that enhance customer engagement.</p>
            <p>What sets us apart:</p>
            <ul>
                <li><strong>Customer-Centric Approach:</strong> We listen, adapt, and continuously improve based on your feedback.</li>
                <li><strong>Cutting-Edge Technology:</strong> We leverage the latest technologies to provide you with a robust and reliable platform.</li>
                <li><strong>Transparency:</strong> You'll always know what's happening behind the scenes.</li>
            </ul>
            <p>Meet the Team:</p>
            <ul>
                <li><strong>Santosh:</strong> Our visionary founder who started it all.</li>
                <li><strong>Jaswanth: </strong>
                    As a co-founder, Jaswanth is the driving force behind Zira's innovative approach. His expertise in **cloud computing** and **big data analytics** has been instrumental in developing scalable solutions that meet the dynamic needs of our customers.</li>
                <li><strong>Meghamsh: </strong> Meghamsh's technological acumen, particularly in **artificial intelligence** and **machine learning**, has propelled Zira to new heights. His forward-thinking strategies ensure that Zira remains a leader in customer engagement technologies.</li>

            </ul>
            <p>Contact Us:</p>
            <p>Have questions or feedback? Reach out to our team at <a href="mailto:contact@zira.com">contact@zira.com</a>.</p>
            <p>Thank you for choosing Zira. Let's create something amazing together!</p>
        </div>
    </>
}

export default About;








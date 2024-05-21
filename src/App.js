import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navbar';
import BackgroundImage from "./BackgroundImage.jpg"
function App() {
  return (
    <>
      <NavigationBar />
      <div className="home-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>

        <header>
          <h1>Welcome to Zira</h1>
          <p>Your portal to a seamless customer experience.</p>
        </header>

        <section className="features">
          <h2>Features</h2>
          <p>Discover the innovative features that set Zira apart:</p>
          <ul style={{ listStyleType: 'square', padding: 0, margin: 0 }}>
            <li>Intuitive Dashboard</li>
            <li>Real-Time Analytics</li>
            <li>Customizable Workflows</li>
            {/* Add more features as needed */}
          </ul>
        </section>

        <section className="our-clients">
          <h2>Our Clients</h2>
          <div className="client-logos">
            <img src="https://as1.ftcdn.net/v2/jpg/08/17/76/34/1000_F_817763424_veux8vXBaZA9SfQiXLfuUSsAVTxFJXCF.jpg" width="100" alt="Client 1" />
            <img src="https://t4.ftcdn.net/jpg/07/05/97/45/240_F_705974595_bNmNk8bKXtM3ah1Llw9yUuG7yNeIqMf4.jpg" width="100" alt="Client 2" />
            {/* Add more client logos as needed */}
          </div>
          <p>Trusted by industry leaders around the globe.</p>
        </section>

        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <blockquote>
            "Zira has transformed the way we interact with our customers. Their innovative platform is a game-changer!"
            <cite>- CEO of HappyClient Inc.</cite>
          </blockquote>
          {/* Add more testimonials as needed */}
        </section>

        <section className="get-started">
          <h2>Get Started with Zira</h2>
          <p>Ready to elevate your customer experience? <a href="mailto:support@zira.com">Contact us</a> to learn more.</p>
        </section>
      </div>
    </>
  );
}

export default App;

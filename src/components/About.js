const About = () => {
  return (
    <div className="about-container">
      
      <div className="hero-section">
        <h1>ABOUT US</h1>
      </div>


      <div className="content-section">
        <div className="image-container">
          <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Chef Cooking" />
        </div>

        <div className="text-container">
          <h2>We Are Specialized In Spicy Modern Fusion Food</h2>
          <p className="highlight-text">WELCOME TO RESTAURANT</p>
          <p>
            We bring you the best dining experience with a fusion of flavors that blend tradition and innovation. Our expert chefs create mouth-watering dishes that excite your taste buds.
          </p>
        </div>
      </div>
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service-card">
            <img src="https://media.istockphoto.com/id/1147252758/photo/healthy-vegetarian-food-background-vegetables-pesto-and-lentil-curry-with-tofu.webp?a=1&b=1&s=612x612&w=0&k=20&c=hNf6d-B7WT8WpUq1O9z-S5JNW4T8NB9Jj3KavSJCkP0=" alt="Quality Food" />
            <h3>Quality Food</h3>
            <p>We partner with top-end restaurants to bring you the best quality food delivered to your door.</p>
          </div>

          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6Z4OksCGstH0QnoVh0kyuMHfgt1dmi5Fdg&s" alt="Fast Delivery" />
            <h3>Fast Delivery</h3>
            <p>Our efficient delivery system ensures that your food arrives hot and fresh, right when you need it.</p>
          </div>

          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fHww" alt="Customer Service" />
            <h3>Customer Service</h3>
            <p>Our dedicated customer service team is here to assist you with any questions or concerns.</p>
          </div>
        </div>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>Our dedicated team works tirelessly to bring you the best food delivery experience.</p>
        <div className="team">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww" alt="John Doe" />
            <h4>Ian dooley</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Jane Smith" />
            <h4>Joseph Gonzalez</h4>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww" alt="Michael Brown" />
            <h4>Aiony Haust</h4>
            <p>Marketing Manager</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww" alt="Emily Davis" />
            <h4>
            Michael Dam</h4>
            <p>Customer Support Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

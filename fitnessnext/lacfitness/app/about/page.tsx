const About = () => {
  return (
    <div className="section animate-fade-in">
      <div className="container container-sm">
        <h1 className="page-title">ABOUT LUKE COZIER</h1>
        <p className="page-subtitle">Personal Trainer</p>
        <div className="about-grid">
          <div className="about-image-container">
            <img className="about-image" src="https://placehold.co/400x500/18181b/ffffff?text=Luke+Cozier" alt="Luke Cozier" />
          </div>
          <div className="about-content">
            <h2>My Story & Mission</h2>
            <p>
              My name is Luke Cozier, and I'm a 33-year-old personal trainer based here in Richmond Upon Thames. 
              My journey into strength and conditioning wasn't born from a desire for six-pack abs, but from a 
              fundamental need for performance and resilience.
            </p>
            <p>
              After years in commercial gyms watching people perform ineffective workouts and chase fleeting 
              aesthetic goals, I knew there was a better way. My mission is to shift the focus from how you 
              look to what you can <span className="text-accent font-bold">do</span>. I believe that by building 
              a strong, capable body through disciplined training, the confidence and aesthetics you desire will 
              follow as a natural byproduct.
            </p>
            <p>
              I specialize in evidence-based strength and conditioning, focusing on compound movements, 
              progressive overload, and perfect form. My approach is for men who are serious about long-term 
              progress, not short-term fixes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
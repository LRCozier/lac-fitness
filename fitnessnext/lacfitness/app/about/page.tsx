import React from 'react';
import Layout from '../components/layouts/layout';
import Section from '../components/layouts/section';

export const metadata = {
  title: 'About',
};

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Section title="About">
        <p>For me, the journey to health and fitness has been deeply personal. I know firsthand the emotional toll of battling with your weight. I was the "fat kid" in school, a target for teasing and bullying, and the feeling of shame and self-consciousness was a constant companion. In my desperation to change, I even went down an unhealthy path, developing an eating disorder in my pursuit of thinness.</p>
        <p>But through those struggles, I found my strength and my true calling. I learned to truly understand my body, not just physically, but emotionally and mentally. I discovered how to fuel it with nutritious food, move it with purpose, and embrace lifestyle changes that support genuine well-being. This wasn't just about losing weight; it was about transforming my entire relationship with myself and achieving a level of health and fitness I once thought impossible.</p>
        <p>This is why L.A.C Fitness exists. My mission is to help you navigate your own unique journey with empathy, understanding, and serious dedication. I've been where you are, and I know the emotional battles that come with it. I'm here to offer a holistic and supportive training and coaching service designed to help you transform your health and achieve your goals in a way that is sustainable and empowering. You're not alone in this, and together, we can build a healthier, happier you.</p>
      </Section>
    </Layout>
  );
};

export default AboutPage;

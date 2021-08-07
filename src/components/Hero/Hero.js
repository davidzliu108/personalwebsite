import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I am <br />
        David Liu
      </ SectionTitle>
      <SectionText>
        Welcome. My name is David Liu and I am currently a third year studying computer science at the University of North Carolina at Chapel Hill. 
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/david-liu-bb0742196/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
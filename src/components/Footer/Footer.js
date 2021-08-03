import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:919-600-0328">(919)600-0328</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:davidzliu@gmail.com">davidzliu@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Oi Mateys</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/davidzliu108" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/david-liu-bb0742196/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/davidzliu/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </ SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;

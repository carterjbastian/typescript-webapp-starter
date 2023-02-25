import styled from 'styled-components';
import { colors } from '@/shared/styles';

const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: fit-content;

  display: flex;
  flex-direction: column;
`;

const ContactBar = styled.div`
  width: 100%;
  height: 40px;
  min-height: 40px;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${colors.primaryBlack};
`;

const ContactText = styled.div`
  font-size: 16px;
  line-height: 36px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: ${colors.trueWhite};
`;

const CallLink = styled.span`
  text-decoration: underline;
`;

const NavBar = styled.div`
  width: 100%;
  min-width: 100%;
  height: 64px;
  background-color: ${colors.primaryWhite};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ContactBar>
        <ContactText>
          Get help from a licensed Medicare agent{' '}
          <CallLink>1-877-354-4611 TTY 711. Mon-Fri 8am-9pm EST</CallLink>
        </ContactText>
      </ContactBar>
      <NavBar>
        <p>Logo</p>
        <p>Links</p>
        {/* 
        <TopLogo />
        <NavLinks>
          <NavLink>Plans</NavLink>
          <NavLink>Facts</NavLink>
          <NavLink variant="emphasis">Enroll</NavLink>
        </NavLinks>
        */}
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;

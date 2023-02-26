import styled from 'styled-components';
import { colors } from '@/shared/styles';

const FooterContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: fit-content;

  display: inline-flex;
  flex-direction: column;
  background-color: ${colors.primaryBlack};
`;

// TODO(Carter): There's a better way to do this!
// Somehow take our popover entirely out of flow so it doesn't
// take up space in the page.
const FooterPopover = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  min-height: 195px;
  position: relative;
  top: -100px;

  margin-bottom: -195px;

  background-color: ${colors.accentGreen};
  border-radius: 8px;
`;

const FooterContent = styled.div`
  width: 100%;
  height: 800px;
  min-height: 800px;

  border-top: 1px solid blue;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BottomBar = styled.div`
  width: 100%;
  min-width: 100%;
  height: 195px;
  background-color: ${colors.footerBlack};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <FooterContainer>
      <FooterPopover />
      <FooterContent>
        <p>TODO</p>
      </FooterContent>
      <BottomBar>
        <p>bottom</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Header;

import styled from 'styled-components';
import { colors } from '@/shared/styles';

const HomeContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

// First section has no background and is pulled up
const FirstSection = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 2600px;
  border: blue 1px solid;

  display: flex;
  flex-direction: column;
`;

const SecondSection = styled.div`
  height: fit-content;
  min-height: 780px;
  width: 100%;

  display: flex;
  flex-direction: column;
  background-color: ${colors.primaryGreen};
  border: blue 1px purple;
`;

export default function HomePage() {
  return (
    <HomeContainer>
      <FirstSection />
      <SecondSection />
    </HomeContainer>
  );
}

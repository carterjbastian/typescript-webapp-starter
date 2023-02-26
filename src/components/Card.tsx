import styled from 'styled-components';
import { colors } from '@/shared/styles';

const Card = styled.div`
  width: 100%;
  min-width: 100%;
  height: fit-content;
  min-height: fit-content;

  background-color: ${colors.trueWhite};
  box-shadow: 0px 8px 36px rgba(17, 12, 46, 0.06);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Card;

import styled from 'styled-components';
import Logo from 'components/common/Logo/Logo';

export const Wrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  position: relative;
`;

export const EventGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivideLine = styled.hr`
  margin: 0;
  border: 1px solid #c1c7cd;
`;

export const CreateButtonWrapper = styled.div`
  position: absolute;
  top: 135px;
  right: 0;
`;

export const StyledLogo = styled(Logo)`
  padding-top: 50px;
  padding-bottom: 10px;
`;

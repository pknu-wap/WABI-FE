import React, {ReactNode} from 'react';

import * as Styled from './SearchAndButtonFrame.styles';

interface FrameProps {
  children: ReactNode;
}

const SearchAndButtonFrame = ({children}: FrameProps) => {
  return (
    <Styled.SearchAndButtonFrameStyles>
      {children}
    </Styled.SearchAndButtonFrameStyles>
  );
};

export default SearchAndButtonFrame;

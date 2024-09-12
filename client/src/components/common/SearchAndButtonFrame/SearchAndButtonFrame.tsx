import React, {ReactNode} from 'react';

import * as Styles from './SearchAndButtonFrame.styles';

interface FrameProps {
  children: ReactNode;
}

const SearchAndButtonFrame = ({children}: FrameProps) => {
  return (
    <Styles.SearchAndButtonFrameStyles>
      {children}
    </Styles.SearchAndButtonFrameStyles>
  );
};

export default SearchAndButtonFrame;

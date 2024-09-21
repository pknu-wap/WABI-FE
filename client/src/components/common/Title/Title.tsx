import React from 'react';
import * as Styled from 'components/common/Title/Title.styles';

interface TextProps {
  titleText?: string;
  subTitleText?: string;
}

const Title = ({titleText, subTitleText}: TextProps) => {
  return (
    <Styled.TextLayout>
      <Styled.TitleText>{titleText}</Styled.TitleText>
      <Styled.SubTitleText>{subTitleText}</Styled.SubTitleText>
    </Styled.TextLayout>
  );
};

export default Title;

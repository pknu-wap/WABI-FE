import React from 'react';
import * as Styled from 'components/common/Title/Title.styles';

interface TextProps {
  titleText: string;
}

const Title = ({titleText}: TextProps) => {
  return (
    <Styled.TextLayout>
      <Styled.TitleText>{titleText}</Styled.TitleText>
      <Styled.SubTitleText>이벤트 상세 페이지</Styled.SubTitleText>
    </Styled.TextLayout>
  );
};

export default Title;

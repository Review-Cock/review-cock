import React from 'react';

import { Container, TagItem } from '@components/Register/HashTagBox/index.style';

interface HashTagBoxProps {
  tagList: string[];
}

const HashTagBox = ({ tagList }: HashTagBoxProps) => {
  return (
    <Container>
      {tagList.map((v, i) => (
        <TagItem key={i}>{v}</TagItem>
      ))}
    </Container>
  );
};

export default HashTagBox;

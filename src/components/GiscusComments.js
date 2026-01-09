import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments() {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '2rem' }}>
      <Giscus
        repo="jinto/ystudy"
        repoId="R_kgDOQspx6g"
        category="Announcements"
        categoryId="DIC_kwDOQspx6s4C0wDf"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}

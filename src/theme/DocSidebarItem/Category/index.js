import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function CategoryWrapper(props) {
  const { item } = props;
  const thumbnail = item.customProps?.thumbnail;
  const thumbnailUrl = useBaseUrl(thumbnail);

  return (
    <div className="sidebar-category-wrapper">
      {thumbnail && (
        <img
          src={thumbnailUrl}
          alt=""
          className="sidebar-thumbnail"
        />
      )}
      <Category {...props} />
    </div>
  );
}

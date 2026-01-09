import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';

export default function CategoryWrapper(props) {
  const { item } = props;
  const thumbnail = item.customProps?.thumbnail;

  return (
    <div className="sidebar-category-wrapper">
      {thumbnail && (
        <img
          src={thumbnail}
          alt=""
          className="sidebar-thumbnail"
        />
      )}
      <Category {...props} />
    </div>
  );
}

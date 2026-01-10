import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';

export default function CategoryWrapper(props) {
  const { item } = props;
  const emoji = item.customProps?.emoji;

  return (
    <div className="sidebar-category-wrapper">
      {emoji && (
        <span className="sidebar-emoji">{emoji}</span>
      )}
      <Category {...props} />
    </div>
  );
}

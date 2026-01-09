import React from 'react';
import Link from '@docusaurus/Link';

export default function CourseCard({ title, description, link, thumbnail }) {
  return (
    <div className="course-card">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
        />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>자세히 보기 →</Link>
    </div>
  );
}

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function CourseCard({ title, description, link, thumbnail }) {
  const thumbnailUrl = useBaseUrl(thumbnail);

  return (
    <Link to={link} className="course-card">
      {thumbnail && (
        <img
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
        />
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

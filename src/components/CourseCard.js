import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function CourseCard({ title, description, link, thumbnail }) {
  const thumbnailUrl = useBaseUrl(thumbnail);

  return (
    <div className="course-card">
      {thumbnail && (
        <Link to={link}>
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
          />
        </Link>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>자세히 보기 →</Link>
    </div>
  );
}

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    title: '0. CPU 이론',
    description: '컴퓨터의 기본 작동 원리',
    link: '/docs/cpu-theory/intro',
    thumbnail: 'https://img.youtube.com/vi/Fg00LN30Ezg/mqdefault.jpg',
  },
  {
    title: '1. 프로그래밍 기초',
    description: 'Harvard CS50, 기초 문법',
    link: '/docs/programming-basics/cs50',
    thumbnail: 'https://img.youtube.com/vi/2WtPyqwTLKM/mqdefault.jpg',
  },
  {
    title: '2. C언어 심화',
    description: '프린스턴 강의, 메모리 관리',
    link: '/docs/c-language/princeton',
    thumbnail: 'https://img.youtube.com/vi/mEEVrv7rvFY/mqdefault.jpg',
  },
  {
    title: '3. 파이썬 심화',
    description: 'MIT 강의, 고급 파이썬',
    link: '/docs/python/mit',
    thumbnail: 'https://img.youtube.com/vi/nLRL_NcnK-4/mqdefault.jpg',
  },
  {
    title: '4. 장고, DB',
    description: '웹 프레임워크',
    link: '/docs/django-db/intro',
    thumbnail: null,
  },
  {
    title: '5. 데이터베이스',
    description: 'SQL, DB 설계',
    link: '/docs/database/intro',
    thumbnail: 'https://img.youtube.com/vi/WXk7yDqsKxs/mqdefault.jpg',
  },
  {
    title: '6. 네트워크',
    description: 'TCP/IP, HTTP',
    link: '/docs/network/intro',
    thumbnail: null,
  },
  {
    title: 'Tiny Projects',
    description: '작은 프로젝트 아이디어',
    link: '/docs/tiny-projects/intro',
    thumbnail: null,
  },
];

const advancedCourses = [
  {
    title: '7. 컴퓨터 구조',
    description: 'CPU 아키텍처, 캐시',
    link: '/docs/architecture/intro',
    thumbnail: null,
  },
  {
    title: '8. 운영체제',
    description: '프로세스, 메모리 관리',
    link: '/docs/os/intro',
    thumbnail: 'https://img.youtube.com/vi/gVaXLlGqQ-c/mqdefault.jpg',
  },
  {
    title: '9. OOP',
    description: 'Java, C++',
    link: '/docs/oop/intro',
    thumbnail: 'https://img.youtube.com/vi/DNCBaeCoMug/mqdefault.jpg',
  },
  {
    title: '10. ML',
    description: '머신러닝 기초',
    link: '/docs/ml/intro',
    thumbnail: 'https://img.youtube.com/vi/AKMuA_TVz3A/mqdefault.jpg',
  },
  {
    title: '추가 자료',
    description: 'Git, Vim, 알고리즘 등',
    link: '/docs/extras/intro',
    thumbnail: 'https://img.youtube.com/vi/lG90LZotrpo/mqdefault.jpg',
  },
];

export default function Home() {
  return (
    <Layout title="홈" description="컴퓨터 과학 학습 커리큘럼">
      <main style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1>YStudy 커리큘럼</h1>
          <p>컴퓨터 과학 기초부터 심화까지 체계적으로 학습하세요.</p>

          <h2>기초 과정</h2>
          <div className="card-grid">
            {courses.map((course, idx) => (
              <CourseCard key={idx} {...course} />
            ))}
          </div>

          <h2 style={{ marginTop: '3rem' }}>심화 과정</h2>
          <div className="card-grid">
            {advancedCourses.map((course, idx) => (
              <CourseCard key={idx} {...course} />
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link
              className="button button--primary button--lg"
              to="/docs"
            >
              전체 커리큘럼 보기
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

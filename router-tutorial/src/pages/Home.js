import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>메인 페이지</h1>
      <p>가장 먼저 보여지는 메인 페이지</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">Velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">Gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/kukjin">kukjin의 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
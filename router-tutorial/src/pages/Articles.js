// Outlet : Route의 Children으로 들어가는 JSX 엘리먼트를 보여주는 역할
import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시물 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시물 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시물 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
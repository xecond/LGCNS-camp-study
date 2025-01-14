import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
    
    const navigate = useNavigate();

    return (
        <div>

            {/* 링크 (메뉴바) */}
            <header>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    {/* <li><Link to="/about">소개</Link></li> */}
                    <li><NavLink to="/about" style={
                        ({isActive}) => isActive ? {color:"red"} : undefined
                    }>소개</NavLink></li>
                    <li><Link to="/info">정보</Link></li>
                    <li><Link to="/profiles">프로파일</Link></li>
                    <li><Link to="/mypage">마이페이지</Link></li>
                    <li><Link to="/movieList">영화조회</Link></li>
                </ul>
                <button onClick={() => navigate(-1)}>이전 페이지로 이동</button>
                <button onClick={() => navigate("/info")}>정보 페이지로 이동</button>
            </header>

            {/* Layout의 children으로 들어오는 (각 메뉴를 클릭했을 때 나타나는는) 컴포넌트들을 출력 */}
            <main>
                <Outlet />
            </main>

        </div>
    );
}
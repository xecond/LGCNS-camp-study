import { Link, Outlet } from "react-router-dom";

export default function Profiles() {
    return (
        <>
            {/* Profile 컴포넌트로의 링크(Link) */}
            <h1>사용자 목록</h1>
            <ul>
                <li><Link to="/profiles/mrgo">고길동 프로파일</Link></li>
                <li><Link to="/profiles/mrhong">홍길동 프로파일</Link></li>
                <li><Link to="/profiles/none">없는 프로파일</Link></li>
            </ul>

            <hr />

            {/* Route의 children으로 들어오는 JSX 엘리먼트를 보여주는 역할 */}
            <Outlet />
        </>
    );
}
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; // BrowserRouter 방식
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // RouterProvider 방식
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Profiles from "./Profiles";
import Layout from "./Layout";
import NotFound from "./NotFound";
import MyPage from "./MyPage";
import Login from "./Login";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";


/* BrowserRouter 방식 */

// function App() {
//   return (
//     <BrowserRouter>

//       // 링크 (메뉴바) => Layout.jsx로 이동
//       {/*<ul>
//         <li><Link to="/">홈</Link></li>
//         <li><Link to="/about">소개</Link></li>
//         <li><Link to="/info">정보</Link></li>
//         {/* <li><Link to="/profile/mrgo">고길동 프로파일</Link></li>
//         <li><Link to="/profile/mrhong">홍길동 프로파일</Link></li>
//         <li><Link to="/profile/none">없는 프로파일</Link></li> */}
//         <li><Link to="/profiles">프로파일</Link></li>
//       </ul>*/}

//       // 라우팅 정보
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/info" element={<About />} />
//           {/* <Route path="/profile/:userid" element={<Profile />} /> */}
//           <Route path="/profiles" element={<Profiles />}>
//             <Route path=":userid" element={<Profile />} />
//           </Route>
//           <Route path="/login" element={<Login />} />
//           <Route path="/mypage" element={<MyPage />} />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


/* RouterProvider 방식 */

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/info", element: <About /> },
      {
        path: "/profiles", element: <Profiles />, children: [
          { path: ":userid", element: <Profile /> }
        ]
      },
      { path: "/login", element: <Login /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/movieList", element: <MovieList /> },
      { path: "/movieDetail/:movieid", element: <MovieDetail /> },
    ]
  },
  { path: "*", element: <NotFound /> },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
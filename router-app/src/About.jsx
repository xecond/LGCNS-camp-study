// A. useLocation 훅 함수와 qs 라이브러리를 이용
import { useLocation } from "react-router-dom"; 
import qs from 'qs';
// B. useSearchParams 훅 함수를 이용
import { useSearchParams } from "react-router-dom";

export default function About() {

    /* A. useLocation 훅 함수와 qs 라이브러리를 이용 */

    // // 쿼리 스트링을 추출 ==> ?aaaa=aaaa&bbbb=bbbb&cccc=cccc
    // const location = useLocation();
    // const quries = qs.parse(location.search, { ignoreQueryPrefix: true });

    // // http://localhost:3000/about?detail=true&name=hong&age=23 형태로 요청을 하면
    // // {detail: 'true', name: 'hong', age: '23'}
    // //          ~~~~~~        ~~~~~~       ~~~~ <== 쿼리 스트링으로 전달되는 모든 값은 문자열 타입을 가짐
    // return (
    //     <div>
    //         <h1>About</h1>
    //         <h2>리액트 라우트 연습</h2>
    //         {
    //             quries.detail === "true" && <h2>상세 내역입니다.</h2>
    //         }
    //     </div>
    // );


    /* B. useSearchParams 훅 함수를 이용 */
    
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get("detail");

    return (
        <div>
            <h1>About</h1>
            <h2>리액트 라우트 연습</h2>
            {
                detail === "true" && <h2>상세 내역입니다.</h2>
            }
        </div>
    );
}

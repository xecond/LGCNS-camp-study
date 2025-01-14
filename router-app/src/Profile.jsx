import { useParams } from "react-router-dom";

const users = {
    mrgo: {
        name: "고길동",
        desc: "둘리를 싫어하는 자"
    },
    mrhong: {
        name: "홍길동",
        desc: "호부호형을 원하는 자"
    },
};

// http://localhost:3000/profile/:userid
// 주소에 포함된 사용자 식별자(여기에서는 userid)에 해당하는 사용자 정보를 출력
export default function Profile() {

    // 주소에 포함된 파라미터를 추출 
    const params = useParams();

    // 파라미터에서 userid의 값을 추출, 해당 값을 이용해 users 객체에서 일치하는 사용자 정보를 추출
    const profile = users[params.userid];

    return (
        <>
        {
            profile ? (
                <>
                    <h1>{profile.name}</h1>
                    <h2>{profile.desc}</h2>
                </>
            ) : (
                <h1>일치하는 사용자가 없습니다.</h1>
            )
        }
        </>
    );
}
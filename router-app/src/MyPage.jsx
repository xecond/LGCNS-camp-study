import { Navigate } from "react-router-dom";

export default () => {
    const isLoggedin = false;

    if (!isLoggedin) {
        return <Navigate to="/login" replace={true} />
    }

    return <h1>마이페이지</h1>;
}
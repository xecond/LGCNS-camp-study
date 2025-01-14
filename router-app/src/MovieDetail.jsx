import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";

// 비디오 재생 옵션
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};

// http://localhost:3000/movieDetail/:movieid
export default function MovieDetail() {
    const params = useParams();
    const movieid = params.movieid;

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [key, setKey] = useState(""); // 비디오 키

    // 컴포넌트가 마운트되었을 때 비디오 클립을 조회
    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=9d2bff12ed955c7f1f74b83187f188ae`;
        axios
        .get(endpoint)
        .then(res => {
            console.log(res);
            setVideos(res.data.results);
            setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {
                isLoading && <h1>데이터를 가져오고 있습니다.</h1>
            }
            {
                !isLoading && videos.length === 0 && <h1>등록된 비디오 클립이 존재하지 않습니다.</h1>
            }
            {
                !isLoading && videos.length !== 0 && videos.map(v => (
                    // 비디오 제목 클릭 시
                    <div style={{fontSize: 20}} onClick={() => setKey(v.key)}>
                        {v.name} (출시일: {v.published_at.substring(0, 10)})
                    </div>
                ))
            }
            {
                // 해당 비디오 재생
                key && <YouTube videoId={key} opts={opts} />
            }
        </div>
    );
}
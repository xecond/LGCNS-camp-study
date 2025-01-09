import { useState } from "react";
import axios from "axios";
import "./WineList.css";

function WineList() {
    const [wines, setWines] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const wineTypes = ["reds", "whites", "sparkling", "rose", "dessert", "port"];

    const searchWine = (e) => {
        setIsSearch(true);

        const wineType = e.target.innerHTML.toLowerCase();
        const endpoint = `https://api.sampleapis.com/wines/${wineType}`;
        axios
            .get(endpoint)
            .then((res) => {
                setWines(res.data);
            })
            .catch((err) => console.log(err));
    };

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredWines = wines.filter((wine) =>
        wine.wine.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>와인 창고</h1>
            <div className="wine-types">
                {wineTypes.map((wt) => (
                    <div onClick={searchWine} key={wt}>
                        {wt.toUpperCase()}
                    </div>
                ))}
            </div>
            {isSearch && (
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="와인 이름을 검색하세요."
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                </div>
            )}
            {isSearch && filteredWines.length === 0 && (
                <div className="message">일치하는 와인이 존재하지 않습니다.</div>
            )}
            <div className="wine-list">
                {filteredWines.map((w) => (
                    <div key={w.id} className="wine-item">
                        <img src={`${w.image}`} alt={w.wine} />
                        <h2>{w.wine}</h2>
                        <p>양조장: {w.winery}</p>
                        <p>위치: {w.location}</p>
                        <p>
                            평점: {w.rating.average || "N/A"} / 5 ({w.rating.reviews || 0})
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WineList;

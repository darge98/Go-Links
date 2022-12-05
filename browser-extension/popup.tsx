import {useEffect, useState} from "react"
import './style.css';
import {SearchBar} from "~components/searchbar/SearchBar";
import {Navbar} from "~components/navbar/Navbar";
import {SearchService} from "~services/SearchService";
import type {GoLink} from "~entities/search-response";
import {Card} from "~components/card/Card";

function IndexPopup() {
    const [text, setText] = useState("");
    const [data, setData] = useState<GoLink[]>([]);
    const [visibleData, setVisibleData] = useState<GoLink[]>([]);

    useEffect(() => {
        SearchService.Search(text)
            .then((result) => result.items)
            .then((items) => {
                setData(items);
                setVisibleData(items);
            });
    }, [])

    useEffect(() => {
        const filteredData = data.filter((link) =>
            link.name.toLowerCase().includes(text)
            || link.description.toLowerCase().includes(text)
            || (link.tags.length > 0 && link.tags.every(t => t.includes(text))));

        setVisibleData(filteredData);
    }, [text])

    return (
        <div className="flex flex-col w-full bg-neutral-100">
            <Navbar/>

            <div className="content my-4">
                <div className="w-96 mt-1 mx-10">
                    <SearchBar onChange={setText}/>
                </div>

                <div className="flex flex-col justify-between items-start">
                    {visibleData.map((item) =>
                        <div className="my-4 mx-auto w-96 " key={item.name}>
                            <Card item={item}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default IndexPopup

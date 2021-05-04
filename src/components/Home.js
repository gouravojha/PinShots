import React from 'react'
import Header from "./Header";
import Cards from "./Cards";
import { useQuery } from "react-query";
import { useState } from "react";



function Home() {
    const [val, setVal] = useState('corona india')
    const getData = async () => {
        const res = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${val}&lang=en`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7c615dcca4msh1256e61cbc40572p1f9723jsn712b498418d0",
                "x-rapidapi-host": "free-news.p.rapidapi.com"
            }
        });
        return res.json();
    }
    const { data, status } = useQuery(['title', val], getData);
    console.log(data)
    return (
        <>
            <Header onBlur={(value) => setVal(value)} />
            {status === 'error' && (
                <div>Error fetching Data</div>
            )}
            {status === 'loading' && (
                <div className="text-center">
                    <div className="spinner-grow" role="status" style={{width:"10rem",height:"10rem",marginTop:"3%"}}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {status === 'success' && (
                <div>
                    {
                        data.articles.map((e) => {
                            return (
                                <Cards
                                    link={e.link}
                                    media={e.media}
                                    title={e.title}
                                    summery={e.summary}
                                    date={e.published_date}
                                />
                            )
                        })
                    }
                </div>
            )}
        </>

    )
}
export default Home
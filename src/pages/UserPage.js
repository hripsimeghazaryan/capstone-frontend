import { useState, useEffect } from 'react';
import { React } from 'react';
import CardComponent from '../components/Card/Card';
import requests from "../utils/requests";
import { UserContext } from '../contexts/user-context';
import { useContext } from 'react';

function HomePage() {
    const iterations = [0, 1, 2, 3, 4, 5];
    const { userData } = useContext(UserContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await requests.sendRequest(`job-post/matchingJobs/${userData.account_id}`, {method: "GET"})
            setData(data)
        }
        fetchData();
    }, []);
    console.log(data)
    
    return (
        <div className="card-list-component">
            {iterations.map((index) => {
                return (
                    <CardComponent key={index}/>
                )
            })}
        </div>
    )
}

export default HomePage;
import { useState, useEffect } from 'react';
import { React } from 'react';
import CardComponent from '../components/Card/Card';
import requests from "../utils/requests";
import { UserContext } from '../contexts/user-context';
import { useContext } from 'react';
import { getToken, tokenDecoder } from "../utils/tokens"

function HomePage() {
    const { userData } = useContext(UserContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = tokenDecoder(getToken());
            console.log(token);
            const data = await requests.sendRequest(`job-post/matchingJobs/${token.id}`, {method: "GET"});
            console.log(data);
            
            const counts = data.reduce((counts, num) => {
                counts[num] = (counts[num] || 0) + 1;
                return counts;
              }, {});

            data.sort(function(p0, p1){
                return counts[p1] - counts[p0];
            });

            const result = data.reduce((unique, o) => {
                if(!unique.some(obj => obj.job.id === o.job.id)) {
                  unique.push(o);
                }
                return unique;
            },[]);

            setData(result)
        }
        fetchData();
    }, []);

    return (
        <div className="card-list-component">
            {data.map((index) => {
                return (
                    <CardComponent key={index.id} data={index.job} />
                )
            })}
        </div>
    )
}

export default HomePage;
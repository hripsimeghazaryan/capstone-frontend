import { Box } from '@mui/material';
import { React } from 'react';
// import axios from 'axios'; //useEffect, useState
import CardComponent from '../components/Card/Card';

function HomePage() {
    const iterations = [0, 1, 2, 3, 4, 5];
    // const [data, setData] = useState([]);

    // useEffect(() => {
        // check if 
    //     const fetchData = async () => {
    //         const data = await axios.get('http://localhost:3000/jobs');
    //         setData(data)
    //     }
    //     fetchData()
    // }, []);

    // instead of iterations it should be data

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
import { React } from 'react';
// import axios from 'axios'; //useEffect, useState
import CardComponent from '../components/Card';

function HomePage(props) {
    const iterations = [0, 1, 2, 3, 4, 5];
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await axios.get();
    //         setData(data)
    //     }
    //     fetchData()
    // }, []);
    return (
        <div className="card-list-component">
            {iterations.map(() => {
                return (
                    <CardComponent />
                )
            })}
        </div>
    )
}

export default HomePage;
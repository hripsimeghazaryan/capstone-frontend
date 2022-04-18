import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/Buttons/Buttons';
// import axios from 'axios'; //useEffect, useState
import CardComponent from '../components/Card/Card';

function AdminPage() {
    const iterations = [0, 1, 2, 3, 4, 5];
    const navigate = useNavigate();

    const handleJobCreate = () => navigate("/add-job");
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
        <div className="job-list">
            <div className="job-add-button">
                <Buttons name={"Add a Job"} handleClick={() => handleJobCreate()}/>
            </div>
            <div className="card-list-component">
                {iterations.map((index) => {
                    return (
                        <CardComponent key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminPage;
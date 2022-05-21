import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/Buttons/Buttons';
import CardComponent from '../components/Card/Card';
import requests from "../utils/requests";
import { UserContext } from '../contexts/user-context';
import { useContext } from 'react';

function AdminPage() {
    const iterations = [0, 1, 2, 3, 4, 5];
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const handleJobCreate = () => navigate("/add-job");

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await requests.sendRequest(`job-post/companyJobs/${userData.account_id}`, {method: "GET"})
    //         setData(data)
    //     }
    //     fetchData();
    // }, []);
    // console.log(data)

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
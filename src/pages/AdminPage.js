import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/Buttons/Buttons';
import CardComponent from '../components/Card/Card';
import requests from "../utils/requests";
import { UserContext } from '../contexts/user-context';
import { useContext } from 'react';
import { getToken, tokenDecoder } from "../utils/tokens"

function AdminPage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const handleJobCreate = () => {
        if(data.length !== 0) {
            localStorage.setItem("company_id", data[0].companyId)
        }
        navigate("/add-job")
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = tokenDecoder(getToken());
            const data = await requests.sendRequest(`job-post/companyjobs/${token.id}`, {method: "GET"});
            setData(data);
        }
        fetchData();
    }, []);

    return (
        <div className="job-list">
            <div className="job-add-button">
                <Buttons name={"Add a Job"} handleClick={() => handleJobCreate()}/>
            </div>
            <div className="card-list-component">
                {data.map((index) => {
                    return (
                        <CardComponent key={index.id} data={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminPage;
import { Box } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import Buttons from "../components/Buttons/Buttons";
import Personal from "../components/Forms/PersonalForm";
import Company from "../components/Forms/CompanyForm";
import './AccountPage.css';

// import axios from "axios";

const infos = ["Personal", "Education", "Skills", "Experience"];

function AdminAccountPage(props) {
    const [edible, setEdible] = useState(false);

    const [personal, setPersonal] = useState(true);
    const [company, setCompany] = useState(false);

    const handlePersonal = () => {
        setPersonal(true);
        setCompany(false);
    }

    const handleCompany = () => {
        setPersonal(false);
        setCompany(true);
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await axios.get();
    //         setData(data)
    //     }
    //     fetchData()
    // }, []);

    return (
        <Box className="account-container">
            <Box className="account-image-container"></Box>
            <div className="info-type">
                    <Buttons name={"Perosnal"} handleClick={handlePersonal} />
                    <Buttons name={"Company"} handleClick={handleCompany} />
            </div>
            <Box sx={{width: "50%"}} className="account-info-container">
                {personal && <Personal disabled={!edible}/>}
                {company && <Company disabled={!edible}/>}
            </Box>
            <Box className="edit-save-button">
                {!edible ?
                <Buttons name={"Edit"} handleClick={() => setEdible(true)} />
                :
                <Buttons name={"Save"} handleClick={() => setEdible(false)} />
                }
            </Box>
        </Box>
    )
}

export default AdminAccountPage;
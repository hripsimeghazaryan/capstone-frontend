import { Box } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import Buttons from "../components/Buttons/Buttons";
import Personal from "../components/Forms/PersonalForm";
import Company from "../components/Forms/CompanyForm";
import './AccountPage.css';

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

    return (
        <Box className="account-container">
            <Box className="account-image-container"></Box>
            <div className="info-type">
                    <Buttons name={"Perosnal"} handleClick={handlePersonal} />
                    <Buttons name={"Company"} handleClick={handleCompany} />
            </div>
            <Box sx={{width: "50%"}} className="account-info-container">
                {personal && <Personal disabled={!edible} handleEnable={() => setEdible(!edible)} />}
                {company && <Company disabled={!edible} handleEnable={() => setEdible(!edible)}/>}
            </Box>
        </Box>
    )
}

export default AdminAccountPage;
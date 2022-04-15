import { Box } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import Buttons from "../components/Buttons/Buttons";
import Personal from "../components/Forms/PersonalForm";

// import axios from "axios";

const infos = ["Personal", "Education", "Skills", "Experience"];

function AccountPage(props) {
    const [edible, setEdible] = useState(false);

    const [personal, setPersonal] = useState(true);
    const [education, setEducation] = useState(false);
    const [skills, setSkills] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await axios.get();
    //         setData(data)
    //     }
    //     fetchData()
    // }, []);

    return (
        <Box className="account-container">
            <Box
            className="account-image-container"></Box>
            <Box className="account-info-container">
                <div className="info-type">
                    {infos.map((index) => {
                        return (
                            <Buttons name={index} />
                        )
                    })}
                </div>
                {personal && <Personal disabled={!edible}/>}
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

export default AccountPage;
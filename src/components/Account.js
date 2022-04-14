import { Button, Paper, Box } from "@mui/material";
import * as React from "react";
import { useState } from "react";


const infos = ["Personal", "Education", "Skills"];

function Account(props) {
    const [edible, setEdible] = useState(false);

    const [personal, setPersonal] = useState(false);
    const [education, setEducation] = useState(false);
    const [skills, setSkills] = useState(false);

    return (
        <Paper className="account-container">
            <Box
            className="account-image-container"></Box>
            <Box className="account-info-container">
                <div className="info-type">
                    {infos.map((index) => {
                        return (
                            <div className="button">
                                <Button variant="contained">{index}</Button>
                            </div>
                        )
                    })}
                </div>
            </Box>
            <Box className="edit-save-button">
                {!edible ?
                <Button variant="contained" onClick={() => setEdible(true)}>Edit</Button>
                :
                <Button variant="contained" onClick={() => setEdible(false)}>Save</Button>
                }
            </Box>
        </Paper>
    )
}

export default Account;
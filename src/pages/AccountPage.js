import { Box } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import Buttons from "../components/Buttons/Buttons";
import Personal from "../components/Forms/PersonalForm";
import Education from "../components/Forms/EducationForm";
import Skills from "../components/Forms/SkillsForm";
import Experience from "../components/Forms/ExperienceForm";
import './AccountPage.css';

// import axios from "axios";

function AccountPage(props) {
    const [edible, setEdible] = useState(false);

    const [personal, setPersonal] = useState(true);
    const [education, setEducation] = useState(false);
    const [skills, setSkills] = useState(false);
    const [experience, setExperience] = useState(false);

    const handlePersonal = () => {
        setPersonal(true);
        setEducation(false);
        setSkills(false);
        setExperience(false);
    }

    const handleEducation = () => {
        setPersonal(false);
        setEducation(true);
        setSkills(false);
        setExperience(false);
    }

    const handleSkills = () => {
        setPersonal(false);
        setEducation(false);
        setSkills(true);
        setExperience(false);
    }

    const handleExperience = () => {
        setPersonal(false);
        setEducation(false);
        setSkills(false);
        setExperience(true);
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
                    <Buttons name={"Education"} handleClick={handleEducation} />
                    <Buttons name={"Skills"} handleClick={handleSkills} />
                    <Buttons name={"Experience"} handleClick={handleExperience} />
            </div>
            <Box sx={{width: "50%"}} className="account-info-container">
                {personal && <Personal disabled={!edible}/>}
                {education && <Education disabled={!edible}/>}
                {skills && <Skills disabled={!edible}/>}
                {experience && <Experience disabled={!edible}/>}
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
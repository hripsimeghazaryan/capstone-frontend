import { React, useState } from 'react';
import Heading from '../components/Heading';
 
import Buttons from '../components/Buttons'; 
import { Box, Paper } from '@mui/material';
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";

import Register from '../components/RegisterPage';
import EducationInfo from '../components/EducationInfo';
import SkillsInfo from '../components/SkillsInfo';
import Experience from '../components/ExperienceInfo';

const components = [
    {
        title: "Personal Information",
        component: <Register />,
        router: "personal"
    },
    {
        title: "Education",
        component: <EducationInfo />,
        router: "education"
    },
    {
        title: "Skills",
        component: <SkillsInfo />,
        router: "skills"
    },
    {
        title: "Experience",
        component: <Experience />,
        router: "experience"
    }
];

function RegisterPage(props) {
    const location = useLocation();
    const path = location.pathname;
    const url = "http://localhost:3000/";

    const [personal, setPersonal] = useState(false);
    const [education, setEducation] = useState(false);
    const [skills, setSkills] = useState(false);
    const [experience, setExperience] = useState(false);
    const [image, setImage] = useState(false);

    const redirectTo = (router) => {
        console.log(router);
        return <Navigate to={`${path}/${router}`} />
    };

    return (
        <Paper>
            <Heading title={"Registration forms"} />
            <Box className="group-of-forms">
                
                {components.map((item) => {
                    const title = item.title;
                    const component = item.component;
                    const router = item.router;
                    return (
                        <Link to={`${path}/${router}`} style={{ textDecoration: 'none' }}>
                            <Buttons name={title} />
                        </Link>
                    )
                })}
            </Box>

            <Routes>
                <Route path={`${path}/personal`} to={<Register />} />
                <Route path={`${path}/education`} to={<EducationInfo />} />
                <Route path={`${path}/skills`} to={<SkillsInfo />} />
                <Route path={`${path}/experience`} to={<Experience />} />
            </Routes>

        </Paper>
    )

}

export default RegisterPage;
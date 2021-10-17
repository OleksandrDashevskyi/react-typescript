import React from 'react';
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {

    const history = useHistory()

    return (
        <React.Fragment>
            <h1>Information Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloribus dolorum eligendi, labore
                nam sapiente? Commodi cupiditate et tenetur!</p>
            <button className="btn" onClick={() => history.push('/')}>Return to todos list</button>
        </React.Fragment>
    )
}
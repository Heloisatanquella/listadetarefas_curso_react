import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
	const params = useParams();
	const navigate = useNavigate();

	const handleBackButtonClick = () => {
		navigate(-1);
	};

	return (
		<>
			<div className="back-button-container">
				<Button onClick={handleBackButtonClick}>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
					minima eius magnam culpa sequi explicabo.
				</p>
			</div>
		</>
	);
};

export default TaskDetails;
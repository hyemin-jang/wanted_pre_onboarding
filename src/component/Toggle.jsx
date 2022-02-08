import React, { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
	const [isToggleOn, setIsToggleOn] = useState(false);
	const onToggleClick = () => {
		setIsToggleOn(!isToggleOn);
	};

	return (
		<>
			<ToggleContainer onClick={onToggleClick}>
				<div className={`toggle-container ${isToggleOn ? 'toggle-on' : ''}`}>
					<div className={`toggle-switch ${isToggleOn ? 'toggle-on' : ''}`} />
				</div>
			</ToggleContainer>
		</>
	);
};

const ToggleContainer = styled.div`
	display: inline-block;

	.toggle-container {
		position: relative;
		width: 100px;
		height: 40px;
		border-radius: 40px;
		background-position: right;
		background: linear-gradient(to left, gray 50%, rgb(85, 0, 182) 50%) right;
		background-size: 200%;
		transition: 1s;
		&.toggle-on {
			background-position: left;
			background: linear-gradient(to right, rgb(85, 0, 182) 50%, gray 50%) left;
			background-size: 200%;
			transition: 1s;
		}

		.toggle-switch {
			position: absolute;
			top: 2px;
			left: 2px;
			width: 36px;
			height: 36px;
			border-radius: 50%;
			background-color: white;
			transition: 1s;
			&.toggle-on {
				left: 62px;
				transition: 1s;
			}
		}
	}
`;

export default Toggle;

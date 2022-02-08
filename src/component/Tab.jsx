import React from 'react';
import styled from 'styled-components';
import { color } from '../style/color';

const Tab = () => {
	const handleTabClick = (e) => {
		document.querySelector('.selected-menu').innerText = e.target.value;
	};

	return (
		<>
			<TabContainer>
				<label className='tab-menu'>
					<input
						type='radio'
						name='menu'
						value='tab menu 1'
						onClick={handleTabClick}
					/>
					<span>menu 1</span>
				</label>
				<label className='tab-menu'>
					<input
						type='radio'
						name='menu'
						value='tab menu 2'
						onClick={handleTabClick}
					/>
					<span>menu 2</span>
				</label>
				<label className='tab-menu'>
					<input
						type='radio'
						name='menu'
						value='tab menu 3'
						onClick={handleTabClick}
					/>
					<span>menu 3</span>
				</label>
				<div className='selected-menu'>tab menu 1</div>
			</TabContainer>
		</>
	);
};

const TabContainer = styled.div`
	.tab-menu input[type='radio'] {
		display: none;
		& + span {
			display: inline-block;
			width: 200px;
			height: 50px;
			background-color: ${color.gray};
			color: white;
			text-align: center;
			line-height: 50px;
			cursor: pointer;
		}
		&:checked + span {
			background-color: ${color.purple};
		}
	}
	.selected-menu {
		width: 600px;
		text-align: center;
		margin-top: 20px;
	}
`;

export default Tab;

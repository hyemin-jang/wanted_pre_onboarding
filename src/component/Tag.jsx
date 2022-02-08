import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';

const Tag = () => {
	const [tagList, setTagList] = useState([]);

	const handleEnterPress = (e) => {
		if (e.key === 'Enter') {
			setTagList([...tagList, { id: tagList.length, text: e.target.value }]);
			e.target.value = '';
		}
	};

	const deleteTag = (e) => {
		let idx = e.target.parentNode.id;
		setTagList(tagList.filter((v) => v.id !== Number(idx)));
	};

	return (
		<TagContainer>
			{tagList.map((v) => (
				<span id={v.id} className='tag'>
					<span>{v.text}</span>
					<button className='delete-button' onClick={deleteTag}>
						X
					</button>
				</span>
			))}
			<input
				className='tag-input'
				type='text'
				placeholder='Press enter to add tags'
				onKeyPress={handleEnterPress}></input>
		</TagContainer>
	);
};

const TagContainer = styled.div`
	width: 600px;
	min-height: 50px;
	border: 1px solid ${color.gray};
	border-radius: 5px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	.tag {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 30px;
		border-radius: 5px;
		background-color: ${color.purple};
		color: white;
		line-height: 20px;
		text-align: center;
		margin: 5px;
		padding: 5px;

		.delete-button {
			width: 15px;
			height: 15px;
			font-size: 10px;
			background-color: white;
			border: 0;
			border-radius: 50%;
			padding: 0;
			margin-left: 10px;
			cursor: pointer;
		}
	}

	.tag-input {
		border: none;
		height: 30px;
		border-radius: 10px;
		padding: 5px;
		&:focus {
			outline: none;
		}
	}
`;

export default Tag;

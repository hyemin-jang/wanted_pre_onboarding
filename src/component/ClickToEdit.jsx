import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';

const ClickToEdit = () => {
	const inputRef = useRef(null);
	const [value, setValue] = useState();
	const [isEditMode, setIsEditMode] = useState(false);
	const edit = (e) => {
		setIsEditMode(true);
	};
	const changeValue = (e) => {
		if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'blur') {
			setValue(e.target.value);
			setIsEditMode(false);
		}
	};
	// edit mode로 바뀌면 input창에 포커스 이동
	useEffect(() => {
		if (isEditMode) {
			inputRef.current.focus();
		}
	}, [isEditMode]);

	return (
		<Container>
			{isEditMode ? (
				<input
					ref={inputRef}
					type='text'
					className='input-box'
					onKeyDown={changeValue}
					onBlur={changeValue}></input>
			) : (
				<div className='input-box' onClick={edit}>
					{value}
				</div>
			)}
		</Container>
	);
};

const Container = styled.div`
	input[type='text'] {
		border: 2px solid ${color.purple};
		box-sizing: border-box;
		box-shadow: 0 0 3px 0 ${color.purple};
		outline: 0;
	}
	.input-box {
		box-sizing: border-box;
		width: 150px;
		height: 50px;
		border: 1px solid ${color.gray};
		border-radius: 5px;
		text-align: center;
		line-height: 50px;
	}
`;

export default ClickToEdit;

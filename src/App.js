import { useState } from 'react';
import './App.css';
import Modal from './component/Modal';
import styled from 'styled-components';
import Toggle from './component/Toggle';
import { color } from './style/color';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';

function App() {
	const [isModalOpened, setIsModalOpened] = useState(false);
	const closeModal = () => {
		setIsModalOpened(false);
	};

	return (
		<div>
			<Container>
				<h2>Modal</h2>
				<ModalButton onClick={() => setIsModalOpened(true)}>
					Open Modal!
				</ModalButton>
				{isModalOpened && (
					<Modal isModalOpened={isModalOpened} closeModal={closeModal}>
						Hello World :)
					</Modal>
				)}
			</Container>
			<Container>
				<h2>Toggle</h2>
				<Toggle />
			</Container>
			<Container>
				<h2>Tab</h2>
				<Tab />
			</Container>
			<Container>
				<h2>Tag</h2>
				<Tag />
			</Container>
			<Container>
				<h2>Auto Complete</h2>
				<AutoComplete />
			</Container>
			<Container>
				<h2>Click to Edit</h2>
				<ClickToEdit />
			</Container>
		</div>
	);
}

const Container = styled.div`
	width: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	margin: 50px auto;
	padding: 80px 0px;
	position: relative;
	h2 {
		position: absolute;
		top: 0;
		left: 0;
		margin: 5px;
	}
`;

const ModalButton = styled.button`
	display: block;
	width: 120px;
	height: 50px;
	background-color: ${color.purple};
	color: white;
	border: none;
	border-radius: 50px;
`;

export default App;

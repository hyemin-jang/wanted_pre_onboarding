import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
	const { isModalOpened, closeModal, maskClosable, children } = props;

	const onMaskClick = (e) => {
		// e.target(=클릭한 대상)과 e.currentTarget(=ModalWrapper)가 같으면 모달창 닫는다
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	return (
		<>
			<ModalWrapper
				onClick={maskClosable ? onMaskClick : null}
				isModalOpened={isModalOpened}>
				<ModalContainer>
					<ModalButton onClick={() => closeModal()}>X</ModalButton>
					<ModalInner>{children}</ModalInner>
				</ModalContainer>
			</ModalWrapper>
		</>
	);
};

const ModalWrapper = styled.div`
	box-sizing: border-box;
	display: ${(props) => (props.isModalOpened ? 'block' : 'none')};
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	overflow: auto;
	outline: 0;
	background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: 10px;
	width: 300px;
	height: 200px;
	text-align: center;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	position: relative;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	padding: 20px;
`;

const ModalButton = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;
	background-color: transparent;
	border: none;
	border-radius: 50%;
	cursor: pointer;
`;

const ModalInner = styled.div``;

export default Modal;

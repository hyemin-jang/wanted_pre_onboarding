import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';

const AutoComplete = () => {
	const data = [
		'hollow',
		'crime',
		'icy',
		'division',
		'vase',
		'shrug',
		'naive',
		'veil',
		'decay',
		'fool',
		'sky',
		'foamy',
		'swift',
		'direful',
		'verse',
		'fire',
		'statement',
		'limit',
		'magenta',
		'dead',
		'profit',
		'interest',
		'suggestion',
		'courageous',
		'drink',
		'challenge',
		'saw',
		'troubled',
		'bit',
		'scarecrow',
		'robin',
		'lowly',
		'eggnog',
		'marry',
		'utopian',
		'learned',
		'shape',
		'face',
		'threatening',
		'even',
		'gleaming',
		'outgoing',
		'numerous',
		'poison',
		'talented',
		'elated',
		'synonymous',
		'dependent',
		'bumpy',
		'arrive',
		'defective',
		'spicy',
		'woozy',
		'minute',
		'polish',
		'fearful',
		'homely',
		'thumb',
		'playground',
		'plane',
		'tall',
		'sigh',
		'bashful',
		'walk',
		'fold',
		'profuse',
		'pets',
		'camera',
		'silly',
		'grandiose',
		'sordid',
		'rinse',
		'exist',
		'bird',
		'jelly',
		'spotted',
		'abject',
		'sleepy',
		'tin',
		'pop',
		'tight',
		'uninterested',
		'noiseless',
		'gate',
		'ultra',
		'materialistic',
		'different',
		'malicious',
		'purple',
		'scary',
		'fantastic',
		'bikes',
		'lake',
		'pail',
	];

	const [value, setValue] = useState();
	const [matchedWords, setMatchedWords] = useState([]);
	const match = (word, input) => {
		word = word.toLowerCase().substring(0, input.length);
		return word === input && input.length !== 0;
	};
	const findMatchedWords = (input) => {
		setValue();
		setMatchedWords([...data.filter((v) => match(v, input)).slice(0, 5)]);
	};

	return (
		<SearchBox onBlur={() => setMatchedWords([])}>
			<input
				type='text'
				className='input-box'
				value={value}
				onChange={(e) => findMatchedWords(e.target.value)}></input>
			{matchedWords.map((v) => (
				<li
					className='word-list'
					onMouseDown={(e) => setValue(e.target.innerText)}>
					{v}
				</li>
			))}
		</SearchBox>
	);
};

const SearchBox = styled.div`
	width: 600px;
	min-height: 50px;
	border: 1px solid ${color.gray};
	border-radius: 5px;
	margin: 0 auto;
	box-sizing: border-box;
	overflow: hidden;
	.input-box {
		border: none;
		width: 600px;
		height: 50px;
		box-sizing: border-box;
		padding: 5px;
		border-radius: 10px;
		&:focus {
			outline: none;
		}
	}
	.word-list {
		display: block;
		box-sizing: border-box;
		background-color: white;
		height: 50px;
		padding: 10px;
		&:hover {
			background-color: ${color.lightgray};
		}
	}
`;

export default AutoComplete;

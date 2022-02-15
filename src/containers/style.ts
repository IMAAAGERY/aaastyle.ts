import styled from 'styled-components';

export const ViewStyle = styled.div`
	display: flex;
    justify-content: space-between;
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #0000;
`;

export const RowStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ColStyle = styled.div`
	display: flex;
	flex-direction: row;
`;

export const DialogBackgroundStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DialogStyle = styled.div`
	display: flex;
    position: fixed;
    min-width: 200px;
    min-height: 200px;
    background-color: white;
`;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
    color: #fff;
    font-family: 'Roboto Mono', monospace; 
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

export const Clock = styled.div`
    font-size: 6rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
    text-shadow: 0px 0px 15px #fff;
    margin-left: 100px;
`;

export const DayList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 20px;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const DayItem = styled.span<{ isCurrentDay: boolean }>`
    color: ${({ isCurrentDay }) => (isCurrentDay ? '#fff' : '#666')};
    margin-bottom: 10px;
`;

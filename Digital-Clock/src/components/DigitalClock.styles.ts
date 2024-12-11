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

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
`;

export const Clock = styled.div`
    font-size: 6rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
    text-shadow: 0px 0px 15px #fff;
    margin-left: 100px;

    @media (max-width: 768px) {
        font-size: 4rem;
        margin-left: 0;
    }

    @media (max-width: 480px) {
        font-size: 3rem;
    }
`;

export const DayList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 20px;
    font-size: 1.5rem;
    font-weight: bold;

    @media (max-width: 768px) {
        flex-direction: row;
        margin-right: 0;
        font-size: 1.2rem;
        gap: 10px;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const DayItem = styled.span<{ isCurrentDay: boolean }>`
    color: ${({ isCurrentDay }) => (isCurrentDay ? '#fff' : '#666')};
    margin-bottom: 10px;

    @media (max-width: 768px) {
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

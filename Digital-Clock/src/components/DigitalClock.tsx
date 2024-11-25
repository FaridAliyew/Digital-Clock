import React, { useEffect, useState } from 'react';
import { Container, Clock, DayList, DayItem } from './DigitalClock.styles';

const DigitalClock: React.FC = () => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    const [day, setDay] = useState<number>(new Date().getDay());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
            setDay(new Date().getDay());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <Container>
            <DayList>
                {daysOfWeek.map((dayName, index) => (
                    <DayItem key={index} isCurrentDay={index === day}>
                        {dayName}
                    </DayItem>
                ))}
            </DayList>
            <Clock>
                {time}
            </Clock>
        </Container>
    );
};

export default DigitalClock;

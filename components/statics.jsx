import React, { useState, useEffect } from 'react';

const StaticsCounter = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    useEffect(() => {
        const targetValue1 = 10000;
        const targetValue2 = 15000;
        const targetValue3 = 20000;

        const duration = 2000; // milliseconds
        const increment1 = targetValue1 / duration;
        const increment2 = targetValue2 / duration;
        const increment3 = targetValue3 / duration;

        const interval1 = setInterval(() => {
            setCounter1((prevCounter) => {
                const newCounter = prevCounter + increment1;
                return newCounter >= targetValue1 ? targetValue1 : newCounter;
            });
        }, 1);

        const interval2 = setInterval(() => {
            setCounter2((prevCounter) => {
                const newCounter = prevCounter + increment2;
                return newCounter >= targetValue2 ? targetValue2 : newCounter;
            });
        }, 1);

        const interval3 = setInterval(() => {
            setCounter3((prevCounter) => {
                const newCounter = prevCounter + increment3;
                return newCounter >= targetValue3 ? targetValue3 : newCounter;
            });
        }, 1);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    return (
        <>
            <div className="statics-card">
                <span>Total Business Listings 1</span>
                <h3>{Math.floor(counter1)}</h3>
                <p>+12% from last month</p>
            </div>
            <div className="statics-card">
                <span>Total Business Listings 2</span>
                <h3>{Math.floor(counter2)}</h3>
                <p>+12% from last month</p>
            </div>
            <div className="statics-card">
                <span>Total Business Listings 3</span>
                <h3>{Math.floor(counter3)}</h3>
                <p>+12% from last month</p>
            </div>
        </>
    );
};

export default StaticsCounter;

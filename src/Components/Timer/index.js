import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const difference = new Date(targetDate) - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div>
            <div className='timer-section'>
                <h2 id='title-timer'>Oferta termina em:</h2>
                <div className="countdown-container">
                    <div className="countdown-box">
                        <span>{timeLeft.days}</span>
                        <p>Dias</p>
                    </div>
                    <div className="countdown-box">
                        <span>{timeLeft.hours}</span>
                        <p>Horas</p>
                    </div>
                    <div className="countdown-box">
                        <span>{timeLeft.minutes}</span>
                        <p>Minutos</p>
                    </div>
                    <div className="countdown-box">
                        <span>{timeLeft.seconds}</span>
                        <p>Segundos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const offerEndDate = '2025-05-27T23:59:59';

    return (
        <div>
            <Countdown targetDate={offerEndDate} />
        </div>
    );
};

export default App;

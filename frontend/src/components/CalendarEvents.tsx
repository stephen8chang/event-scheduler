import React, { useEffect, useState } from 'react';
import { initGoogleApi, listUpcomingEvents } from '../utils/googleApi';
import { gapi } from 'gapi-script';


const CalendarEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const init = async () => {
            await initGoogleApi();

            const accessToken = localStorage.getItem("access_token");
            if (!accessToken) {
                console.warn("No access token found");
                return;
            }
            gapi.client.setToken({ access_token: accessToken});
        }

        init();
    }, []);

    const handleGetEvents = async (): Promise<void> => {
        setLoading(true);
        setError(null);
        try {
            const events = await listUpcomingEvents();
            console.log(events);
            setEvents(events)
        } catch (err) {
            setError("Failed to fetch events.")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <button onClick={handleGetEvents}>
                {loading ? "Loading Events..." : "Fetch Google Calendar Events"}
            </button>

            {error && <div style={{ color: "red"}}>{error}</div>}

            {events.length > 0 && (
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>
                            <strong>{event.summary}</strong> <br/>
                            {new Date(event.start.dateTime || event.start.date).toLocaleString()}
                        </li>
                    ))}
                </ul>
            )}

            {events.length == 0 && !loading && !error && (
                <div>No upcoming events.</div>
            )}
        </div>

    )
}

export default CalendarEvents;
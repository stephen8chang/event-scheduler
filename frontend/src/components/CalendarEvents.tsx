import React, { useEffect } from 'react';
import { initGoogleApi, listUpcomingEvents } from '../utils/googleApi';
import { gapi } from 'gapi-script';


const CalendarEvents = () => {
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
        const events = await listUpcomingEvents();
        console.log(events);
    }

    return <button onClick={handleGetEvents}>Fetch Calendar Events</button>
}

export default CalendarEvents;
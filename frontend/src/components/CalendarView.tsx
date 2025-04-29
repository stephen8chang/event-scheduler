import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_EVENTS} from "../graphql/queries"

const CalendarView = () => {
    const {data, loading} = useQuery(GET_EVENTS)
    if (loading) return <p>Loading...</p>

    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Events</h2>
            <ul>
                {data.events.map((event:any) => (
                    <li key={event.id} className="mb-1">
                        {event.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CalendarView;
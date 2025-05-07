import React, { useState } from "react";
import { useMutation } from "@apollo/client"; 
import { ADD_EVENT } from "../graphql/mutations";

const EventForm = () => {
    const [title, setTitle] = useState("")
    const [addEvent] = useMutation(ADD_EVENT)
    const currentTime = new Date().toISOString();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addEvent({ 
            variables: {
                input: {
                    title,
                    start_time: currentTime
                }
            }
        })
        setTitle("")
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Event Title"
                className="border p-2"
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                Add Event
            </button>
        </form>
    );
};

export default EventForm;
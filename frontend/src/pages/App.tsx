import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client"
import EventForm from "../components/EventForm";
import CalendarView from "../components/CalendarView";
import Login from "../components/Login";
import CalendarEvents from "../components/CalendarEvents";

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="max-w-xl mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4">Team Scheduler</h1>
                <Login></Login>
                <CalendarEvents></CalendarEvents>
                <EventForm></EventForm>
                <CalendarView></CalendarView>
            </div>
        </ApolloProvider>
    );
}

export default App;
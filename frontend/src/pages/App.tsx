import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client"

import EventForm from "../components/EventForm";
import CalendarView from "../components/CalendarView";
import Login from "../components/Login";
import CalendarEvents from "../components/CalendarEvents";

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="max-w-xl mx-auto mt-10">
                    <h1 className="text-2xl font-bold mb-4">Event Scheduler</h1>

                    <nav className="mb-6">
                        <Link to="/" className="mr-4 text-blue-600 underline hover:text-blue-800">
                            Home
                        </Link>
                        <div></div>
                        <Link to="calendar_view" className="text-blue-600 underline hover:text-blue-800">
                            Calendar View
                        </Link>
                    </nav>

                    <Routes>
                        <Route path="/" element={
                            <div>
                                <Login></Login>
                                <CalendarEvents></CalendarEvents>
                            </div>
                        }/>
                        <Route path="calendar_view" element={
                            <div>
                                <EventForm></EventForm>
                                <CalendarView></CalendarView>
                            </div>
                        }/>  
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
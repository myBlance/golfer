// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import ClubMemberWrapper from "./routes/ClubMemberRoute";
import MembersPage from "./pages/MemberPage";
import RankingPage from "./pages/RankingPage";
import FightsPage from "./pages/FlightsPage";
import EventPage from "./pages/EventPage";
import PostPage from "./pages/PostPage";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />

                <Route
                    path="/flights"
                    element={
                        <ProtectedRoute>
                        <FightsPage/>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/events"
                    element={
                        <EventPage />
                    }
                />

                <Route
                    path="/posts"
                    element={
                        <PostPage/>
                    }
                />

                <Route
                    path="/members/:id"
                    element={
                        <ClubMemberWrapper>
                        <MembersPage />
                        </ClubMemberWrapper>
                    }
                />

                <Route
                    path="/ranking/:id"
                    element={
                        <ClubMemberWrapper>
                        <RankingPage />
                        </ClubMemberWrapper>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
};

export default App;

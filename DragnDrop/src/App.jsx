import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
function App() {
    const [user, updateUser] = useState(null);
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Login updateUser={updateUser} />}
                    />
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute user={user}>
                                <Home user={user} />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;

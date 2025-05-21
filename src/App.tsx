import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

import TaskManager from "./Components/Managers/TaskManger";
import { JSX } from "react/jsx-runtime";

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/"
              element={
                <PrivateRoute>
                  <TaskManager/>
                </PrivateRoute>
              }
              />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

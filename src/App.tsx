import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import "../src/index.css";
import TaskManager from "./Pages/TaskManger";
import { JSX } from "react/jsx-runtime";

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <div className="App">
        <div className="p-4 bg-blue-500 text-white font-bold">
      Tailwind is working!
    </div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <TaskManager />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

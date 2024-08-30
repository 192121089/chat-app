import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	
	// Add a loading state if you check authentication asynchronously
	const isLoading = false; // Replace with actual loading state if needed

	if (isLoading) {
		return <div>Loading...</div>; // Replace with your loading spinner or component
	}

	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;

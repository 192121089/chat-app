import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto flex justify-center items-center'>
			{!loading ? (
				<BiLogOut
					className='w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition-colors'
					onClick={logout}
					aria-label='Logout'
				/>
			) : (
				<span className='loading loading-spinner text-white' aria-label='Loading...'></span>
			)}
		</div>
	);
};

export default LogoutButton;

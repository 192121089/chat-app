import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col h-full'>
			{/* Search input for finding conversations */}
			<SearchInput />
			
			{/* Divider for visual separation */}
			<div className='divider my-3'></div>
			
			{/* List of conversations */}
			<Conversations />
			
			{/* Logout button */}
			<LogoutButton />
		</div>
	);
};

export default Sidebar;

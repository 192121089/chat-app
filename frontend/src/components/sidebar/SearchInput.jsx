import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full py-2 px-4 bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				aria-label='Search conversations'
			/>
			<button
				type='submit'
				className='btn btn-circle bg-sky-500 text-white hover:bg-sky-600 transition-colors'
				aria-label='Search'
			>
				<IoSearchSharp className='w-6 h-6' />
			</button>
		</form>
	);
};

export default SearchInput;

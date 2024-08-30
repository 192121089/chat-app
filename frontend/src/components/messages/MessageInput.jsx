import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return; // Prevent sending empty or whitespace messages
		await sendMessage(message.trim());
		setMessage("");
	};

	return (
		<form className='px-4 my-3 flex items-center' onSubmit={handleSubmit}>
			<div className='relative w-full'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type='submit'
					className='absolute inset-y-0 right-0 flex items-center px-3 text-blue-500'
					disabled={loading} // Disable button while loading
				>
					{loading ? (
						<div className='animate-spin border-t-2 border-blue-500 rounded-full w-5 h-5'></div>
					) : (
						<BsSend />
					)}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;

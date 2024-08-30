import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { onlineUsers } = useSocketContext();

	const isSelected = selectedConversation?._id === conversation._id;
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-sky-600 rounded-lg p-2 cursor-pointer
				${isSelected ? "bg-sky-600 text-white" : "text-gray-800"}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`relative flex-shrink-0`}>
					<div className={`avatar ${isOnline ? "online" : ""}`}>
						<div className='w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300'>
							<img src={conversation.profilePic} alt='user avatar' className='object-cover w-full h-full' />
						</div>
					</div>
					{isOnline && <div className='absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white'></div>}
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between items-center'>
						<p className='font-semibold text-gray-900'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-1 py-0 h-1 bg-gray-300' />}
		</>
	);
};

export default Conversation;

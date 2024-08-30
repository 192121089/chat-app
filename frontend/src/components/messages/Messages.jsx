import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../Skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef(null);

	useEffect(() => {
		if (!loading) {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages, loading]);

	return (
		<div className='px-4 py-2 flex-1 overflow-auto'>
			{/* Display messages or loading skeleton */}
			{loading ? (
				[...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
			) : (
				<>
					{messages.length > 0 ? (
						messages.map((message) => (
							<div key={message._id} ref={lastMessageRef}>
								<Message message={message} />
							</div>
						))
					) : (
						<p className='text-center text-gray-500'>Send a message to start the conversation</p>
					)}
				</>
			)}
		</div>
	);
};
export default Messages;

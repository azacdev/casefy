interface ChatIdPageProps {
  params: { chatId: string };
}

const ChatIdPage = ({ params }: ChatIdPageProps) => {
  return <div className="text-white">{params.chatId}</div>;
};

export default ChatIdPage;

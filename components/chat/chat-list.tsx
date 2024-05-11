import { redirect } from "next/navigation";

import { auth } from "@/auth";
// @ts-ignore
import { getUserChatsList } from "@/actions";
import { ChatListItem } from "@/components/chat/chat-list-item";

export default async function ChatList() {
  const session = await auth();
  if (!session || !session.user) {
    return redirect("/login");
  }
  // const chatList = await getUserChatsList(session.user.id);
  const chatList = [
    {
      id: "1",
      name: "General Chat",
      ownerId: "user123",
      createdAt: new Date("2024-05-09"),
    },
    {
      id: "2",
      name: null,
      ownerId: "user456",
      createdAt: new Date("2024-05-08"),
    },
    {
      id: "3",
      name: "Tech Talk",
      ownerId: "user789",
      createdAt: new Date("2024-05-07"),
    },
  ];

  return (
    <ul className="flex flex-col gap-y-4 h-full">
      {chatList.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </ul>
  );
}

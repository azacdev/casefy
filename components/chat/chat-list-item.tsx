"use client";

import Link from "next/link";
import { useSetAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";

import { asideAtom } from "@/atoms";
import { Button, buttonVariants } from "@/components/ui/button";
import DeleteChatButton from "@/components/chat/delete-chat-button";

type ChatListItemProps = {
  chat: Chat;
};

export function ChatListItem({ chat }: ChatListItemProps) {
  const pathname = usePathname();
  const isActive = pathname.split("/")[2] === chat.id;
  const setIsOpen = useSetAtom(asideAtom);
  const router = useRouter();
  return (
    <li>
      <Button
        variant={isActive ? "default" : "secondary"}
        className="w-[214px] overflow-hidden overflow-ellipsis whitespace-nowrap flex items-center justify-between gap-x-2"
        onClick={() => {
          setIsOpen(false);
          router.push(`/chat/${chat.id}`);
        }}
      >
        <span className="min-w-0 truncate">{chat.name || "Unnamed Chat"}</span>
        <DeleteChatButton chatId={chat.id} />
      </Button>
    </li>
  );
}

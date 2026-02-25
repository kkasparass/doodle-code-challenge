"use client";

import type { MessageProps } from "@/src/types/types";
import ChatCard from "./ChatCard";
import useMessages from "@/src/hooks/useMessages";

const CardList = ({}: { messageList?: MessageProps[] }) => {
  const { messages } = useMessages();
  console.log(messages);

  return (
    <div className={`flex flex-col gap-2`}>
      {messages.map(({ id, ...rest }) => (
        <ChatCard key={id} id={id} {...rest} />
      ))}
    </div>
  );
};

export default CardList;

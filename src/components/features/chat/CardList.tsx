"use client";

import type { MessageProps } from "@/src/types/types";
import ChatCard from "./ChatCard";

const CardList = ({ messageList }: { messageList: MessageProps[] }) => {
  return (
    <div className={`flex flex-col gap-2`}>
      {messageList.map(({ id, ...rest }) => (
        <ChatCard key={id} id={id} {...rest} />
      ))}
    </div>
  );
};

export default CardList;

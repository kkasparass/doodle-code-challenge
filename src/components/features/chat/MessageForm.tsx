"use client";

import useMessages from "@/src/hooks/useMessages";
import { SubmitEvent } from "react";

const MessageForm = () => {
  const { sendMessageMutation } = useMessages();
  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log((event.target.firstChild as HTMLFormElement).value);
    sendMessageMutation.mutate({
      message: (event.target.firstChild as HTMLFormElement).value,
      author: "John Doe",
    });
    event.target.reset();
  };
  return (
    <form className="flex gap-2" onSubmit={onSubmit}>
      <input
        className="grow bg-white text-mist-400 px-2 rounded-sm"
        required
        minLength={2}
        type="text"
        name="message"
        placeholder="Message"
      />
      <button
        className="bg-red-400 font-semibold py-3 px-5 rounded-sm"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default MessageForm;

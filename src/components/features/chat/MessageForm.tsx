"use client";

import { SubmitEvent } from "react";

const MessageForm = () => {
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    event.target.reset();
  };
  return (
    <form className="flex gap-2" onSubmit={onSubmit}>
      <input
        className="grow bg-white text-mist-400 px-2"
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

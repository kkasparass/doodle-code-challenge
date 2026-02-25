"use client";

import { Tooltip } from "react-tooltip";
import { useMessageForm } from "./useMessageForm";

const MessageForm = () => {
  const { errorMessage, tooltipRef, inputRef, onSubmit } = useMessageForm();

  return (
    <form className="flex gap-2" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="grow bg-white text-mist-400 px-2 rounded-sm"
        type="text"
        name="message"
        placeholder="Message"
        data-tooltip-id="input-tooltip"
        data-tooltip-content={errorMessage}
      />
      <button
        className="bg-red-400 font-semibold py-3 px-5 rounded-sm"
        type="submit"
      >
        Send
      </button>
      <Tooltip
        ref={tooltipRef}
        place="top"
        className="bg-red-500!"
        id="input-tooltip"
        openEvents={{}}
      />
    </form>
  );
};

export default MessageForm;

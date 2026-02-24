import { MessageProps } from "@/src/types/types";

const ChatCard = ({
  author,
  message,
  createdAt,
  highlighted,
}: MessageProps) => {
  return (
    <div
      className={`text-mist-400  p-2 border-1 rounded-lg border-mist-300 ${highlighted ? "self-end" : "self-start"} ${highlighted ? "bg-yellow-100" : "bg-white"}`}
    >
      {author && <p>{author}</p>}
      <p className="text-zinc-600">{message}</p>
      <p className={`${highlighted ? "text-right" : ""}`}>
        {" "}
        {createdAt?.toLocaleDateString("es-ES", {
          year: "numeric",
          day: "numeric",
          month: "short",
        })}{" "}
        {createdAt?.toLocaleTimeString("es-ES", {
          hour: "numeric",
          minute: "numeric",
        })}
      </p>
    </div>
  );
};

export default ChatCard;

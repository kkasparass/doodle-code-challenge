const ChatCard = ({
  userName,
  message,
  timestamp,
  highlighted,
}: {
  userName?: string;
  message: string;
  timestamp?: Date;
  highlighted?: boolean;
}) => {
  return (
    <div
      className={`justify-self-start text-mist-400 bg-white p-2 border-1 rounded-lg border-mist-300 ${highlighted ? "justify-self-end" : ""} ${highlighted ? "bg-yellow-100" : ""}`}
    >
      {userName && <p>{userName}</p>}
      <p className="text-zinc-600">{message}</p>
      <p className={`${highlighted ? "text-right" : ""}`}>
        {" "}
        {timestamp?.toLocaleDateString("es-ES", {
          year: "numeric",
          day: "numeric",
          month: "short",
        })}{" "}
        {timestamp?.toLocaleTimeString("es-ES", {
          hour: "numeric",
          minute: "numeric",
        })}
      </p>
    </div>
  );
};

export default ChatCard;

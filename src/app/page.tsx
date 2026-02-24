import Image from "next/image";
import Page from "../components/ui/Page";
import ChatCard from "../components/features/chat/ChatCard";
import CardList from "../components/features/chat/CardList";

export default function Home() {
  return (
    <Page header="header" footer="footer">
      <CardList
        messageList={[
          {
            id: "1",
            message: "highlighted message",
            author: "johnyy",
            highlighted: true,
            createdAt: new Date(),
          },
          {
            id: "2",
            message: "message",
            author: "bob",
            highlighted: false,
            createdAt: new Date(),
          },
          {
            id: "3",
            message: "message",
            author: "bob",
            highlighted: false,
            createdAt: new Date(),
          },
          {
            id: "4",
            message: "message",
            author: "bob",
            highlighted: false,
            createdAt: new Date(),
          },
        ]}
      />
    </Page>
  );
}

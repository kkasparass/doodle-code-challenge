import Page from "../components/ui/Page";
import CardList from "../components/features/chat/CardList";
import MessageForm from "../components/features/chat/MessageForm";

export default function Home() {
  return (
    <Page header="Top Tier Work Group" footer={<MessageForm />}>
      <CardList
        messageList={[
          {
            id: "1",
            message:
              "highlighted message. what if this was increadibly long and large and unreasonamble. Would you still love me then?",
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

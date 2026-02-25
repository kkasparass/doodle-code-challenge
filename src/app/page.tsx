import Page from "../components/ui/Page";
import CardList from "../components/features/chat/CardList";
import MessageForm from "../components/features/chat/MessageForm";

export default function Home() {
  return (
    <Page header="Top Tier Work Group" footer={<MessageForm />}>
      <CardList />
    </Page>
  );
}

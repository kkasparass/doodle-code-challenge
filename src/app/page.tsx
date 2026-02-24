import Image from "next/image";
import Page from "../components/ui/Page";
import ChatCard from "../components/features/chat/ChatCard";

export default function Home() {
  return (
    <Page header="header" footer="footer">
      <ChatCard
        userName="mock with a light"
        message="This is a mock highlighted message"
        timestamp={new Date()}
        highlighted
      />
      <ChatCard
        userName="mock"
        message="This is a mock normal message"
        timestamp={new Date()}
      />
    </Page>
  );
}

"use client";

import Page from "../components/ui/Page";
import CardList from "../components/features/chat/CardList";
import MessageForm from "../components/features/chat/MessageForm/MessageForm";
import useMessages from "../hooks/useMessages";
import Header from "../components/features/chat/Header";

export default function Home() {
  const { messages, isError } = useMessages();

  return (
    <Page header={<Header isError={isError} />} footer={<MessageForm />}>
      <CardList messageList={messages} />
    </Page>
  );
}

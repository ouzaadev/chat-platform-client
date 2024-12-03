import { conversations } from "@/__mocks__/conversations";
import { ConversationChannel } from "@/components/conversation-channel";
import { ConversationSidebar } from "@/components/conversation-sidebar";

export default async function page({ params }: Promise<{ id: string }>) {
  const id = (await params).id;

  return (
    <div className="h-screen">
      <ConversationSidebar conversations={conversations} />
      <ConversationChannel id={id} />
    </div>
  );
}

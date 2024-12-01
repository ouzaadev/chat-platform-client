import { conversations } from "@/__mocks__/conversations";
import { ConversationSidebar } from "@/components/conversation-sidebar";

export default function page() {
  return (
    <div className="h-screen">
      <ConversationSidebar conversations={conversations} />
      <div className="ml-[350px]">Conversation Channel</div>
    </div>
  );
}

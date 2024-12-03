type Conversation = {
  id: number;
  name: string;
  lastMessage: string;
};

export function ConversationSidebar({
  conversations,
}: {
  conversations: Conversation[];
}) {
  return (
    <aside className="w-[250px] h-screen absolute top-0 left-0 border-r border-gray-300">
      <header className="flex justify-between items-center h-12 px-4 border-b border-gray-300">
        <h1 className="text-base font-medium">Conversations</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
        </svg>
      </header>
      <div className="h-[calc(100%-48px)] overflow-y-scroll">
        {conversations.map((conversation) => (
          <ConversationSidebarItem
            key={conversation.id}
            conversation={conversation}
          />
        ))}
      </div>
    </aside>
  );
}

function ConversationSidebarItem({
  conversation,
}: {
  conversation: Conversation;
}) {
  return (
    <div className="flex gap-2 p-4 border-b border-gray-300 hover:bg-gray-100">
      <div className="w-6 h-6 rounded-full bg-black flex-shrink-0" />
      <div className="w-full overflow-hidden">
        <span className="block text-sm font-medium leading-4">
          {conversation.name}
        </span>
        <span className="w-full flex-grow-0 block text-xs text-gray-500 whitespace-nowrap overflow-ellipsis overflow-hidden">
          {conversation.lastMessage}
        </span>
      </div>
    </div>
  );
}

export function ConversationChannel({ id }: { id: string }) {
  return (
    <main className="ml-[250px]">
      <div className="flex items-center gap-2 h-12 border-b border-gray-300 pl-4">
        <div className="w-8 h-8 rounded-full bg-black flex-shrink-0" />
        <span className="text-base font-medium">Curtis Jonas</span>
      </div>
    </main>
  );
}

import { useState } from "react";

export default function AddFriend() {
  const [recipient, setRecipient] = useState("");

  return (
    <main className="p-4">
      <p className="text-base uppercase">Add Friend</p>
      <p className="text-neutral-700">You can add friends with their email</p>
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          placeholder="You can add friends with their email"
          onChange={(e) => setRecipient(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
        <button className="bg-green-500 text-white font-medium transition-colors p-3 rounded-lg cursor-pointer hover:bg-green-500/90">
          Send Friend Request
        </button>
      </div>
    </main>
  );
}

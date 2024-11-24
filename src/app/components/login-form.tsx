import Link from "next/link";

export function LoginForm() {
  return (
    <form className="w-[600px]">
      <div className="bg-[#D9D9D9] rounded-lg px-2 py-1">
        <label htmlFor="email" className="block text-[#636363] text-xs">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="bg-inherit border-none outline-none w-full"
        />
      </div>
      <div className="bg-[#D9D9D9] rounded-lg px-2 py-1 mt-2">
        <label htmlFor="password" className="block text-[#636363] text-xs">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="bg-inherit border-none outline-none w-full"
        />
      </div>
      <button className="bg-[#1A88A7] hover:bg-[#459cb4] transition-colors text-white font-semibold w-full rounded-lg py-2 mt-2">
        Login
      </button>
      <div className="text-xs text-end mt-2">
        <span>You don&apos;t have an account? </span>
        <Link
          href="/register"
          className="underline hover:text-[#1A88A7] transition-colors"
        >
          Register
        </Link>
      </div>
    </form>
  );
}

"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type RegisterFormInput = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  console.log({ errors });

  const onSubmit: SubmitHandler<RegisterFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form className="w-[600px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-[#D9D9D9] rounded-lg px-2 py-1">
        <label htmlFor="email" className="block text-[#636363] text-xs">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="bg-inherit border-none outline-none w-full"
          {...register("email", { required: "Email Address is required" })}
        />
      </div>
      {errors.email && (
        <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
      )}
      <div className="flex gap-2 mt-2">
        <div className="bg-[#D9D9D9] rounded-lg px-2 py-1 flex-1">
          <label htmlFor="firstName" className="block text-[#636363] text-xs">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className="bg-inherit border-none outline-none w-full"
            {...register("firstName", { required: "First Name is required" })}
          />
        </div>
        <div className="bg-[#D9D9D9] rounded-lg px-2 py-1 flex-1">
          <label htmlFor="lastName" className="block text-[#636363] text-xs">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className="bg-inherit border-none outline-none w-full"
            {...register("lastName", { required: "Last Name is required" })}
          />
        </div>
      </div>
      <div className="flex gap-2 mt-1">
        {errors.firstName && (
          <p className="text-xs text-red-600 flex-1">
            {errors.firstName.message}
          </p>
        )}
        {errors.lastName && (
          <p className="text-xs text-red-600 flex-1">
            {errors.lastName.message}
          </p>
        )}
      </div>
      <div className="bg-[#D9D9D9] rounded-lg px-2 py-1 mt-2">
        <label htmlFor="password" className="block text-[#636363] text-xs">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="bg-inherit border-none outline-none w-full"
          {...register("password", {
            required: "Password is required",
            minLength: 8,
          })}
        />
      </div>
      {errors.password && (
        <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>
      )}
      <button
        type="submit"
        className="bg-[#1A88A7] hover:bg-[#459cb4] transition-colors text-white font-semibold w-full rounded-lg py-2 mt-2"
      >
        Create an account
      </button>
      <div className="text-xs text-end mt-2">
        <span>Already have an account? </span>
        <Link
          href="/login"
          className="underline hover:text-[#1A88A7] transition-colors"
        >
          Login
        </Link>
      </div>
    </form>
  );
}

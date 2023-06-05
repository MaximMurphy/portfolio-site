import React from "react";
import EmailLink from "@/components/EmailLink";
import { Icon } from "@iconify-icon/react";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for your message, we'll get back to you soon!");
      document.getElementById("myForm").reset();
    } catch (err) {
      console.error(err);
      alert("There was an error submitting the form :(");
    }
  }

  return (
    <section
      id="contact"
      className="bg-offwhite-400 w-full flex flex-col px-8 pt-8 pb-20 gap-8"
    >
      <div className="flex flex-col gap-12 lg:gap-24">
        <h1 className="italic font-serif text-[3.25rem] lg:text-9xl font-bold text-end tracking-widest lg:px-20">
          <span className="text-blue-950">C</span>
          <span className="text-cyan-950 -ml-2 lg:-ml-4">O</span>
          <span className="text-blue-950 -ml-3 lg:-ml-7">N</span>
          <span className="text-cyan-950 -ml-2 lg:-ml-4">T</span>
          <span className="text-blue-950 -ml-3 lg:-ml-8">A</span>
          <span className="text-cyan-950 -ml-3 lg:-ml-6">C</span>
          <span className="text-blue-950 -ml-[.60rem] lg:-ml-5">T</span>
        </h1>
        <p className="text-cyan-800 text-3xl lg:text-5xl w-full flex flex-col items-start font-semibold tracking-widest gap-4 lg:px-20">
          If you would like to discuss a new project, please get in touch.
        </p>
        <EmailLink />
      </div>
      <form
        id="myForm"
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col items-start justify-center text-blue-950 p-4 pt-12 lg:p-16"
      >
        <label htmlFor="name" className="mb-4 text-blue-950">
          {" "}
          Your Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="family-name"
          required
          name="name"
          className="w-full h-12 bg-offwhite-400 focus:outline-none border-b-2 border-offwhite-800 rounded-none p-2 mb-12"
        />
        <label htmlFor="email" className="mb-4 text-blue-950">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          name="email"
          className="w-full h-12 bg-offwhite-400 focus:outline-none border-b-2 border-offwhite-800 rounded-none p-2 mb-12"
        />
        <label htmlFor="message" className="mb-4 text-blue-950">
          Message
        </label>
        <textarea
          id="message"
          rows="6"
          className="w-full h-12 max-h-48 bg-offwhite-400 focus:outline-none border-b-2 border-offwhite-800 rounded-none p-2 mb-12"
          name="message"
        />
        <button
          type="submit"
          className="flex flex-row gap-1 text-sm text-offwhite-400 bg-blue-950 hover:bg-offwhite-400 hover:text-blue-950 rounded-md border-2 border-blue-950 w-fit h-fit p-4"
        >
          <p>Submit</p>
          <Icon className="mt-1" icon="mdi:arrow-right" />
        </button>
      </form>
    </section>
  );
}

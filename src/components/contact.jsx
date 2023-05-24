import React from "react";
import EmailLink from "@/components/EmailLink";

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
      className="bg-offwhite-400 w-full flex flex-col px-12 lg:px-48 gap-12 lg:gap-24 py-24"
    >
      <h1 className="text-green-900 text-7xl lg:text-9xl font-bold text-start lg:text-end">
        Contact
      </h1>
      <p className="text-green-950 text-3xl lg:text-5xl w-full flex flex-col items-start font-semibold tracking-widest gap-4">
        If you would like to discuss a new project, please get in touch.
      </p>
      <EmailLink />

      <form
        id="myForm"
        onSubmit={handleSubmit}
        className="z-40 w-full h-full bg-white/10 rounded-xl backdrop-blur-sm border-solid border border-white/20 shadow-2xl flex flex-col items-start justify-center text-cyan-800 font-semibold p-12 lg:p-16"
      >
        <label htmlFor="name" className="mb-4">
          {" "}
          Your Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="family-name"
          required
          name="name"
          className="w-full h-12 rounded-md focus:outline-none focus:ring-2 bg-offwhite-600 border-solid border-2 border-slate-500/20 ring-green-950 text-green-950 p-4 mb-12"
        />
        <label htmlFor="email" className="mb-4">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          name="email"
          className="w-full h-12 rounded-md focus:outline-none focus:ring-2 bg-offwhite-600 border-solid border-2 border-slate-500/20 ring-green-900 text-green-950 p-4 mb-12"
        />
        <label htmlFor="message" className="mb-4">
          Message
        </label>
        <textarea
          id="message"
          type="text"
          rows="6"
          className="w-full h-36 flex items-start rounded-md focus:outline-none focus:ring-2 bg-offwhite-600 border-solid border-2 border-slate-500/20 ring-green-800 text-green-950 p-4 mb-12"
          name="message"
        />
        <button
          type="submit"
          className="text-offwhite-400 bg-cyan-800 hover:bg-cyan-700 rounded-md w-fit h-fit p-4"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

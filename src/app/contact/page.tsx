"use client";
import { useState } from "react";
import Instagram from "@/components/svg/InstagramLG.svg";
import Twitter from "@/components/svg/TwitterLG.svg";
import LinkedIn from "@/components/svg/linkedInLG.svg";
import Github from "@/components/svg/GithubLG.svg";
import { useCallback } from "react";

export default function Contact() {
  const githubClicked = useCallback(() => {
    window.open("https://github.com/demurthelemur/", "_blank");
  }, []);

  const instagramClicked = useCallback(() => {
    window.open("https://www.instagram.com/demirdereli/", "_blank");
  }, []);

  const linkedInClicked = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/demir-dereli-62465b1a8/",
      "_blank"
    );
  }, []);

  const twitterClicked = useCallback(() => {
    window.open("https://x.com/demurthelemur", "_blank");
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", contact: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="flex flex-col place-items-center mb-32 ">
      <h3 className="font-h3 text-h3">Check Out My Socials</h3>
      <div className=" place-items-center pt-2 mt-4 flex gap-12">
        <Github className="cursor-pointer" onClick={githubClicked} />
        <LinkedIn className="cursor-pointer" onClick={linkedInClicked} />
        <Twitter className="cursor-pointer" onClick={twitterClicked} />
        <Instagram
          className="cursor-pointer  mt-6"
          onClick={instagramClicked}
        />
      </div>
      <h4 className="text-h4 font-h4 mb-12">Or Leave a Message</h4>
      <form onSubmit={handleSubmit} className="space-y-4 w-3/6 flex flex-col ">
        <div>
          <label htmlFor="name" className="font-p text-md block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border font-p text-md bg-gray-100 p-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="contact" className="block font-p text-md">
            Contact Information:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full borderfont-p text-md bg-gray-100 p-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-p text-md block">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border font-p text-md  h-64 bg-gray-100 p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 w-2/6 rounded-lg place-self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

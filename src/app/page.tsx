/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import QuestionAndAnswer from "@/components/ui/questionAndAnswer";
import QA from "../lib/questionsAndAnswers";
import Techstack from "@/components/ui/techstack";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <div className="flex  flex-col items-center">
      <Image
        src="/images/demoImage.png"
        alt="Logo"
        width={600}
        height={600}
        className="mt-24"
      />
      <h1 className="font-h1 text-h1 mt-8">Hello I'm Lemur</h1>
      <h4 className="font-h4 text-h4 mt-4">Frontend / Mobile Developer</h4>
      <Button
        onClick={() => handleNavigate("/portfolio")}
        variant="gradient"
        size="xl"
      >
        SHOW PORTFOLIO
      </Button>

      <Techstack />

      <h5 className="font-h5 text-h5 mb-8">Frequently Asked Questions</h5>
      {QA.map((item, index) => (
        <QuestionAndAnswer
          key={index} // Always use a unique key when rendering lists
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

import React from "react";

interface QuestionAndAnswerProps {
  question: string; // Required string prop
  answer?: string; // Optional string prop
}

export default function QuestionAndAnswerr({
  question,
  answer,
}: QuestionAndAnswerProps) {
  return (
    <div className="w-full mt-8 mb-2">
      <div className="bg-[rgba(34,128,44,0.43)] h-24 rounded-lg mb-2 flex justify-start items-center">
        <h5 className="font-h5 md:text-h5 text-xl text-white pl-6">
          {question}
        </h5>
      </div>
      <div className="border-2 border-secondary h-56 sm:h-32 md:h-42 lg:h-32  rounded-lg">
        <p className="text-s sm:text-base lg:text-xl xl:text-p font-p m-4">
          {answer}
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { Button } from "@/components/ui/customButton";

export default function Resume() {
  return (
    <div className="flex  flex-col items-center">
      <h2 className="font-h2 text-h3 lg:text-h2 mb-8 lg:mb-4">
        Hello I am Demir,
      </h2>
      <h4 className="font-h4 text-h4"> aka DemurTheLemur</h4>
      <p className="font-p text-p pt-12 lg:mx-36 text-center leading-9 ">
        I&#39;m a frontend and mobile developer from Türkiye, currently working
        at HubX as a React Native Developer. I graduated from Sabancı University
        with a degree in Computer Science in 2024. I&#39;m really passionate
        about technology and always eager to learn more to improve my skills.
      </p>

      <p className="font-p text-p pt-8 lg:mx-36 text-center leading-9 ">
        Right now, I’m mainly focused on frontend web development with Next.js
        and mobile development using Expo. I’ve also got experience in native
        iOS development, working with SwiftUI and UIKit, which gives me a solid
        background across different platforms.
      </p>
      <p className="font-p text-p pt-8 lg:mx-36 text-center leading-9 ">
        Outside of coding, I enjoy diving into gaming, music production, and
        art. I also love to travel and meet new people, which helps me stay
        inspired and creative.
      </p>
      <p className="font-p text-p pt-8 pb-8 lg:mx-36 text-center leading-9 ">
        In the near future, I’m planning to start creating online content, so
        feel free to follow me on my socials to stay in the loop! You can
        contact me from my contact me page or download my resume below
      </p>
      <Button variant="gradient" size="xl">
        <a href="/api/download" download>
          Download Resume
        </a>
      </Button>
    </div>
  );
}

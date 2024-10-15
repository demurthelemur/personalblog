"use client";

import Instagram from "@/components/svg/Instagram.svg";
import Twitter from "@/components/svg/Twitter.svg";
import LinkedIn from "@/components/svg/linkedIn.svg";
import Github from "@/components/svg/Github.svg";
import { useCallback } from "react";

export default function Footer() {
  const githubClicked = useCallback(() => {
    window.open("https://github.com/demurthelemur/", "_blank");
  }, []);

  const instagramClicked = useCallback(() => {
    window.open("https://www.instagram.com/demirdereli/", "_blank");
  }, []);

  const linkedInClicked = useCallback(() => {
    window.open("  www.linkedin.com/in/demir-dereli-62465b1a8", "_blank");
  }, []);

  const twitterClicked = useCallback(() => {
    window.open("https://x.com/demurthelemur", "_blank");
  }, []);

  return (
    <div className="mt-16 mb-16">
      <p className="text-p font-p">2024 © DemurTheLemur</p>
      <div className="border-t-2 border-third pt-2 mt-4 flex gap-4">
        <Github onClick={githubClicked} />
        <LinkedIn onClick={linkedInClicked} />
        <Twitter onClick={twitterClicked} />
        <Instagram onClick={instagramClicked} />
      </div>
    </div>
  );
}

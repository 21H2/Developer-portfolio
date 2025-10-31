'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MailIcon } from "lucide-react";

export default function Footer() {
  // show local time for India (GMT+5:30)
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    };

    update(); // set immediately
    const id = window.setInterval(update, 60_000); // update every minute
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Made with <span aria-hidden>❤️</span> by{" "}
            <Link
              href="https://github.com/21h2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition hover:text-primary"
            >
              Umesh Sharma
            </Link>
          </p>

          <div className="hidden md:flex items-center space-x-3">
            <hr className="h-6 border-l border-muted" />
            <div className="flex items-center space-x-2">
              <p className="text-xs text-muted-foreground">Local time:</p>
              <time className="text-sm font-semibold" dateTime={new Date().toISOString()}>
                {time} GMT+5:30
              </time>
            </div>
          </div>
        </div>

        <Link
          href="mailto:qgj79cbcjd@privaterelay.appleid.com"
          aria-label="Email"
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button asChild variant="outline">
            <span className="inline-flex items-center">
              <MailIcon className="h-4 w-4 md:mr-2" />
              <span className="hidden md:flex">qgj79cbcjd@privaterelay.appleid.com</span>
            </span>
          </Button>
        </Link>
      </div>

      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}

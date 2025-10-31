'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MailIcon } from "lucide-react";

function useZonedTime(timeZone: string, intervalMs = 60_000) {
  const [state, setState] = useState({ label: "", iso: "" });

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const update = () => {
      const now = new Date();
      const label = fmt.format(now).replace(",", " at"); // "31 Oct 2025 at 06:09 PM"
      setState({ label, iso: now.toISOString() });
    };

    update();
    const id = window.setInterval(update, intervalMs);
    return () => clearInterval(id);
  }, [timeZone, intervalMs]);

  return state;
}

export default function Footer() {
  // show local time for India (GMT+5:30)
  const { label: timeLabel, iso: timeIso } = useZonedTime("Asia/Kolkata");

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 gap-4">
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
              <time
                className="text-sm font-semibold"
                dateTime={timeIso || undefined}
                aria-live="polite"
                aria-label={timeLabel ? `Local time ${timeLabel} GMT+5:30` : "Loading local time"}
              >
                {timeLabel ? `${timeLabel} GMT+5:30` : "—"}
              </time>
            </div>
          </div>
        </div>

        <a
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
        </a>
      </div>

      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  variant?: "icon" | "pill";
}

export function CopyEmailButton({
  email,
  className = "",
  variant = "icon",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  if (variant === "pill") {
    return (
      <button
        onClick={handleCopy}
        type="button"
        className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground ${className}`}
      >
        {copied ? (
          <>
            <Check className="size-4 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Email Copied!
            </span>
          </>
        ) : (
          <>
            <Mail className="size-4 text-muted-foreground" />
            <span>{email}</span>
            <Copy className="size-3 text-muted-foreground/70 ml-1" />
          </>
        )}
      </button>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleCopy}
          type="button"
          aria-label={copied ? "Email copied" : "Copy email address"}
          className={`inline-flex size-9 items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-accent ${className}`}
        >
          {copied ? (
            <Check className="size-4 text-emerald-500 animate-in zoom-in-50 duration-200" />
          ) : (
            <Mail className="size-4" />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{copied ? "Copied to clipboard!" : `Copy ${email}`}</p>
      </TooltipContent>
    </Tooltip>
  );
}

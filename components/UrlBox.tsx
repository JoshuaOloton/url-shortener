"use client";

import { useState } from "react";
import Button from "./Button"

type Props = { 
  originalUrl: string, 
  shortenedUrl: string, 
  onDelete: (url: string) => void
 }

const UrlBox = ({ originalUrl, shortenedUrl, onDelete }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 10000);
  }

  return (
    <div className="bg-white rounded-lg">
      <p className="border-b border-gray400 p-3 text-left text-ellipsis overflow-hidden whitespace-nowrap font-medium">{originalUrl}</p>
      <p className="text-blue400 p-3 text-left font-medium">{shortenedUrl}</p>
      <div className="flex gap-4">
        <Button classname={`rounded-lg ${copied && "bg-purple950"}`} onclick={copyToClipboard}>
          {copied ? "Copied!" : "Copy"}
        </Button>
        <Button classname={`rounded-lg bg-red400`} onclick={() => onDelete(shortenedUrl)}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default UrlBox
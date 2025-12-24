"use client";

import { useState } from "react";
import Button from "./Button"
import { Trash } from "lucide-react";

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
    <div className="bg-white rounded-lg flex flex-col md:flex-row p-4">
      <p className="border-b md:border-0 border-gray400 p-3 text-left text-ellipsis overflow-hidden whitespace-nowrap font-medium">{originalUrl}</p>
      <p className="text-blue400 p-3 text-left font-medium md:ml-auto">{shortenedUrl}</p>
      <div className="flex gap-4">
        <Button 
          size="small"
          classname={`rounded-lg flex-1 ${copied && "bg-purple950 hover:bg-purple950/95 active:bg-purple950/95"}`} 
          onclick={copyToClipboard}>
          {copied ? "Copied!" : "Copy"}
        </Button>
        <button type="button" className='font-semibold px-3 py-3 cursor-pointer text-white rounded-lg bg-red400 hover:bg-red400/95 active:bg-red400/95 hover:-translate-y-0.5 duration-100' onClick={() => onDelete(shortenedUrl)}>
          <Trash />
        </button>
      </div>
    </div>
  )
}

export default UrlBox
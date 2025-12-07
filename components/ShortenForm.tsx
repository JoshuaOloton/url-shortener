"use client";

import { use, useEffect, useState } from "react"

import Button from "./Button"
import UrlBox from "./UrlBox";

interface UrlShape {
  originalUrl: string;
  shortenedUrl: string;
}

const ShortenForm = () => {

  const [mounted, setMounted] = useState<boolean>(false);

  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<UrlShape[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = localStorage.getItem("shortenedUrls");
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, [mounted]);

  useEffect(() => {
    console.log("Results changed:", results);
    localStorage.setItem("shortenedUrls", JSON.stringify(results));
  }, [results]);

  const deleteUrl = (url: string) => {
    setResults(prevResults => prevResults.filter(res => res.shortenedUrl !== url));
  }

  const shortenLink = (longUrl: string) => {
    if (longUrl.trim() === "") {
      setError("Please add a link");
      return;
    }
    setError("");

    const url = "api/shorten";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longUrl,
      }),
    })
    .then(response => response.json())
    .then(data => {
      setResults(prevResults => {
        if (prevResults.find(prev => prev.originalUrl === longUrl)){
          return prevResults;
        }
        return [{
          originalUrl: longUrl,
          shortenedUrl: data.shortenedUrl
        }, ...prevResults];
      });
    })
    .catch(error => {
      console.error("Error shortening URL:", error);
    })
    .finally(() => {
      setInput("");
    })
  }

  return (
    <section className="mt-5 mb-10 w-5/6 m-auto max-w-5xl">
      <div className="bg-purple950 p-5 md:px-10 py-14 rounded-lg shadow-md">
        <form className="flex flex-col md:flex-row gap-y-5 items-center md:items-start">
          <div className="flex flex-col flex-1 mr-0 md:mr-4">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Shorten a link here..."
              className={`bg-white text-gray500 p-3 rounded-lg ${error ? "border-red400 border-4 placeholder:text-red400/40" : "border-none"} outline-none mb-2`}
            />
            <span className="text-red400 text-sm text-left font-medium italic">{error}</span>
          </div>
          <Button classname="rounded-lg" onclick={() => shortenLink(input)}>Shorten it!</Button>
        </form>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {results.map((result, idx) => (
          <UrlBox 
            key={idx} 
            originalUrl={result.originalUrl} 
            shortenedUrl={result.shortenedUrl} 
            onDelete={deleteUrl} 
          />
        ))}
      </div>
    </section>
  )
}

export default ShortenForm

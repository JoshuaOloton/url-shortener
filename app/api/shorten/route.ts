export async function GET() {
  return Response.json({
    message: "This is a placeholder GET response from /api/shorten",
  });
}

export async function POST(request: Request) {
  const { longUrl } = await request.json();

  if (longUrl === undefined || longUrl.trim() === "") {
    return Response.json({ error: "Invalid URL" }, { status: 400 });
  }

  const apiUrl = "https://cleanuri.com/api/v1/shorten";

  try {
    const resp = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: longUrl,
      }),
    });

    if (resp.status !== 200) {
      return Response.json({ error: `Failed to shorten URL` }, { status: 500 });
    }

    const data = await resp.json();
    if (!data.result_url) {
      return Response.json(
        { error: "Invalid response from URL shortening service" },
        { status: 500 }
      );
    }
    const shortenedUrl = data.result_url;

    return Response.json({ shortenedUrl });
  } catch (error) {
    return Response.json({ error: `Server error: ${error}` }, { status: 500 });
  }
}

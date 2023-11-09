document.addEventListener("DOMContentLoaded", () => {
    const urlShortenerForm = document.getElementById("urlShortenerForm");
    const originalUrlInput = document.getElementById("originalUrl");
    const shortenButton = document.getElementById("shortenButton");
    const shortenedUrlDiv = document.getElementById("shortenedUrlDiv");
    const shortenedUrl = document.getElementById("shortenedUrl");

    shortenButton.addEventListener("click", async () => {
        const originalUrl = originalUrlInput.value;

        // Make a request to your server to shorten the URL
        try {
            const response = await fetch("/shorten", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ originalUrl }),
            });
            const data = await response.json();
            
            // Display the shortened URL
            shortenedUrl.href = data.shortUrl;
            shortenedUrl.textContent = data.shortUrl;
            shortenedUrlDiv.style.display = "block";
        } catch (error) {
            console.error("Error shortening URL:", error);
        }
    });
});

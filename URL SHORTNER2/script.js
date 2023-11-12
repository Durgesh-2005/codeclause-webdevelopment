document.addEventListener('DOMContentLoaded', () => {
    const shortenButton = document.getElementById('shortenButton');
    const copyButton = document.getElementById('copyButton');
    const originalUrlInput = document.getElementById('originalUrl');
    const shortenedUrlDiv = document.getElementById('shortenedUrlDiv');
    const shortenedUrl = document.getElementById('shortenedUrl');

    shortenButton.addEventListener('click', () => {
        const originalUrl = originalUrlInput.value;

        // Call the TinyURL API to shorten the URL
        shortenURL(originalUrl)
            .then((shortened) => {
                shortenedUrl.href = shortened;
                shortenedUrl.textContent = shortened;
                shortenedUrlDiv.style.display = 'block';
                alert(shortened);
            })
            .catch((error) => {
                console.error('Error shortening URL:', error);
            });
    });

    copyButton.addEventListener('click', () => {
        // Implement the copy-to-clipboard functionality here (as shown in the previous example).
        // ...
    });

    async function shortenURL(originalUrl) {
        // Replace 'YOUR_TINYURL_API_ENDPOINT' with the actual TinyURL API endpoint.
        const apiEndpoint = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(originalUrl);

        try {
            const response = await fetch(apiEndpoint);
            if (response.ok) {
                const shortened = await response.text();
                return shortened;
            } else {
                throw new Error('Failed to shorten URL');
            }
        } catch (error) {
            throw error;
        }
    }
});

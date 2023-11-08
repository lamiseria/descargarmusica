const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const result = await download(url);
    if (result.success) {
        const a = document.createElement('a');
        a.href = result.data;
        a.download = result.name;
        a.click();
    } else {
        error.textContent = result.error;
    }
});

async function download(url) {
    // Fetch the music from the server using the url
    // For the real application, the server should fetch the music using a package like 'ytdl-core' and then return the audio stream to the client.
    // In this example, we simulate this behavior by using a fake download link and pretending to download the music.

    const fakeDownloadLink = "https://example.com/music.mp3";
    return { success: true, data: fakeDownloadLink, name: "music.mp3" };
}
import { displayLyrics } from "./display_lyrics";

//function for fetching data
export async function getLyrics ()  {
    const title = document.getElementById('title-name') as HTMLInputElement | null;
    const artist = document.getElementById('artist-name') as HTMLInputElement | null;
    const songTitle: string = title!.value;
    const artistName: string = artist!.value;
    console.log(artistName);
    console.log(songTitle);


    const url = `https://api.lyrics.ovh/v1/${artistName}/${songTitle}`;
    console.log(url);

    try {
        const response = await fetch(url);
        const data = await response.json().then(data => displayLyrics(data.lyrics));
        console.log(data);
        return data;
        
    } catch (error) {
        if (error) {
            console.error("Error fetching song/artist name");
        }
    }
}


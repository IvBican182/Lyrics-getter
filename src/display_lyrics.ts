

export function displayLyrics(data: string) {
    const lyrics = document.getElementById('lyrics') as HTMLInputElement;
    
    //lyrics.value = "";

    const showText = data;

    const textHTML = `
       <p>${showText}</p>
    
    `;

    lyrics.innerHTML = textHTML;
    console.log("hzml something");
}
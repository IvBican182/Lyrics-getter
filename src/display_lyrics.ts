
//displaying lyrics function
export function displayLyrics(data: string) {
    const lyrics = document.getElementById('lyrics') as HTMLInputElement;
    
    
   
    if (!data) {
        lyrics.innerHTML = "Oops! Seems like we don't have that one yet :(";
    } else {
        const textHTML = `
          <p  style="white-space: pre-line">${data}</p>
    
        `;
        lyrics.innerHTML = textHTML;
    }

    console.log("hzml something");
}

//displaying lyrics function
export function displayLyrics(data: string) {
    const lyrics = document.getElementById('lyrics') as HTMLInputElement;
    
    
    //lyrics.value = "";
    if (!data) {
        lyrics.innerHTML = "Oops! Seems like we don't have that one yet :(";
    } else {
        const showText = data.replace(/([A-Z]+)/g, " ,$1").replace(/,/g," <br />").split("/n"); //break line on every capital letter
        const textHTML = `
          <p>${showText}</p>
    
        `;
        lyrics.innerHTML = textHTML;
    }

    console.log("hzml something");
}
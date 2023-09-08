const loadMeme = () => {
    document.getElementById('spinner').classList.remove('d-none');
    fetch('https://meme-api.com/gimme/5')
    .then(res => res.json())
    .then(data => displayMeme(data.memes))
}


const displayMeme = (memes) => {
    const memeContainer = document.getElementById('meme-container');
    memes.forEach(meme => {
        const {url} = meme;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <img src="${url}" rounded" alt="...">
        `
        memeContainer.appendChild(div);
    })
    document.getElementById('spinner').classList.add('d-none');
}

loadMeme();
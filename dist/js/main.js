const getBeers = async () => {
    const res = await fetch('/api/beers');
    const beers = await res.json();

    beers.forEach(beer => {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.setAttribute('src', beer.image_url);

        const p = document.createElement('p');
        const name = document.createTextNode(beer.name);
        p.appendChild(name);
        
        li.appendChild(img);
        li.appendChild(p);
        
        document.getElementById('beers').appendChild(li);
    });
}

getBeers();
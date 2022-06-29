const images = [
    './images/img1.jpg',
    './images/img2.jpg',
    './images/img3.jpg',
    './images/img4.jpg',
    './images/img5.jpg',
    './images/img6.jpg',
    './images/img7.webp',
    './images/img8.jpg',
    './images/img9.jpg',
    './images/img10.jpg',
]
const characterInfo = ['name', 'gender', 'height'];

window.onload = () => {
    fetch("https://swapi.dev/api/people")
    .then((data)=>{
        console.log('data:',data);
        return data.json()
    })
    .then((response)=>{
        console.log(response);
        const result = response['results'];
        const resultLength = result.length;
        const body = document.querySelector('body');
        const container = document.querySelector('.container');
        body.appendChild(container);
       

        

        
        for (let i = 0; i < resultLength; i++) {
            const starwarsData = document.createElement('div');
            const character = document.createElement('div');
            const img = document.createElement('img');
            const h2 = document.createElement('h2');
            const name = result[i]['name'];
            for (let j = 0; j < characterInfo.length; j++) {
                const h3 = document.createElement('h3');
                const detail = result[i][characterInfo[j]]
                h3.innerHTML = detail;
                starwarsData.appendChild(h3);
            }
            
            
            starwarsData.style.visibility = 'hidden';
            img.setAttribute('class', 'images');
            img.src = images[i];
            h2.innerHTML = name;

            character.appendChild(img);
            character.appendChild(h2);
            character.appendChild(starwarsData);
            container.appendChild(character);
           
        

                
            h2.addEventListener('click', () => {
                if (starwarsData.style.visibility === 'hidden') {
                    starwarsData.style.visibility = 'visible';
                }else {
                    starwarsData.style.visibility = 'hidden';
                }
            })
        }
    })
}



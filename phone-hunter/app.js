const loadPhones = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

// const displayPhones = phones =>{
//     const phonesContainer = document.getElementById('phones-container');

//     phones.forEach(phone =>{
//         const phoneDiv = document.createElement('div');
//         phoneDiv.classList.add('col');
//         phoneDiv.innerHTML = `
//         <div class="card">
//                 <img src="${phone.image}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h3 class="card-title">${phone.brand}</h3>
//                   <h5 class="card-title">${phone.phone_name}</h5>
//                   <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p>${phone.slug}</p>
//                 </div>
//               </div>
//         `;
//         phonesContainer.appendChild(phoneDiv)
//     })
// }

loadPhones();


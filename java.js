const useData = async () => {
  const loadData = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
  const response = await loadData.json();
  // console.log(response.data);
  displayData(response.data);
}

const displayData = (data) => {
  console.log(data);
  // step 1 ,Find the div
  const findDivContainer=document.getElementById('find-the-div')
  data.forEach(phone => {
    console.log(phone);
    // step 2 create the div
    const createTheDiv = document.createElement('div');
    // step 3 give them input 
    createTheDiv.classList = `card w-96 bg-base-100 shadow-xl`;
    createTheDiv.innerHTML =`
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>${phone.slug}</p>
            <div class="card-actions justify-center">
              <button class="btn btn-primary">Buy Now</button>
            </div>

          </div>`
    // append the child 
    findDivContainer.appendChild(createTheDiv);
    
  });
}

useData();
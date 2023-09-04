const useData = async (searchText) => {
  const loadData = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const response = await loadData.json();
  // console.log(response.data);
  displayData(response.data);
}

const displayData = (data) => {
  console.log(data);
  // step 1 ,Find the div
  const findDivContainer = document.getElementById('find-the-div');
  // clear phone container cards before the search 
  findDivContainer.innerHTML = '';
  data.forEach(phone => {
    console.log(phone);
    // step 2 create the div
    const createTheDiv = document.createElement('div');
    // step 3 give them input 
    createTheDiv.classList = `card  bg-base-100 shadow-xl`;
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

// find the search item 
const searchField = () => {
  const searchField = document.getElementById('search-field');
  const searchText1 = searchField.value;
  console.log(searchText1)
  useData(searchText1);
  
  
}
const addMoreButton = () => {
  const my2ndSearchBar = document.getElementById('my-2nd-search');
  const searchText2 = my2ndSearchBar.value;
  useData(searchText2);
}


const useData = async (searchText='12') => {
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
// show all button 
   const showAllButton = document.getElementById('show-all-container');
  if (data.length > 9) {
    showAllButton.classList.remove('hidden');
  }
   else {
    showAllButton.classList.add('hidden');
    }


  // limit of your phone 
  data = data.slice(0, 10);
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
              <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>

          </div>`
    // append the child 
    findDivContainer.appendChild(createTheDiv);
    
    
  });
  addLoading(false);
  
  
}

// find the search item 
const searchField = () => {
  const searchField = document.getElementById('search-field');
  const searchText1 = searchField.value;
  addLoading(true);
  console.log(searchText1)
  useData(searchText1);
  
  
}
// // recap search bar
// const addMoreButton = () => {
//   const my2ndSearchBar = document.getElementById('my-2nd-search');
//   const searchText2 = my2ndSearchBar.value;
//   addLoading(true);
//   useData(searchText2);
// }
const addLoading = (isLoading) => {
  const findLoadingBar = document.getElementById('loading-bar');
  if (isLoading) {
    findLoadingBar.classList.remove('hidden');
  }
  else {
    findLoadingBar.classList.add('hidden');
  }
}
const showDetails = async (id) => {
  console.log('show details', id)
  // find the data use dynamic
  const response =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await response.json();
  // console.log(data);
  showPhoneDetails(data);
  
}

const showPhoneDetails = (phone) => {
  my_modal_5.showModal()
  console.log(phone);
  const image = document.getElementById('image-details');
  image.innerHTML = `
  <img src="${phone?.data?.image}" alt="" >
  <p class="text-center">${phone?.data?.brand}</p>
  <P class="text-center">${phone?.data?.mainFeatures?.storage}</P>
  `
  
}

useData();

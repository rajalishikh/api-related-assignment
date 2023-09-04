const useData = async () => {
  const loadData = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
  const response = await loadData.json();
  console.log(response.data);
}

useData();
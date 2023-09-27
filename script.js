window.addEventListener("DOMContentLoaded", function () {
    const newsList = document.getElementById("news-list");
    const apiUrl = "https://newsapi.org/v2/top-headlines?country=in";
    const apiKey = "1832f67352924084a5bda22d3dbe432f";
    const api = `${apiUrl}&apiKey=${apiKey}`;
  
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          data.articles.forEach((article) => {
            const articleElement = document.createElement("div");
            articleElement.innerHTML = `
            <section class="text-gray-600 body-font ">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">${article.title}
      </h1>
      <p class="mb-8 leading-relaxed">${article.description}</p>
      <div class="flex justify-center">
      <a href="${article.url}" class="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 ease-in-out" target="_blank">
      Read More
    </a>
    
       </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border-8 rounded	 border-sky-400">
      <img class="object-cover object-center rounded" alt="hero" src="${article.urlToImage}">
    </div>
  </div>
</section>
            `;
            newsList.appendChild(articleElement);
          });
        } else {
          console.error("No articles found in the API response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  

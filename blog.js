const post = [
    {
      "userId": 1,
      "id": 1,
       "date":"2011-10-05T14:48:00.000",
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
       "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 1,
      "id": 2,
       "date":"2011-11-05T16:28:00.000",
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
       "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 1,
      "id": 3,
       "date":"2011-10-05T14:48:00.000",
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
       "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 1,
      "id": 4,
       "date":"2011-10-05T14:48:00.000",
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
       "photo": "https://via.placeholder.com/150/92c952"
    }
  ]



//fonction pour formater la date
const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true, 
    };

    const date = new Date(dateString);

    return date.toLocaleString('en-US', options);
};

//fonction pour afficher toutes les postes
const displayAlllPosts = () => {

  //afichage des data bruts
const divApi = document.getElementById("divApi");
const codeElement = document.createElement("code");

const jsonString = JSON.stringify(post, null, 2); 
codeElement.textContent = jsonString;
divApi.appendChild(codeElement);

//divblog.data
const divBlog = document.getElementById("divBlog");
  post.forEach((item, index) => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('data');
    const divArticle = document.createElement('div');
    divArticle.classList.add('right');



  const image = document.createElement("img");
  image.classList.add("img");
  image.src = item.photo;
  mainDiv.appendChild(image);

  const title = document.createElement("h2");
  title.classList.add('right1');
  title.textContent = item.title;
  divArticle.appendChild(title);

  const date = document.createElement("h4");
  date.classList.add('right2');
  date.textContent = formatDate(item.date);
  divArticle.appendChild(date);

  const content = document.createElement("h3");
  content.classList.add('right3');
  content.textContent = item.body;
  divArticle.appendChild(content);

  mainDiv.appendChild(divArticle)
  divBlog.appendChild(mainDiv);
});
}
//affichage de toutes les postes
displayAlllPosts();


//handle select du blog
const select = document.querySelector('#select');
for (let i = 0; i <= post.length; i++) {
  select.innerHTML  += `<option>${i}</option>`;
}

const h2Element = document.createElement('h2');
h2Element.classList.add('showOf');
h2Element.textContent = ` of ${post.length}`;

select.parentNode.insertBefore(h2Element, select.nextSibling);
h2Element.style.fontSize = '20px'; 

const btnShowPosts = document.getElementById('btnShowPosts');


btnShowPosts.addEventListener('click', () => {
  const selectedValue = parseInt(select.value);

  divBlog.innerHTML = '';
  divApi.innerHTML = '';

  for (let i = 0; i < selectedValue && i < post.length; i++) {

    //pour les postes
    const item = post[i];
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('data');
    const divArticle = document.createElement('div');
    divArticle.classList.add('right');
    
    const image = document.createElement('img');
    image.classList.add("img");
    image.src = item.photo;
    mainDiv.appendChild(image);
    
    const title = document.createElement('h2');
    title.classList.add('right1');
    title.textContent = item.title;
    divArticle.appendChild(title);
    
    const date = document.createElement('h4');
    date.classList.add('right2');
    date.textContent = formatDate(item.date);
    divArticle.appendChild(date);
    
    const content = document.createElement('h3');
    content.classList.add('right3');
    content.textContent = item.body;
    divArticle.appendChild(content);

    mainDiv.appendChild(divArticle);
    
    divBlog.appendChild(mainDiv);
    
    
  // Pour le code brut
  const divCode = document.createElement('div');
  divCode.classList.add('api');

  const codeElement = document.createElement("code");
  const jsonString = JSON.stringify(item, null, 2);
  codeElement.textContent = jsonString;
  divCode.appendChild(codeElement);
  
  divApi.appendChild(divCode);
  }
});

//handle bouton reset
const reset = document.getElementById("reset");
reset.addEventListener('click',() => {
  
  divBlog.innerHTML = '';
  divApi.innerHTML = '';
  displayAlllPosts()
}
 )


























/* const listings=[
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
]; */
  




const domElements = {
  jobsContainer : document.querySelector('.jobs-container'),
  filterContainer : document.querySelector('.filter-container'),
  filterButtonsContainer : document.querySelector('.filter-buttons-container'),
  clearContainer : document.querySelector('.clear-button-container .clear-btn')
}

//Fetching data from JSON Function
const fetchData = async()=>{
  const response = await fetch('/data.json');
  const data = await response.json();

  return data;
}

//Make cards Function
const makeCards = (listing)=>{

  return  `
    <section id='item-container-id' class="item-container ${listing.featured==true?`border-left-green`:''} ">      
      <div class="item-container-inner">
        <div class="single-item-top">
          <div class="profile-pic">
            <img src=${listing.logo} alt=${listing.company}>
          </div>
          <div class="item-name-wrapper">
            <div class="item-name-container">
              <div class="item-name">
                <p>${listing.company}</p>
              </div>
              <div class="item-tag-container">
                <ul>
                  ${listing.new==true? `<li class="new">NEW!</li>`:''}                    
                  ${listing.featured==true? `<li class="featured">FEATURED</li>`:''}                    
                </ul>
              </div>
            </div>
            <div class="item-job-title">
              <p>${listing.position}</p>
            </div>
            <div class="item-desc">
              <ul>
                <li>${listing.postedAt}</li>
                <li>${listing.contract}</li>
                <li>${listing.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <hr class='l-none m-block'>
        <div class="single-item-bottom">
          <div class="item-tags">
            <ul>
              <li class="filter">${listing.role}</li>
              <li class="filter">${listing.level}</li>
              <li class="filter">${listing.languages[0]}</li>
              ${listing.languages[1]? `<li class="filter">${listing.languages[1]}</li>`:''}
              ${listing.languages[2]? `<li class="filter">${listing.languages[2]}</li>`:''}
              ${listing.tools[0]? `<li class="filter">${listing.tools[0]}</li>`:''}
              ${listing.tools[1]? `<li class="filter">${listing.tools[1]}</li>`:''}
            </ul>
          </div>
        </div>
      </div>
    </section>`;
}

//Show cards Function
const showCards = ()=>{
  let cards='';
  fetchData().then((data)=>{
    data.forEach((text)=>{
      cards += makeCards(text);
      domElements.jobsContainer.innerHTML=cards;
    });
  });
};

window.addEventListener('DOMContentLoaded', showCards);

//Display Search Bar Function
const displaySearch = (e)=>{
  let element = e.target;
  if(element.classList.contains('filter')){
    domElements.filterContainer.classList.remove('hide');
    displayFilter(element);
  }
}

let filterArray=[];


//Display Filter on Search Function
const displayFilter = (el)=>{
  let filter="";
  if(! filterArray.includes(el.textContent)){
    filterArray.push(el.textContent);
  }

  filterArray.forEach((element)=>{
    filter +=`<div class="filter-btn-item">
                <button class="filter-btn" data-id="${element}">${element}</button>
                <button class="filter-btn-remove"><img src="images/icon-remove.svg" alt="remove-filter-button" class="filter-remove-img"></button>
              </div>`;
    
    domElements.filterButtonsContainer.innerHTML=filter;
    filterJobs();
  })
}

//Update Job List by adding filters Function
const filterJobs = (data)=>{
  if(filterArray.length !== 0){
    let cards="";
    fetchData().then((data)=>{
      data.forEach((text)=>{
        if(validJobs(text)){
          cards += makeCards(text);
          domElements.jobsContainer.innerHTML = cards;
        }
      })
    })
  }
  else{
    domElements.filterContainer.classList.add('hide');
    showCards(data);
  }
}


//Jobs are valid or not based on filters
const validJobs = (item)=>{
  let isValid = true;
  filterArray.forEach(elem=>{
    if(item.role !== elem && item.level !== elem && !item.languages.includes(elem) && !item.tools.includes(elem)){
      isValid=false;
    }
  })
  return isValid;
}

//Remove filter
const removeFilter = (e)=>{
  let element=e.target;
  if(element.classList.contains('filter-remove-img')){
    const elementToRemove = element.parentElement.parentElement;
    let index = filterArray.indexOf(elementToRemove.textContent.split(" ")[0].trim());
    filterArray.splice(index, 1);
    elementToRemove.remove();
    filterJobs();
  }
}

const clearSearch = ()=>{
  domElements.filterContainer.classList.add('hide');
  filterArray=[];
  filterJobs();
}











domElements.jobsContainer.addEventListener('click', displaySearch)
domElements.filterButtonsContainer.addEventListener('click', removeFilter)
domElements.clearContainer.addEventListener('click', clearSearch)














































































/* const itemWrapper = document.querySelector('.item-container-wrapper');
const filterBtnContainer = document.querySelector('.filter-buttons-container');
const filterContainer = document.querySelector('.filter-container');

  
  
//load items
window.addEventListener('DOMContentLoaded', ()=>{
  displayListingItems(listings)
});
  
  
function displayListingItems(listingItems){
    
  let displayListing =  listingItems.map(listing=>{

    return  `<section id='item-container-id' class="item-container ${listing.featured==true?`border-left-green`:''} ">      
    <div class="item-container-inner">
      <div class="single-item-top">
        <div class="profile-pic">
          <img src=${listing.logo} alt=${listing.company}>
        </div>
        <div class="item-name-wrapper">
          <div class="item-name-container">
            <div class="item-name">
              <p>${listing.company}</p>
            </div>
            <div class="item-tag-container">
              <ul>
                ${listing.new==true? `<li class="new">NEW!</li>`:''}                    
                ${listing.featured==true? `<li class="featured">FEATURED</li>`:''}                    
              </ul>
            </div>
          </div>
          <div class="item-job-title">
            <p>${listing.position}</p>
          </div>
          <div class="item-desc">
            <ul>
              <li>${listing.postedAt}</li>
              <li>${listing.contract}</li>
              <li>${listing.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <hr class='l-none m-block'>
      <div class="single-item-bottom">
        <div class="item-tags">
          <ul>
            <li data-id=${listing.role}>${listing.role}</li>
            <li data-id=${listing.level}>${listing.level}</li>
            <li data-id=${listing.languages[0]}>${listing.languages[0]}</li>
            ${listing.languages[1]? `<li data-id=${listing.languages[1]}>${listing.languages[1]}</li>`:''}
            ${listing.languages[2]? `<li data-id=${listing.languages[2]}>${listing.languages[2]}</li>`:''}
            ${listing.tools[0]? `<li data-id=${listing.tools[0]}>${listing.tools[0]}</li>`:''}
            ${listing.tools[1]? `<li data-id=${listing.tools[1]}>${listing.tools[1]}</li>`:''}
          </ul>
        </div>
      </div>
    </div>
  </section>`;
  })
  


  displayListing = displayListing.join("");
  
  itemWrapper.innerHTML = displayListing;

  const itemContainer = document.querySelectorAll('.item-container');

  itemContainer.forEach(item=>{
    let filterButton = item.querySelectorAll('.item-tags ul li')
    filterButton.forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        
        
        let button=`<div class="filter-btn-item">
                      <button class="filter-btn" data-id="${btn.textContent}">${btn.textContent}</button>
                      <button class="filter-btn-remove"><img src="images/icon-remove.svg" alt="remove-filter-button"></button>
                    </div>`;
        
        filterBtnContainer.innerHTML+=button;
        
        const role = e.currentTarget.dataset.id;
        console.log(role);
      });
    })
  })
}
 */

/* filterBtns.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const role = e.currentTarget.dataset.id;
    const listingCategory = listings.filter((listingItem)=>{
      //console.log(listingItem.company);
      if(listingItem.role===role){
        return listingItem;
      }
      });
      displayListingItems(listingCategory);        
    });
}); */




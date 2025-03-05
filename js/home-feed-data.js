let events = homeDdata.events;
let services = homeDdata.services;
let news = homeDdata.news;

const eventsContainer = document.getElementById('outstanding-events');
const servicesContainer = document.getElementById('services-container');
const newsContainer = document.getElementById('news-container');

let eventsContainerInnerHTMl = '';
let servicesContainerInnerHTMl = '';
let newsContainerInnerHTMl = '';

function truncateText(text) {
  if (typeof text !== 'string' || text.length <= 30) {
    return text;
  }
  return text.substring(0, 30) + '...';
}

news.forEach(e => {
  newsContainerInnerHTMl += `
  <div class="col-md-6 col-sm-6 col-12 mb-3">
    <div class="card">
      <img class="card-img-top news-thumbnail" style="aspect-ratio: 1; object-fit: cover;" src="${e.thumbnail}" alt="${e.label}">
      <div class="card-body">
        <h5 class="card-title text-dark">Tin tức</h5>
        <p class="card-text text-dark">${truncateText(e.label)}</p>
        <a href="news.html?news-id=${e.id}" class="btn btn-primary">Chi tiết</a>
      </div>
    </div>
  </div>
  `;
});

services.forEach(e => {
  servicesContainerInnerHTMl += `
  <div class="col-lg-3 col-md-6 text-center">
    <div class="mt-5">
      <div class="mb-2"><i class="${e.icon} fs-1 text-primary"></i></div>
      <h3 class="h4 mb-2">${e.label}</h3>
      <p class="text-muted mb-0">
        ${e.content}
      </p>
    </div>
  </div>
  `;
});

events.forEach(e => {
  eventsContainerInnerHTMl += `
  <div class="col-lg-4 col-sm-6">
    <a class="portfolio-box" href="${e.image}" title="${e.name}">
      <img class="img-fluid" src="${e.image}" alt="${e.name}" />
      <div class="portfolio-box-caption">
        <div class="project-category text-white-50">Sự kiện</div>
        <div class="project-name">${e.name}</div>
      </div>
    </a>
  </div>
  `;
});
servicesContainer.innerHTML = servicesContainerInnerHTMl;
eventsContainer.innerHTML = eventsContainerInnerHTMl;
newsContainer.innerHTML = newsContainerInnerHTMl;

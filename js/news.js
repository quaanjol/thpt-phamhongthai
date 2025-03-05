let params = new URLSearchParams(document.location.search);
let newsId = params.get("news-id");
let thisNews = homeDdata.news.find((n) => n.id == newsId);
if (!newsId || !thisNews) {
  document.location.href = "index.html";
}
document.getElementById('news-masthead').style.backgroundImage = `url('${thisNews.thumbnail}')`;
document.getElementById('news-heading').textContent = thisNews.title;
document.getElementById('news-content').innerHTML = thisNews.content;

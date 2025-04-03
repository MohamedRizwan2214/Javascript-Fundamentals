let page = 1;
const contentContainer = document.getElementById("content");
const loader = document.getElementById("loader");

async function fetchPosts() {
  loader.style.display = "block";

  return new Promise((resolve) => {
    setTimeout(() => {
      let posts = "";
      for (let i = 1; i <= 5; i++) {
        posts += `<div class="post"><h3>Post ${
          page * 5 + i
        }</h3><p>This is some sample content.</p></div>`;
      }
      resolve(posts);
    }, 1500);
  });
}

async function loadMoreContent() {
  const newContent = await fetchPosts();
  contentContainer.innerHTML += newContent;
  loader.style.display = "none";
  // console.log(page)
  page++;
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // console.log(document.documentElement.clientHeight-document.documentElement.scrollHeight+document.documentElement.scrollTop+10);

  if (scrollTop + clientHeight >= scrollHeight - 10) {
    loadMoreContent();
  }
}

window.addEventListener("scroll", handleScroll);

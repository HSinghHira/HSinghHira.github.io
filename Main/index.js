var currentPage = 1; // Keep track of the current page

function getPageFromURL() {
  var path = window.location.pathname;
  var page = parseInt(path.split('/').filter(Boolean).pop(), 10);
  return isNaN(page) ? 1 : page;
}

function updatePageURL(page) {
  var newPath = '/' + page + '/';
  window.history.pushState({ page: page }, '', newPath);
}

function hsinghhira(e) {
    var contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // Clear previous content

  for (var t = 0; t < e.feed.entry.length; t++) {
    // Display the posts for the current page
    if (t >= (currentPage - 1) * 5 && t < currentPage * 5) {
      var postUrl = '';
      for (
        var n = 0;
        n < e.feed.entry[t].link.length;
        n++
      ) {
        if (e.feed.entry[t].link[n].rel === "alternate") {
          postUrl = e.feed.entry[t].link[n].href;
          break;
        }
      }

      // Extract the thumbnail image URL
      var thumbnail = '';
      if (e.feed.entry[t].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)) {
        var youtube_id = e.feed.entry[t].content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
        if (youtube_id.length == 11) {
          thumbnail = "//img.youtube.com/vi/" + youtube_id + "/0.jpg";
        }
      } else if (e.feed.entry[t].media$thumbnail) {
        var thumbUrl = e.feed.entry[t].media$thumbnail.url;
        thumbnail = thumbUrl.replace("/s72-c/", "/s200/");
      } else if (e.feed.entry[t].content.$t.match(/src="(.+?\.(jpg|gif|png))"/)) {
        thumbnail = e.feed.entry[t].content.$t.match(/src="(.+?\.(jpg|gif|png))"/)[1];
      } else {
        thumbnail = "https://github.com/hsinghhira.png";
      }

      // Extract and trim content to create a snippet
      var fullContent = e.feed.entry[t].content.$t || '';
      var snippet = fullContent.replace(/(<([^>]+)>)/ig, "").substring(0, 100) + '...';

      var i = `
      <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="${postUrl}">
        <div class="aspect-w-16 aspect-h-11">
          <img class="w-full object-cover rounded-xl" src="${thumbnail}" alt="${e.feed.entry[t].title.$t}">
        </div>
        <div class="my-6">
          <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            ${e.feed.entry[t].title.$t}
          </h3>
          <p class="mt-5 text-gray-600 dark:text-neutral-400">
            ${snippet}
          </p>
        </div>
        <div class="mt-auto flex items-center gap-x-3">
          <img class="size-8 rounded-full" src="https://github.com/hsinghhira.png?size=200" alt="Harman Singh Hira">
          <div>
            <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Harman Singh Hira</h5>
          </div>
        </div>
      </a>
      `;
      var div = document.createElement('div');
      div.innerHTML = i;
      contentDiv.appendChild(div);
    }
  }

  // Display the "Next Page" option if there are more posts
  var nextPageLink = document.getElementById('nextPageLink');
  if (currentPage * 5 < e.feed.entry.length) {
    nextPageLink.style.display = '';
  } else {
    nextPageLink.style.display = 'none';
  }
}

function loadNextPage() {
  currentPage++; // Increment the current page
  updatePageURL(currentPage);
  loadPosts();
}

function loadPosts() {
  var script = document.createElement('script');
  script.src = 'https://dfgfd767fgfddsfgjh.blogspot.com/feeds/posts/default/-/Projects?max-results=600&alt=json-in-script&callback=hsinghhira';
  document.body.appendChild(script);
}

window.onpopstate = function (event) {
  if (event.state && event.state.page) {
    currentPage = event.state.page;
  } else {
    currentPage = getPageFromURL();
  }
  loadPosts();
};

// Initial load
currentPage = getPageFromURL();
loadPosts();

document.addEventListener('DOMContentLoaded', () => {

  const element = document.getElementById("ContactForm1_contact-form-submit");
  element.classList.add("w-full", "py-3", "px-4", "inline-flex", "justify-center", "items-center", "gap-x-2", "text-sm", "font-semibold", "rounded-lg", "border", "border-transparent", "bg-blue-600", "text-white", "hover:bg-blue-700", "disabled:opacity-50", "disabled:pointer-events-none");
  
      const postBodyDiv = document.getElementById('postbody');
      
      // Add classes to all img elements
      const images = postBodyDiv.getElementsByTagName('img');
      for (let img of images) {
          img.classList.add('w-full', 'object-cover', 'rounded-xl');
      }
      
      // Add classes to all p elements
      const paragraphs = postBodyDiv.getElementsByTagName('p');
      for (let p of paragraphs) {
          p.classList.add('text-lg', 'pb-6', 'text-gray-800', 'dark:text-neutral-200');
      }
  });
  
    document.addEventListener('DOMContentLoaded', () => {
      fetch('work.json')
          .then(response => response.json())
          .then(data => {
              const workExperienceContainer = document.getElementById('work');
              data.work.forEach(job => {
                  const jobElement = document.createElement('div');
                  jobElement.className = 'work-item';
                  const startDate = new Date(job.startDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
                  const endDate = job.endDate ? new Date(job.endDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Current';
                  const imageUrl = job.image ? job.image : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgW2ptfHYLpVA8Fssjwi0Oz9tqGgoRbyN2iH8M_pjdqJQHYHYenOuGmj2IUfauVSwfh10QbfhUxjrEes5wf09jc8TV9KV37_gaYMELYRRgjX79WAafStnhJI-kHpWwjmagogMXmn-eWMRYHBvVQcG5kMwo9E3Ot_vLZMbEp4h4PK3n1C3Gm6JbiGVnMiU/s1600/noimage.png'; // Use job.image if available, otherwise use 'noimage.png'
                  jobElement.innerHTML=`<div class="flex gap-x-3"><div><div class="relative z-10 w-14 flex justify-center items-center"><img class="w-14 h-14 p-1 rounded-full ring-2" src="${imageUrl}" /></div></div><div class="grow pb-8 px-2"><h3 class="flex gap-x-1.5 text-lg font-semibold text-gray-800 dark:text-white">${job.position} at ${job.company}</h3><p class="mt-1 text-sm font-medium text-gray-400 dark:text-neutral-500">${startDate} - ${endDate} / ${job.term}</p><p class="text-md py-2 font-medium text-gray-800 dark:text-neutral-200">${job.summary}</p></div></div>`;
                  workExperienceContainer.appendChild(jobElement);
              });
          })
          .catch(error => console.error('Error fetching the work experience data:', error));
  });
  document.addEventListener('DOMContentLoaded', () => {
      fetch('edu.json')
          .then(response => response.json())
          .then(data => {
              const workExperienceContainer = document.getElementById('edu');
              data.education.forEach(edu => {
                  const eduElement = document.createElement('div');
                  eduElement.className = 'edu-item';
                  const startDate = new Date(edu.startDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
                  const endDate = edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Current';
                  const imageUrl = edu.image ? edu.image : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgW2ptfHYLpVA8Fssjwi0Oz9tqGgoRbyN2iH8M_pjdqJQHYHYenOuGmj2IUfauVSwfh10QbfhUxjrEes5wf09jc8TV9KV37_gaYMELYRRgjX79WAafStnhJI-kHpWwjmagogMXmn-eWMRYHBvVQcG5kMwo9E3Ot_vLZMbEp4h4PK3n1C3Gm6JbiGVnMiU/s1600/noimage.png'; // Fixed typo here
                  eduElement.innerHTML = `<div class="flex gap-x-3"><div><div class="relative z-10 w-14 flex justify-center items-center"><img class="w-14 h-14 p-1 rounded-full ring-2" src="${imageUrl}" /></div></div><div class="grow pb-8 px-2"><h3 class="flex gap-x-1.5 text-lg font-semibold text-gray-800 dark:text-white">${edu.institution}</h3><p class="mt-1 text-sm font-medium text-gray-400 dark:text-neutral-500">${startDate} - ${endDate}</p><p class="text-md py-2 font-medium text-gray-800 dark:text-neutral-200">${edu.studyType}</p></div></div>`;
                  workExperienceContainer.appendChild(eduElement);
              });
          })
          .catch(error => console.error('Error fetching the education data:', error));
  });
  
  var currentPage = 1; // Keep track of the current page
  
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
      loadPosts();
  }
  
  function loadPosts() {
      var script = document.createElement('script');
      script.src = 'https://me.hsinghhira.me/feeds/posts/default/?max-results=600&alt=json-in-script&callback=hsinghhira';
      document.body.appendChild(script);
  }
  
  window.onpopstate = function (event) {
      if (event.state && event.state.page) {
          currentPage = event.state.page;
      } else {
          currentPage = 1;
      }
      loadPosts();
  };
  
  // Initial load
  currentPage = 1;
  loadPosts();
  
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
  } else {
      themeToggleDarkIcon.classList.remove('hidden');
  }
  
  var themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', function() {
  
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');
  
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
  
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
      
  });

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

// Search Engine URLs mapping
const searchEngines = {
  youtube: {
    name: 'YouTube',
    url: 'https://www.youtube.com/results?search_query='
  },
  google: {
    name: 'Google',
    url: 'https://www.google.com/search?q='
  },
  tiktok: {
    name: 'TikTok',
    url: 'https://www.tiktok.com/search?q='
  },
  ig: {
    name: 'Instagram',
    url: 'https://www.instagram.com/explore/tags/'
  }
};

// Get DOM elements
const searchForm = document.getElementById('search-form');
const searchQuery = document.getElementById('search-query');
const searchEngineSelect = document.getElementById('search-engine');


/**
 * Handle search form submission
 * @param {Event} event - Form submission event
 */
function handleSearch(event) {
  event.preventDefault();

  const query = searchQuery.value.trim();
  const selectedEngine = searchEngineSelect.value;

  // Validate query
  if (!query) {
    alert('Please enter a search query');
    return;
  }

  // Get search engine URL
  const engine = searchEngines[selectedEngine];
  if (!engine) {
    alert('Invalid search engine selected');
    return;
  }

  // Encode query for URL safety
  const encodedQuery = encodeURIComponent(query);
  
  // Build search URL (Instagram has different format)
  let searchUrl;
  if (selectedEngine === 'ig') {
    searchUrl = engine.url + encodedQuery + '/';
  } else {
    searchUrl = engine.url + encodedQuery;
  }

  // Open search in new tab
  window.open(searchUrl, '_blank');

  // Optional: Clear input after search
  searchQuery.value = '';
  searchQuery.focus();
}

/**
 * Update search engine on selection change
 */
function updateSearchEngine() {
  const selectedEngine = searchEngineSelect.value;
  const engine = searchEngines[selectedEngine];
  console.log(`Search engine changed to: ${engine.name}`);
}

// Event Listeners
searchEngineSelect.addEventListener('change', updateSearchEngine);

// Optional: Allow Enter key to trigger search even on input
searchQuery.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleSearch(event);
  }
});

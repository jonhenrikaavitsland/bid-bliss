export function setupScrollListener(renderNextBatch, listings) {
  window.addEventListener('scroll', async () => {
    let state = JSON.parse(sessionStorage.getItem('listingState'));
    let batchSize = parseInt(sessionStorage.getItem('batchSize'), 10);

    const { currentIndex } = state;

    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if we are at the bottom of the page
    if (scrollPosition >= documentHeight - 10 && currentIndex < listings.length) {
      console.log('Reached the bottom of the page. Loading next batch...');

      const overlay = document.getElementById('overlay');
      console.log('overlay:', overlay);

      // Show overlay
      overlay.classList.remove('hidden');

      // Wait for 2 seconds before rendering the next batch
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Render the next batch of 15 cards
      renderNextBatch(state, listings, batchSize);

      // Hide overlay
      overlay.classList.add('hidden');
    }
  });
}

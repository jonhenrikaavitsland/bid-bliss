export function setupScrollListener(renderNextBatch, overlay, allListings, batchSize, state) {
  window.addEventListener('scroll', async () => {
    const { currentIndex } = state;

    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    console.log('Scroll position:', scrollPosition);
    console.log('Document height:', documentHeight);
    console.log('Current index:', currentIndex);
    console.log('Total listings:', allListings.length);

    // Check if we are at the bottom of the page
    if (scrollPosition >= documentHeight - 10 && currentIndex < allListings.length) {
      console.log('Reached the bottom of the page. Loading next batch...');

      // Show overlay
      overlay.classList.remove('hidden');

      // Wait for 2 seconds before rendering the next batch
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Render the next batch of 15 cards
      renderNextBatch(allListings, currentIndex, batchSize);

      // Update the currentIndex globally so it reflects the new batch
      state.currentIndex += batchSize;

      // Hide overlay
      overlay.classList.add('hidden');
    }
  });
}

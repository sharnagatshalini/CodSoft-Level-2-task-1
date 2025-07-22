const searchInput = document.getElementById('searchInput');
    const jobList = document.getElementById('jobList');
    const jobCards = jobList.getElementsByClassName('job-card');

    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      Array.from(jobCards).forEach(card => {
        const title = card.querySelector('.job-title').textContent.toLowerCase();
        card.style.display = title.includes(filter) ? 'block' : 'none';
      });
    });

    function applyJob(title) {
      alert(`You have applied for the position of ${title}. Thank you!`);
    }
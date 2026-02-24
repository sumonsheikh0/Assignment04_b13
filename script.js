let interviewCount = [];
let rejectedCount = [];

const allNumber = document.getElementById('all-number');
const interviewNumber = document.getElementById('interview-number');
const rejectedNumber = document.getElementById('rejected-number');

const allJobSection = document.getElementById('jobs');
const emptyMessage = document.getElementById('empty-message');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');



function updateCounter() {
  const totalJobs = document.querySelectorAll('.job-card').length;

  allNumber.innerText = totalJobs;
  interviewNumber.innerText = interviewCount.length;
  rejectedNumber.innerText = rejectedCount.length;
}



function checkEmpty() {
  const totalJobs = document.querySelectorAll('.job-card').length;

  if (totalJobs === 0) {
    emptyMessage.classList.remove('hidden');
  } else {
    emptyMessage.classList.add('hidden');
  }
}



function toggleStyle(id) {
  allFilterBtn.classList.remove('bg-blue-500', 'text-white');
  interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
  rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

  document.getElementById(id).classList.add('bg-blue-500', 'text-white');
}



function filterJobs(type) {

  const cards = document.querySelectorAll('.job-card');

  cards.forEach(card => {

    const status = card.querySelector('.job-staus').innerText;

    if (type === "all") {
      card.style.display = "flex";
    }
    else if (type === "interview") {
      card.style.display = status === "INTERVIEW" ? "flex" : "none";
    }
    else if (type === "rejected") {
      card.style.display = status === "REJECTED" ? "flex" : "none";
    }

  });

}



allFilterBtn.addEventListener('click', () => {
  toggleStyle('all-filter-btn');
  filterJobs("all");
});

interviewFilterBtn.addEventListener('click', () => {
  toggleStyle('interview-filter-btn');
  filterJobs("interview");
});

rejectedFilterBtn.addEventListener('click', () => {
  toggleStyle('rejected-filter-btn');
  filterJobs("rejected");
});



allJobSection.addEventListener('click', function (event) {

  const card = event.target.closest('.job-card');
  if (!card) return;

  const jobHeading = card.querySelector('.job-heading').innerText;
  const statusBtn = card.querySelector('.job-staus');

 
  if (event.target.classList.contains('interview-btn')) {

    if (!interviewCount.includes(jobHeading)) {
      interviewCount.push(jobHeading);
      rejectedCount = rejectedCount.filter(item => item !== jobHeading);
    }

    statusBtn.innerText = "INTERVIEW";
    statusBtn.className = "job-staus bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-md";
  }

  
  if (event.target.classList.contains('rejected-btn')) {

    if (!rejectedCount.includes(jobHeading)) {
      rejectedCount.push(jobHeading);
      interviewCount = interviewCount.filter(item => item !== jobHeading);
    }

    statusBtn.innerText = "REJECTED";
    statusBtn.className = "job-staus bg-red-100 text-red-700 text-sm font-medium px-4 py-1 rounded-md";
  }

  
  if (event.target.innerText === "delete") {

    interviewCount = interviewCount.filter(item => item !== jobHeading);
    rejectedCount = rejectedCount.filter(item => item !== jobHeading);

    card.remove();
  }

  updateCounter();
  checkEmpty();
});



updateCounter();
checkEmpty();
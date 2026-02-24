let interviewCount = [];
let rejectedCount = [];
let all = document.getElementById('all-number');
let interview = document.getElementById('interview-number');
let rejected = document.getElementById('rejected-number');

const allJobSection = document.getElementById('jobs');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


function calculatAllJobs(){
  all.innerText =allJobSection.children.length
  interview.innerText =interviewCount.length
  rejected.innerText = rejectedCount.length

}

calculatAllJobs()

function toggleStyle(id){
  allFilterBtn.classList.remove('bg-blue-500', 'text-white')
  interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
  rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

  const selected = document.getElementById(id);
  
  selected.classList.add('bg-blue-500', 'text-white')


}
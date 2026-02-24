let all = document.getElementById('all-number');
let interview = document.getElementById('interview-number');
let rejected = document.getElementById('rejected-number');

const allJobSection = document.getElementById('jobs');


function calculatAllJobs(){
  all.innerText =allJobSection.children.length
}

calculatAllJobs()

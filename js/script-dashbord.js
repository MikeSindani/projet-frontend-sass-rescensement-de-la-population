/* debut de side bar menu hamberger */ 

const hamburger = document.querySelector(".hamburger")
const siderbar = document.querySelector(".sidebar")
const main = document.querySelector("main")

hamburger.addEventListener("click",()=>{
   siderbar.classList.toggle("close-sidebar-mobi")
   main.classList.toggle("close-main-mobi")
   siderbar.classList.toggle("close-sidebar")
   main.classList.toggle("close-main")
   hamburger.classList.toggle("is-active")
})
/*! code pour change le menu hamberger selon les tailles d'ecrans */ 
function myFunction(x) {
    if (x.matches) { // If media query matches
        hamburger.classList.remove("is-active")
    } else {
        hamburger.classList.add("is-active")
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

/*! code pour gerer les submenu du sidebar */ 
const home_btn = document.querySelector("#btn_home")
const section_home = document.querySelector("#section_home")
const section_stats = document.querySelector("#section_stats")
const sub_btn_stats = document.querySelector(".sub-btn-1")
const subMenuStats = document.querySelector(".sub-menu-1")
const sub_btn_agent = document.querySelector(".sub-btn-2")
const subMenuAgent = document.querySelector(".sub-menu-2")
const dropdown = document.querySelector(".dropdown")
home_btn.addEventListener("click",()=>{
   section_home.style.display = "grid"
   section_stats.style.display = "none"
   home_btn.classList.add("bg-primary-color")
   sub_btn_stats.classList.remove("bg-primary-color")
})
sub_btn_stats.addEventListener("click",()=>{
    subMenuStats.classList.toggle("sub-menu-1")
    dropdown.classList.toggle("rotate")
    home_btn.classList.remove("bg-primary-color")
    sub_btn_stats.classList.add("bg-primary-color")
    section_home.style.display = "none"
    section_stats.style.display = "grid"


})
sub_btn_agent.addEventListener("click",()=>{
    subMenuAgent .classList.toggle("sub-menu-2")
    dropdown.classList.toggle("rotate")
    sub_btn_agent.classList.toggle("bg-secondary-color")

})
/* fin de side bar menu hamberger */ 
/* debut du code pour le message */ 
const close_msg = document.querySelector(".close-msg")
const msg = document.querySelector(".message")
const header = document.querySelector("header")
close_msg.addEventListener("click",()=>{
   msg.style.display = "none"
   header.classList.toggle("close-msg-header")
})
/* fin  du code pour le message */ 
/* CODE DE CHART */
const ctx = document.getElementById('Chart-by-Commune');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Katuba', 'Lubumbashi', 'Kambeba', 'Annexe', 'Rwashi', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ['#3098FF']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx1 = document.getElementById('Chart-by-humain');

  new Chart(ctx1, {
    type: 'pie',
    data: {
      labels: ['Homme', 'Femme'],
      datasets: [{
        label: 'Nombre des hommes  et des femmes',
        data: [120000, 190000],
        borderWidth: 1,
        backgroundColor: ['#3098FF','#F8DB34']
        
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  const ctx3 = document.getElementById('Chart-by-humain-2');

  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['Homme', 'Femme'],
      datasets: [{
        data: [120000, 190000],
        borderWidth: 1,
        backgroundColor: ['#3098FF','#F8DB34']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx4 = document.getElementById('Chart-by-stats');

  new Chart(ctx4, {
    type: 'pie',
    data: {
      labels: ['Homme', 'Femme'],
      datasets: [{
        data: [120000, 190000],
        borderWidth: 1,
        backgroundColor: ['#3098FF','#F8DB34']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
 




function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
setTimeout(()=>{
   
},3000)


/* ####################################################################*/
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
/* BOUTON */ 
const btn_home = document.querySelector("#btn_home")
const sub_btn_stats = document.querySelector(".sub-btn-1")
const subMenuStats = document.querySelector(".sub-menu-1")
const sub_btn_agent = document.querySelector(".sub-btn-2")
const subMenuAgent = document.querySelector(".sub-menu-2")
const dropdown = document.querySelector(".dropdown")
var btn_stats_population = document.querySelector("#btn_stats_population")
var btn_stats_population_2 = document.querySelector("#btn_stats_population_2")
const btn_Suivi_de_Rescensement = document.querySelector("#btn_Suivi_de_Rescensement")
/* SECTION */ 
const section_home = document.querySelector("#section_home")
const section_stats = document.querySelector("#section_stats")
const section_stats_element = document.querySelector("#section_stats_element")
const section_Suivi_de_Rescensement = document.querySelector("#section_Suivi_de_Rescensement")
// FONCTION SECTION 
function function_section(v_home,v_stats, v_ele_stats,v_suivi){
  section_home.style.display = v_home
  section_stats.style.display = v_stats
  section_stats_element.style.display= v_ele_stats
  section_Suivi_de_Rescensement.style.display = v_suivi
}
  

/* CODE BTN ET SECTION */ 
/* DEBUT BOUTON HOME */ 
btn_home.addEventListener("click",()=>{
   on() // overlay on 
  setTimeout(() => {
        // SECTION THIS 
      function_section("grid","none","none","none")
      // BOUTO  AUTRE 
      btn_home.classList.add("bg-primary-color")
      sub_btn_stats.classList.remove("bg-primary-color")
      btn_stats_population.style.fontWeight="normal"
      btn_stats_population.style.fontSize="inherit"
      btn_Suivi_de_Rescensement.classList.remove("bg-primary-color")
      off() // overlay off 
  }, 1000);
  
})
/* FIN BOUTON HOME */ 
/* DEBUT BOUTON SUB MENU STATISTIQUE */ 
sub_btn_stats.addEventListener("click",()=>{
      on()
      setTimeout(() => {
        subMenuStats.classList.toggle("sub-menu-1")
        dropdown.classList.toggle("rotate")
        // BOTTON AUTRE
        btn_home.classList.remove("bg-primary-color")
        btn_Suivi_de_Rescensement.classList.remove("bg-primary-color")
        btn_stats_population.style.fontWeight="normal"
        btn_stats_population.style.fontSize="inherit"
        // * BOTTON THIS
        sub_btn_stats.classList.add("bg-primary-color")

        // SECTION AUTRE 
        function_section("none","grid","none","none")
        off()
      }, 500);  
})

/* FIN BOUTON SUB MENU STATISTIQUE */ 
/*  DEBUT BOUTON SUB MENU AGENT */ 
sub_btn_agent.addEventListener("click",()=>{
    subMenuAgent .classList.toggle("sub-menu-2")
    dropdown.classList.toggle("rotate")
    sub_btn_agent.classList.toggle("bg-secondary-color")
    btn_Suivi_de_Rescensement.classList.remove("bg-primary-color")

})
/* FIN BOUTON SUB MENU AGENT */
/* DEBUT BOUTON  STATISTIQUE POPULATION  */ 

function function_chart_stats_element(data1){
  const ctx4 = document.querySelector('#Chart-by-stat');
  new Chart(ctx4, {
    type: 'pie',
    data: {
      labels: ['Homme', 'Femme'],
      datasets: [{
        data: data1, // [120000, 190000],
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
}
function function_btn_stats_population(){
  
  //  BOUTON AUTRE 
  btn_home.classList.remove("bg-primary-color")
  sub_btn_stats.classList.add("bg-primary-color")
  btn_Suivi_de_Rescensement.classList.remove("bg-primary-color")
  //*BOUTON THIS 
  btn_stats_population.style.fontWeight="bold"
  btn_stats_population.style.fontSize="18px"
  // SECTION AUTRE 
  section_home.style.display = "none"
  section_stats.style.display = "flex"
  section_stats.style.gap = "3px"
  document.querySelector(".stats-box-1").style.padding="0"
  section_Suivi_de_Rescensement.style.display = "none"
  //* SECTION THIS 
  section_stats_element.style.display="flex"
}
btn_stats_population.addEventListener("click",()=>{
  on()
  setTimeout(() => {
    function_btn_stats_population()
    function_chart_stats_element([120000, 180000])
    off()
  }, 1000);
  
  
})
btn_stats_population_2.addEventListener("click",()=>{
  on()
  setTimeout(() => {
    function_btn_stats_population()
    function_chart_stats_element([120000, 190000])
    off()
  }, 1000);
  

  

})

/* FIN BOUTON STATISTIQUE POPULATION  */  
/* DEBUT BOUTON HOME */ 
btn_Suivi_de_Rescensement.addEventListener("click",()=>{
  on() // overlay om
  setTimeout(() => {
    // * SECTION THIS 
    section_Suivi_de_Rescensement.style.display = "block"
    // SECTION AUTRES 
    section_stats.style.display = "none"
    section_stats_element.style.display="none"
    section_home.style.display = "none"
    // BOUTON THIS 
    btn_Suivi_de_Rescensement.classList.add("bg-primary-color")
    // BOUTO  AUTRE 
    btn_home.classList.remove("bg-primary-color")
    sub_btn_stats.classList.remove("bg-primary-color")
    btn_stats_population.style.fontWeight="normal"
    btn_stats_population.style.fontSize="inherit"
      off() // overlay off
  }, 500);
  
})
/* FIN BOUTON HOME */ 
/* fin de side bar menu hamberger */ 
/* ####################################################################*/
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

 
 

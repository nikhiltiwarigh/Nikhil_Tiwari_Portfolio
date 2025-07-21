document.querySelector(".cancel").style.display ='none';
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    //toggle method mean sidebar hati hai to add hogi or add hai to hat jayrgi
    if(document.querySelector(".sidebar").classList.contains("sidebarGo"))
    {
        document.querySelector(".threeline").style.display = 'inline';
        document.querySelector(".cancel").style.display = 'none';
    }
    else
    {
        document.querySelector(".threeline").style.display = 'none';     
         //timer for cancel button come with sidebar
        setTimeout(() =>{
            document.querySelector(".cancel").style.display = 'inline';
        },300);
        
    }
})


// ----------------------about section----------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents)
    {
            tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



// -----------------------------contact link with google sheets------------------------------------

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwxz5OPMNOvy2J9bXJPoGxj5_ZFklQcE-aeb6h1l2AAR7G9991lntgbCttgTuP9eDRAeA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
      },5000)                         //massage will resert after 5000 mili seconds
       form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

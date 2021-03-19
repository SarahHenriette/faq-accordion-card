let questions = document.querySelectorAll('.contain-question')
let questionActive = document.querySelector('.contain-question.active')

questions.forEach(question => {
  question.addEventListener("click", (e)=> {
    if(! e.target.classList.contains('active')) {
      questionActive.classList.remove('active')
      e.target.classList.add("active")
      questionActive = e.target
    }else {
      e.target.classList.remove("active")
    }      
  })
});

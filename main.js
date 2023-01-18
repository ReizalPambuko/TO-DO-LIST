const btn = document.querySelector("#btn");
const valueInput = document.querySelector("#value-input");
const list = document.querySelector("#list");
  
  
  
btn.addEventListener("click",function(){

  if(valueInput.value == 0){
    alert("Tolong Masukkan Text")
  }
  else{
    list.innerHTML += `<div class="listt">
    <span class="wrap">${valueInput.value}</span>
    <button class="close">X</button>
    </div>`
  }
  
  const close = document.querySelectorAll(".close");
  close.forEach(close => {
    close.addEventListener('click',function(){
      this.parentNode.remove();
    })
  })
  
  
  const wrap = document.querySelectorAll(".wrap");
  
  wrap.forEach(w => {
    w.addEventListener("click",function(){
     w.classList.toggle("act")
    })
  })
  
})

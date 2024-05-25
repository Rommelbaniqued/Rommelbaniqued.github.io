const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document. getElementById("countlikes1")

function clickLike1(){
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
  
  
}
btnLike1.addEventListener("click",clickLike1)

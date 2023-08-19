
const copyBtn = document.querySelectorAll(".copy-btn")

copyBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        alert("تم نسخ النص")
    })
    btn.addEventListener("focus", function(){
        btn.setAttribute("data-tooltip" , "Copied")
    })
})
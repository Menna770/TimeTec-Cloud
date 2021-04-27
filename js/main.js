//Sign Up Modal Form:
let signUpBtn = document.getElementById("signUpBtn"),
    signUpModal = document.getElementById("signUpModal"),
    cancelBtn = document.getElementById("cancelBtn"),
    confirmBtn = document.getElementById("confirmBtn"),
    signUpName = document.getElementById("signUpName"),
    accountName = document.getElementById("accountName"),
    LogInIconLock = document.getElementById("LogInIconLock"),
    LogInIconDown = document.getElementById("LogInIconDown"),
    LogInForm = document.getElementById("LogInForm"),
    inputs = document.getElementsByClassName("form-control");

signUpBtn.addEventListener("click", function () {

  signUpModal.style.display = "flex";
});

cancelBtn.addEventListener("click", function () {

  signUpModal.style.display = "none";
  resetForm();
});

confirmBtn.addEventListener("click", function () {

  signUpModal.style.display = "none";
  LogInIconLock.style.display = "none";
  LogInIconDown.style.display = "none";
  accountName.innerHTML = signUpName.value.toUpperCase();
  LogInForm.style.display = "none";
  resetForm();
});

function resetForm() {

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}


//Products Modals:
let productsModalBox = document.getElementById("productsModalBox"),
    productsModalItem = document.getElementById("productsModalItem"),
    productModalImg = Array.from(document.querySelectorAll(".product-modal-img")),
    productName = Array.from(document.querySelectorAll(".product-modal-p")),
    modalBgImg = document.getElementById("modalBgImg"),
    productModalName = document.getElementById("productModalName"),
    closeBtn = document.getElementById("closeBtn"),
    prevModal = document.getElementById("prev"),
    nextModal = document.getElementById("next"),
    currentIndex;


    //Display Modal:
for(let i = 0; i < productModalImg.length; i++) {

    productModalImg[i].addEventListener("click" , function(eventInfo) {

        productsModalBox.style.display = "flex";
        let imgSrc = eventInfo.target.getAttribute("src");
        modalBgImg.setAttribute("src", imgSrc);
        currentIndex = productModalImg.indexOf(eventInfo.target);
       
        for(let x = 0; x < productName.length; x++) 
        {
            productModalName.innerHTML= `${productName[currentIndex].innerHTML}`;
        }
    });
};


    //Close Modal:
function closeModal() {
    productsModalBox.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);


    //Next Modal:
nextModal.addEventListener("click", function(eventInfo) {
    
    currentIndex++;
        
    if(currentIndex == productModalImg.length)
    {
        currentIndex = 0;
    }

    let imgSrc = productModalImg[currentIndex].getAttribute("src");
    modalBgImg.setAttribute("src", imgSrc);

    for(let x = 0; x < productName.length; x++) 
        {
            productModalName.innerHTML= `${productName[currentIndex].innerHTML}`;
        }
});

    //Prev Modal:
prevModal.addEventListener("click", function(eventInfo) {
    
    currentIndex--;
        
    if(currentIndex < 0)
    {
        currentIndex = productModalImg.length-1;
    }

    let imgSrc = productModalImg[currentIndex].getAttribute("src");
    modalBgImg.setAttribute("src", imgSrc);

    for(let x = 0; x < productName.length; x++) 
        {
            productModalName.innerHTML= `${productName[currentIndex].innerHTML}`;
        }
});


//Ecosystem Section Toggle:
let article = document.getElementById("ecosystemHiddenLayer");
article.style.display = "none";

document.getElementById("ecosystemMain").onclick = function () {
  if (article.style.display == "none") {

    article.style.display = "block";
  
} else {

    article.style.display = "none";
  }
};




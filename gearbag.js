//Reveal

function reveal() {

    var checkBox=document.getElementById("myCheck");
    var revealText=document.getElementById("reveal");

    if (checkBox.checked == true){
      revealText.style.display = "block";
    } else {
      revealText.style.display = "none";
    }
}

// - and + Buttons

function minus() {
    var quantityInput = document.getElementById('qty');
    
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }

  function plus() {
    var quantityInput = document.getElementById('qty');
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  }

document.querySelector("#some_unique_id").addEventListener("click", () => {
    document.querySelector("#change_this_text").innerHTML = "Pieslēgties";
  }, false);

  document.querySelector("#some_unique_id").addEventListener("click", () => {
    document.querySelector("#change_this_text2").innerHTML = "Ķimijas laboratorijas uzskaites sistēma";
  }, false);

  document.querySelector("#some_unique_id2").addEventListener("click", () => {
    document.querySelector("#change_this_text").innerHTML = "Ko tu vēlies darīt šodien?";
  }, false);

  document.querySelector("#some_unique_id2").addEventListener("click", () => {
    document.querySelector("#change_this_text2").innerHTML = "Piekļūsti savas skolas labaratorijai vai aplūko publiski piejamo informāciju un datus par labaratoriju.";
  }, false);


  const targetDiv = document.getElementById("am");
  const targetDivAp = document.getElementById("am2")
  const targetDivAp2 = document.getElementById("am3")
  const targetDivret = document.getElementById("amr")
  const targetDivret2 = document.getElementById("amr2")
  const targetDivStart = document.getElementById("start");
  const btn = document.getElementById("some_unique_id");
  const btn2 = document.getElementById("some_unique_id2");
  const btn3 = document.getElementById("some_unique_id3");
  const btn4 = document.getElementById("some_unique_id4");
  const btn5 = document.getElementById("some_unique_id5");
  

  btn.onclick = function () {
      targetDiv.style.display = "none";
      targetDivAp.style.display = "block";
      targetDivret.style.display = "block";
      targetDivret2.style.display = "none";
      
  };

  btn2.onclick = function () {
    targetDiv.style.display = "block";
    targetDivAp.style.display = "none";
    targetDivret.style.display = "none";
    targetDivret2.style.display = "none";
    
};

btn3.onclick = function () {
  targetDiv.style.display = "block";
  targetDivAp.style.display = "none";
  targetDivret.style.display = "none";
  targetDivret2.style.display = "none";
  targetDivStart.style.display = "block"
  
};

btn4.onclick = function () {
  targetDiv.style.display = "none";
  targetDivAp.style.display = "none";
  targetDivret.style.display = "none";
  targetDivret2.style.display = "block";
  targetDivStart.style.display = "none"
};

btn5.onclick = function () {
  targetDiv.style.display = "none";
  targetDivAp.style.display = "none";
  targetDivret.style.display = "none";
  targetDivStart.style.display = "none"
  targetDivret2.style.display = "block";
}


 function zin() {
  alert("Paldies! Kļūda tiks risināts pēc tām.")
  }
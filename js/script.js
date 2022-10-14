let btn1 = document.getElementById("btn1");
let list = document.getElementsByClassName("i");
let carName = document.getElementById("carName");
let home = document.getElementById("home");
let customizeContainer = document.getElementById("customizeContainer");

let range = document.getElementById("range");
let launchTime = document.getElementById("launchTime");
let topSpeed = document.getElementById("topSpeed");

let color = document.getElementsByClassName("color");
let paintPrice = document.getElementById("paintPrice");
let selectedColor = document.getElementById("selectedColor");

let wheel = document.getElementsByClassName("wheel");
let wheelPrice = document.getElementById("wheelPrice");
let selectedWheel = document.getElementById("selectedWheel");

let interior = document.getElementsByClassName("interior");
let interiorPrice = document.getElementById("interiorPrice");
let selectedinterior = document.getElementById("selectedinterior");

let addpackage = document.getElementById("add");
let packagePrice = document.getElementById("packagePrice");
let selectedpackage = document.getElementById("selectedpackage");

let line = document.getElementById("line");
let total = document.getElementById("total");
let totalprice = document.getElementById("totalprice");

let vechileprice = document.getElementById("vechileprice");
let price = 0;

let calculateTotal = document.getElementById("calculateTotal");

for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        btn1.classList.remove("d-none");
        if (i == 0) {
            btn1.innerHTML = `Customize your Model X Now <i class="fas fa-cog settingIcon"></i>`;
            carName.innerText = "Model X";
            range.innerText = "535 KM";
            launchTime.innerText = "3.8S"
            topSpeed.innerText = "250 KM\H";
            vechileprice.innerText = "112500$"
            price = 112500;
        } else if (i == 1) {
            btn1.innerHTML = `Customize your Model S Now <i class="fas fa-cog settingIcon"></i>`
            carName.innerText = "Model S";
            range.innerText = "603 KM";
            launchTime.innerText = "3.1S"
            topSpeed.innerText = "240 KM\H";
            vechileprice.innerText = "96500$"
            price = 96500;
        } else if (i == 2) {
            btn1.innerHTML = `Customize your Model Y Now <i class="fas fa-cog settingIcon"></i>`
            carName.innerText = "Model Y";
            range.innerText = "511 KM";
            launchTime.innerText = "4.8S"
            topSpeed.innerText = "217 KM\H";
            vechileprice.innerText = "58000$"
            price = 58000;
        } else {
            btn1.innerHTML = `Customize your Model 3 Now <i class="fas fa-cog settingIcon"></i>`
            carName.innerText = "Model 3";
            range.innerText = "430 KM";
            launchTime.innerText = "5.8S"
            topSpeed.innerText = "225 KM\H";
            vechileprice.innerText = "40300$"
            price = 40300;
        }
    }
}

btn1.onclick = function () {
    home.classList.add("d-none");
    customizeContainer.classList.remove("d-none");
}

let t = 0;
for (let i = 0; i < color.length; i++) {
    color[i].onclick = function () {
        if (i == 0) {
            t=1;
            paintPrice.classList.remove("d-none");
            selectedColor.innerHTML = "Solid Black : <span class='text-secondary'>1500$</span>";
            calculateprice(price , i,t);

        } else if (i == 1) {
            t=1;
            paintPrice.classList.remove("d-none");
            selectedColor.innerHTML = "Midnight Silver Metallic : <span class='text-secondary'>1800$</span>";
            calculateprice(price, i,t);

        } else if (i == 2) {
            t=1;
            paintPrice.classList.remove("d-none");
            selectedColor.innerHTML = "Deep Blue Metallic : <span class='text-secondary'>2000$</span>";
            calculateprice(price, i,t);

        } else if (i == 3) {
            t=1;
            paintPrice.classList.remove("d-none");
            selectedColor.innerHTML = "Red Multi-Coat : <span class='text-secondary'>2500$</span>";
            calculateprice(price, i,t);
        }
    }
}

for (let i = 0; i < wheel.length; i++) {
    wheel[i].onclick = function () {
        if (i == 0) {
            t=2
            wheelPrice.classList.remove("d-none");
            selectedWheel.innerHTML = "20'' Cyberstream Wheels : <span class='text-secondary'>700$</span>";
            calculateprice(price, i,t);

        } else if (i == 1) {
            t=2
            wheelPrice.classList.remove("d-none");
            selectedWheel.innerHTML = "22'' Turbine Wheels : <span class='text-secondary'>1250$</span>";
            calculateprice(price, i,t);
        }
    }
}


for (let i = 0; i < interior.length; i++) {
    interior[i].onclick = function () {
        if (i == 0) {
            t=3;
            interiorPrice.classList.remove("d-none");
            selectedinterior.innerHTML = "All Black : <span class='text-secondary'>1000$</span>";
            calculateprice(price, i, t);

        } else if (i == 1) {
            t = 3;
            interiorPrice.classList.remove("d-none");
            selectedinterior.innerHTML = "Black And White : <span class='text-secondary'>1750$</span>";
            calculateprice(price, i, t);

        } else {
            t=3;
            interiorPrice.classList.remove("d-none");
            selectedinterior.innerHTML = "Cream : <span class='text-secondary'>2000$</span>";
            calculateprice(price, i, t);

        }
    }
}


addpackage.onclick = function () {
    t=4;
    packagePrice.classList.remove("d-none");
    selectedpackage.innerHTML = "Full Self-Driving Capability : <span class='text-secondary'>15000$</span>";
    calculateprice(price, 0, t);

}

calculateTotal.onclick =function(){
    line.classList.remove("d-none");
    total.classList.remove("d-none");
    totalprice.innerText = price;
}



let c = 0;
let index = 0;

let wheelc =0;
let wheeli = 0;

let interiorc = 0;
let interiori= 0;
function calculateprice(p,i,t){
      
      if(t == 1){
        if (c != 0) {
            if (index == 0) {
                c = 0;
                price -= 1500;
                calculateprice(price, i,t);
            } else if (index == 1) {
                c = 0;
                price -= 1800;
                calculateprice(price, i,t);
            } else if (index == 2) {
                c = 0;
                price -= 2000;
                calculateprice(price, i,t);
            } else if (index == 3) {
                c = 0;
                price -= 2500;
                calculateprice(price, i,t);
            }
        } else {
            if (i == 0) {
                price += 1500;
                c = 1;
                index = i;
            } else if (i == 1) {
                price += 1800;
                c = 1;
                index = i;
            } else if (i == 2) {
                price += 2000;
                c = 1;
                index = i;
            } else if (i == 3) {
                price += 2500;
                c = 1;
                index = i;
            }
        }
      }else if(t == 2){
          if (wheelc != 0) {
              if (wheeli == 0) {
                  wheelc = 0;
                  price -= 700;
                  calculateprice(price, i, t);
              } else if (wheeli == 1) {
                  wheelc = 0;
                  price -= 1250;
                  calculateprice(price, i, t);
              } 
          }
          else {
              if (i == 0) {
                  price += 700;
                  wheelc = 1;
                  wheeli = i;
              } else if (i == 1) {
                  price += 1250;
                  wheelc = 1;
                  wheeli = i;
              } 
          }
          
      } else if (t == 3) {
          if (interiorc != 0) {
              if (interiori == 0) {
                  interiorc = 0;
                  price -= 1000;
                  calculateprice(price, i, t);
              } else if (interiori == 1) {
                  interiorc = 0;
                  price -= 1750;
                  calculateprice(price, i, t);
              } else if (interiori == 2) {
                  interiorc = 0;
                  price -= 2000;
                  calculateprice(price, i, t);
              }
          } else {
              if ( i == 0) {
                  price += 1000;
                  interiorc = 1;
                  interiori = i;
              } else if (i == 1) {
                  price += 1750;
                  interiorc = 1;
                  interiori = i;
              } else if (i == 2) {
                  price += 2000;
                  interiorc = 1;
                  interiori = i;
              }
          }         
      } else if (t == 4) {
          price += 15000;
      }
}


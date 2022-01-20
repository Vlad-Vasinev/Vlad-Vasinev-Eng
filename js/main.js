new WOW().init();

let copyRight = document.querySelector('.all-rights');
let header = document.querySelector('.header');

function scrollUp(Event){
  header.scrollIntoView({block: "center", behavior: "smooth"});
}

copyRight.addEventListener('click', scrollUp);


let Pricing = document.querySelector('.pricing__list');
let pricingItem = document.querySelectorAll('.pricing__item');
let motionEffect = document.querySelectorAll('.motion-effect');

Pricing.addEventListener('click', clickPricing);

function clickPricing(Event) {
    for (let i = 0; i < pricingItem.length; i++) {
      pricingItem[i].classList.remove('active');
      motionEffect[i].style.display = 'none';
    }
    Event.target.classList.add('active');
  
    for (let i = 0; i < pricingItem.length; i++) {
  
      if (pricingItem[i].classList.contains('active')) {
        let child = motionEffect[i];
        child.style.display = 'block';
        break;
      }
      else {
        continue;
      }
    }
    scene.playCSS();
    Event.target.classList.remove('active');
}


let scene = new Scene({
  ".circle1": {
    0: {
      "border-width": "70px",
      "transform": "scale(0)",
    },
    1: {
      "border-width": "0px",
      "transform": "scale(1.5)",
    },
    2: 1,
  },
  ".triangle": {
    0: {
      transform: "rotate(0deg) translate(0px) scale(0.5)",
      opacity: 1,
    },
    1.5: {
      transform: "rotate(40deg) translate(100px) scale(1)",
      opacity: 0,
    },
  },
  ".rectangle1": {
    0: {
      opacity: 1,
      transform: "rotate(0deg) translate(0px) scale(0.3)",
    },
    1.5: {
      transform: "rotate(-40deg) translate(-100px) scale(0.9)",
      opacity: 0,
    },
  },
  ".rectangle2": {
    0: {
      transform: " translate(0px, 0px) rotate(0deg) scale(0.3)",
      opacity: 1,
    },
    1.5: {
      transform: "translate(100px, -100px) rotate(70deg) scale(0.7)",
      opacity: 0,
    },
  },
  ".circle2": {
    0: {
      transform: " translate(0px, 0px) scale(0.7)",
      opacity: 1,
    },
    1.5: {
      transform: "translate(-100px, -50px) scale(1)",
      opacity: 0,
    },
  },
  ".star1": {
    0: {
      transform: "translateY(0px) rotate(0deg) scale(0.5)",
      opacity: 1,
    },
    1.5: {
      transform: "translateY(-100px) rotate(90deg) scale(1)",
      opacity: 0,
    }
  }
}, {
  easing: Scene.EASE_OUT,
  selector: true,
  iterationCount: "3",
});


let introBtn = document.querySelector('.introduce__btn');
let pricingBtn = document.querySelector('.pricing-test');
let btnItems = document.querySelectorAll('.test__item-btn');
let testItem = document.querySelectorAll('.test__inner');
let testFinish = document.querySelector('.test-finish');
let testResult = document.querySelector('.test-finish__btn');
let testClose = document.querySelectorAll('.test__item-close');

let iter = 0;

introBtn.addEventListener('click', testStart);
pricingBtn.addEventListener('click', testStart)
testResult.addEventListener('click', testEnd);

function testStart(Event) {
  if(Event.target == introBtn)
  {
     for(let i = 0; i<testItem.length; i++)
    {
      if(window.innerWidth <= 320)
      {
        testItem[i].style.top = '50%';
      }
      else{
        testItem[i].style.top = '30%';
      }
      
    }
    testItem[iter].style.display = 'block';
    iter++;
    for (let i = 0; i < btnItems.length; i++) {
      btnItems[i].addEventListener('click', nextClick);
      testClose[i].addEventListener('click', testHidden);
    } 
  }
  else if(Event.target == pricingBtn)
  {
    for(let i = 0; i<testItem.length; i++)
    {
      if(window.innerWidth <= 320)
      {
        testItem[i].style.top = '424%';
      }
      else{
        testItem[i].style.top = '394%';
      }
      testItem[i].style.zIndex = '10';
    }
    testItem[iter].style.display = 'block';
    iter++;
    
    for (let i = 0; i < btnItems.length; i++)
     {
      btnItems[i].addEventListener('click', nextClick);
      testClose[i].addEventListener('click', testHidden);
     } 
  }
  
};

function nextClick(Event) {
  
  for (let i=0; i<iter; i++)
  {
    testItem[i].style.display = 'none';
  }

  testItem[iter].style.display = 'block';
  iter++;
  if(iter == 5)
  {
    testItem[iter].style.display = 'none';
    testFinish.style.display = 'block';
  }

};

function testHidden(Event){
  testItem[iter-1].style.display = 'none';
  iter--;
  document.body.style.overflow = 'auto';
};

function testEnd(Event){
  testFinish.style.display = 'none';
};



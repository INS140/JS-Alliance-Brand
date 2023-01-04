var customerName = "Alliance  ";

function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let h1 = document.getElementById('tm-header')
    h1.textContent = customerName
    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let h2 = document.getElementById('introheader')
    h2.textContent = customerName
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let ogCol = document.querySelectorAll('.tm-white-rect')
    ogCol.forEach(e => e.classList.replace('tm-white-rect', 'tm-blue-rect'))
};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let ul = document.querySelector('.tm-social-links')
    ul.style.visibility = 'hidden'
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let ip1 = document.getElementById('intropara1')
    ip1.textContent = 'Alliance was founded in 1931 by Albert Daniels.'

    let ip2 = document.getElementById('intropara2')
    ip2.textContent = 'The company is a leader in P.C. Manufacturing'

    let ap1 = document.getElementById('aboutpara1')
    ap1.textContent = 'We deliver the best service this side of creation'

    let ap2 = document.getElementById('aboutpara2')
    ap2.textContent = 'Our motto is satisfaction guaranteed'

    let adp = document.getElementById('addresspara')
    adp.textContent = '1-800-565-5656'
}; 




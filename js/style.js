function toggleChange(menu) {
    menu.classList.toggle("change");
}

const menuBox = document.getElementById('menu-box')
const menu = document.getElementById('menu-bar')
menu.addEventListener('click', function () {
    if(menuBox.style.display === 'block'){
        menuBox.style.display = 'none';
        } else {
            menuBox.style.display = 'block';
    }
})

document.getElementById('offer-1').addEventListener('click',function(){
    document.getElementById('offer-1-content').scrollIntoView({behavior : 'smooth'});
})
document.getElementById('offer-2').addEventListener('click',function(){
    document.getElementById('offer-2-content').scrollIntoView({behavior : 'smooth'});
})
document.getElementById('offer-3').addEventListener('click',function(){
    document.getElementById('offer-3-content').scrollIntoView({behavior : 'smooth'});
})
document.getElementById('offer-4').addEventListener('click',function(){
    document.getElementById('offer-4-content').scrollIntoView({behavior : 'smooth'});
})
document.getElementById('about').addEventListener('click',function(){
    document.getElementById('about-section').scrollIntoView({behavior : 'smooth'});
})
document.getElementById('services').addEventListener('click',function(){
    document.getElementById('service-section').scrollIntoView({behavior : 'smooth'});
})
document.getElementById('join-1').addEventListener('click',function(){
    document.getElementById('contact-us').scrollIntoView({behavior:'smooth'})
})
document.getElementById('join-2').addEventListener('click',function(){
    document.getElementById('contact-us').scrollIntoView({behavior:'smooth'})
})
document.getElementById('join-3').addEventListener('click',function(){
    document.getElementById('contact-us').scrollIntoView({behavior:'smooth'})
})
document.getElementById('join-now').addEventListener('click',function(){
    document.getElementById('contact-us').scrollIntoView({behavior:'smooth'})
})
document.getElementById('contact').addEventListener('click',function(){
    document.getElementById('contact-us').scrollIntoView({behavior:'smooth'})
})
document.getElementById('members').addEventListener('click',function(){
    document.getElementById('membership').scrollIntoView({behavior:'smooth'})
})
document.getElementById('gallery').addEventListener('click',function(){
    document.getElementById('photos').scrollIntoView({behavior:'smooth'})
})
document.getElementById('nav-2').addEventListener('click',function(){
    document.getElementById('about-section').scrollIntoView({behavior:'smooth'})
    })
    document.getElementById('nav-3').addEventListener('click',function(){
        document.getElementById('contact-us').scrollIntoView({behavior:'smooth'})
        })
            document.getElementById('nav-4').addEventListener('click',function(){
                document.getElementById('membership').scrollIntoView({behavior:'smooth'})
            })
document.getElementById('nav-5').addEventListener('click',function(){
    document.getElementById('offer-1-content').scrollIntoView({behavior:'smooth'})
})
document.getElementById('nav-6').addEventListener('click',function(){
    document.getElementById('offer-2-content').scrollIntoView({behavior:'smooth'})
})
document.getElementById('nav-7').addEventListener('click',function(){
    document.getElementById('offer-4-content').scrollIntoView({behavior:'smooth'})
})
document.getElementById('nav-8').addEventListener('click',function(){
    document.getElementById('offer-3-content').scrollIntoView({behavior:'smooth'})
})


// submit
const email = document.getElementById('email').value;
const form = document.getElementById('form');
const name = document.getElementById('name').value;
const number = document.getElementById('number').value;
const submitBtn = document.getElementById('submit-button')


submitBtn.addEventListener('click',function(){
    // // if(email !== ''){
    //     alert('request sent successfully')
    // // }
})

var langEl = document.querySelector('.Language');
var link = document.querySelectorAll('a');
var homeEl = document.querySelector('#home');
var servicesEl = document.querySelector('.services');
var newsEl = document.querySelector('.news');
var adEl = document.querySelector('.ad');
var infoEl = document.querySelector('.info');
var aboutEl = document.querySelector('.about');
var contactEl = document.querySelector('.contact');

var titleEl = document.querySelector('.title');
    
    
		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

        var attr = el.getAttribute('language');

        homeEl.textContent = data[attr].active;
        servicesEl.textContent = data[attr].service;
        newsEl.textContent = data[attr].news;
        adEl.textContent = data[attr].ad;
        infoEl.textContent = data[attr].info;
        aboutEl.textContent = data[attr].about;
        contactEl.textContent = data[attr].contact;

        titleEl.textContent = data[attr].title;

        
        if (data[attr].service == "Khadamaat") {
          document.getElementById("ser").href = "Khadamaat.html";
        } 

        else if (data[attr].service == "خدمات"){
          document.getElementById("ser").href = "ar-services.html";
        }

        if (data[attr].news == "Akhbaar") {
          document.getElementById("ne").href = "Akhbaar.html";
        } 

        else if (data[attr].news == "أخبار"){
          document.getElementById("ne").href = "ar-news.html";
        }

       

        if (data[attr].ad == "Ogeysiis") {
          document.getElementById("adv").href = "Ogeysiis.html";
        } 

        else if (data[attr].ad == "إعلانات"){
          document.getElementById("adv").href = "ar-ad.html";
        }

        

        if (data[attr].info == "Maclumaat") {
          document.getElementById("in").href = "Maclumaat.html";
        } 

        else if (data[attr].info == "معلومات"){
          document.getElementById("in").href = "ar-info.html";
        }

        

        if (data[attr].about == "Khusuusiya") {
          document.getElementById("ab").href = "Khusuusiya.html";
        } 

        else if (data[attr].about == "من نحن"){
          document.getElementById("ab").href = "ar-about.html";
        }

        

        if (data[attr].contact == "Xiriir") {
          document.getElementById("con").href = "Xiriir.html";
        } 

        else if (data[attr].contact == "تواصل معنا"){
          document.getElementById("con").href = "ar-contact.html";
        }

        


        

			});
    });

  
    
  var langm = document.querySelector('.LangPhone');
  var linkm = document.querySelectorAll('a');
  var titlem = document.querySelector('.title');
  var homem = document.querySelector('#home');
  var servicesm = document.querySelector('.services');
  var newsm = document.querySelector('.news');
  var adm = document.querySelector('.ad');
  var infom = document.querySelector('.info');
  var aboutm = document.querySelector('.about');
  var contactm = document.querySelector('.contact');
  
    
		link.forEach(elm => {
			elm.addEventListener('click', () => {
				langm.querySelector('.active').classList.remove('active');
				elm.classList.add('active');

        
        var attr = elm.getAttribute('language');

        homem.textContent = data[attr].active;
        servicesm.textContent = data[attr].service;
        newsm.textContent = data[attr].news;
        adm.textContent = data[attr].ad;
        infom.textContent = data[attr].info;
        aboutm.textContent = data[attr].about;
        contactm.textContent = data[attr].contact;

				titlem.textContent = data[attr].title;
				
			});
    });

    


var data = {
   
        "English": 
        {
          "active" : "Home",
          "service": "Services",
          "news": "News",
          "ad" :"Adveretisement",
          "info":"Information",
          "about": "About",
          "contact" : "Contact" ,
          "title": "Welcome For All to Junudu Rahman Center Ruqya",
        },
        "Arabic": 
        {
          "active" : "الصفحة الرئيسية",
          "service": "خدمات",
          "news": "أخبار",
          "ad" : "إعلانات",
          "info": "معلومات",
          "about": "من نحن",
          "contact" : "تواصل معنا" ,
          "title": "مرحبا بكم للجميع إلى مركز جنود الرحمن للرقية الشرعية",
        },
        "Somali": 
        {
          "active" : "Boga Weyn",
          "service": "Khadamaat",
          "news": "Akhbaar",
          "ad" :"Ogeysiis",
          "info":"Maclumaat",
          "about": "Khusuusiya",
          "contact" : "Xiriir" ,
          "title": "Kusodhawaada Xaruunta Cilajka Junuudu Raxmaan Ruqya Sharciga Ah",
        }
      }

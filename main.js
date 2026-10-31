(function(){
var T={
en:{skip:"Skip to projects",nav_home:"Home",nav_projects:"Projects",nav_about:"About",nav_contact:"Contact",
h1:"Technology built to be used.",lead:"YT Technology designs and develops digital projects and practical tools, from online stores to everyday developer utilities.",
cta:"Explore Our Projects",projects_t:"Our Projects",projects_s:"Two live projects, open and ready to use.",
c1:"An online store for car accessories, with a clean catalog that makes it easy to browse and find what your car needs.",
c2:"A collection of technical tools for coding, formatting, networking, security and data analysis, all in one place.",
visit:"Visit Project",about_t:"About Us",about_p:"YT Technology is a technology brand that develops digital projects and useful tools. We focus on simple, fast and reliable products that solve real everyday problems.",
contact_t:"Contact",contact_p:"Have a question or an idea? Send us an email.",rights:"All rights reserved.",btn:"العربية"},
ar:{skip:"انتقل إلى المشاريع",nav_home:"الرئيسية",nav_projects:"المشاريع",nav_about:"من نحن",nav_contact:"تواصل معنا",
h1:"تقنية صُنعت لتُستخدم.",lead:"تصمم YT Technology وتطور مشاريع رقمية وأدوات عملية، من المتاجر الإلكترونية إلى أدوات المطورين اليومية.",
cta:"استكشف مشاريعنا",projects_t:"مشاريعنا",projects_s:"مشروعان يعملان الآن ومتاحان للاستخدام.",
c1:"متجر إلكتروني لإكسسوارات السيارات، بكتالوج واضح يسهّل التصفح والعثور على ما تحتاجه سيارتك.",
c2:"مجموعة أدوات تقنية للبرمجة والتنسيق والشبكات والأمان وتحليل البيانات في مكان واحد.",
visit:"زيارة المشروع",about_t:"من نحن",about_p:"YT Technology علامة تقنية تطوّر مشاريع رقمية وأدوات مفيدة. نركّز على منتجات بسيطة وسريعة وموثوقة تحل مشكلات حقيقية في الحياة اليومية.",
contact_t:"تواصل معنا",contact_p:"لديك سؤال أو فكرة؟ راسلنا عبر البريد الإلكتروني.",rights:"جميع الحقوق محفوظة.",btn:"English"}
};
var root=document.documentElement,btn=document.getElementById("lang");
function set(l){
var d=T[l];
document.querySelectorAll("[data-i18n]").forEach(function(e){var v=d[e.dataset.i18n];if(v)e.textContent=v});
root.lang=l;root.dir=l==="ar"?"rtl":"ltr";btn.textContent=d.btn;
btn.setAttribute("aria-label",l==="ar"?"Switch to English":"التبديل إلى العربية");
try{localStorage.setItem("yt-lang",l)}catch(e){}
}
var saved="en";
try{saved=localStorage.getItem("yt-lang")||((navigator.language||"").indexOf("ar")===0?"ar":"en")}catch(e){}
if(saved!=="en")set(saved);
btn.addEventListener("click",function(){set(root.lang==="ar"?"en":"ar")});
var b=document.getElementById("burger"),m=document.getElementById("menu");
function close(){m.classList.remove("open");b.setAttribute("aria-expanded","false")}
b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",o)});
m.addEventListener("click",function(e){if(e.target.tagName==="A")close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
document.getElementById("yr").textContent=new Date().getFullYear();
})();

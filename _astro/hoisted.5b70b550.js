import"https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js";const v=document.querySelector(".hamburger-container"),i=document.querySelector(".hamburger"),
l=document.querySelector(".nav-list");let a=!1;v.addEventListener("click",()=>{a=!a,a?(i.classList.add("active"),l.classList.add("show")):(i.classList.remove("active"),l.classList.remove("show"))});const m=document.querySelector(".nav-primary");
document.addEventListener("scroll",()=>{window.scrollY>window.innerHeight*.25?m.classList.add("scrolled"):m.classList.remove("scrolled")})
;const L=document.getElementById("days"),w=document.getElementById("hours"),b=document.getElementById("minutes"),M=document.getElementById("seconds"),
c=e=>e<10?`0${e}`:`${e}`,E=()=>{const e=new Date("September 30, 2024 00:00:00").getTime(),f=new Date().getTime(),d=e-f,t=d>0?d:0,r=1e3,n=r*60,o=n*60,s=o*24,h=Math.floor(t/s)===0?0:Math.floor(t/s),y=Math.floor(t%s/o)===0?0:Math.floor(t%s/o),g=Math.floor(t%o/n)===0?0:Math.floor(t%o/n),p=Math.floor(t%n/r)===0?0:Math.floor(t%n/r);return{seconds:c(p),minutes:c(g),hours:c(y),days:c(h)}};function u(){const e=E();L.textContent=e.days,w.textContent=e.hours,b.textContent=e.minutes,M.textContent=e.seconds}u();setInterval(u,1e3);const T=document.querySelector(".share");T.addEventListener("click",()=>{let e=document.getElementById("modal-sfd");e||(e=document.createElement("dialog"),e.classList.add("share-modal"),e.id="modal-sfd",e.innerHTML=`
				<div class="btn-container">
					<button id="copy-sfd">Copy<iconify-icon icon="ion:copy"></iconify-icon></button>
				</div>
			`,e.innerHTML+=`
				<form method="dialog">
					 <button>×</button>
				</form>
			`,document.body.append(e)),e.showModal()});document.addEventListener("click",e=>{e.target.id==="copy-sfd"&&(navigator.clipboard.writeText("https://www.softwarefreedomday.org/images/warptheme/ilovesfd.png"),e.target.innerHTML='Copied!<iconify-icon icon="ion:copy">')});

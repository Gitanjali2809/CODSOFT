// Read More toggle
document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const moreText = btn.previousElementSibling.querySelector(".more-text");
    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      btn.textContent = "Read More";
    } else {
      moreText.style.display = "inline";
      btn.textContent = "Read Less";
    }
  });
});



// Modal logic
const modal = document.getElementById("exploreModal");
const exploreBtn = document.getElementById("exploreBtn");
const closeBtn = document.querySelector(".close");
const playBtn = document.getElementById("playVideo");
const videoThumb = document.getElementById("videoThumb");
const modalContent = document.querySelector(".modal-content");

exploreBtn.onclick = () => { modal.style.display = "flex"; }
closeBtn.onclick = () => { modal.style.display = "none"; removeIframe(); }
window.onclick = e => { if(e.target==modal) { modal.style.display="none"; removeIframe(); } }

// YouTube video
playBtn.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("width","100%");
  iframe.setAttribute("height","400");
  iframe.setAttribute("src","https://www.youtube.com/embed/rfMTCsinBDc?autoplay=1");
  iframe.setAttribute("frameborder","0");
  iframe.setAttribute("allowfullscreen","true");

  videoThumb.style.display="none";
  playBtn.style.display="none";
  modalContent.appendChild(iframe);
});

// Remove iframe when modal closes
function removeIframe(){
  const iframe = modalContent.querySelector("iframe");
  if(iframe) iframe.remove();
  videoThumb.style.display="block";
  playBtn.style.display="block";
}




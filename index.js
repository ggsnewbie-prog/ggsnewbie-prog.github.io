function ubahGambar() {
  let gambar = document.getElementById("profile");
  if (window.innerWidth <= 768) {
    gambar.src = "img/profile.png";
  } else {
    gambar.src = "img/close up.png";
  }
}

ubahGambar();
window.addEventListener("resize", ubahGambar);

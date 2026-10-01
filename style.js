function switchMainCert(imgSrc, title, pillEl) {
  const mainImg = document.getElementById('mainCertImg');
  mainImg.src = imgSrc;
  mainImg.alt = title;

  // Image load error fallback
  mainImg.onerror = function() {
    if (this.src.endsWith('.jpeg')) {
      this.src = this.src.replace('.jpeg', '.jpg');
    } else if (this.src.endsWith('.jpg')) {
      this.src = this.src.replace('.jpg', '.png');
    }
  };

  const pills = document.querySelectorAll('.ref-pill');
  pills.forEach(p => p.classList.remove('active-pill'));
  pillEl.classList.add('active-pill');
}

var nextBtn = document.getElementById('next');

nextBtn.onclick = function() {
	while (displayAnswers.hasChildNodes()) {
    displayAnswers.removeChild(displayAnswers.firstChild);
  }
	modal.style.display = "none";
  startGame();
	
}
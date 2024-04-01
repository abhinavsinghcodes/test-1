document.addEventListener("DOMContentLoaded", function() {
    const chapters = document.querySelectorAll(".manga");
    let currentChapter = 0;

    function showChapter(index) {
    chapters.forEach((manga, i) => {
        if (i === index) {
            manga.style.display = "block";
        } else {
            manga.style.display = "none";
        }
        });
    }

    function showNextChapter() {
        if (currentChapter < chapters.length - 1) {
        currentChapter++;
        showChapter(currentChapter);
        }
    }

    function showPrevChapter() {
        if (currentChapter > 0) {
        currentChapter--;
        showChapter(currentChapter);
        }
    }

    document.getElementById("next").addEventListener("click", showNextChapter);
    document.getElementById("prev").addEventListener("click", showPrevChapter);

    // Show the first chapter initially
    showChapter(currentChapter);
});



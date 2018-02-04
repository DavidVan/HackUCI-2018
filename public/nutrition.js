function updateProgressBar(progress) {
    let progress_bar = document.getElementById('progress-bar');
    let bar = document.getElementById('bar');
    progress_bar.setAttribute("data-progress", progress);
    bar.setAttribute("style", "transition-duration: 300ms; width: " + progress + "%;");
}
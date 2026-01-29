document.addEventListener('DOMContentLoaded', function () {
    const liveTvContainer = document.getElementById('live-tv-container');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://tamashaweb.com/psl-2026'; // Replace with your live TV stream URL
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    liveTvContainer.appendChild(iframe);
});

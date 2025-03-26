document.addEventListener('DOMContentLoaded', function() {
    const bandName = localStorage.getItem('bandName');
    const genre = localStorage.getItem('genre');
    
    const bandInfoDiv = document.getElementById('band-info');
    
    if (bandName && genre) {
        bandInfoDiv.innerHTML = `<h3>Band Name: ${bandName}</h3><p>Genre: ${genre}</p>`;
    } else {
        bandInfoDiv.innerHTML = `<p>No band information found. Please configure your band.</p>`;
    }
});
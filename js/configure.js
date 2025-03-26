document.getElementById('band-config-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bandName = document.getElementById('band-name').value;
    const genre = document.getElementById('genre').value;
    
    // Save band info to localStorage
    localStorage.setItem('bandName', bandName);
    localStorage.setItem('genre', genre);
    
    alert("Band created successfully!");
});
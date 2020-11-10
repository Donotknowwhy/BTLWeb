function validateForm() {
    const input = document.getElementById("searchInput").value
    if(input == ""){
        alert("Please filling in the blank");
        return false;
    }
  }
const prekidac = 
    document.querySelector('.slajderTemeZez input[type="checkbox"]'); 
  
function promeniTemu(e) { 
  
    if (e.target.checked) { 
        document.documentElement.setAttribute('tema', 'tamna'); 
    } 
  
    else { 
        document.documentElement.setAttribute('tema', 'svetla'); 
    }
} 
  
prekidac.addEventListener('change', promeniTemu, false);

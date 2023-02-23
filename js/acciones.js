window.onload = function(){
      document.getElementById("antecedentes").style.display = 'none';
      document.getElementById("datos_personales").style.display='block';
      document.getElementById("educacion").style.display='none';
      document.getElementById("otros_conocimientos").style.display='none';
      document.getElementById("arriba").style.display='block';
}

var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* la pantalla es menor a 600px */
    
    document.getElementById("boton1").addEventListener('click', function () {
      document.getElementById("antecedentes").style.display = 'none';
      document.getElementById("datos_personales").style.display='block';
      document.getElementById("educacion").style.display='none';
      document.getElementById("otros_conocimientos").style.display='none';
      document.getElementById("arriba").style.display='block';
  })
  
  document.getElementById("boton2").addEventListener('click', function () {
    document.getElementById("antecedentes").style.display = 'block';
    document.getElementById("datos_personales").style.display='none';
    document.getElementById("educacion").style.display='none';
    document.getElementById("otros_conocimientos").style.display='none';
    document.getElementById("arriba").style.display='block';
  })
  
  
  document.getElementById("boton3").addEventListener('click', function () {
    document.getElementById("antecedentes").style.display = 'none';
    document.getElementById("datos_personales").style.display='none';
    document.getElementById("educacion").style.display='block';
    document.getElementById("otros_conocimientos").style.display='none';
    document.getElementById("arriba").style.display='block';
  })
  
  document.getElementById("boton4").addEventListener('click', function () {
    document.getElementById("antecedentes").style.display = 'none';
    document.getElementById("datos_personales").style.display='none';
    document.getElementById("educacion").style.display='none';
    document.getElementById("otros_conocimientos").style.display='block';
    document.getElementById("arriba").style.display='block';
  })
  }
  else {
    /* la pantalla es mayor a 600px */

  document.getElementById("boton1").addEventListener('click', function () {
      document.getElementById("antecedentes").style.display = 'none';
      document.getElementById("datos_personales").style.display='block';
      document.getElementById("datos_personales").style.cssFloat='none'
      document.getElementById("datos_personales").style.borderLeft='none'
      document.getElementById("educacion").style.display='none';
      document.getElementById("otros_conocimientos").style.display='none';
  })
  
  document.getElementById("boton2").addEventListener('click', function () {
    document.getElementById("antecedentes").style.display = 'block';
    document.getElementById("datos_personales").style.display='block';
    document.getElementById("datos_personales").style.cssFloat='right';
    document.getElementById("datos_personales").style.borderLeft='solid 1px #008a8aab';
    document.getElementById("datos").style.marginLeft='10px'
    document.getElementById("educacion").style.display='none';
    document.getElementById("otros_conocimientos").style.display='none';
  })
  
  
  document.getElementById("boton3").addEventListener('click', function () {
    document.getElementById("antecedentes").style.display = 'none';
    document.getElementById("datos_personales").style.display='block';
    document.getElementById("datos_personales").style.cssFloat='right';
    document.getElementById("datos_personales").style.borderLeft='solid 1px #008a8aab';
    document.getElementById("datos").style.marginLeft='10px'
    document.getElementById("educacion").style.display='block';
    document.getElementById("otros_conocimientos").style.display='none';
  })
  
  document.getElementById("boton4").addEventListener('click', function () {
    document.getElementById("antecedentes").style.display = 'none';
    document.getElementById("datos_personales").style.display='block';
    document.getElementById("datos_personales").style.cssFloat='right';
    document.getElementById("datos_personales").style.borderLeft='solid 1px #008a8aab';
    document.getElementById("datos").style.marginLeft='10px'
    document.getElementById("educacion").style.display='none';
    document.getElementById("otros_conocimientos").style.display='block';
  })
  }
 }  

screenTest(mql);
mql.addEventListener('change', screenTest, false);

mql.onchange = function() {
  console.log(mql)
  }

document.getElementById("arriba").addEventListener('click', function(){
    window.location.href='#top'
})

window.onscroll = function (){
  if (window.scrollY > 50) {
    document.getElementById("arriba").style.transform = "scale(1)"
  } else {
    document.getElementById("arriba").style.transform = 'scale(0)'
  }
}
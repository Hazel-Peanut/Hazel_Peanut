var paletav=0
var footerv=sessionStorage.getItem('nota')
document.addEventListener('DOMContentLoaded', function() {
    var save=sessionStorage.getItem('save')
    if ((save==0)||(save==1)) {
        paletav=save
        if (paletav==1) {
            document.documentElement.setAttribute('paletat', 'dark')
            document.getElementById('paletai').src='img/claro.png'
            document.getElementById('logo1').srcset='img/logo1e.png'
            document.getElementById('logo2').src='img/logo2e.png'
        }
    }
    var copia=document.querySelector(".carrossel2").cloneNode(true)
    document.querySelector("#carrossel1").appendChild(copia)
})
function paletaf() {
paletav++
if (paletav>1) {
    paletav=0
}
if (paletav==1) {
    document.documentElement.setAttribute('paletat', 'dark')
    document.getElementById('paletai').src='img/claro.png'
    document.getElementById('logo1').srcset='img/logo1e.png'
    document.getElementById('logo2').src='img/logo2e.png'
    sessionStorage.setItem('save', '1')
} else {
    document.documentElement.setAttribute('paletat', 'light')
    document.getElementById('paletai').src='img/escuro.png'
    document.getElementById('logo1').srcset='img/logo1c.png'
    document.getElementById('logo2').src='img/logo2c.png'
    sessionStorage.setItem('save', '0')
}
}
function footerf() {
    if ((footerv<1)||(footerv>5)||(isNaN(footerv))) {
        footerv=Number(window.prompt("Qual sua nota para a empresa? (1-5)"))
        sessionStorage.setItem('nota', footerv)
    } else {
        window.alert("Sua nota para a empresa foi "+footerv+".")
    }
}
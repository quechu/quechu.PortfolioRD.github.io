
window.onscroll = function () {

    if (document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.background = '#f3f3f3';
        document.getElementById("navbar").style.padding = "30px 10px";

        

    }
    else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.padding = "30px 10px";
    }


}



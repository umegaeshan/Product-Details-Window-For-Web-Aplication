let product_image = document.getElementById("product-image");
let btn = document.getElementsByClassName("btn");



btn[0].onclick = function(){
    product_image.src="9828470.jpg";
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active");
}

btn[1].onclick = function(){
    product_image.src="c87a_idrx_210603.jpg";
     for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active");
}

btn[2].onclick = function(){
    product_image.src="9999933.jpg";
     for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active");
}
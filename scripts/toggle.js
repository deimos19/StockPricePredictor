var list = document.getElementById("list");

        list.style.maxHeight = "0px";

        function toggleMenu(){
            if(list.style.maxHeight == "0px"){
                list.style.maxHeight = "200px";
            }
            else{
                list.style.maxHeight = "0px";
            }
        }
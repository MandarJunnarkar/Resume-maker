const inputs = document.querySelectorAll("input");
document.querySelector("form").addEventListener("submit", submitForm);
let imgURI;

document.querySelector("#image").addEventListener("change", () => {
    const image = document.getElementById("image");
    const reader = new FileReader();

    reader.onload = function(e){
        imgURI = e.target.result;
    }  

    reader.readAsDataURL(image.files[0]);
})

function submitForm(e) {
    e.preventDefault();
    // ---------------------------------------------------------
        const arr = [];
        Array.from(inputs).forEach((input,idx) =>{
            if(idx === 0){
                arr.push(imgURI);
            }else{
                arr.push(input.value)
            }
        })
        sessionStorage.setItem("data", JSON.stringify(arr));
        window.location.href=`template${sessionStorage.getItem("template")}.html`;
}

let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let height=parseInt(document.querySelector(".inp1").value);
    let Weight=parseInt(document.querySelector(".inp2").value);

    let result=document.querySelector(".insert_data");

    if(height==='' || height <= 0 || height === NaN){
        result.innerHTML="Invalid Input";
    }
    else if(Weight==='' || Weight <= 0 || Weight === NaN){
        result.innerHTML="Invalid Input";
    }
    else{
        let bmi=(Weight/ ((height*height) / 10000)).toFixed(2);
        result.innerHTML=`count= ${bmi}`;
    }
    
})












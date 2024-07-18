function display(event){
    event.preventDefault();
    const usia = document.getElementById("age").value;
    const tinggi = document.getElementById("height").value/100;
    const berat = document.getElementById("weight").value;
    const hasil = document.getElementById("bmiResult");
    const kategori = document.getElementById("kategori")
   if (usia <= 18){
    alert("belum cukupumur");
   }
    bmi = berat/(tinggi * tinggi)
    if (bmi <=18.5){
        kategori.innerHTML = "kekurangan berat badan"
    }else if (bmi> 18.5 && bmi <=24.9){
        kategori.innerHTML = "ideal"
    }else if(bmi >25.0 && bmi <=29.9){
        kategori.innerHTML ="kegendutan"
    }else{
        kategori.innerHTML = "obesitas"}
    hasil.innerHTML= bmi.toFixed(2);
};
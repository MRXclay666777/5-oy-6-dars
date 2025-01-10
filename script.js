let Arraybek = ["Olma", "Banan", "Anor", "Uzum"];

console.log("Array uzunligi:", Arraybek.length);
alert("Array uzunligi: " + Arraybek.length);

let confirmr = confirm("Elementni o'chiramizmi");

if (confirmr) {
    let deletee = Arraybek.shift(); // To'g'ri array nomidan foydalanildi
    console.log("O'chirdik:", deletee);
    alert("O'chirdik: " + deletee);
} else {
    console.log("O'chirilmadi.");
    alert("O'chirilm")}
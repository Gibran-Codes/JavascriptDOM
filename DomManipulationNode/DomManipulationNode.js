function ganti() {
    const pBaru = document.createElement("p");
    const teksPBaru = document.createTextNode("paragraf baru");
    const sectionA = document.getElementById("a");
    
    pBaru.appendChild(teksPBaru);
    
    sectionA.appendChild(pBaru);
    pBaru.style.backgroundColor = "yellow";
    
    const liBaru = document.createElement("li");
    const teksLiBaru = document.createTextNode("item baru");
    const ul = document.querySelector("section#b ul" );
    const li2 = ul.querySelector("li:nth-child(2)");
    const link = document.getElementsByTagName("a")[0];
    
    liBaru.appendChild(teksLiBaru);
    
    ul.insertBefore(liBaru, li2);
    liBaru.style.backgroundColor = "yellow";
    
    
    sectionA.removeChild(link);
    
    
    
    const judulBaru = document.createElement("h1");
    const teksJudulBaru = document.createTextNode("Judul Terbaru!");
    const sectionB = document.getElementById("b");
    const p4 = sectionB.getElementsByTagName("p")[0];
    
    judulBaru.appendChild(teksJudulBaru);
    judulBaru.style.backgroundColor = "yellow";
    
    sectionB.replaceChild(judulBaru, p4);
    
};


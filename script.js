function cook() {
    // Pobierz wybrany składnik
    const ingredient = document.getElementById("ingredientSelect").value;
    
    // Przypisz bonusy w zależności od składnika
    let resultText = "";
    
    if (ingredient === "1") {
        resultText = "Ugotowałeś zupę z dzikiego mięsa! Daje to bonus +2 do wytrzymałości na 24 godziny.";
    } else if (ingredient === "2") {
        resultText = "Ugotowałeś potrawę z leśnych ziół! Daje to bonus +1 do percepcji i zręczności przez 12 godzin.";
    } else if (ingredient === "3") {
        resultText = "Ugotowałeś sałatkę z jagód! Daje to bonus +1 do inteligencji przez 24 godziny.";
    }
    
    // Wyświetl wynik
    document.getElementById("result").textContent = resultText;
}

function cook() {
    // Pobierz wybrane składniki
    const ingredient = document.getElementById("ingredientSelect").value;
    const extraIngredient = document.getElementById("extraIngredientSelect").value;

    // Bonusy w zależności od składników
    let resultText = "";
    let effectDuration = 12;  // Domyślny czas trwania efektu

    // Losowe efekty
    const randomEffect = Math.random();

    if (ingredient === "1") {
        resultText = "Ugotowałeś zupę z dzikiego mięsa!";
        if (extraIngredient === "6") {
            resultText += " Dodano czosnek, który zwiększa odporność na choroby!";
            effectDuration = 18;
        } else if (extraIngredient === "7") {
            resultText += " Dodano grzyby jadowite, co daje dodatkowy bonus do obrażeń w walce!";
            effectDuration = 6;
        }
        resultText += ` Daje to bonus +2 do wytrzymałości przez ${effectDuration} godziny.`;
    } else if (ingredient === "2") {
        resultText = "Ugotowałeś potrawę z leśnych ziół!";
        if (extraIngredient === "8") {
            resultText += " Dodano miód, który poprawia regenerację energii!";
            effectDuration = 24;
        }
        resultText += ` Daje to bonus +1 do percepcji i zręczności przez ${effectDuration} godziny.`;
    } else if (ingredient === "3") {
        resultText = "Ugotowałeś sałatkę z jagód!";
        resultText += ` Daje to bonus +1 do inteligencji przez 24 godziny.`;
    } else if (ingredient === "4") {
        resultText = "Ugotowałeś danie z ryby!";
        resultText += ` Daje to bonus +1 do zręczności na ${effectDuration} godzin.`;
    } else if (ingredient === "5") {
        resultText = "Ugotowałeś danie z mleka magów!";
        if (randomEffect > 0.5) {
            resultText += " Potrawa wywołuje efekt magicznej błyskawicy, która zwiększa obrażenia o 2!";
        } else {
            resultText += " Potrawa daje niewielki bonus do regeneracji punktów many.";
        }
    }

    // Wyświetl wynik
    document.getElementById("result").textContent = resultText;
}

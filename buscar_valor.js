function buscar_valor(lista, valor_objetivo) {
    for (let indice = 0; indice < lista.length; indice++) {
        if (lista[indice] === valor_objetivo) {
            return indice;
        }
    }
    return -1;
}

def buscar_valor(lista, valor_objetivo):
    for indice, valor in enumerate(lista):
        if valor == valor_objetivo:
            return indice
    return -1

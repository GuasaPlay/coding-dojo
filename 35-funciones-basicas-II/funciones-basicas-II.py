# Cuenta regresiva: crea una función que acepte un número como entrada. Devuelve una lista nueva que cuente de uno en uno, desde el número (como elemento 0) hasta 0 (como último elemento).

def cuentaRegresiva(num):
    salida = []
    for i in range(num, -1, -1):
        salida.append(i)
    return salida


print(cuentaRegresiva(5))
# Ejemplo: countdown(5) debería devolver [5,4,3,2,1,0]

# Imprimir y devolver: crea una función que reciba una lista con dos números. Imprime el primer valor y devuelve el segundo.


def imprimirDevolver(lista):
    print(lista[0])
    return lista[1]


print(imprimirDevolver([1, 2]))
# Ejemplo: imprimir_y_devolver([1,2]) debe imprimir 1 y devolver 2


# Primero más longitud: crea una función que acepte una lista y devuelva la suma del primer valor de la lista, más la longitud de la lista.
def primero_mas_longitud(lista):
    return lista[0] + len(lista)


print(primero_mas_longitud([1, 2, 3, 4, 5]))
# Ejemplo: primero_mas_longitud([1,2,3,4,5]) debe devolver 6 (primer valor: 1 +length: 5)


# Valores mayores que el segundo: escribe una función que acepte una lista y cree una nueva que contenga solo los valores de la lista original que sean mayores que su segundo valor. Imprime cuántos valores son y luego devuelve la lista nueva. Si la lista tiene menos de 2 elementos, has que la función devuelva False

def valores_mayores_que_el_segundo(lista):
    if len(lista) < 2:
        return False
    salida = []
    for i in range(0, len(lista)):
        if lista[i] > lista[1]:
            salida.append(lista[i])
    print(len(salida))
    return salida


print(valores_mayores_que_el_segundo([5, 2, 3, 2, 1, 4]))
print(valores_mayores_que_el_segundo([3]))

# Ejemplo: valores_mayores_que_el_segundo([5,2,3,2,1,4]) debe imprimir 3 y devolver [5,3,4]
# Ejemplo: valores_mayores_que_el_segundo([3]) debe devolver False

# Esta longitud, ese valor: escribe una función que acepte dos enteros como parámetros: tamaño y valor. La función debe crear y devolver una lista cuya longitud sea igual al tamaño dado, y cuyos valores sean todos el valor dado.


def length_and_value(tamano, valor):
    salida = []
    for i in range(0, tamano):
        salida.append(valor)
    return salida


print(length_and_value(4, 7))
print(length_and_value(6, 2))
# Ejemplo: length_and_value(4,7) debe devolver [7,7,7,7]
# Ejemplo: length_and_value(6,2) debe devolver [2,2,2,2,2,2]

num1 = 42  # Declaración de variable y número inicializado
num2 = 2.3  # Declaración de variable, decimal o float inicializado
boolean = True  # Declaración de variable, boolean inicializado
string = 'Hello World'  # Declaración de variable, string inicializado

# Declaración de variable, list inicializado
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']

# Declaración de variable y diccionario inicializado
person = {'name': 'John', 'location': 'Salt Lake',
          'age': 37, 'is_balding': False}

# Declaración de variable y tupla inicializado
fruit = ('blueberry', 'strawberry', 'banana')
# Imprimir por consola y verificar el tipo
print(type(fruit))

# Imprimir por consola
print(pizza_toppings[1])

# Agregar un valor a la lista
pizza_toppings.append('Mushrooms')

# Imprimir por consola
print(person['name'])

# Cambiar el valor del diccionario
person['name'] = 'George'

# Cambiar el valor del diccionario
person['eye_color'] = 'blue'

# Imprimir por consola y acceder a un valor de una tupla
print(fruit[2])

# Condicional e imprimir por consola
if num1 > 45:
    print("It's greater")
else:
    print("It's lower")

# Condicional e imprimir por consola
if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

# For Loop comienza en 0 y sube hasta 5
for x in range(5):
    print(x)
# For Loop comienza en 0 y sube hasta 5
for x in range(2, 5):
    print(x)
# Para el inicio del bucle en 2 sube hasta 10, se incrementa en 3
for x in range(2, 10, 3):
    print(x)

# While Loop, declaracion de variable
x = 0
while(x < 5):
    # Impresion de consola
    print(x)
    # Incremento de variable
    x += 1

# Eliminar un valor de la lista
pizza_toppings.pop()
# Eliminar un valor de la lista por el indice
pizza_toppings.pop(1)

# Imprimir por consola
print(person)
# Eliminar un valor del diccionario
person.pop('eye_color')
# Imprimir por consola
print(person)

# Iterar una lista
for topping in pizza_toppings:
    # Condicional
    if topping == 'Pepperoni':
        # Continua
        continue
    # Imprimir por consola
    print('After 1st if statement')
    # Condicional
    if topping == 'Olives':
        # Se detiene el bucle
        break

# Declaración de función


def print_hello_ten_times():
    # for loop comienza en 0 sube hasta 10
    for num in range(10):
        # Imprimir por consola
        print('Hello')


# Llamar a la función
print_hello_ten_times()

# Declaración de funcion con parametros


def print_hello_x_times(x):
    # For bucle hasta un número dado x
    for num in range(x):
        # Imprimir por consola
        print('Hello')


# Llamar a la función
print_hello_x_times(4)

# Declaración de funcion con parametro por defecto


def print_hello_x_or_ten_times(x=10):
    # Para bucle hasta x
    for num in range(x):
        # Imprimiendo por consola
        print('Hello')


# Llamar a la función
print_hello_x_or_ten_times()

# Llamar a la función
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)

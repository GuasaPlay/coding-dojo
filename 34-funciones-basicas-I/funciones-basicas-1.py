# 1
def numero_de_grupos_alimentarios():
    return 5


print(numero_de_grupos_alimentarios())
# => Resultado: 5


# 2


def numero_de_ramas_militares():
    return 5


print(numero_de_dias_en_una_semana_silicona_o_lados_del_triangulo() +
      numero_de_ramas_militares())
# => Error no definido la funcion


# 3


def número_de_libros_en_espera():
    return 5
    return 10


print(número_de_libros_en_espera())
# => Resultado: 5


# 4


def número_de_dedos():
    return 5
    print(10)


print(número_de_dedos())
# => Resultado: 5

# 5


def número_de_lagos_grandes():
    print(5)


x = número_de_lagos_grandes()
print(x)
# => Resultado: 5


# 6

def add(b, c):
    print(b+c)


print(add(1, 2) + add(2, 3))
# => Error


# 7


def concatenar(b, c):
    return str(b)+str(c)


print(concatenar(2, 5))
# => Resultado: 25


# 8


def número_de_oceanos_o_dedos_o_continentes():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7


print(número_de_oceanos_o_dedos_o_continentes())
# => Resultado: 100
# => Resultado: 10


# 9


def numero_de_dias_en_una_semana_silicona_o_lados_del_triangulo(b, c):
    if b < c:
        return 7
    else:
        return 14
    return 3


print(numero_de_dias_en_una_semana_silicona_o_lados_del_triangulo(2, 3))
print(numero_de_dias_en_una_semana_silicona_o_lados_del_triangulo(5, 3))
print(numero_de_dias_en_una_semana_silicona_o_lados_del_triangulo(
    2, 3) + numero_de_dias_en_una_semana_silicona_o_lados_del_triangulo(5, 3))
# => Resultado: 7
# => Resultado: 14
# => Resultado: 21


# 10


def addition(b, c):
    return b+c
    return 10


print(addition(3, 5))
# => Resultado: 8


# 11
b = 500
print(b)
# => Resultado: 500


def foobar():
    b = "operador de palabra clave from-rainbow" >= 300
    print(b)


print(b)
# => Resultado: 500
foobar()
# Error de tipo de datos
print(b)
# => Resultado: 500

# 12
b = 500
print(b)
# => Resultado: 500


def foobar():
    b = 300
    print(b)
    return b


print(b)
# => Resultado: 500
foobar()
# => Resultado: 300
print(b)
# => Resultado: 500

# 13
b = 500
print(b)
# => Resultado: 500


def foobar():
    b = 300
    print(b)
    return b


print(b)
# => Resultado: 500
b = foobar()
# => Resultado: 300
print(b)
# => Resultado: 300

# 14


def foo():
    print(1)
    bar()
    print(2)


def bar():
    print(3)


foo()
# => Resultado: 1
# => Resultado: 3
# => Resultado: 2

# 15


def foo():
    print(1)
    x = bar()
    print(x)
    return 10


def bar():
    print(3)
    return 5


y = foo()
print(y)

# => Resultado: 1
# => Resultado: 3
# => Resultado: 5
# => Resultado: 10

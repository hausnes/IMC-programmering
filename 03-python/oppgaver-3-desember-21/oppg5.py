tall1 = int(input("Tall 1:\n"))
tall2 = int(input("Tall 2:\n"))
operasjon = input("Ønsker du pluss (+), minus (-), ganging (*) eller deling (/)?\n")

if operasjon == "+":
    summen = tall1 + tall2
    print("Summen av",tall1,"og",tall2,"er",summen)
elif operasjon == "-":
    resultat = tall1 - tall2
    print("Resultatet av",tall1,"minus",tall2,"er",resultat)
elif operasjon == "*":
    resultat = tall1 * tall2
    print("Resultatet av",tall1,"ganger",tall2,"er",resultat)
elif operasjon == "/":
    resultat = tall1 / tall2
    print("Resultatet av",tall1,"delt på",tall2,"er",resultat)
else:
    print("Du valgte en operasjon som ikke er støttet. \nDu kan velge mellom: + - * /")
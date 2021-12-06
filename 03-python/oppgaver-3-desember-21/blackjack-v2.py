from random import randint

def sjekk21(sumKort):
  if sumKort == 21:
    print("Gratulerer, du fekk 21!")
    return "ferdig"
  elif sumKort > 21:
    print("Beklagar, du tapte. Spelet er over. Du fekk",sumKort)
    return "ferdig"
  else:
    print("Du fikk",sumKort)
    return "uferdig"

def trekkKort():
  kort = randint(1,14)
  print("Du trekte",kort)
  return kort

kort1 = trekkKort() # Mellom 1-13
kort2 = trekkKort()
sumKort = kort1 + kort2
status = sjekk21(sumKort)

while status != "ferdig":
  valg = input("Ønsker du å trekke fleire for å kome nærare 21? (ja/nei)\n")
  if valg == "ja":
    nyttKort = trekkKort()
    sumKort += nyttKort
    status = sjekk21(sumKort)
  else:
    status = "ferdig"
    print("Du endte opp med",sumKort)
    print("Takk for i dag!")
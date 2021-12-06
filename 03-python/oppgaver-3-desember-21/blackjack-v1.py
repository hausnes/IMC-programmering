from random import randint

kort1 = randint(1,14) # Mellom 1-13
kort2 = randint(1,14)
sumKort = kort1 + kort2

print("Du trekte",kort1,"og",kort2,"til ein sum av",sumKort)

if sumKort == 21:
  print("Gratulerer, du fekk 21!")
elif sumKort > 21:
  print("Beklagar, du tapte. Spelet er over.")
else:
  valg = input("Ønsker du å trekke fleire for å kome nærare 21?")
  if valg == "ja":
    nyttKort = randint(1,14)
    sumKort = sumKort + nyttKort
    if sumKort == 21:
      print("Gratulerer, du fekk 21!")
    elif sumKort > 21:
      print("Du fekk",sumKort,"- beklagar, du tapte. Spelet er over.")
    else:
      print("Du fikk",sumKort)
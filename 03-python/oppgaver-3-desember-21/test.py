# generate a random hexadecimal color code
def random_color():
    import random
    return '#%06x' % random.randint(0, 0xFFFFFF)

print(random_color())

# generate a random date between 1.1.2000 and 31.12.2020
def random_date():
    import random
    import datetime
    start = datetime.date(2000, 1, 1)
    end = datetime.date(2020, 12, 31)
    return start + datetime.timedelta(days=random.randint(0, (end - start).days))

print(
    random_date()
)
'''
    Write a method to replace all spaces in a string with '%20'. You may assume that the string
    has sufficient space at the end to hold the additional characters, and that you are given the "true"
    length of the string.
'''
from typing import List


def urlify(url: List[str], trueLength: int) -> bool:
    spaceCount = 0
    for char in url:
        spaceCount += 1 if char == ' ' else 0

    index = trueLength + (spaceCount * 2)
    url = url + ['']*spaceCount * 2 # increasing List size
    for x in range(trueLength - 1, -1, -1):
        if(url[x] == " "):
            url[index - 1] = "0"
            url[index - 2] = "2"
            url[index - 3] = "%"
            index -= 3
        else:
            url[index - 1] = url[x]
            index -= 1
    
    return "".join(url)



url = "www.google.com/test urlify code"
print(urlify(list(url),len(url)))

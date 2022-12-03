'''
Given an array of N integers. Find the first element that occurs at least K number of times.

Input :
N = 7, K = 2
A[] = {1, 7, 4, 3, 4, 8, 7}
Output :
4
Explanation:
Both 7 and 4 occur 2 times. 
But 4 is first that occurs 2 times.
'''

def firstElementKTime(self,  a, n, k):
    my_dict = {}
    my_list = []
    flag = True
    for  i in range(len(a)):
        if a[i] in my_dict:
            my_dict[a[i]] += 1
        else: 
            my_dict[a[i]] = 1

        if my_dict[a[i]] == k:
            my_list.append(a[i])

    if (len(my_list) > 0):
        return my_list[0]
    else:
        return -1

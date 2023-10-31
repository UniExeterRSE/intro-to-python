<!-- ---
layout: page
title: Additional Session 1 Exercises
order: 8
session: 1
length: 20
toc: true
adapted: false
--- -->

# Additional Session 1 Exercises

## Swapping the contents of variables

Explain what the overall effect of this code is:

~~~python
left = 'L'
right = 'R'
temp = left
left = right
right = temp
~~~

Compare it to:

~~~python
left = 'L'
right = 'R'
left, right = right, left
~~~

Do they always do the same thing?
Which do you find easier to read?


## Solution

Both examples exchange the values of `left` and `right`:

~~~python
print(left, right)
~~~

~~~txt
R L
~~~

In the first case we used a temporary variable `temp` to keep the value of `left` before we
overwrite it with the value of `right`. In the second case, `right` and `left` are packed into a
tuple and then unpacked into `left` and `right`.


## In-Place Operators

Python (and most other languages in the C family) provides
in-place operators
that work like this:

~~~python
x = 1  # original value
x += 1 # add one to x, assigning result back to x
x *= 3 # multiply x by 3
print(x)
~~~

~~~txt
6
~~~

Write some code that sums the positive and negative numbers in a list separately,
using in-place operators.

Do you think the result is more or less readable
than writing the same without in-place operators?


## Solution

~~~python
positive_sum = 0
negative_sum = 0
test_list = [3, 4, 6, 1, -1, -5, 0, 7, -8]
for num in test_list:
    if num > 0:
        positive_sum += num
    elif num == 0:
        pass
    else:
        negative_sum += num
print(positive_sum, negative_sum)
~~~

Here `pass` means "don't do anything".
In this particular case, it's not actually needed, since if `num == 0` neither
sum needs to change, but it illustrates the use of `elif` and `pass`.


## Turn a String into a List

Use a for-loop to convert the string "hello" into a list of letters:

~~~python
["h", "e", "l", "l", "o"]
~~~

Hint: You can create an empty list like this:

~~~python
my_list = []
~~~


## Solution

~~~python
my_list = []
for char in "hello":
	my_list.append(char)
print(my_list)
~~~


## Reverse a String

Knowing that two strings can be concatenated using the `+` operator,
write a loop that takes a string
and produces a new string with the characters in reverse order,
so `'Newton'` becomes `'notweN'`.

## Solution

~~~python
newstring = ''
oldstring = 'Newton'
for char in oldstring:
    newstring = char + newstring
print(newstring)
~~~

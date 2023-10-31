<!-- ---
layout: page
title: Loops
order: 7
session: 1
length: 45
toc: true
adapted: true
attrib_name: Programming with Python - Repeating Actions with Loops
attrib_link: https://swcarpentry.github.io/python-novice-inflammation/05-loop/index.html
attrib_copywrite: Software Carpentry
attrib_license: CC-BY 4.0
attrib_license_link: https://creativecommons.org/licenses/by/4.0/
--- -->

# Loops

## Learning Objectives

At the end of this lesson you will be able to:

- Identify what a `for` loop is
- Understand how a `for` loop can be used to perform operations on a number of values
- Write some simple loops to perform repeat calculations
- Investigate what is happening to variables as a `for` loop progresses


## Introduction to loops

~~~python
odds = [1, 3, 5, 7]
~~~

A Python list is an ordered collection of elements, and every
element has a unique number associated with it --- its index. This means that
we can access elements in a list using their indices.
For example, we can get the first number in the list `odds`,
by using `odds[0]`. One way to print each number is to use four `print` statements:

~~~python
print(odds[0])
print(odds[1])
print(odds[2])
print(odds[3])
~~~

~~~
1
3
5
7
~~~


This is a bad approach for three reasons:

1.  **Not scalable**. Imagine you need to print a list that has hundreds
    of elements.  It might be easier to type them in manually.

2.  **Difficult to maintain**. If we want to decorate each printed element with an
    asterisk or any other character, we would have to change four lines of code. While
    this might not be a problem for small lists, it would definitely be a problem for
    longer ones.

3.  **Fragile**. If we use it with a list that has more elements than what we initially
    envisioned, it will only display part of the list's elements. A shorter list, on
    the other hand, will cause an error because it will be trying to display elements of the
    list that do not exist.


~~~python
odds = [1, 3, 5]
print(odds[0])
print(odds[1])
print(odds[2])
print(odds[3])
~~~

~~~
1
3
5
~~~

~~~
---------------------------------------------------------------------------
IndexError                                Traceback (most recent call last)
<ipython-input-3-7974b6cdaf14> in <module>()
      3 print(odds[1])
      4 print(odds[2])
----> 5 print(odds[3])

IndexError: list index out of range
~~~


Here's a better approach: a `for` loop

<!-- ~~~python
odds = [1, 3, 5, 7]
for num in odds:
    print(num)
~~~

~~~
1
3
5
7
~~~ -->

This is shorter --- certainly shorter than something that prints every number in a
hundred-number list --- and more robust as well:

~~~python
odds = [1, 3, 5, 7, 9, 11]
for num in odds:
    print(num)
~~~

~~~
1
3
5
7
9
11
~~~

The improved version uses a `for` loop
to repeat an operation --- in this case, printing --- once for each thing in a sequence.
The general form of a loop is:

~~~python
for variable in collection:
    # do things using variable, such as print
~~~


Using the odds example above, the loop might look like this:

![Loop variable 'num' being assigned the value of each element in the list `odds` in turn and
then being printed](../fig/05-loops_image_num.png)

where each number (`num`) in the variable `odds` is looped through and printed one number after
another. The other numbers in the diagram denote which loop cycle the number was printed in (1
being the first loop cycle, and 6 being the final loop cycle).

We can call the loop variable anything we like, but
there must be a colon at the end of the line starting the loop, and we must indent anything we
want to run inside the loop. Unlike many other languages, there is no command to signify the end
of the loop body (e.g. `end for`); what is indented after the `for` statement belongs to the loop.


## What's in a name?

In the example above, the loop variable was given the name `num` as a mnemonic;
it is short for 'number'.
We can choose any name we want for variables.  We might just as easily have chosen the name
`banana` for the loop variable, as long as we use the same name when we invoke the variable inside
the loop:

~~~python
odds = [1, 3, 5, 7, 9, 11]
for banana in odds:
    print(banana)
~~~

~~~
1
3
5
7
9
11
~~~

It is a good idea to choose variable names that are meaningful, otherwise it would be more
difficult to understand what the loop is doing.


Here's another loop that repeatedly updates a variable:

~~~python
length = 0
names = ['Curie', 'Darwin', 'Turing']
for value in names:
    length = length + 1
print('There are', length, 'names in the list.')
~~~

~~~
There are 3 names in the list.
~~~

It's worth tracing the execution of this little program step by step.
Since there are three names in `names`,
the statement on line 4 will be executed three times.
The first time around,
`length` is zero (the value assigned to it on line 1)
and `value` is `Curie`.
The statement adds 1 to the old value of `length`,
producing 1,
and updates `length` to refer to that new value.
The next time around,
`value` is `Darwin` and `length` is 1,
so `length` is updated to be 2.
After one more update,
`length` is 3;
since there is nothing left in `names` for Python to process,
the loop finishes
and the `print` function on line 5 tells us our final answer.


Note that a loop variable, used to record progress in a loop, still exists after the loop is done:

~~~python
for name in ['Curie', 'Darwin', 'Turing']:
    print(name)
print('after the loop, name is', name)
~~~

~~~txt
Curie
Darwin
Turing
after the loop, name is Turing
~~~

Finding the length of an object is such a common operation
that Python has a built-in function called `len`:

~~~python
print(len([0, 1, 2, 3]))
~~~

~~~
4
~~~

`len` is much faster than any function we could write ourselves,
and much easier to read than a two-line loop;
it will also give us the length of many other things that we haven't met yet,
so we should always use it when we can.


## From 1 to N

Python has a built-in function called `range` that generates a sequence of numbers. `range` can
accept 1, 2, or 3 parameters.

* If one parameter is given, `range` generates a sequence of that length,
  starting at zero and incrementing by 1.
  For example, `range(3)` produces the numbers `0, 1, 2`.
* If two parameters are given, `range` starts at
  the first and ends just before the second, incrementing by one.
  For example, `range(2, 5)` produces `2, 3, 4`.
* If `range` is given 3 parameters,
  it starts at the first one, ends just before the second one, and increments by the third one.
  For example, `range(3, 10, 2)` produces `3, 5, 7, 9`.
  
Using `range`, write a loop that uses `range` to print the first 3 natural numbers:

~~~python
1
2
3
~~~


## Solution
~~~python
for number in range(1, 4):
    print(number)
~~~


## Understanding the loops

Given the following loop:
~~~python
word = 'oxygen'
for char in word:
    print(char)
~~~

How many times is the body of the loop executed?

* 3 times
* 4 times
* 5 times
* 6 times


## Solution

The body of the loop is executed 6 times.


## Computing Powers With Loops

Exponentiation is built into Python:

~~~python
print(5 ** 3)
~~~

~~~txt
125
~~~

Write a loop that calculates the same result as `5 ** 3` using
multiplication (and without exponentiation).


## Solution

~~~python
result = 1
for number in range(0, 3):
    result = result * 5
print(result)
~~~


## Summing a list

Write a loop that calculates the sum of elements in a list
by adding each element and printing the final value,
so `[124, 402, 36]` prints 562


## Solution

~~~python
numbers = [124, 402, 36]
summed = 0
for num in numbers:
    summed = summed + num
print(summed)
~~~


## Computing the value of a polynomial

The built-in function `enumerate` takes a sequence (e.g. a list and
generates a new sequence of the same length. Each element of the new sequence is a pair composed
of the index (0, 1, 2,...) and the value from the original sequence:

~~~python
for idx, val in enumerate(a_list):
    # Do something using idx and val
~~~

The code above loops through `a_list`, assigning the index to `idx` and the value to `val`.

Suppose you have encoded a polynomial as a list of coefficients in
the following way: the first element is the constant term, the
second element is the coefficient of the linear term, the third is the
coefficient of the quadratic term, etc.

~~~python
x = 5
coefs = [2, 4, 3]
y = coefs[0] * x**0 + coefs[1] * x**1 + coefs[2] * x**2
print(y)
~~~

~~~txt
97
~~~


## Exercise

Write a loop using `enumerate(coefs)` which computes the value `y` of any
polynomial, given `x` and `coefs`.


## Solution

~~~python
y = 0
for idx, coef in enumerate(coefs):
    y = y + coef * x**idx
~~~


## Counting Vowels

1. Write a loop that counts the number of vowels in a character string.
2. Test it on a few individual words and full sentences.
3. Once you are done, compare your solution to your neighbour's.


## Solution

~~~python
vowels = 'aeiouAEIOU'
sentence = 'Mary had a little lamb.'
count = 0
for char in sentence:
    if char in vowels:
        count += 1

print('The number of vowels in this string is ' + str(count))
~~~

Did you make the same decisions about how to handle the letter 'y'
(which some people think is a vowel, and some do not)?


## while loops

The for loop, in combination with range() meets most data analysis needs, but sometimes we might not know in advance how many iterations are needed.

```python
poem = open('poem.txt')
line = poem.readline()
count = 1
while line:
    print(count, '. ', line)
    line = poem.readline()
    count += 1
```


## Key points

- "Use `for variable in sequence` to process the elements of a sequence one at a time."
- "The body of a `for` loop must be indented."
- "Use `len(thing)` to determine the length of something that contains other values."
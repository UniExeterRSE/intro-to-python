<!-- ---
layout: page
title: Lists
order: 4
session: 1
length: 25
toc: true
adapted: true
attrib_name: Programming with Python - Storing Multiple Values in Lists
attrib_link: https://swcarpentry.github.io/python-novice-inflammation/04-lists/index.html
attrib_copywrite: Software Carpentry
attrib_license: CC-BY 4.0
attrib_license_link: https://creativecommons.org/licenses/by/4.0/
--- -->

# Lists

## Learning Objectives

At the end of this lesson you will be able to:

- Identify and explain some simple data structures, including lists
- Understand what lists are used for
- Store multiple values in a list, and change these later
- Append values to an existing list
- Create and manipulate nested lists


## Python lists

Lists are a data structure in Python that can contain a changeable (or mutable) sequence of elements. These elements can be values or other variables.

We create a list by putting values inside square brackets and separating the values with commas:

~~~python
odds = [1, 3, 5, 7]
print('odds are:', odds)
~~~

~~~
odds are: [1, 3, 5, 7]
~~~


We can access elements of a list using indices -- numbered positions of elements in the list.
These positions are numbered starting at 0, so the first element has an index of 0.

~~~python
print('first element:', odds[0])
print('last element:', odds[3])
print('"-1" element:', odds[-1])
~~~

~~~txt
first element: 1
last element: 7
"-1" element: 7
~~~

Yes, we can use negative numbers as indices in Python. When we do so, the index `-1` gives us the
last element in the list, `-2` the second to last, and so on.
Because of this, `odds[3]` and `odds[-1]` point to the same element here.


There is one important difference between lists and strings:
we can change the values in a list,
but we cannot change individual characters in a string.
For example:

~~~python
names = ['Curie', 'Darwing', 'Turing']  # typo in Darwin's name
print('names is originally:', names)
names[1] = 'Darwin'  # correct the name
print('final value of names:', names)
~~~

~~~txt
names is originally: ['Curie', 'Darwing', 'Turing']
final value of names: ['Curie', 'Darwin', 'Turing']
~~~

works, but assignment to a character does not:

~~~python
name = 'Darwin'
name[0] = 'd'
~~~

~~~txt
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-8-220df48aeb2e> in <module>()
      1 name = 'Darwin'
----> 2 name[0] = 'd'

TypeError: 'str' object does not support item assignment
~~~


## Ch-Ch-Ch-Ch-Changes

Data which can be modified in place is called mutable,
while data which cannot be modified is called
immutable.

Strings and numbers are immutable. This does not mean that variables with string or number values
are constants, but when we want to change the value of a string or number variable, we must
replace the value.

Lists, on the other hand, are mutable: we can modify them after they have been
created. We can change individual elements, append new elements, or reorder the whole list. For
some operations, like sorting, we can choose whether to use a function that modifies the data
in-place or a function that returns a modified copy and leaves the original unchanged.


Be careful when modifying data in-place. If two variables refer to the same list, and you modify
the list value, it will change for both variables!

~~~python
salsa = ['peppers', 'onions', 'cilantro', 'tomatoes']
my_salsa = salsa        # <-- my_salsa and salsa point to the *same* list data in memory
salsa[0] = 'hot peppers'
print('Ingredients in my salsa:', my_salsa)
~~~

~~~txt
Ingredients in my salsa: ['hot peppers', 'onions', 'cilantro', 'tomatoes']
~~~

If you want variables with mutable values to be independent, you
must make a copy of the value when you assign it.

~~~python
salsa = ['peppers', 'onions', 'cilantro', 'tomatoes']
my_salsa = list(salsa)        # <-- makes a *copy* of the list
salsa[0] = 'hot peppers'
print('Ingredients in my salsa:', my_salsa)
~~~

~~~txt
Ingredients in my salsa: ['peppers', 'onions', 'cilantro', 'tomatoes']
~~~


## Nested Lists
Since a list can contain any Python variables, it can even contain other lists.

For example, we could represent the products in the shelves of a small grocery shop:

~~~python
x = [['pepper', 'zucchini', 'onion'],
     ['cabbage', 'lettuce', 'garlic'],
     ['apple', 'pear', 'banana']]
~~~

~~~python
print([x[0]])
~~~

~~~txt
[['pepper', 'zucchini', 'onion']]
~~~

~~~python
print(x[0])
~~~

~~~txt
['pepper', 'zucchini', 'onion']
~~~

~~~python
print(x[0][0])
~~~

~~~txt
'pepper'
~~~


## Heterogeneous Lists

Lists in Python can contain elements of different types. Example:
~~~python
sample_ages = [10, 12.5, 'Unknown']
~~~

There are many ways to change the contents of lists:

~~~python
odds.append(11)
print('odds after adding a value:', odds)
~~~

~~~txt
odds after adding a value: [1, 3, 5, 7, 11]
~~~

~~~python
removed_element = odds.pop(0)
print('odds after removing the first element:', odds)
print('removed_element:', removed_element)
~~~

~~~txt
odds after removing the first element: [3, 5, 7, 11]
removed_element: 1
~~~


~~~python
odds.reverse()
print('odds after reversing:', odds)
~~~

~~~txt
odds after reversing: [11, 7, 5, 3]
~~~


Subsets of lists and strings can be accessed by specifying ranges of values in brackets,
similar to how we accessed ranges of positions in a NumPy array.
This is commonly referred to as "slicing" the list/string.

~~~python
binomial_name = 'Drosophila melanogaster'
group = binomial_name[0:10]
print('group:', group)

species = binomial_name[11:23]
print('species:', species)

chromosomes = ['X', 'Y', '2', '3', '4']
autosomes = chromosomes[2:5]
print('autosomes:', autosomes)

last = chromosomes[-1]
print('last:', last)
~~~

~~~txt
group: Drosophila
species: melanogaster
autosomes: ['2', '3', '4']
last: 4
~~~


## Slicing from the end

Use slicing to access only the last four characters of a string or entries of a list.

~~~
string_for_slicing = 'Observation date: 02-Feb-2013'
list_for_slicing = [['fluorine', 'F'],
                    ['chlorine', 'Cl'],
                    ['bromine', 'Br'],
                    ['iodine', 'I'],
                    ['astatine', 'At']]
~~~

~~~txt
'2013'
[['chlorine', 'Cl'], ['bromine', 'Br'], ['iodine', 'I'], ['astatine', 'At']]
~~~

Would your solution work regardless of whether you knew beforehand
the length of the string or list
(e.g. if you wanted to apply the solution to a set of lists of different lengths)?
If not, try to change your approach to make it more robust.

 Hint: Remember that indices can be negative as well as positive


## Solution
Use negative indices to count elements from the end of a container (such as list or string):

~~~python
string_for_slicing[-4:]
list_for_slicing[-4:]
~~~


## Non-continuous slices

What if we want to take a subset of entries
that aren't next to each other in the sequence?

You can achieve this by providing a third argument
to the range within the brackets, called the _step size_.
The example below shows how you can take every third entry in a list:

~~~python
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
subset = primes[0:12:3]
print('subset', subset)
~~~

~~~txt
subset [2, 7, 17, 29]
~~~

If you wanted to begin the subset with the third entry,
you would need to specify that as the starting point of the sliced range:

~~~python
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
subset = primes[2:12:3]
print('subset', subset)
~~~

~~~txt
subset [5, 13, 23, 37]
~~~


Use the step size argument to create a new string
that contains only every other character in the string
"In an octopus's garden in the shade". Start with
creating a variable to hold the string:

~~~python
beatles = "In an octopus's garden in the shade"
~~~

What slice of `beatles` will produce the
following output (i.e., the first character, third
character, and every other character through the end
of the string)?

~~~txt
I notpssgre ntesae
~~~

## Solution

To obtain every other character you need to provide a slice with the step
size of 2:

~~~python
beatles[0:35:2]
~~~

You can also leave out the beginning and end of the slice to take the whole string
and provide only the step argument to go every second
element:

~~~python
beatles[::2]
~~~


To take a slice from the beginning of a sequence, omit the first index in the range:

~~~python
date = 'Monday 4 January 2016'
day = date[0:6]
print('Using 0 to begin range:', day)
day = date[:6]
print('Omitting beginning index:', day)
~~~

~~~txt
Using 0 to begin range: Monday
Omitting beginning index: Monday
~~~

Omit the ending index in the range to take a slice to the very end of the
sequence:

~~~python
months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
sond = months[8:12]
print('With known last position:', sond)
sond = months[8:len(months)]
print('Using len() to get last entry:', sond)
sond = months[8:]
print('Omitting ending index:', sond)
~~~

~~~txt
With known last position: ['sep', 'oct', 'nov', 'dec']
Using len() to get last entry: ['sep', 'oct', 'nov', 'dec']
Omitting ending index: ['sep', 'oct', 'nov', 'dec']
~~~

## Overloading

`+` usually means addition, but when used on strings or lists, it means "concatenate".
Given that, what do you think the multiplication operator `*` does on lists?
In particular, what will be the output of the following code?

~~~python
counts = [2, 4, 6, 8, 10]
repeats = counts * 2
print(repeats)
~~~

1.  `[2, 4, 6, 8, 10, 2, 4, 6, 8, 10]`
2.  `[4, 8, 12, 16, 20]`
3.  `[[2, 4, 6, 8, 10],[2, 4, 6, 8, 10]]`
4.  `[2, 4, 6, 8, 10, 4, 8, 12, 16, 20]`

The technical term for this is *operator overloading*:
a single operator, like `+` or `*`,
can do different things depending on what it's applied to.

## Solution

The multiplication operator `*` used on a list replicates elements of the list and concatenates
them together:

~~~python
[2, 4, 6, 8, 10, 2, 4, 6, 8, 10]
~~~

It's equivalent to:

~~~python
counts + counts
~~~


## Key points

- `[value1, value2, value3, ...]` creates a list.
- Lists can contain any Python object, including lists (i.e., list of lists).
- Lists are indexed and sliced with square brackets (e.g., list[0] and
list[2:9]), in the same way as strings and arrays.
- Lists are mutable (i.e., their values can be changed in place).
- Strings are immutable (i.e., the characters in them cannot be changed).

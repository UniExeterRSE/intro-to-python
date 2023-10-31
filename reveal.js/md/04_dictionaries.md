<!-- ---
layout: page
title: Dictionaries
order: 5
session: 1
length: 15
toc: true
adapted: false
--- -->

# Dictionaries

## Learning Objectives

At the end of this lesson you will be able to:

- Identify and explain what a dictionary is
- Explain what makes a dictionary different to a list
- Understand the `key`: `value` relationship
- Create a dictionary containing simple values
- Update values in a dictionary


## Introduction

Lists and arrays are useful, but don’t cover every use case. One of Python’s best features is its “dictionary” data structure. 

A dictionary supports key-value storage of data, it lets you store and retrieve data values by name.

## Create a dictionary

Let’s create and use a simple dictionary of scientist's birth years to illustrate this:

~~~python
birth_years = {'Newton': 1642, 'Darwin': 1809, 'Einstein': 1979, 'Nobel': 1833}
print(birth_years)
~~~

~~~txt
{'Newton': 1642, 'Darwin': 1809, 'Einstein': 1979, 'Nobel': 1833}
~~~

Here, 'Newton', 'Darwin', 'Einstein' and 'Nobel' are keys, and the years are values. Keys and values form a pairwise mapping, allowing the retrieval of a value via the value's key.


We can retrieve a value from a dictionary by entering the correct key for this value. We do this using the following syntax:

~~~python
value_we_want = dictionary['key_of_value_we_want']
~~~

This is similar to accessing a value stored in a list. However, the key does not have to be an integer.

## Retrieve a value

Retrieve the birth year for Isaac Newton from the dictionary of birth years.

## Try it


## Solution
~~~python
birth_years = {'Newton': 1642, 'Darwin': 1809, 'Einstein': 1979, 'Nobel': 1833}
print(birth_years['Newton'])
~~~

~~~txt
1642
~~~


## Altering a dictionary

As with lists, dictionaries are mutable. We can add new 
key, value pairs to a dictionary:

~~~python
birth_years = {'Newton': 1642, 'Darwin': 1809, 'Einstein': 1979, 'Nobel': 1833}
birth_years['Turing'] = 1612
print(birth_years)
~~~

~~~txt
{'Newton': 1642, 'Darwin': 1809, 'Einstein': 1979, 'Nobel': 1833, 'Turing': 1612}
~~~

Oops, we made a mistake there. Turing was actually born in 1912. We can update a value using a key.

Turing's birthdate above is incorrect. Values may be modified by re-assignment:

~~~python
birth_years['Turing'] = 1912
print(birth_years)
~~~

~~~txt
{'Newton': 1642, 'Darwin': 1809, 'Einstein': 1979, 'Nobel': 1833, 'Turing': 1912}
~~~


## Add more scientists to the dictionary

Add two more scientist's birth years to our dictionary of birth years.

## Try it


## Solution

~~~python
birth_years = {'Newton': 1642, 'Darwin': 1809, 'Einstein': 1979, 'Nobel': 1833, 'Turing': 1612}
birth_years['Curie'] = 1867
birth_years['Franklin'] = 1920
print(birth_years)
~~~

~~~txt
{'Newton': 1642, 'Darwin': 1809, 'Einstein': 1979, 'Nobel': 1833 'Turing': 1612, 'Curie': 1867, 
'Franklin': 1920}
~~~


## Retrieve all keys and values

Dictionaries contain a number of in-built methods that allow you to easily access the data contained within. These methods are automatically attached to every dictionary.

~~~python
birth_years = {'Newton': 1642, 'Darwin': 1809, 'Einstein': 1979, 'Nobel': 1833, 'Turing': 1612, 
'Curie': 1867, 'Franklin': 1920}
print(birth_years.keys())
~~~

~~~txt
dict_keys(['Newton', 'Darwin', 'Einstein', 'Nobel', 'Turing', 'Curie', 'Franklin'])
~~~

Similarly for values:

~~~python
print(birth_years.values())
~~~

~~~txt
dict_values([1642, 1809, 1979, 1833, 1612, 1867, 1920])
~~~


We can convert ```dict_values``` and ```dict_keys``` types to lists:

~~~python
list(birth_years.values())
~~~

~~~txt
[1642, 1809, 1979, 1833, 1612, 1867, 1920]
~~~

And finally, retrieve the key, value pairs together, forming a list of tuples:

~~~python
list(birth_years.items())
~~~

~~~txt
[('Newton', 1642), ('Darwin', 1809), ('Einstein', 1979), ('Nobel', 1833), ('Turing', 1612), 
('Curie', 1867), ('Franklin', 1920)]
~~~


## Key points

- A dictionary stores key-value pairs.
- Dictionaries are unordered.
- Dictionaries are immutable.
<!-- ---
layout: page
title: Functions
order: 10
session: 2
length: 30
toc: true
adapted: true
attrib_name: Programming with Python - Creating Functions
attrib_link: https://swcarpentry.github.io/python-novice-inflammation/08-func/index.html
attrib_copywrite: Software Carpentry
attrib_license: CC-BY 4.0
attrib_license_link: https://creativecommons.org/licenses/by/4.0/
--- -->

# Functions

## Learning Objectives

At the end of this lesson you will be able to:

- Define a function that takes parameters.
- Return values from a function.
- Debug a function.
- Set default values for parameters.


### What are functions?

Functions are named blocks of instructions.

### Why use functions?

Functions allow us to reuse pieces of code.

### Built in functions

We have already used some built-in functions: `print()`, `type()`, `range()` and so on. We have also used functions that are associated with objects, such as `.append()`, and `.keys()`. 

They allow us to create more concise, more readable, and more reliable software.


## Defining functions

Let's start by defining a function `fahr_to_celsius` that converts temperatures from Fahrenheit to Celsius:

~~~python
def fahr_to_celsius(fahr_temp):
    celsius_temp = (fahr_temp - 32) * (5/9) 
    return celsius_temp
~~~

The function definition opens with the keyword `def` followed by the
name of the function (`fahr_to_celsius`) and a parenthesized list of parameter names (`fahr_temp`). The
body of the function --- the
statements that are executed when it runs --- is indented below the
definition line.  The body concludes with a `return` keyword followed by the return value.


## Calling functions

When we call the function,
the values we pass to it are assigned to variables (known as 'arguments' or 'parameters')
that we can use inside the function.

Let's call our function:

~~~python
temperature_f = 32
temperature_c = fahr_to_celsius( temperature_f )
~~~

The function will return the calculated value.

We can use function calls where we might use a variable:

~~~python
print('freezing point of water:', fahr_to_celsius(32), 'C')
print('boiling point of water:', fahr_to_celsius(212), 'C')
~~~

~~~txt
freezing point of water: 0.0 C
boiling point of water: 100.0 C
~~~


## Building programs

We can now write a function to turn Celsius into Kelvin:

~~~python
def celsius_to_kelvin(temp_c):
    return temp_c + 273.15

print('freezing point of water in Kelvin:', celsius_to_kelvin(0.))
~~~

~~~txt
freezing point of water in Kelvin: 273.15
~~~

**Converting Fahrenheit to Kelvin**

We could write out the formula,
but we don't need to. We can combine the functions we already have:

~~~python
def fahr_to_kelvin(temp_f):
    temp_c = fahr_to_celsius(temp_f)
    temp_k = celsius_to_kelvin(temp_c)
    return temp_k

print('boiling point of water in Kelvin:', fahr_to_kelvin(212.0))
~~~

~~~txt
boiling point of water in Kelvin: 373.15
~~~


## Variable Scope

In composing our temperature conversion functions, we created variables inside of those functions,
`temp`, `temp_c`, `temp_f`, and `temp_k`.
We refer to these as local variables,
because they only exist inside the function.
If we try to access these variables outside the function, we get an error:

~~~python
print('Again, temperature in Kelvin was:', temp_k)
~~~

~~~txt
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-1-eed2471d229b> in <module>
----> 1 print('Again, temperature in Kelvin was:', temp_k)

NameError: name 'temp_k' is not defined
~~~


## Back to for loops

What will this program print?

```python
for count in range(4):
    twice_count = count * 2

print(count)
print(twice_count)
```


Answer:
```txt
3 6
```

The loop index variable and other variables declared inside a for (or while) loop or if block
do NOT have local scope.


## Variables declared outside a function

### Reading

Inside a function, we can read the value of variables declared outside the function.

~~~python
def print_temperatures():
  print('temperature in Fahrenheit was:', temp_fahr)
  print('temperature in Kelvin was:', temp_kelvin)

temp_fahr = 212.0
temp_kelvin = fahr_to_kelvin(temp_fahr)

print_temperatures()
~~~

~~~txt
temperature in Fahrenheit was: 212.0
temperature in Kelvin was: 373.15
~~~

Note that the ```return``` statement is optional


## Variables declared outside a function

We can modify mutable objects inside a function:

```python
def make_list(new_item):
    local_str = "I'm a local string"
    my_list.append(new_item)
    my_dict[new_item] = local_str
    return len(my_list)

my_list = []
my_dict = {}
global_str = "I'm a global string, you can access me anywhere"
count = make_list("hello")
count = make_list("world")
print('main:', count, my_list, my_dict)
print('main:', global_str)
```


## Exercises

## Combining Strings

"Adding" two strings produces their concatenation:
`'a' + 'b'` is `'ab'`.

Write a function called `fence` that takes two parameters called `original` and `wrapper`
and returns a new string that has the wrapper character at the beginning and end of the original.
A call to your function should look like this:

~~~python
print(fence('name', '*'))
~~~

~~~txt
*name*
~~~


## Solutions

~~~python
def fence(original, wrapper):
    fenced = wrapper + original + wrapper
    return fenced
~~~

As the variable fenced is only used as a parameter for the return statement, we can write:

~~~python
def fence(original, wrapper):
    return wrapper + original + wrapper
~~~

When a function is a single statement there is is an alternate, shorter, style:

~~~python
fence = lambda original, wrapper: wrapper + original + wrapper
~~~


## Return or print?

Note that `return` and `print` are not interchangeable.
`print` is a Python function that *prints* data to the screen.
It enables us, *users*, see the data.

The `return` statement makes data visible to the program.
Let's have a look at the following function:

~~~python
def add(a, b):
    print(a + b)
~~~

What will we see if we run these statements?

~~~python
A = add(7, 3)
print(A)
~~~


## Solution

Python will first execute the function `add` with `a = 7` and `b = 3`,
and, therefore, print `10`. However, because function `add` does not have a
line that starts with `return` (no `return` "statement"), it will, by default, return
nothing which, in Python world, is called `None`. Therefore, `A` will be assigned to `None`
and the last line (`print(A)`) will print `None`. As a result, we will see:

~~~txt
10
None
~~~


## Selecting Characters From Strings

If the variable `s` refers to a string,
then `s[0]` is the string's first character
and `s[-1]` is its last.
Write a function called `outer`
that returns a string made up of just the first and last characters of its input.
A call to your function should look like this:

~~~python
print(outer('helium'))
~~~

~~~txt
hm
~~~


 ## Solution

~~~python
def outer(input_string):
    return input_string[0] + input_string[-1]
~~~


## Rescaling a list

Write a function `rescale` that takes a list as input
and returns a corresponding list of values scaled to lie in the range 0.0 to 1.0.

Where `L` and `H` are the lowest and highest values in the original list,
then the replacement for a value `v` should be `(v-L) / (H-L)`.


## Solution

~~~python
def rescale(input_list):
    list_min = min(input_list)
    list_max = max(input_list)
     
    output_list = []
    for i in input_list:
        scaled_i = (float(i) - list_min) / (list_max - list_min)
        output_list.append(scaled_i)
     
    return output_list
~~~


## Defining Defaults

Rewrite the `rescale` function so that it scales data to lie between `0.0` and `1.0` by default,
but will allow the caller to specify lower and upper bounds if they want.


## Solution

~~~python
def rescale(input_list, low_val=50, high_val=100):
    list_min = min(input_list)
    list_max = max(input_list)
     
    output_list = []
    for i in input_list:
        intermediate_i = (float(i) - list_min) / (list_max - list_min)
        scaled_i = intermediate_i * (high_val - low_val) + low_val
        output_list.append(scaled_i)

    return output_list
~~~


## Mixing parameters with and without defaults

Given the following code:

~~~python
def numbers(one, two=2, three, four=4):
    n = str(one) + str(two) + str(three) + str(four)
    return n

print(numbers(1, two="two", three=3))
~~~

What will be printed?

1.  `1234`
2.  `1two3`
3.  `1two34`
4.  `Something else`


## Solution

Attempting to define the `numbers` function results in `SyntaxError`.

Parameters without default values must come before those with defaults.


## Key points

- Define a function using `def function_name(parameter):`.
- The body of a function must be indented.
- Call a function using `function_name(value)`.
- Variables defined within a function can only be seen and used within the body of the function.
- Within a function, we can access global variables.
- Variables created within a function override global variables if their names match.
- Specify default values for parameters when defining a function using `name=value`
   in the parameter list.
- Parameters can be passed by matching based on name, by position,
   or by omitting them (in which case the default value is used).

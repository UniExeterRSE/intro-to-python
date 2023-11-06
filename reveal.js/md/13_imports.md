<!-- ---
layout: page
title: Imports
order: 11
session: 2
length: 20
toc: true
--- -->

# Imports

## Learning Objectives

At the end of this lesson you will be able to:

- Import some key Python modules from the Python Standard Library
- Understand how to use the functions they include
- Identify some of the main packages available on PyPi, an online repository
- Install these, and check they work


## The Python standard library

This is a collection of modules that are installed when you install Python. 

### Importing a module

We can import modules included with the standard library immediately. For example, the `math` module gives access to the underlying C library functions for floating point math. Lets import it using the `import` function.

~~~python
import math
~~~


Try importing a module with an incorrect name:

~~~python
import blahblah
~~~

~~~txt
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ModuleNotFoundError: No module named 'blahblah'
~~~


## Using a module

Now that we have imported the `math` module, we can access the functions contained within it. This is done using the prefix `math.something`

But how do we know what is there for us to use?

The first thing to do is to check the documentation. For the `math` module, this can be found at [https://docs.python.org/3/library/math.html](https://docs.python.org/3/library/math.html)

Lets do a quick calculation with the cosine function and the `pi` constant.

~~~python
math.cos(math.pi / 4)
~~~

~~~txt
0.70710678118654757
~~~

Most programming editiors help you find functions in modules. Typically you type `math.` and then hit the tab key. This should give you a list of everything available to use.


## Exercise: generate random numbers

Write a function that returns a list of n random integers between 0 and 100.
n should be a function parameter, and you should use the standard library module `random`. 

The `random` documentation can be found at 

[https://docs.python.org/3/library/random.html](https://docs.python.org/3/library/random.html)

### Hint

To generate a single random number

```python
import random

rand_int = random.randrange(100)
```


 ## Solution

~~~python
import random
 
def generate_random(n):
     """Generates n random numbers between 0 and 100, and places them in a list."""
     
     output_list = []
     for i in range(0, n):
         rand_int = random.randrange(100)
         output_list.append(rand_int)
         
     return output_list
~~~


## External Python libraries

Some popular scientific libraries:

* [NumPy](https://numpy.org/): Used for array computation, GPU processing, and generally running things really, really fast.
* [SciPy](https://scipy.org/): Contains many more complex algorithms, for optimisation, geometry, algebra, statistics, and much more.
* [Pandas](https://pandas.pydata.org/): Table-like data structures, and vectorised table operations. Think Excel for millions of rows.
* [Matplotlib](https://matplotlib.org/): Plotting library for Python.

These, and some others, are included in the Anaconda Python distribution.


## Installing libraries manually

If your Python distribution does not include a library you wish to use, then you must install the necessary modules.

Typically `pip` is used. 

For example, to install `numpy` using `pip`, we type in the shell/terminal/command prompt:

~~~sh
pip install numpy
~~~

Anaconda uses a different installer.

~~~sh
conda install SOME_LIBRARY
~~~


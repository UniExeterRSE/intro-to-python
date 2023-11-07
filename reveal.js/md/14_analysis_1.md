<!-- ---
layout: page
title: Data Analysis Task 1
order: 12
session: 2
length: 30
toc: true
--- -->

# Data Analysis Task 1

## Learning Objectives

In this lesson, we will:

- Read tabular data from a file into a program.
- Select individual values and subsections from data.
- Perform operations on arrays of data.


## Loading data into Python

To begin processing the clinical trial inflammation data, we need to load it into Python.
We can do that using a library called
[NumPy](https://numpy.org/doc/stable "NumPy Documentation"), which stands for Numerical Python.
In general, you should use this library when you want to do fancy things with lots of numbers,
especially if you have matrices or arrays. To tell Python that we'd like to start using NumPy,
we need to import it:

~~~python
import numpy as np
~~~

Libraries provide additional functionality.

Once we've imported the library, we can ask the library to read our data file for us:

~~~python
np.loadtxt(fname='data/inflammation-01.csv', delimiter=',')
~~~


loadtxt will create an array initialized with the data file contents:

~~~txt
array([[ 0.,  0.,  1., ...,  3.,  0.,  0.],
       [ 0.,  1.,  2., ...,  1.,  0.,  1.],
       [ 0.,  1.,  1., ...,  2.,  1.,  1.],
       ...,
       [ 0.,  1.,  1., ...,  1.,  1.,  1.],
       [ 0.,  0.,  0., ...,  0.,  2.,  0.],
       [ 0.,  0.,  1., ...,  1.,  1.,  0.]])
~~~

The expression `np.loadtxt(...)` is a
function call
that asks Python to run the function `loadtxt` which
belongs to the `numpy` library.

Python dot notation allows us to refer to the contents of libraries. 

As an example, John Smith is the John that belongs to the Smith family.
We could use the dot notation to write his name `smith.john`,
just as `loadtxt` is a function that belongs to the `numpy` library.


Our call to `np.loadtxt` read our file
but didn't save the data in memory.
To do that,
we need to assign the array to a variable:

~~~python
data = np.loadtxt(fname='data/inflammation-01.csv', delimiter=',')
print(data)
~~~

~~~txt
[[ 0.  0.  1. ...,  3.  0.  0.]
 [ 0.  1.  2. ...,  1.  0.  1.]
 [ 0.  1.  1. ...,  2.  1.  1.]
 ...,
 [ 0.  1.  1. ...,  1.  1.  1.]
 [ 0.  0.  0. ...,  0.  2.  0.]
 [ 0.  0.  1. ...,  1.  1.  0.]]
~~~

Now that the data are in memory,
we can manipulate them.
First,
let's ask what type of thing `data` refers to:

~~~python
print(type(data))
~~~

~~~txt
<class 'numpy.ndarray'>
~~~


## Data properties

A Numpy array contains one or more elements
of the same type. The `type` function will only tell you that
a variable is a NumPy array but won't tell you the type of
thing inside the array.
We can find out the type
of the data contained in the NumPy array by examining the ```dtype``` property:

~~~python
print(data.dtype)
~~~

~~~txt
float64
~~~

This tells us that the NumPy array's elements are
floating point numbers.

Similarly we can see the array's shape, how many rows and columns it has:

~~~python
print(data.shape)
~~~

~~~txt
(60, 40)
~~~


## Data values

If we want to get a single number from the array, we provide an
index in square brackets after the variable name.

Our inflammation data has two dimensions, so
we will need to use two indices to refer to one specific value:

~~~python
print('first value in data:', data[0, 0])
~~~

~~~txt
first value in data: 0.0
~~~

~~~python
print('middle value in data:', data[30, 20])
~~~

~~~txt
middle value in data: 13.0
~~~

The expression `data[30, 20]` accesses the element at row 30, column 20.


## Slicing data

An index like `[30, 20]` selects a single element of an array,
but we can select whole sections as well.

For example,
we can select the first ten days (columns) of values
for the first four patients (rows) like this:

~~~python
print(data[0:4, 0:10])
~~~

~~~txt
[[ 0.  0.  1.  3.  1.  2.  4.  7.  8.  3.]
 [ 0.  1.  2.  1.  2.  1.  3.  2.  2.  6.]
 [ 0.  1.  1.  3.  3.  2.  6.  2.  5.  9.]
 [ 0.  0.  2.  0.  4.  2.  2.  1.  6.  7.]]
~~~

The slice `0:4` means, "Start at index 0 and go up to,
but not including, index 4". 


We don't have to start slices at 0:

~~~python
print(data[5:10, 0:10])
~~~

We also don't have to include the upper and lower bound on the slice.  If we don't include the lower
bound, Python uses 0 by default; if we don't include the upper, the slice runs to the end of the
axis, and if we don't include either (i.e., if we use ':' on its own), the slice includes
everything:

~~~python
small = data[:3, 36:]
print('small is:')
print(small)
~~~

~~~txt
small is:
[[ 2.  3.  0.  0.]
 [ 1.  1.  0.  1.]
 [ 2.  2.  1.  1.]]
~~~


## Analyzing data

NumPy has several useful functions that take an array as input to perform operations on its values.
If we want to find the average inflammation for all patients on
all days, for example, we can ask NumPy to compute `data`'s mean value:

~~~python
print(np.mean(data))
~~~

~~~txt
6.14875
~~~

`mean` is a function that takes
an array as an argument.


## Not All Functions Have Input

Generally, a function uses inputs to produce outputs.
However, some functions produce outputs without
needing any input. For example, checking the current time
doesn't require any input.

~~~python
import time
print(time.ctime())
~~~

~~~txt
Sat Mar 26 13:07:33 2016
~~~

For functions that don't take in any arguments,
we still need parentheses `()`


## More NumPy

Let's use three other NumPy functions to get some descriptive values about the dataset.
We'll also use multiple assignment,
a convenient Python feature that will enable us to do this all in one line.

~~~python
maxval, minval, stdval = np.max(data), np.min(data), np.std(data)

print('maximum inflammation:', maxval)
print('minimum inflammation:', minval)
print('standard deviation:', stdval)
~~~

~~~txt
maximum inflammation: 20.0
minimum inflammation: 0.0
standard deviation: 4.61383319712
~~~


## Array axes

What if we need the maximum inflammation for each patient over all days (as in the
next diagram on the left) or the average for each day (as in the
diagram on the right)? As the diagram below shows, we want to perform the
operation across an axis:

![Per-patient maximum inflammation is computed row-wise across all columns using
np.max(data, axis=1). Per-day average inflammation is computed column-wise across all rows using
np.mean(data, axis=0).](../fig/python-operations-across-axes.png)


Most array functions allow us to specify the axis we want to work on.
If we ask for the average across axis 0 (rows in our 2D example),
we get:

~~~python
print(np.mean(data, axis=0))
~~~

~~~txt
[  0.           0.45         1.11666667   1.75         2.43333333   3.15
   3.8          3.88333333   5.23333333   5.51666667   5.95         5.9
   8.35         7.73333333   8.36666667   9.5          9.58333333
  10.63333333  11.56666667  12.35        13.25        11.96666667
  11.03333333  10.16666667  10.           8.66666667   9.15         7.25
   7.33333333   6.58333333   6.06666667   5.95         5.11666667   3.6
   3.3          3.56666667   2.48333333   1.5          1.13333333
   0.56666667]
~~~

We can ask this array what its shape is:

~~~python
print(np.mean(data, axis=0).shape)
~~~

~~~txt
(40,)
~~~

We have an N×1 vector, so this is the average inflammation per day for all patients.


If we average across axis 1 (columns in our 2D example), we get:

~~~python
print(np.mean(data, axis=1))
~~~

~~~txt
[ 5.45   5.425  6.1    5.9    5.55   6.225  5.975  6.65   6.625  6.525
  6.775  5.8    6.225  5.75   5.225  6.3    6.55   5.7    5.85   6.55
  5.775  5.825  6.175  6.1    5.8    6.425  6.05   6.025  6.175  6.55
  6.175  6.35   6.725  6.125  7.075  5.725  5.925  6.15   6.075  5.75
  5.975  5.725  6.3    5.9    6.75   5.925  7.225  6.15   5.95   6.275  5.7
  6.1    6.825  5.975  6.725  5.7    6.25   6.4    7.05   5.9  ]
~~~

which is the average inflammation per patient across all days.


## Stacking Arrays

Arrays can be concatenated and stacked on top of one another,
using NumPy's `vstack` and `hstack` functions for vertical and horizontal stacking, respectively.

~~~python
import numpy as np

A = np.array([[1,2,3], [4,5,6], [7, 8, 9]])
print('A = ')
print(A)

B = np.hstack([A, A])
print('B = ')
print(B)

C = np.vstack([A, A])
print('C = ')
print(C)
~~~


~~~txt
A =
[[1 2 3]
 [4 5 6]
 [7 8 9]]
B =
[[1 2 3 1 2 3]
 [4 5 6 4 5 6]
 [7 8 9 7 8 9]]
C =
[[1 2 3]
 [4 5 6]
 [7 8 9]
 [1 2 3]
 [4 5 6]
 [7 8 9]]
~~~

## Exercise

Write some additional code that slices the first and last columns of `A`,
and stacks them into a 3x2 array.
Make sure to `print` the results to verify your solution.


## Solution

A 'gotcha' with array indexing is that singleton dimensions
are dropped by default. That means `A[:, 0]` is a one dimensional
array, which won't stack as desired. To preserve singleton dimensions,
the index itself can be a slice or array. For example, `A[:, :1]` returns
a two dimensional array with one singleton dimension (i.e. a column
vector).

~~~python
D = np.hstack((A[:, :1], A[:, -1:]))
print('D = ')
print(D)
~~~

~~~txt
D =
[[1 3]
 [4 6]
 [7 9]]
~~~


An alternative way to achieve the same result is to use Numpy's
delete function to remove the second column of A.

~~~python
D = np.delete(A, 1, 1)
print('D = ')
print(D)
~~~

~~~
D =
[[1 3]
 [4 6]
 [7 9]]
~~~


## Change in inflammation

The patient data is _longitudinal_ in the sense that each row represents a
series of observations relating to one individual.  This means that
the change in inflammation over time is a meaningful concept.
Let's find out how to calculate changes in the data contained in an array
with NumPy.

The `np.diff()` function takes an array and returns the differences
between two successive values. Let's use it to examine the changes
each day across the first week of patient 3 from our inflammation dataset.

~~~python
patient3_week1 = data[3, :7]
print(patient3_week1)
~~~

~~~txt
[0. 0. 2. 0. 4. 2. 2.]
~~~

Calling `np.diff(patient3_week1)` would do the following calculations

~~~python
[ 0 - 0, 2 - 0, 0 - 2, 4 - 0, 2 - 4, 2 - 2 ]
~~~


## Exercises

1. If the shape of an individual data file is `(60, 40)` (60 rows and 40
columns), what would the shape of the array be after you run the `diff()`
function and why?

2. How would you find the largest change in inflammation for each patient? Does
it matter if the change in inflammation is an increase or a decrease?


## Solutions

1. The shape will be `(60, 39)` because there is one fewer difference between
columns than there are columns in the data.

2. By using the `np.max()` function after you apply the `np.diff()`
function, you will get the largest difference between days.

~~~python
np.max(np.diff(data, axis=1), axis=1)
~~~

~~~txt
array([  7.,  12.,  11.,  10.,  11.,  13.,  10.,   8.,  10.,  10.,   7.,
         7.,  13.,   7.,  10.,  10.,   8.,  10.,   9.,  10.,  13.,   7.,
        12.,   9.,  12.,  11.,  10.,  10.,   7.,  10.,  11.,  10.,   8.,
        11.,  12.,  10.,   9.,  10.,  13.,  10.,   7.,   7.,  10.,  13.,
        12.,   8.,   8.,  10.,  10.,   9.,   8.,  13.,  10.,   7.,  10.,
         8.,  12.,  10.,   7.,  12.])
~~~

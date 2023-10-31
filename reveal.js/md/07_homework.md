# Homework

### This is the house that Jack built

Write a program that uses loops to print the verses from the poem.

Here's something to get you started.

```python
lines = [
    'This is the house that Jack built.',
    'This is the malt that lay in the house that Jack built.',
    'This is the rat that ate the malt',
    'That lay in the house that Jack built.', 'This is the cat',
    'That killed the rat that ate the malt',
    'This is the dog that worried the cat'
]

for line in lines[4:6] + lines[3:4]:
  print(line)
print()
for line in lines[6:7] + lines[5:6] + lines[3:4]:
  print(line)
```


### Also (or instead?)

Calculate some statistics from the poem, e.g. word frequency, line lengths.

### Resources

<https://en.wikipedia.org/wiki/This_Is_the_House_That_Jack_Built>
<https://www.gutenberg.org/files/12109/12109-h/12109-h.htm>
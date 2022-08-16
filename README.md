# Coding Challenge

## Instructions

Nothing special in instructions. Just run this like a typical node module after cloning the repository.

```
node index.js
```

## Testing Scenarios:
1. Use given array [1, 2, 2, 3, 4, 6, 3, 1, 4, 2, 8] and `k = 5`
2. Change K to other values.
3. Change values on array to see other validations like
    - having overriding subsequences
    - length of boxes used.


## Thought Process
- first, I tried to create the main function of getting all the intervals that is has subsequences equal to the given `k` value.
- then I tried to format the result into range of index only not including all the indexes on the array.
- tried creating validation for the result like checking the length value of each array to know the minimun box used and checking if there are duplicate values to determine overriding.
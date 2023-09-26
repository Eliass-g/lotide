# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eliassg/lotide`

**Require it:**

`const _ = require('@eliassg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first elemnt of array
* `tail(array)`: returns array without first element
* `middle(array)`: returns middle of the array
* `countLetters(string)`: returns list of frequency of each char
* `countOnly(allItems, itemsToCount)`: returns list of frequency of each key in object which was specified to count
* `findKey(object, callback)`: find key with given value
* `findKeyByValue(object, value)`: find key with given value
* `letterPositions(string)`: returns position of specified letter in string
* `map(array, callback)`: returns array with specified changes
* `takeUntil(array, callback)`: returns array up until set condition
* `without(arrayOne, arrayTwo)`: returns array without values specified
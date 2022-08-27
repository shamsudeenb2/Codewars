// Your task is to Combine two Strings. But consider the rule...

// By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...

// And here's the rule:
// Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
// I think that's all;-)...



// Case insensitive letter occurrences count
const count = str => str
        .toLowerCase()
        .split('')
        .reduce((R, x) => (R[x] = (R[x]||0) + 1, R), {});

// Invert character case
const changeCase = char => char > 'Z' ? char.toUpperCase() : char.toLowerCase();

// Rule-based string processing
const strConv = (str, rules) => str
        .split('')
        .map(x => rules[x.toLowerCase()] % 2 ? changeCase(x) : x)
        .join('');

const workOnStrings = (a, b) => strConv(a, count(b)) + strConv(b, count(a));

// Input: "abc" and "cde"      => Output: "abCCde" 
// Input: "ab" and "aba"       => Output: "aBABA"
// Input: "abab" and "bababa"  => Output: "ABABbababa"
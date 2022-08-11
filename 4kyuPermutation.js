function outerPerm(string){
    
    const perms = (str) => {
        const result = [];
        if (str.length < 2) return [str];
        for (let i = 0; i < str.length; i++) {
          const char = str[i];
          const otherChars = str.substring(0, i) + str.substring(i + 1);
          const otherPerms = perms(otherChars);
          otherPerms.forEach(x => {
            result.push(char + x)
          });
        }
        return result;
      }
        let permutation = perms(string)
        return permutation.filter((c,i,ar)=>{
                    return ar.indexOf(c) === i
                })
    }







//////Other solution ///////////////

// function permutations(str) {
//     return (str.length <= 1) ? [str] :
//             Array.from(new Set(
//               str.split('')
//                  .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
//                  .reduce((r, x) => r.concat(x), [])
//             ));
//    }
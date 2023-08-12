// Letters                        Value
// a, e, i, o, u, l, n, r, s, t   1
// d, g                           2
// b, c, m, p                     3
// f, h, v, w, y                  4
// k                              5
// j, x                           6
// q, z                           7


let score = 
    {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
        l: 1,
        n: 1,
        r: 1,
        s: 1,
        t: 1,
        d: 2,
        g: 2,
        b: 3,
        c: 3,
        m: 3,
        p: 3,
        f: 4,
        h: 4,
        v: 4,
        w: 4,
        y: 4,
        k: 5,
        j: 6,
        x: 6,
        q: 7,
        z: 7,
    }

function getColculate (score, word) {
    let arrWord = word.split("");

    return arrWord.reduce((acc, element) => acc += +score[element], 0);
}

console.log(getColculate(score, "hello"));
function dnaHelix(n) {
    let helix = ['**AT**', '*C--G*', 'T----T', '*A--G*', '**GG**',
        '*A--T*', 'C----G', '*T--T*', '**AG**', '*G--G*',
        'A----T', '*C--G*', '**TT**', '*A--G*', 'G----G',
        '*A--T*', '**CG**', '*T--T*', 'A----G', '*G--G*'];

    for (let i = 0; i < n; i++) {
        console.log(helix[i % helix.length]);
    }
}

dnaHelix(10);
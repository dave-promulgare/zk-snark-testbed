template Multiplier(n) {
    signal input a;
    signal input b;
    signal input c;
    signal output d;

    signal int[n];

    int[0] <== a*b + c;
    for (var i=1; i<n; i++) {
        int[i] <== int[i-1]*int[i-1] + c;
    }

    d <== int[n-1];
}

component main {public [a,b]} = Multiplier(1000);


function egcd(a, b) {
    if (a == 0)
        console.log(b);

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    console.log(a);
}

egcd(84,18);

// 84/18 = 4 и остатък 12
// 18/12 = 1 и остатък 6
// 12/6 = 2 без остатък

function cutReverse(input) {
    let result = "";
    for (index = input.length-1; index >= 0; index--) {
        result+=input[index];
    }

    let firstHalf=result.substring(0,input.length/2);
    let secondHalf=result.substring(input.length/2);
    console.log(`${secondHalf}\n${firstHalf}`);
}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

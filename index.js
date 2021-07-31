class Math {

    constructor() { }

    static isNullOrEmpty(input){
        // Returns true if the input is either undefined, null, or empty, false otherwise
        return (input === undefined || input === null || input === '');
    }

    static add(...args){
        let res = 0;
        args.forEach(num => res+=num);
        return res;
    }

    static sub(num1, num2){
        return num1-num2;
    }

    static multi(...args){
        let res=1;
        args.forEach(num => res*=num);
        return res;
    }

    static div(num1, num2){
        return num1 / num2;
    }

    static mod(num1, num2){
        return num1 % num2;
    }

    static abs(num){
        if(num < 0){
            num = num*-1;
        }
        return num;
    }

    static sqr(num){
        return num*num;
    }

    static cub(num){
        return num*num*num;
    }

    static pow(base, exp){
        let res=1;
        while(exp--){
            res*=base;
        }
        return res;
    }

    static max(...args){
        let res = args[0];
        args.forEach(num => {
            if(num > res){
                res = num;
            }
        })
        return res;
    }

    static min(...args){
        let res = args[0];
        args.forEach(num => {
            if(num < res){
                res = num;
            }
        })
        return res;
    }

}

// Export to make the function available to other packages
module.exports = Math;
export const FizzBuzz = () => {
    let message;
    for (let i = 1; i < 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            message = "FizzBuzz";
        } else if (i % 3 === 0) {
            message = "Fizz";
        } else if (i % 5 === 0) {
            message = "Buzz";
        } else {
            message = "Not Fizz, Not Buzz"
        }
    }
   return message; 
}
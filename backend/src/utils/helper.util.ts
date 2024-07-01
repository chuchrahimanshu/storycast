export const generateSixDigitRandomOTP = (): string => {
    let OTP = "";

    for(let index = 0; index < 6; index++){
        const randomDigit: number = Math.floor(Math.random() * 10);
        OTP += randomDigit;
    }

    return OTP;
}
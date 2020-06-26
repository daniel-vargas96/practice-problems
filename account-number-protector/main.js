function accountNumberProtector(cardNumberString) {
  for (let i = 0; i < cardNumberString.length; i++) {
    return `**${cardNumberString[12]}${cardNumberString[13]}${cardNumberString[14]}${cardNumberString[15]}`;
  }
}

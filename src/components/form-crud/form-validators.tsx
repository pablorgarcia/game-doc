
const undefinedValidator = (value: string) => {
  return value != undefined
}

const numberGreaterThanZero = (value: number) => {
  return value > 0
}

export { undefinedValidator, numberGreaterThanZero }


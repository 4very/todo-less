const required = (propertyType: Object) => {
  return ((v: string | any[]) => v && v.length > 0) || `You must input a ${propertyType}`
}
const minLength = (propertyType: Object, minLength: Number) => {
  return ((v: string | any[]) => v && v.length >= minLength) || `${propertyType} must be at least ${minLength} characters`
}
const maxLength = (propertyType: Object, maxLength: Number) => {
  return ((v: string | any[]) => v && v.length <= maxLength) || `${propertyType} must be less than ${maxLength} characters`
}

const emailFormat = () => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/
  return ((v: string) => v && regex.test(v)) || 'Must be a valid email'
}

export default {
  required,
  minLength,
  maxLength,
  emailFormat,
}

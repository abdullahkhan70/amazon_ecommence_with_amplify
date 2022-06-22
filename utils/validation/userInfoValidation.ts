import * as yup from 'yup';
export const userInfoValidation = yup.object({
    fullName: yup.string()
        .required()
        .test('full-name', "Please, enter more than 4 characters.", (val = '') => {
            return val?.length > 4
        })
        .min(4),
    phoneNo: yup.string()
        .notRequired()
        .min(10),
    requiredAddress: yup.string()
        .required()
        .test("required-address", "Please, enter more than 10 characters.", (val = '') => {
            return val?.length > 10
        })
        .min(7),
    optionalAddress: yup.string()
        .notRequired()
        .min(10),
    city: yup.string()
        .required()
        .test("required-city", "Please, enter city more than 7 characters.", (val = '') => {
            return val?.length > 7
        })
        .min(7),
    state: yup.string()
        .required()
        .test("required-state", "Please, enter more than 5 characters.", (val = '') => {
            return val?.length > 5
        })
        .min(5),
    zipCode: yup.string()
        .required()
        .test("required-state", "Please, enter more than 7 characters.", (val = '') => {
            return val?.length > 7
        })
        .min(7),
})
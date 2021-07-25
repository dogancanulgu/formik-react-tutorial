import * as yup from 'yup';

let validations = yup.object().shape({
    email: yup.string().email("Lütfen geçerli bir email giriniz").required("Zorunlu alan"),
    password: yup.string().min(5, "Parolanız en az 5 karakter olmalıdır").required("Zorunlu alan"),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Parolanız eşleşmiyor").required("Zorunlu alan"),
});

export default validations;
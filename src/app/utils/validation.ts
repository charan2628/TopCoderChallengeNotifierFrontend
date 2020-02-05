import { FormGroup, FormControl } from '@angular/forms';
/**
 * Validation for confirm password match
 * @param group FormGroup
 */
export const checkPasswords = (group: FormGroup) => {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
};

export const validPassword = (formContol: FormControl) => {
    const pass = formContol.value;
    if(pass === null) return null;
    if(pass.length >= 8) {
        if(/[a-z]/.test(pass)) {
            if(/[A-Z]/.test(pass)) {
                if(/[0-9]/.test(pass)) {
                    if(/\W/.test(pass)) {
                        return null;
                    } else {
                        return { specialCharacter: true}
                    }
                } else {
                    return { number: true}
                }
            } else {
                return { upperCase: true}
            }
        } else {
            return { lowerCase: true}
        }
    } else {
        return { minLength: true}
    }
}

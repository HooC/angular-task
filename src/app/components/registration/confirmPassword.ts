import {FormGroup} from '@angular/forms';

export const confirmPassword = (control: FormGroup) => {

    if (control.get('password').value !== control.get('cfpassword').value) {
        return {
            'confirmPassword': 'invalid',
        };
    }
};

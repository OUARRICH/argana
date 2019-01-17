import { AbstractControl } from "@angular/forms";

export function floatValidator(control: AbstractControl) : 
{[key : string] : any} | null {
    const valid = /[+-]?([0-9]*[.,])?[0-9]+/.test(control.value);
    return valid ? null : {invalidFloat : {valid: false, value: control.value}};
}

export function intValidator(control: AbstractControl) : 
{[key : string] : any} | null {
    const valid = /^[0-9]*$/.test(control.value);
    return valid ? null : {invalidInt : {valid: false, value: control.value}};
}

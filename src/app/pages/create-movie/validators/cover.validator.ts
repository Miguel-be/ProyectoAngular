import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

//Devuelvo error si se intenta grabar el formulario cuando no se está editando y no se ha seleccionado imagen. 
//En caso contrario, si se está introduciendo una nueva película sin imagen entonces devuelvo error.
export function isSelectedImage(isedit: boolean):ValidatorFn{
    return(control: AbstractControl) =>{        
        const isSelected= ((control.value===null) || (control.value==="")) && !isedit;
        console.log(control.value)
        console.log(isSelected)
        return isSelected ? {
            isSelected:true}
            :null
        }
    }
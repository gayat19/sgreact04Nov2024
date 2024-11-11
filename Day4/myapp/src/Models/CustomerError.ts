export class CustomerError{
    constructor(
        public nameError: string="",
        public emailError: string="",
        public cityError: string="",
        public stateError: string=""
    ){}
}
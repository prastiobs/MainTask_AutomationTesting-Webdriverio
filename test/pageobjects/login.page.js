class loginPage{
    get email(){return browser.$("//input[@id='email']")}
    get password(){return browser.$("//input[@id='password']")}
    get submitBtn(){return browser.$("//button[@type='submit']")}

    login(){
        this.email.waitForExist();
        this.email.setValue('x@xyz.id');
        this.password.setValue('P@ssw0rd');
        this.submitBtn.click();
    }
}

module.exports = new loginPage();
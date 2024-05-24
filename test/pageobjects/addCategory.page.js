class addCategory{
    get btnCategory(){return browser.$("//a[@href='/categories']")}
    get btnTambah(){return browser.$("//a[@href='/categories/create']")}
    get name(){return browser.$("//input[@id='nama']")}
    get description(){return browser.$("//input[@id='deskripsi']")}
    get btnSimpan(){return browser.$("//button[@type='button']")}

    category(){
        this.btnCategory.waitForExist();
        this.btnCategory.click();
        this.btnTambah.click();
        this.name.setValue('celana');
        this.description.setValue('pakaian');
        this.btnSimpan.click();
    }
}

module.exports = new addCategory();
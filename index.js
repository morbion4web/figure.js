class Figure{
    constructor(select, opt){
        this.me = document.querySelector(select)
        this.me.style.width = opt.w + 'px'
        this.me.style.height = opt.h + 'px'
        this.me.style.background = opt.bg
        this.me.shape = opt.sh
    }
    getWidth(){ return this.me.style.width }
    setWidth(value){
        this.me.style.width = value + 'px'
    }
    getHeight(){ return this.me.style.width }
    setHeight(value){
        this.me.style.height = value + 'px'
    }
    getBG(){ return this.me.style.background }
    setBG(color){
        this.me.style.background = color
    }
    getShape(){ return this.me.shape }
    setShape(sh){
        this.me.shape = sh
        switch (sh) {
            case 'circle':
                this.me.style.borderRadius = "50%"
                break;
            case 'square':
                this.me.style.height = this.me.style.width
                break;
            default:
                this.me.style.borderRadius = '0%'
                break;
        }
    }
}
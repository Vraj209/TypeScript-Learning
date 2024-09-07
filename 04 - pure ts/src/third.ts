abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter:string,
    ) { }
    
    abstract getSepia(): void // complsory implemented that is why abstract
    getReelTime(): number{
        return 8;
    }
}

// abstract class do not created instance
// const VP = new TakePhoto("Test", "test")  Instance "ERROR"


class Instagramm extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst:number,
    ) {
        super(cameraMode, filter); // required parameter
    }

    // Overridde the method
    getSepia(): void{
        console.log("This is sepia");
        
    }
}

const VP = new Instagramm("Test", "test",3)
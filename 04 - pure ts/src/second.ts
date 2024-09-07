interface TakePhoto{
    cameraMode: string
    filter: string
    burst: number
}

interface Story{
    createStory():void
}

// Must Have this interface in your class
class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst : number
    ){}
}

// You can add more things but no less
class Youtube implements TakePhoto,Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short : string
    ) { }
    // Same name as Story interface
    createStory(): void{
        console.log("Story was created")
    }
}
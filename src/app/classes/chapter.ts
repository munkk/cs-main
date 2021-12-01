export class Chapter {
    level: Number;
    title: String;
    wordsAmout: Number;
    progressDone: Number;
    
    constructor (level: Number, title: String, wordsAmout: Number, progressDone: Number){
       this.level = level;
       this.title = title;
       this.wordsAmout = wordsAmout;
       this.progressDone = progressDone;
    }
}
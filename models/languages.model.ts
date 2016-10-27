export interface ILanguageSpeak {
    isExist?: boolean
    optional?: string,
    speakerGenderRestriction?: string
}

export interface ILanguage {
    full: string,
    speak?: ILanguageSpeak
}

export class Languages {
    [key: string]: ILanguage 
}
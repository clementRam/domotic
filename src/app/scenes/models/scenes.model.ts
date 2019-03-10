import { Scene } from "./scene.model";

export interface Scenes {
    ActTime : number;
    AllowWidgetOrdering: boolean;
    AstrTwilightEnd: string;
    AstrTwilightStart: string;
    CivTwilightEnd: string;
    CivTwilightStart: string;
    DayLength: string;
    NautTwilightEnd: string;
    NautTwilightStart: string;
    ServerTime: Date;
    SunAtSouth: string;
    Sunrise: string;
    Sunset: string;
    result: Scene[];
    status: string;
    title: string;
}
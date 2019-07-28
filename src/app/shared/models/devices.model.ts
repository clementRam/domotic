import { Device } from './device.model';

// Construct from Domoticz API model 
export interface Devices {
    ActTime: number;
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
    app_version: string;
    result: Device[]
    status: string;
    title: string;
}
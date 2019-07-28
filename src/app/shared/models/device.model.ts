import { Observable } from "rxjs";
import { ActionResponse } from "./action-response.model";

// Construct from Domoticz API model 
export interface Device {
    AddjMulti: number;
    AddjMulti2: number;
    AddjValue: number;
    AddjValue2: number;
    BatteryLevel: number;
    CustomImage: number;
    Data: string;
    Description: string;
    DimmerType: string;
    Favorite: number;
    HardwareID: number;
    HardwareName: string;
    HardwareType: string;
    HardwareTypeVal: number;
    HaveDimmer: true
    HaveGroupCmd: true
    HaveTimeout: false
    ID: string;
    Image: string;
    IsSubDevice: false
    LastUpdate: Date;
    Level: number;
    LevelInt: number;
    MaxDimLevel: number;
    Name: string;
    Notifications: boolean;
    PlanID: string;
    PlanIDs: [0]
    Protected: false
    ShowNotifications: true
    SignalLevel: string;
    Status: string;
    StrParam1: string;
    StrParam2: string;
    SubType: string;
    SwitchType: string;
    SwitchTypeVal: number;
    Timers: boolean;
    Type: string;
    TypeImg: string;
    Unit: number;
    Used: number;
    UsedByCamera: false
    XOffset: string;
    YOffset: string;
    idx: string;
    switchState?(): Observable<ActionResponse>;
    updateName(name: string): Observable<ActionResponse>;
    updateDescription(description: string): Observable<ActionResponse>;
}
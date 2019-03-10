import { Devices } from "src/app/devices/models/devices.model";
import { Scenes } from "src/app/scenes/models/scenes.model";

export interface State {
    devices: Devices;
    devicesEditable: boolean;
    scenes: Scenes;
}


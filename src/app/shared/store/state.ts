import { Devices } from "src/app/shared/models/devices.model";
import { Scenes } from "src/app/shared/models/scenes.model";

export interface State {
    devices: Devices;
    devicesEditable: boolean;
    scenes: Scenes;
}


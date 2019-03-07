import { Devices } from "src/app/dashboard/models/devices.model";
import { Scenes } from "src/app/automatisation/models/scenes.model";

export interface State {
    devices: Devices;
    devicesEditable: boolean;
    scenes: Scenes;
}


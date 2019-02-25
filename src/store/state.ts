import { Devices } from "src/dashboard/models/devices.model";

export interface State {
    devices: Devices;
    devicesEditable: boolean;
}


import { Devices } from "src/app/dashboard/models/devices.model";

export interface State {
    devices: Devices;
    devicesEditable: boolean;
}


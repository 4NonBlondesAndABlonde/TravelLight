import { TravelInfo } from './travelInfo'
export const TRAVELDATA: TravelInfo[] = [
    {   data: [118.35, 11.71, 783.44 / 2],
        label: 'car'
    },
    {
        data: [88 * 2, 2.85, 749],
        label: 'plane'
    }
]

export const NORMALIZERS: TravelInfo[] = [
    {   data: [118.35 / (118.35/2 + 88), 11.71 / (11.7/2+2/85/2), 783.44 / 2/(749/2+783/4)],
        label: 'car'
    },
    {
        data: [88*2 / (118.35/2 + 88), 2.85 / (11.7/2+2/85/2), 749/(749/2+783/4)],
        label: 'plane'
    }
]
//cost, time, emissions
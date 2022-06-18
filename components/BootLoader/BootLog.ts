export type BootLogStatus = {
    content: string;
    error: boolean;
}

export const bootLog: BootLogStatus[] = [
    { error: false, content: 'Creating new session for server Infosec Explained - s4r0s4pi3ns...' },
    { error: false, content: '[28218.348208]: LQM-WiFi: Lost MPDUs in nonAMPDU tids  0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0' },
    { error: false, content: '[28218.348212]: LQM-WiFi: Lost MPDUs in AMPDU tids  0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0' },
    { error: false, content: '[28218.348216]: LQM-WiFi: WME RX MPDUs (rxPER 0 %) in tids  0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0' },
    { error: false, content: '[28218.348220]: LQM-WiFi: WME TX MPDUs (txPER 0 %) in tids  0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0' },
    { error: true, content: '[28218.348224]: LQM-WiFi: chan 44 OfdmDesense 0dB' },
    { error: false, content: '[28218.358196]: WiFi Scores  ChanQual Score = 4  TxLoss Score = 5  RxLoss Score = 0  TxLat Score = 5 [5(100 %) / 0(0 %) / 0(0 %) / 0(0 %)] RxLat Score = 0 [0(0 %) / 0(0 %) / 0(0 %) / 0(0 %)]  intermittent-state = 0  latency = 5  LinkReco = 0x0' },
    { error: false, content: '[28218.358241]: LQM-WIFI-CT: rssi=-37(0 0) snr=28 bcn=99(98) txFrames=7 txRetry=0 txRate=780000 rxFrames=12 rxRetry=0 rxRate=866667' },
    { error: false, content: '[28218.358267]: postMessageInternal:isPipeOpened:0, msg 39, dataLen 184' },
    { error: false, content: '[28218.358285]: postMessageInternal:isPipeOpened:0, msg 156, dataLen 16' },
    { error: false, content: '[28218.513115]: [SPI][HIDSPI]' },
    { error: false, content: 'Started File System Check on /dev/disk/by-uuid/D356-F1A4' },
    { error: false, content: 'Mounting /boot/efi...' },
    { error: false, content: 'Mounted /boot/efi.' },
    { error: false, content: 'Started Load/Save RF Kill Switch Status' },
    { error: false, content: 'Found device /dev/disk/by-uuid/b519407e-1d6d-4a3a-8348-a996bedeef25...' },
    { error: false, content: 'Found device /dev/nvme0n1p9' },
    { error: true, content: 'Swap partition cannot be optimized this time, error code: 13001' },
    { error: false, content: 'Activating swap Swap Partition...' },
    { error: false, content: 'Activated swap Swap Partition' },
    { error: false, content: 'Activated swap /dev/disk/by-uuid/b519407e-1d6d-4a3a-8348-a996bedeef25...' },
    { error: false, content: 'Reached target Swap' },
    { error: false, content: 'Starting set console scheme...' },
    { error: false, content: 'Finished Set console scheme...' },
    { error: false, content: 'Booting Completed!' },
    { error: false, content: 'Redirecting to Server 32.73.28.104 <<Infosec Explained - s4r0s4pi3ns>>...' }
];
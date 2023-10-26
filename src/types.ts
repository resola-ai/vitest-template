export type ChannelSetting = {
  wsHost: string;
  wsPort: number;
  apiKey: string;
  channelId: string;
};

export type EventData = {
  recordId: string;
  channel: ChannelSetting;
  message: any;
};

export type Response = { batchItemFailures: { itemIdentifier: string; }[]; };

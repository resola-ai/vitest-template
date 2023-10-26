import { publish } from "./socketClient";
import { ChannelSetting, EventData, Response } from "./types";


export const handler = async (events: EventData[]) => {
  // handle each event
  // for each event, we need send a publish request to Socket Server.

  const response: Response = { batchItemFailures: [] };

  for await (const event of events) {
    const result = await publish(event.channel, event.message);
    if (result.isErr) {
      response.batchItemFailures.push({ itemIdentifier: event.recordId });
    }
  }

  return response;
};

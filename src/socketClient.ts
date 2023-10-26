import { ChannelSetting } from "./types";
import axios from "axios";
import { Result } from "@badrap/result";

export const publish = async (channel: ChannelSetting, message: any) => {
  console.log("publish message:", message);
  try {
    await axios.post(`http://${channel.wsHost}:${channel.wsPort}/publish`, {
      channel: channel.channelId,
      data: message
    }, {
      headers: {
        apiKey: channel.apiKey,
        channelId: channel.channelId
      }
    });
    return Result.ok(true);
  } catch (e) {
    console.log("Error publishing message to channel", channel, message, e);
    return Result.err(new Error("Error publishing message to channel"));
  }
};

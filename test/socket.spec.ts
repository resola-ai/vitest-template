import { describe, it, beforeAll, afterAll, expect, vi } from 'vitest';
import { handler } from "../src/handler";
import { EventData } from '../src/types';
import axios from 'axios';
import { ulid } from "ulidx";

vi.mock('axios');


describe("test1", () => {
  beforeAll(() => {

  });

  afterAll(() => {

  });

  it("testcase 1", async () => {
    const events: EventData[] = [
      {
        recordId: ulid(),
        channel: {
          wsHost: "localhost",
          wsPort: 3000,
          apiKey: "123",
          channelId: "123"
        },
        message: {
          text: "hello"
        }
      }
    ];
    axios.post.mockResolvedValue({
      data: {}
    });
    const response = await handler(events);
    expect(axios.post).toBeCalledTimes(1);
    expect(response.batchItemFailures).toEqual([]);
  });
});

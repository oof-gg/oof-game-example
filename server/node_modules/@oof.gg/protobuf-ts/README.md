# TypeScript Protocol Buffers
This repository contains the [Protocol Buffers](https://developers.google.com/protocol-buffers) for oof.gg SDK. The protobufs are used to define the messages that are passed between the SDK, servers, and clients. This will provide a common language for the SDK to communicate with the server, and ensure maintainability and consistency for the events being passed.

# Usage
To use the protos in your project, you can import @oof-gg/protobuf-ts from npm. The package contains the compiled TypeScript files for the protobufs.

```bash
npm install @oof.gg/protobuf-ts
```

# Development
To use the protos in your TypeScript project:
```
import { GlobalEvent, GlobalEvent_EventType, GlobalEvent_EventAttribute } from '@oof.gg/protobuf-ts/global/event';

const globalAttribute: GlobalEvent_EventAttribute = {
  stringValue: 'value'
}

const globalEvent: GlobalEvent = {
  id: 'event1',
  eventName: 'event1',
  timestamp: new Date().getTime(),
  gameId: 'game1',
  playerId: 'player1',
  teamId: 'red',
  attributes: {
    globalAttribute
  },
  type: GlobalEvent_EventType.CUSTOM
}

const encodedGlobalEvent = GlobalEvent.encode(globalEvent).finish();
```

# Documentation and Examples
For a full list of available messages, see the [protobufs](https://github.com/oof-gg/oof-protobufs/blob/main/generated/docs/docs.md) documentation on Github. You can also visit the [repository](https://github.com/oof-gg/oof-protobufs) for tests and examples on how to use the protobufs in your project.

Note: The protobufs are still in development and may change.
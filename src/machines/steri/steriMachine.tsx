import { Machine, assign } from 'xstate';

interface SteriStateSchema {
  states: {
    idle: {};
    filling: {};
    steri: {};
    emptying: {};
    error: {};
  };
}

type SteriEvent =
  | { type: 'START' }
  | { type: 'FILLING_SUCCESS' }
  | { type: 'STERI_SUCCESS' }
  | { type: 'EMPTYING_SUCCESS' }
  | { type: 'RETRY_FILLING' };

export interface SteriContext {
  reactorLowLevel: boolean;
  reactorHighLevel: boolean;
  feedTankLevel: number;
  steriTime: number;
  gasValve: boolean;
  generator: boolean;
  feedPump: boolean;
  recirPump: boolean;
  outletPump: boolean;
  lamp: boolean;
}

export const steriMachine = Machine<SteriContext, SteriStateSchema, SteriEvent>(
  {
    id: 'steri',
    initial: 'idle',
    context: {
      reactorLowLevel: false,
      reactorHighLevel: false,
      feedTankLevel: 0,
      steriTime: 0,
      gasValve: false,
      generator: false,
      feedPump: false,
      recirPump: false,
      outletPump: false,
      lamp: false,
    },
    states: {
      idle: {
        on: {
          START: {
            target: 'filling',
          },
        },
      },
      filling: {
        entry: ['toggleFeedPump'],
        exit: ['toggleFeedPump'],
        on: {
          FILLING_SUCCESS: {
            target: 'steri',
          },
        },
      },
      steri: {
        entry: ['toggleRecirPump', 'toggleGasValve', 'toggleGenerator'],
        exit: ['toggleRecirPump', 'toggleGasValve', 'toggleGenerator'],
        on: {
          STERI_SUCCESS: {
            target: 'emptying',
          },
        },
      },
      emptying: {
        entry: ['toggleOutletPump', 'toggleLamp'],
        exit: ['toggleOutletPump', 'toggleLamp'],
        on: {
          EMPTYING_SUCCESS: {
            target: 'idle',
          },
        },
      },
      error: {
        on: {
          RETRY_FILLING: {
            target: 'filling',
          },
        },
      },
    },
  },
  {
    actions: {
      toggleFeedPump: assign((ctx, _e) => {
        return {
          feedPump: !ctx.feedPump,
        };
      }),
      toggleRecirPump: assign((ctx, _e) => {
        return {
          recirPump: !ctx.recirPump,
        };
      }),
      toggleOutletPump: assign((ctx, _e) => {
        return {
          outletPump: !ctx.outletPump,
        };
      }),
      toggleGasValve: assign((ctx, _e) => {
        return {
          gasValve: !ctx.gasValve,
        };
      }),
      toggleGenerator: assign((ctx, _e) => {
        return {
          generator: !ctx.generator,
        };
      }),
      toggleLamp: assign((ctx, _e) => {
        return {
          lamp: !ctx.lamp,
        };
      }),
    },
  },
);

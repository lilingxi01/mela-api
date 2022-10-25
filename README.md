<h1><sub>
<a href="https://mela.lingxi.li/">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://imagedelivery.net/Dr98IMl5gQ9tPkFM5JRcng/e996f5f0-8918-45b4-a96d-da375a95bd00/HD">
  <img alt="Mela API Logo" width="146" src="https://imagedelivery.net/Dr98IMl5gQ9tPkFM5JRcng/31f6a568-f1e3-4733-b922-ae16b2f40f00/HD">
</picture>
</a>
</sub></h1>

## A Sweet API Handler for Next.js

A simple, elegant, yet powerful API handler wrapper for Next.js API routing. It is response-oriented, so it allows you to easily handle errors and return responses in a consistent way.

Some handlers are changing the structure entirely, and I believe most of you will not like that because the expandability is so limited in that way. This handler is simply a wrapper for your original function. It does not change the structure of your function, and it does not change the way you write your logic. It simply wraps your function and handles the response for you, and only it.

Your coding partner will **confidently** know when you are making a response, how they should make a response, and how to handle errors in the standard way.

Every Next.js developer loves it from day one, so I think you will also enjoy it.

Check out the [documentation](https://mela.lingxi.li)!

## Why is it good?

- It keeps the original logic flow of your handler function.
- It is response-oriented, so you can easily handle errors and interrupt the flow confidently. Before that, you need to manually `return` it everywhere.
- It keeps the ability to handle your common logics (e.g. auth handling) in one place. No need to write another function again.
- It is easy to understand and easy to use. It is a wrapper, and it does not change the structure of how you understand Next.js API handler.
- It has a bunch of built-in response behavior, so you can standardize your API response with no cost.
- It is fully open-sourced and typed, so you can use it confidently and safely.

## Minimal Example

```typescript
import { apiHandler, ApiCommonResponse, ApiResponse } from 'mela-api';

// This typing is the same with Next.js API typing definition.
// E.g. `param` for parameters, and `query` for query strings.
// Check Next.js API documentation for more details.
type ReqModel = {
    query: {
        // Example: Your query parameter.
        exampleQuery: string;
    },
};

// `string[]` for GET, `null` for POST.
type ResModel = string[] | null;

// `async` is optional.
export default apiHandler<ReqModel, ResModel>(async (req, res) => {
    // Unwrap the query parameter confidently with typing.
    const { exampleQuery } = req.query;
    // Your common logic (e.g. auth handling)...
    if (req.method === 'GET') {
        // Your GET logic...
        // Then return an OK response with data.
        return ApiResponse.ok(['Hello', 'World']);
    } else if (req.method === 'POST') {
        // Your POST logic...
        // Then simply return an OK response (based on your logic).
        return ApiResponse.ok();
    }
    // When it is outside of your processing logic,
    // it is a METHOD_NOT_ALLOWED response.
    return ApiCommonResponse.METHOD_NOT_ALLOWED;
});
```

## Installation

```bash
npm install mela-api
```

```bash
yarn add mela-api
```

```bash
pnpm add mela-api
```

## Supported Common Responses

- `METHOD_NOT_ALLOWED`
- `RESTRICTED`
- `NOT_AUTHORIZED`
- `UNKNOWN_ERROR`
- `NOT_FOUND`

If there is a common response (except 200 OK) that you think is missing, please open an issue or a pull request.

## Future Plan

- [ ] More built-in behaviors (e.g. redirect).
- [ ] Response strong typing.
- [ ] Runtime type-checking for the incoming parameters.

```json
{
  "testRun": {
    "id": "123",
    "name": "",
    "startTime": "2025-09-08T07:31:33.209Z",
    "totalTests": 9,
    "passed": 6,
    "failed": 3,
    "skipped": 0,
    "os": {
      "name": "linux",
      "version": "#67-Ubuntu SMP Mon Mar 13 14:22:10 UTC 2023"
    },
    "testRunner": {
      "name": "playwright",
      "version": "1.55.0"
    },
    "endTime": "2025-09-08T07:31:50.062Z",
    "duration": 16850.892
  },
  "results": [
    {
      "caseId": "C128",
      "title": "C128 should allow me to add todo items",
      "status": "failed",
      "duration": 6653,
      "comment": "Test Status is failed Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n",
      "browser": {
        "name": "chrome",
        "version": "",
        "path": ""
      },
      "error": {
        "message": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n",
        "stack": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n\n    at test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts:24:50"
      },
      "startTime": "2025-09-08T07:31:34.200Z",
      "endTime": "2025-09-08T07:31:42.748Z",
      "steps": [
        {
          "title": "Before Hooks",
          "category": "hook",
          "duration": 3205,
          "startTime": "2025-09-08T07:31:34.207Z",
          "endTime": "2025-09-08T07:31:37.412Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Fill \"buy some cheese\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 69,
          "startTime": "2025-09-08T07:31:37.419Z",
          "endTime": "2025-09-08T07:31:37.488Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 20,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 30,
          "startTime": "2025-09-08T07:31:37.492Z",
          "endTime": "2025-09-08T07:31:37.522Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 21,
            "column": 19
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 5014,
          "startTime": "2025-09-08T07:31:37.525Z",
          "endTime": "2025-09-08T07:31:42.539Z",
          "status": "failed",
          "error": {
            "message": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n",
            "stack": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n\n    at test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts:24:50"
          },
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 24,
            "column": 50
          }
        },
        {
          "title": "After Hooks",
          "category": "hook",
          "duration": 164,
          "startTime": "2025-09-08T07:31:42.542Z",
          "endTime": "2025-09-08T07:31:42.706Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Worker Cleanup",
          "category": "hook",
          "duration": 36,
          "startTime": "2025-09-08T07:31:42.707Z",
          "endTime": "2025-09-08T07:31:42.743Z",
          "status": "passed",
          "error": null,
          "location": null
        }
      ],
      "attachments": [
        {
          "type": "image",
          "path": "test-reporters/packages/playwright-reporter/test-results/todo-app-New-Todo-C128-should-allow-me-to-add-todo-items-chromium/test-failed-1.png",
          "contentType": "image/png"
        },
        {
          "type": "video",
          "path": "test-reporters/packages/playwright-reporter/test-results/todo-app-New-Todo-C128-should-allow-me-to-add-todo-items-chromium/video.webm",
          "contentType": "video/webm"
        },
        {
          "type": "error-context",
          "path": "test-reporters/packages/playwright-reporter/test-results/todo-app-New-Todo-C128-should-allow-me-to-add-todo-items-chromium/error-context.md",
          "contentType": "text/markdown"
        }
      ]
    },
    {
      "caseId": "C128",
      "title": "C128 should allow me to add todo items",
      "status": "failed",
      "duration": 7470,
      "comment": "Test Status is failed Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n",
      "browser": {
        "name": "webkit",
        "version": "",
        "path": ""
      },
      "error": {
        "message": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n",
        "stack": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n\n    at test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts:24:50"
      },
      "startTime": "2025-09-08T07:31:34.195Z",
      "endTime": "2025-09-08T07:31:43.360Z",
      "steps": [
        {
          "title": "Before Hooks",
          "category": "hook",
          "duration": 3528,
          "startTime": "2025-09-08T07:31:34.201Z",
          "endTime": "2025-09-08T07:31:37.729Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Fill \"buy some cheese\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 82,
          "startTime": "2025-09-08T07:31:37.734Z",
          "endTime": "2025-09-08T07:31:37.816Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 20,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 69,
          "startTime": "2025-09-08T07:31:37.818Z",
          "endTime": "2025-09-08T07:31:37.887Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 21,
            "column": 19
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 5014,
          "startTime": "2025-09-08T07:31:37.891Z",
          "endTime": "2025-09-08T07:31:42.905Z",
          "status": "failed",
          "error": {
            "message": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n",
            "stack": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    9 × locator resolved to 1 element\n\n    at test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts:24:50"
          },
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 24,
            "column": 50
          }
        },
        {
          "title": "After Hooks",
          "category": "hook",
          "duration": 428,
          "startTime": "2025-09-08T07:31:42.909Z",
          "endTime": "2025-09-08T07:31:43.337Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Worker Cleanup",
          "category": "hook",
          "duration": 19,
          "startTime": "2025-09-08T07:31:43.338Z",
          "endTime": "2025-09-08T07:31:43.357Z",
          "status": "passed",
          "error": null,
          "location": null
        }
      ],
      "attachments": [
        {
          "type": "image",
          "path": "test-reporters/packages/playwright-reporter/test-results/todo-app-New-Todo-C128-should-allow-me-to-add-todo-items-Sayan/test-failed-1.png",
          "contentType": "image/png"
        },
        {
          "type": "video",
          "path": "test-reporters/packages/playwright-reporter/test-results/todo-app-New-Todo-C128-should-allow-me-to-add-todo-items-Sayan/video.webm",
          "contentType": "video/webm"
        },
        {
          "type": "error-context",
          "path": "test-reporters/packages/playwright-reporter/test-results/todo-app-New-Todo-C128-should-allow-me-to-add-todo-items-Sayan/error-context.md",
          "contentType": "text/markdown"
        }
      ]
    },
    {
      "caseId": "C128",
      "title": "C128 should allow me to add todo items",
      "status": "failed",
      "duration": 7438,
      "comment": "Test Status is failed Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    8 × locator resolved to 1 element\n",
      "browser": {
        "name": "firefox",
        "version": "",
        "path": ""
      },
      "error": {
        "message": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    8 × locator resolved to 1 element\n",
        "stack": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    8 × locator resolved to 1 element\n\n    at test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts:24:50"
      },
      "startTime": "2025-09-08T07:31:34.192Z",
      "endTime": "2025-09-08T07:31:43.623Z",
      "steps": [
        {
          "title": "Before Hooks",
          "category": "hook",
          "duration": 3270,
          "startTime": "2025-09-08T07:31:34.197Z",
          "endTime": "2025-09-08T07:31:37.467Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Fill \"buy some cheese\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 85,
          "startTime": "2025-09-08T07:31:37.479Z",
          "endTime": "2025-09-08T07:31:37.564Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 20,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 22,
          "startTime": "2025-09-08T07:31:37.566Z",
          "endTime": "2025-09-08T07:31:37.588Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 21,
            "column": 19
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 5016,
          "startTime": "2025-09-08T07:31:37.591Z",
          "endTime": "2025-09-08T07:31:42.607Z",
          "status": "failed",
          "error": {
            "message": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    8 × locator resolved to 1 element\n",
            "stack": "Error: expect(locator).toHaveText(expected) failed\n\nLocator:  getByTestId('todo-title')\n- Expected  - 1\n+ Received  + 1\n\n  Array [\n-   \"TODO_ITEMS[0]\",\n+   \"buy some cheese\",\n  ]\nTimeout:  5000ms\n\nCall log:\n  - Expect \"toHaveText\" with timeout 5000ms\n  - waiting for getByTestId('todo-title')\n    8 × locator resolved to 1 element\n\n    at test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts:24:50"
          },
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 24,
            "column": 50
          }
        },
        {
          "title": "After Hooks",
          "category": "hook",
          "duration": 155,
          "startTime": "2025-09-08T07:31:42.609Z",
          "endTime": "2025-09-08T07:31:42.764Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Worker Cleanup",
          "category": "hook",
          "duration": 855,
          "startTime": "2025-09-08T07:31:42.764Z",
          "endTime": "2025-09-08T07:31:43.619Z",
          "status": "passed",
          "error": null,
          "location": null
        }
      ],
      "attachments": [
        {
          "type": "image",
          "path": "test-reporters/packages/playwright-reporter/test-results/todo-app-New-Todo-C128-should-allow-me-to-add-todo-items-firefox/test-failed-1.png",
          "contentType": "image/png"
        },
        {
          "type": "video",
          "path": "test-reporters/packages/playwright-reporter/test-results/todo-app-New-Todo-C128-should-allow-me-to-add-todo-items-firefox/video.webm",
          "contentType": "video/webm"
        },
        {
          "type": "error-context",
          "path": "test-reporters/packages/playwright-reporter/test-results/todo-app-New-Todo-C128-should-allow-me-to-add-todo-items-firefox/error-context.md",
          "contentType": "text/markdown"
        }
      ]
    },
    {
      "caseId": "C129",
      "title": "C129 should clear text input field when an item is added",
      "status": "passed",
      "duration": 842,
      "comment": "Test Passed within 842 ms",
      "browser": {
        "name": "chrome",
        "version": "",
        "path": ""
      },
      "startTime": "2025-09-08T07:31:43.803Z",
      "endTime": "2025-09-08T07:31:44.872Z",
      "steps": [
        {
          "title": "Before Hooks",
          "category": "hook",
          "duration": 811,
          "startTime": "2025-09-08T07:31:43.809Z",
          "endTime": "2025-09-08T07:31:44.620Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Fill \"buy some cheese\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 51,
          "startTime": "2025-09-08T07:31:44.626Z",
          "endTime": "2025-09-08T07:31:44.677Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 46,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 42,
          "startTime": "2025-09-08T07:31:44.679Z",
          "endTime": "2025-09-08T07:31:44.721Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 47,
            "column": 19
          }
        },
        {
          "title": "Expect \"toBeEmpty\"",
          "category": "expect",
          "duration": 11,
          "startTime": "2025-09-08T07:31:44.724Z",
          "endTime": "2025-09-08T07:31:44.735Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 50,
            "column": 27
          }
        },
        {
          "title": "Wait for function",
          "category": "pw:api",
          "duration": 18,
          "startTime": "2025-09-08T07:31:44.737Z",
          "endTime": "2025-09-08T07:31:44.755Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 426,
            "column": 21
          }
        },
        {
          "title": "After Hooks",
          "category": "hook",
          "duration": 115,
          "startTime": "2025-09-08T07:31:44.755Z",
          "endTime": "2025-09-08T07:31:44.870Z",
          "status": "passed",
          "error": null,
          "location": null
        }
      ],
      "attachments": []
    },
    {
      "caseId": "C130",
      "title": "C130 should append new items to the bottom of the list",
      "status": "passed",
      "duration": 874,
      "comment": "Test Passed within 874 ms",
      "browser": {
        "name": "chrome",
        "version": "",
        "path": ""
      },
      "startTime": "2025-09-08T07:31:44.872Z",
      "endTime": "2025-09-08T07:31:45.778Z",
      "steps": [
        {
          "title": "Before Hooks",
          "category": "hook",
          "duration": 586,
          "startTime": "2025-09-08T07:31:44.873Z",
          "endTime": "2025-09-08T07:31:45.459Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Fill \"buy some cheese\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 44,
          "startTime": "2025-09-08T07:31:45.461Z",
          "endTime": "2025-09-08T07:31:45.505Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 416,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 49,
          "startTime": "2025-09-08T07:31:45.507Z",
          "endTime": "2025-09-08T07:31:45.556Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 417,
            "column": 19
          }
        },
        {
          "title": "Fill \"feed the cat\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 14,
          "startTime": "2025-09-08T07:31:45.558Z",
          "endTime": "2025-09-08T07:31:45.572Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 416,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 27,
          "startTime": "2025-09-08T07:31:45.574Z",
          "endTime": "2025-09-08T07:31:45.601Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 417,
            "column": 19
          }
        },
        {
          "title": "Fill \"book a doctors appointment\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 8,
          "startTime": "2025-09-08T07:31:45.603Z",
          "endTime": "2025-09-08T07:31:45.611Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 416,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 15,
          "startTime": "2025-09-08T07:31:45.613Z",
          "endTime": "2025-09-08T07:31:45.628Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 417,
            "column": 19
          }
        },
        {
          "title": "Expect \"toBeVisible\"",
          "category": "expect",
          "duration": 11,
          "startTime": "2025-09-08T07:31:45.629Z",
          "endTime": "2025-09-08T07:31:45.640Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 62,
            "column": 50
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 10,
          "startTime": "2025-09-08T07:31:45.641Z",
          "endTime": "2025-09-08T07:31:45.651Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 63,
            "column": 29
          }
        },
        {
          "title": "Expect \"toContainText\"",
          "category": "expect",
          "duration": 4,
          "startTime": "2025-09-08T07:31:45.652Z",
          "endTime": "2025-09-08T07:31:45.656Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 64,
            "column": 29
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 4,
          "startTime": "2025-09-08T07:31:45.657Z",
          "endTime": "2025-09-08T07:31:45.661Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 65,
            "column": 29
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 5,
          "startTime": "2025-09-08T07:31:45.663Z",
          "endTime": "2025-09-08T07:31:45.668Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 68,
            "column": 50
          }
        },
        {
          "title": "Wait for function",
          "category": "pw:api",
          "duration": 24,
          "startTime": "2025-09-08T07:31:45.669Z",
          "endTime": "2025-09-08T07:31:45.693Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 426,
            "column": 21
          }
        },
        {
          "title": "After Hooks",
          "category": "hook",
          "duration": 84,
          "startTime": "2025-09-08T07:31:45.694Z",
          "endTime": "2025-09-08T07:31:45.778Z",
          "status": "passed",
          "error": null,
          "location": null
        }
      ],
      "attachments": []
    },
    {
      "caseId": "C129",
      "title": "C129 should clear text input field when an item is added",
      "status": "passed",
      "duration": 2571,
      "comment": "Test Passed within 2571 ms",
      "browser": {
        "name": "webkit",
        "version": "",
        "path": ""
      },
      "startTime": "2025-09-08T07:31:44.339Z",
      "endTime": "2025-09-08T07:31:47.094Z",
      "steps": [
        {
          "title": "Before Hooks",
          "category": "hook",
          "duration": 2152,
          "startTime": "2025-09-08T07:31:44.346Z",
          "endTime": "2025-09-08T07:31:46.498Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Fill \"buy some cheese\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 86,
          "startTime": "2025-09-08T07:31:46.504Z",
          "endTime": "2025-09-08T07:31:46.590Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 46,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 70,
          "startTime": "2025-09-08T07:31:46.591Z",
          "endTime": "2025-09-08T07:31:46.661Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 47,
            "column": 19
          }
        },
        {
          "title": "Expect \"toBeEmpty\"",
          "category": "expect",
          "duration": 45,
          "startTime": "2025-09-08T07:31:46.665Z",
          "endTime": "2025-09-08T07:31:46.710Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 50,
            "column": 27
          }
        },
        {
          "title": "Wait for function",
          "category": "pw:api",
          "duration": 37,
          "startTime": "2025-09-08T07:31:46.712Z",
          "endTime": "2025-09-08T07:31:46.749Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 426,
            "column": 21
          }
        },
        {
          "title": "After Hooks",
          "category": "hook",
          "duration": 340,
          "startTime": "2025-09-08T07:31:46.750Z",
          "endTime": "2025-09-08T07:31:47.090Z",
          "status": "passed",
          "error": null,
          "location": null
        }
      ],
      "attachments": []
    },
    {
      "caseId": "C129",
      "title": "C129 should clear text input field when an item is added",
      "status": "passed",
      "duration": 2132,
      "comment": "Test Passed within 2132 ms",
      "browser": {
        "name": "firefox",
        "version": "",
        "path": ""
      },
      "startTime": "2025-09-08T07:31:44.674Z",
      "endTime": "2025-09-08T07:31:47.729Z",
      "steps": [
        {
          "title": "Before Hooks",
          "category": "hook",
          "duration": 2735,
          "startTime": "2025-09-08T07:31:44.682Z",
          "endTime": "2025-09-08T07:31:47.417Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Fill \"buy some cheese\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 70,
          "startTime": "2025-09-08T07:31:47.422Z",
          "endTime": "2025-09-08T07:31:47.492Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 46,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 48,
          "startTime": "2025-09-08T07:31:47.494Z",
          "endTime": "2025-09-08T07:31:47.542Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 47,
            "column": 19
          }
        },
        {
          "title": "Expect \"toBeEmpty\"",
          "category": "expect",
          "duration": 10,
          "startTime": "2025-09-08T07:31:47.545Z",
          "endTime": "2025-09-08T07:31:47.555Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 50,
            "column": 27
          }
        },
        {
          "title": "Wait for function",
          "category": "pw:api",
          "duration": 74,
          "startTime": "2025-09-08T07:31:47.556Z",
          "endTime": "2025-09-08T07:31:47.630Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 426,
            "column": 21
          }
        },
        {
          "title": "After Hooks",
          "category": "hook",
          "duration": 98,
          "startTime": "2025-09-08T07:31:47.630Z",
          "endTime": "2025-09-08T07:31:47.728Z",
          "status": "passed",
          "error": null,
          "location": null
        }
      ],
      "attachments": []
    },
    {
      "caseId": "C130",
      "title": "C130 should append new items to the bottom of the list",
      "status": "passed",
      "duration": 1134,
      "comment": "Test Passed within 1134 ms",
      "browser": {
        "name": "firefox",
        "version": "",
        "path": ""
      },
      "startTime": "2025-09-08T07:31:47.729Z",
      "endTime": "2025-09-08T07:31:48.892Z",
      "steps": [
        {
          "title": "Before Hooks",
          "category": "hook",
          "duration": 812,
          "startTime": "2025-09-08T07:31:47.730Z",
          "endTime": "2025-09-08T07:31:48.542Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Fill \"buy some cheese\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 50,
          "startTime": "2025-09-08T07:31:48.544Z",
          "endTime": "2025-09-08T07:31:48.594Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 416,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 26,
          "startTime": "2025-09-08T07:31:48.595Z",
          "endTime": "2025-09-08T07:31:48.621Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 417,
            "column": 19
          }
        },
        {
          "title": "Fill \"feed the cat\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 12,
          "startTime": "2025-09-08T07:31:48.623Z",
          "endTime": "2025-09-08T07:31:48.635Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 416,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 13,
          "startTime": "2025-09-08T07:31:48.637Z",
          "endTime": "2025-09-08T07:31:48.650Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 417,
            "column": 19
          }
        },
        {
          "title": "Fill \"book a doctors appointment\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 13,
          "startTime": "2025-09-08T07:31:48.651Z",
          "endTime": "2025-09-08T07:31:48.664Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 416,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 14,
          "startTime": "2025-09-08T07:31:48.665Z",
          "endTime": "2025-09-08T07:31:48.679Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 417,
            "column": 19
          }
        },
        {
          "title": "Expect \"toBeVisible\"",
          "category": "expect",
          "duration": 9,
          "startTime": "2025-09-08T07:31:48.680Z",
          "endTime": "2025-09-08T07:31:48.689Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 62,
            "column": 50
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 6,
          "startTime": "2025-09-08T07:31:48.690Z",
          "endTime": "2025-09-08T07:31:48.696Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 63,
            "column": 29
          }
        },
        {
          "title": "Expect \"toContainText\"",
          "category": "expect",
          "duration": 5,
          "startTime": "2025-09-08T07:31:48.697Z",
          "endTime": "2025-09-08T07:31:48.702Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 64,
            "column": 29
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 4,
          "startTime": "2025-09-08T07:31:48.703Z",
          "endTime": "2025-09-08T07:31:48.707Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 65,
            "column": 29
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 8,
          "startTime": "2025-09-08T07:31:48.708Z",
          "endTime": "2025-09-08T07:31:48.716Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 68,
            "column": 50
          }
        },
        {
          "title": "Wait for function",
          "category": "pw:api",
          "duration": 44,
          "startTime": "2025-09-08T07:31:48.717Z",
          "endTime": "2025-09-08T07:31:48.761Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 426,
            "column": 21
          }
        },
        {
          "title": "After Hooks",
          "category": "hook",
          "duration": 130,
          "startTime": "2025-09-08T07:31:48.762Z",
          "endTime": "2025-09-08T07:31:48.892Z",
          "status": "passed",
          "error": null,
          "location": null
        }
      ],
      "attachments": []
    },
    {
      "caseId": "C130",
      "title": "C130 should append new items to the bottom of the list",
      "status": "passed",
      "duration": 2891,
      "comment": "Test Passed within 2891 ms",
      "browser": {
        "name": "webkit",
        "version": "",
        "path": ""
      },
      "startTime": "2025-09-08T07:31:47.091Z",
      "endTime": "2025-09-08T07:31:50.022Z",
      "steps": [
        {
          "title": "Before Hooks",
          "category": "hook",
          "duration": 2255,
          "startTime": "2025-09-08T07:31:47.101Z",
          "endTime": "2025-09-08T07:31:49.356Z",
          "status": "passed",
          "error": null,
          "location": null
        },
        {
          "title": "Fill \"buy some cheese\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 58,
          "startTime": "2025-09-08T07:31:49.358Z",
          "endTime": "2025-09-08T07:31:49.416Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 416,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 47,
          "startTime": "2025-09-08T07:31:49.417Z",
          "endTime": "2025-09-08T07:31:49.464Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 417,
            "column": 19
          }
        },
        {
          "title": "Fill \"feed the cat\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 57,
          "startTime": "2025-09-08T07:31:49.465Z",
          "endTime": "2025-09-08T07:31:49.522Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 416,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 66,
          "startTime": "2025-09-08T07:31:49.524Z",
          "endTime": "2025-09-08T07:31:49.590Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 417,
            "column": 19
          }
        },
        {
          "title": "Fill \"book a doctors appointment\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 19,
          "startTime": "2025-09-08T07:31:49.591Z",
          "endTime": "2025-09-08T07:31:49.610Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 416,
            "column": 19
          }
        },
        {
          "title": "Press \"Enter\" getByPlaceholder('What needs to be done?')",
          "category": "pw:api",
          "duration": 31,
          "startTime": "2025-09-08T07:31:49.611Z",
          "endTime": "2025-09-08T07:31:49.642Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 417,
            "column": 19
          }
        },
        {
          "title": "Expect \"toBeVisible\"",
          "category": "expect",
          "duration": 12,
          "startTime": "2025-09-08T07:31:49.645Z",
          "endTime": "2025-09-08T07:31:49.657Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 62,
            "column": 50
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 10,
          "startTime": "2025-09-08T07:31:49.658Z",
          "endTime": "2025-09-08T07:31:49.668Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 63,
            "column": 29
          }
        },
        {
          "title": "Expect \"toContainText\"",
          "category": "expect",
          "duration": 4,
          "startTime": "2025-09-08T07:31:49.669Z",
          "endTime": "2025-09-08T07:31:49.673Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 64,
            "column": 29
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 5,
          "startTime": "2025-09-08T07:31:49.674Z",
          "endTime": "2025-09-08T07:31:49.679Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 65,
            "column": 29
          }
        },
        {
          "title": "Expect \"toHaveText\"",
          "category": "expect",
          "duration": 9,
          "startTime": "2025-09-08T07:31:49.681Z",
          "endTime": "2025-09-08T07:31:49.690Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 68,
            "column": 50
          }
        },
        {
          "title": "Wait for function",
          "category": "pw:api",
          "duration": 19,
          "startTime": "2025-09-08T07:31:49.691Z",
          "endTime": "2025-09-08T07:31:49.710Z",
          "status": "passed",
          "error": null,
          "location": {
            "file": "test-reporters/packages/playwright-reporter/tests/todo-app.spec.ts",
            "line": 426,
            "column": 21
          }
        },
        {
          "title": "After Hooks",
          "category": "hook",
          "duration": 311,
          "startTime": "2025-09-08T07:31:49.710Z",
          "endTime": "2025-09-08T07:31:50.021Z",
          "status": "passed",
          "error": null,
          "location": null
        }
      ],
      "attachments": []
    }
  ]
}
```

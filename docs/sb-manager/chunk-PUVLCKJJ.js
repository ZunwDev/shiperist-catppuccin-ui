import { _extends, _objectWithoutPropertiesLoose } from "./chunk-QPL63VNK.js";
import { emotion_styled_browser_esm_default, lightenColor, scope } from "./chunk-F3MVQVF6.js";
import { require_checkPropTypes, require_object_assign, require_react } from "./chunk-3FAXWWKG.js";
import { require_memoizerific } from "./chunk-FENICTK6.js";
import { __commonJS, __commonJS2, __toESM, __toESM2 } from "./chunk-AS2AMEUR.js";
var require_scheduler_development = __commonJS({
  "../../node_modules/scheduler/cjs/scheduler.development.js"(exports) {
    "use strict";
    (function () {
      "use strict";
      var enableSchedulerDebugging = !1,
        enableProfiling = !0,
        requestHostCallback,
        requestHostTimeout,
        cancelHostTimeout,
        shouldYieldToHost,
        requestPaint;
      if (typeof window > "u" || typeof MessageChannel != "function") {
        var _callback = null,
          _timeoutID = null,
          _flushCallback = function () {
            if (_callback !== null)
              try {
                var currentTime = exports.unstable_now(),
                  hasRemainingTime = !0;
                _callback(hasRemainingTime, currentTime), (_callback = null);
              } catch (e) {
                throw (setTimeout(_flushCallback, 0), e);
              }
          },
          initialTime = Date.now();
        (exports.unstable_now = function () {
          return Date.now() - initialTime;
        }),
          (requestHostCallback = function (cb) {
            _callback !== null
              ? setTimeout(requestHostCallback, 0, cb)
              : ((_callback = cb), setTimeout(_flushCallback, 0));
          }),
          (requestHostTimeout = function (cb, ms) {
            _timeoutID = setTimeout(cb, ms);
          }),
          (cancelHostTimeout = function () {
            clearTimeout(_timeoutID);
          }),
          (shouldYieldToHost = function () {
            return !1;
          }),
          (requestPaint = exports.unstable_forceFrameRate = function () {});
      } else {
        var performance2 = window.performance,
          _Date = window.Date,
          _setTimeout = window.setTimeout,
          _clearTimeout = window.clearTimeout;
        if (typeof console < "u") {
          var requestAnimationFrame = window.requestAnimationFrame,
            cancelAnimationFrame = window.cancelAnimationFrame;
          typeof requestAnimationFrame != "function" &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            ),
            typeof cancelAnimationFrame != "function" &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              );
        }
        if (typeof performance2 == "object" && typeof performance2.now == "function")
          exports.unstable_now = function () {
            return performance2.now();
          };
        else {
          var _initialTime = _Date.now();
          exports.unstable_now = function () {
            return _Date.now() - _initialTime;
          };
        }
        var isMessageLoopRunning = !1,
          scheduledHostCallback = null,
          taskTimeoutID = -1,
          yieldInterval = 5,
          deadline = 0;
        (shouldYieldToHost = function () {
          return exports.unstable_now() >= deadline;
        }),
          (requestPaint = function () {}),
          (exports.unstable_forceFrameRate = function (fps) {
            if (fps < 0 || fps > 125) {
              console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
              );
              return;
            }
            fps > 0 ? (yieldInterval = Math.floor(1e3 / fps)) : (yieldInterval = 5);
          });
        var performWorkUntilDeadline = function () {
            if (scheduledHostCallback !== null) {
              var currentTime = exports.unstable_now();
              deadline = currentTime + yieldInterval;
              var hasTimeRemaining = !0;
              try {
                var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                hasMoreWork ? port.postMessage(null) : ((isMessageLoopRunning = !1), (scheduledHostCallback = null));
              } catch (error) {
                throw (port.postMessage(null), error);
              }
            } else isMessageLoopRunning = !1;
          },
          channel = new MessageChannel(),
          port = channel.port2;
        (channel.port1.onmessage = performWorkUntilDeadline),
          (requestHostCallback = function (callback) {
            (scheduledHostCallback = callback),
              isMessageLoopRunning || ((isMessageLoopRunning = !0), port.postMessage(null));
          }),
          (requestHostTimeout = function (callback, ms) {
            taskTimeoutID = _setTimeout(function () {
              callback(exports.unstable_now());
            }, ms);
          }),
          (cancelHostTimeout = function () {
            _clearTimeout(taskTimeoutID), (taskTimeoutID = -1);
          });
      }
      function push(heap, node) {
        var index = heap.length;
        heap.push(node), siftUp(heap, node, index);
      }
      function peek(heap) {
        var first = heap[0];
        return first === void 0 ? null : first;
      }
      function pop(heap) {
        var first = heap[0];
        if (first !== void 0) {
          var last = heap.pop();
          return last !== first && ((heap[0] = last), siftDown(heap, last, 0)), first;
        } else return null;
      }
      function siftUp(heap, node, i) {
        for (var index = i; ; ) {
          var parentIndex = (index - 1) >>> 1,
            parent = heap[parentIndex];
          if (parent !== void 0 && compare(parent, node) > 0)
            (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
          else return;
        }
      }
      function siftDown(heap, node, i) {
        for (var index = i, length = heap.length; index < length; ) {
          var leftIndex = (index + 1) * 2 - 1,
            left2 = heap[leftIndex],
            rightIndex = leftIndex + 1,
            right2 = heap[rightIndex];
          if (left2 !== void 0 && compare(left2, node) < 0)
            right2 !== void 0 && compare(right2, left2) < 0
              ? ((heap[index] = right2), (heap[rightIndex] = node), (index = rightIndex))
              : ((heap[index] = left2), (heap[leftIndex] = node), (index = leftIndex));
          else if (right2 !== void 0 && compare(right2, node) < 0)
            (heap[index] = right2), (heap[rightIndex] = node), (index = rightIndex);
          else return;
        }
      }
      function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return diff !== 0 ? diff : a.id - b.id;
      }
      var NoPriority = 0,
        ImmediatePriority = 1,
        UserBlockingPriority = 2,
        NormalPriority = 3,
        LowPriority = 4,
        IdlePriority = 5,
        runIdCounter = 0,
        mainThreadIdCounter = 0,
        profilingStateSize = 4,
        sharedProfilingBuffer =
          typeof SharedArrayBuffer == "function"
            ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT)
            : typeof ArrayBuffer == "function"
            ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT)
            : null,
        profilingState = sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : [],
        PRIORITY = 0,
        CURRENT_TASK_ID = 1,
        CURRENT_RUN_ID = 2,
        QUEUE_SIZE = 3;
      (profilingState[PRIORITY] = NoPriority), (profilingState[QUEUE_SIZE] = 0), (profilingState[CURRENT_TASK_ID] = 0);
      var INITIAL_EVENT_LOG_SIZE = 131072,
        MAX_EVENT_LOG_SIZE = 524288,
        eventLogSize = 0,
        eventLogBuffer = null,
        eventLog = null,
        eventLogIndex = 0,
        TaskStartEvent = 1,
        TaskCompleteEvent = 2,
        TaskErrorEvent = 3,
        TaskCancelEvent = 4,
        TaskRunEvent = 5,
        TaskYieldEvent = 6,
        SchedulerSuspendEvent = 7,
        SchedulerResumeEvent = 8;
      function logEvent(entries) {
        if (eventLog !== null) {
          var offset2 = eventLogIndex;
          if (((eventLogIndex += entries.length), eventLogIndex + 1 > eventLogSize)) {
            if (((eventLogSize *= 2), eventLogSize > MAX_EVENT_LOG_SIZE)) {
              console.error(
                "Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`."
              ),
                stopLoggingProfilingEvents();
              return;
            }
            var newEventLog = new Int32Array(eventLogSize * 4);
            newEventLog.set(eventLog), (eventLogBuffer = newEventLog.buffer), (eventLog = newEventLog);
          }
          eventLog.set(entries, offset2);
        }
      }
      function startLoggingProfilingEvents() {
        (eventLogSize = INITIAL_EVENT_LOG_SIZE),
          (eventLogBuffer = new ArrayBuffer(eventLogSize * 4)),
          (eventLog = new Int32Array(eventLogBuffer)),
          (eventLogIndex = 0);
      }
      function stopLoggingProfilingEvents() {
        var buffer = eventLogBuffer;
        return (eventLogSize = 0), (eventLogBuffer = null), (eventLog = null), (eventLogIndex = 0), buffer;
      }
      function markTaskStart(task, ms) {
        profilingState[QUEUE_SIZE]++,
          eventLog !== null && logEvent([TaskStartEvent, ms * 1e3, task.id, task.priorityLevel]);
      }
      function markTaskCompleted(task, ms) {
        (profilingState[PRIORITY] = NoPriority),
          (profilingState[CURRENT_TASK_ID] = 0),
          profilingState[QUEUE_SIZE]--,
          eventLog !== null && logEvent([TaskCompleteEvent, ms * 1e3, task.id]);
      }
      function markTaskCanceled(task, ms) {
        profilingState[QUEUE_SIZE]--, eventLog !== null && logEvent([TaskCancelEvent, ms * 1e3, task.id]);
      }
      function markTaskErrored(task, ms) {
        (profilingState[PRIORITY] = NoPriority),
          (profilingState[CURRENT_TASK_ID] = 0),
          profilingState[QUEUE_SIZE]--,
          eventLog !== null && logEvent([TaskErrorEvent, ms * 1e3, task.id]);
      }
      function markTaskRun(task, ms) {
        runIdCounter++,
          (profilingState[PRIORITY] = task.priorityLevel),
          (profilingState[CURRENT_TASK_ID] = task.id),
          (profilingState[CURRENT_RUN_ID] = runIdCounter),
          eventLog !== null && logEvent([TaskRunEvent, ms * 1e3, task.id, runIdCounter]);
      }
      function markTaskYield(task, ms) {
        (profilingState[PRIORITY] = NoPriority),
          (profilingState[CURRENT_TASK_ID] = 0),
          (profilingState[CURRENT_RUN_ID] = 0),
          eventLog !== null && logEvent([TaskYieldEvent, ms * 1e3, task.id, runIdCounter]);
      }
      function markSchedulerSuspended(ms) {
        mainThreadIdCounter++, eventLog !== null && logEvent([SchedulerSuspendEvent, ms * 1e3, mainThreadIdCounter]);
      }
      function markSchedulerUnsuspended(ms) {
        eventLog !== null && logEvent([SchedulerResumeEvent, ms * 1e3, mainThreadIdCounter]);
      }
      var maxSigned31BitInt = 1073741823,
        IMMEDIATE_PRIORITY_TIMEOUT = -1,
        USER_BLOCKING_PRIORITY = 250,
        NORMAL_PRIORITY_TIMEOUT = 5e3,
        LOW_PRIORITY_TIMEOUT = 1e4,
        IDLE_PRIORITY = maxSigned31BitInt,
        taskQueue = [],
        timerQueue = [],
        taskIdCounter = 1,
        currentTask = null,
        currentPriorityLevel = NormalPriority,
        isPerformingWork = !1,
        isHostCallbackScheduled = !1,
        isHostTimeoutScheduled = !1;
      function advanceTimers(currentTime) {
        for (var timer = peek(timerQueue); timer !== null; ) {
          if (timer.callback === null) pop(timerQueue);
          else if (timer.startTime <= currentTime)
            pop(timerQueue),
              (timer.sortIndex = timer.expirationTime),
              push(taskQueue, timer),
              markTaskStart(timer, currentTime),
              (timer.isQueued = !0);
          else return;
          timer = peek(timerQueue);
        }
      }
      function handleTimeout(currentTime) {
        if (((isHostTimeoutScheduled = !1), advanceTimers(currentTime), !isHostCallbackScheduled))
          if (peek(taskQueue) !== null) (isHostCallbackScheduled = !0), requestHostCallback(flushWork);
          else {
            var firstTimer = peek(timerQueue);
            firstTimer !== null && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
      }
      function flushWork(hasTimeRemaining, initialTime2) {
        markSchedulerUnsuspended(initialTime2),
          (isHostCallbackScheduled = !1),
          isHostTimeoutScheduled && ((isHostTimeoutScheduled = !1), cancelHostTimeout()),
          (isPerformingWork = !0);
        var previousPriorityLevel = currentPriorityLevel;
        try {
          if (enableProfiling)
            try {
              return workLoop(hasTimeRemaining, initialTime2);
            } catch (error) {
              if (currentTask !== null) {
                var currentTime = exports.unstable_now();
                markTaskErrored(currentTask, currentTime), (currentTask.isQueued = !1);
              }
              throw error;
            }
          else return workLoop(hasTimeRemaining, initialTime2);
        } finally {
          (currentTask = null), (currentPriorityLevel = previousPriorityLevel), (isPerformingWork = !1);
          {
            var _currentTime = exports.unstable_now();
            markSchedulerSuspended(_currentTime);
          }
        }
      }
      function workLoop(hasTimeRemaining, initialTime2) {
        var currentTime = initialTime2;
        for (
          advanceTimers(currentTime), currentTask = peek(taskQueue);
          currentTask !== null &&
          !enableSchedulerDebugging &&
          !(currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost()));

        ) {
          var callback = currentTask.callback;
          if (callback !== null) {
            (currentTask.callback = null), (currentPriorityLevel = currentTask.priorityLevel);
            var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
            markTaskRun(currentTask, currentTime);
            var continuationCallback = callback(didUserCallbackTimeout);
            (currentTime = exports.unstable_now()),
              typeof continuationCallback == "function"
                ? ((currentTask.callback = continuationCallback), markTaskYield(currentTask, currentTime))
                : (markTaskCompleted(currentTask, currentTime),
                  (currentTask.isQueued = !1),
                  currentTask === peek(taskQueue) && pop(taskQueue)),
              advanceTimers(currentTime);
          } else pop(taskQueue);
          currentTask = peek(taskQueue);
        }
        if (currentTask !== null) return !0;
        var firstTimer = peek(timerQueue);
        return firstTimer !== null && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime), !1;
      }
      function unstable_runWithPriority(priorityLevel, eventHandler) {
        switch (priorityLevel) {
          case ImmediatePriority:
          case UserBlockingPriority:
          case NormalPriority:
          case LowPriority:
          case IdlePriority:
            break;
          default:
            priorityLevel = NormalPriority;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      }
      function unstable_next(eventHandler) {
        var priorityLevel;
        switch (currentPriorityLevel) {
          case ImmediatePriority:
          case UserBlockingPriority:
          case NormalPriority:
            priorityLevel = NormalPriority;
            break;
          default:
            priorityLevel = currentPriorityLevel;
            break;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      }
      function unstable_wrapCallback(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function () {
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = parentPriorityLevel;
          try {
            return callback.apply(this, arguments);
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        };
      }
      function timeoutForPriorityLevel(priorityLevel) {
        switch (priorityLevel) {
          case ImmediatePriority:
            return IMMEDIATE_PRIORITY_TIMEOUT;
          case UserBlockingPriority:
            return USER_BLOCKING_PRIORITY;
          case IdlePriority:
            return IDLE_PRIORITY;
          case LowPriority:
            return LOW_PRIORITY_TIMEOUT;
          case NormalPriority:
          default:
            return NORMAL_PRIORITY_TIMEOUT;
        }
      }
      function unstable_scheduleCallback(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now(),
          startTime,
          timeout;
        if (typeof options == "object" && options !== null) {
          var delay = options.delay;
          typeof delay == "number" && delay > 0 ? (startTime = currentTime + delay) : (startTime = currentTime),
            (timeout = typeof options.timeout == "number" ? options.timeout : timeoutForPriorityLevel(priorityLevel));
        } else (timeout = timeoutForPriorityLevel(priorityLevel)), (startTime = currentTime);
        var expirationTime = startTime + timeout,
          newTask = { id: taskIdCounter++, callback, priorityLevel, startTime, expirationTime, sortIndex: -1 };
        return (
          (newTask.isQueued = !1),
          startTime > currentTime
            ? ((newTask.sortIndex = startTime),
              push(timerQueue, newTask),
              peek(taskQueue) === null &&
                newTask === peek(timerQueue) &&
                (isHostTimeoutScheduled ? cancelHostTimeout() : (isHostTimeoutScheduled = !0),
                requestHostTimeout(handleTimeout, startTime - currentTime)))
            : ((newTask.sortIndex = expirationTime),
              push(taskQueue, newTask),
              markTaskStart(newTask, currentTime),
              (newTask.isQueued = !0),
              !isHostCallbackScheduled &&
                !isPerformingWork &&
                ((isHostCallbackScheduled = !0), requestHostCallback(flushWork))),
          newTask
        );
      }
      function unstable_pauseExecution() {}
      function unstable_continueExecution() {
        !isHostCallbackScheduled &&
          !isPerformingWork &&
          ((isHostCallbackScheduled = !0), requestHostCallback(flushWork));
      }
      function unstable_getFirstCallbackNode() {
        return peek(taskQueue);
      }
      function unstable_cancelCallback(task) {
        if (task.isQueued) {
          var currentTime = exports.unstable_now();
          markTaskCanceled(task, currentTime), (task.isQueued = !1);
        }
        task.callback = null;
      }
      function unstable_getCurrentPriorityLevel() {
        return currentPriorityLevel;
      }
      function unstable_shouldYield() {
        var currentTime = exports.unstable_now();
        advanceTimers(currentTime);
        var firstTask = peek(taskQueue);
        return (
          (firstTask !== currentTask &&
            currentTask !== null &&
            firstTask !== null &&
            firstTask.callback !== null &&
            firstTask.startTime <= currentTime &&
            firstTask.expirationTime < currentTask.expirationTime) ||
          shouldYieldToHost()
        );
      }
      var unstable_requestPaint = requestPaint,
        unstable_Profiling = { startLoggingProfilingEvents, stopLoggingProfilingEvents, sharedProfilingBuffer };
      (exports.unstable_IdlePriority = IdlePriority),
        (exports.unstable_ImmediatePriority = ImmediatePriority),
        (exports.unstable_LowPriority = LowPriority),
        (exports.unstable_NormalPriority = NormalPriority),
        (exports.unstable_Profiling = unstable_Profiling),
        (exports.unstable_UserBlockingPriority = UserBlockingPriority),
        (exports.unstable_cancelCallback = unstable_cancelCallback),
        (exports.unstable_continueExecution = unstable_continueExecution),
        (exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel),
        (exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode),
        (exports.unstable_next = unstable_next),
        (exports.unstable_pauseExecution = unstable_pauseExecution),
        (exports.unstable_requestPaint = unstable_requestPaint),
        (exports.unstable_runWithPriority = unstable_runWithPriority),
        (exports.unstable_scheduleCallback = unstable_scheduleCallback),
        (exports.unstable_shouldYield = unstable_shouldYield),
        (exports.unstable_wrapCallback = unstable_wrapCallback);
    })();
  },
});
var require_scheduler = __commonJS({
  "../../node_modules/scheduler/index.js"(exports, module) {
    "use strict";
    module.exports = require_scheduler_development();
  },
});
var require_scheduler_tracing_development = __commonJS({
  "../../node_modules/scheduler/cjs/scheduler-tracing.development.js"(exports) {
    "use strict";
    (function () {
      "use strict";
      var DEFAULT_THREAD_ID = 0,
        interactionIDCounter = 0,
        threadIDCounter = 0;
      (exports.__interactionsRef = null),
        (exports.__subscriberRef = null),
        (exports.__interactionsRef = { current: new Set() }),
        (exports.__subscriberRef = { current: null });
      function unstable_clear(callback) {
        var prevInteractions = exports.__interactionsRef.current;
        exports.__interactionsRef.current = new Set();
        try {
          return callback();
        } finally {
          exports.__interactionsRef.current = prevInteractions;
        }
      }
      function unstable_getCurrent() {
        return exports.__interactionsRef.current;
      }
      function unstable_getThreadID() {
        return ++threadIDCounter;
      }
      function unstable_trace(name, timestamp, callback) {
        var threadID = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : DEFAULT_THREAD_ID,
          interaction = { __count: 1, id: interactionIDCounter++, name, timestamp },
          prevInteractions = exports.__interactionsRef.current,
          interactions = new Set(prevInteractions);
        interactions.add(interaction), (exports.__interactionsRef.current = interactions);
        var subscriber = exports.__subscriberRef.current,
          returnValue;
        try {
          subscriber !== null && subscriber.onInteractionTraced(interaction);
        } finally {
          try {
            subscriber !== null && subscriber.onWorkStarted(interactions, threadID);
          } finally {
            try {
              returnValue = callback();
            } finally {
              exports.__interactionsRef.current = prevInteractions;
              try {
                subscriber !== null && subscriber.onWorkStopped(interactions, threadID);
              } finally {
                interaction.__count--,
                  subscriber !== null &&
                    interaction.__count === 0 &&
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            }
          }
        }
        return returnValue;
      }
      function unstable_wrap(callback) {
        var threadID = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_THREAD_ID,
          wrappedInteractions = exports.__interactionsRef.current,
          subscriber = exports.__subscriberRef.current;
        subscriber !== null && subscriber.onWorkScheduled(wrappedInteractions, threadID),
          wrappedInteractions.forEach(function (interaction) {
            interaction.__count++;
          });
        var hasRun = !1;
        function wrapped() {
          var prevInteractions = exports.__interactionsRef.current;
          (exports.__interactionsRef.current = wrappedInteractions), (subscriber = exports.__subscriberRef.current);
          try {
            var returnValue;
            try {
              subscriber !== null && subscriber.onWorkStarted(wrappedInteractions, threadID);
            } finally {
              try {
                returnValue = callback.apply(void 0, arguments);
              } finally {
                (exports.__interactionsRef.current = prevInteractions),
                  subscriber !== null && subscriber.onWorkStopped(wrappedInteractions, threadID);
              }
            }
            return returnValue;
          } finally {
            hasRun ||
              ((hasRun = !0),
              wrappedInteractions.forEach(function (interaction) {
                interaction.__count--,
                  subscriber !== null &&
                    interaction.__count === 0 &&
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
              }));
          }
        }
        return (
          (wrapped.cancel = function () {
            subscriber = exports.__subscriberRef.current;
            try {
              subscriber !== null && subscriber.onWorkCanceled(wrappedInteractions, threadID);
            } finally {
              wrappedInteractions.forEach(function (interaction) {
                interaction.__count--,
                  subscriber &&
                    interaction.__count === 0 &&
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
              });
            }
          }),
          wrapped
        );
      }
      var subscribers = null;
      subscribers = new Set();
      function unstable_subscribe(subscriber) {
        subscribers.add(subscriber),
          subscribers.size === 1 &&
            (exports.__subscriberRef.current = {
              onInteractionScheduledWorkCompleted,
              onInteractionTraced,
              onWorkCanceled,
              onWorkScheduled,
              onWorkStarted,
              onWorkStopped,
            });
      }
      function unstable_unsubscribe(subscriber) {
        subscribers.delete(subscriber), subscribers.size === 0 && (exports.__subscriberRef.current = null);
      }
      function onInteractionTraced(interaction) {
        var didCatchError = !1,
          caughtError = null;
        if (
          (subscribers.forEach(function (subscriber) {
            try {
              subscriber.onInteractionTraced(interaction);
            } catch (error) {
              didCatchError || ((didCatchError = !0), (caughtError = error));
            }
          }),
          didCatchError)
        )
          throw caughtError;
      }
      function onInteractionScheduledWorkCompleted(interaction) {
        var didCatchError = !1,
          caughtError = null;
        if (
          (subscribers.forEach(function (subscriber) {
            try {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            } catch (error) {
              didCatchError || ((didCatchError = !0), (caughtError = error));
            }
          }),
          didCatchError)
        )
          throw caughtError;
      }
      function onWorkScheduled(interactions, threadID) {
        var didCatchError = !1,
          caughtError = null;
        if (
          (subscribers.forEach(function (subscriber) {
            try {
              subscriber.onWorkScheduled(interactions, threadID);
            } catch (error) {
              didCatchError || ((didCatchError = !0), (caughtError = error));
            }
          }),
          didCatchError)
        )
          throw caughtError;
      }
      function onWorkStarted(interactions, threadID) {
        var didCatchError = !1,
          caughtError = null;
        if (
          (subscribers.forEach(function (subscriber) {
            try {
              subscriber.onWorkStarted(interactions, threadID);
            } catch (error) {
              didCatchError || ((didCatchError = !0), (caughtError = error));
            }
          }),
          didCatchError)
        )
          throw caughtError;
      }
      function onWorkStopped(interactions, threadID) {
        var didCatchError = !1,
          caughtError = null;
        if (
          (subscribers.forEach(function (subscriber) {
            try {
              subscriber.onWorkStopped(interactions, threadID);
            } catch (error) {
              didCatchError || ((didCatchError = !0), (caughtError = error));
            }
          }),
          didCatchError)
        )
          throw caughtError;
      }
      function onWorkCanceled(interactions, threadID) {
        var didCatchError = !1,
          caughtError = null;
        if (
          (subscribers.forEach(function (subscriber) {
            try {
              subscriber.onWorkCanceled(interactions, threadID);
            } catch (error) {
              didCatchError || ((didCatchError = !0), (caughtError = error));
            }
          }),
          didCatchError)
        )
          throw caughtError;
      }
      (exports.unstable_clear = unstable_clear),
        (exports.unstable_getCurrent = unstable_getCurrent),
        (exports.unstable_getThreadID = unstable_getThreadID),
        (exports.unstable_subscribe = unstable_subscribe),
        (exports.unstable_trace = unstable_trace),
        (exports.unstable_unsubscribe = unstable_unsubscribe),
        (exports.unstable_wrap = unstable_wrap);
    })();
  },
});
var require_tracing = __commonJS({
  "../../node_modules/scheduler/tracing.js"(exports, module) {
    "use strict";
    module.exports = require_scheduler_tracing_development();
  },
});
var require_react_dom_development = __commonJS({
  "../../node_modules/react-dom/cjs/react-dom.development.js"(exports) {
    "use strict";
    (function () {
      "use strict";
      var React = require_react(),
        _assign = require_object_assign(),
        Scheduler = require_scheduler(),
        checkPropTypes = require_checkPropTypes(),
        tracing = require_tracing(),
        ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      ReactSharedInternals.hasOwnProperty("ReactCurrentDispatcher") ||
        (ReactSharedInternals.ReactCurrentDispatcher = { current: null }),
        ReactSharedInternals.hasOwnProperty("ReactCurrentBatchConfig") ||
          (ReactSharedInternals.ReactCurrentBatchConfig = { suspense: null });
      function warn(format2) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
            args[_key - 1] = arguments[_key];
          printWarning("warn", format2, args);
        }
      }
      function error(format2) {
        {
          for (
            var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
            _key2 < _len2;
            _key2++
          )
            args[_key2 - 1] = arguments[_key2];
          printWarning("error", format2, args);
        }
      }
      function printWarning(level, format2, args) {
        {
          var hasExistingStack =
            args.length > 0 &&
            typeof args[args.length - 1] == "string" &&
            args[args.length - 1].indexOf(`
    in`) === 0;
          if (!hasExistingStack) {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame,
              stack = ReactDebugCurrentFrame2.getStackAddendum();
            stack !== "" && ((format2 += "%s"), (args = args.concat([stack])));
          }
          var argsWithFormat = args.map(function (item) {
            return "" + item;
          });
          argsWithFormat.unshift("Warning: " + format2),
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          try {
            var argIndex = 0,
              message =
                "Warning: " +
                format2.replace(/%s/g, function () {
                  return args[argIndex++];
                });
            throw new Error(message);
          } catch {}
        }
      }
      if (!React)
        throw Error(
          "ReactDOM was loaded before React. Make sure you load the React package before isLoading ReactDOM."
        );
      var invokeGuardedCallbackImpl = function (name, func, context, a, b, c, d, e, f) {
        var funcArgs = Array.prototype.slice.call(arguments, 3);
        try {
          func.apply(context, funcArgs);
        } catch (error2) {
          this.onError(error2);
        }
      };
      if (
        typeof window < "u" &&
        typeof window.dispatchEvent == "function" &&
        typeof document < "u" &&
        typeof document.createEvent == "function"
      ) {
        var fakeNode = document.createElement("react"),
          invokeGuardedCallbackDev = function (name, func, context, a, b, c, d, e, f) {
            if (!(typeof document < "u"))
              throw Error(
                "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous."
              );
            var evt = document.createEvent("Event"),
              didError = !0,
              windowEvent = window.event,
              windowEventDescriptor = Object.getOwnPropertyDescriptor(window, "event"),
              funcArgs = Array.prototype.slice.call(arguments, 3);
            function callCallback2() {
              fakeNode.removeEventListener(evtType, callCallback2, !1),
                typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = windowEvent),
                func.apply(context, funcArgs),
                (didError = !1);
            }
            var error2,
              didSetError = !1,
              isCrossOriginError = !1;
            function handleWindowError(event) {
              if (
                ((error2 = event.error),
                (didSetError = !0),
                error2 === null && event.colno === 0 && event.lineno === 0 && (isCrossOriginError = !0),
                event.defaultPrevented && error2 != null && typeof error2 == "object")
              )
                try {
                  error2._suppressLogging = !0;
                } catch {}
            }
            var evtType = "react-" + (name || "invokeguardedcallback");
            window.addEventListener("error", handleWindowError),
              fakeNode.addEventListener(evtType, callCallback2, !1),
              evt.initEvent(evtType, !1, !1),
              fakeNode.dispatchEvent(evt),
              windowEventDescriptor && Object.defineProperty(window, "event", windowEventDescriptor),
              didError &&
                (didSetError
                  ? isCrossOriginError &&
                    (error2 = new Error(
                      "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information."
                    ))
                  : (error2 = new Error(
                      `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
                    )),
                this.onError(error2)),
              window.removeEventListener("error", handleWindowError);
          };
        invokeGuardedCallbackImpl = invokeGuardedCallbackDev;
      }
      var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl,
        hasError = !1,
        caughtError = null,
        hasRethrowError = !1,
        rethrowError = null,
        reporter = {
          onError: function (error2) {
            (hasError = !0), (caughtError = error2);
          },
        };
      function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
        (hasError = !1), (caughtError = null), invokeGuardedCallbackImpl$1.apply(reporter, arguments);
      }
      function invokeGuardedCallbackAndCatchFirstError(name, func, context, a, b, c, d, e, f) {
        if ((invokeGuardedCallback.apply(this, arguments), hasError)) {
          var error2 = clearCaughtError();
          hasRethrowError || ((hasRethrowError = !0), (rethrowError = error2));
        }
      }
      function rethrowCaughtError() {
        if (hasRethrowError) {
          var error2 = rethrowError;
          throw ((hasRethrowError = !1), (rethrowError = null), error2);
        }
      }
      function hasCaughtError() {
        return hasError;
      }
      function clearCaughtError() {
        if (hasError) {
          var error2 = caughtError;
          return (hasError = !1), (caughtError = null), error2;
        } else
          throw Error(
            "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      var getFiberCurrentPropsFromNode = null,
        getInstanceFromNode = null,
        getNodeFromInstance = null;
      function setComponentTree(getFiberCurrentPropsFromNodeImpl, getInstanceFromNodeImpl, getNodeFromInstanceImpl) {
        (getFiberCurrentPropsFromNode = getFiberCurrentPropsFromNodeImpl),
          (getInstanceFromNode = getInstanceFromNodeImpl),
          (getNodeFromInstance = getNodeFromInstanceImpl),
          (!getNodeFromInstance || !getInstanceFromNode) &&
            error(
              "EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode."
            );
      }
      var validateEventDispatches;
      validateEventDispatches = function (event) {
        var dispatchListeners = event._dispatchListeners,
          dispatchInstances = event._dispatchInstances,
          listenersIsArr = Array.isArray(dispatchListeners),
          listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0,
          instancesIsArr = Array.isArray(dispatchInstances),
          instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;
        (instancesIsArr !== listenersIsArr || instancesLen !== listenersLen) &&
          error("EventPluginUtils: Invalid `event`.");
      };
      function executeDispatch(event, listener, inst) {
        var type = event.type || "unknown-event";
        (event.currentTarget = getNodeFromInstance(inst)),
          invokeGuardedCallbackAndCatchFirstError(type, listener, void 0, event),
          (event.currentTarget = null);
      }
      function executeDispatchesInOrder(event) {
        var dispatchListeners = event._dispatchListeners,
          dispatchInstances = event._dispatchInstances;
        if ((validateEventDispatches(event), Array.isArray(dispatchListeners)))
          for (var i = 0; i < dispatchListeners.length && !event.isPropagationStopped(); i++)
            executeDispatch(event, dispatchListeners[i], dispatchInstances[i]);
        else dispatchListeners && executeDispatch(event, dispatchListeners, dispatchInstances);
        (event._dispatchListeners = null), (event._dispatchInstances = null);
      }
      var FunctionComponent = 0,
        ClassComponent = 1,
        IndeterminateComponent = 2,
        HostRoot = 3,
        HostPortal = 4,
        HostComponent = 5,
        HostText = 6,
        Fragment = 7,
        Mode = 8,
        ContextConsumer = 9,
        ContextProvider = 10,
        ForwardRef = 11,
        Profiler = 12,
        SuspenseComponent = 13,
        MemoComponent = 14,
        SimpleMemoComponent = 15,
        LazyComponent = 16,
        IncompleteClassComponent = 17,
        DehydratedFragment = 18,
        SuspenseListComponent = 19,
        FundamentalComponent = 20,
        ScopeComponent = 21,
        Block = 22,
        eventPluginOrder = null,
        namesToPlugins = {};
      function recomputePluginOrdering() {
        if (eventPluginOrder)
          for (var pluginName in namesToPlugins) {
            var pluginModule = namesToPlugins[pluginName],
              pluginIndex = eventPluginOrder.indexOf(pluginName);
            if (!(pluginIndex > -1))
              throw Error(
                "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" +
                  pluginName +
                  "`."
              );
            if (!plugins[pluginIndex]) {
              if (!pluginModule.extractEvents)
                throw Error(
                  "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" +
                    pluginName +
                    "` does not."
                );
              plugins[pluginIndex] = pluginModule;
              var publishedEvents = pluginModule.eventTypes;
              for (var eventName in publishedEvents)
                if (!publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName))
                  throw Error(
                    "EventPluginRegistry: Failed to publish event `" + eventName + "` for plugin `" + pluginName + "`."
                  );
            }
          }
      }
      function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
        if (eventNameDispatchConfigs.hasOwnProperty(eventName))
          throw Error(
            "EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + eventName + "`."
          );
        eventNameDispatchConfigs[eventName] = dispatchConfig;
        var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
        if (phasedRegistrationNames) {
          for (var phaseName in phasedRegistrationNames)
            if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
              var phasedRegistrationName = phasedRegistrationNames[phaseName];
              publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
            }
          return !0;
        } else if (dispatchConfig.registrationName)
          return publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName), !0;
        return !1;
      }
      function publishRegistrationName(registrationName, pluginModule, eventName) {
        if (registrationNameModules[registrationName])
          throw Error(
            "EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" +
              registrationName +
              "`."
          );
        (registrationNameModules[registrationName] = pluginModule),
          (registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies);
        {
          var lowerCasedName = registrationName.toLowerCase();
          (possibleRegistrationNames[lowerCasedName] = registrationName),
            registrationName === "onDoubleClick" && (possibleRegistrationNames.ondblclick = registrationName);
        }
      }
      var plugins = [],
        eventNameDispatchConfigs = {},
        registrationNameModules = {},
        registrationNameDependencies = {},
        possibleRegistrationNames = {};
      function injectEventPluginOrder(injectedEventPluginOrder) {
        if (eventPluginOrder)
          throw Error(
            "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."
          );
        (eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder)), recomputePluginOrdering();
      }
      function injectEventPluginsByName(injectedNamesToPlugins) {
        var isOrderingDirty = !1;
        for (var pluginName in injectedNamesToPlugins)
          if (injectedNamesToPlugins.hasOwnProperty(pluginName)) {
            var pluginModule = injectedNamesToPlugins[pluginName];
            if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
              if (namesToPlugins[pluginName])
                throw Error(
                  "EventPluginRegistry: Cannot inject two different event plugins using the same name, `" +
                    pluginName +
                    "`."
                );
              (namesToPlugins[pluginName] = pluginModule), (isOrderingDirty = !0);
            }
          }
        isOrderingDirty && recomputePluginOrdering();
      }
      var canUseDOM = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
        PLUGIN_EVENT_SYSTEM = 1,
        IS_REPLAYED = 1 << 5,
        IS_FIRST_ANCESTOR = 1 << 6,
        restoreImpl = null,
        restoreTarget = null,
        restoreQueue = null;
      function restoreStateOfTarget(target) {
        var internalInstance = getInstanceFromNode(target);
        if (internalInstance) {
          if (typeof restoreImpl != "function")
            throw Error(
              "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue."
            );
          var stateNode = internalInstance.stateNode;
          if (stateNode) {
            var _props = getFiberCurrentPropsFromNode(stateNode);
            restoreImpl(internalInstance.stateNode, internalInstance.type, _props);
          }
        }
      }
      function setRestoreImplementation(impl) {
        restoreImpl = impl;
      }
      function enqueueStateRestore(target) {
        restoreTarget
          ? restoreQueue
            ? restoreQueue.push(target)
            : (restoreQueue = [target])
          : (restoreTarget = target);
      }
      function needsStateRestore() {
        return restoreTarget !== null || restoreQueue !== null;
      }
      function restoreStateIfNeeded() {
        if (restoreTarget) {
          var target = restoreTarget,
            queuedTargets = restoreQueue;
          if (((restoreTarget = null), (restoreQueue = null), restoreStateOfTarget(target), queuedTargets))
            for (var i = 0; i < queuedTargets.length; i++) restoreStateOfTarget(queuedTargets[i]);
        }
      }
      var enableProfilerTimer = !0,
        enableDeprecatedFlareAPI = !1,
        enableFundamentalAPI = !1,
        warnAboutStringRefs = !1,
        batchedUpdatesImpl = function (fn, bookkeeping) {
          return fn(bookkeeping);
        },
        discreteUpdatesImpl = function (fn, a, b, c, d) {
          return fn(a, b, c, d);
        },
        flushDiscreteUpdatesImpl = function () {},
        batchedEventUpdatesImpl = batchedUpdatesImpl,
        isInsideEventHandler = !1,
        isBatchingEventUpdates = !1;
      function finishEventHandler() {
        var controlledComponentsHavePendingUpdates = needsStateRestore();
        controlledComponentsHavePendingUpdates && (flushDiscreteUpdatesImpl(), restoreStateIfNeeded());
      }
      function batchedUpdates(fn, bookkeeping) {
        if (isInsideEventHandler) return fn(bookkeeping);
        isInsideEventHandler = !0;
        try {
          return batchedUpdatesImpl(fn, bookkeeping);
        } finally {
          (isInsideEventHandler = !1), finishEventHandler();
        }
      }
      function batchedEventUpdates(fn, a, b) {
        if (isBatchingEventUpdates) return fn(a, b);
        isBatchingEventUpdates = !0;
        try {
          return batchedEventUpdatesImpl(fn, a, b);
        } finally {
          (isBatchingEventUpdates = !1), finishEventHandler();
        }
      }
      function discreteUpdates(fn, a, b, c, d) {
        var prevIsInsideEventHandler = isInsideEventHandler;
        isInsideEventHandler = !0;
        try {
          return discreteUpdatesImpl(fn, a, b, c, d);
        } finally {
          (isInsideEventHandler = prevIsInsideEventHandler), isInsideEventHandler || finishEventHandler();
        }
      }
      function flushDiscreteUpdatesIfNeeded(timeStamp) {
        !isInsideEventHandler && !enableDeprecatedFlareAPI && flushDiscreteUpdatesImpl();
      }
      function setBatchingImplementation(
        _batchedUpdatesImpl,
        _discreteUpdatesImpl,
        _flushDiscreteUpdatesImpl,
        _batchedEventUpdatesImpl
      ) {
        (batchedUpdatesImpl = _batchedUpdatesImpl),
          (discreteUpdatesImpl = _discreteUpdatesImpl),
          (flushDiscreteUpdatesImpl = _flushDiscreteUpdatesImpl),
          (batchedEventUpdatesImpl = _batchedEventUpdatesImpl);
      }
      var DiscreteEvent = 0,
        UserBlockingEvent = 1,
        ContinuousEvent = 2,
        RESERVED = 0,
        STRING = 1,
        BOOLEANISH_STRING = 2,
        BOOLEAN = 3,
        OVERLOADED_BOOLEAN = 4,
        NUMERIC = 5,
        POSITIVE_NUMERIC = 6,
        ATTRIBUTE_NAME_START_CHAR =
          ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
        ROOT_ATTRIBUTE_NAME = "data-reactroot",
        VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$"),
        hasOwnProperty = Object.prototype.hasOwnProperty,
        illegalAttributeNameCache = {},
        validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        return hasOwnProperty.call(validatedAttributeNameCache, attributeName)
          ? !0
          : hasOwnProperty.call(illegalAttributeNameCache, attributeName)
          ? !1
          : VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)
          ? ((validatedAttributeNameCache[attributeName] = !0), !0)
          : ((illegalAttributeNameCache[attributeName] = !0), error("Invalid attribute name: `%s`", attributeName), !1);
      }
      function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
        return propertyInfo !== null
          ? propertyInfo.type === RESERVED
          : isCustomComponentTag
          ? !1
          : name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N");
      }
      function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED) return !1;
        switch (typeof value) {
          case "function":
          case "symbol":
            return !0;
          case "boolean": {
            if (isCustomComponentTag) return !1;
            if (propertyInfo !== null) return !propertyInfo.acceptsBooleans;
            var prefix = name.toLowerCase().slice(0, 5);
            return prefix !== "data-" && prefix !== "aria-";
          }
          default:
            return !1;
        }
      }
      function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
        if (
          value === null ||
          typeof value > "u" ||
          shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)
        )
          return !0;
        if (isCustomComponentTag) return !1;
        if (propertyInfo !== null)
          switch (propertyInfo.type) {
            case BOOLEAN:
              return !value;
            case OVERLOADED_BOOLEAN:
              return value === !1;
            case NUMERIC:
              return isNaN(value);
            case POSITIVE_NUMERIC:
              return isNaN(value) || value < 1;
          }
        return !1;
      }
      function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
      }
      function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2) {
        (this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN),
          (this.attributeName = attributeName),
          (this.attributeNamespace = attributeNamespace),
          (this.mustUseProperty = mustUseProperty),
          (this.propertyName = name),
          (this.type = type),
          (this.sanitizeURL = sanitizeURL2);
      }
      var properties = {},
        reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style",
        ];
      reservedProps.forEach(function (name) {
        properties[name] = new PropertyInfoRecord(name, RESERVED, !1, name, null, !1);
      }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (_ref) {
          var name = _ref[0],
            attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(name, STRING, !1, attributeName, null, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, !1, name.toLowerCase(), null, !1);
        }),
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, !1, name, null, !1);
        }),
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope",
        ].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, !1, name.toLowerCase(), null, !1);
        }),
        ["checked", "multiple", "muted", "selected"].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, !0, name, null, !1);
        }),
        ["capture", "download"].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, !1, name, null, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, !1, name, null, !1);
        }),
        ["rowSpan", "start"].forEach(function (name) {
          properties[name] = new PropertyInfoRecord(name, NUMERIC, !1, name.toLowerCase(), null, !1);
        });
      var CAMELIZE = /[\-\:]([a-z])/g,
        capitalize = function (token) {
          return token[1].toUpperCase();
        };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height",
      ].forEach(function (attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(name, STRING, !1, attributeName, null, !1);
      }),
        ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(function (
          attributeName
        ) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            !1,
            attributeName,
            "http://www.w3.org/1999/xlink",
            !1
          );
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            !1,
            attributeName,
            "http://www.w3.org/XML/1998/namespace",
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            !1,
            attributeName.toLowerCase(),
            null,
            !1
          );
        });
      var xlinkHref = "xlinkHref";
      (properties[xlinkHref] = new PropertyInfoRecord(
        "xlinkHref",
        STRING,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0
      )),
        ["src", "href", "action", "formAction"].forEach(function (attributeName) {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            !1,
            attributeName.toLowerCase(),
            null,
            !0
          );
        });
      var ReactDebugCurrentFrame = null;
      ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var isJavaScriptProtocol =
          /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
        didWarn = !1;
      function sanitizeURL(url) {
        !didWarn &&
          isJavaScriptProtocol.test(url) &&
          ((didWarn = !0),
          error(
            "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
            JSON.stringify(url)
          ));
      }
      function getValueForProperty(node, name, expected, propertyInfo) {
        if (propertyInfo.mustUseProperty) {
          var propertyName = propertyInfo.propertyName;
          return node[propertyName];
        } else {
          propertyInfo.sanitizeURL && sanitizeURL("" + expected);
          var attributeName = propertyInfo.attributeName,
            stringValue = null;
          if (propertyInfo.type === OVERLOADED_BOOLEAN) {
            if (node.hasAttribute(attributeName)) {
              var value = node.getAttribute(attributeName);
              return value === ""
                ? !0
                : shouldRemoveAttribute(name, expected, propertyInfo, !1)
                ? value
                : value === "" + expected
                ? expected
                : value;
            }
          } else if (node.hasAttribute(attributeName)) {
            if (shouldRemoveAttribute(name, expected, propertyInfo, !1)) return node.getAttribute(attributeName);
            if (propertyInfo.type === BOOLEAN) return expected;
            stringValue = node.getAttribute(attributeName);
          }
          return shouldRemoveAttribute(name, expected, propertyInfo, !1)
            ? stringValue === null
              ? expected
              : stringValue
            : stringValue === "" + expected
            ? expected
            : stringValue;
        }
      }
      function getValueForAttribute(node, name, expected) {
        {
          if (!isAttributeNameSafe(name)) return;
          if (!node.hasAttribute(name)) return expected === void 0 ? void 0 : null;
          var value = node.getAttribute(name);
          return value === "" + expected ? expected : value;
        }
      }
      function setValueForProperty(node, name, value, isCustomComponentTag) {
        var propertyInfo = getPropertyInfo(name);
        if (!shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
          if (
            (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) && (value = null),
            isCustomComponentTag || propertyInfo === null)
          ) {
            if (isAttributeNameSafe(name)) {
              var _attributeName = name;
              value === null ? node.removeAttribute(_attributeName) : node.setAttribute(_attributeName, "" + value);
            }
            return;
          }
          var mustUseProperty = propertyInfo.mustUseProperty;
          if (mustUseProperty) {
            var propertyName = propertyInfo.propertyName;
            if (value === null) {
              var type = propertyInfo.type;
              node[propertyName] = type === BOOLEAN ? !1 : "";
            } else node[propertyName] = value;
            return;
          }
          var attributeName = propertyInfo.attributeName,
            attributeNamespace = propertyInfo.attributeNamespace;
          if (value === null) node.removeAttribute(attributeName);
          else {
            var _type = propertyInfo.type,
              attributeValue;
            _type === BOOLEAN || (_type === OVERLOADED_BOOLEAN && value === !0)
              ? (attributeValue = "")
              : ((attributeValue = "" + value), propertyInfo.sanitizeURL && sanitizeURL(attributeValue.toString())),
              attributeNamespace
                ? node.setAttributeNS(attributeNamespace, attributeName, attributeValue)
                : node.setAttribute(attributeName, attributeValue);
          }
        }
      }
      var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
      function describeComponentFrame(name, source, ownerName) {
        var sourceInfo = "";
        if (source) {
          var path = source.fileName,
            fileName = path.replace(BEFORE_SLASH_RE, "");
          if (/^index\./.test(fileName)) {
            var match2 = path.match(BEFORE_SLASH_RE);
            if (match2) {
              var pathBeforeSlash = match2[1];
              if (pathBeforeSlash) {
                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                fileName = folderName + "/" + fileName;
              }
            }
          }
          sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
        } else ownerName && (sourceInfo = " (created by " + ownerName + ")");
        return (
          `
    in ` +
          (name || "Unknown") +
          sourceInfo
        );
      }
      var hasSymbol = typeof Symbol == "function" && Symbol.for,
        REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103,
        REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106,
        REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107,
        REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108,
        REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114,
        REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109,
        REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110,
        REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111,
        REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112,
        REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113,
        REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120,
        REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115,
        REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116,
        REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121,
        MAYBE_ITERATOR_SYMBOL = typeof Symbol == "function" && Symbol.iterator,
        FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable != "object") return null;
        var maybeIterator =
          (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator == "function" ? maybeIterator : null;
      }
      var Uninitialized = -1,
        Pending = 0,
        Resolved = 1,
        Rejected = 2;
      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved ? lazyComponent._result : null;
      }
      function initializeLazyComponentType(lazyComponent) {
        if (lazyComponent._status === Uninitialized) {
          lazyComponent._status = Pending;
          var ctor = lazyComponent._ctor,
            thenable = ctor();
          (lazyComponent._result = thenable),
            thenable.then(
              function (moduleObject) {
                if (lazyComponent._status === Pending) {
                  var defaultExport = moduleObject.default;
                  defaultExport === void 0 &&
                    error(
                      `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                      moduleObject
                    ),
                    (lazyComponent._status = Resolved),
                    (lazyComponent._result = defaultExport);
                }
              },
              function (error2) {
                lazyComponent._status === Pending &&
                  ((lazyComponent._status = Rejected), (lazyComponent._result = error2));
              }
            );
        }
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
      }
      function getComponentName(type) {
        if (type == null) return null;
        if (
          (typeof type.tag == "number" &&
            error(
              "Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."
            ),
          typeof type == "function")
        )
          return type.displayName || type.name || null;
        if (typeof type == "string") return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return "Context.Consumer";
            case REACT_PROVIDER_TYPE:
              return "Context.Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
              return getComponentName(type.render);
            case REACT_LAZY_TYPE: {
              var thenable = type,
                resolvedThenable = refineResolvedLazyComponent(thenable);
              if (resolvedThenable) return getComponentName(resolvedThenable);
              break;
            }
          }
        return null;
      }
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function describeFiber(fiber) {
        switch (fiber.tag) {
          case HostRoot:
          case HostPortal:
          case HostText:
          case Fragment:
          case ContextProvider:
          case ContextConsumer:
            return "";
          default:
            var owner = fiber._debugOwner,
              source = fiber._debugSource,
              name = getComponentName(fiber.type),
              ownerName = null;
            return owner && (ownerName = getComponentName(owner.type)), describeComponentFrame(name, source, ownerName);
        }
      }
      function getStackByFiberInDevAndProd(workInProgress2) {
        var info = "",
          node = workInProgress2;
        do (info += describeFiber(node)), (node = node.return);
        while (node);
        return info;
      }
      var current = null,
        isRendering = !1;
      function getCurrentFiberOwnerNameInDevOrNull() {
        {
          if (current === null) return null;
          var owner = current._debugOwner;
          if (owner !== null && typeof owner < "u") return getComponentName(owner.type);
        }
        return null;
      }
      function getCurrentFiberStackInDev() {
        return current === null ? "" : getStackByFiberInDevAndProd(current);
      }
      function resetCurrentFiber() {
        (ReactDebugCurrentFrame$1.getCurrentStack = null), (current = null), (isRendering = !1);
      }
      function setCurrentFiber(fiber) {
        (ReactDebugCurrentFrame$1.getCurrentStack = getCurrentFiberStackInDev), (current = fiber), (isRendering = !1);
      }
      function setIsRendering(rendering) {
        isRendering = rendering;
      }
      function toString(value) {
        return "" + value;
      }
      function getToStringValue(value) {
        switch (typeof value) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return value;
          default:
            return "";
        }
      }
      var ReactDebugCurrentFrame$2 = null,
        ReactControlledValuePropTypes = { checkPropTypes: null };
      {
        ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
        var hasReadOnlyValue = { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 },
          propTypes = {
            value: function (props, propName, componentName) {
              return hasReadOnlyValue[props.type] ||
                props.onChange ||
                props.readOnly ||
                props.disabled ||
                props[propName] == null ||
                enableDeprecatedFlareAPI
                ? null
                : new Error(
                    "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
                  );
            },
            checked: function (props, propName, componentName) {
              return props.onChange ||
                props.readOnly ||
                props.disabled ||
                props[propName] == null ||
                enableDeprecatedFlareAPI
                ? null
                : new Error(
                    "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
                  );
            },
          };
        ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
          checkPropTypes(propTypes, props, "prop", tagName, ReactDebugCurrentFrame$2.getStackAddendum);
        };
      }
      function isCheckable(elem) {
        var type = elem.type,
          nodeName = elem.nodeName;
        return nodeName && nodeName.toLowerCase() === "input" && (type === "checkbox" || type === "radio");
      }
      function getTracker(node) {
        return node._valueTracker;
      }
      function detachTracker(node) {
        node._valueTracker = null;
      }
      function getValueFromNode(node) {
        var value = "";
        return node && (isCheckable(node) ? (value = node.checked ? "true" : "false") : (value = node.value)), value;
      }
      function trackValueOnNode(node) {
        var valueField = isCheckable(node) ? "checked" : "value",
          descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField),
          currentValue = "" + node[valueField];
        if (
          !(
            node.hasOwnProperty(valueField) ||
            typeof descriptor > "u" ||
            typeof descriptor.get != "function" ||
            typeof descriptor.set != "function"
          )
        ) {
          var get2 = descriptor.get,
            set2 = descriptor.set;
          Object.defineProperty(node, valueField, {
            configurable: !0,
            get: function () {
              return get2.call(this);
            },
            set: function (value) {
              (currentValue = "" + value), set2.call(this, value);
            },
          }),
            Object.defineProperty(node, valueField, { enumerable: descriptor.enumerable });
          var tracker = {
            getValue: function () {
              return currentValue;
            },
            setValue: function (value) {
              currentValue = "" + value;
            },
            stopTracking: function () {
              detachTracker(node), delete node[valueField];
            },
          };
          return tracker;
        }
      }
      function track(node) {
        getTracker(node) || (node._valueTracker = trackValueOnNode(node));
      }
      function updateValueIfChanged(node) {
        if (!node) return !1;
        var tracker = getTracker(node);
        if (!tracker) return !0;
        var lastValue = tracker.getValue(),
          nextValue = getValueFromNode(node);
        return nextValue !== lastValue ? (tracker.setValue(nextValue), !0) : !1;
      }
      var didWarnValueDefaultValue = !1,
        didWarnCheckedDefaultChecked = !1,
        didWarnControlledToUncontrolled = !1,
        didWarnUncontrolledToControlled = !1;
      function isControlled(props) {
        var usesChecked = props.type === "checkbox" || props.type === "radio";
        return usesChecked ? props.checked != null : props.value != null;
      }
      function getHostProps(element, props) {
        var node = element,
          checked = props.checked,
          hostProps = _assign({}, props, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: checked ?? node._wrapperState.initialChecked,
          });
        return hostProps;
      }
      function initWrapperState(element, props) {
        ReactControlledValuePropTypes.checkPropTypes("input", props),
          props.checked !== void 0 &&
            props.defaultChecked !== void 0 &&
            !didWarnCheckedDefaultChecked &&
            (error(
              "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",
              getCurrentFiberOwnerNameInDevOrNull() || "A component",
              props.type
            ),
            (didWarnCheckedDefaultChecked = !0)),
          props.value !== void 0 &&
            props.defaultValue !== void 0 &&
            !didWarnValueDefaultValue &&
            (error(
              "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",
              getCurrentFiberOwnerNameInDevOrNull() || "A component",
              props.type
            ),
            (didWarnValueDefaultValue = !0));
        var node = element,
          defaultValue = props.defaultValue == null ? "" : props.defaultValue;
        node._wrapperState = {
          initialChecked: props.checked != null ? props.checked : props.defaultChecked,
          initialValue: getToStringValue(props.value != null ? props.value : defaultValue),
          controlled: isControlled(props),
        };
      }
      function updateChecked(element, props) {
        var node = element,
          checked = props.checked;
        checked != null && setValueForProperty(node, "checked", checked, !1);
      }
      function updateWrapper(element, props) {
        var node = element;
        {
          var controlled = isControlled(props);
          !node._wrapperState.controlled &&
            controlled &&
            !didWarnUncontrolledToControlled &&
            (error(
              "A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",
              props.type
            ),
            (didWarnUncontrolledToControlled = !0)),
            node._wrapperState.controlled &&
              !controlled &&
              !didWarnControlledToUncontrolled &&
              (error(
                "A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",
                props.type
              ),
              (didWarnControlledToUncontrolled = !0));
        }
        updateChecked(element, props);
        var value = getToStringValue(props.value),
          type = props.type;
        if (value != null)
          type === "number"
            ? ((value === 0 && node.value === "") || node.value != value) && (node.value = toString(value))
            : node.value !== toString(value) && (node.value = toString(value));
        else if (type === "submit" || type === "reset") {
          node.removeAttribute("value");
          return;
        }
        props.hasOwnProperty("value")
          ? setDefaultValue(node, props.type, value)
          : props.hasOwnProperty("defaultValue") &&
            setDefaultValue(node, props.type, getToStringValue(props.defaultValue)),
          props.checked == null && props.defaultChecked != null && (node.defaultChecked = !!props.defaultChecked);
      }
      function postMountWrapper(element, props, isHydrating2) {
        var node = element;
        if (props.hasOwnProperty("value") || props.hasOwnProperty("defaultValue")) {
          var type = props.type,
            isButton = type === "submit" || type === "reset";
          if (isButton && (props.value === void 0 || props.value === null)) return;
          var initialValue = toString(node._wrapperState.initialValue);
          isHydrating2 || (initialValue !== node.value && (node.value = initialValue)),
            (node.defaultValue = initialValue);
        }
        var name = node.name;
        name !== "" && (node.name = ""),
          (node.defaultChecked = !node.defaultChecked),
          (node.defaultChecked = !!node._wrapperState.initialChecked),
          name !== "" && (node.name = name);
      }
      function restoreControlledState(element, props) {
        var node = element;
        updateWrapper(node, props), updateNamedCousins(node, props);
      }
      function updateNamedCousins(rootNode, props) {
        var name = props.name;
        if (props.type === "radio" && name != null) {
          for (var queryRoot = rootNode; queryRoot.parentNode; ) queryRoot = queryRoot.parentNode;
          for (
            var group = queryRoot.querySelectorAll("input[name=" + JSON.stringify("" + name) + '][type="radio"]'),
              i = 0;
            i < group.length;
            i++
          ) {
            var otherNode = group[i];
            if (!(otherNode === rootNode || otherNode.form !== rootNode.form)) {
              var otherProps = getFiberCurrentPropsFromNode$1(otherNode);
              if (!otherProps)
                throw Error(
                  "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                );
              updateValueIfChanged(otherNode), updateWrapper(otherNode, otherProps);
            }
          }
        }
      }
      function setDefaultValue(node, type, value) {
        (type !== "number" || node.ownerDocument.activeElement !== node) &&
          (value == null
            ? (node.defaultValue = toString(node._wrapperState.initialValue))
            : node.defaultValue !== toString(value) && (node.defaultValue = toString(value)));
      }
      var didWarnSelectedSetOnOption = !1,
        didWarnInvalidChild = !1;
      function flattenChildren(children) {
        var content = "";
        return (
          React.Children.forEach(children, function (child) {
            child != null && (content += child);
          }),
          content
        );
      }
      function validateProps(element, props) {
        typeof props.children == "object" &&
          props.children !== null &&
          React.Children.forEach(props.children, function (child) {
            child != null &&
              (typeof child == "string" ||
                typeof child == "number" ||
                (typeof child.type == "string" &&
                  (didWarnInvalidChild ||
                    ((didWarnInvalidChild = !0),
                    error("Only strings and numbers are supported as <option> children.")))));
          }),
          props.selected != null &&
            !didWarnSelectedSetOnOption &&
            (error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),
            (didWarnSelectedSetOnOption = !0));
      }
      function postMountWrapper$1(element, props) {
        props.value != null && element.setAttribute("value", toString(getToStringValue(props.value)));
      }
      function getHostProps$1(element, props) {
        var hostProps = _assign({ children: void 0 }, props),
          content = flattenChildren(props.children);
        return content && (hostProps.children = content), hostProps;
      }
      var didWarnValueDefaultValue$1;
      didWarnValueDefaultValue$1 = !1;
      function getDeclarationErrorAddendum() {
        var ownerName = getCurrentFiberOwnerNameInDevOrNull();
        return ownerName
          ? `

Check the render method of \`` +
              ownerName +
              "`."
          : "";
      }
      var valuePropNames = ["value", "defaultValue"];
      function checkSelectPropTypes(props) {
        {
          ReactControlledValuePropTypes.checkPropTypes("select", props);
          for (var i = 0; i < valuePropNames.length; i++) {
            var propName = valuePropNames[i];
            if (props[propName] != null) {
              var isArray2 = Array.isArray(props[propName]);
              props.multiple && !isArray2
                ? error(
                    "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
                    propName,
                    getDeclarationErrorAddendum()
                  )
                : !props.multiple &&
                  isArray2 &&
                  error(
                    "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
                    propName,
                    getDeclarationErrorAddendum()
                  );
            }
          }
        }
      }
      function updateOptions(node, multiple, propValue, setDefaultSelected) {
        var options = node.options;
        if (multiple) {
          for (var selectedValues = propValue, selectedValue = {}, i = 0; i < selectedValues.length; i++)
            selectedValue["$" + selectedValues[i]] = !0;
          for (var _i = 0; _i < options.length; _i++) {
            var selected = selectedValue.hasOwnProperty("$" + options[_i].value);
            options[_i].selected !== selected && (options[_i].selected = selected),
              selected && setDefaultSelected && (options[_i].defaultSelected = !0);
          }
        } else {
          for (
            var _selectedValue = toString(getToStringValue(propValue)), defaultSelected = null, _i2 = 0;
            _i2 < options.length;
            _i2++
          ) {
            if (options[_i2].value === _selectedValue) {
              (options[_i2].selected = !0), setDefaultSelected && (options[_i2].defaultSelected = !0);
              return;
            }
            defaultSelected === null && !options[_i2].disabled && (defaultSelected = options[_i2]);
          }
          defaultSelected !== null && (defaultSelected.selected = !0);
        }
      }
      function getHostProps$2(element, props) {
        return _assign({}, props, { value: void 0 });
      }
      function initWrapperState$1(element, props) {
        var node = element;
        checkSelectPropTypes(props),
          (node._wrapperState = { wasMultiple: !!props.multiple }),
          props.value !== void 0 &&
            props.defaultValue !== void 0 &&
            !didWarnValueDefaultValue$1 &&
            (error(
              "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"
            ),
            (didWarnValueDefaultValue$1 = !0));
      }
      function postMountWrapper$2(element, props) {
        var node = element;
        node.multiple = !!props.multiple;
        var value = props.value;
        value != null
          ? updateOptions(node, !!props.multiple, value, !1)
          : props.defaultValue != null && updateOptions(node, !!props.multiple, props.defaultValue, !0);
      }
      function postUpdateWrapper(element, props) {
        var node = element,
          wasMultiple = node._wrapperState.wasMultiple;
        node._wrapperState.wasMultiple = !!props.multiple;
        var value = props.value;
        value != null
          ? updateOptions(node, !!props.multiple, value, !1)
          : wasMultiple !== !!props.multiple &&
            (props.defaultValue != null
              ? updateOptions(node, !!props.multiple, props.defaultValue, !0)
              : updateOptions(node, !!props.multiple, props.multiple ? [] : "", !1));
      }
      function restoreControlledState$1(element, props) {
        var node = element,
          value = props.value;
        value != null && updateOptions(node, !!props.multiple, value, !1);
      }
      var didWarnValDefaultVal = !1;
      function getHostProps$3(element, props) {
        var node = element;
        if (props.dangerouslySetInnerHTML != null)
          throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
        var hostProps = _assign({}, props, {
          value: void 0,
          defaultValue: void 0,
          children: toString(node._wrapperState.initialValue),
        });
        return hostProps;
      }
      function initWrapperState$2(element, props) {
        var node = element;
        ReactControlledValuePropTypes.checkPropTypes("textarea", props),
          props.value !== void 0 &&
            props.defaultValue !== void 0 &&
            !didWarnValDefaultVal &&
            (error(
              "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components",
              getCurrentFiberOwnerNameInDevOrNull() || "A component"
            ),
            (didWarnValDefaultVal = !0));
        var initialValue = props.value;
        if (initialValue == null) {
          var children = props.children,
            defaultValue = props.defaultValue;
          if (children != null) {
            error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            {
              if (defaultValue != null)
                throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
              if (Array.isArray(children)) {
                if (!(children.length <= 1)) throw Error("<textarea> can only have at most one child.");
                children = children[0];
              }
              defaultValue = children;
            }
          }
          defaultValue == null && (defaultValue = ""), (initialValue = defaultValue);
        }
        node._wrapperState = { initialValue: getToStringValue(initialValue) };
      }
      function updateWrapper$1(element, props) {
        var node = element,
          value = getToStringValue(props.value),
          defaultValue = getToStringValue(props.defaultValue);
        if (value != null) {
          var newValue = toString(value);
          newValue !== node.value && (node.value = newValue),
            props.defaultValue == null && node.defaultValue !== newValue && (node.defaultValue = newValue);
        }
        defaultValue != null && (node.defaultValue = toString(defaultValue));
      }
      function postMountWrapper$3(element, props) {
        var node = element,
          textContent = node.textContent;
        textContent === node._wrapperState.initialValue &&
          textContent !== "" &&
          textContent !== null &&
          (node.value = textContent);
      }
      function restoreControlledState$2(element, props) {
        updateWrapper$1(element, props);
      }
      var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml",
        MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML",
        SVG_NAMESPACE = "http://www.w3.org/2000/svg",
        Namespaces = { html: HTML_NAMESPACE, mathml: MATH_NAMESPACE, svg: SVG_NAMESPACE };
      function getIntrinsicNamespace(type) {
        switch (type) {
          case "svg":
            return SVG_NAMESPACE;
          case "math":
            return MATH_NAMESPACE;
          default:
            return HTML_NAMESPACE;
        }
      }
      function getChildNamespace(parentNamespace, type) {
        return parentNamespace == null || parentNamespace === HTML_NAMESPACE
          ? getIntrinsicNamespace(type)
          : parentNamespace === SVG_NAMESPACE && type === "foreignObject"
          ? HTML_NAMESPACE
          : parentNamespace;
      }
      var createMicrosoftUnsafeLocalFunction = function (func) {
          return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (arg0, arg1, arg2, arg3) {
                MSApp.execUnsafeLocalFunction(function () {
                  return func(arg0, arg1, arg2, arg3);
                });
              }
            : func;
        },
        reusableSVGContainer,
        setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
          if (node.namespaceURI === Namespaces.svg && !("innerHTML" in node)) {
            (reusableSVGContainer = reusableSVGContainer || document.createElement("div")),
              (reusableSVGContainer.innerHTML = "<svg>" + html.valueOf().toString() + "</svg>");
            for (var svgNode = reusableSVGContainer.firstChild; node.firstChild; ) node.removeChild(node.firstChild);
            for (; svgNode.firstChild; ) node.appendChild(svgNode.firstChild);
            return;
          }
          node.innerHTML = html;
        }),
        ELEMENT_NODE = 1,
        TEXT_NODE = 3,
        COMMENT_NODE = 8,
        DOCUMENT_NODE = 9,
        DOCUMENT_FRAGMENT_NODE = 11,
        setTextContent = function (node, text) {
          if (text) {
            var firstChild = node.firstChild;
            if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
              firstChild.nodeValue = text;
              return;
            }
          }
          node.textContent = text;
        };
      function unsafeCastStringToDOMTopLevelType(topLevelType) {
        return topLevelType;
      }
      function unsafeCastDOMTopLevelTypeToString(topLevelType) {
        return topLevelType;
      }
      function makePrefixMap(styleProp, eventName) {
        var prefixes2 = {};
        return (
          (prefixes2[styleProp.toLowerCase()] = eventName.toLowerCase()),
          (prefixes2["Webkit" + styleProp] = "webkit" + eventName),
          (prefixes2["Moz" + styleProp] = "moz" + eventName),
          prefixes2
        );
      }
      var vendorPrefixes = {
          animationend: makePrefixMap("Animation", "AnimationEnd"),
          animationiteration: makePrefixMap("Animation", "AnimationIteration"),
          animationstart: makePrefixMap("Animation", "AnimationStart"),
          transitionend: makePrefixMap("Transition", "TransitionEnd"),
        },
        prefixedEventNames = {},
        style = {};
      canUseDOM &&
        ((style = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete vendorPrefixes.animationend.animation,
          delete vendorPrefixes.animationiteration.animation,
          delete vendorPrefixes.animationstart.animation),
        "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
      function getVendorPrefixedEventName(eventName) {
        if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
        if (!vendorPrefixes[eventName]) return eventName;
        var prefixMap = vendorPrefixes[eventName];
        for (var styleProp in prefixMap)
          if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
            return (prefixedEventNames[eventName] = prefixMap[styleProp]);
        return eventName;
      }
      var TOP_ABORT = "abort",
        TOP_ANIMATION_END = getVendorPrefixedEventName("animationend"),
        TOP_ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
        TOP_ANIMATION_START = getVendorPrefixedEventName("animationstart"),
        TOP_BLUR = "blur",
        TOP_CAN_PLAY = "canplay",
        TOP_CAN_PLAY_THROUGH = "canplaythrough",
        TOP_CANCEL = "cancel",
        TOP_CHANGE = "change",
        TOP_CLICK = "click",
        TOP_CLOSE = "close",
        TOP_COMPOSITION_END = "compositionend",
        TOP_COMPOSITION_START = "compositionstart",
        TOP_COMPOSITION_UPDATE = "compositionupdate",
        TOP_CONTEXT_MENU = "contextmenu",
        TOP_COPY = "copy",
        TOP_CUT = "cut",
        TOP_DOUBLE_CLICK = "dblclick",
        TOP_AUX_CLICK = "auxclick",
        TOP_DRAG = "drag",
        TOP_DRAG_END = "dragend",
        TOP_DRAG_ENTER = "dragenter",
        TOP_DRAG_EXIT = "dragexit",
        TOP_DRAG_LEAVE = "dragleave",
        TOP_DRAG_OVER = "dragover",
        TOP_DRAG_START = "dragstart",
        TOP_DROP = "drop",
        TOP_DURATION_CHANGE = "durationchange",
        TOP_EMPTIED = "emptied",
        TOP_ENCRYPTED = "encrypted",
        TOP_ENDED = "ended",
        TOP_ERROR = "error",
        TOP_FOCUS = "focus",
        TOP_GOT_POINTER_CAPTURE = "gotpointercapture",
        TOP_INPUT = "input",
        TOP_INVALID = "invalid",
        TOP_KEY_DOWN = "keydown",
        TOP_KEY_PRESS = "keypress",
        TOP_KEY_UP = "keyup",
        TOP_LOAD = "load",
        TOP_LOAD_START = "loadstart",
        TOP_LOADED_DATA = "loadeddata",
        TOP_LOADED_METADATA = "loadedmetadata",
        TOP_LOST_POINTER_CAPTURE = "lostpointercapture",
        TOP_MOUSE_DOWN = "mousedown",
        TOP_MOUSE_MOVE = "mousemove",
        TOP_MOUSE_OUT = "mouseout",
        TOP_MOUSE_OVER = "mouseover",
        TOP_MOUSE_UP = "mouseup",
        TOP_PASTE = "paste",
        TOP_PAUSE = "pause",
        TOP_PLAY = "play",
        TOP_PLAYING = "playing",
        TOP_POINTER_CANCEL = "pointercancel",
        TOP_POINTER_DOWN = "pointerdown",
        TOP_POINTER_MOVE = "pointermove",
        TOP_POINTER_OUT = "pointerout",
        TOP_POINTER_OVER = "pointerover",
        TOP_POINTER_UP = "pointerup",
        TOP_PROGRESS = "progress",
        TOP_RATE_CHANGE = "ratechange",
        TOP_RESET = "reset",
        TOP_SCROLL = "scroll",
        TOP_SEEKED = "seeked",
        TOP_SEEKING = "seeking",
        TOP_SELECTION_CHANGE = "selectionchange",
        TOP_STALLED = "stalled",
        TOP_SUBMIT = "submit",
        TOP_SUSPEND = "suspend",
        TOP_TEXT_INPUT = "textInput",
        TOP_TIME_UPDATE = "timeupdate",
        TOP_TOGGLE = "toggle",
        TOP_TOUCH_CANCEL = "touchcancel",
        TOP_TOUCH_END = "touchend",
        TOP_TOUCH_MOVE = "touchmove",
        TOP_TOUCH_START = "touchstart",
        TOP_TRANSITION_END = getVendorPrefixedEventName("transitionend"),
        TOP_VOLUME_CHANGE = "volumechange",
        TOP_WAITING = "waiting",
        TOP_WHEEL = "wheel",
        mediaEventTypes = [
          TOP_ABORT,
          TOP_CAN_PLAY,
          TOP_CAN_PLAY_THROUGH,
          TOP_DURATION_CHANGE,
          TOP_EMPTIED,
          TOP_ENCRYPTED,
          TOP_ENDED,
          TOP_ERROR,
          TOP_LOADED_DATA,
          TOP_LOADED_METADATA,
          TOP_LOAD_START,
          TOP_PAUSE,
          TOP_PLAY,
          TOP_PLAYING,
          TOP_PROGRESS,
          TOP_RATE_CHANGE,
          TOP_SEEKED,
          TOP_SEEKING,
          TOP_STALLED,
          TOP_SUSPEND,
          TOP_TIME_UPDATE,
          TOP_VOLUME_CHANGE,
          TOP_WAITING,
        ];
      function getRawEventName(topLevelType) {
        return topLevelType;
      }
      var PossiblyWeakMap = typeof WeakMap == "function" ? WeakMap : Map,
        elementListenerMap = new PossiblyWeakMap();
      function getListenerMapForElement(element) {
        var listenerMap = elementListenerMap.get(element);
        return (
          listenerMap === void 0 && ((listenerMap = new Map()), elementListenerMap.set(element, listenerMap)),
          listenerMap
        );
      }
      function get(key) {
        return key._reactInternalFiber;
      }
      function has(key) {
        return key._reactInternalFiber !== void 0;
      }
      function set(key, value) {
        key._reactInternalFiber = value;
      }
      var NoEffect = 0,
        PerformedWork = 1,
        Placement = 2,
        Update = 4,
        PlacementAndUpdate = 6,
        Deletion = 8,
        ContentReset = 16,
        Callback = 32,
        DidCapture = 64,
        Ref = 128,
        Snapshot = 256,
        Passive = 512,
        Hydrating = 1024,
        HydratingAndUpdate = 1028,
        LifecycleEffectMask = 932,
        HostEffectMask = 2047,
        Incomplete = 2048,
        ShouldCapture = 4096,
        ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      function getNearestMountedFiber(fiber) {
        var node = fiber,
          nearestMounted = fiber;
        if (fiber.alternate) for (; node.return; ) node = node.return;
        else {
          var nextNode = node;
          do
            (node = nextNode),
              (node.effectTag & (Placement | Hydrating)) !== NoEffect && (nearestMounted = node.return),
              (nextNode = node.return);
          while (nextNode);
        }
        return node.tag === HostRoot ? nearestMounted : null;
      }
      function getSuspenseInstanceFromFiber(fiber) {
        if (fiber.tag === SuspenseComponent) {
          var suspenseState = fiber.memoizedState;
          if (suspenseState === null) {
            var current2 = fiber.alternate;
            current2 !== null && (suspenseState = current2.memoizedState);
          }
          if (suspenseState !== null) return suspenseState.dehydrated;
        }
        return null;
      }
      function getContainerFromFiber(fiber) {
        return fiber.tag === HostRoot ? fiber.stateNode.containerInfo : null;
      }
      function isFiberMounted(fiber) {
        return getNearestMountedFiber(fiber) === fiber;
      }
      function isMounted(component) {
        {
          var owner = ReactCurrentOwner.current;
          if (owner !== null && owner.tag === ClassComponent) {
            var ownerFiber = owner,
              instance = ownerFiber.stateNode;
            instance._warnedAboutRefsInRender ||
              error(
                "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                getComponentName(ownerFiber.type) || "A component"
              ),
              (instance._warnedAboutRefsInRender = !0);
          }
        }
        var fiber = get(component);
        return fiber ? getNearestMountedFiber(fiber) === fiber : !1;
      }
      function assertIsMounted(fiber) {
        if (getNearestMountedFiber(fiber) !== fiber) throw Error("Unable to find node on an unmounted component.");
      }
      function findCurrentFiberUsingSlowPath(fiber) {
        var alternate = fiber.alternate;
        if (!alternate) {
          var nearestMounted = getNearestMountedFiber(fiber);
          if (nearestMounted === null) throw Error("Unable to find node on an unmounted component.");
          return nearestMounted !== fiber ? null : fiber;
        }
        for (var a = fiber, b = alternate; ; ) {
          var parentA = a.return;
          if (parentA === null) break;
          var parentB = parentA.alternate;
          if (parentB === null) {
            var nextParent = parentA.return;
            if (nextParent !== null) {
              a = b = nextParent;
              continue;
            }
            break;
          }
          if (parentA.child === parentB.child) {
            for (var child = parentA.child; child; ) {
              if (child === a) return assertIsMounted(parentA), fiber;
              if (child === b) return assertIsMounted(parentA), alternate;
              child = child.sibling;
            }
            throw Error("Unable to find node on an unmounted component.");
          }
          if (a.return !== b.return) (a = parentA), (b = parentB);
          else {
            for (var didFindChild = !1, _child = parentA.child; _child; ) {
              if (_child === a) {
                (didFindChild = !0), (a = parentA), (b = parentB);
                break;
              }
              if (_child === b) {
                (didFindChild = !0), (b = parentA), (a = parentB);
                break;
              }
              _child = _child.sibling;
            }
            if (!didFindChild) {
              for (_child = parentB.child; _child; ) {
                if (_child === a) {
                  (didFindChild = !0), (a = parentB), (b = parentA);
                  break;
                }
                if (_child === b) {
                  (didFindChild = !0), (b = parentB), (a = parentA);
                  break;
                }
                _child = _child.sibling;
              }
              if (!didFindChild)
                throw Error(
                  "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
                );
            }
          }
          if (a.alternate !== b)
            throw Error(
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        if (a.tag !== HostRoot) throw Error("Unable to find node on an unmounted component.");
        return a.stateNode.current === a ? fiber : alternate;
      }
      function findCurrentHostFiber(parent) {
        var currentParent = findCurrentFiberUsingSlowPath(parent);
        if (!currentParent) return null;
        for (var node = currentParent; ; ) {
          if (node.tag === HostComponent || node.tag === HostText) return node;
          if (node.child) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === currentParent) return null;
          for (; !node.sibling; ) {
            if (!node.return || node.return === currentParent) return null;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
        return null;
      }
      function findCurrentHostFiberWithNoPortals(parent) {
        var currentParent = findCurrentFiberUsingSlowPath(parent);
        if (!currentParent) return null;
        for (var node = currentParent; ; ) {
          if (node.tag === HostComponent || node.tag === HostText || enableFundamentalAPI) return node;
          if (node.child && node.tag !== HostPortal) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === currentParent) return null;
          for (; !node.sibling; ) {
            if (!node.return || node.return === currentParent) return null;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
        return null;
      }
      function accumulateInto(current2, next) {
        if (next == null) throw Error("accumulateInto(...): Accumulated items must not be null or undefined.");
        return current2 == null
          ? next
          : Array.isArray(current2)
          ? Array.isArray(next)
            ? (current2.push.apply(current2, next), current2)
            : (current2.push(next), current2)
          : Array.isArray(next)
          ? [current2].concat(next)
          : [current2, next];
      }
      function forEachAccumulated(arr, cb, scope2) {
        Array.isArray(arr) ? arr.forEach(cb, scope2) : arr && cb.call(scope2, arr);
      }
      var eventQueue = null,
        executeDispatchesAndRelease = function (event) {
          event && (executeDispatchesInOrder(event), event.isPersistent() || event.constructor.release(event));
        },
        executeDispatchesAndReleaseTopLevel = function (e) {
          return executeDispatchesAndRelease(e);
        };
      function runEventsInBatch(events) {
        events !== null && (eventQueue = accumulateInto(eventQueue, events));
        var processingEventQueue = eventQueue;
        if (((eventQueue = null), !!processingEventQueue)) {
          if ((forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel), eventQueue))
            throw Error(
              "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."
            );
          rethrowCaughtError();
        }
      }
      function getEventTarget(nativeEvent) {
        var target = nativeEvent.target || nativeEvent.srcElement || window;
        return (
          target.correspondingUseElement && (target = target.correspondingUseElement),
          target.nodeType === TEXT_NODE ? target.parentNode : target
        );
      }
      function isEventSupported(eventNameSuffix) {
        if (!canUseDOM) return !1;
        var eventName = "on" + eventNameSuffix,
          isSupported = eventName in document;
        if (!isSupported) {
          var element = document.createElement("div");
          element.setAttribute(eventName, "return;"), (isSupported = typeof element[eventName] == "function");
        }
        return isSupported;
      }
      var CALLBACK_BOOKKEEPING_POOL_SIZE = 10,
        callbackBookkeepingPool = [];
      function releaseTopLevelCallbackBookKeeping(instance) {
        (instance.topLevelType = null),
          (instance.nativeEvent = null),
          (instance.targetInst = null),
          (instance.ancestors.length = 0),
          callbackBookkeepingPool.length < CALLBACK_BOOKKEEPING_POOL_SIZE && callbackBookkeepingPool.push(instance);
      }
      function getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst, eventSystemFlags) {
        if (callbackBookkeepingPool.length) {
          var instance = callbackBookkeepingPool.pop();
          return (
            (instance.topLevelType = topLevelType),
            (instance.eventSystemFlags = eventSystemFlags),
            (instance.nativeEvent = nativeEvent),
            (instance.targetInst = targetInst),
            instance
          );
        }
        return { topLevelType, eventSystemFlags, nativeEvent, targetInst, ancestors: [] };
      }
      function findRootContainerNode(inst) {
        if (inst.tag === HostRoot) return inst.stateNode.containerInfo;
        for (; inst.return; ) inst = inst.return;
        return inst.tag !== HostRoot ? null : inst.stateNode.containerInfo;
      }
      function extractPluginEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
        for (var events = null, i = 0; i < plugins.length; i++) {
          var possiblePlugin = plugins[i];
          if (possiblePlugin) {
            var extractedEvents = possiblePlugin.extractEvents(
              topLevelType,
              targetInst,
              nativeEvent,
              nativeEventTarget,
              eventSystemFlags
            );
            extractedEvents && (events = accumulateInto(events, extractedEvents));
          }
        }
        return events;
      }
      function runExtractedPluginEventsInBatch(
        topLevelType,
        targetInst,
        nativeEvent,
        nativeEventTarget,
        eventSystemFlags
      ) {
        var events = extractPluginEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
        runEventsInBatch(events);
      }
      function handleTopLevel(bookKeeping) {
        var targetInst = bookKeeping.targetInst,
          ancestor = targetInst;
        do {
          if (!ancestor) {
            var ancestors = bookKeeping.ancestors;
            ancestors.push(ancestor);
            break;
          }
          var root2 = findRootContainerNode(ancestor);
          if (!root2) break;
          var tag = ancestor.tag;
          (tag === HostComponent || tag === HostText) && bookKeeping.ancestors.push(ancestor),
            (ancestor = getClosestInstanceFromNode(root2));
        } while (ancestor);
        for (var i = 0; i < bookKeeping.ancestors.length; i++) {
          targetInst = bookKeeping.ancestors[i];
          var eventTarget = getEventTarget(bookKeeping.nativeEvent),
            topLevelType = bookKeeping.topLevelType,
            nativeEvent = bookKeeping.nativeEvent,
            eventSystemFlags = bookKeeping.eventSystemFlags;
          i === 0 && (eventSystemFlags |= IS_FIRST_ANCESTOR),
            runExtractedPluginEventsInBatch(topLevelType, targetInst, nativeEvent, eventTarget, eventSystemFlags);
        }
      }
      function dispatchEventForLegacyPluginEventSystem(topLevelType, eventSystemFlags, nativeEvent, targetInst) {
        var bookKeeping = getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst, eventSystemFlags);
        try {
          batchedEventUpdates(handleTopLevel, bookKeeping);
        } finally {
          releaseTopLevelCallbackBookKeeping(bookKeeping);
        }
      }
      function legacyListenToEvent(registrationName, mountAt) {
        for (
          var listenerMap = getListenerMapForElement(mountAt),
            dependencies = registrationNameDependencies[registrationName],
            i = 0;
          i < dependencies.length;
          i++
        ) {
          var dependency = dependencies[i];
          legacyListenToTopLevelEvent(dependency, mountAt, listenerMap);
        }
      }
      function legacyListenToTopLevelEvent(topLevelType, mountAt, listenerMap) {
        if (!listenerMap.has(topLevelType)) {
          switch (topLevelType) {
            case TOP_SCROLL:
              trapCapturedEvent(TOP_SCROLL, mountAt);
              break;
            case TOP_FOCUS:
            case TOP_BLUR:
              trapCapturedEvent(TOP_FOCUS, mountAt),
                trapCapturedEvent(TOP_BLUR, mountAt),
                listenerMap.set(TOP_BLUR, null),
                listenerMap.set(TOP_FOCUS, null);
              break;
            case TOP_CANCEL:
            case TOP_CLOSE:
              isEventSupported(getRawEventName(topLevelType)) && trapCapturedEvent(topLevelType, mountAt);
              break;
            case TOP_INVALID:
            case TOP_SUBMIT:
            case TOP_RESET:
              break;
            default:
              var isMediaEvent = mediaEventTypes.indexOf(topLevelType) !== -1;
              isMediaEvent || trapBubbledEvent(topLevelType, mountAt);
              break;
          }
          listenerMap.set(topLevelType, null);
        }
      }
      function isListeningToAllDependencies(registrationName, mountAt) {
        for (
          var listenerMap = getListenerMapForElement(mountAt),
            dependencies = registrationNameDependencies[registrationName],
            i = 0;
          i < dependencies.length;
          i++
        ) {
          var dependency = dependencies[i];
          if (!listenerMap.has(dependency)) return !1;
        }
        return !0;
      }
      var attemptUserBlockingHydration;
      function setAttemptUserBlockingHydration(fn) {
        attemptUserBlockingHydration = fn;
      }
      var attemptContinuousHydration;
      function setAttemptContinuousHydration(fn) {
        attemptContinuousHydration = fn;
      }
      var attemptHydrationAtCurrentPriority;
      function setAttemptHydrationAtCurrentPriority(fn) {
        attemptHydrationAtCurrentPriority = fn;
      }
      var hasScheduledReplayAttempt = !1,
        queuedDiscreteEvents = [],
        queuedFocus = null,
        queuedDrag = null,
        queuedMouse = null,
        queuedPointers = new Map(),
        queuedPointerCaptures = new Map(),
        queuedExplicitHydrationTargets = [];
      function hasQueuedDiscreteEvents() {
        return queuedDiscreteEvents.length > 0;
      }
      var discreteReplayableEvents = [
          TOP_MOUSE_DOWN,
          TOP_MOUSE_UP,
          TOP_TOUCH_CANCEL,
          TOP_TOUCH_END,
          TOP_TOUCH_START,
          TOP_AUX_CLICK,
          TOP_DOUBLE_CLICK,
          TOP_POINTER_CANCEL,
          TOP_POINTER_DOWN,
          TOP_POINTER_UP,
          TOP_DRAG_END,
          TOP_DRAG_START,
          TOP_DROP,
          TOP_COMPOSITION_END,
          TOP_COMPOSITION_START,
          TOP_KEY_DOWN,
          TOP_KEY_PRESS,
          TOP_KEY_UP,
          TOP_INPUT,
          TOP_TEXT_INPUT,
          TOP_CLOSE,
          TOP_CANCEL,
          TOP_COPY,
          TOP_CUT,
          TOP_PASTE,
          TOP_CLICK,
          TOP_CHANGE,
          TOP_CONTEXT_MENU,
          TOP_RESET,
          TOP_SUBMIT,
        ],
        continuousReplayableEvents = [
          TOP_FOCUS,
          TOP_BLUR,
          TOP_DRAG_ENTER,
          TOP_DRAG_LEAVE,
          TOP_MOUSE_OVER,
          TOP_MOUSE_OUT,
          TOP_POINTER_OVER,
          TOP_POINTER_OUT,
          TOP_GOT_POINTER_CAPTURE,
          TOP_LOST_POINTER_CAPTURE,
        ];
      function isReplayableDiscreteEvent(eventType) {
        return discreteReplayableEvents.indexOf(eventType) > -1;
      }
      function trapReplayableEventForDocument(topLevelType, document3, listenerMap) {
        legacyListenToTopLevelEvent(topLevelType, document3, listenerMap);
      }
      function eagerlyTrapReplayableEvents(container, document3) {
        var listenerMapForDoc = getListenerMapForElement(document3);
        discreteReplayableEvents.forEach(function (topLevelType) {
          trapReplayableEventForDocument(topLevelType, document3, listenerMapForDoc);
        }),
          continuousReplayableEvents.forEach(function (topLevelType) {
            trapReplayableEventForDocument(topLevelType, document3, listenerMapForDoc);
          });
      }
      function createQueuedReplayableEvent(blockedOn, topLevelType, eventSystemFlags, container, nativeEvent) {
        return { blockedOn, topLevelType, eventSystemFlags: eventSystemFlags | IS_REPLAYED, nativeEvent, container };
      }
      function queueDiscreteEvent(blockedOn, topLevelType, eventSystemFlags, container, nativeEvent) {
        var queuedEvent = createQueuedReplayableEvent(
          blockedOn,
          topLevelType,
          eventSystemFlags,
          container,
          nativeEvent
        );
        queuedDiscreteEvents.push(queuedEvent);
      }
      function clearIfContinuousEvent(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case TOP_FOCUS:
          case TOP_BLUR:
            queuedFocus = null;
            break;
          case TOP_DRAG_ENTER:
          case TOP_DRAG_LEAVE:
            queuedDrag = null;
            break;
          case TOP_MOUSE_OVER:
          case TOP_MOUSE_OUT:
            queuedMouse = null;
            break;
          case TOP_POINTER_OVER:
          case TOP_POINTER_OUT: {
            var pointerId = nativeEvent.pointerId;
            queuedPointers.delete(pointerId);
            break;
          }
          case TOP_GOT_POINTER_CAPTURE:
          case TOP_LOST_POINTER_CAPTURE: {
            var _pointerId = nativeEvent.pointerId;
            queuedPointerCaptures.delete(_pointerId);
            break;
          }
        }
      }
      function accumulateOrCreateContinuousQueuedReplayableEvent(
        existingQueuedEvent,
        blockedOn,
        topLevelType,
        eventSystemFlags,
        container,
        nativeEvent
      ) {
        if (existingQueuedEvent === null || existingQueuedEvent.nativeEvent !== nativeEvent) {
          var queuedEvent = createQueuedReplayableEvent(
            blockedOn,
            topLevelType,
            eventSystemFlags,
            container,
            nativeEvent
          );
          if (blockedOn !== null) {
            var _fiber2 = getInstanceFromNode$1(blockedOn);
            _fiber2 !== null && attemptContinuousHydration(_fiber2);
          }
          return queuedEvent;
        }
        return (existingQueuedEvent.eventSystemFlags |= eventSystemFlags), existingQueuedEvent;
      }
      function queueIfContinuousEvent(blockedOn, topLevelType, eventSystemFlags, container, nativeEvent) {
        switch (topLevelType) {
          case TOP_FOCUS: {
            var focusEvent = nativeEvent;
            return (
              (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
                queuedFocus,
                blockedOn,
                topLevelType,
                eventSystemFlags,
                container,
                focusEvent
              )),
              !0
            );
          }
          case TOP_DRAG_ENTER: {
            var dragEvent = nativeEvent;
            return (
              (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
                queuedDrag,
                blockedOn,
                topLevelType,
                eventSystemFlags,
                container,
                dragEvent
              )),
              !0
            );
          }
          case TOP_MOUSE_OVER: {
            var mouseEvent = nativeEvent;
            return (
              (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
                queuedMouse,
                blockedOn,
                topLevelType,
                eventSystemFlags,
                container,
                mouseEvent
              )),
              !0
            );
          }
          case TOP_POINTER_OVER: {
            var pointerEvent = nativeEvent,
              pointerId = pointerEvent.pointerId;
            return (
              queuedPointers.set(
                pointerId,
                accumulateOrCreateContinuousQueuedReplayableEvent(
                  queuedPointers.get(pointerId) || null,
                  blockedOn,
                  topLevelType,
                  eventSystemFlags,
                  container,
                  pointerEvent
                )
              ),
              !0
            );
          }
          case TOP_GOT_POINTER_CAPTURE: {
            var _pointerEvent = nativeEvent,
              _pointerId2 = _pointerEvent.pointerId;
            return (
              queuedPointerCaptures.set(
                _pointerId2,
                accumulateOrCreateContinuousQueuedReplayableEvent(
                  queuedPointerCaptures.get(_pointerId2) || null,
                  blockedOn,
                  topLevelType,
                  eventSystemFlags,
                  container,
                  _pointerEvent
                )
              ),
              !0
            );
          }
        }
        return !1;
      }
      function attemptExplicitHydrationTarget(queuedTarget) {
        var targetInst = getClosestInstanceFromNode(queuedTarget.target);
        if (targetInst !== null) {
          var nearestMounted = getNearestMountedFiber(targetInst);
          if (nearestMounted !== null) {
            var tag = nearestMounted.tag;
            if (tag === SuspenseComponent) {
              var instance = getSuspenseInstanceFromFiber(nearestMounted);
              if (instance !== null) {
                (queuedTarget.blockedOn = instance),
                  Scheduler.unstable_runWithPriority(queuedTarget.priority, function () {
                    attemptHydrationAtCurrentPriority(nearestMounted);
                  });
                return;
              }
            } else if (tag === HostRoot) {
              var root2 = nearestMounted.stateNode;
              if (root2.hydrate) {
                queuedTarget.blockedOn = getContainerFromFiber(nearestMounted);
                return;
              }
            }
          }
        }
        queuedTarget.blockedOn = null;
      }
      function attemptReplayContinuousQueuedEvent(queuedEvent) {
        if (queuedEvent.blockedOn !== null) return !1;
        var nextBlockedOn = attemptToDispatchEvent(
          queuedEvent.topLevelType,
          queuedEvent.eventSystemFlags,
          queuedEvent.container,
          queuedEvent.nativeEvent
        );
        if (nextBlockedOn !== null) {
          var _fiber3 = getInstanceFromNode$1(nextBlockedOn);
          return _fiber3 !== null && attemptContinuousHydration(_fiber3), (queuedEvent.blockedOn = nextBlockedOn), !1;
        }
        return !0;
      }
      function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
        attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
      }
      function replayUnblockedEvents() {
        for (hasScheduledReplayAttempt = !1; queuedDiscreteEvents.length > 0; ) {
          var nextDiscreteEvent = queuedDiscreteEvents[0];
          if (nextDiscreteEvent.blockedOn !== null) {
            var _fiber4 = getInstanceFromNode$1(nextDiscreteEvent.blockedOn);
            _fiber4 !== null && attemptUserBlockingHydration(_fiber4);
            break;
          }
          var nextBlockedOn = attemptToDispatchEvent(
            nextDiscreteEvent.topLevelType,
            nextDiscreteEvent.eventSystemFlags,
            nextDiscreteEvent.container,
            nextDiscreteEvent.nativeEvent
          );
          nextBlockedOn !== null ? (nextDiscreteEvent.blockedOn = nextBlockedOn) : queuedDiscreteEvents.shift();
        }
        queuedFocus !== null && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null),
          queuedDrag !== null && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null),
          queuedMouse !== null && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null),
          queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap),
          queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
      }
      function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
        queuedEvent.blockedOn === unblocked &&
          ((queuedEvent.blockedOn = null),
          hasScheduledReplayAttempt ||
            ((hasScheduledReplayAttempt = !0),
            Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents)));
      }
      function retryIfBlockedOn(unblocked) {
        if (queuedDiscreteEvents.length > 0) {
          scheduleCallbackIfUnblocked(queuedDiscreteEvents[0], unblocked);
          for (var i = 1; i < queuedDiscreteEvents.length; i++) {
            var queuedEvent = queuedDiscreteEvents[i];
            queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null);
          }
        }
        queuedFocus !== null && scheduleCallbackIfUnblocked(queuedFocus, unblocked),
          queuedDrag !== null && scheduleCallbackIfUnblocked(queuedDrag, unblocked),
          queuedMouse !== null && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
        var unblock = function (queuedEvent2) {
          return scheduleCallbackIfUnblocked(queuedEvent2, unblocked);
        };
        queuedPointers.forEach(unblock), queuedPointerCaptures.forEach(unblock);
        for (var _i = 0; _i < queuedExplicitHydrationTargets.length; _i++) {
          var queuedTarget = queuedExplicitHydrationTargets[_i];
          queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
        }
        for (; queuedExplicitHydrationTargets.length > 0; ) {
          var nextExplicitTarget = queuedExplicitHydrationTargets[0];
          if (nextExplicitTarget.blockedOn !== null) break;
          attemptExplicitHydrationTarget(nextExplicitTarget),
            nextExplicitTarget.blockedOn === null && queuedExplicitHydrationTargets.shift();
        }
      }
      function addEventBubbleListener(element, eventType, listener) {
        element.addEventListener(eventType, listener, !1);
      }
      function addEventCaptureListener(element, eventType, listener) {
        element.addEventListener(eventType, listener, !0);
      }
      var simpleEventPluginEventTypes = {},
        topLevelEventsToDispatchConfig = new Map(),
        eventPriorities = new Map(),
        discreteEventPairsForSimpleEventPlugin = [
          TOP_BLUR,
          "blur",
          TOP_CANCEL,
          "cancel",
          TOP_CLICK,
          "click",
          TOP_CLOSE,
          "close",
          TOP_CONTEXT_MENU,
          "contextMenu",
          TOP_COPY,
          "copy",
          TOP_CUT,
          "cut",
          TOP_AUX_CLICK,
          "auxClick",
          TOP_DOUBLE_CLICK,
          "doubleClick",
          TOP_DRAG_END,
          "dragEnd",
          TOP_DRAG_START,
          "dragStart",
          TOP_DROP,
          "drop",
          TOP_FOCUS,
          "focus",
          TOP_INPUT,
          "input",
          TOP_INVALID,
          "invalid",
          TOP_KEY_DOWN,
          "keyDown",
          TOP_KEY_PRESS,
          "keyPress",
          TOP_KEY_UP,
          "keyUp",
          TOP_MOUSE_DOWN,
          "mouseDown",
          TOP_MOUSE_UP,
          "mouseUp",
          TOP_PASTE,
          "paste",
          TOP_PAUSE,
          "pause",
          TOP_PLAY,
          "play",
          TOP_POINTER_CANCEL,
          "pointerCancel",
          TOP_POINTER_DOWN,
          "pointerDown",
          TOP_POINTER_UP,
          "pointerUp",
          TOP_RATE_CHANGE,
          "rateChange",
          TOP_RESET,
          "reset",
          TOP_SEEKED,
          "seeked",
          TOP_SUBMIT,
          "submit",
          TOP_TOUCH_CANCEL,
          "touchCancel",
          TOP_TOUCH_END,
          "touchEnd",
          TOP_TOUCH_START,
          "touchStart",
          TOP_VOLUME_CHANGE,
          "volumeChange",
        ],
        otherDiscreteEvents = [
          TOP_CHANGE,
          TOP_SELECTION_CHANGE,
          TOP_TEXT_INPUT,
          TOP_COMPOSITION_START,
          TOP_COMPOSITION_END,
          TOP_COMPOSITION_UPDATE,
        ],
        userBlockingPairsForSimpleEventPlugin = [
          TOP_DRAG,
          "drag",
          TOP_DRAG_ENTER,
          "dragEnter",
          TOP_DRAG_EXIT,
          "dragExit",
          TOP_DRAG_LEAVE,
          "dragLeave",
          TOP_DRAG_OVER,
          "dragOver",
          TOP_MOUSE_MOVE,
          "mouseMove",
          TOP_MOUSE_OUT,
          "mouseOut",
          TOP_MOUSE_OVER,
          "mouseOver",
          TOP_POINTER_MOVE,
          "pointerMove",
          TOP_POINTER_OUT,
          "pointerOut",
          TOP_POINTER_OVER,
          "pointerOver",
          TOP_SCROLL,
          "scroll",
          TOP_TOGGLE,
          "toggle",
          TOP_TOUCH_MOVE,
          "touchMove",
          TOP_WHEEL,
          "wheel",
        ],
        continuousPairsForSimpleEventPlugin = [
          TOP_ABORT,
          "abort",
          TOP_ANIMATION_END,
          "animationEnd",
          TOP_ANIMATION_ITERATION,
          "animationIteration",
          TOP_ANIMATION_START,
          "animationStart",
          TOP_CAN_PLAY,
          "canPlay",
          TOP_CAN_PLAY_THROUGH,
          "canPlayThrough",
          TOP_DURATION_CHANGE,
          "durationChange",
          TOP_EMPTIED,
          "emptied",
          TOP_ENCRYPTED,
          "encrypted",
          TOP_ENDED,
          "ended",
          TOP_ERROR,
          "error",
          TOP_GOT_POINTER_CAPTURE,
          "gotPointerCapture",
          TOP_LOAD,
          "load",
          TOP_LOADED_DATA,
          "loadedData",
          TOP_LOADED_METADATA,
          "loadedMetadata",
          TOP_LOAD_START,
          "loadStart",
          TOP_LOST_POINTER_CAPTURE,
          "lostPointerCapture",
          TOP_PLAYING,
          "playing",
          TOP_PROGRESS,
          "progress",
          TOP_SEEKING,
          "seeking",
          TOP_STALLED,
          "stalled",
          TOP_SUSPEND,
          "suspend",
          TOP_TIME_UPDATE,
          "timeUpdate",
          TOP_TRANSITION_END,
          "transitionEnd",
          TOP_WAITING,
          "waiting",
        ];
      function processSimpleEventPluginPairsByPriority(eventTypes2, priority) {
        for (var i = 0; i < eventTypes2.length; i += 2) {
          var topEvent = eventTypes2[i],
            event = eventTypes2[i + 1],
            capitalizedEvent = event[0].toUpperCase() + event.slice(1),
            onEvent = "on" + capitalizedEvent,
            config = {
              phasedRegistrationNames: { bubbled: onEvent, captured: onEvent + "Capture" },
              dependencies: [topEvent],
              eventPriority: priority,
            };
          eventPriorities.set(topEvent, priority),
            topLevelEventsToDispatchConfig.set(topEvent, config),
            (simpleEventPluginEventTypes[event] = config);
        }
      }
      function processTopEventPairsByPriority(eventTypes2, priority) {
        for (var i = 0; i < eventTypes2.length; i++) eventPriorities.set(eventTypes2[i], priority);
      }
      processSimpleEventPluginPairsByPriority(discreteEventPairsForSimpleEventPlugin, DiscreteEvent),
        processSimpleEventPluginPairsByPriority(userBlockingPairsForSimpleEventPlugin, UserBlockingEvent),
        processSimpleEventPluginPairsByPriority(continuousPairsForSimpleEventPlugin, ContinuousEvent),
        processTopEventPairsByPriority(otherDiscreteEvents, DiscreteEvent);
      function getEventPriorityForPluginSystem(topLevelType) {
        var priority = eventPriorities.get(topLevelType);
        return priority === void 0 ? ContinuousEvent : priority;
      }
      var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
        runWithPriority = Scheduler.unstable_runWithPriority,
        _enabled = !0;
      function setEnabled(enabled) {
        _enabled = !!enabled;
      }
      function isEnabled() {
        return _enabled;
      }
      function trapBubbledEvent(topLevelType, element) {
        trapEventForPluginEventSystem(element, topLevelType, !1);
      }
      function trapCapturedEvent(topLevelType, element) {
        trapEventForPluginEventSystem(element, topLevelType, !0);
      }
      function trapEventForPluginEventSystem(container, topLevelType, capture) {
        var listener;
        switch (getEventPriorityForPluginSystem(topLevelType)) {
          case DiscreteEvent:
            listener = dispatchDiscreteEvent.bind(null, topLevelType, PLUGIN_EVENT_SYSTEM, container);
            break;
          case UserBlockingEvent:
            listener = dispatchUserBlockingUpdate.bind(null, topLevelType, PLUGIN_EVENT_SYSTEM, container);
            break;
          case ContinuousEvent:
          default:
            listener = dispatchEvent.bind(null, topLevelType, PLUGIN_EVENT_SYSTEM, container);
            break;
        }
        var rawEventName = getRawEventName(topLevelType);
        capture
          ? addEventCaptureListener(container, rawEventName, listener)
          : addEventBubbleListener(container, rawEventName, listener);
      }
      function dispatchDiscreteEvent(topLevelType, eventSystemFlags, container, nativeEvent) {
        flushDiscreteUpdatesIfNeeded(nativeEvent.timeStamp),
          discreteUpdates(dispatchEvent, topLevelType, eventSystemFlags, container, nativeEvent);
      }
      function dispatchUserBlockingUpdate(topLevelType, eventSystemFlags, container, nativeEvent) {
        runWithPriority(
          UserBlockingPriority,
          dispatchEvent.bind(null, topLevelType, eventSystemFlags, container, nativeEvent)
        );
      }
      function dispatchEvent(topLevelType, eventSystemFlags, container, nativeEvent) {
        if (_enabled) {
          if (hasQueuedDiscreteEvents() && isReplayableDiscreteEvent(topLevelType)) {
            queueDiscreteEvent(null, topLevelType, eventSystemFlags, container, nativeEvent);
            return;
          }
          var blockedOn = attemptToDispatchEvent(topLevelType, eventSystemFlags, container, nativeEvent);
          if (blockedOn === null) {
            clearIfContinuousEvent(topLevelType, nativeEvent);
            return;
          }
          if (isReplayableDiscreteEvent(topLevelType)) {
            queueDiscreteEvent(blockedOn, topLevelType, eventSystemFlags, container, nativeEvent);
            return;
          }
          queueIfContinuousEvent(blockedOn, topLevelType, eventSystemFlags, container, nativeEvent) ||
            (clearIfContinuousEvent(topLevelType, nativeEvent),
            dispatchEventForLegacyPluginEventSystem(topLevelType, eventSystemFlags, nativeEvent, null));
        }
      }
      function attemptToDispatchEvent(topLevelType, eventSystemFlags, container, nativeEvent) {
        var nativeEventTarget = getEventTarget(nativeEvent),
          targetInst = getClosestInstanceFromNode(nativeEventTarget);
        if (targetInst !== null) {
          var nearestMounted = getNearestMountedFiber(targetInst);
          if (nearestMounted === null) targetInst = null;
          else {
            var tag = nearestMounted.tag;
            if (tag === SuspenseComponent) {
              var instance = getSuspenseInstanceFromFiber(nearestMounted);
              if (instance !== null) return instance;
              targetInst = null;
            } else if (tag === HostRoot) {
              var root2 = nearestMounted.stateNode;
              if (root2.hydrate) return getContainerFromFiber(nearestMounted);
              targetInst = null;
            } else nearestMounted !== targetInst && (targetInst = null);
          }
        }
        return dispatchEventForLegacyPluginEventSystem(topLevelType, eventSystemFlags, nativeEvent, targetInst), null;
      }
      var shorthandToLonghand = {
          animation: [
            "animationDelay",
            "animationDirection",
            "animationDuration",
            "animationFillMode",
            "animationIterationCount",
            "animationName",
            "animationPlayState",
            "animationTimingFunction",
          ],
          background: [
            "backgroundAttachment",
            "backgroundClip",
            "backgroundColor",
            "backgroundImage",
            "backgroundOrigin",
            "backgroundPositionX",
            "backgroundPositionY",
            "backgroundRepeat",
            "backgroundSize",
          ],
          backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
          border: [
            "borderBottomColor",
            "borderBottomStyle",
            "borderBottomWidth",
            "borderImageOutset",
            "borderImageRepeat",
            "borderImageSlice",
            "borderImageSource",
            "borderImageWidth",
            "borderLeftColor",
            "borderLeftStyle",
            "borderLeftWidth",
            "borderRightColor",
            "borderRightStyle",
            "borderRightWidth",
            "borderTopColor",
            "borderTopStyle",
            "borderTopWidth",
          ],
          borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
          borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
          borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
          borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
          borderImage: [
            "borderImageOutset",
            "borderImageRepeat",
            "borderImageSlice",
            "borderImageSource",
            "borderImageWidth",
          ],
          borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
          borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
          borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
          borderRadius: [
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
            "borderTopLeftRadius",
            "borderTopRightRadius",
          ],
          borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
          borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
          borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
          borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
          columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
          columns: ["columnCount", "columnWidth"],
          flex: ["flexBasis", "flexGrow", "flexShrink"],
          flexFlow: ["flexDirection", "flexWrap"],
          font: [
            "fontFamily",
            "fontFeatureSettings",
            "fontKerning",
            "fontLanguageOverride",
            "fontSize",
            "fontSizeAdjust",
            "fontStretch",
            "fontStyle",
            "fontVariant",
            "fontVariantAlternates",
            "fontVariantCaps",
            "fontVariantEastAsian",
            "fontVariantLigatures",
            "fontVariantNumeric",
            "fontVariantPosition",
            "fontWeight",
            "lineHeight",
          ],
          fontVariant: [
            "fontVariantAlternates",
            "fontVariantCaps",
            "fontVariantEastAsian",
            "fontVariantLigatures",
            "fontVariantNumeric",
            "fontVariantPosition",
          ],
          gap: ["columnGap", "rowGap"],
          grid: [
            "gridAutoColumns",
            "gridAutoFlow",
            "gridAutoRows",
            "gridTemplateAreas",
            "gridTemplateColumns",
            "gridTemplateRows",
          ],
          gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
          gridColumn: ["gridColumnEnd", "gridColumnStart"],
          gridColumnGap: ["columnGap"],
          gridGap: ["columnGap", "rowGap"],
          gridRow: ["gridRowEnd", "gridRowStart"],
          gridRowGap: ["rowGap"],
          gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
          listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
          margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
          marker: ["markerEnd", "markerMid", "markerStart"],
          mask: [
            "maskClip",
            "maskComposite",
            "maskImage",
            "maskMode",
            "maskOrigin",
            "maskPositionX",
            "maskPositionY",
            "maskRepeat",
            "maskSize",
          ],
          maskPosition: ["maskPositionX", "maskPositionY"],
          outline: ["outlineColor", "outlineStyle", "outlineWidth"],
          overflow: ["overflowX", "overflowY"],
          padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
          placeContent: ["alignContent", "justifyContent"],
          placeItems: ["alignItems", "justifyItems"],
          placeSelf: ["alignSelf", "justifySelf"],
          textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
          textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
          transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
          wordWrap: ["overflowWrap"],
        },
        isUnitlessNumber = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        };
      function prefixKey(prefix, key) {
        return prefix + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function (prop) {
        prefixes.forEach(function (prefix) {
          isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
        });
      });
      function dangerousStyleValue(name, value, isCustomProperty) {
        var isEmpty = value == null || typeof value == "boolean" || value === "";
        return isEmpty
          ? ""
          : !isCustomProperty &&
            typeof value == "number" &&
            value !== 0 &&
            !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
          ? value + "px"
          : ("" + value).trim();
      }
      var uppercasePattern = /([A-Z])/g,
        msPattern = /^ms-/;
      function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
      }
      var warnValidStyle = function () {};
      {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/,
          msPattern$1 = /^-ms-/,
          hyphenPattern = /-(.)/g,
          badStyleValueWithSemicolonPattern = /;\s*$/,
          warnedStyleNames = {},
          warnedStyleValues = {},
          warnedForNaNValue = !1,
          warnedForInfinityValue = !1,
          camelize = function (string) {
            return string.replace(hyphenPattern, function (_, character) {
              return character.toUpperCase();
            });
          },
          warnHyphenatedStyleName = function (name) {
            (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) ||
              ((warnedStyleNames[name] = !0),
              error(
                "Unsupported style property %s. Did you mean %s?",
                name,
                camelize(name.replace(msPattern$1, "ms-"))
              ));
          },
          warnBadVendoredStyleName = function (name) {
            (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) ||
              ((warnedStyleNames[name] = !0),
              error(
                "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                name,
                name.charAt(0).toUpperCase() + name.slice(1)
              ));
          },
          warnStyleValueWithSemicolon = function (name, value) {
            (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) ||
              ((warnedStyleValues[value] = !0),
              error(
                `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                name,
                value.replace(badStyleValueWithSemicolonPattern, "")
              ));
          },
          warnStyleValueIsNaN = function (name, value) {
            warnedForNaNValue ||
              ((warnedForNaNValue = !0), error("`NaN` is an invalid value for the `%s` css style property.", name));
          },
          warnStyleValueIsInfinity = function (name, value) {
            warnedForInfinityValue ||
              ((warnedForInfinityValue = !0),
              error("`Infinity` is an invalid value for the `%s` css style property.", name));
          };
        warnValidStyle = function (name, value) {
          name.indexOf("-") > -1
            ? warnHyphenatedStyleName(name)
            : badVendoredStyleNamePattern.test(name)
            ? warnBadVendoredStyleName(name)
            : badStyleValueWithSemicolonPattern.test(value) && warnStyleValueWithSemicolon(name, value),
            typeof value == "number" &&
              (isNaN(value)
                ? warnStyleValueIsNaN(name, value)
                : isFinite(value) || warnStyleValueIsInfinity(name, value));
        };
      }
      var warnValidStyle$1 = warnValidStyle;
      function createDangerousStringForStyles(styles) {
        {
          var serialized = "",
            delimiter = "";
          for (var styleName in styles)
            if (styles.hasOwnProperty(styleName)) {
              var styleValue = styles[styleName];
              if (styleValue != null) {
                var isCustomProperty = styleName.indexOf("--") === 0;
                (serialized += delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName)) + ":"),
                  (serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty)),
                  (delimiter = ";");
              }
            }
          return serialized || null;
        }
      }
      function setValueForStyles(node, styles) {
        var style2 = node.style;
        for (var styleName in styles)
          if (styles.hasOwnProperty(styleName)) {
            var isCustomProperty = styleName.indexOf("--") === 0;
            isCustomProperty || warnValidStyle$1(styleName, styles[styleName]);
            var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
            styleName === "float" && (styleName = "cssFloat"),
              isCustomProperty ? style2.setProperty(styleName, styleValue) : (style2[styleName] = styleValue);
          }
      }
      function isValueEmpty(value) {
        return value == null || typeof value == "boolean" || value === "";
      }
      function expandShorthandMap(styles) {
        var expanded = {};
        for (var key in styles)
          for (var longhands = shorthandToLonghand[key] || [key], i = 0; i < longhands.length; i++)
            expanded[longhands[i]] = key;
        return expanded;
      }
      function validateShorthandPropertyCollisionInDev(styleUpdates, nextStyles) {
        {
          if (!nextStyles) return;
          var expandedUpdates = expandShorthandMap(styleUpdates),
            expandedStyles = expandShorthandMap(nextStyles),
            warnedAbout = {};
          for (var key in expandedUpdates) {
            var originalKey = expandedUpdates[key],
              correctOriginalKey = expandedStyles[key];
            if (correctOriginalKey && originalKey !== correctOriginalKey) {
              var warningKey = originalKey + "," + correctOriginalKey;
              if (warnedAbout[warningKey]) continue;
              (warnedAbout[warningKey] = !0),
                error(
                  "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                  isValueEmpty(styleUpdates[originalKey]) ? "Removing" : "Updating",
                  originalKey,
                  correctOriginalKey
                );
            }
          }
        }
      }
      var omittedCloseTags = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        },
        voidElementTags = _assign({ menuitem: !0 }, omittedCloseTags),
        HTML = "__html",
        ReactDebugCurrentFrame$3 = null;
      ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
      function assertValidProps(tag, props) {
        if (props) {
          if (voidElementTags[tag] && !(props.children == null && props.dangerouslySetInnerHTML == null))
            throw Error(
              tag +
                " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." +
                ReactDebugCurrentFrame$3.getStackAddendum()
            );
          if (props.dangerouslySetInnerHTML != null) {
            if (props.children != null)
              throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if (!(typeof props.dangerouslySetInnerHTML == "object" && HTML in props.dangerouslySetInnerHTML))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information."
              );
          }
          if (
            (!props.suppressContentEditableWarning &&
              props.contentEditable &&
              props.children != null &&
              error(
                "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
              ),
            !(props.style == null || typeof props.style == "object"))
          )
            throw Error(
              "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." +
                ReactDebugCurrentFrame$3.getStackAddendum()
            );
        }
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1) return typeof props.is == "string";
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var possibleStandardNames = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan",
        },
        ariaProperties = {
          "aria-current": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0,
        },
        warnedProperties = {},
        rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"),
        rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$"),
        hasOwnProperty$1 = Object.prototype.hasOwnProperty;
      function validateProperty(tagName, name) {
        {
          if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) return !0;
          if (rARIACamel.test(name)) {
            var ariaName = "aria-" + name.slice(4).toLowerCase(),
              correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
            if (correctName == null)
              return (
                error(
                  "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                  name
                ),
                (warnedProperties[name] = !0),
                !0
              );
            if (name !== correctName)
              return (
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName),
                (warnedProperties[name] = !0),
                !0
              );
          }
          if (rARIA.test(name)) {
            var lowerCasedName = name.toLowerCase(),
              standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
            if (standardName == null) return (warnedProperties[name] = !0), !1;
            if (name !== standardName)
              return (
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName),
                (warnedProperties[name] = !0),
                !0
              );
          }
        }
        return !0;
      }
      function warnInvalidARIAProps(type, props) {
        {
          var invalidProps = [];
          for (var key in props) {
            var isValid = validateProperty(type, key);
            isValid || invalidProps.push(key);
          }
          var unknownPropString = invalidProps
            .map(function (prop) {
              return "`" + prop + "`";
            })
            .join(", ");
          invalidProps.length === 1
            ? error(
                "Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",
                unknownPropString,
                type
              )
            : invalidProps.length > 1 &&
              error(
                "Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",
                unknownPropString,
                type
              );
        }
      }
      function validateProperties(type, props) {
        isCustomComponent(type, props) || warnInvalidARIAProps(type, props);
      }
      var didWarnValueNull = !1;
      function validateProperties$1(type, props) {
        {
          if (type !== "input" && type !== "textarea" && type !== "select") return;
          props != null &&
            props.value === null &&
            !didWarnValueNull &&
            ((didWarnValueNull = !0),
            type === "select" && props.multiple
              ? error(
                  "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
                  type
                )
              : error(
                  "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
                  type
                ));
        }
      }
      var validateProperty$1 = function () {};
      {
        var warnedProperties$1 = {},
          _hasOwnProperty = Object.prototype.hasOwnProperty,
          EVENT_NAME_REGEX = /^on./,
          INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/,
          rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"),
          rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
          if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) return !0;
          var lowerCasedName = name.toLowerCase();
          if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout")
            return (
              error(
                "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (canUseEventSystem) {
            if (registrationNameModules.hasOwnProperty(name)) return !0;
            var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName)
              ? possibleRegistrationNames[lowerCasedName]
              : null;
            if (registrationName != null)
              return (
                error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName),
                (warnedProperties$1[name] = !0),
                !0
              );
            if (EVENT_NAME_REGEX.test(name))
              return (
                error("Unknown event handler property `%s`. It will be ignored.", name),
                (warnedProperties$1[name] = !0),
                !0
              );
          } else if (EVENT_NAME_REGEX.test(name))
            return (
              INVALID_EVENT_NAME_REGEX.test(name) &&
                error(
                  "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                  name
                ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (rARIA$1.test(name) || rARIACamel$1.test(name)) return !0;
          if (lowerCasedName === "innerhtml")
            return (
              error(
                "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (lowerCasedName === "aria")
            return (
              error(
                "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value != "string")
            return (
              error(
                "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
                typeof value
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (typeof value == "number" && isNaN(value))
            return (
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name),
              (warnedProperties$1[name] = !0),
              !0
            );
          var propertyInfo = getPropertyInfo(name),
            isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            var standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name)
              return (
                error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName),
                (warnedProperties$1[name] = !0),
                !0
              );
          } else if (!isReserved && name !== lowerCasedName)
            return (
              error(
                "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
                name,
                lowerCasedName
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          return typeof value == "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1)
            ? (value
                ? error(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                    value,
                    name,
                    name,
                    value,
                    name
                  )
                : error(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                    value,
                    name,
                    name,
                    value,
                    name,
                    name,
                    name
                  ),
              (warnedProperties$1[name] = !0),
              !0)
            : isReserved
            ? !0
            : shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1)
            ? ((warnedProperties$1[name] = !0), !1)
            : ((value === "false" || value === "true") &&
                propertyInfo !== null &&
                propertyInfo.type === BOOLEAN &&
                (error(
                  "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
                  value,
                  name,
                  value === "false"
                    ? "The browser will interpret it as a truthy value."
                    : 'Although this works, it will not work as expected if you pass the string "false".',
                  name,
                  value
                ),
                (warnedProperties$1[name] = !0)),
              !0);
        };
      }
      var warnUnknownProperties = function (type, props, canUseEventSystem) {
        {
          var unknownProps = [];
          for (var key in props) {
            var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
            isValid || unknownProps.push(key);
          }
          var unknownPropString = unknownProps
            .map(function (prop) {
              return "`" + prop + "`";
            })
            .join(", ");
          unknownProps.length === 1
            ? error(
                "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior",
                unknownPropString,
                type
              )
            : unknownProps.length > 1 &&
              error(
                "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior",
                unknownPropString,
                type
              );
        }
      };
      function validateProperties$2(type, props, canUseEventSystem) {
        isCustomComponent(type, props) || warnUnknownProperties(type, props, canUseEventSystem);
      }
      var didWarnInvalidHydration = !1,
        DANGEROUSLY_SET_INNER_HTML = "dangerouslySetInnerHTML",
        SUPPRESS_CONTENT_EDITABLE_WARNING = "suppressContentEditableWarning",
        SUPPRESS_HYDRATION_WARNING = "suppressHydrationWarning",
        AUTOFOCUS = "autoFocus",
        CHILDREN = "children",
        STYLE = "style",
        HTML$1 = "__html",
        HTML_NAMESPACE$1 = Namespaces.html,
        warnedUnknownTags,
        suppressHydrationWarning,
        validatePropertiesInDevelopment,
        warnForTextDifference,
        warnForPropDifference,
        warnForExtraAttributes,
        warnForInvalidEventListener,
        canDiffStyleForHydrationWarning,
        normalizeMarkupForTextOrAttribute,
        normalizeHTML;
      {
        (warnedUnknownTags = { time: !0, dialog: !0, webview: !0 }),
          (validatePropertiesInDevelopment = function (type, props) {
            validateProperties(type, props), validateProperties$1(type, props), validateProperties$2(type, props, !0);
          }),
          (canDiffStyleForHydrationWarning = canUseDOM && !document.documentMode);
        var NORMALIZE_NEWLINES_REGEX = /\r\n?/g,
          NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
        (normalizeMarkupForTextOrAttribute = function (markup) {
          var markupString = typeof markup == "string" ? markup : "" + markup;
          return markupString
            .replace(
              NORMALIZE_NEWLINES_REGEX,
              `
`
            )
            .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
        }),
          (warnForTextDifference = function (serverText, clientText) {
            if (!didWarnInvalidHydration) {
              var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText),
                normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
              normalizedServerText !== normalizedClientText &&
                ((didWarnInvalidHydration = !0),
                error(
                  'Text content did not match. Server: "%s" Client: "%s"',
                  normalizedServerText,
                  normalizedClientText
                ));
            }
          }),
          (warnForPropDifference = function (propName, serverValue, clientValue) {
            if (!didWarnInvalidHydration) {
              var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue),
                normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);
              normalizedServerValue !== normalizedClientValue &&
                ((didWarnInvalidHydration = !0),
                error(
                  "Prop `%s` did not match. Server: %s Client: %s",
                  propName,
                  JSON.stringify(normalizedServerValue),
                  JSON.stringify(normalizedClientValue)
                ));
            }
          }),
          (warnForExtraAttributes = function (attributeNames) {
            if (!didWarnInvalidHydration) {
              didWarnInvalidHydration = !0;
              var names = [];
              attributeNames.forEach(function (name) {
                names.push(name);
              }),
                error("Extra attributes from the server: %s", names);
            }
          }),
          (warnForInvalidEventListener = function (registrationName, listener) {
            listener === !1
              ? error(
                  "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
                  registrationName,
                  registrationName,
                  registrationName
                )
              : error(
                  "Expected `%s` listener to be a function, instead got a value of `%s` type.",
                  registrationName,
                  typeof listener
                );
          }),
          (normalizeHTML = function (parent, html) {
            var testElement =
              parent.namespaceURI === HTML_NAMESPACE$1
                ? parent.ownerDocument.createElement(parent.tagName)
                : parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
            return (testElement.innerHTML = html), testElement.innerHTML;
          });
      }
      function ensureListeningTo(rootContainerElement, registrationName) {
        var isDocumentOrFragment =
            rootContainerElement.nodeType === DOCUMENT_NODE || rootContainerElement.nodeType === DOCUMENT_FRAGMENT_NODE,
          doc = isDocumentOrFragment ? rootContainerElement : rootContainerElement.ownerDocument;
        legacyListenToEvent(registrationName, doc);
      }
      function getOwnerDocumentFromRootContainer(rootContainerElement) {
        return rootContainerElement.nodeType === DOCUMENT_NODE
          ? rootContainerElement
          : rootContainerElement.ownerDocument;
      }
      function noop2() {}
      function trapClickOnNonInteractiveElement(node) {
        node.onclick = noop2;
      }
      function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
        for (var propKey in nextProps)
          if (nextProps.hasOwnProperty(propKey)) {
            var nextProp = nextProps[propKey];
            if (propKey === STYLE) nextProp && Object.freeze(nextProp), setValueForStyles(domElement, nextProp);
            else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              var nextHtml = nextProp ? nextProp[HTML$1] : void 0;
              nextHtml != null && setInnerHTML(domElement, nextHtml);
            } else if (propKey === CHILDREN)
              if (typeof nextProp == "string") {
                var canSetTextContent = tag !== "textarea" || nextProp !== "";
                canSetTextContent && setTextContent(domElement, nextProp);
              } else typeof nextProp == "number" && setTextContent(domElement, "" + nextProp);
            else
              propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
                propKey === SUPPRESS_HYDRATION_WARNING ||
                propKey === AUTOFOCUS ||
                (registrationNameModules.hasOwnProperty(propKey)
                  ? nextProp != null &&
                    (typeof nextProp != "function" && warnForInvalidEventListener(propKey, nextProp),
                    ensureListeningTo(rootContainerElement, propKey))
                  : nextProp != null && setValueForProperty(domElement, propKey, nextProp, isCustomComponentTag));
          }
      }
      function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
        for (var i = 0; i < updatePayload.length; i += 2) {
          var propKey = updatePayload[i],
            propValue = updatePayload[i + 1];
          propKey === STYLE
            ? setValueForStyles(domElement, propValue)
            : propKey === DANGEROUSLY_SET_INNER_HTML
            ? setInnerHTML(domElement, propValue)
            : propKey === CHILDREN
            ? setTextContent(domElement, propValue)
            : setValueForProperty(domElement, propKey, propValue, isCustomComponentTag);
        }
      }
      function createElement(type, props, rootContainerElement, parentNamespace) {
        var isCustomComponentTag,
          ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement),
          domElement,
          namespaceURI = parentNamespace;
        if (
          (namespaceURI === HTML_NAMESPACE$1 && (namespaceURI = getIntrinsicNamespace(type)),
          namespaceURI === HTML_NAMESPACE$1)
        ) {
          if (
            ((isCustomComponentTag = isCustomComponent(type, props)),
            !isCustomComponentTag &&
              type !== type.toLowerCase() &&
              error(
                "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                type
              ),
            type === "script")
          ) {
            var div = ownerDocument.createElement("div");
            div.innerHTML = "<script></script>";
            var firstChild = div.firstChild;
            domElement = div.removeChild(firstChild);
          } else if (typeof props.is == "string") domElement = ownerDocument.createElement(type, { is: props.is });
          else if (((domElement = ownerDocument.createElement(type)), type === "select")) {
            var node = domElement;
            props.multiple ? (node.multiple = !0) : props.size && (node.size = props.size);
          }
        } else domElement = ownerDocument.createElementNS(namespaceURI, type);
        return (
          namespaceURI === HTML_NAMESPACE$1 &&
            !isCustomComponentTag &&
            Object.prototype.toString.call(domElement) === "[object HTMLUnknownElement]" &&
            !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type) &&
            ((warnedUnknownTags[type] = !0),
            error(
              "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
              type
            )),
          domElement
        );
      }
      function createTextNode(text, rootContainerElement) {
        return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
      }
      function setInitialProperties(domElement, tag, rawProps, rootContainerElement) {
        var isCustomComponentTag = isCustomComponent(tag, rawProps);
        validatePropertiesInDevelopment(tag, rawProps);
        var props;
        switch (tag) {
          case "iframe":
          case "object":
          case "embed":
            trapBubbledEvent(TOP_LOAD, domElement), (props = rawProps);
            break;
          case "video":
          case "audio":
            for (var i = 0; i < mediaEventTypes.length; i++) trapBubbledEvent(mediaEventTypes[i], domElement);
            props = rawProps;
            break;
          case "source":
            trapBubbledEvent(TOP_ERROR, domElement), (props = rawProps);
            break;
          case "img":
          case "image":
          case "link":
            trapBubbledEvent(TOP_ERROR, domElement), trapBubbledEvent(TOP_LOAD, domElement), (props = rawProps);
            break;
          case "form":
            trapBubbledEvent(TOP_RESET, domElement), trapBubbledEvent(TOP_SUBMIT, domElement), (props = rawProps);
            break;
          case "details":
            trapBubbledEvent(TOP_TOGGLE, domElement), (props = rawProps);
            break;
          case "input":
            initWrapperState(domElement, rawProps),
              (props = getHostProps(domElement, rawProps)),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, "onChange");
            break;
          case "option":
            validateProps(domElement, rawProps), (props = getHostProps$1(domElement, rawProps));
            break;
          case "select":
            initWrapperState$1(domElement, rawProps),
              (props = getHostProps$2(domElement, rawProps)),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, "onChange");
            break;
          case "textarea":
            initWrapperState$2(domElement, rawProps),
              (props = getHostProps$3(domElement, rawProps)),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, "onChange");
            break;
          default:
            props = rawProps;
        }
        switch (
          (assertValidProps(tag, props),
          setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag),
          tag)
        ) {
          case "input":
            track(domElement), postMountWrapper(domElement, rawProps, !1);
            break;
          case "textarea":
            track(domElement), postMountWrapper$3(domElement);
            break;
          case "option":
            postMountWrapper$1(domElement, rawProps);
            break;
          case "select":
            postMountWrapper$2(domElement, rawProps);
            break;
          default:
            typeof props.onClick == "function" && trapClickOnNonInteractiveElement(domElement);
            break;
        }
      }
      function diffProperties(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
        validatePropertiesInDevelopment(tag, nextRawProps);
        var updatePayload = null,
          lastProps,
          nextProps;
        switch (tag) {
          case "input":
            (lastProps = getHostProps(domElement, lastRawProps)),
              (nextProps = getHostProps(domElement, nextRawProps)),
              (updatePayload = []);
            break;
          case "option":
            (lastProps = getHostProps$1(domElement, lastRawProps)),
              (nextProps = getHostProps$1(domElement, nextRawProps)),
              (updatePayload = []);
            break;
          case "select":
            (lastProps = getHostProps$2(domElement, lastRawProps)),
              (nextProps = getHostProps$2(domElement, nextRawProps)),
              (updatePayload = []);
            break;
          case "textarea":
            (lastProps = getHostProps$3(domElement, lastRawProps)),
              (nextProps = getHostProps$3(domElement, nextRawProps)),
              (updatePayload = []);
            break;
          default:
            (lastProps = lastRawProps),
              (nextProps = nextRawProps),
              typeof lastProps.onClick != "function" &&
                typeof nextProps.onClick == "function" &&
                trapClickOnNonInteractiveElement(domElement);
            break;
        }
        assertValidProps(tag, nextProps);
        var propKey,
          styleName,
          styleUpdates = null;
        for (propKey in lastProps)
          if (!(nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null))
            if (propKey === STYLE) {
              var lastStyle = lastProps[propKey];
              for (styleName in lastStyle)
                lastStyle.hasOwnProperty(styleName) &&
                  (styleUpdates || (styleUpdates = {}), (styleUpdates[styleName] = ""));
            } else
              propKey === DANGEROUSLY_SET_INNER_HTML ||
                propKey === CHILDREN ||
                propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
                propKey === SUPPRESS_HYDRATION_WARNING ||
                propKey === AUTOFOCUS ||
                (registrationNameModules.hasOwnProperty(propKey)
                  ? updatePayload || (updatePayload = [])
                  : (updatePayload = updatePayload || []).push(propKey, null));
        for (propKey in nextProps) {
          var nextProp = nextProps[propKey],
            lastProp = lastProps?.[propKey];
          if (!(!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || (nextProp == null && lastProp == null)))
            if (propKey === STYLE)
              if ((nextProp && Object.freeze(nextProp), lastProp)) {
                for (styleName in lastProp)
                  lastProp.hasOwnProperty(styleName) &&
                    (!nextProp || !nextProp.hasOwnProperty(styleName)) &&
                    (styleUpdates || (styleUpdates = {}), (styleUpdates[styleName] = ""));
                for (styleName in nextProp)
                  nextProp.hasOwnProperty(styleName) &&
                    lastProp[styleName] !== nextProp[styleName] &&
                    (styleUpdates || (styleUpdates = {}), (styleUpdates[styleName] = nextProp[styleName]));
              } else
                styleUpdates || (updatePayload || (updatePayload = []), updatePayload.push(propKey, styleUpdates)),
                  (styleUpdates = nextProp);
            else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              var nextHtml = nextProp ? nextProp[HTML$1] : void 0,
                lastHtml = lastProp ? lastProp[HTML$1] : void 0;
              nextHtml != null &&
                lastHtml !== nextHtml &&
                (updatePayload = updatePayload || []).push(propKey, nextHtml);
            } else
              propKey === CHILDREN
                ? lastProp !== nextProp &&
                  (typeof nextProp == "string" || typeof nextProp == "number") &&
                  (updatePayload = updatePayload || []).push(propKey, "" + nextProp)
                : propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
                  propKey === SUPPRESS_HYDRATION_WARNING ||
                  (registrationNameModules.hasOwnProperty(propKey)
                    ? (nextProp != null &&
                        (typeof nextProp != "function" && warnForInvalidEventListener(propKey, nextProp),
                        ensureListeningTo(rootContainerElement, propKey)),
                      !updatePayload && lastProp !== nextProp && (updatePayload = []))
                    : (updatePayload = updatePayload || []).push(propKey, nextProp));
        }
        return (
          styleUpdates &&
            (validateShorthandPropertyCollisionInDev(styleUpdates, nextProps[STYLE]),
            (updatePayload = updatePayload || []).push(STYLE, styleUpdates)),
          updatePayload
        );
      }
      function updateProperties(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
        tag === "input" &&
          nextRawProps.type === "radio" &&
          nextRawProps.name != null &&
          updateChecked(domElement, nextRawProps);
        var wasCustomComponentTag = isCustomComponent(tag, lastRawProps),
          isCustomComponentTag = isCustomComponent(tag, nextRawProps);
        switch ((updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag), tag)) {
          case "input":
            updateWrapper(domElement, nextRawProps);
            break;
          case "textarea":
            updateWrapper$1(domElement, nextRawProps);
            break;
          case "select":
            postUpdateWrapper(domElement, nextRawProps);
            break;
        }
      }
      function getPossibleStandardName(propName) {
        {
          var lowerCasedName = propName.toLowerCase();
          return (
            (possibleStandardNames.hasOwnProperty(lowerCasedName) && possibleStandardNames[lowerCasedName]) || null
          );
        }
      }
      function diffHydratedProperties(domElement, tag, rawProps, parentNamespace, rootContainerElement) {
        var isCustomComponentTag, extraAttributeNames;
        switch (
          ((suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING] === !0),
          (isCustomComponentTag = isCustomComponent(tag, rawProps)),
          validatePropertiesInDevelopment(tag, rawProps),
          tag)
        ) {
          case "iframe":
          case "object":
          case "embed":
            trapBubbledEvent(TOP_LOAD, domElement);
            break;
          case "video":
          case "audio":
            for (var i = 0; i < mediaEventTypes.length; i++) trapBubbledEvent(mediaEventTypes[i], domElement);
            break;
          case "source":
            trapBubbledEvent(TOP_ERROR, domElement);
            break;
          case "img":
          case "image":
          case "link":
            trapBubbledEvent(TOP_ERROR, domElement), trapBubbledEvent(TOP_LOAD, domElement);
            break;
          case "form":
            trapBubbledEvent(TOP_RESET, domElement), trapBubbledEvent(TOP_SUBMIT, domElement);
            break;
          case "details":
            trapBubbledEvent(TOP_TOGGLE, domElement);
            break;
          case "input":
            initWrapperState(domElement, rawProps),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, "onChange");
            break;
          case "option":
            validateProps(domElement, rawProps);
            break;
          case "select":
            initWrapperState$1(domElement, rawProps),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, "onChange");
            break;
          case "textarea":
            initWrapperState$2(domElement, rawProps),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, "onChange");
            break;
        }
        assertValidProps(tag, rawProps);
        {
          extraAttributeNames = new Set();
          for (var attributes = domElement.attributes, _i = 0; _i < attributes.length; _i++) {
            var name = attributes[_i].name.toLowerCase();
            switch (name) {
              case "data-reactroot":
                break;
              case "value":
                break;
              case "checked":
                break;
              case "selected":
                break;
              default:
                extraAttributeNames.add(attributes[_i].name);
            }
          }
        }
        var updatePayload = null;
        for (var propKey in rawProps)
          if (rawProps.hasOwnProperty(propKey)) {
            var nextProp = rawProps[propKey];
            if (propKey === CHILDREN)
              typeof nextProp == "string"
                ? domElement.textContent !== nextProp &&
                  (suppressHydrationWarning || warnForTextDifference(domElement.textContent, nextProp),
                  (updatePayload = [CHILDREN, nextProp]))
                : typeof nextProp == "number" &&
                  domElement.textContent !== "" + nextProp &&
                  (suppressHydrationWarning || warnForTextDifference(domElement.textContent, nextProp),
                  (updatePayload = [CHILDREN, "" + nextProp]));
            else if (registrationNameModules.hasOwnProperty(propKey))
              nextProp != null &&
                (typeof nextProp != "function" && warnForInvalidEventListener(propKey, nextProp),
                ensureListeningTo(rootContainerElement, propKey));
            else if (typeof isCustomComponentTag == "boolean") {
              var serverValue = void 0,
                propertyInfo = getPropertyInfo(propKey);
              if (!suppressHydrationWarning) {
                if (
                  !(
                    propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
                    propKey === SUPPRESS_HYDRATION_WARNING ||
                    propKey === "value" ||
                    propKey === "checked" ||
                    propKey === "selected"
                  )
                ) {
                  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
                    var serverHTML = domElement.innerHTML,
                      nextHtml = nextProp ? nextProp[HTML$1] : void 0,
                      expectedHTML = normalizeHTML(domElement, nextHtml ?? "");
                    expectedHTML !== serverHTML && warnForPropDifference(propKey, serverHTML, expectedHTML);
                  } else if (propKey === STYLE) {
                    if ((extraAttributeNames.delete(propKey), canDiffStyleForHydrationWarning)) {
                      var expectedStyle = createDangerousStringForStyles(nextProp);
                      (serverValue = domElement.getAttribute("style")),
                        expectedStyle !== serverValue && warnForPropDifference(propKey, serverValue, expectedStyle);
                    }
                  } else if (isCustomComponentTag)
                    extraAttributeNames.delete(propKey.toLowerCase()),
                      (serverValue = getValueForAttribute(domElement, propKey, nextProp)),
                      nextProp !== serverValue && warnForPropDifference(propKey, serverValue, nextProp);
                  else if (
                    !shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) &&
                    !shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)
                  ) {
                    var isMismatchDueToBadCasing = !1;
                    if (propertyInfo !== null)
                      extraAttributeNames.delete(propertyInfo.attributeName),
                        (serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo));
                    else {
                      var ownNamespace = parentNamespace;
                      if (
                        (ownNamespace === HTML_NAMESPACE$1 && (ownNamespace = getIntrinsicNamespace(tag)),
                        ownNamespace === HTML_NAMESPACE$1)
                      )
                        extraAttributeNames.delete(propKey.toLowerCase());
                      else {
                        var standardName = getPossibleStandardName(propKey);
                        standardName !== null &&
                          standardName !== propKey &&
                          ((isMismatchDueToBadCasing = !0), extraAttributeNames.delete(standardName)),
                          extraAttributeNames.delete(propKey);
                      }
                      serverValue = getValueForAttribute(domElement, propKey, nextProp);
                    }
                    nextProp !== serverValue &&
                      !isMismatchDueToBadCasing &&
                      warnForPropDifference(propKey, serverValue, nextProp);
                  }
                }
              }
            }
          }
        switch (
          (extraAttributeNames.size > 0 && !suppressHydrationWarning && warnForExtraAttributes(extraAttributeNames),
          tag)
        ) {
          case "input":
            track(domElement), postMountWrapper(domElement, rawProps, !0);
            break;
          case "textarea":
            track(domElement), postMountWrapper$3(domElement);
            break;
          case "select":
          case "option":
            break;
          default:
            typeof rawProps.onClick == "function" && trapClickOnNonInteractiveElement(domElement);
            break;
        }
        return updatePayload;
      }
      function diffHydratedText(textNode, text) {
        var isDifferent = textNode.nodeValue !== text;
        return isDifferent;
      }
      function warnForUnmatchedText(textNode, text) {
        warnForTextDifference(textNode.nodeValue, text);
      }
      function warnForDeletedHydratableElement(parentNode, child) {
        {
          if (didWarnInvalidHydration) return;
          (didWarnInvalidHydration = !0),
            error(
              "Did not expect server HTML to contain a <%s> in <%s>.",
              child.nodeName.toLowerCase(),
              parentNode.nodeName.toLowerCase()
            );
        }
      }
      function warnForDeletedHydratableText(parentNode, child) {
        {
          if (didWarnInvalidHydration) return;
          (didWarnInvalidHydration = !0),
            error(
              'Did not expect server HTML to contain the text node "%s" in <%s>.',
              child.nodeValue,
              parentNode.nodeName.toLowerCase()
            );
        }
      }
      function warnForInsertedHydratedElement(parentNode, tag, props) {
        {
          if (didWarnInvalidHydration) return;
          (didWarnInvalidHydration = !0),
            error("Expected server HTML to contain a matching <%s> in <%s>.", tag, parentNode.nodeName.toLowerCase());
        }
      }
      function warnForInsertedHydratedText(parentNode, text) {
        {
          if (text === "" || didWarnInvalidHydration) return;
          (didWarnInvalidHydration = !0),
            error(
              'Expected server HTML to contain a matching text node for "%s" in <%s>.',
              text,
              parentNode.nodeName.toLowerCase()
            );
        }
      }
      function restoreControlledState$3(domElement, tag, props) {
        switch (tag) {
          case "input":
            restoreControlledState(domElement, props);
            return;
          case "textarea":
            restoreControlledState$2(domElement, props);
            return;
          case "select":
            restoreControlledState$1(domElement, props);
            return;
        }
      }
      function getActiveElement(doc) {
        if (((doc = doc || (typeof document < "u" ? document : void 0)), typeof doc > "u")) return null;
        try {
          return doc.activeElement || doc.body;
        } catch {
          return doc.body;
        }
      }
      function getLeafNode(node) {
        for (; node && node.firstChild; ) node = node.firstChild;
        return node;
      }
      function getSiblingNode(node) {
        for (; node; ) {
          if (node.nextSibling) return node.nextSibling;
          node = node.parentNode;
        }
      }
      function getNodeForCharacterOffset(root2, offset2) {
        for (var node = getLeafNode(root2), nodeStart = 0, nodeEnd = 0; node; ) {
          if (node.nodeType === TEXT_NODE) {
            if (((nodeEnd = nodeStart + node.textContent.length), nodeStart <= offset2 && nodeEnd >= offset2))
              return { node, offset: offset2 - nodeStart };
            nodeStart = nodeEnd;
          }
          node = getLeafNode(getSiblingNode(node));
        }
      }
      function getOffsets(outerNode) {
        var ownerDocument = outerNode.ownerDocument,
          win = (ownerDocument && ownerDocument.defaultView) || window,
          selection = win.getSelection && win.getSelection();
        if (!selection || selection.rangeCount === 0) return null;
        var anchorNode = selection.anchorNode,
          anchorOffset = selection.anchorOffset,
          focusNode = selection.focusNode,
          focusOffset = selection.focusOffset;
        try {
          anchorNode.nodeType, focusNode.nodeType;
        } catch {
          return null;
        }
        return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset);
      }
      function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset) {
        var length = 0,
          start2 = -1,
          end2 = -1,
          indexWithinAnchor = 0,
          indexWithinFocus = 0,
          node = outerNode,
          parentNode = null;
        outer: for (;;) {
          for (
            var next = null;
            node === anchorNode &&
              (anchorOffset === 0 || node.nodeType === TEXT_NODE) &&
              (start2 = length + anchorOffset),
              node === focusNode && (focusOffset === 0 || node.nodeType === TEXT_NODE) && (end2 = length + focusOffset),
              node.nodeType === TEXT_NODE && (length += node.nodeValue.length),
              (next = node.firstChild) !== null;

          )
            (parentNode = node), (node = next);
          for (;;) {
            if (node === outerNode) break outer;
            if (
              (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset && (start2 = length),
              parentNode === focusNode && ++indexWithinFocus === focusOffset && (end2 = length),
              (next = node.nextSibling) !== null)
            )
              break;
            (node = parentNode), (parentNode = node.parentNode);
          }
          node = next;
        }
        return start2 === -1 || end2 === -1 ? null : { start: start2, end: end2 };
      }
      function setOffsets(node, offsets) {
        var doc = node.ownerDocument || document,
          win = (doc && doc.defaultView) || window;
        if (win.getSelection) {
          var selection = win.getSelection(),
            length = node.textContent.length,
            start2 = Math.min(offsets.start, length),
            end2 = offsets.end === void 0 ? start2 : Math.min(offsets.end, length);
          if (!selection.extend && start2 > end2) {
            var temp = end2;
            (end2 = start2), (start2 = temp);
          }
          var startMarker = getNodeForCharacterOffset(node, start2),
            endMarker = getNodeForCharacterOffset(node, end2);
          if (startMarker && endMarker) {
            if (
              selection.rangeCount === 1 &&
              selection.anchorNode === startMarker.node &&
              selection.anchorOffset === startMarker.offset &&
              selection.focusNode === endMarker.node &&
              selection.focusOffset === endMarker.offset
            )
              return;
            var range = doc.createRange();
            range.setStart(startMarker.node, startMarker.offset),
              selection.removeAllRanges(),
              start2 > end2
                ? (selection.addRange(range), selection.extend(endMarker.node, endMarker.offset))
                : (range.setEnd(endMarker.node, endMarker.offset), selection.addRange(range));
          }
        }
      }
      function isTextNode(node) {
        return node && node.nodeType === TEXT_NODE;
      }
      function containsNode(outerNode, innerNode) {
        return !outerNode || !innerNode
          ? !1
          : outerNode === innerNode
          ? !0
          : isTextNode(outerNode)
          ? !1
          : isTextNode(innerNode)
          ? containsNode(outerNode, innerNode.parentNode)
          : "contains" in outerNode
          ? outerNode.contains(innerNode)
          : outerNode.compareDocumentPosition
          ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
          : !1;
      }
      function isInDocument(node) {
        return node && node.ownerDocument && containsNode(node.ownerDocument.documentElement, node);
      }
      function isSameOriginFrame(iframe) {
        try {
          return typeof iframe.contentWindow.location.href == "string";
        } catch {
          return !1;
        }
      }
      function getActiveElementDeep() {
        for (var win = window, element = getActiveElement(); element instanceof win.HTMLIFrameElement; ) {
          if (isSameOriginFrame(element)) win = element.contentWindow;
          else return element;
          element = getActiveElement(win.document);
        }
        return element;
      }
      function hasSelectionCapabilities(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return (
          nodeName &&
          ((nodeName === "input" &&
            (elem.type === "text" ||
              elem.type === "search" ||
              elem.type === "tel" ||
              elem.type === "url" ||
              elem.type === "password")) ||
            nodeName === "textarea" ||
            elem.contentEditable === "true")
        );
      }
      function getSelectionInformation() {
        var focusedElem = getActiveElementDeep();
        return {
          activeElementDetached: null,
          focusedElem,
          selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection(focusedElem) : null,
        };
      }
      function restoreSelection(priorSelectionInformation) {
        var curFocusedElem = getActiveElementDeep(),
          priorFocusedElem = priorSelectionInformation.focusedElem,
          priorSelectionRange = priorSelectionInformation.selectionRange;
        if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
          priorSelectionRange !== null &&
            hasSelectionCapabilities(priorFocusedElem) &&
            setSelection(priorFocusedElem, priorSelectionRange);
          for (var ancestors = [], ancestor = priorFocusedElem; (ancestor = ancestor.parentNode); )
            ancestor.nodeType === ELEMENT_NODE &&
              ancestors.push({ element: ancestor, left: ancestor.scrollLeft, top: ancestor.scrollTop });
          typeof priorFocusedElem.focus == "function" && priorFocusedElem.focus();
          for (var i = 0; i < ancestors.length; i++) {
            var info = ancestors[i];
            (info.element.scrollLeft = info.left), (info.element.scrollTop = info.top);
          }
        }
      }
      function getSelection(input) {
        var selection;
        return (
          "selectionStart" in input
            ? (selection = { start: input.selectionStart, end: input.selectionEnd })
            : (selection = getOffsets(input)),
          selection || { start: 0, end: 0 }
        );
      }
      function setSelection(input, offsets) {
        var start2 = offsets.start,
          end2 = offsets.end;
        end2 === void 0 && (end2 = start2),
          "selectionStart" in input
            ? ((input.selectionStart = start2), (input.selectionEnd = Math.min(end2, input.value.length)))
            : setOffsets(input, offsets);
      }
      var validateDOMNesting = function () {},
        updatedAncestorInfo = function () {};
      {
        var specialTags = [
            "address",
            "applet",
            "area",
            "article",
            "aside",
            "base",
            "basefont",
            "bgsound",
            "blockquote",
            "body",
            "br",
            "button",
            "caption",
            "center",
            "col",
            "colgroup",
            "dd",
            "details",
            "dir",
            "div",
            "dl",
            "dt",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "frame",
            "frameset",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "iframe",
            "img",
            "input",
            "isindex",
            "li",
            "link",
            "listing",
            "main",
            "marquee",
            "menu",
            "menuitem",
            "meta",
            "nav",
            "noembed",
            "noframes",
            "noscript",
            "object",
            "ol",
            "p",
            "param",
            "plaintext",
            "pre",
            "script",
            "section",
            "select",
            "source",
            "style",
            "summary",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "title",
            "tr",
            "track",
            "ul",
            "wbr",
            "xmp",
          ],
          inScopeTags = [
            "applet",
            "caption",
            "html",
            "table",
            "td",
            "th",
            "marquee",
            "object",
            "template",
            "foreignObject",
            "desc",
            "title",
          ],
          buttonScopeTags = inScopeTags.concat(["button"]),
          impliedEndTags = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
          emptyAncestorInfo = {
            current: null,
            formTag: null,
            aTagInScope: null,
            buttonTagInScope: null,
            nobrTagInScope: null,
            pTagInButtonScope: null,
            listItemTagAutoclosing: null,
            dlItemTagAutoclosing: null,
          };
        updatedAncestorInfo = function (oldInfo, tag) {
          var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo),
            info = { tag };
          return (
            inScopeTags.indexOf(tag) !== -1 &&
              ((ancestorInfo.aTagInScope = null),
              (ancestorInfo.buttonTagInScope = null),
              (ancestorInfo.nobrTagInScope = null)),
            buttonScopeTags.indexOf(tag) !== -1 && (ancestorInfo.pTagInButtonScope = null),
            specialTags.indexOf(tag) !== -1 &&
              tag !== "address" &&
              tag !== "div" &&
              tag !== "p" &&
              ((ancestorInfo.listItemTagAutoclosing = null), (ancestorInfo.dlItemTagAutoclosing = null)),
            (ancestorInfo.current = info),
            tag === "form" && (ancestorInfo.formTag = info),
            tag === "a" && (ancestorInfo.aTagInScope = info),
            tag === "button" && (ancestorInfo.buttonTagInScope = info),
            tag === "nobr" && (ancestorInfo.nobrTagInScope = info),
            tag === "p" && (ancestorInfo.pTagInButtonScope = info),
            tag === "li" && (ancestorInfo.listItemTagAutoclosing = info),
            (tag === "dd" || tag === "dt") && (ancestorInfo.dlItemTagAutoclosing = info),
            ancestorInfo
          );
        };
        var isTagValidWithParent = function (tag, parentTag) {
            switch (parentTag) {
              case "select":
                return tag === "option" || tag === "optgroup" || tag === "#text";
              case "optgroup":
                return tag === "option" || tag === "#text";
              case "option":
                return tag === "#text";
              case "tr":
                return tag === "th" || tag === "td" || tag === "style" || tag === "script" || tag === "template";
              case "tbody":
              case "thead":
              case "tfoot":
                return tag === "tr" || tag === "style" || tag === "script" || tag === "template";
              case "colgroup":
                return tag === "col" || tag === "template";
              case "table":
                return (
                  tag === "caption" ||
                  tag === "colgroup" ||
                  tag === "tbody" ||
                  tag === "tfoot" ||
                  tag === "thead" ||
                  tag === "style" ||
                  tag === "script" ||
                  tag === "template"
                );
              case "head":
                return (
                  tag === "base" ||
                  tag === "basefont" ||
                  tag === "bgsound" ||
                  tag === "link" ||
                  tag === "meta" ||
                  tag === "title" ||
                  tag === "noscript" ||
                  tag === "noframes" ||
                  tag === "style" ||
                  tag === "script" ||
                  tag === "template"
                );
              case "html":
                return tag === "head" || tag === "body" || tag === "frameset";
              case "frameset":
                return tag === "frame";
              case "#document":
                return tag === "html";
            }
            switch (tag) {
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                return (
                  parentTag !== "h1" &&
                  parentTag !== "h2" &&
                  parentTag !== "h3" &&
                  parentTag !== "h4" &&
                  parentTag !== "h5" &&
                  parentTag !== "h6"
                );
              case "rp":
              case "rt":
                return impliedEndTags.indexOf(parentTag) === -1;
              case "body":
              case "caption":
              case "col":
              case "colgroup":
              case "frameset":
              case "frame":
              case "head":
              case "html":
              case "tbody":
              case "td":
              case "tfoot":
              case "th":
              case "thead":
              case "tr":
                return parentTag == null;
            }
            return !0;
          },
          findInvalidAncestorForTag = function (tag, ancestorInfo) {
            switch (tag) {
              case "address":
              case "article":
              case "aside":
              case "blockquote":
              case "center":
              case "details":
              case "dialog":
              case "dir":
              case "div":
              case "dl":
              case "fieldset":
              case "figcaption":
              case "figure":
              case "footer":
              case "header":
              case "hgroup":
              case "main":
              case "menu":
              case "nav":
              case "ol":
              case "p":
              case "section":
              case "summary":
              case "ul":
              case "pre":
              case "listing":
              case "table":
              case "hr":
              case "xmp":
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                return ancestorInfo.pTagInButtonScope;
              case "form":
                return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
              case "li":
                return ancestorInfo.listItemTagAutoclosing;
              case "dd":
              case "dt":
                return ancestorInfo.dlItemTagAutoclosing;
              case "button":
                return ancestorInfo.buttonTagInScope;
              case "a":
                return ancestorInfo.aTagInScope;
              case "nobr":
                return ancestorInfo.nobrTagInScope;
            }
            return null;
          },
          didWarn$1 = {};
        validateDOMNesting = function (childTag, childText, ancestorInfo) {
          ancestorInfo = ancestorInfo || emptyAncestorInfo;
          var parentInfo = ancestorInfo.current,
            parentTag = parentInfo && parentInfo.tag;
          childText != null &&
            (childTag != null && error("validateDOMNesting: when childText is passed, childTag should be null"),
            (childTag = "#text"));
          var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo,
            invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo),
            invalidParentOrAncestor = invalidParent || invalidAncestor;
          if (invalidParentOrAncestor) {
            var ancestorTag = invalidParentOrAncestor.tag,
              addendum = getCurrentFiberStackInDev(),
              warnKey = !!invalidParent + "|" + childTag + "|" + ancestorTag + "|" + addendum;
            if (!didWarn$1[warnKey]) {
              didWarn$1[warnKey] = !0;
              var tagDisplayName = childTag,
                whitespaceInfo = "";
              if (
                (childTag === "#text"
                  ? /\S/.test(childText)
                    ? (tagDisplayName = "Text nodes")
                    : ((tagDisplayName = "Whitespace text nodes"),
                      (whitespaceInfo =
                        " Make sure you don't have any extra whitespace between tags on each line of your source code."))
                  : (tagDisplayName = "<" + childTag + ">"),
                invalidParent)
              ) {
                var info = "";
                ancestorTag === "table" &&
                  childTag === "tr" &&
                  (info +=
                    " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),
                  error(
                    "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",
                    tagDisplayName,
                    ancestorTag,
                    whitespaceInfo,
                    info
                  );
              } else
                error(
                  "validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",
                  tagDisplayName,
                  ancestorTag
                );
            }
          }
        };
      }
      var SUPPRESS_HYDRATION_WARNING$1;
      SUPPRESS_HYDRATION_WARNING$1 = "suppressHydrationWarning";
      var SUSPENSE_START_DATA = "$",
        SUSPENSE_END_DATA = "/$",
        SUSPENSE_PENDING_START_DATA = "$?",
        SUSPENSE_FALLBACK_START_DATA = "$!",
        STYLE$1 = "style",
        eventsEnabled = null,
        selectionInformation = null;
      function shouldAutoFocusHostComponent(type, props) {
        switch (type) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!props.autoFocus;
        }
        return !1;
      }
      function getRootHostContext(rootContainerInstance) {
        var type,
          namespace,
          nodeType = rootContainerInstance.nodeType;
        switch (nodeType) {
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE: {
            type = nodeType === DOCUMENT_NODE ? "#document" : "#fragment";
            var root2 = rootContainerInstance.documentElement;
            namespace = root2 ? root2.namespaceURI : getChildNamespace(null, "");
            break;
          }
          default: {
            var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance,
              ownNamespace = container.namespaceURI || null;
            (type = container.tagName), (namespace = getChildNamespace(ownNamespace, type));
            break;
          }
        }
        {
          var validatedTag = type.toLowerCase(),
            ancestorInfo = updatedAncestorInfo(null, validatedTag);
          return { namespace, ancestorInfo };
        }
      }
      function getChildHostContext(parentHostContext, type, rootContainerInstance) {
        {
          var parentHostContextDev = parentHostContext,
            namespace = getChildNamespace(parentHostContextDev.namespace, type),
            ancestorInfo = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type);
          return { namespace, ancestorInfo };
        }
      }
      function getPublicInstance(instance) {
        return instance;
      }
      function prepareForCommit(containerInfo) {
        (eventsEnabled = isEnabled()), (selectionInformation = getSelectionInformation()), setEnabled(!1);
      }
      function resetAfterCommit(containerInfo) {
        restoreSelection(selectionInformation),
          setEnabled(eventsEnabled),
          (eventsEnabled = null),
          (selectionInformation = null);
      }
      function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        var parentNamespace;
        {
          var hostContextDev = hostContext;
          if (
            (validateDOMNesting(type, null, hostContextDev.ancestorInfo),
            typeof props.children == "string" || typeof props.children == "number")
          ) {
            var string = "" + props.children,
              ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
            validateDOMNesting(null, string, ownAncestorInfo);
          }
          parentNamespace = hostContextDev.namespace;
        }
        var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
        return precacheFiberNode(internalInstanceHandle, domElement), updateFiberProps(domElement, props), domElement;
      }
      function appendInitialChild(parentInstance, child) {
        parentInstance.appendChild(child);
      }
      function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
        return (
          setInitialProperties(domElement, type, props, rootContainerInstance),
          shouldAutoFocusHostComponent(type, props)
        );
      }
      function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
        {
          var hostContextDev = hostContext;
          if (
            typeof newProps.children != typeof oldProps.children &&
            (typeof newProps.children == "string" || typeof newProps.children == "number")
          ) {
            var string = "" + newProps.children,
              ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
            validateDOMNesting(null, string, ownAncestorInfo);
          }
        }
        return diffProperties(domElement, type, oldProps, newProps, rootContainerInstance);
      }
      function shouldSetTextContent(type, props) {
        return (
          type === "textarea" ||
          type === "option" ||
          type === "noscript" ||
          typeof props.children == "string" ||
          typeof props.children == "number" ||
          (typeof props.dangerouslySetInnerHTML == "object" &&
            props.dangerouslySetInnerHTML !== null &&
            props.dangerouslySetInnerHTML.__html != null)
        );
      }
      function shouldDeprioritizeSubtree(type, props) {
        return !!props.hidden;
      }
      function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
        {
          var hostContextDev = hostContext;
          validateDOMNesting(null, text, hostContextDev.ancestorInfo);
        }
        var textNode = createTextNode(text, rootContainerInstance);
        return precacheFiberNode(internalInstanceHandle, textNode), textNode;
      }
      var scheduleTimeout = typeof setTimeout == "function" ? setTimeout : void 0,
        cancelTimeout = typeof clearTimeout == "function" ? clearTimeout : void 0,
        noTimeout = -1;
      function commitMount(domElement, type, newProps, internalInstanceHandle) {
        shouldAutoFocusHostComponent(type, newProps) && domElement.focus();
      }
      function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
        updateFiberProps(domElement, newProps), updateProperties(domElement, updatePayload, type, oldProps, newProps);
      }
      function resetTextContent(domElement) {
        setTextContent(domElement, "");
      }
      function commitTextUpdate(textInstance, oldText, newText) {
        textInstance.nodeValue = newText;
      }
      function appendChild(parentInstance, child) {
        parentInstance.appendChild(child);
      }
      function appendChildToContainer(container, child) {
        var parentNode;
        container.nodeType === COMMENT_NODE
          ? ((parentNode = container.parentNode), parentNode.insertBefore(child, container))
          : ((parentNode = container), parentNode.appendChild(child));
        var reactRootContainer = container._reactRootContainer;
        reactRootContainer == null && parentNode.onclick === null && trapClickOnNonInteractiveElement(parentNode);
      }
      function insertBefore(parentInstance, child, beforeChild) {
        parentInstance.insertBefore(child, beforeChild);
      }
      function insertInContainerBefore(container, child, beforeChild) {
        container.nodeType === COMMENT_NODE
          ? container.parentNode.insertBefore(child, beforeChild)
          : container.insertBefore(child, beforeChild);
      }
      function removeChild(parentInstance, child) {
        parentInstance.removeChild(child);
      }
      function removeChildFromContainer(container, child) {
        container.nodeType === COMMENT_NODE ? container.parentNode.removeChild(child) : container.removeChild(child);
      }
      function hideInstance(instance) {
        instance = instance;
        var style2 = instance.style;
        typeof style2.setProperty == "function"
          ? style2.setProperty("display", "none", "important")
          : (style2.display = "none");
      }
      function hideTextInstance(textInstance) {
        textInstance.nodeValue = "";
      }
      function unhideInstance(instance, props) {
        instance = instance;
        var styleProp = props[STYLE$1],
          display = styleProp != null && styleProp.hasOwnProperty("display") ? styleProp.display : null;
        instance.style.display = dangerousStyleValue("display", display);
      }
      function unhideTextInstance(textInstance, text) {
        textInstance.nodeValue = text;
      }
      function canHydrateInstance(instance, type, props) {
        return instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()
          ? null
          : instance;
      }
      function canHydrateTextInstance(instance, text) {
        return text === "" || instance.nodeType !== TEXT_NODE ? null : instance;
      }
      function isSuspenseInstancePending(instance) {
        return instance.data === SUSPENSE_PENDING_START_DATA;
      }
      function isSuspenseInstanceFallback(instance) {
        return instance.data === SUSPENSE_FALLBACK_START_DATA;
      }
      function getNextHydratable(node) {
        for (; node != null; node = node.nextSibling) {
          var nodeType = node.nodeType;
          if (nodeType === ELEMENT_NODE || nodeType === TEXT_NODE) break;
        }
        return node;
      }
      function getNextHydratableSibling(instance) {
        return getNextHydratable(instance.nextSibling);
      }
      function getFirstHydratableChild(parentInstance) {
        return getNextHydratable(parentInstance.firstChild);
      }
      function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        precacheFiberNode(internalInstanceHandle, instance), updateFiberProps(instance, props);
        var parentNamespace;
        {
          var hostContextDev = hostContext;
          parentNamespace = hostContextDev.namespace;
        }
        return diffHydratedProperties(instance, type, props, parentNamespace, rootContainerInstance);
      }
      function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
        return precacheFiberNode(internalInstanceHandle, textInstance), diffHydratedText(textInstance, text);
      }
      function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance) {
        for (var node = suspenseInstance.nextSibling, depth = 0; node; ) {
          if (node.nodeType === COMMENT_NODE) {
            var data = node.data;
            if (data === SUSPENSE_END_DATA) {
              if (depth === 0) return getNextHydratableSibling(node);
              depth--;
            } else
              (data === SUSPENSE_START_DATA ||
                data === SUSPENSE_FALLBACK_START_DATA ||
                data === SUSPENSE_PENDING_START_DATA) &&
                depth++;
          }
          node = node.nextSibling;
        }
        return null;
      }
      function getParentSuspenseInstance(targetInstance) {
        for (var node = targetInstance.previousSibling, depth = 0; node; ) {
          if (node.nodeType === COMMENT_NODE) {
            var data = node.data;
            if (
              data === SUSPENSE_START_DATA ||
              data === SUSPENSE_FALLBACK_START_DATA ||
              data === SUSPENSE_PENDING_START_DATA
            ) {
              if (depth === 0) return node;
              depth--;
            } else data === SUSPENSE_END_DATA && depth++;
          }
          node = node.previousSibling;
        }
        return null;
      }
      function commitHydratedContainer(container) {
        retryIfBlockedOn(container);
      }
      function commitHydratedSuspenseInstance(suspenseInstance) {
        retryIfBlockedOn(suspenseInstance);
      }
      function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
        warnForUnmatchedText(textInstance, text);
      }
      function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1] !== !0 && warnForUnmatchedText(textInstance, text);
      }
      function didNotHydrateContainerInstance(parentContainer, instance) {
        instance.nodeType === ELEMENT_NODE
          ? warnForDeletedHydratableElement(parentContainer, instance)
          : instance.nodeType === COMMENT_NODE || warnForDeletedHydratableText(parentContainer, instance);
      }
      function didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1] !== !0 &&
          (instance.nodeType === ELEMENT_NODE
            ? warnForDeletedHydratableElement(parentInstance, instance)
            : instance.nodeType === COMMENT_NODE || warnForDeletedHydratableText(parentInstance, instance));
      }
      function didNotFindHydratableContainerInstance(parentContainer, type, props) {
        warnForInsertedHydratedElement(parentContainer, type);
      }
      function didNotFindHydratableContainerTextInstance(parentContainer, text) {
        warnForInsertedHydratedText(parentContainer, text);
      }
      function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1] !== !0 && warnForInsertedHydratedElement(parentInstance, type);
      }
      function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1] !== !0 && warnForInsertedHydratedText(parentInstance, text);
      }
      function didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1];
      }
      var randomKey = Math.random().toString(36).slice(2),
        internalInstanceKey = "__reactInternalInstance$" + randomKey,
        internalEventHandlersKey = "__reactEventHandlers$" + randomKey,
        internalContainerInstanceKey = "__reactContainere$" + randomKey;
      function precacheFiberNode(hostInst, node) {
        node[internalInstanceKey] = hostInst;
      }
      function markContainerAsRoot(hostRoot, node) {
        node[internalContainerInstanceKey] = hostRoot;
      }
      function unmarkContainerAsRoot(node) {
        node[internalContainerInstanceKey] = null;
      }
      function isContainerMarkedAsRoot(node) {
        return !!node[internalContainerInstanceKey];
      }
      function getClosestInstanceFromNode(targetNode) {
        var targetInst = targetNode[internalInstanceKey];
        if (targetInst) return targetInst;
        for (var parentNode = targetNode.parentNode; parentNode; ) {
          if (
            ((targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]), targetInst)
          ) {
            var alternate = targetInst.alternate;
            if (targetInst.child !== null || (alternate !== null && alternate.child !== null))
              for (var suspenseInstance = getParentSuspenseInstance(targetNode); suspenseInstance !== null; ) {
                var targetSuspenseInst = suspenseInstance[internalInstanceKey];
                if (targetSuspenseInst) return targetSuspenseInst;
                suspenseInstance = getParentSuspenseInstance(suspenseInstance);
              }
            return targetInst;
          }
          (targetNode = parentNode), (parentNode = targetNode.parentNode);
        }
        return null;
      }
      function getInstanceFromNode$1(node) {
        var inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
        return inst &&
          (inst.tag === HostComponent ||
            inst.tag === HostText ||
            inst.tag === SuspenseComponent ||
            inst.tag === HostRoot)
          ? inst
          : null;
      }
      function getNodeFromInstance$1(inst) {
        if (inst.tag === HostComponent || inst.tag === HostText) return inst.stateNode;
        throw Error("getNodeFromInstance: Invalid argument.");
      }
      function getFiberCurrentPropsFromNode$1(node) {
        return node[internalEventHandlersKey] || null;
      }
      function updateFiberProps(node, props) {
        node[internalEventHandlersKey] = props;
      }
      function getParent(inst) {
        do inst = inst.return;
        while (inst && inst.tag !== HostComponent);
        return inst || null;
      }
      function getLowestCommonAncestor(instA, instB) {
        for (var depthA = 0, tempA = instA; tempA; tempA = getParent(tempA)) depthA++;
        for (var depthB = 0, tempB = instB; tempB; tempB = getParent(tempB)) depthB++;
        for (; depthA - depthB > 0; ) (instA = getParent(instA)), depthA--;
        for (; depthB - depthA > 0; ) (instB = getParent(instB)), depthB--;
        for (var depth = depthA; depth--; ) {
          if (instA === instB || instA === instB.alternate) return instA;
          (instA = getParent(instA)), (instB = getParent(instB));
        }
        return null;
      }
      function traverseTwoPhase(inst, fn, arg) {
        for (var path = []; inst; ) path.push(inst), (inst = getParent(inst));
        var i;
        for (i = path.length; i-- > 0; ) fn(path[i], "captured", arg);
        for (i = 0; i < path.length; i++) fn(path[i], "bubbled", arg);
      }
      function traverseEnterLeave(from, to, fn, argFrom, argTo) {
        for (
          var common = from && to ? getLowestCommonAncestor(from, to) : null, pathFrom = [];
          !(!from || from === common);

        ) {
          var alternate = from.alternate;
          if (alternate !== null && alternate === common) break;
          pathFrom.push(from), (from = getParent(from));
        }
        for (var pathTo = []; !(!to || to === common); ) {
          var _alternate = to.alternate;
          if (_alternate !== null && _alternate === common) break;
          pathTo.push(to), (to = getParent(to));
        }
        for (var i = 0; i < pathFrom.length; i++) fn(pathFrom[i], "bubbled", argFrom);
        for (var _i = pathTo.length; _i-- > 0; ) fn(pathTo[_i], "captured", argTo);
      }
      function isInteractive(tag) {
        return tag === "button" || tag === "input" || tag === "select" || tag === "textarea";
      }
      function shouldPreventMouseEvent(name, type, props) {
        switch (name) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            return !!(props.disabled && isInteractive(type));
          default:
            return !1;
        }
      }
      function getListener(inst, registrationName) {
        var listener,
          stateNode = inst.stateNode;
        if (!stateNode) return null;
        var props = getFiberCurrentPropsFromNode(stateNode);
        if (
          !props ||
          ((listener = props[registrationName]), shouldPreventMouseEvent(registrationName, inst.type, props))
        )
          return null;
        if (!(!listener || typeof listener == "function"))
          throw Error(
            "Expected `" +
              registrationName +
              "` listener to be a function, instead got a value of `" +
              typeof listener +
              "` type."
          );
        return listener;
      }
      function listenerAtPhase(inst, event, propagationPhase) {
        var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
        return getListener(inst, registrationName);
      }
      function accumulateDirectionalDispatches(inst, phase, event) {
        inst || error("Dispatching inst must not be null");
        var listener = listenerAtPhase(inst, event, phase);
        listener &&
          ((event._dispatchListeners = accumulateInto(event._dispatchListeners, listener)),
          (event._dispatchInstances = accumulateInto(event._dispatchInstances, inst)));
      }
      function accumulateTwoPhaseDispatchesSingle(event) {
        event &&
          event.dispatchConfig.phasedRegistrationNames &&
          traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
      }
      function accumulateDispatches(inst, ignoredDirection, event) {
        if (inst && event && event.dispatchConfig.registrationName) {
          var registrationName = event.dispatchConfig.registrationName,
            listener = getListener(inst, registrationName);
          listener &&
            ((event._dispatchListeners = accumulateInto(event._dispatchListeners, listener)),
            (event._dispatchInstances = accumulateInto(event._dispatchInstances, inst)));
        }
      }
      function accumulateDirectDispatchesSingle(event) {
        event && event.dispatchConfig.registrationName && accumulateDispatches(event._targetInst, null, event);
      }
      function accumulateTwoPhaseDispatches(events) {
        forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
      }
      function accumulateEnterLeaveDispatches(leave, enter, from, to) {
        traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
      }
      function accumulateDirectDispatches(events) {
        forEachAccumulated(events, accumulateDirectDispatchesSingle);
      }
      var root = null,
        startText = null,
        fallbackText = null;
      function initialize(nativeEventTarget) {
        return (root = nativeEventTarget), (startText = getText()), !0;
      }
      function reset() {
        (root = null), (startText = null), (fallbackText = null);
      }
      function getData() {
        if (fallbackText) return fallbackText;
        var start2,
          startValue = startText,
          startLength = startValue.length,
          end2,
          endValue = getText(),
          endLength = endValue.length;
        for (start2 = 0; start2 < startLength && startValue[start2] === endValue[start2]; start2++);
        var minEnd = startLength - start2;
        for (end2 = 1; end2 <= minEnd && startValue[startLength - end2] === endValue[endLength - end2]; end2++);
        var sliceTail = end2 > 1 ? 1 - end2 : void 0;
        return (fallbackText = endValue.slice(start2, sliceTail)), fallbackText;
      }
      function getText() {
        return "value" in root ? root.value : root.textContent;
      }
      var EVENT_POOL_SIZE = 10,
        EventInterface = {
          type: null,
          target: null,
          currentTarget: function () {
            return null;
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function (event) {
            return event.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null,
        };
      function functionThatReturnsTrue() {
        return !0;
      }
      function functionThatReturnsFalse() {
        return !1;
      }
      function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
        delete this.nativeEvent,
          delete this.preventDefault,
          delete this.stopPropagation,
          delete this.isDefaultPrevented,
          delete this.isPropagationStopped,
          (this.dispatchConfig = dispatchConfig),
          (this._targetInst = targetInst),
          (this.nativeEvent = nativeEvent);
        var Interface = this.constructor.Interface;
        for (var propName in Interface)
          if (Interface.hasOwnProperty(propName)) {
            delete this[propName];
            var normalize = Interface[propName];
            normalize
              ? (this[propName] = normalize(nativeEvent))
              : propName === "target"
              ? (this.target = nativeEventTarget)
              : (this[propName] = nativeEvent[propName]);
          }
        var defaultPrevented =
          nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === !1;
        return (
          defaultPrevented
            ? (this.isDefaultPrevented = functionThatReturnsTrue)
            : (this.isDefaultPrevented = functionThatReturnsFalse),
          (this.isPropagationStopped = functionThatReturnsFalse),
          this
        );
      }
      _assign(SyntheticEvent.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var event = this.nativeEvent;
          event &&
            (event.preventDefault
              ? event.preventDefault()
              : typeof event.returnValue != "unknown" && (event.returnValue = !1),
            (this.isDefaultPrevented = functionThatReturnsTrue));
        },
        stopPropagation: function () {
          var event = this.nativeEvent;
          event &&
            (event.stopPropagation
              ? event.stopPropagation()
              : typeof event.cancelBubble != "unknown" && (event.cancelBubble = !0),
            (this.isPropagationStopped = functionThatReturnsTrue));
        },
        persist: function () {
          this.isPersistent = functionThatReturnsTrue;
        },
        isPersistent: functionThatReturnsFalse,
        destructor: function () {
          var Interface = this.constructor.Interface;
          for (var propName in Interface)
            Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
          (this.dispatchConfig = null),
            (this._targetInst = null),
            (this.nativeEvent = null),
            (this.isDefaultPrevented = functionThatReturnsFalse),
            (this.isPropagationStopped = functionThatReturnsFalse),
            (this._dispatchListeners = null),
            (this._dispatchInstances = null),
            Object.defineProperty(this, "nativeEvent", getPooledWarningPropertyDefinition("nativeEvent", null)),
            Object.defineProperty(
              this,
              "isDefaultPrevented",
              getPooledWarningPropertyDefinition("isDefaultPrevented", functionThatReturnsFalse)
            ),
            Object.defineProperty(
              this,
              "isPropagationStopped",
              getPooledWarningPropertyDefinition("isPropagationStopped", functionThatReturnsFalse)
            ),
            Object.defineProperty(
              this,
              "preventDefault",
              getPooledWarningPropertyDefinition("preventDefault", function () {})
            ),
            Object.defineProperty(
              this,
              "stopPropagation",
              getPooledWarningPropertyDefinition("stopPropagation", function () {})
            );
        },
      }),
        (SyntheticEvent.Interface = EventInterface),
        (SyntheticEvent.extend = function (Interface) {
          var Super = this,
            E = function () {};
          E.prototype = Super.prototype;
          var prototype = new E();
          function Class() {
            return Super.apply(this, arguments);
          }
          return (
            _assign(prototype, Class.prototype),
            (Class.prototype = prototype),
            (Class.prototype.constructor = Class),
            (Class.Interface = _assign({}, Super.Interface, Interface)),
            (Class.extend = Super.extend),
            addEventPoolingTo(Class),
            Class
          );
        }),
        addEventPoolingTo(SyntheticEvent);
      function getPooledWarningPropertyDefinition(propName, getVal) {
        var isFunction = typeof getVal == "function";
        return { configurable: !0, set: set2, get: get2 };
        function set2(val) {
          var action = isFunction ? "setting the method" : "setting the property";
          return warn2(action, "This is effectively a no-op"), val;
        }
        function get2() {
          var action = isFunction ? "accessing the method" : "accessing the property",
            result = isFunction ? "This is a no-op function" : "This is set to null";
          return warn2(action, result), getVal;
        }
        function warn2(action, result) {
          error(
            "This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.",
            action,
            propName,
            result
          );
        }
      }
      function getPooledEvent(dispatchConfig, targetInst, nativeEvent, nativeInst) {
        var EventConstructor = this;
        if (EventConstructor.eventPool.length) {
          var instance = EventConstructor.eventPool.pop();
          return EventConstructor.call(instance, dispatchConfig, targetInst, nativeEvent, nativeInst), instance;
        }
        return new EventConstructor(dispatchConfig, targetInst, nativeEvent, nativeInst);
      }
      function releasePooledEvent(event) {
        var EventConstructor = this;
        if (!(event instanceof EventConstructor))
          throw Error("Trying to release an event instance into a pool of a different type.");
        event.destructor(),
          EventConstructor.eventPool.length < EVENT_POOL_SIZE && EventConstructor.eventPool.push(event);
      }
      function addEventPoolingTo(EventConstructor) {
        (EventConstructor.eventPool = []),
          (EventConstructor.getPooled = getPooledEvent),
          (EventConstructor.release = releasePooledEvent);
      }
      var SyntheticCompositionEvent = SyntheticEvent.extend({ data: null }),
        SyntheticInputEvent = SyntheticEvent.extend({ data: null }),
        END_KEYCODES = [9, 13, 27, 32],
        START_KEYCODE = 229,
        canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
        documentMode = null;
      canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
      var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
        useFallbackCompositionData =
          canUseDOM && (!canUseCompositionEvent || (documentMode && documentMode > 8 && documentMode <= 11)),
        SPACEBAR_CODE = 32,
        SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE),
        eventTypes = {
          beforeInput: {
            phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" },
            dependencies: [TOP_COMPOSITION_END, TOP_KEY_PRESS, TOP_TEXT_INPUT, TOP_PASTE],
          },
          compositionEnd: {
            phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" },
            dependencies: [TOP_BLUR, TOP_COMPOSITION_END, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN],
          },
          compositionStart: {
            phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" },
            dependencies: [TOP_BLUR, TOP_COMPOSITION_START, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN],
          },
          compositionUpdate: {
            phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" },
            dependencies: [TOP_BLUR, TOP_COMPOSITION_UPDATE, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN],
          },
        },
        hasSpaceKeypress = !1;
      function isKeypressCommand(nativeEvent) {
        return (
          (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
          !(nativeEvent.ctrlKey && nativeEvent.altKey)
        );
      }
      function getCompositionEventType(topLevelType) {
        switch (topLevelType) {
          case TOP_COMPOSITION_START:
            return eventTypes.compositionStart;
          case TOP_COMPOSITION_END:
            return eventTypes.compositionEnd;
          case TOP_COMPOSITION_UPDATE:
            return eventTypes.compositionUpdate;
        }
      }
      function isFallbackCompositionStart(topLevelType, nativeEvent) {
        return topLevelType === TOP_KEY_DOWN && nativeEvent.keyCode === START_KEYCODE;
      }
      function isFallbackCompositionEnd(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case TOP_KEY_UP:
            return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
          case TOP_KEY_DOWN:
            return nativeEvent.keyCode !== START_KEYCODE;
          case TOP_KEY_PRESS:
          case TOP_MOUSE_DOWN:
          case TOP_BLUR:
            return !0;
          default:
            return !1;
        }
      }
      function getDataFromCustomEvent(nativeEvent) {
        var detail = nativeEvent.detail;
        return typeof detail == "object" && "data" in detail ? detail.data : null;
      }
      function isUsingKoreanIME(nativeEvent) {
        return nativeEvent.locale === "ko";
      }
      var isComposing = !1;
      function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var eventType, fallbackData;
        if (
          (canUseCompositionEvent
            ? (eventType = getCompositionEventType(topLevelType))
            : isComposing
            ? isFallbackCompositionEnd(topLevelType, nativeEvent) && (eventType = eventTypes.compositionEnd)
            : isFallbackCompositionStart(topLevelType, nativeEvent) && (eventType = eventTypes.compositionStart),
          !eventType)
        )
          return null;
        useFallbackCompositionData &&
          !isUsingKoreanIME(nativeEvent) &&
          (!isComposing && eventType === eventTypes.compositionStart
            ? (isComposing = initialize(nativeEventTarget))
            : eventType === eventTypes.compositionEnd && isComposing && (fallbackData = getData()));
        var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);
        if (fallbackData) event.data = fallbackData;
        else {
          var customData = getDataFromCustomEvent(nativeEvent);
          customData !== null && (event.data = customData);
        }
        return accumulateTwoPhaseDispatches(event), event;
      }
      function getNativeBeforeInputChars(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case TOP_COMPOSITION_END:
            return getDataFromCustomEvent(nativeEvent);
          case TOP_KEY_PRESS:
            var which = nativeEvent.which;
            return which !== SPACEBAR_CODE ? null : ((hasSpaceKeypress = !0), SPACEBAR_CHAR);
          case TOP_TEXT_INPUT:
            var chars = nativeEvent.data;
            return chars === SPACEBAR_CHAR && hasSpaceKeypress ? null : chars;
          default:
            return null;
        }
      }
      function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
        if (isComposing) {
          if (
            topLevelType === TOP_COMPOSITION_END ||
            (!canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent))
          ) {
            var chars = getData();
            return reset(), (isComposing = !1), chars;
          }
          return null;
        }
        switch (topLevelType) {
          case TOP_PASTE:
            return null;
          case TOP_KEY_PRESS:
            if (!isKeypressCommand(nativeEvent)) {
              if (nativeEvent.char && nativeEvent.char.length > 1) return nativeEvent.char;
              if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
            }
            return null;
          case TOP_COMPOSITION_END:
            return useFallbackCompositionData && !isUsingKoreanIME(nativeEvent) ? null : nativeEvent.data;
          default:
            return null;
        }
      }
      function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var chars;
        if (
          (canUseTextInputEvent
            ? (chars = getNativeBeforeInputChars(topLevelType, nativeEvent))
            : (chars = getFallbackBeforeInputChars(topLevelType, nativeEvent)),
          !chars)
        )
          return null;
        var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);
        return (event.data = chars), accumulateTwoPhaseDispatches(event), event;
      }
      var BeforeInputEventPlugin = {
          eventTypes,
          extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
            var composition = extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget),
              beforeInput = extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget);
            return composition === null ? beforeInput : beforeInput === null ? composition : [composition, beforeInput];
          },
        },
        supportedInputTypes = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
      function isTextInputElement(elem) {
        var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName === "input" ? !!supportedInputTypes[elem.type] : nodeName === "textarea";
      }
      var eventTypes$1 = {
        change: {
          phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" },
          dependencies: [
            TOP_BLUR,
            TOP_CHANGE,
            TOP_CLICK,
            TOP_FOCUS,
            TOP_INPUT,
            TOP_KEY_DOWN,
            TOP_KEY_UP,
            TOP_SELECTION_CHANGE,
          ],
        },
      };
      function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
        var event = SyntheticEvent.getPooled(eventTypes$1.change, inst, nativeEvent, target);
        return (event.type = "change"), enqueueStateRestore(target), accumulateTwoPhaseDispatches(event), event;
      }
      var activeElement = null,
        activeElementInst = null;
      function shouldUseChangeEvent(elem) {
        var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName === "select" || (nodeName === "input" && elem.type === "file");
      }
      function manualDispatchChangeEvent(nativeEvent) {
        var event = createAndAccumulateChangeEvent(activeElementInst, nativeEvent, getEventTarget(nativeEvent));
        batchedUpdates(runEventInBatch, event);
      }
      function runEventInBatch(event) {
        runEventsInBatch(event);
      }
      function getInstIfValueChanged(targetInst) {
        var targetNode = getNodeFromInstance$1(targetInst);
        if (updateValueIfChanged(targetNode)) return targetInst;
      }
      function getTargetInstForChangeEvent(topLevelType, targetInst) {
        if (topLevelType === TOP_CHANGE) return targetInst;
      }
      var isInputEventSupported = !1;
      canUseDOM &&
        (isInputEventSupported = isEventSupported("input") && (!document.documentMode || document.documentMode > 9));
      function startWatchingForValueChange(target, targetInst) {
        (activeElement = target),
          (activeElementInst = targetInst),
          activeElement.attachEvent("onpropertychange", handlePropertyChange);
      }
      function stopWatchingForValueChange() {
        activeElement &&
          (activeElement.detachEvent("onpropertychange", handlePropertyChange),
          (activeElement = null),
          (activeElementInst = null));
      }
      function handlePropertyChange(nativeEvent) {
        nativeEvent.propertyName === "value" &&
          getInstIfValueChanged(activeElementInst) &&
          manualDispatchChangeEvent(nativeEvent);
      }
      function handleEventsForInputEventPolyfill(topLevelType, target, targetInst) {
        topLevelType === TOP_FOCUS
          ? (stopWatchingForValueChange(), startWatchingForValueChange(target, targetInst))
          : topLevelType === TOP_BLUR && stopWatchingForValueChange();
      }
      function getTargetInstForInputEventPolyfill(topLevelType, targetInst) {
        if (topLevelType === TOP_SELECTION_CHANGE || topLevelType === TOP_KEY_UP || topLevelType === TOP_KEY_DOWN)
          return getInstIfValueChanged(activeElementInst);
      }
      function shouldUseClickEvent(elem) {
        var nodeName = elem.nodeName;
        return nodeName && nodeName.toLowerCase() === "input" && (elem.type === "checkbox" || elem.type === "radio");
      }
      function getTargetInstForClickEvent(topLevelType, targetInst) {
        if (topLevelType === TOP_CLICK) return getInstIfValueChanged(targetInst);
      }
      function getTargetInstForInputOrChangeEvent(topLevelType, targetInst) {
        if (topLevelType === TOP_INPUT || topLevelType === TOP_CHANGE) return getInstIfValueChanged(targetInst);
      }
      function handleControlledInputBlur(node) {
        var state = node._wrapperState;
        !state || !state.controlled || node.type !== "number" || setDefaultValue(node, "number", node.value);
      }
      var ChangeEventPlugin = {
          eventTypes: eventTypes$1,
          _isInputEventSupported: isInputEventSupported,
          extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
            var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window,
              getTargetInstFunc,
              handleEventFunc;
            if (
              (shouldUseChangeEvent(targetNode)
                ? (getTargetInstFunc = getTargetInstForChangeEvent)
                : isTextInputElement(targetNode)
                ? isInputEventSupported
                  ? (getTargetInstFunc = getTargetInstForInputOrChangeEvent)
                  : ((getTargetInstFunc = getTargetInstForInputEventPolyfill),
                    (handleEventFunc = handleEventsForInputEventPolyfill))
                : shouldUseClickEvent(targetNode) && (getTargetInstFunc = getTargetInstForClickEvent),
              getTargetInstFunc)
            ) {
              var inst = getTargetInstFunc(topLevelType, targetInst);
              if (inst) {
                var event = createAndAccumulateChangeEvent(inst, nativeEvent, nativeEventTarget);
                return event;
              }
            }
            handleEventFunc && handleEventFunc(topLevelType, targetNode, targetInst),
              topLevelType === TOP_BLUR && handleControlledInputBlur(targetNode);
          },
        },
        SyntheticUIEvent = SyntheticEvent.extend({ view: null, detail: null }),
        modifierKeyToProp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function modifierStateGetter(keyArg) {
        var syntheticEvent = this,
          nativeEvent = syntheticEvent.nativeEvent;
        if (nativeEvent.getModifierState) return nativeEvent.getModifierState(keyArg);
        var keyProp = modifierKeyToProp[keyArg];
        return keyProp ? !!nativeEvent[keyProp] : !1;
      }
      function getEventModifierState(nativeEvent) {
        return modifierStateGetter;
      }
      var previousScreenX = 0,
        previousScreenY = 0,
        isMovementXSet = !1,
        isMovementYSet = !1,
        SyntheticMouseEvent = SyntheticUIEvent.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: getEventModifierState,
          button: null,
          buttons: null,
          relatedTarget: function (event) {
            return (
              event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement)
            );
          },
          movementX: function (event) {
            if ("movementX" in event) return event.movementX;
            var screenX = previousScreenX;
            return (
              (previousScreenX = event.screenX),
              isMovementXSet ? (event.type === "mousemove" ? event.screenX - screenX : 0) : ((isMovementXSet = !0), 0)
            );
          },
          movementY: function (event) {
            if ("movementY" in event) return event.movementY;
            var screenY = previousScreenY;
            return (
              (previousScreenY = event.screenY),
              isMovementYSet ? (event.type === "mousemove" ? event.screenY - screenY : 0) : ((isMovementYSet = !0), 0)
            );
          },
        }),
        SyntheticPointerEvent = SyntheticMouseEvent.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null,
        }),
        eventTypes$2 = {
          mouseEnter: { registrationName: "onMouseEnter", dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER] },
          mouseLeave: { registrationName: "onMouseLeave", dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER] },
          pointerEnter: { registrationName: "onPointerEnter", dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER] },
          pointerLeave: { registrationName: "onPointerLeave", dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER] },
        },
        EnterLeaveEventPlugin = {
          eventTypes: eventTypes$2,
          extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
            var isOverEvent = topLevelType === TOP_MOUSE_OVER || topLevelType === TOP_POINTER_OVER,
              isOutEvent = topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_POINTER_OUT;
            if (
              (isOverEvent &&
                !(eventSystemFlags & IS_REPLAYED) &&
                (nativeEvent.relatedTarget || nativeEvent.fromElement)) ||
              (!isOutEvent && !isOverEvent)
            )
              return null;
            var win;
            if (nativeEventTarget.window === nativeEventTarget) win = nativeEventTarget;
            else {
              var doc = nativeEventTarget.ownerDocument;
              doc ? (win = doc.defaultView || doc.parentWindow) : (win = window);
            }
            var from, to;
            if (isOutEvent) {
              from = targetInst;
              var related = nativeEvent.relatedTarget || nativeEvent.toElement;
              if (((to = related ? getClosestInstanceFromNode(related) : null), to !== null)) {
                var nearestMounted = getNearestMountedFiber(to);
                (to !== nearestMounted || (to.tag !== HostComponent && to.tag !== HostText)) && (to = null);
              }
            } else (from = null), (to = targetInst);
            if (from === to) return null;
            var eventInterface, leaveEventType, enterEventType, eventTypePrefix;
            topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_MOUSE_OVER
              ? ((eventInterface = SyntheticMouseEvent),
                (leaveEventType = eventTypes$2.mouseLeave),
                (enterEventType = eventTypes$2.mouseEnter),
                (eventTypePrefix = "mouse"))
              : (topLevelType === TOP_POINTER_OUT || topLevelType === TOP_POINTER_OVER) &&
                ((eventInterface = SyntheticPointerEvent),
                (leaveEventType = eventTypes$2.pointerLeave),
                (enterEventType = eventTypes$2.pointerEnter),
                (eventTypePrefix = "pointer"));
            var fromNode = from == null ? win : getNodeFromInstance$1(from),
              toNode = to == null ? win : getNodeFromInstance$1(to),
              leave = eventInterface.getPooled(leaveEventType, from, nativeEvent, nativeEventTarget);
            (leave.type = eventTypePrefix + "leave"), (leave.target = fromNode), (leave.relatedTarget = toNode);
            var enter = eventInterface.getPooled(enterEventType, to, nativeEvent, nativeEventTarget);
            return (
              (enter.type = eventTypePrefix + "enter"),
              (enter.target = toNode),
              (enter.relatedTarget = fromNode),
              accumulateEnterLeaveDispatches(leave, enter, from, to),
              eventSystemFlags & IS_FIRST_ANCESTOR ? [leave, enter] : [leave]
            );
          },
        };
      function is(x, y) {
        return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
      }
      var objectIs = typeof Object.is == "function" ? Object.is : is,
        hasOwnProperty$2 = Object.prototype.hasOwnProperty;
      function shallowEqual(objA, objB) {
        if (objectIs(objA, objB)) return !0;
        if (typeof objA != "object" || objA === null || typeof objB != "object" || objB === null) return !1;
        var keysA = Object.keys(objA),
          keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) return !1;
        for (var i = 0; i < keysA.length; i++)
          if (!hasOwnProperty$2.call(objB, keysA[i]) || !objectIs(objA[keysA[i]], objB[keysA[i]])) return !1;
        return !0;
      }
      var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && document.documentMode <= 11,
        eventTypes$3 = {
          select: {
            phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" },
            dependencies: [
              TOP_BLUR,
              TOP_CONTEXT_MENU,
              TOP_DRAG_END,
              TOP_FOCUS,
              TOP_KEY_DOWN,
              TOP_KEY_UP,
              TOP_MOUSE_DOWN,
              TOP_MOUSE_UP,
              TOP_SELECTION_CHANGE,
            ],
          },
        },
        activeElement$1 = null,
        activeElementInst$1 = null,
        lastSelection = null,
        mouseDown = !1;
      function getSelection$1(node) {
        if ("selectionStart" in node && hasSelectionCapabilities(node))
          return { start: node.selectionStart, end: node.selectionEnd };
        var win = (node.ownerDocument && node.ownerDocument.defaultView) || window,
          selection = win.getSelection();
        return {
          anchorNode: selection.anchorNode,
          anchorOffset: selection.anchorOffset,
          focusNode: selection.focusNode,
          focusOffset: selection.focusOffset,
        };
      }
      function getEventTargetDocument(eventTarget) {
        return eventTarget.window === eventTarget
          ? eventTarget.document
          : eventTarget.nodeType === DOCUMENT_NODE
          ? eventTarget
          : eventTarget.ownerDocument;
      }
      function constructSelectEvent(nativeEvent, nativeEventTarget) {
        var doc = getEventTargetDocument(nativeEventTarget);
        if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement(doc)) return null;
        var currentSelection = getSelection$1(activeElement$1);
        if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
          lastSelection = currentSelection;
          var syntheticEvent = SyntheticEvent.getPooled(
            eventTypes$3.select,
            activeElementInst$1,
            nativeEvent,
            nativeEventTarget
          );
          return (
            (syntheticEvent.type = "select"),
            (syntheticEvent.target = activeElement$1),
            accumulateTwoPhaseDispatches(syntheticEvent),
            syntheticEvent
          );
        }
        return null;
      }
      var SelectEventPlugin = {
          eventTypes: eventTypes$3,
          extractEvents: function (
            topLevelType,
            targetInst,
            nativeEvent,
            nativeEventTarget,
            eventSystemFlags,
            container
          ) {
            var containerOrDoc = container || getEventTargetDocument(nativeEventTarget);
            if (!containerOrDoc || !isListeningToAllDependencies("onSelect", containerOrDoc)) return null;
            var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window;
            switch (topLevelType) {
              case TOP_FOCUS:
                (isTextInputElement(targetNode) || targetNode.contentEditable === "true") &&
                  ((activeElement$1 = targetNode), (activeElementInst$1 = targetInst), (lastSelection = null));
                break;
              case TOP_BLUR:
                (activeElement$1 = null), (activeElementInst$1 = null), (lastSelection = null);
                break;
              case TOP_MOUSE_DOWN:
                mouseDown = !0;
                break;
              case TOP_CONTEXT_MENU:
              case TOP_MOUSE_UP:
              case TOP_DRAG_END:
                return (mouseDown = !1), constructSelectEvent(nativeEvent, nativeEventTarget);
              case TOP_SELECTION_CHANGE:
                if (skipSelectionChangeEvent) break;
              case TOP_KEY_DOWN:
              case TOP_KEY_UP:
                return constructSelectEvent(nativeEvent, nativeEventTarget);
            }
            return null;
          },
        },
        SyntheticAnimationEvent = SyntheticEvent.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        SyntheticClipboardEvent = SyntheticEvent.extend({
          clipboardData: function (event) {
            return "clipboardData" in event ? event.clipboardData : window.clipboardData;
          },
        }),
        SyntheticFocusEvent = SyntheticUIEvent.extend({ relatedTarget: null });
      function getEventCharCode(nativeEvent) {
        var charCode,
          keyCode = nativeEvent.keyCode;
        return (
          "charCode" in nativeEvent
            ? ((charCode = nativeEvent.charCode), charCode === 0 && keyCode === 13 && (charCode = 13))
            : (charCode = keyCode),
          charCode === 10 && (charCode = 13),
          charCode >= 32 || charCode === 13 ? charCode : 0
        );
      }
      var normalizeKey = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        translateToKey = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        };
      function getEventKey(nativeEvent) {
        if (nativeEvent.key) {
          var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
          if (key !== "Unidentified") return key;
        }
        if (nativeEvent.type === "keypress") {
          var charCode = getEventCharCode(nativeEvent);
          return charCode === 13 ? "Enter" : String.fromCharCode(charCode);
        }
        return nativeEvent.type === "keydown" || nativeEvent.type === "keyup"
          ? translateToKey[nativeEvent.keyCode] || "Unidentified"
          : "";
      }
      var SyntheticKeyboardEvent = SyntheticUIEvent.extend({
          key: getEventKey,
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: getEventModifierState,
          charCode: function (event) {
            return event.type === "keypress" ? getEventCharCode(event) : 0;
          },
          keyCode: function (event) {
            return event.type === "keydown" || event.type === "keyup" ? event.keyCode : 0;
          },
          which: function (event) {
            return event.type === "keypress"
              ? getEventCharCode(event)
              : event.type === "keydown" || event.type === "keyup"
              ? event.keyCode
              : 0;
          },
        }),
        SyntheticDragEvent = SyntheticMouseEvent.extend({ dataTransfer: null }),
        SyntheticTouchEvent = SyntheticUIEvent.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: getEventModifierState,
        }),
        SyntheticTransitionEvent = SyntheticEvent.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        SyntheticWheelEvent = SyntheticMouseEvent.extend({
          deltaX: function (event) {
            return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
          },
          deltaY: function (event) {
            return "deltaY" in event
              ? event.deltaY
              : "wheelDeltaY" in event
              ? -event.wheelDeltaY
              : "wheelDelta" in event
              ? -event.wheelDelta
              : 0;
          },
          deltaZ: null,
          deltaMode: null,
        }),
        knownHTMLTopLevelTypes = [
          TOP_ABORT,
          TOP_CANCEL,
          TOP_CAN_PLAY,
          TOP_CAN_PLAY_THROUGH,
          TOP_CLOSE,
          TOP_DURATION_CHANGE,
          TOP_EMPTIED,
          TOP_ENCRYPTED,
          TOP_ENDED,
          TOP_ERROR,
          TOP_INPUT,
          TOP_INVALID,
          TOP_LOAD,
          TOP_LOADED_DATA,
          TOP_LOADED_METADATA,
          TOP_LOAD_START,
          TOP_PAUSE,
          TOP_PLAY,
          TOP_PLAYING,
          TOP_PROGRESS,
          TOP_RATE_CHANGE,
          TOP_RESET,
          TOP_SEEKED,
          TOP_SEEKING,
          TOP_STALLED,
          TOP_SUBMIT,
          TOP_SUSPEND,
          TOP_TIME_UPDATE,
          TOP_TOGGLE,
          TOP_VOLUME_CHANGE,
          TOP_WAITING,
        ],
        SimpleEventPlugin = {
          eventTypes: simpleEventPluginEventTypes,
          extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
            var dispatchConfig = topLevelEventsToDispatchConfig.get(topLevelType);
            if (!dispatchConfig) return null;
            var EventConstructor;
            switch (topLevelType) {
              case TOP_KEY_PRESS:
                if (getEventCharCode(nativeEvent) === 0) return null;
              case TOP_KEY_DOWN:
              case TOP_KEY_UP:
                EventConstructor = SyntheticKeyboardEvent;
                break;
              case TOP_BLUR:
              case TOP_FOCUS:
                EventConstructor = SyntheticFocusEvent;
                break;
              case TOP_CLICK:
                if (nativeEvent.button === 2) return null;
              case TOP_AUX_CLICK:
              case TOP_DOUBLE_CLICK:
              case TOP_MOUSE_DOWN:
              case TOP_MOUSE_MOVE:
              case TOP_MOUSE_UP:
              case TOP_MOUSE_OUT:
              case TOP_MOUSE_OVER:
              case TOP_CONTEXT_MENU:
                EventConstructor = SyntheticMouseEvent;
                break;
              case TOP_DRAG:
              case TOP_DRAG_END:
              case TOP_DRAG_ENTER:
              case TOP_DRAG_EXIT:
              case TOP_DRAG_LEAVE:
              case TOP_DRAG_OVER:
              case TOP_DRAG_START:
              case TOP_DROP:
                EventConstructor = SyntheticDragEvent;
                break;
              case TOP_TOUCH_CANCEL:
              case TOP_TOUCH_END:
              case TOP_TOUCH_MOVE:
              case TOP_TOUCH_START:
                EventConstructor = SyntheticTouchEvent;
                break;
              case TOP_ANIMATION_END:
              case TOP_ANIMATION_ITERATION:
              case TOP_ANIMATION_START:
                EventConstructor = SyntheticAnimationEvent;
                break;
              case TOP_TRANSITION_END:
                EventConstructor = SyntheticTransitionEvent;
                break;
              case TOP_SCROLL:
                EventConstructor = SyntheticUIEvent;
                break;
              case TOP_WHEEL:
                EventConstructor = SyntheticWheelEvent;
                break;
              case TOP_COPY:
              case TOP_CUT:
              case TOP_PASTE:
                EventConstructor = SyntheticClipboardEvent;
                break;
              case TOP_GOT_POINTER_CAPTURE:
              case TOP_LOST_POINTER_CAPTURE:
              case TOP_POINTER_CANCEL:
              case TOP_POINTER_DOWN:
              case TOP_POINTER_MOVE:
              case TOP_POINTER_OUT:
              case TOP_POINTER_OVER:
              case TOP_POINTER_UP:
                EventConstructor = SyntheticPointerEvent;
                break;
              default:
                knownHTMLTopLevelTypes.indexOf(topLevelType) === -1 &&
                  error(
                    "SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.",
                    topLevelType
                  ),
                  (EventConstructor = SyntheticEvent);
                break;
            }
            var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
            return accumulateTwoPhaseDispatches(event), event;
          },
        },
        DOMEventPluginOrder = [
          "ResponderEventPlugin",
          "SimpleEventPlugin",
          "EnterLeaveEventPlugin",
          "ChangeEventPlugin",
          "SelectEventPlugin",
          "BeforeInputEventPlugin",
        ];
      injectEventPluginOrder(DOMEventPluginOrder),
        setComponentTree(getFiberCurrentPropsFromNode$1, getInstanceFromNode$1, getNodeFromInstance$1),
        injectEventPluginsByName({
          SimpleEventPlugin,
          EnterLeaveEventPlugin,
          ChangeEventPlugin,
          SelectEventPlugin,
          BeforeInputEventPlugin,
        });
      var reactEmoji = "\u269B",
        warningEmoji = "\u26D4",
        supportsUserTiming =
          typeof performance < "u" &&
          typeof performance.mark == "function" &&
          typeof performance.clearMarks == "function" &&
          typeof performance.measure == "function" &&
          typeof performance.clearMeasures == "function",
        currentFiber = null,
        currentPhase = null,
        currentPhaseFiber = null,
        isCommitting = !1,
        hasScheduledUpdateInCurrentCommit = !1,
        hasScheduledUpdateInCurrentPhase = !1,
        commitCountInCurrentWorkLoop = 0,
        effectCountInCurrentCommit = 0,
        labelsInCurrentCommit = new Set(),
        formatMarkName = function (markName) {
          return reactEmoji + " " + markName;
        },
        formatLabel = function (label, warning) {
          var prefix = warning ? warningEmoji + " " : reactEmoji + " ",
            suffix = warning ? " Warning: " + warning : "";
          return "" + prefix + label + suffix;
        },
        beginMark = function (markName) {
          performance.mark(formatMarkName(markName));
        },
        clearMark = function (markName) {
          performance.clearMarks(formatMarkName(markName));
        },
        endMark = function (label, markName, warning) {
          var formattedMarkName = formatMarkName(markName),
            formattedLabel = formatLabel(label, warning);
          try {
            performance.measure(formattedLabel, formattedMarkName);
          } catch {}
          performance.clearMarks(formattedMarkName), performance.clearMeasures(formattedLabel);
        },
        getFiberMarkName = function (label, debugID) {
          return label + " (#" + debugID + ")";
        },
        getFiberLabel = function (componentName, isMounted2, phase) {
          return phase === null
            ? componentName + " [" + (isMounted2 ? "update" : "mount") + "]"
            : componentName + "." + phase;
        },
        beginFiberMark = function (fiber, phase) {
          var componentName = getComponentName(fiber.type) || "Unknown",
            debugID = fiber._debugID,
            isMounted2 = fiber.alternate !== null,
            label = getFiberLabel(componentName, isMounted2, phase);
          if (isCommitting && labelsInCurrentCommit.has(label)) return !1;
          labelsInCurrentCommit.add(label);
          var markName = getFiberMarkName(label, debugID);
          return beginMark(markName), !0;
        },
        clearFiberMark = function (fiber, phase) {
          var componentName = getComponentName(fiber.type) || "Unknown",
            debugID = fiber._debugID,
            isMounted2 = fiber.alternate !== null,
            label = getFiberLabel(componentName, isMounted2, phase),
            markName = getFiberMarkName(label, debugID);
          clearMark(markName);
        },
        endFiberMark = function (fiber, phase, warning) {
          var componentName = getComponentName(fiber.type) || "Unknown",
            debugID = fiber._debugID,
            isMounted2 = fiber.alternate !== null,
            label = getFiberLabel(componentName, isMounted2, phase),
            markName = getFiberMarkName(label, debugID);
          endMark(label, markName, warning);
        },
        shouldIgnoreFiber = function (fiber) {
          switch (fiber.tag) {
            case HostRoot:
            case HostComponent:
            case HostText:
            case HostPortal:
            case Fragment:
            case ContextProvider:
            case ContextConsumer:
            case Mode:
              return !0;
            default:
              return !1;
          }
        },
        clearPendingPhaseMeasurement = function () {
          currentPhase !== null && currentPhaseFiber !== null && clearFiberMark(currentPhaseFiber, currentPhase),
            (currentPhaseFiber = null),
            (currentPhase = null),
            (hasScheduledUpdateInCurrentPhase = !1);
        },
        pauseTimers = function () {
          for (var fiber = currentFiber; fiber; )
            fiber._debugIsCurrentlyTiming && endFiberMark(fiber, null, null), (fiber = fiber.return);
        },
        resumeTimersRecursively = function (fiber) {
          fiber.return !== null && resumeTimersRecursively(fiber.return),
            fiber._debugIsCurrentlyTiming && beginFiberMark(fiber, null);
        },
        resumeTimers = function () {
          currentFiber !== null && resumeTimersRecursively(currentFiber);
        };
      function recordEffect() {
        effectCountInCurrentCommit++;
      }
      function recordScheduleUpdate() {
        isCommitting && (hasScheduledUpdateInCurrentCommit = !0),
          currentPhase !== null &&
            currentPhase !== "componentWillMount" &&
            currentPhase !== "componentWillReceiveProps" &&
            (hasScheduledUpdateInCurrentPhase = !0);
      }
      function startWorkTimer(fiber) {
        {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber) || ((currentFiber = fiber), !beginFiberMark(fiber, null)))
            return;
          fiber._debugIsCurrentlyTiming = !0;
        }
      }
      function cancelWorkTimer(fiber) {
        {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) return;
          (fiber._debugIsCurrentlyTiming = !1), clearFiberMark(fiber, null);
        }
      }
      function stopWorkTimer(fiber) {
        {
          if (
            !supportsUserTiming ||
            shouldIgnoreFiber(fiber) ||
            ((currentFiber = fiber.return), !fiber._debugIsCurrentlyTiming)
          )
            return;
          (fiber._debugIsCurrentlyTiming = !1), endFiberMark(fiber, null, null);
        }
      }
      function stopFailedWorkTimer(fiber) {
        {
          if (
            !supportsUserTiming ||
            shouldIgnoreFiber(fiber) ||
            ((currentFiber = fiber.return), !fiber._debugIsCurrentlyTiming)
          )
            return;
          fiber._debugIsCurrentlyTiming = !1;
          var warning =
            fiber.tag === SuspenseComponent
              ? "Rendering was suspended"
              : "An error was thrown inside this error boundary";
          endFiberMark(fiber, null, warning);
        }
      }
      function startPhaseTimer(fiber, phase) {
        {
          if (!supportsUserTiming || (clearPendingPhaseMeasurement(), !beginFiberMark(fiber, phase))) return;
          (currentPhaseFiber = fiber), (currentPhase = phase);
        }
      }
      function stopPhaseTimer() {
        {
          if (!supportsUserTiming) return;
          if (currentPhase !== null && currentPhaseFiber !== null) {
            var warning = hasScheduledUpdateInCurrentPhase ? "Scheduled a cascading update" : null;
            endFiberMark(currentPhaseFiber, currentPhase, warning);
          }
          (currentPhase = null), (currentPhaseFiber = null);
        }
      }
      function startWorkLoopTimer(nextUnitOfWork) {
        {
          if (((currentFiber = nextUnitOfWork), !supportsUserTiming)) return;
          (commitCountInCurrentWorkLoop = 0), beginMark("(React Tree Reconciliation)"), resumeTimers();
        }
      }
      function stopWorkLoopTimer(interruptedBy2, didCompleteRoot) {
        {
          if (!supportsUserTiming) return;
          var warning = null;
          if (interruptedBy2 !== null)
            if (interruptedBy2.tag === HostRoot) warning = "A top-level update interrupted the previous render";
            else {
              var componentName = getComponentName(interruptedBy2.type) || "Unknown";
              warning = "An update to " + componentName + " interrupted the previous render";
            }
          else commitCountInCurrentWorkLoop > 1 && (warning = "There were cascading updates");
          commitCountInCurrentWorkLoop = 0;
          var label = didCompleteRoot
            ? "(React Tree Reconciliation: Completed Root)"
            : "(React Tree Reconciliation: Yielded)";
          pauseTimers(), endMark(label, "(React Tree Reconciliation)", warning);
        }
      }
      function startCommitTimer() {
        {
          if (!supportsUserTiming) return;
          (isCommitting = !0),
            (hasScheduledUpdateInCurrentCommit = !1),
            labelsInCurrentCommit.clear(),
            beginMark("(Committing Changes)");
        }
      }
      function stopCommitTimer() {
        {
          if (!supportsUserTiming) return;
          var warning = null;
          hasScheduledUpdateInCurrentCommit
            ? (warning = "Lifecycle hook scheduled a cascading update")
            : commitCountInCurrentWorkLoop > 0 && (warning = "Caused by a cascading update in earlier commit"),
            (hasScheduledUpdateInCurrentCommit = !1),
            commitCountInCurrentWorkLoop++,
            (isCommitting = !1),
            labelsInCurrentCommit.clear(),
            endMark("(Committing Changes)", "(Committing Changes)", warning);
        }
      }
      function startCommitSnapshotEffectsTimer() {
        {
          if (!supportsUserTiming) return;
          (effectCountInCurrentCommit = 0), beginMark("(Committing Snapshot Effects)");
        }
      }
      function stopCommitSnapshotEffectsTimer() {
        {
          if (!supportsUserTiming) return;
          var count = effectCountInCurrentCommit;
          (effectCountInCurrentCommit = 0),
            endMark("(Committing Snapshot Effects: " + count + " Total)", "(Committing Snapshot Effects)", null);
        }
      }
      function startCommitHostEffectsTimer() {
        {
          if (!supportsUserTiming) return;
          (effectCountInCurrentCommit = 0), beginMark("(Committing Host Effects)");
        }
      }
      function stopCommitHostEffectsTimer() {
        {
          if (!supportsUserTiming) return;
          var count = effectCountInCurrentCommit;
          (effectCountInCurrentCommit = 0),
            endMark("(Committing Host Effects: " + count + " Total)", "(Committing Host Effects)", null);
        }
      }
      function startCommitLifeCyclesTimer() {
        {
          if (!supportsUserTiming) return;
          (effectCountInCurrentCommit = 0), beginMark("(Calling Lifecycle Methods)");
        }
      }
      function stopCommitLifeCyclesTimer() {
        {
          if (!supportsUserTiming) return;
          var count = effectCountInCurrentCommit;
          (effectCountInCurrentCommit = 0),
            endMark("(Calling Lifecycle Methods: " + count + " Total)", "(Calling Lifecycle Methods)", null);
        }
      }
      var valueStack = [],
        fiberStack;
      fiberStack = [];
      var index = -1;
      function createCursor(defaultValue) {
        return { current: defaultValue };
      }
      function pop(cursor, fiber) {
        if (index < 0) {
          error("Unexpected pop.");
          return;
        }
        fiber !== fiberStack[index] && error("Unexpected Fiber popped."),
          (cursor.current = valueStack[index]),
          (valueStack[index] = null),
          (fiberStack[index] = null),
          index--;
      }
      function push(cursor, value, fiber) {
        index++, (valueStack[index] = cursor.current), (fiberStack[index] = fiber), (cursor.current = value);
      }
      var warnedAboutMissingGetChildContext;
      warnedAboutMissingGetChildContext = {};
      var emptyContextObject = {};
      Object.freeze(emptyContextObject);
      var contextStackCursor = createCursor(emptyContextObject),
        didPerformWorkStackCursor = createCursor(!1),
        previousContext = emptyContextObject;
      function getUnmaskedContext(workInProgress2, Component, didPushOwnContextIfProvider) {
        return didPushOwnContextIfProvider && isContextProvider(Component)
          ? previousContext
          : contextStackCursor.current;
      }
      function cacheContext(workInProgress2, unmaskedContext, maskedContext) {
        {
          var instance = workInProgress2.stateNode;
          (instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext),
            (instance.__reactInternalMemoizedMaskedChildContext = maskedContext);
        }
      }
      function getMaskedContext(workInProgress2, unmaskedContext) {
        {
          var type = workInProgress2.type,
            contextTypes = type.contextTypes;
          if (!contextTypes) return emptyContextObject;
          var instance = workInProgress2.stateNode;
          if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext)
            return instance.__reactInternalMemoizedMaskedChildContext;
          var context = {};
          for (var key in contextTypes) context[key] = unmaskedContext[key];
          {
            var name = getComponentName(type) || "Unknown";
            checkPropTypes(contextTypes, context, "context", name, getCurrentFiberStackInDev);
          }
          return instance && cacheContext(workInProgress2, unmaskedContext, context), context;
        }
      }
      function hasContextChanged() {
        return didPerformWorkStackCursor.current;
      }
      function isContextProvider(type) {
        {
          var childContextTypes = type.childContextTypes;
          return childContextTypes != null;
        }
      }
      function popContext(fiber) {
        pop(didPerformWorkStackCursor, fiber), pop(contextStackCursor, fiber);
      }
      function popTopLevelContextObject(fiber) {
        pop(didPerformWorkStackCursor, fiber), pop(contextStackCursor, fiber);
      }
      function pushTopLevelContextObject(fiber, context, didChange) {
        {
          if (contextStackCursor.current !== emptyContextObject)
            throw Error(
              "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."
            );
          push(contextStackCursor, context, fiber), push(didPerformWorkStackCursor, didChange, fiber);
        }
      }
      function processChildContext(fiber, type, parentContext) {
        {
          var instance = fiber.stateNode,
            childContextTypes = type.childContextTypes;
          if (typeof instance.getChildContext != "function") {
            {
              var componentName = getComponentName(type) || "Unknown";
              warnedAboutMissingGetChildContext[componentName] ||
                ((warnedAboutMissingGetChildContext[componentName] = !0),
                error(
                  "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
                  componentName,
                  componentName
                ));
            }
            return parentContext;
          }
          var childContext;
          startPhaseTimer(fiber, "getChildContext"), (childContext = instance.getChildContext()), stopPhaseTimer();
          for (var contextKey in childContext)
            if (!(contextKey in childContextTypes))
              throw Error(
                (getComponentName(type) || "Unknown") +
                  '.getChildContext(): key "' +
                  contextKey +
                  '" is not defined in childContextTypes.'
              );
          {
            var name = getComponentName(type) || "Unknown";
            checkPropTypes(childContextTypes, childContext, "child context", name, getCurrentFiberStackInDev);
          }
          return _assign({}, parentContext, {}, childContext);
        }
      }
      function pushContextProvider(workInProgress2) {
        {
          var instance = workInProgress2.stateNode,
            memoizedMergedChildContext =
              (instance && instance.__reactInternalMemoizedMergedChildContext) || emptyContextObject;
          return (
            (previousContext = contextStackCursor.current),
            push(contextStackCursor, memoizedMergedChildContext, workInProgress2),
            push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress2),
            !0
          );
        }
      }
      function invalidateContextProvider(workInProgress2, type, didChange) {
        {
          var instance = workInProgress2.stateNode;
          if (!instance)
            throw Error(
              "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."
            );
          if (didChange) {
            var mergedContext = processChildContext(workInProgress2, type, previousContext);
            (instance.__reactInternalMemoizedMergedChildContext = mergedContext),
              pop(didPerformWorkStackCursor, workInProgress2),
              pop(contextStackCursor, workInProgress2),
              push(contextStackCursor, mergedContext, workInProgress2),
              push(didPerformWorkStackCursor, didChange, workInProgress2);
          } else
            pop(didPerformWorkStackCursor, workInProgress2),
              push(didPerformWorkStackCursor, didChange, workInProgress2);
        }
      }
      function findCurrentUnmaskedContext(fiber) {
        {
          if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent))
            throw Error(
              "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue."
            );
          var node = fiber;
          do {
            switch (node.tag) {
              case HostRoot:
                return node.stateNode.context;
              case ClassComponent: {
                var Component = node.type;
                if (isContextProvider(Component)) return node.stateNode.__reactInternalMemoizedMergedChildContext;
                break;
              }
            }
            node = node.return;
          } while (node !== null);
          throw Error(
            "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue."
          );
        }
      }
      var LegacyRoot = 0,
        BlockingRoot = 1,
        ConcurrentRoot = 2,
        Scheduler_runWithPriority = Scheduler.unstable_runWithPriority,
        Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback,
        Scheduler_cancelCallback = Scheduler.unstable_cancelCallback,
        Scheduler_shouldYield = Scheduler.unstable_shouldYield,
        Scheduler_requestPaint = Scheduler.unstable_requestPaint,
        Scheduler_now = Scheduler.unstable_now,
        Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
        Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority,
        Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
        Scheduler_NormalPriority = Scheduler.unstable_NormalPriority,
        Scheduler_LowPriority = Scheduler.unstable_LowPriority,
        Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;
      if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null))
        throw Error(
          "It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling"
        );
      var fakeCallbackNode = {},
        ImmediatePriority = 99,
        UserBlockingPriority$1 = 98,
        NormalPriority = 97,
        LowPriority = 96,
        IdlePriority = 95,
        NoPriority = 90,
        shouldYield = Scheduler_shouldYield,
        requestPaint = Scheduler_requestPaint !== void 0 ? Scheduler_requestPaint : function () {},
        syncQueue = null,
        immediateQueueCallbackNode = null,
        isFlushingSyncQueue = !1,
        initialTimeMs = Scheduler_now(),
        now =
          initialTimeMs < 1e4
            ? Scheduler_now
            : function () {
                return Scheduler_now() - initialTimeMs;
              };
      function getCurrentPriorityLevel() {
        switch (Scheduler_getCurrentPriorityLevel()) {
          case Scheduler_ImmediatePriority:
            return ImmediatePriority;
          case Scheduler_UserBlockingPriority:
            return UserBlockingPriority$1;
          case Scheduler_NormalPriority:
            return NormalPriority;
          case Scheduler_LowPriority:
            return LowPriority;
          case Scheduler_IdlePriority:
            return IdlePriority;
          default:
            throw Error("Unknown priority level.");
        }
      }
      function reactPriorityToSchedulerPriority(reactPriorityLevel) {
        switch (reactPriorityLevel) {
          case ImmediatePriority:
            return Scheduler_ImmediatePriority;
          case UserBlockingPriority$1:
            return Scheduler_UserBlockingPriority;
          case NormalPriority:
            return Scheduler_NormalPriority;
          case LowPriority:
            return Scheduler_LowPriority;
          case IdlePriority:
            return Scheduler_IdlePriority;
          default:
            throw Error("Unknown priority level.");
        }
      }
      function runWithPriority$1(reactPriorityLevel, fn) {
        var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_runWithPriority(priorityLevel, fn);
      }
      function scheduleCallback(reactPriorityLevel, callback, options) {
        var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_scheduleCallback(priorityLevel, callback, options);
      }
      function scheduleSyncCallback(callback) {
        return (
          syncQueue === null
            ? ((syncQueue = [callback]),
              (immediateQueueCallbackNode = Scheduler_scheduleCallback(
                Scheduler_ImmediatePriority,
                flushSyncCallbackQueueImpl
              )))
            : syncQueue.push(callback),
          fakeCallbackNode
        );
      }
      function cancelCallback(callbackNode) {
        callbackNode !== fakeCallbackNode && Scheduler_cancelCallback(callbackNode);
      }
      function flushSyncCallbackQueue() {
        if (immediateQueueCallbackNode !== null) {
          var node = immediateQueueCallbackNode;
          (immediateQueueCallbackNode = null), Scheduler_cancelCallback(node);
        }
        flushSyncCallbackQueueImpl();
      }
      function flushSyncCallbackQueueImpl() {
        if (!isFlushingSyncQueue && syncQueue !== null) {
          isFlushingSyncQueue = !0;
          var i = 0;
          try {
            var _isSync = !0,
              queue = syncQueue;
            runWithPriority$1(ImmediatePriority, function () {
              for (; i < queue.length; i++) {
                var callback = queue[i];
                do callback = callback(_isSync);
                while (callback !== null);
              }
            }),
              (syncQueue = null);
          } catch (error2) {
            throw (
              (syncQueue !== null && (syncQueue = syncQueue.slice(i + 1)),
              Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue),
              error2)
            );
          } finally {
            isFlushingSyncQueue = !1;
          }
        }
      }
      var NoMode = 0,
        StrictMode = 1,
        BlockingMode = 2,
        ConcurrentMode = 4,
        ProfileMode = 8,
        MAX_SIGNED_31_BIT_INT = 1073741823,
        NoWork = 0,
        Never = 1,
        Idle = 2,
        ContinuousHydration = 3,
        Sync = MAX_SIGNED_31_BIT_INT,
        Batched = Sync - 1,
        UNIT_SIZE = 10,
        MAGIC_NUMBER_OFFSET = Batched - 1;
      function msToExpirationTime(ms) {
        return MAGIC_NUMBER_OFFSET - ((ms / UNIT_SIZE) | 0);
      }
      function expirationTimeToMs(expirationTime) {
        return (MAGIC_NUMBER_OFFSET - expirationTime) * UNIT_SIZE;
      }
      function ceiling(num, precision) {
        return (((num / precision) | 0) + 1) * precision;
      }
      function computeExpirationBucket(currentTime, expirationInMs, bucketSizeMs) {
        return (
          MAGIC_NUMBER_OFFSET -
          ceiling(MAGIC_NUMBER_OFFSET - currentTime + expirationInMs / UNIT_SIZE, bucketSizeMs / UNIT_SIZE)
        );
      }
      var LOW_PRIORITY_EXPIRATION = 5e3,
        LOW_PRIORITY_BATCH_SIZE = 250;
      function computeAsyncExpiration(currentTime) {
        return computeExpirationBucket(currentTime, LOW_PRIORITY_EXPIRATION, LOW_PRIORITY_BATCH_SIZE);
      }
      function computeSuspenseExpiration(currentTime, timeoutMs) {
        return computeExpirationBucket(currentTime, timeoutMs, LOW_PRIORITY_BATCH_SIZE);
      }
      var HIGH_PRIORITY_EXPIRATION = 500,
        HIGH_PRIORITY_BATCH_SIZE = 100;
      function computeInteractiveExpiration(currentTime) {
        return computeExpirationBucket(currentTime, HIGH_PRIORITY_EXPIRATION, HIGH_PRIORITY_BATCH_SIZE);
      }
      function inferPriorityFromExpirationTime(currentTime, expirationTime) {
        if (expirationTime === Sync) return ImmediatePriority;
        if (expirationTime === Never || expirationTime === Idle) return IdlePriority;
        var msUntil = expirationTimeToMs(expirationTime) - expirationTimeToMs(currentTime);
        return msUntil <= 0
          ? ImmediatePriority
          : msUntil <= HIGH_PRIORITY_EXPIRATION + HIGH_PRIORITY_BATCH_SIZE
          ? UserBlockingPriority$1
          : msUntil <= LOW_PRIORITY_EXPIRATION + LOW_PRIORITY_BATCH_SIZE
          ? NormalPriority
          : IdlePriority;
      }
      var ReactStrictModeWarnings = {
        recordUnsafeLifecycleWarnings: function (fiber, instance) {},
        flushPendingUnsafeLifecycleWarnings: function () {},
        recordLegacyContextWarning: function (fiber, instance) {},
        flushLegacyContextWarning: function () {},
        discardPendingWarnings: function () {},
      };
      {
        var findStrictRoot = function (fiber) {
            for (var maybeStrictRoot = null, node = fiber; node !== null; )
              node.mode & StrictMode && (maybeStrictRoot = node), (node = node.return);
            return maybeStrictRoot;
          },
          setToSortedString = function (set2) {
            var array = [];
            return (
              set2.forEach(function (value) {
                array.push(value);
              }),
              array.sort().join(", ")
            );
          },
          pendingComponentWillMountWarnings = [],
          pendingUNSAFE_ComponentWillMountWarnings = [],
          pendingComponentWillReceivePropsWarnings = [],
          pendingUNSAFE_ComponentWillReceivePropsWarnings = [],
          pendingComponentWillUpdateWarnings = [],
          pendingUNSAFE_ComponentWillUpdateWarnings = [],
          didWarnAboutUnsafeLifecycles = new Set();
        (ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
          didWarnAboutUnsafeLifecycles.has(fiber.type) ||
            (typeof instance.componentWillMount == "function" &&
              instance.componentWillMount.__suppressDeprecationWarning !== !0 &&
              pendingComponentWillMountWarnings.push(fiber),
            fiber.mode & StrictMode &&
              typeof instance.UNSAFE_componentWillMount == "function" &&
              pendingUNSAFE_ComponentWillMountWarnings.push(fiber),
            typeof instance.componentWillReceiveProps == "function" &&
              instance.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
              pendingComponentWillReceivePropsWarnings.push(fiber),
            fiber.mode & StrictMode &&
              typeof instance.UNSAFE_componentWillReceiveProps == "function" &&
              pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber),
            typeof instance.componentWillUpdate == "function" &&
              instance.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
              pendingComponentWillUpdateWarnings.push(fiber),
            fiber.mode & StrictMode &&
              typeof instance.UNSAFE_componentWillUpdate == "function" &&
              pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber));
        }),
          (ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
            var componentWillMountUniqueNames = new Set();
            pendingComponentWillMountWarnings.length > 0 &&
              (pendingComponentWillMountWarnings.forEach(function (fiber) {
                componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component"),
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
              }),
              (pendingComponentWillMountWarnings = []));
            var UNSAFE_componentWillMountUniqueNames = new Set();
            pendingUNSAFE_ComponentWillMountWarnings.length > 0 &&
              (pendingUNSAFE_ComponentWillMountWarnings.forEach(function (fiber) {
                UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component"),
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
              }),
              (pendingUNSAFE_ComponentWillMountWarnings = []));
            var componentWillReceivePropsUniqueNames = new Set();
            pendingComponentWillReceivePropsWarnings.length > 0 &&
              (pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
                componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component"),
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
              }),
              (pendingComponentWillReceivePropsWarnings = []));
            var UNSAFE_componentWillReceivePropsUniqueNames = new Set();
            pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0 &&
              (pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function (fiber) {
                UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component"),
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
              }),
              (pendingUNSAFE_ComponentWillReceivePropsWarnings = []));
            var componentWillUpdateUniqueNames = new Set();
            pendingComponentWillUpdateWarnings.length > 0 &&
              (pendingComponentWillUpdateWarnings.forEach(function (fiber) {
                componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component"),
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
              }),
              (pendingComponentWillUpdateWarnings = []));
            var UNSAFE_componentWillUpdateUniqueNames = new Set();
            if (
              (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0 &&
                (pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function (fiber) {
                  UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component"),
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                }),
                (pendingUNSAFE_ComponentWillUpdateWarnings = [])),
              UNSAFE_componentWillMountUniqueNames.size > 0)
            ) {
              var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);
              error(
                `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
                sortedNames
              );
            }
            if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
              var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);
              error(
                `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state

Please update the following components: %s`,
                _sortedNames
              );
            }
            if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
              var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);
              error(
                `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
                _sortedNames2
              );
            }
            if (componentWillMountUniqueNames.size > 0) {
              var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);
              warn(
                `componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                _sortedNames3
              );
            }
            if (componentWillReceivePropsUniqueNames.size > 0) {
              var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);
              warn(
                `componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                _sortedNames4
              );
            }
            if (componentWillUpdateUniqueNames.size > 0) {
              var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);
              warn(
                `componentWillUpdate has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                _sortedNames5
              );
            }
          });
        var pendingLegacyContextWarning = new Map(),
          didWarnAboutLegacyContext = new Set();
        (ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
          var strictRoot = findStrictRoot(fiber);
          if (strictRoot === null) {
            error(
              "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
            );
            return;
          }
          if (!didWarnAboutLegacyContext.has(fiber.type)) {
            var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
            (fiber.type.contextTypes != null ||
              fiber.type.childContextTypes != null ||
              (instance !== null && typeof instance.getChildContext == "function")) &&
              (warningsForRoot === void 0 &&
                ((warningsForRoot = []), pendingLegacyContextWarning.set(strictRoot, warningsForRoot)),
              warningsForRoot.push(fiber));
          }
        }),
          (ReactStrictModeWarnings.flushLegacyContextWarning = function () {
            pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
              if (fiberArray.length !== 0) {
                var firstFiber = fiberArray[0],
                  uniqueNames = new Set();
                fiberArray.forEach(function (fiber) {
                  uniqueNames.add(getComponentName(fiber.type) || "Component"),
                    didWarnAboutLegacyContext.add(fiber.type);
                });
                var sortedNames = setToSortedString(uniqueNames),
                  firstComponentStack = getStackByFiberInDevAndProd(firstFiber);
                error(
                  `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://fb.me/react-legacy-context%s`,
                  sortedNames,
                  firstComponentStack
                );
              }
            });
          }),
          (ReactStrictModeWarnings.discardPendingWarnings = function () {
            (pendingComponentWillMountWarnings = []),
              (pendingUNSAFE_ComponentWillMountWarnings = []),
              (pendingComponentWillReceivePropsWarnings = []),
              (pendingUNSAFE_ComponentWillReceivePropsWarnings = []),
              (pendingComponentWillUpdateWarnings = []),
              (pendingUNSAFE_ComponentWillUpdateWarnings = []),
              (pendingLegacyContextWarning = new Map());
          });
      }
      var resolveFamily = null,
        failedBoundaries = null,
        setRefreshHandler = function (handler) {
          resolveFamily = handler;
        };
      function resolveFunctionForHotReloading(type) {
        {
          if (resolveFamily === null) return type;
          var family = resolveFamily(type);
          return family === void 0 ? type : family.current;
        }
      }
      function resolveClassForHotReloading(type) {
        return resolveFunctionForHotReloading(type);
      }
      function resolveForwardRefForHotReloading(type) {
        {
          if (resolveFamily === null) return type;
          var family = resolveFamily(type);
          if (family === void 0) {
            if (type != null && typeof type.render == "function") {
              var currentRender = resolveFunctionForHotReloading(type.render);
              if (type.render !== currentRender) {
                var syntheticType = { $$typeof: REACT_FORWARD_REF_TYPE, render: currentRender };
                return type.displayName !== void 0 && (syntheticType.displayName = type.displayName), syntheticType;
              }
            }
            return type;
          }
          return family.current;
        }
      }
      function isCompatibleFamilyForHotReloading(fiber, element) {
        {
          if (resolveFamily === null) return !1;
          var prevType = fiber.elementType,
            nextType = element.type,
            needsCompareFamilies = !1,
            $$typeofNextType = typeof nextType == "object" && nextType !== null ? nextType.$$typeof : null;
          switch (fiber.tag) {
            case ClassComponent: {
              typeof nextType == "function" && (needsCompareFamilies = !0);
              break;
            }
            case FunctionComponent: {
              (typeof nextType == "function" || $$typeofNextType === REACT_LAZY_TYPE) && (needsCompareFamilies = !0);
              break;
            }
            case ForwardRef: {
              ($$typeofNextType === REACT_FORWARD_REF_TYPE || $$typeofNextType === REACT_LAZY_TYPE) &&
                (needsCompareFamilies = !0);
              break;
            }
            case MemoComponent:
            case SimpleMemoComponent: {
              ($$typeofNextType === REACT_MEMO_TYPE || $$typeofNextType === REACT_LAZY_TYPE) &&
                (needsCompareFamilies = !0);
              break;
            }
            default:
              return !1;
          }
          if (needsCompareFamilies) {
            var prevFamily = resolveFamily(prevType);
            if (prevFamily !== void 0 && prevFamily === resolveFamily(nextType)) return !0;
          }
          return !1;
        }
      }
      function markFailedErrorBoundaryForHotReloading(fiber) {
        {
          if (resolveFamily === null || typeof WeakSet != "function") return;
          failedBoundaries === null && (failedBoundaries = new WeakSet()), failedBoundaries.add(fiber);
        }
      }
      var scheduleRefresh = function (root2, update) {
          {
            if (resolveFamily === null) return;
            var staleFamilies = update.staleFamilies,
              updatedFamilies = update.updatedFamilies;
            flushPassiveEffects(),
              flushSync2(function () {
                scheduleFibersWithFamiliesRecursively(root2.current, updatedFamilies, staleFamilies);
              });
          }
        },
        scheduleRoot = function (root2, element) {
          {
            if (root2.context !== emptyContextObject) return;
            flushPassiveEffects(),
              syncUpdates(function () {
                updateContainer(element, root2, null, null);
              });
          }
        };
      function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
        {
          var alternate = fiber.alternate,
            child = fiber.child,
            sibling = fiber.sibling,
            tag = fiber.tag,
            type = fiber.type,
            candidateType = null;
          switch (tag) {
            case FunctionComponent:
            case SimpleMemoComponent:
            case ClassComponent:
              candidateType = type;
              break;
            case ForwardRef:
              candidateType = type.render;
              break;
          }
          if (resolveFamily === null) throw new Error("Expected resolveFamily to be set during hot reload.");
          var needsRender = !1,
            needsRemount = !1;
          if (candidateType !== null) {
            var family = resolveFamily(candidateType);
            family !== void 0 &&
              (staleFamilies.has(family)
                ? (needsRemount = !0)
                : updatedFamilies.has(family) && (tag === ClassComponent ? (needsRemount = !0) : (needsRender = !0)));
          }
          failedBoundaries !== null &&
            (failedBoundaries.has(fiber) || (alternate !== null && failedBoundaries.has(alternate))) &&
            (needsRemount = !0),
            needsRemount && (fiber._debugNeedsRemount = !0),
            (needsRemount || needsRender) && scheduleWork(fiber, Sync),
            child !== null &&
              !needsRemount &&
              scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies),
            sibling !== null && scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
        }
      }
      var findHostInstancesForRefresh = function (root2, families) {
        {
          var hostInstances = new Set(),
            types = new Set(
              families.map(function (family) {
                return family.current;
              })
            );
          return findHostInstancesForMatchingFibersRecursively(root2.current, types, hostInstances), hostInstances;
        }
      };
      function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
        {
          var child = fiber.child,
            sibling = fiber.sibling,
            tag = fiber.tag,
            type = fiber.type,
            candidateType = null;
          switch (tag) {
            case FunctionComponent:
            case SimpleMemoComponent:
            case ClassComponent:
              candidateType = type;
              break;
            case ForwardRef:
              candidateType = type.render;
              break;
          }
          var didMatch = !1;
          candidateType !== null && types.has(candidateType) && (didMatch = !0),
            didMatch
              ? findHostInstancesForFiberShallowly(fiber, hostInstances)
              : child !== null && findHostInstancesForMatchingFibersRecursively(child, types, hostInstances),
            sibling !== null && findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
        }
      }
      function findHostInstancesForFiberShallowly(fiber, hostInstances) {
        {
          var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);
          if (foundHostInstances) return;
          for (var node = fiber; ; ) {
            switch (node.tag) {
              case HostComponent:
                hostInstances.add(node.stateNode);
                return;
              case HostPortal:
                hostInstances.add(node.stateNode.containerInfo);
                return;
              case HostRoot:
                hostInstances.add(node.stateNode.containerInfo);
                return;
            }
            if (node.return === null) throw new Error("Expected to reach root first.");
            node = node.return;
          }
        }
      }
      function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
        for (var node = fiber, foundHostInstances = !1; ; ) {
          if (node.tag === HostComponent) (foundHostInstances = !0), hostInstances.add(node.stateNode);
          else if (node.child !== null) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === fiber) return foundHostInstances;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === fiber) return foundHostInstances;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
        return !1;
      }
      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          var props = _assign({}, baseProps),
            defaultProps = Component.defaultProps;
          for (var propName in defaultProps) props[propName] === void 0 && (props[propName] = defaultProps[propName]);
          return props;
        }
        return baseProps;
      }
      function readLazyComponentType(lazyComponent) {
        if ((initializeLazyComponentType(lazyComponent), lazyComponent._status !== Resolved))
          throw lazyComponent._result;
        return lazyComponent._result;
      }
      var valueCursor = createCursor(null),
        rendererSigil;
      rendererSigil = {};
      var currentlyRenderingFiber = null,
        lastContextDependency = null,
        lastContextWithAllBitsObserved = null,
        isDisallowedContextReadInDEV = !1;
      function resetContextDependencies() {
        (currentlyRenderingFiber = null),
          (lastContextDependency = null),
          (lastContextWithAllBitsObserved = null),
          (isDisallowedContextReadInDEV = !1);
      }
      function enterDisallowedContextReadInDEV() {
        isDisallowedContextReadInDEV = !0;
      }
      function exitDisallowedContextReadInDEV() {
        isDisallowedContextReadInDEV = !1;
      }
      function pushProvider(providerFiber, nextValue) {
        var context = providerFiber.type._context;
        push(valueCursor, context._currentValue, providerFiber),
          (context._currentValue = nextValue),
          context._currentRenderer !== void 0 &&
            context._currentRenderer !== null &&
            context._currentRenderer !== rendererSigil &&
            error(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
            ),
          (context._currentRenderer = rendererSigil);
      }
      function popProvider(providerFiber) {
        var currentValue = valueCursor.current;
        pop(valueCursor, providerFiber);
        var context = providerFiber.type._context;
        context._currentValue = currentValue;
      }
      function calculateChangedBits(context, newValue, oldValue) {
        if (objectIs(oldValue, newValue)) return 0;
        var changedBits =
          typeof context._calculateChangedBits == "function"
            ? context._calculateChangedBits(oldValue, newValue)
            : MAX_SIGNED_31_BIT_INT;
        return (
          (changedBits & MAX_SIGNED_31_BIT_INT) !== changedBits &&
            error(
              "calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s",
              changedBits
            ),
          changedBits | 0
        );
      }
      function scheduleWorkOnParentPath(parent, renderExpirationTime2) {
        for (var node = parent; node !== null; ) {
          var alternate = node.alternate;
          if (node.childExpirationTime < renderExpirationTime2)
            (node.childExpirationTime = renderExpirationTime2),
              alternate !== null &&
                alternate.childExpirationTime < renderExpirationTime2 &&
                (alternate.childExpirationTime = renderExpirationTime2);
          else if (alternate !== null && alternate.childExpirationTime < renderExpirationTime2)
            alternate.childExpirationTime = renderExpirationTime2;
          else break;
          node = node.return;
        }
      }
      function propagateContextChange(workInProgress2, context, changedBits, renderExpirationTime2) {
        var fiber = workInProgress2.child;
        for (fiber !== null && (fiber.return = workInProgress2); fiber !== null; ) {
          var nextFiber = void 0,
            list = fiber.dependencies;
          if (list !== null) {
            nextFiber = fiber.child;
            for (var dependency = list.firstContext; dependency !== null; ) {
              if (dependency.context === context && dependency.observedBits & changedBits) {
                if (fiber.tag === ClassComponent) {
                  var update = createUpdate(renderExpirationTime2, null);
                  (update.tag = ForceUpdate), enqueueUpdate(fiber, update);
                }
                fiber.expirationTime < renderExpirationTime2 && (fiber.expirationTime = renderExpirationTime2);
                var alternate = fiber.alternate;
                alternate !== null &&
                  alternate.expirationTime < renderExpirationTime2 &&
                  (alternate.expirationTime = renderExpirationTime2),
                  scheduleWorkOnParentPath(fiber.return, renderExpirationTime2),
                  list.expirationTime < renderExpirationTime2 && (list.expirationTime = renderExpirationTime2);
                break;
              }
              dependency = dependency.next;
            }
          } else
            fiber.tag === ContextProvider
              ? (nextFiber = fiber.type === workInProgress2.type ? null : fiber.child)
              : (nextFiber = fiber.child);
          if (nextFiber !== null) nextFiber.return = fiber;
          else
            for (nextFiber = fiber; nextFiber !== null; ) {
              if (nextFiber === workInProgress2) {
                nextFiber = null;
                break;
              }
              var sibling = nextFiber.sibling;
              if (sibling !== null) {
                (sibling.return = nextFiber.return), (nextFiber = sibling);
                break;
              }
              nextFiber = nextFiber.return;
            }
          fiber = nextFiber;
        }
      }
      function prepareToReadContext(workInProgress2, renderExpirationTime2) {
        (currentlyRenderingFiber = workInProgress2),
          (lastContextDependency = null),
          (lastContextWithAllBitsObserved = null);
        var dependencies = workInProgress2.dependencies;
        if (dependencies !== null) {
          var firstContext = dependencies.firstContext;
          firstContext !== null &&
            (dependencies.expirationTime >= renderExpirationTime2 && markWorkInProgressReceivedUpdate(),
            (dependencies.firstContext = null));
        }
      }
      function readContext(context, observedBits) {
        if (
          (isDisallowedContextReadInDEV &&
            error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            ),
          lastContextWithAllBitsObserved !== context)
        ) {
          if (!(observedBits === !1 || observedBits === 0)) {
            var resolvedObservedBits;
            typeof observedBits != "number" || observedBits === MAX_SIGNED_31_BIT_INT
              ? ((lastContextWithAllBitsObserved = context), (resolvedObservedBits = MAX_SIGNED_31_BIT_INT))
              : (resolvedObservedBits = observedBits);
            var contextItem = { context, observedBits: resolvedObservedBits, next: null };
            if (lastContextDependency === null) {
              if (currentlyRenderingFiber === null)
                throw Error(
                  "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
                );
              (lastContextDependency = contextItem),
                (currentlyRenderingFiber.dependencies = {
                  expirationTime: NoWork,
                  firstContext: contextItem,
                  responders: null,
                });
            } else lastContextDependency = lastContextDependency.next = contextItem;
          }
        }
        return context._currentValue;
      }
      var UpdateState = 0,
        ReplaceState = 1,
        ForceUpdate = 2,
        CaptureUpdate = 3,
        hasForceUpdate = !1,
        didWarnUpdateInsideUpdate,
        currentlyProcessingQueue;
      (didWarnUpdateInsideUpdate = !1), (currentlyProcessingQueue = null);
      function initializeUpdateQueue(fiber) {
        var queue = { baseState: fiber.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
        fiber.updateQueue = queue;
      }
      function cloneUpdateQueue(current2, workInProgress2) {
        var queue = workInProgress2.updateQueue,
          currentQueue = current2.updateQueue;
        if (queue === currentQueue) {
          var clone = {
            baseState: currentQueue.baseState,
            baseQueue: currentQueue.baseQueue,
            shared: currentQueue.shared,
            effects: currentQueue.effects,
          };
          workInProgress2.updateQueue = clone;
        }
      }
      function createUpdate(expirationTime, suspenseConfig) {
        var update = { expirationTime, suspenseConfig, tag: UpdateState, payload: null, callback: null, next: null };
        return (update.next = update), (update.priority = getCurrentPriorityLevel()), update;
      }
      function enqueueUpdate(fiber, update) {
        var updateQueue = fiber.updateQueue;
        if (updateQueue !== null) {
          var sharedQueue = updateQueue.shared,
            pending = sharedQueue.pending;
          pending === null ? (update.next = update) : ((update.next = pending.next), (pending.next = update)),
            (sharedQueue.pending = update),
            currentlyProcessingQueue === sharedQueue &&
              !didWarnUpdateInsideUpdate &&
              (error(
                "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."
              ),
              (didWarnUpdateInsideUpdate = !0));
        }
      }
      function enqueueCapturedUpdate(workInProgress2, update) {
        var current2 = workInProgress2.alternate;
        current2 !== null && cloneUpdateQueue(current2, workInProgress2);
        var queue = workInProgress2.updateQueue,
          last = queue.baseQueue;
        last === null
          ? ((queue.baseQueue = update.next = update), (update.next = update))
          : ((update.next = last.next), (last.next = update));
      }
      function getStateFromUpdate(workInProgress2, queue, update, prevState, nextProps, instance) {
        switch (update.tag) {
          case ReplaceState: {
            var payload = update.payload;
            if (typeof payload == "function") {
              enterDisallowedContextReadInDEV(),
                workInProgress2.mode & StrictMode && payload.call(instance, prevState, nextProps);
              var nextState = payload.call(instance, prevState, nextProps);
              return exitDisallowedContextReadInDEV(), nextState;
            }
            return payload;
          }
          case CaptureUpdate:
            workInProgress2.effectTag = (workInProgress2.effectTag & ~ShouldCapture) | DidCapture;
          case UpdateState: {
            var _payload = update.payload,
              partialState;
            return (
              typeof _payload == "function"
                ? (enterDisallowedContextReadInDEV(),
                  workInProgress2.mode & StrictMode && _payload.call(instance, prevState, nextProps),
                  (partialState = _payload.call(instance, prevState, nextProps)),
                  exitDisallowedContextReadInDEV())
                : (partialState = _payload),
              partialState == null ? prevState : _assign({}, prevState, partialState)
            );
          }
          case ForceUpdate:
            return (hasForceUpdate = !0), prevState;
        }
        return prevState;
      }
      function processUpdateQueue(workInProgress2, props, instance, renderExpirationTime2) {
        var queue = workInProgress2.updateQueue;
        (hasForceUpdate = !1), (currentlyProcessingQueue = queue.shared);
        var baseQueue = queue.baseQueue,
          pendingQueue = queue.shared.pending;
        if (pendingQueue !== null) {
          if (baseQueue !== null) {
            var baseFirst = baseQueue.next,
              pendingFirst = pendingQueue.next;
            (baseQueue.next = pendingFirst), (pendingQueue.next = baseFirst);
          }
          (baseQueue = pendingQueue), (queue.shared.pending = null);
          var current2 = workInProgress2.alternate;
          if (current2 !== null) {
            var currentQueue = current2.updateQueue;
            currentQueue !== null && (currentQueue.baseQueue = pendingQueue);
          }
        }
        if (baseQueue !== null) {
          var first = baseQueue.next,
            newState = queue.baseState,
            newExpirationTime = NoWork,
            newBaseState = null,
            newBaseQueueFirst = null,
            newBaseQueueLast = null;
          if (first !== null) {
            var update = first;
            do {
              var updateExpirationTime = update.expirationTime;
              if (updateExpirationTime < renderExpirationTime2) {
                var clone = {
                  expirationTime: update.expirationTime,
                  suspenseConfig: update.suspenseConfig,
                  tag: update.tag,
                  payload: update.payload,
                  callback: update.callback,
                  next: null,
                };
                newBaseQueueLast === null
                  ? ((newBaseQueueFirst = newBaseQueueLast = clone), (newBaseState = newState))
                  : (newBaseQueueLast = newBaseQueueLast.next = clone),
                  updateExpirationTime > newExpirationTime && (newExpirationTime = updateExpirationTime);
              } else {
                if (newBaseQueueLast !== null) {
                  var _clone = {
                    expirationTime: Sync,
                    suspenseConfig: update.suspenseConfig,
                    tag: update.tag,
                    payload: update.payload,
                    callback: update.callback,
                    next: null,
                  };
                  newBaseQueueLast = newBaseQueueLast.next = _clone;
                }
                markRenderEventTimeAndConfig(updateExpirationTime, update.suspenseConfig),
                  (newState = getStateFromUpdate(workInProgress2, queue, update, newState, props, instance));
                var callback = update.callback;
                if (callback !== null) {
                  workInProgress2.effectTag |= Callback;
                  var effects = queue.effects;
                  effects === null ? (queue.effects = [update]) : effects.push(update);
                }
              }
              if (((update = update.next), update === null || update === first)) {
                if (((pendingQueue = queue.shared.pending), pendingQueue === null)) break;
                (update = baseQueue.next = pendingQueue.next),
                  (pendingQueue.next = first),
                  (queue.baseQueue = baseQueue = pendingQueue),
                  (queue.shared.pending = null);
              }
            } while (!0);
          }
          newBaseQueueLast === null ? (newBaseState = newState) : (newBaseQueueLast.next = newBaseQueueFirst),
            (queue.baseState = newBaseState),
            (queue.baseQueue = newBaseQueueLast),
            markUnprocessedUpdateTime(newExpirationTime),
            (workInProgress2.expirationTime = newExpirationTime),
            (workInProgress2.memoizedState = newState);
        }
        currentlyProcessingQueue = null;
      }
      function callCallback(callback, context) {
        if (typeof callback != "function")
          throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + callback);
        callback.call(context);
      }
      function resetHasForceUpdateBeforeProcessing() {
        hasForceUpdate = !1;
      }
      function checkHasForceUpdateAfterProcessing() {
        return hasForceUpdate;
      }
      function commitUpdateQueue(finishedWork, finishedQueue, instance) {
        var effects = finishedQueue.effects;
        if (((finishedQueue.effects = null), effects !== null))
          for (var i = 0; i < effects.length; i++) {
            var effect4 = effects[i],
              callback = effect4.callback;
            callback !== null && ((effect4.callback = null), callCallback(callback, instance));
          }
      }
      var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
      function requestCurrentSuspenseConfig() {
        return ReactCurrentBatchConfig.suspense;
      }
      var fakeInternalInstance = {},
        isArray = Array.isArray,
        emptyRefsObject = new React.Component().refs,
        didWarnAboutStateAssignmentForComponent,
        didWarnAboutUninitializedState,
        didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate,
        didWarnAboutLegacyLifecyclesAndDerivedState,
        didWarnAboutUndefinedDerivedState,
        warnOnUndefinedDerivedState,
        warnOnInvalidCallback,
        didWarnAboutDirectlyAssigningPropsToState,
        didWarnAboutContextTypeAndContextTypes,
        didWarnAboutInvalidateContextType;
      {
        (didWarnAboutStateAssignmentForComponent = new Set()),
          (didWarnAboutUninitializedState = new Set()),
          (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set()),
          (didWarnAboutLegacyLifecyclesAndDerivedState = new Set()),
          (didWarnAboutDirectlyAssigningPropsToState = new Set()),
          (didWarnAboutUndefinedDerivedState = new Set()),
          (didWarnAboutContextTypeAndContextTypes = new Set()),
          (didWarnAboutInvalidateContextType = new Set());
        var didWarnOnInvalidCallback = new Set();
        (warnOnInvalidCallback = function (callback, callerName) {
          if (!(callback === null || typeof callback == "function")) {
            var key = callerName + "_" + callback;
            didWarnOnInvalidCallback.has(key) ||
              (didWarnOnInvalidCallback.add(key),
              error(
                "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                callerName,
                callback
              ));
          }
        }),
          (warnOnUndefinedDerivedState = function (type, partialState) {
            if (partialState === void 0) {
              var componentName = getComponentName(type) || "Component";
              didWarnAboutUndefinedDerivedState.has(componentName) ||
                (didWarnAboutUndefinedDerivedState.add(componentName),
                error(
                  "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                  componentName
                ));
            }
          }),
          Object.defineProperty(fakeInternalInstance, "_processChildContext", {
            enumerable: !1,
            value: function () {
              throw Error(
                "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
              );
            },
          }),
          Object.freeze(fakeInternalInstance);
      }
      function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
        var prevState = workInProgress2.memoizedState;
        workInProgress2.mode & StrictMode && getDerivedStateFromProps(nextProps, prevState);
        var partialState = getDerivedStateFromProps(nextProps, prevState);
        warnOnUndefinedDerivedState(ctor, partialState);
        var memoizedState = partialState == null ? prevState : _assign({}, prevState, partialState);
        if (((workInProgress2.memoizedState = memoizedState), workInProgress2.expirationTime === NoWork)) {
          var updateQueue = workInProgress2.updateQueue;
          updateQueue.baseState = memoizedState;
        }
      }
      var classComponentUpdater = {
        isMounted,
        enqueueSetState: function (inst, payload, callback) {
          var fiber = get(inst),
            currentTime = requestCurrentTimeForUpdate(),
            suspenseConfig = requestCurrentSuspenseConfig(),
            expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig),
            update = createUpdate(expirationTime, suspenseConfig);
          (update.payload = payload),
            callback != null && (warnOnInvalidCallback(callback, "setState"), (update.callback = callback)),
            enqueueUpdate(fiber, update),
            scheduleWork(fiber, expirationTime);
        },
        enqueueReplaceState: function (inst, payload, callback) {
          var fiber = get(inst),
            currentTime = requestCurrentTimeForUpdate(),
            suspenseConfig = requestCurrentSuspenseConfig(),
            expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig),
            update = createUpdate(expirationTime, suspenseConfig);
          (update.tag = ReplaceState),
            (update.payload = payload),
            callback != null && (warnOnInvalidCallback(callback, "replaceState"), (update.callback = callback)),
            enqueueUpdate(fiber, update),
            scheduleWork(fiber, expirationTime);
        },
        enqueueForceUpdate: function (inst, callback) {
          var fiber = get(inst),
            currentTime = requestCurrentTimeForUpdate(),
            suspenseConfig = requestCurrentSuspenseConfig(),
            expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig),
            update = createUpdate(expirationTime, suspenseConfig);
          (update.tag = ForceUpdate),
            callback != null && (warnOnInvalidCallback(callback, "forceUpdate"), (update.callback = callback)),
            enqueueUpdate(fiber, update),
            scheduleWork(fiber, expirationTime);
        },
      };
      function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
        var instance = workInProgress2.stateNode;
        if (typeof instance.shouldComponentUpdate == "function") {
          workInProgress2.mode & StrictMode && instance.shouldComponentUpdate(newProps, newState, nextContext),
            startPhaseTimer(workInProgress2, "shouldComponentUpdate");
          var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
          return (
            stopPhaseTimer(),
            shouldUpdate === void 0 &&
              error(
                "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
                getComponentName(ctor) || "Component"
              ),
            shouldUpdate
          );
        }
        return ctor.prototype && ctor.prototype.isPureReactComponent
          ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
          : !0;
      }
      function checkClassInstance(workInProgress2, ctor, newProps) {
        var instance = workInProgress2.stateNode;
        {
          var name = getComponentName(ctor) || "Component",
            renderPresent = instance.render;
          renderPresent ||
            (ctor.prototype && typeof ctor.prototype.render == "function"
              ? error(
                  "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
                  name
                )
              : error(
                  "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
                  name
                )),
            instance.getInitialState &&
              !instance.getInitialState.isReactClassApproved &&
              !instance.state &&
              error(
                "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                name
              ),
            instance.getDefaultProps &&
              !instance.getDefaultProps.isReactClassApproved &&
              error(
                "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                name
              ),
            instance.propTypes &&
              error(
                "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
                name
              ),
            instance.contextType &&
              error(
                "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
                name
              ),
            instance.contextTypes &&
              error(
                "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
                name
              ),
            ctor.contextType &&
              ctor.contextTypes &&
              !didWarnAboutContextTypeAndContextTypes.has(ctor) &&
              (didWarnAboutContextTypeAndContextTypes.add(ctor),
              error(
                "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
                name
              )),
            typeof instance.componentShouldUpdate == "function" &&
              error(
                "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                name
              ),
            ctor.prototype &&
              ctor.prototype.isPureReactComponent &&
              typeof instance.shouldComponentUpdate < "u" &&
              error(
                "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
                getComponentName(ctor) || "A pure component"
              ),
            typeof instance.componentDidUnmount == "function" &&
              error(
                "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                name
              ),
            typeof instance.componentDidReceiveProps == "function" &&
              error(
                "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
                name
              ),
            typeof instance.componentWillRecieveProps == "function" &&
              error(
                "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                name
              ),
            typeof instance.UNSAFE_componentWillRecieveProps == "function" &&
              error(
                "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
                name
              );
          var hasMutatedProps = instance.props !== newProps;
          instance.props !== void 0 &&
            hasMutatedProps &&
            error(
              "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
              name,
              name
            ),
            instance.defaultProps &&
              error(
                "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
                name,
                name
              ),
            typeof instance.getSnapshotBeforeUpdate == "function" &&
              typeof instance.componentDidUpdate != "function" &&
              !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor) &&
              (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor),
              error(
                "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
                getComponentName(ctor)
              )),
            typeof instance.getDerivedStateFromProps == "function" &&
              error(
                "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                name
              ),
            typeof instance.getDerivedStateFromError == "function" &&
              error(
                "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                name
              ),
            typeof ctor.getSnapshotBeforeUpdate == "function" &&
              error(
                "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
                name
              );
          var _state = instance.state;
          _state &&
            (typeof _state != "object" || isArray(_state)) &&
            error("%s.state: must be set to an object or null", name),
            typeof instance.getChildContext == "function" &&
              typeof ctor.childContextTypes != "object" &&
              error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
        }
      }
      function adoptClassInstance(workInProgress2, instance) {
        (instance.updater = classComponentUpdater),
          (workInProgress2.stateNode = instance),
          set(instance, workInProgress2),
          (instance._reactInternalInstance = fakeInternalInstance);
      }
      function constructClassInstance(workInProgress2, ctor, props) {
        var isLegacyContextConsumer = !1,
          unmaskedContext = emptyContextObject,
          context = emptyContextObject,
          contextType = ctor.contextType;
        if ("contextType" in ctor) {
          var isValid =
            contextType === null ||
            (contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0);
          if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
            didWarnAboutInvalidateContextType.add(ctor);
            var addendum = "";
            contextType === void 0
              ? (addendum =
                  " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.")
              : typeof contextType != "object"
              ? (addendum = " However, it is set to a " + typeof contextType + ".")
              : contextType.$$typeof === REACT_PROVIDER_TYPE
              ? (addendum = " Did you accidentally pass the Context.Provider instead?")
              : contextType._context !== void 0
              ? (addendum = " Did you accidentally pass the Context.Consumer instead?")
              : (addendum =
                  " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}."),
              error(
                "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
                getComponentName(ctor) || "Component",
                addendum
              );
          }
        }
        if (typeof contextType == "object" && contextType !== null) context = readContext(contextType);
        else {
          unmaskedContext = getUnmaskedContext(workInProgress2, ctor, !0);
          var contextTypes = ctor.contextTypes;
          (isLegacyContextConsumer = contextTypes != null),
            (context = isLegacyContextConsumer
              ? getMaskedContext(workInProgress2, unmaskedContext)
              : emptyContextObject);
        }
        workInProgress2.mode & StrictMode && new ctor(props, context);
        var instance = new ctor(props, context),
          state = (workInProgress2.memoizedState =
            instance.state !== null && instance.state !== void 0 ? instance.state : null);
        adoptClassInstance(workInProgress2, instance);
        {
          if (typeof ctor.getDerivedStateFromProps == "function" && state === null) {
            var componentName = getComponentName(ctor) || "Component";
            didWarnAboutUninitializedState.has(componentName) ||
              (didWarnAboutUninitializedState.add(componentName),
              error(
                "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                componentName,
                instance.state === null ? "null" : "undefined",
                componentName
              ));
          }
          if (
            typeof ctor.getDerivedStateFromProps == "function" ||
            typeof instance.getSnapshotBeforeUpdate == "function"
          ) {
            var foundWillMountName = null,
              foundWillReceivePropsName = null,
              foundWillUpdateName = null;
            if (
              (typeof instance.componentWillMount == "function" &&
              instance.componentWillMount.__suppressDeprecationWarning !== !0
                ? (foundWillMountName = "componentWillMount")
                : typeof instance.UNSAFE_componentWillMount == "function" &&
                  (foundWillMountName = "UNSAFE_componentWillMount"),
              typeof instance.componentWillReceiveProps == "function" &&
              instance.componentWillReceiveProps.__suppressDeprecationWarning !== !0
                ? (foundWillReceivePropsName = "componentWillReceiveProps")
                : typeof instance.UNSAFE_componentWillReceiveProps == "function" &&
                  (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps"),
              typeof instance.componentWillUpdate == "function" &&
              instance.componentWillUpdate.__suppressDeprecationWarning !== !0
                ? (foundWillUpdateName = "componentWillUpdate")
                : typeof instance.UNSAFE_componentWillUpdate == "function" &&
                  (foundWillUpdateName = "UNSAFE_componentWillUpdate"),
              foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null)
            ) {
              var _componentName = getComponentName(ctor) || "Component",
                newApiName =
                  typeof ctor.getDerivedStateFromProps == "function"
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
              didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName) ||
                (didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName),
                error(
                  `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-unsafe-component-lifecycles`,
                  _componentName,
                  newApiName,
                  foundWillMountName !== null
                    ? `
  ` + foundWillMountName
                    : "",
                  foundWillReceivePropsName !== null
                    ? `
  ` + foundWillReceivePropsName
                    : "",
                  foundWillUpdateName !== null
                    ? `
  ` + foundWillUpdateName
                    : ""
                ));
            }
          }
        }
        return isLegacyContextConsumer && cacheContext(workInProgress2, unmaskedContext, context), instance;
      }
      function callComponentWillMount(workInProgress2, instance) {
        startPhaseTimer(workInProgress2, "componentWillMount");
        var oldState = instance.state;
        typeof instance.componentWillMount == "function" && instance.componentWillMount(),
          typeof instance.UNSAFE_componentWillMount == "function" && instance.UNSAFE_componentWillMount(),
          stopPhaseTimer(),
          oldState !== instance.state &&
            (error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              getComponentName(workInProgress2.type) || "Component"
            ),
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null));
      }
      function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
        var oldState = instance.state;
        if (
          (startPhaseTimer(workInProgress2, "componentWillReceiveProps"),
          typeof instance.componentWillReceiveProps == "function" &&
            instance.componentWillReceiveProps(newProps, nextContext),
          typeof instance.UNSAFE_componentWillReceiveProps == "function" &&
            instance.UNSAFE_componentWillReceiveProps(newProps, nextContext),
          stopPhaseTimer(),
          instance.state !== oldState)
        ) {
          {
            var componentName = getComponentName(workInProgress2.type) || "Component";
            didWarnAboutStateAssignmentForComponent.has(componentName) ||
              (didWarnAboutStateAssignmentForComponent.add(componentName),
              error(
                "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                componentName
              ));
          }
          classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
      }
      function mountClassInstance(workInProgress2, ctor, newProps, renderExpirationTime2) {
        checkClassInstance(workInProgress2, ctor, newProps);
        var instance = workInProgress2.stateNode;
        (instance.props = newProps),
          (instance.state = workInProgress2.memoizedState),
          (instance.refs = emptyRefsObject),
          initializeUpdateQueue(workInProgress2);
        var contextType = ctor.contextType;
        if (typeof contextType == "object" && contextType !== null) instance.context = readContext(contextType);
        else {
          var unmaskedContext = getUnmaskedContext(workInProgress2, ctor, !0);
          instance.context = getMaskedContext(workInProgress2, unmaskedContext);
        }
        {
          if (instance.state === newProps) {
            var componentName = getComponentName(ctor) || "Component";
            didWarnAboutDirectlyAssigningPropsToState.has(componentName) ||
              (didWarnAboutDirectlyAssigningPropsToState.add(componentName),
              error(
                "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                componentName
              ));
          }
          workInProgress2.mode & StrictMode &&
            ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, instance),
            ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress2, instance);
        }
        processUpdateQueue(workInProgress2, newProps, instance, renderExpirationTime2),
          (instance.state = workInProgress2.memoizedState);
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        typeof getDerivedStateFromProps == "function" &&
          (applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps),
          (instance.state = workInProgress2.memoizedState)),
          typeof ctor.getDerivedStateFromProps != "function" &&
            typeof instance.getSnapshotBeforeUpdate != "function" &&
            (typeof instance.UNSAFE_componentWillMount == "function" ||
              typeof instance.componentWillMount == "function") &&
            (callComponentWillMount(workInProgress2, instance),
            processUpdateQueue(workInProgress2, newProps, instance, renderExpirationTime2),
            (instance.state = workInProgress2.memoizedState)),
          typeof instance.componentDidMount == "function" && (workInProgress2.effectTag |= Update);
      }
      function resumeMountClassInstance(workInProgress2, ctor, newProps, renderExpirationTime2) {
        var instance = workInProgress2.stateNode,
          oldProps = workInProgress2.memoizedProps;
        instance.props = oldProps;
        var oldContext = instance.context,
          contextType = ctor.contextType,
          nextContext = emptyContextObject;
        if (typeof contextType == "object" && contextType !== null) nextContext = readContext(contextType);
        else {
          var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, !0);
          nextContext = getMaskedContext(workInProgress2, nextLegacyUnmaskedContext);
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps,
          hasNewLifecycles =
            typeof getDerivedStateFromProps == "function" || typeof instance.getSnapshotBeforeUpdate == "function";
        !hasNewLifecycles &&
          (typeof instance.UNSAFE_componentWillReceiveProps == "function" ||
            typeof instance.componentWillReceiveProps == "function") &&
          (oldProps !== newProps || oldContext !== nextContext) &&
          callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext),
          resetHasForceUpdateBeforeProcessing();
        var oldState = workInProgress2.memoizedState,
          newState = (instance.state = oldState);
        if (
          (processUpdateQueue(workInProgress2, newProps, instance, renderExpirationTime2),
          (newState = workInProgress2.memoizedState),
          oldProps === newProps &&
            oldState === newState &&
            !hasContextChanged() &&
            !checkHasForceUpdateAfterProcessing())
        )
          return typeof instance.componentDidMount == "function" && (workInProgress2.effectTag |= Update), !1;
        typeof getDerivedStateFromProps == "function" &&
          (applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps),
          (newState = workInProgress2.memoizedState));
        var shouldUpdate =
          checkHasForceUpdateAfterProcessing() ||
          checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
        return (
          shouldUpdate
            ? (!hasNewLifecycles &&
                (typeof instance.UNSAFE_componentWillMount == "function" ||
                  typeof instance.componentWillMount == "function") &&
                (startPhaseTimer(workInProgress2, "componentWillMount"),
                typeof instance.componentWillMount == "function" && instance.componentWillMount(),
                typeof instance.UNSAFE_componentWillMount == "function" && instance.UNSAFE_componentWillMount(),
                stopPhaseTimer()),
              typeof instance.componentDidMount == "function" && (workInProgress2.effectTag |= Update))
            : (typeof instance.componentDidMount == "function" && (workInProgress2.effectTag |= Update),
              (workInProgress2.memoizedProps = newProps),
              (workInProgress2.memoizedState = newState)),
          (instance.props = newProps),
          (instance.state = newState),
          (instance.context = nextContext),
          shouldUpdate
        );
      }
      function updateClassInstance(current2, workInProgress2, ctor, newProps, renderExpirationTime2) {
        var instance = workInProgress2.stateNode;
        cloneUpdateQueue(current2, workInProgress2);
        var oldProps = workInProgress2.memoizedProps;
        instance.props =
          workInProgress2.type === workInProgress2.elementType
            ? oldProps
            : resolveDefaultProps(workInProgress2.type, oldProps);
        var oldContext = instance.context,
          contextType = ctor.contextType,
          nextContext = emptyContextObject;
        if (typeof contextType == "object" && contextType !== null) nextContext = readContext(contextType);
        else {
          var nextUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, !0);
          nextContext = getMaskedContext(workInProgress2, nextUnmaskedContext);
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps,
          hasNewLifecycles =
            typeof getDerivedStateFromProps == "function" || typeof instance.getSnapshotBeforeUpdate == "function";
        !hasNewLifecycles &&
          (typeof instance.UNSAFE_componentWillReceiveProps == "function" ||
            typeof instance.componentWillReceiveProps == "function") &&
          (oldProps !== newProps || oldContext !== nextContext) &&
          callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext),
          resetHasForceUpdateBeforeProcessing();
        var oldState = workInProgress2.memoizedState,
          newState = (instance.state = oldState);
        if (
          (processUpdateQueue(workInProgress2, newProps, instance, renderExpirationTime2),
          (newState = workInProgress2.memoizedState),
          oldProps === newProps &&
            oldState === newState &&
            !hasContextChanged() &&
            !checkHasForceUpdateAfterProcessing())
        )
          return (
            typeof instance.componentDidUpdate == "function" &&
              (oldProps !== current2.memoizedProps || oldState !== current2.memoizedState) &&
              (workInProgress2.effectTag |= Update),
            typeof instance.getSnapshotBeforeUpdate == "function" &&
              (oldProps !== current2.memoizedProps || oldState !== current2.memoizedState) &&
              (workInProgress2.effectTag |= Snapshot),
            !1
          );
        typeof getDerivedStateFromProps == "function" &&
          (applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps),
          (newState = workInProgress2.memoizedState));
        var shouldUpdate =
          checkHasForceUpdateAfterProcessing() ||
          checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
        return (
          shouldUpdate
            ? (!hasNewLifecycles &&
                (typeof instance.UNSAFE_componentWillUpdate == "function" ||
                  typeof instance.componentWillUpdate == "function") &&
                (startPhaseTimer(workInProgress2, "componentWillUpdate"),
                typeof instance.componentWillUpdate == "function" &&
                  instance.componentWillUpdate(newProps, newState, nextContext),
                typeof instance.UNSAFE_componentWillUpdate == "function" &&
                  instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext),
                stopPhaseTimer()),
              typeof instance.componentDidUpdate == "function" && (workInProgress2.effectTag |= Update),
              typeof instance.getSnapshotBeforeUpdate == "function" && (workInProgress2.effectTag |= Snapshot))
            : (typeof instance.componentDidUpdate == "function" &&
                (oldProps !== current2.memoizedProps || oldState !== current2.memoizedState) &&
                (workInProgress2.effectTag |= Update),
              typeof instance.getSnapshotBeforeUpdate == "function" &&
                (oldProps !== current2.memoizedProps || oldState !== current2.memoizedState) &&
                (workInProgress2.effectTag |= Snapshot),
              (workInProgress2.memoizedProps = newProps),
              (workInProgress2.memoizedState = newState)),
          (instance.props = newProps),
          (instance.state = newState),
          (instance.context = nextContext),
          shouldUpdate
        );
      }
      var didWarnAboutMaps,
        didWarnAboutGenerators,
        didWarnAboutStringRefs,
        ownerHasKeyUseWarning,
        ownerHasFunctionTypeWarning,
        warnForMissingKey = function (child) {};
      (didWarnAboutMaps = !1),
        (didWarnAboutGenerators = !1),
        (didWarnAboutStringRefs = {}),
        (ownerHasKeyUseWarning = {}),
        (ownerHasFunctionTypeWarning = {}),
        (warnForMissingKey = function (child) {
          if (
            !(child === null || typeof child != "object") &&
            !(!child._store || child._store.validated || child.key != null)
          ) {
            if (typeof child._store != "object")
              throw Error(
                "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
              );
            child._store.validated = !0;
            var currentComponentErrorInfo =
              'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.' +
              getCurrentFiberStackInDev();
            ownerHasKeyUseWarning[currentComponentErrorInfo] ||
              ((ownerHasKeyUseWarning[currentComponentErrorInfo] = !0),
              error(
                'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'
              ));
          }
        });
      var isArray$1 = Array.isArray;
      function coerceRef(returnFiber, current2, element) {
        var mixedRef = element.ref;
        if (mixedRef !== null && typeof mixedRef != "function" && typeof mixedRef != "object") {
          if (
            (returnFiber.mode & StrictMode || warnAboutStringRefs) &&
            !(element._owner && element._self && element._owner.stateNode !== element._self)
          ) {
            var componentName = getComponentName(returnFiber.type) || "Component";
            didWarnAboutStringRefs[componentName] ||
              (error(
                'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s',
                mixedRef,
                getStackByFiberInDevAndProd(returnFiber)
              ),
              (didWarnAboutStringRefs[componentName] = !0));
          }
          if (element._owner) {
            var owner = element._owner,
              inst;
            if (owner) {
              var ownerFiber = owner;
              if (ownerFiber.tag !== ClassComponent)
                throw Error(
                  "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref"
                );
              inst = ownerFiber.stateNode;
            }
            if (!inst)
              throw Error(
                "Missing owner for string ref " +
                  mixedRef +
                  ". This error is likely caused by a bug in React. Please file an issue."
              );
            var stringRef = "" + mixedRef;
            if (
              current2 !== null &&
              current2.ref !== null &&
              typeof current2.ref == "function" &&
              current2.ref._stringRef === stringRef
            )
              return current2.ref;
            var ref = function (value) {
              var refs = inst.refs;
              refs === emptyRefsObject && (refs = inst.refs = {}),
                value === null ? delete refs[stringRef] : (refs[stringRef] = value);
            };
            return (ref._stringRef = stringRef), ref;
          } else {
            if (typeof mixedRef != "string")
              throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
            if (!element._owner)
              throw Error(
                "Element ref was specified as a string (" +
                  mixedRef +
                  `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://fb.me/react-refs-must-have-owner for more information.`
              );
          }
        }
        return mixedRef;
      }
      function throwOnInvalidObjectType(returnFiber, newChild) {
        if (returnFiber.type !== "textarea") {
          var addendum = "";
          throw (
            ((addendum =
              " If you meant to render a collection of children, use an array instead." + getCurrentFiberStackInDev()),
            Error(
              "Objects are not valid as a React child (found: " +
                (Object.prototype.toString.call(newChild) === "[object Object]"
                  ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
                  : newChild) +
                ")." +
                addendum
            ))
          );
        }
      }
      function warnOnFunctionType() {
        {
          var currentComponentErrorInfo =
            "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it." +
            getCurrentFiberStackInDev();
          if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) return;
          (ownerHasFunctionTypeWarning[currentComponentErrorInfo] = !0),
            error(
              "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."
            );
        }
      }
      function ChildReconciler(shouldTrackSideEffects) {
        function deleteChild(returnFiber, childToDelete) {
          if (shouldTrackSideEffects) {
            var last = returnFiber.lastEffect;
            last !== null
              ? ((last.nextEffect = childToDelete), (returnFiber.lastEffect = childToDelete))
              : (returnFiber.firstEffect = returnFiber.lastEffect = childToDelete),
              (childToDelete.nextEffect = null),
              (childToDelete.effectTag = Deletion);
          }
        }
        function deleteRemainingChildren(returnFiber, currentFirstChild) {
          if (!shouldTrackSideEffects) return null;
          for (var childToDelete = currentFirstChild; childToDelete !== null; )
            deleteChild(returnFiber, childToDelete), (childToDelete = childToDelete.sibling);
          return null;
        }
        function mapRemainingChildren(returnFiber, currentFirstChild) {
          for (var existingChildren = new Map(), existingChild = currentFirstChild; existingChild !== null; )
            existingChild.key !== null
              ? existingChildren.set(existingChild.key, existingChild)
              : existingChildren.set(existingChild.index, existingChild),
              (existingChild = existingChild.sibling);
          return existingChildren;
        }
        function useFiber(fiber, pendingProps) {
          var clone = createWorkInProgress(fiber, pendingProps);
          return (clone.index = 0), (clone.sibling = null), clone;
        }
        function placeChild(newFiber, lastPlacedIndex, newIndex) {
          if (((newFiber.index = newIndex), !shouldTrackSideEffects)) return lastPlacedIndex;
          var current2 = newFiber.alternate;
          if (current2 !== null) {
            var oldIndex = current2.index;
            return oldIndex < lastPlacedIndex ? ((newFiber.effectTag = Placement), lastPlacedIndex) : oldIndex;
          } else return (newFiber.effectTag = Placement), lastPlacedIndex;
        }
        function placeSingleChild(newFiber) {
          return shouldTrackSideEffects && newFiber.alternate === null && (newFiber.effectTag = Placement), newFiber;
        }
        function updateTextNode(returnFiber, current2, textContent, expirationTime) {
          if (current2 === null || current2.tag !== HostText) {
            var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
            return (created.return = returnFiber), created;
          } else {
            var existing = useFiber(current2, textContent);
            return (existing.return = returnFiber), existing;
          }
        }
        function updateElement(returnFiber, current2, element, expirationTime) {
          if (
            current2 !== null &&
            (current2.elementType === element.type || isCompatibleFamilyForHotReloading(current2, element))
          ) {
            var existing = useFiber(current2, element.props);
            return (
              (existing.ref = coerceRef(returnFiber, current2, element)),
              (existing.return = returnFiber),
              (existing._debugSource = element._source),
              (existing._debugOwner = element._owner),
              existing
            );
          }
          var created = createFiberFromElement(element, returnFiber.mode, expirationTime);
          return (created.ref = coerceRef(returnFiber, current2, element)), (created.return = returnFiber), created;
        }
        function updatePortal(returnFiber, current2, portal, expirationTime) {
          if (
            current2 === null ||
            current2.tag !== HostPortal ||
            current2.stateNode.containerInfo !== portal.containerInfo ||
            current2.stateNode.implementation !== portal.implementation
          ) {
            var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
            return (created.return = returnFiber), created;
          } else {
            var existing = useFiber(current2, portal.children || []);
            return (existing.return = returnFiber), existing;
          }
        }
        function updateFragment2(returnFiber, current2, fragment, expirationTime, key) {
          if (current2 === null || current2.tag !== Fragment) {
            var created = createFiberFromFragment(fragment, returnFiber.mode, expirationTime, key);
            return (created.return = returnFiber), created;
          } else {
            var existing = useFiber(current2, fragment);
            return (existing.return = returnFiber), existing;
          }
        }
        function createChild(returnFiber, newChild, expirationTime) {
          if (typeof newChild == "string" || typeof newChild == "number") {
            var created = createFiberFromText("" + newChild, returnFiber.mode, expirationTime);
            return (created.return = returnFiber), created;
          }
          if (typeof newChild == "object" && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var _created = createFiberFromElement(newChild, returnFiber.mode, expirationTime);
                return (
                  (_created.ref = coerceRef(returnFiber, null, newChild)), (_created.return = returnFiber), _created
                );
              }
              case REACT_PORTAL_TYPE: {
                var _created2 = createFiberFromPortal(newChild, returnFiber.mode, expirationTime);
                return (_created2.return = returnFiber), _created2;
              }
            }
            if (isArray$1(newChild) || getIteratorFn(newChild)) {
              var _created3 = createFiberFromFragment(newChild, returnFiber.mode, expirationTime, null);
              return (_created3.return = returnFiber), _created3;
            }
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          return typeof newChild == "function" && warnOnFunctionType(), null;
        }
        function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
          var key = oldFiber !== null ? oldFiber.key : null;
          if (typeof newChild == "string" || typeof newChild == "number")
            return key !== null ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, expirationTime);
          if (typeof newChild == "object" && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return newChild.key === key
                  ? newChild.type === REACT_FRAGMENT_TYPE
                    ? updateFragment2(returnFiber, oldFiber, newChild.props.children, expirationTime, key)
                    : updateElement(returnFiber, oldFiber, newChild, expirationTime)
                  : null;
              case REACT_PORTAL_TYPE:
                return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, expirationTime) : null;
            }
            if (isArray$1(newChild) || getIteratorFn(newChild))
              return key !== null ? null : updateFragment2(returnFiber, oldFiber, newChild, expirationTime, null);
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          return typeof newChild == "function" && warnOnFunctionType(), null;
        }
        function updateFromMap(existingChildren, returnFiber, newIdx, newChild, expirationTime) {
          if (typeof newChild == "string" || typeof newChild == "number") {
            var matchedFiber = existingChildren.get(newIdx) || null;
            return updateTextNode(returnFiber, matchedFiber, "" + newChild, expirationTime);
          }
          if (typeof newChild == "object" && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                return newChild.type === REACT_FRAGMENT_TYPE
                  ? updateFragment2(returnFiber, _matchedFiber, newChild.props.children, expirationTime, newChild.key)
                  : updateElement(returnFiber, _matchedFiber, newChild, expirationTime);
              }
              case REACT_PORTAL_TYPE: {
                var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                return updatePortal(returnFiber, _matchedFiber2, newChild, expirationTime);
              }
            }
            if (isArray$1(newChild) || getIteratorFn(newChild)) {
              var _matchedFiber3 = existingChildren.get(newIdx) || null;
              return updateFragment2(returnFiber, _matchedFiber3, newChild, expirationTime, null);
            }
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          return typeof newChild == "function" && warnOnFunctionType(), null;
        }
        function warnOnInvalidKey(child, knownKeys) {
          {
            if (typeof child != "object" || child === null) return knownKeys;
            switch (child.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                warnForMissingKey(child);
                var key = child.key;
                if (typeof key != "string") break;
                if (knownKeys === null) {
                  (knownKeys = new Set()), knownKeys.add(key);
                  break;
                }
                if (!knownKeys.has(key)) {
                  knownKeys.add(key);
                  break;
                }
                error(
                  "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",
                  key
                );
                break;
            }
          }
          return knownKeys;
        }
        function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime) {
          for (var knownKeys = null, i = 0; i < newChildren.length; i++) {
            var child = newChildren[i];
            knownKeys = warnOnInvalidKey(child, knownKeys);
          }
          for (
            var resultingFirstChild = null,
              previousNewFiber = null,
              oldFiber = currentFirstChild,
              lastPlacedIndex = 0,
              newIdx = 0,
              nextOldFiber = null;
            oldFiber !== null && newIdx < newChildren.length;
            newIdx++
          ) {
            oldFiber.index > newIdx
              ? ((nextOldFiber = oldFiber), (oldFiber = null))
              : (nextOldFiber = oldFiber.sibling);
            var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);
            if (newFiber === null) {
              oldFiber === null && (oldFiber = nextOldFiber);
              break;
            }
            shouldTrackSideEffects && oldFiber && newFiber.alternate === null && deleteChild(returnFiber, oldFiber),
              (lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx)),
              previousNewFiber === null ? (resultingFirstChild = newFiber) : (previousNewFiber.sibling = newFiber),
              (previousNewFiber = newFiber),
              (oldFiber = nextOldFiber);
          }
          if (newIdx === newChildren.length) return deleteRemainingChildren(returnFiber, oldFiber), resultingFirstChild;
          if (oldFiber === null) {
            for (; newIdx < newChildren.length; newIdx++) {
              var _newFiber = createChild(returnFiber, newChildren[newIdx], expirationTime);
              _newFiber !== null &&
                ((lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx)),
                previousNewFiber === null ? (resultingFirstChild = _newFiber) : (previousNewFiber.sibling = _newFiber),
                (previousNewFiber = _newFiber));
            }
            return resultingFirstChild;
          }
          for (
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            newIdx < newChildren.length;
            newIdx++
          ) {
            var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], expirationTime);
            _newFiber2 !== null &&
              (shouldTrackSideEffects &&
                _newFiber2.alternate !== null &&
                existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key),
              (lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx)),
              previousNewFiber === null ? (resultingFirstChild = _newFiber2) : (previousNewFiber.sibling = _newFiber2),
              (previousNewFiber = _newFiber2));
          }
          return (
            shouldTrackSideEffects &&
              existingChildren.forEach(function (child2) {
                return deleteChild(returnFiber, child2);
              }),
            resultingFirstChild
          );
        }
        function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, expirationTime) {
          var iteratorFn = getIteratorFn(newChildrenIterable);
          if (typeof iteratorFn != "function")
            throw Error(
              "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
            );
          {
            typeof Symbol == "function" &&
              newChildrenIterable[Symbol.toStringTag] === "Generator" &&
              (didWarnAboutGenerators ||
                error(
                  "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."
                ),
              (didWarnAboutGenerators = !0)),
              newChildrenIterable.entries === iteratorFn &&
                (didWarnAboutMaps ||
                  error(
                    "Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."
                  ),
                (didWarnAboutMaps = !0));
            var _newChildren = iteratorFn.call(newChildrenIterable);
            if (_newChildren)
              for (var knownKeys = null, _step = _newChildren.next(); !_step.done; _step = _newChildren.next()) {
                var child = _step.value;
                knownKeys = warnOnInvalidKey(child, knownKeys);
              }
          }
          var newChildren = iteratorFn.call(newChildrenIterable);
          if (newChildren == null) throw Error("An iterable object provided no iterator.");
          for (
            var resultingFirstChild = null,
              previousNewFiber = null,
              oldFiber = currentFirstChild,
              lastPlacedIndex = 0,
              newIdx = 0,
              nextOldFiber = null,
              step = newChildren.next();
            oldFiber !== null && !step.done;
            newIdx++, step = newChildren.next()
          ) {
            oldFiber.index > newIdx
              ? ((nextOldFiber = oldFiber), (oldFiber = null))
              : (nextOldFiber = oldFiber.sibling);
            var newFiber = updateSlot(returnFiber, oldFiber, step.value, expirationTime);
            if (newFiber === null) {
              oldFiber === null && (oldFiber = nextOldFiber);
              break;
            }
            shouldTrackSideEffects && oldFiber && newFiber.alternate === null && deleteChild(returnFiber, oldFiber),
              (lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx)),
              previousNewFiber === null ? (resultingFirstChild = newFiber) : (previousNewFiber.sibling = newFiber),
              (previousNewFiber = newFiber),
              (oldFiber = nextOldFiber);
          }
          if (step.done) return deleteRemainingChildren(returnFiber, oldFiber), resultingFirstChild;
          if (oldFiber === null) {
            for (; !step.done; newIdx++, step = newChildren.next()) {
              var _newFiber3 = createChild(returnFiber, step.value, expirationTime);
              _newFiber3 !== null &&
                ((lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx)),
                previousNewFiber === null
                  ? (resultingFirstChild = _newFiber3)
                  : (previousNewFiber.sibling = _newFiber3),
                (previousNewFiber = _newFiber3));
            }
            return resultingFirstChild;
          }
          for (
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            !step.done;
            newIdx++, step = newChildren.next()
          ) {
            var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, expirationTime);
            _newFiber4 !== null &&
              (shouldTrackSideEffects &&
                _newFiber4.alternate !== null &&
                existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key),
              (lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx)),
              previousNewFiber === null ? (resultingFirstChild = _newFiber4) : (previousNewFiber.sibling = _newFiber4),
              (previousNewFiber = _newFiber4));
          }
          return (
            shouldTrackSideEffects &&
              existingChildren.forEach(function (child2) {
                return deleteChild(returnFiber, child2);
              }),
            resultingFirstChild
          );
        }
        function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, expirationTime) {
          if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
            deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
            var existing = useFiber(currentFirstChild, textContent);
            return (existing.return = returnFiber), existing;
          }
          deleteRemainingChildren(returnFiber, currentFirstChild);
          var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
          return (created.return = returnFiber), created;
        }
        function reconcileSingleElement(returnFiber, currentFirstChild, element, expirationTime) {
          for (var key = element.key, child = currentFirstChild; child !== null; ) {
            if (child.key === key) {
              switch (child.tag) {
                case Fragment: {
                  if (element.type === REACT_FRAGMENT_TYPE) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    var existing = useFiber(child, element.props.children);
                    return (
                      (existing.return = returnFiber),
                      (existing._debugSource = element._source),
                      (existing._debugOwner = element._owner),
                      existing
                    );
                  }
                  break;
                }
                case Block:
                default: {
                  if (child.elementType === element.type || isCompatibleFamilyForHotReloading(child, element)) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    var _existing3 = useFiber(child, element.props);
                    return (
                      (_existing3.ref = coerceRef(returnFiber, child, element)),
                      (_existing3.return = returnFiber),
                      (_existing3._debugSource = element._source),
                      (_existing3._debugOwner = element._owner),
                      _existing3
                    );
                  }
                  break;
                }
              }
              deleteRemainingChildren(returnFiber, child);
              break;
            } else deleteChild(returnFiber, child);
            child = child.sibling;
          }
          if (element.type === REACT_FRAGMENT_TYPE) {
            var created = createFiberFromFragment(
              element.props.children,
              returnFiber.mode,
              expirationTime,
              element.key
            );
            return (created.return = returnFiber), created;
          } else {
            var _created4 = createFiberFromElement(element, returnFiber.mode, expirationTime);
            return (
              (_created4.ref = coerceRef(returnFiber, currentFirstChild, element)),
              (_created4.return = returnFiber),
              _created4
            );
          }
        }
        function reconcileSinglePortal(returnFiber, currentFirstChild, portal, expirationTime) {
          for (var key = portal.key, child = currentFirstChild; child !== null; ) {
            if (child.key === key)
              if (
                child.tag === HostPortal &&
                child.stateNode.containerInfo === portal.containerInfo &&
                child.stateNode.implementation === portal.implementation
              ) {
                deleteRemainingChildren(returnFiber, child.sibling);
                var existing = useFiber(child, portal.children || []);
                return (existing.return = returnFiber), existing;
              } else {
                deleteRemainingChildren(returnFiber, child);
                break;
              }
            else deleteChild(returnFiber, child);
            child = child.sibling;
          }
          var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
          return (created.return = returnFiber), created;
        }
        function reconcileChildFibers2(returnFiber, currentFirstChild, newChild, expirationTime) {
          var isUnkeyedTopLevelFragment =
            typeof newChild == "object" &&
            newChild !== null &&
            newChild.type === REACT_FRAGMENT_TYPE &&
            newChild.key === null;
          isUnkeyedTopLevelFragment && (newChild = newChild.props.children);
          var isObject = typeof newChild == "object" && newChild !== null;
          if (isObject)
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return placeSingleChild(
                  reconcileSingleElement(returnFiber, currentFirstChild, newChild, expirationTime)
                );
              case REACT_PORTAL_TYPE:
                return placeSingleChild(
                  reconcileSinglePortal(returnFiber, currentFirstChild, newChild, expirationTime)
                );
            }
          if (typeof newChild == "string" || typeof newChild == "number")
            return placeSingleChild(
              reconcileSingleTextNode(returnFiber, currentFirstChild, "" + newChild, expirationTime)
            );
          if (isArray$1(newChild))
            return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, expirationTime);
          if (getIteratorFn(newChild))
            return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, expirationTime);
          if (
            (isObject && throwOnInvalidObjectType(returnFiber, newChild),
            typeof newChild == "function" && warnOnFunctionType(),
            typeof newChild > "u" && !isUnkeyedTopLevelFragment)
          )
            switch (returnFiber.tag) {
              case ClassComponent: {
                var instance = returnFiber.stateNode;
                if (instance.render._isMockFunction) break;
              }
              case FunctionComponent: {
                var Component = returnFiber.type;
                throw Error(
                  (Component.displayName || Component.name || "Component") +
                    "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null."
                );
              }
            }
          return deleteRemainingChildren(returnFiber, currentFirstChild);
        }
        return reconcileChildFibers2;
      }
      var reconcileChildFibers = ChildReconciler(!0),
        mountChildFibers = ChildReconciler(!1);
      function cloneChildFibers(current2, workInProgress2) {
        if (!(current2 === null || workInProgress2.child === current2.child))
          throw Error("Resuming work not yet implemented.");
        if (workInProgress2.child !== null) {
          var currentChild = workInProgress2.child,
            newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
          for (workInProgress2.child = newChild, newChild.return = workInProgress2; currentChild.sibling !== null; )
            (currentChild = currentChild.sibling),
              (newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps)),
              (newChild.return = workInProgress2);
          newChild.sibling = null;
        }
      }
      function resetChildFibers(workInProgress2, renderExpirationTime2) {
        for (var child = workInProgress2.child; child !== null; )
          resetWorkInProgress(child, renderExpirationTime2), (child = child.sibling);
      }
      var NO_CONTEXT = {},
        contextStackCursor$1 = createCursor(NO_CONTEXT),
        contextFiberStackCursor = createCursor(NO_CONTEXT),
        rootInstanceStackCursor = createCursor(NO_CONTEXT);
      function requiredContext(c) {
        if (c === NO_CONTEXT)
          throw Error(
            "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
          );
        return c;
      }
      function getRootHostContainer() {
        var rootInstance = requiredContext(rootInstanceStackCursor.current);
        return rootInstance;
      }
      function pushHostContainer(fiber, nextRootInstance) {
        push(rootInstanceStackCursor, nextRootInstance, fiber),
          push(contextFiberStackCursor, fiber, fiber),
          push(contextStackCursor$1, NO_CONTEXT, fiber);
        var nextRootContext = getRootHostContext(nextRootInstance);
        pop(contextStackCursor$1, fiber), push(contextStackCursor$1, nextRootContext, fiber);
      }
      function popHostContainer(fiber) {
        pop(contextStackCursor$1, fiber), pop(contextFiberStackCursor, fiber), pop(rootInstanceStackCursor, fiber);
      }
      function getHostContext() {
        var context = requiredContext(contextStackCursor$1.current);
        return context;
      }
      function pushHostContext(fiber) {
        var rootInstance = requiredContext(rootInstanceStackCursor.current),
          context = requiredContext(contextStackCursor$1.current),
          nextContext = getChildHostContext(context, fiber.type);
        context !== nextContext &&
          (push(contextFiberStackCursor, fiber, fiber), push(contextStackCursor$1, nextContext, fiber));
      }
      function popHostContext(fiber) {
        contextFiberStackCursor.current === fiber &&
          (pop(contextStackCursor$1, fiber), pop(contextFiberStackCursor, fiber));
      }
      var DefaultSuspenseContext = 0,
        SubtreeSuspenseContextMask = 1,
        InvisibleParentSuspenseContext = 1,
        ForceSuspenseFallback = 2,
        suspenseStackCursor = createCursor(DefaultSuspenseContext);
      function hasSuspenseContext(parentContext, flag) {
        return (parentContext & flag) !== 0;
      }
      function setDefaultShallowSuspenseContext(parentContext) {
        return parentContext & SubtreeSuspenseContextMask;
      }
      function setShallowSuspenseContext(parentContext, shallowContext) {
        return (parentContext & SubtreeSuspenseContextMask) | shallowContext;
      }
      function addSubtreeSuspenseContext(parentContext, subtreeContext) {
        return parentContext | subtreeContext;
      }
      function pushSuspenseContext(fiber, newContext) {
        push(suspenseStackCursor, newContext, fiber);
      }
      function popSuspenseContext(fiber) {
        pop(suspenseStackCursor, fiber);
      }
      function shouldCaptureSuspense(workInProgress2, hasInvisibleParent) {
        var nextState = workInProgress2.memoizedState;
        if (nextState !== null) return nextState.dehydrated !== null;
        var props = workInProgress2.memoizedProps;
        return props.fallback === void 0 ? !1 : props.unstable_avoidThisFallback !== !0 ? !0 : !hasInvisibleParent;
      }
      function findFirstSuspended(row) {
        for (var node = row; node !== null; ) {
          if (node.tag === SuspenseComponent) {
            var state = node.memoizedState;
            if (state !== null) {
              var dehydrated = state.dehydrated;
              if (
                dehydrated === null ||
                isSuspenseInstancePending(dehydrated) ||
                isSuspenseInstanceFallback(dehydrated)
              )
                return node;
            }
          } else if (node.tag === SuspenseListComponent && node.memoizedProps.revealOrder !== void 0) {
            var didSuspend = (node.effectTag & DidCapture) !== NoEffect;
            if (didSuspend) return node;
          } else if (node.child !== null) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === row) return null;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === row) return null;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
        return null;
      }
      function createDeprecatedResponderListener(responder, props) {
        var eventResponderListener = { responder, props };
        return Object.freeze(eventResponderListener), eventResponderListener;
      }
      var HasEffect = 1,
        Layout = 2,
        Passive$1 = 4,
        ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher,
        ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig,
        didWarnAboutMismatchedHooksForComponent;
      didWarnAboutMismatchedHooksForComponent = new Set();
      var renderExpirationTime = NoWork,
        currentlyRenderingFiber$1 = null,
        currentHook = null,
        workInProgressHook = null,
        didScheduleRenderPhaseUpdate = !1,
        RE_RENDER_LIMIT = 25,
        currentHookNameInDev = null,
        hookTypesDev = null,
        hookTypesUpdateIndexDev = -1,
        ignorePreviousDependencies = !1;
      function mountHookTypesDev() {
        {
          var hookName = currentHookNameInDev;
          hookTypesDev === null ? (hookTypesDev = [hookName]) : hookTypesDev.push(hookName);
        }
      }
      function updateHookTypesDev() {
        {
          var hookName = currentHookNameInDev;
          hookTypesDev !== null &&
            (hookTypesUpdateIndexDev++,
            hookTypesDev[hookTypesUpdateIndexDev] !== hookName && warnOnHookMismatchInDev(hookName));
        }
      }
      function checkDepsAreArrayDev(deps) {
        deps != null &&
          !Array.isArray(deps) &&
          error(
            "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
            currentHookNameInDev,
            typeof deps
          );
      }
      function warnOnHookMismatchInDev(currentHookName) {
        {
          var componentName = getComponentName(currentlyRenderingFiber$1.type);
          if (
            !didWarnAboutMismatchedHooksForComponent.has(componentName) &&
            (didWarnAboutMismatchedHooksForComponent.add(componentName), hookTypesDev !== null)
          ) {
            for (var table = "", secondColumnStart = 30, i = 0; i <= hookTypesUpdateIndexDev; i++) {
              for (
                var oldHookName = hookTypesDev[i],
                  newHookName = i === hookTypesUpdateIndexDev ? currentHookName : oldHookName,
                  row = i + 1 + ". " + oldHookName;
                row.length < secondColumnStart;

              )
                row += " ";
              (row +=
                newHookName +
                `
`),
                (table += row);
            }
            error(
              `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
              componentName,
              table
            );
          }
        }
      }
      function throwInvalidHookError() {
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.`);
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (ignorePreviousDependencies) return !1;
        if (prevDeps === null)
          return (
            error(
              "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
              currentHookNameInDev
            ),
            !1
          );
        nextDeps.length !== prevDeps.length &&
          error(
            `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
            currentHookNameInDev,
            "[" + prevDeps.join(", ") + "]",
            "[" + nextDeps.join(", ") + "]"
          );
        for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
          if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
        return !0;
      }
      function renderWithHooks(current2, workInProgress2, Component, props, secondArg, nextRenderExpirationTime) {
        (renderExpirationTime = nextRenderExpirationTime),
          (currentlyRenderingFiber$1 = workInProgress2),
          (hookTypesDev = current2 !== null ? current2._debugHookTypes : null),
          (hookTypesUpdateIndexDev = -1),
          (ignorePreviousDependencies = current2 !== null && current2.type !== workInProgress2.type),
          (workInProgress2.memoizedState = null),
          (workInProgress2.updateQueue = null),
          (workInProgress2.expirationTime = NoWork),
          current2 !== null && current2.memoizedState !== null
            ? (ReactCurrentDispatcher.current = HooksDispatcherOnUpdateInDEV)
            : hookTypesDev !== null
            ? (ReactCurrentDispatcher.current = HooksDispatcherOnMountWithHookTypesInDEV)
            : (ReactCurrentDispatcher.current = HooksDispatcherOnMountInDEV);
        var children = Component(props, secondArg);
        if (workInProgress2.expirationTime === renderExpirationTime) {
          var numberOfReRenders = 0;
          do {
            if (((workInProgress2.expirationTime = NoWork), !(numberOfReRenders < RE_RENDER_LIMIT)))
              throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
            (numberOfReRenders += 1),
              (ignorePreviousDependencies = !1),
              (currentHook = null),
              (workInProgressHook = null),
              (workInProgress2.updateQueue = null),
              (hookTypesUpdateIndexDev = -1),
              (ReactCurrentDispatcher.current = HooksDispatcherOnRerenderInDEV),
              (children = Component(props, secondArg));
          } while (workInProgress2.expirationTime === renderExpirationTime);
        }
        (ReactCurrentDispatcher.current = ContextOnlyDispatcher), (workInProgress2._debugHookTypes = hookTypesDev);
        var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
        if (
          ((renderExpirationTime = NoWork),
          (currentlyRenderingFiber$1 = null),
          (currentHook = null),
          (workInProgressHook = null),
          (currentHookNameInDev = null),
          (hookTypesDev = null),
          (hookTypesUpdateIndexDev = -1),
          (didScheduleRenderPhaseUpdate = !1),
          didRenderTooFewHooks)
        )
          throw Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
          );
        return children;
      }
      function bailoutHooks(current2, workInProgress2, expirationTime) {
        (workInProgress2.updateQueue = current2.updateQueue),
          (workInProgress2.effectTag &= ~(Passive | Update)),
          current2.expirationTime <= expirationTime && (current2.expirationTime = NoWork);
      }
      function resetHooksAfterThrow() {
        if (((ReactCurrentDispatcher.current = ContextOnlyDispatcher), didScheduleRenderPhaseUpdate))
          for (var hook = currentlyRenderingFiber$1.memoizedState; hook !== null; ) {
            var queue = hook.queue;
            queue !== null && (queue.pending = null), (hook = hook.next);
          }
        (renderExpirationTime = NoWork),
          (currentlyRenderingFiber$1 = null),
          (currentHook = null),
          (workInProgressHook = null),
          (hookTypesDev = null),
          (hookTypesUpdateIndexDev = -1),
          (currentHookNameInDev = null),
          (didScheduleRenderPhaseUpdate = !1);
      }
      function mountWorkInProgressHook() {
        var hook = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return (
          workInProgressHook === null
            ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook)
            : (workInProgressHook = workInProgressHook.next = hook),
          workInProgressHook
        );
      }
      function updateWorkInProgressHook() {
        var nextCurrentHook;
        if (currentHook === null) {
          var current2 = currentlyRenderingFiber$1.alternate;
          current2 !== null ? (nextCurrentHook = current2.memoizedState) : (nextCurrentHook = null);
        } else nextCurrentHook = currentHook.next;
        var nextWorkInProgressHook;
        if (
          (workInProgressHook === null
            ? (nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState)
            : (nextWorkInProgressHook = workInProgressHook.next),
          nextWorkInProgressHook !== null)
        )
          (workInProgressHook = nextWorkInProgressHook),
            (nextWorkInProgressHook = workInProgressHook.next),
            (currentHook = nextCurrentHook);
        else {
          if (nextCurrentHook === null) throw Error("Rendered more hooks than during the previous render.");
          currentHook = nextCurrentHook;
          var newHook = {
            memoizedState: currentHook.memoizedState,
            baseState: currentHook.baseState,
            baseQueue: currentHook.baseQueue,
            queue: currentHook.queue,
            next: null,
          };
          workInProgressHook === null
            ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook)
            : (workInProgressHook = workInProgressHook.next = newHook);
        }
        return workInProgressHook;
      }
      function createFunctionComponentUpdateQueue() {
        return { lastEffect: null };
      }
      function basicStateReducer(state, action) {
        return typeof action == "function" ? action(state) : action;
      }
      function mountReducer(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook(),
          initialState;
        init !== void 0 ? (initialState = init(initialArg)) : (initialState = initialArg),
          (hook.memoizedState = hook.baseState = initialState);
        var queue = (hook.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: reducer,
            lastRenderedState: initialState,
          }),
          dispatch = (queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue));
        return [hook.memoizedState, dispatch];
      }
      function updateReducer(reducer, initialArg, init) {
        var hook = updateWorkInProgressHook(),
          queue = hook.queue;
        if (queue === null) throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
        queue.lastRenderedReducer = reducer;
        var current2 = currentHook,
          baseQueue = current2.baseQueue,
          pendingQueue = queue.pending;
        if (pendingQueue !== null) {
          if (baseQueue !== null) {
            var baseFirst = baseQueue.next,
              pendingFirst = pendingQueue.next;
            (baseQueue.next = pendingFirst), (pendingQueue.next = baseFirst);
          }
          (current2.baseQueue = baseQueue = pendingQueue), (queue.pending = null);
        }
        if (baseQueue !== null) {
          var first = baseQueue.next,
            newState = current2.baseState,
            newBaseState = null,
            newBaseQueueFirst = null,
            newBaseQueueLast = null,
            update = first;
          do {
            var updateExpirationTime = update.expirationTime;
            if (updateExpirationTime < renderExpirationTime) {
              var clone = {
                expirationTime: update.expirationTime,
                suspenseConfig: update.suspenseConfig,
                action: update.action,
                eagerReducer: update.eagerReducer,
                eagerState: update.eagerState,
                next: null,
              };
              newBaseQueueLast === null
                ? ((newBaseQueueFirst = newBaseQueueLast = clone), (newBaseState = newState))
                : (newBaseQueueLast = newBaseQueueLast.next = clone),
                updateExpirationTime > currentlyRenderingFiber$1.expirationTime &&
                  ((currentlyRenderingFiber$1.expirationTime = updateExpirationTime),
                  markUnprocessedUpdateTime(updateExpirationTime));
            } else {
              if (newBaseQueueLast !== null) {
                var _clone = {
                  expirationTime: Sync,
                  suspenseConfig: update.suspenseConfig,
                  action: update.action,
                  eagerReducer: update.eagerReducer,
                  eagerState: update.eagerState,
                  next: null,
                };
                newBaseQueueLast = newBaseQueueLast.next = _clone;
              }
              if (
                (markRenderEventTimeAndConfig(updateExpirationTime, update.suspenseConfig),
                update.eagerReducer === reducer)
              )
                newState = update.eagerState;
              else {
                var action = update.action;
                newState = reducer(newState, action);
              }
            }
            update = update.next;
          } while (update !== null && update !== first);
          newBaseQueueLast === null ? (newBaseState = newState) : (newBaseQueueLast.next = newBaseQueueFirst),
            objectIs(newState, hook.memoizedState) || markWorkInProgressReceivedUpdate(),
            (hook.memoizedState = newState),
            (hook.baseState = newBaseState),
            (hook.baseQueue = newBaseQueueLast),
            (queue.lastRenderedState = newState);
        }
        var dispatch = queue.dispatch;
        return [hook.memoizedState, dispatch];
      }
      function rerenderReducer(reducer, initialArg, init) {
        var hook = updateWorkInProgressHook(),
          queue = hook.queue;
        if (queue === null) throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
        queue.lastRenderedReducer = reducer;
        var dispatch = queue.dispatch,
          lastRenderPhaseUpdate = queue.pending,
          newState = hook.memoizedState;
        if (lastRenderPhaseUpdate !== null) {
          queue.pending = null;
          var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next,
            update = firstRenderPhaseUpdate;
          do {
            var action = update.action;
            (newState = reducer(newState, action)), (update = update.next);
          } while (update !== firstRenderPhaseUpdate);
          objectIs(newState, hook.memoizedState) || markWorkInProgressReceivedUpdate(),
            (hook.memoizedState = newState),
            hook.baseQueue === null && (hook.baseState = newState),
            (queue.lastRenderedState = newState);
        }
        return [newState, dispatch];
      }
      function mountState(initialState) {
        var hook = mountWorkInProgressHook();
        typeof initialState == "function" && (initialState = initialState()),
          (hook.memoizedState = hook.baseState = initialState);
        var queue = (hook.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: basicStateReducer,
            lastRenderedState: initialState,
          }),
          dispatch = (queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue));
        return [hook.memoizedState, dispatch];
      }
      function updateState(initialState) {
        return updateReducer(basicStateReducer);
      }
      function rerenderState(initialState) {
        return rerenderReducer(basicStateReducer);
      }
      function pushEffect(tag, create, destroy, deps) {
        var effect4 = { tag, create, destroy, deps, next: null },
          componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
        if (componentUpdateQueue === null)
          (componentUpdateQueue = createFunctionComponentUpdateQueue()),
            (currentlyRenderingFiber$1.updateQueue = componentUpdateQueue),
            (componentUpdateQueue.lastEffect = effect4.next = effect4);
        else {
          var lastEffect = componentUpdateQueue.lastEffect;
          if (lastEffect === null) componentUpdateQueue.lastEffect = effect4.next = effect4;
          else {
            var firstEffect = lastEffect.next;
            (lastEffect.next = effect4), (effect4.next = firstEffect), (componentUpdateQueue.lastEffect = effect4);
          }
        }
        return effect4;
      }
      function mountRef(initialValue) {
        var hook = mountWorkInProgressHook(),
          ref = { current: initialValue };
        return Object.seal(ref), (hook.memoizedState = ref), ref;
      }
      function updateRef(initialValue) {
        var hook = updateWorkInProgressHook();
        return hook.memoizedState;
      }
      function mountEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
        var hook = mountWorkInProgressHook(),
          nextDeps = deps === void 0 ? null : deps;
        (currentlyRenderingFiber$1.effectTag |= fiberEffectTag),
          (hook.memoizedState = pushEffect(HasEffect | hookEffectTag, create, void 0, nextDeps));
      }
      function updateEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
        var hook = updateWorkInProgressHook(),
          nextDeps = deps === void 0 ? null : deps,
          destroy = void 0;
        if (currentHook !== null) {
          var prevEffect = currentHook.memoizedState;
          if (((destroy = prevEffect.destroy), nextDeps !== null)) {
            var prevDeps = prevEffect.deps;
            if (areHookInputsEqual(nextDeps, prevDeps)) {
              pushEffect(hookEffectTag, create, destroy, nextDeps);
              return;
            }
          }
        }
        (currentlyRenderingFiber$1.effectTag |= fiberEffectTag),
          (hook.memoizedState = pushEffect(HasEffect | hookEffectTag, create, destroy, nextDeps));
      }
      function mountEffect(create, deps) {
        return (
          typeof jest < "u" && warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1),
          mountEffectImpl(Update | Passive, Passive$1, create, deps)
        );
      }
      function updateEffect(create, deps) {
        return (
          typeof jest < "u" && warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1),
          updateEffectImpl(Update | Passive, Passive$1, create, deps)
        );
      }
      function mountLayoutEffect(create, deps) {
        return mountEffectImpl(Update, Layout, create, deps);
      }
      function updateLayoutEffect(create, deps) {
        return updateEffectImpl(Update, Layout, create, deps);
      }
      function imperativeHandleEffect(create, ref) {
        if (typeof ref == "function") {
          var refCallback = ref,
            _inst = create();
          return (
            refCallback(_inst),
            function () {
              refCallback(null);
            }
          );
        } else if (ref != null) {
          var refObject = ref;
          refObject.hasOwnProperty("current") ||
            error(
              "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
              "an object with keys {" + Object.keys(refObject).join(", ") + "}"
            );
          var _inst2 = create();
          return (
            (refObject.current = _inst2),
            function () {
              refObject.current = null;
            }
          );
        }
      }
      function mountImperativeHandle(ref, create, deps) {
        typeof create != "function" &&
          error(
            "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
            create !== null ? typeof create : "null"
          );
        var effectDeps = deps != null ? deps.concat([ref]) : null;
        return mountEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
      }
      function updateImperativeHandle(ref, create, deps) {
        typeof create != "function" &&
          error(
            "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
            create !== null ? typeof create : "null"
          );
        var effectDeps = deps != null ? deps.concat([ref]) : null;
        return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
      }
      function mountDebugValue(value, formatterFn) {}
      var updateDebugValue = mountDebugValue;
      function mountCallback(callback, deps) {
        var hook = mountWorkInProgressHook(),
          nextDeps = deps === void 0 ? null : deps;
        return (hook.memoizedState = [callback, nextDeps]), callback;
      }
      function updateCallback(callback, deps) {
        var hook = updateWorkInProgressHook(),
          nextDeps = deps === void 0 ? null : deps,
          prevState = hook.memoizedState;
        if (prevState !== null && nextDeps !== null) {
          var prevDeps = prevState[1];
          if (areHookInputsEqual(nextDeps, prevDeps)) return prevState[0];
        }
        return (hook.memoizedState = [callback, nextDeps]), callback;
      }
      function mountMemo(nextCreate, deps) {
        var hook = mountWorkInProgressHook(),
          nextDeps = deps === void 0 ? null : deps,
          nextValue = nextCreate();
        return (hook.memoizedState = [nextValue, nextDeps]), nextValue;
      }
      function updateMemo(nextCreate, deps) {
        var hook = updateWorkInProgressHook(),
          nextDeps = deps === void 0 ? null : deps,
          prevState = hook.memoizedState;
        if (prevState !== null && nextDeps !== null) {
          var prevDeps = prevState[1];
          if (areHookInputsEqual(nextDeps, prevDeps)) return prevState[0];
        }
        var nextValue = nextCreate();
        return (hook.memoizedState = [nextValue, nextDeps]), nextValue;
      }
      function mountDeferredValue(value, config) {
        var _mountState = mountState(value),
          prevValue = _mountState[0],
          setValue = _mountState[1];
        return (
          mountEffect(
            function () {
              var previousConfig = ReactCurrentBatchConfig$1.suspense;
              ReactCurrentBatchConfig$1.suspense = config === void 0 ? null : config;
              try {
                setValue(value);
              } finally {
                ReactCurrentBatchConfig$1.suspense = previousConfig;
              }
            },
            [value, config]
          ),
          prevValue
        );
      }
      function updateDeferredValue(value, config) {
        var _updateState = updateState(),
          prevValue = _updateState[0],
          setValue = _updateState[1];
        return (
          updateEffect(
            function () {
              var previousConfig = ReactCurrentBatchConfig$1.suspense;
              ReactCurrentBatchConfig$1.suspense = config === void 0 ? null : config;
              try {
                setValue(value);
              } finally {
                ReactCurrentBatchConfig$1.suspense = previousConfig;
              }
            },
            [value, config]
          ),
          prevValue
        );
      }
      function rerenderDeferredValue(value, config) {
        var _rerenderState = rerenderState(),
          prevValue = _rerenderState[0],
          setValue = _rerenderState[1];
        return (
          updateEffect(
            function () {
              var previousConfig = ReactCurrentBatchConfig$1.suspense;
              ReactCurrentBatchConfig$1.suspense = config === void 0 ? null : config;
              try {
                setValue(value);
              } finally {
                ReactCurrentBatchConfig$1.suspense = previousConfig;
              }
            },
            [value, config]
          ),
          prevValue
        );
      }
      function startTransition(setPending, config, callback) {
        var priorityLevel = getCurrentPriorityLevel();
        runWithPriority$1(priorityLevel < UserBlockingPriority$1 ? UserBlockingPriority$1 : priorityLevel, function () {
          setPending(!0);
        }),
          runWithPriority$1(priorityLevel > NormalPriority ? NormalPriority : priorityLevel, function () {
            var previousConfig = ReactCurrentBatchConfig$1.suspense;
            ReactCurrentBatchConfig$1.suspense = config === void 0 ? null : config;
            try {
              setPending(!1), callback();
            } finally {
              ReactCurrentBatchConfig$1.suspense = previousConfig;
            }
          });
      }
      function mountTransition(config) {
        var _mountState2 = mountState(!1),
          isPending = _mountState2[0],
          setPending = _mountState2[1],
          start2 = mountCallback(startTransition.bind(null, setPending, config), [setPending, config]);
        return [start2, isPending];
      }
      function updateTransition(config) {
        var _updateState2 = updateState(),
          isPending = _updateState2[0],
          setPending = _updateState2[1],
          start2 = updateCallback(startTransition.bind(null, setPending, config), [setPending, config]);
        return [start2, isPending];
      }
      function rerenderTransition(config) {
        var _rerenderState2 = rerenderState(),
          isPending = _rerenderState2[0],
          setPending = _rerenderState2[1],
          start2 = updateCallback(startTransition.bind(null, setPending, config), [setPending, config]);
        return [start2, isPending];
      }
      function dispatchAction(fiber, queue, action) {
        typeof arguments[3] == "function" &&
          error(
            "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
          );
        var currentTime = requestCurrentTimeForUpdate(),
          suspenseConfig = requestCurrentSuspenseConfig(),
          expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig),
          update = { expirationTime, suspenseConfig, action, eagerReducer: null, eagerState: null, next: null };
        update.priority = getCurrentPriorityLevel();
        var pending = queue.pending;
        pending === null ? (update.next = update) : ((update.next = pending.next), (pending.next = update)),
          (queue.pending = update);
        var alternate = fiber.alternate;
        if (fiber === currentlyRenderingFiber$1 || (alternate !== null && alternate === currentlyRenderingFiber$1))
          (didScheduleRenderPhaseUpdate = !0),
            (update.expirationTime = renderExpirationTime),
            (currentlyRenderingFiber$1.expirationTime = renderExpirationTime);
        else {
          if (fiber.expirationTime === NoWork && (alternate === null || alternate.expirationTime === NoWork)) {
            var lastRenderedReducer = queue.lastRenderedReducer;
            if (lastRenderedReducer !== null) {
              var prevDispatcher;
              (prevDispatcher = ReactCurrentDispatcher.current),
                (ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV);
              try {
                var currentState = queue.lastRenderedState,
                  eagerState = lastRenderedReducer(currentState, action);
                if (
                  ((update.eagerReducer = lastRenderedReducer),
                  (update.eagerState = eagerState),
                  objectIs(eagerState, currentState))
                )
                  return;
              } catch {
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            }
          }
          typeof jest < "u" && (warnIfNotScopedWithMatchingAct(fiber), warnIfNotCurrentlyActingUpdatesInDev(fiber)),
            scheduleWork(fiber, expirationTime);
        }
      }
      var ContextOnlyDispatcher = {
          readContext,
          useCallback: throwInvalidHookError,
          useContext: throwInvalidHookError,
          useEffect: throwInvalidHookError,
          useImperativeHandle: throwInvalidHookError,
          useLayoutEffect: throwInvalidHookError,
          useMemo: throwInvalidHookError,
          useReducer: throwInvalidHookError,
          useRef: throwInvalidHookError,
          useState: throwInvalidHookError,
          useDebugValue: throwInvalidHookError,
          useResponder: throwInvalidHookError,
          useDeferredValue: throwInvalidHookError,
          useTransition: throwInvalidHookError,
        },
        HooksDispatcherOnMountInDEV = null,
        HooksDispatcherOnMountWithHookTypesInDEV = null,
        HooksDispatcherOnUpdateInDEV = null,
        HooksDispatcherOnRerenderInDEV = null,
        InvalidNestedHooksDispatcherOnMountInDEV = null,
        InvalidNestedHooksDispatcherOnUpdateInDEV = null,
        InvalidNestedHooksDispatcherOnRerenderInDEV = null;
      {
        var warnInvalidContextAccess = function () {
            error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            );
          },
          warnInvalidHookAccess = function () {
            error(
              "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks"
            );
          };
        (HooksDispatcherOnMountInDEV = {
          readContext: function (context, observedBits) {
            return readContext(context, observedBits);
          },
          useCallback: function (callback, deps) {
            return (
              (currentHookNameInDev = "useCallback"),
              mountHookTypesDev(),
              checkDepsAreArrayDev(deps),
              mountCallback(callback, deps)
            );
          },
          useContext: function (context, observedBits) {
            return (currentHookNameInDev = "useContext"), mountHookTypesDev(), readContext(context, observedBits);
          },
          useEffect: function (create, deps) {
            return (
              (currentHookNameInDev = "useEffect"),
              mountHookTypesDev(),
              checkDepsAreArrayDev(deps),
              mountEffect(create, deps)
            );
          },
          useImperativeHandle: function (ref, create, deps) {
            return (
              (currentHookNameInDev = "useImperativeHandle"),
              mountHookTypesDev(),
              checkDepsAreArrayDev(deps),
              mountImperativeHandle(ref, create, deps)
            );
          },
          useLayoutEffect: function (create, deps) {
            return (
              (currentHookNameInDev = "useLayoutEffect"),
              mountHookTypesDev(),
              checkDepsAreArrayDev(deps),
              mountLayoutEffect(create, deps)
            );
          },
          useMemo: function (create, deps) {
            (currentHookNameInDev = "useMemo"), mountHookTypesDev(), checkDepsAreArrayDev(deps);
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountMemo(create, deps);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useReducer: function (reducer, initialArg, init) {
            (currentHookNameInDev = "useReducer"), mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useRef: function (initialValue) {
            return (currentHookNameInDev = "useRef"), mountHookTypesDev(), mountRef(initialValue);
          },
          useState: function (initialState) {
            (currentHookNameInDev = "useState"), mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountState(initialState);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useDebugValue: function (value, formatterFn) {
            return (currentHookNameInDev = "useDebugValue"), mountHookTypesDev(), void 0;
          },
          useResponder: function (responder, props) {
            return (
              (currentHookNameInDev = "useResponder"),
              mountHookTypesDev(),
              createDeprecatedResponderListener(responder, props)
            );
          },
          useDeferredValue: function (value, config) {
            return (currentHookNameInDev = "useDeferredValue"), mountHookTypesDev(), mountDeferredValue(value, config);
          },
          useTransition: function (config) {
            return (currentHookNameInDev = "useTransition"), mountHookTypesDev(), mountTransition(config);
          },
        }),
          (HooksDispatcherOnMountWithHookTypesInDEV = {
            readContext: function (context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback: function (callback, deps) {
              return (currentHookNameInDev = "useCallback"), updateHookTypesDev(), mountCallback(callback, deps);
            },
            useContext: function (context, observedBits) {
              return (currentHookNameInDev = "useContext"), updateHookTypesDev(), readContext(context, observedBits);
            },
            useEffect: function (create, deps) {
              return (currentHookNameInDev = "useEffect"), updateHookTypesDev(), mountEffect(create, deps);
            },
            useImperativeHandle: function (ref, create, deps) {
              return (
                (currentHookNameInDev = "useImperativeHandle"),
                updateHookTypesDev(),
                mountImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect: function (create, deps) {
              return (currentHookNameInDev = "useLayoutEffect"), updateHookTypesDev(), mountLayoutEffect(create, deps);
            },
            useMemo: function (create, deps) {
              (currentHookNameInDev = "useMemo"), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer: function (reducer, initialArg, init) {
              (currentHookNameInDev = "useReducer"), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef: function (initialValue) {
              return (currentHookNameInDev = "useRef"), updateHookTypesDev(), mountRef(initialValue);
            },
            useState: function (initialState) {
              (currentHookNameInDev = "useState"), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue: function (value, formatterFn) {
              return (currentHookNameInDev = "useDebugValue"), updateHookTypesDev(), void 0;
            },
            useResponder: function (responder, props) {
              return (
                (currentHookNameInDev = "useResponder"),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue: function (value, config) {
              return (
                (currentHookNameInDev = "useDeferredValue"), updateHookTypesDev(), mountDeferredValue(value, config)
              );
            },
            useTransition: function (config) {
              return (currentHookNameInDev = "useTransition"), updateHookTypesDev(), mountTransition(config);
            },
          }),
          (HooksDispatcherOnUpdateInDEV = {
            readContext: function (context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback: function (callback, deps) {
              return (currentHookNameInDev = "useCallback"), updateHookTypesDev(), updateCallback(callback, deps);
            },
            useContext: function (context, observedBits) {
              return (currentHookNameInDev = "useContext"), updateHookTypesDev(), readContext(context, observedBits);
            },
            useEffect: function (create, deps) {
              return (currentHookNameInDev = "useEffect"), updateHookTypesDev(), updateEffect(create, deps);
            },
            useImperativeHandle: function (ref, create, deps) {
              return (
                (currentHookNameInDev = "useImperativeHandle"),
                updateHookTypesDev(),
                updateImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect: function (create, deps) {
              return (currentHookNameInDev = "useLayoutEffect"), updateHookTypesDev(), updateLayoutEffect(create, deps);
            },
            useMemo: function (create, deps) {
              (currentHookNameInDev = "useMemo"), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer: function (reducer, initialArg, init) {
              (currentHookNameInDev = "useReducer"), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef: function (initialValue) {
              return (currentHookNameInDev = "useRef"), updateHookTypesDev(), updateRef();
            },
            useState: function (initialState) {
              (currentHookNameInDev = "useState"), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue: function (value, formatterFn) {
              return (currentHookNameInDev = "useDebugValue"), updateHookTypesDev(), updateDebugValue();
            },
            useResponder: function (responder, props) {
              return (
                (currentHookNameInDev = "useResponder"),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue: function (value, config) {
              return (
                (currentHookNameInDev = "useDeferredValue"), updateHookTypesDev(), updateDeferredValue(value, config)
              );
            },
            useTransition: function (config) {
              return (currentHookNameInDev = "useTransition"), updateHookTypesDev(), updateTransition(config);
            },
          }),
          (HooksDispatcherOnRerenderInDEV = {
            readContext: function (context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback: function (callback, deps) {
              return (currentHookNameInDev = "useCallback"), updateHookTypesDev(), updateCallback(callback, deps);
            },
            useContext: function (context, observedBits) {
              return (currentHookNameInDev = "useContext"), updateHookTypesDev(), readContext(context, observedBits);
            },
            useEffect: function (create, deps) {
              return (currentHookNameInDev = "useEffect"), updateHookTypesDev(), updateEffect(create, deps);
            },
            useImperativeHandle: function (ref, create, deps) {
              return (
                (currentHookNameInDev = "useImperativeHandle"),
                updateHookTypesDev(),
                updateImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect: function (create, deps) {
              return (currentHookNameInDev = "useLayoutEffect"), updateHookTypesDev(), updateLayoutEffect(create, deps);
            },
            useMemo: function (create, deps) {
              (currentHookNameInDev = "useMemo"), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer: function (reducer, initialArg, init) {
              (currentHookNameInDev = "useReducer"), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
              try {
                return rerenderReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef: function (initialValue) {
              return (currentHookNameInDev = "useRef"), updateHookTypesDev(), updateRef();
            },
            useState: function (initialState) {
              (currentHookNameInDev = "useState"), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
              try {
                return rerenderState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue: function (value, formatterFn) {
              return (currentHookNameInDev = "useDebugValue"), updateHookTypesDev(), updateDebugValue();
            },
            useResponder: function (responder, props) {
              return (
                (currentHookNameInDev = "useResponder"),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue: function (value, config) {
              return (
                (currentHookNameInDev = "useDeferredValue"), updateHookTypesDev(), rerenderDeferredValue(value, config)
              );
            },
            useTransition: function (config) {
              return (currentHookNameInDev = "useTransition"), updateHookTypesDev(), rerenderTransition(config);
            },
          }),
          (InvalidNestedHooksDispatcherOnMountInDEV = {
            readContext: function (context, observedBits) {
              return warnInvalidContextAccess(), readContext(context, observedBits);
            },
            useCallback: function (callback, deps) {
              return (
                (currentHookNameInDev = "useCallback"),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountCallback(callback, deps)
              );
            },
            useContext: function (context, observedBits) {
              return (
                (currentHookNameInDev = "useContext"),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                readContext(context, observedBits)
              );
            },
            useEffect: function (create, deps) {
              return (
                (currentHookNameInDev = "useEffect"),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountEffect(create, deps)
              );
            },
            useImperativeHandle: function (ref, create, deps) {
              return (
                (currentHookNameInDev = "useImperativeHandle"),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect: function (create, deps) {
              return (
                (currentHookNameInDev = "useLayoutEffect"),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountLayoutEffect(create, deps)
              );
            },
            useMemo: function (create, deps) {
              (currentHookNameInDev = "useMemo"), warnInvalidHookAccess(), mountHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer: function (reducer, initialArg, init) {
              (currentHookNameInDev = "useReducer"), warnInvalidHookAccess(), mountHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef: function (initialValue) {
              return (
                (currentHookNameInDev = "useRef"), warnInvalidHookAccess(), mountHookTypesDev(), mountRef(initialValue)
              );
            },
            useState: function (initialState) {
              (currentHookNameInDev = "useState"), warnInvalidHookAccess(), mountHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue: function (value, formatterFn) {
              return (currentHookNameInDev = "useDebugValue"), warnInvalidHookAccess(), mountHookTypesDev(), void 0;
            },
            useResponder: function (responder, props) {
              return (
                (currentHookNameInDev = "useResponder"),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue: function (value, config) {
              return (
                (currentHookNameInDev = "useDeferredValue"),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountDeferredValue(value, config)
              );
            },
            useTransition: function (config) {
              return (
                (currentHookNameInDev = "useTransition"),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountTransition(config)
              );
            },
          }),
          (InvalidNestedHooksDispatcherOnUpdateInDEV = {
            readContext: function (context, observedBits) {
              return warnInvalidContextAccess(), readContext(context, observedBits);
            },
            useCallback: function (callback, deps) {
              return (
                (currentHookNameInDev = "useCallback"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateCallback(callback, deps)
              );
            },
            useContext: function (context, observedBits) {
              return (
                (currentHookNameInDev = "useContext"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                readContext(context, observedBits)
              );
            },
            useEffect: function (create, deps) {
              return (
                (currentHookNameInDev = "useEffect"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateEffect(create, deps)
              );
            },
            useImperativeHandle: function (ref, create, deps) {
              return (
                (currentHookNameInDev = "useImperativeHandle"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect: function (create, deps) {
              return (
                (currentHookNameInDev = "useLayoutEffect"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateLayoutEffect(create, deps)
              );
            },
            useMemo: function (create, deps) {
              (currentHookNameInDev = "useMemo"), warnInvalidHookAccess(), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer: function (reducer, initialArg, init) {
              (currentHookNameInDev = "useReducer"), warnInvalidHookAccess(), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef: function (initialValue) {
              return (currentHookNameInDev = "useRef"), warnInvalidHookAccess(), updateHookTypesDev(), updateRef();
            },
            useState: function (initialState) {
              (currentHookNameInDev = "useState"), warnInvalidHookAccess(), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue: function (value, formatterFn) {
              return (
                (currentHookNameInDev = "useDebugValue"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateDebugValue()
              );
            },
            useResponder: function (responder, props) {
              return (
                (currentHookNameInDev = "useResponder"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue: function (value, config) {
              return (
                (currentHookNameInDev = "useDeferredValue"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateDeferredValue(value, config)
              );
            },
            useTransition: function (config) {
              return (
                (currentHookNameInDev = "useTransition"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateTransition(config)
              );
            },
          }),
          (InvalidNestedHooksDispatcherOnRerenderInDEV = {
            readContext: function (context, observedBits) {
              return warnInvalidContextAccess(), readContext(context, observedBits);
            },
            useCallback: function (callback, deps) {
              return (
                (currentHookNameInDev = "useCallback"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateCallback(callback, deps)
              );
            },
            useContext: function (context, observedBits) {
              return (
                (currentHookNameInDev = "useContext"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                readContext(context, observedBits)
              );
            },
            useEffect: function (create, deps) {
              return (
                (currentHookNameInDev = "useEffect"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateEffect(create, deps)
              );
            },
            useImperativeHandle: function (ref, create, deps) {
              return (
                (currentHookNameInDev = "useImperativeHandle"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect: function (create, deps) {
              return (
                (currentHookNameInDev = "useLayoutEffect"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateLayoutEffect(create, deps)
              );
            },
            useMemo: function (create, deps) {
              (currentHookNameInDev = "useMemo"), warnInvalidHookAccess(), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer: function (reducer, initialArg, init) {
              (currentHookNameInDev = "useReducer"), warnInvalidHookAccess(), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return rerenderReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef: function (initialValue) {
              return (currentHookNameInDev = "useRef"), warnInvalidHookAccess(), updateHookTypesDev(), updateRef();
            },
            useState: function (initialState) {
              (currentHookNameInDev = "useState"), warnInvalidHookAccess(), updateHookTypesDev();
              var prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return rerenderState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue: function (value, formatterFn) {
              return (
                (currentHookNameInDev = "useDebugValue"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateDebugValue()
              );
            },
            useResponder: function (responder, props) {
              return (
                (currentHookNameInDev = "useResponder"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue: function (value, config) {
              return (
                (currentHookNameInDev = "useDeferredValue"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                rerenderDeferredValue(value, config)
              );
            },
            useTransition: function (config) {
              return (
                (currentHookNameInDev = "useTransition"),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                rerenderTransition(config)
              );
            },
          });
      }
      var now$1 = Scheduler.unstable_now,
        commitTime = 0,
        profilerStartTime = -1;
      function getCommitTime() {
        return commitTime;
      }
      function recordCommitTime() {
        commitTime = now$1();
      }
      function startProfilerTimer(fiber) {
        (profilerStartTime = now$1()), fiber.actualStartTime < 0 && (fiber.actualStartTime = now$1());
      }
      function stopProfilerTimerIfRunning(fiber) {
        profilerStartTime = -1;
      }
      function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
        if (profilerStartTime >= 0) {
          var elapsedTime = now$1() - profilerStartTime;
          (fiber.actualDuration += elapsedTime),
            overrideBaseTime && (fiber.selfBaseDuration = elapsedTime),
            (profilerStartTime = -1);
        }
      }
      var hydrationParentFiber = null,
        nextHydratableInstance = null,
        isHydrating = !1;
      function enterHydrationState(fiber) {
        var parentInstance = fiber.stateNode.containerInfo;
        return (
          (nextHydratableInstance = getFirstHydratableChild(parentInstance)),
          (hydrationParentFiber = fiber),
          (isHydrating = !0),
          !0
        );
      }
      function deleteHydratableInstance(returnFiber, instance) {
        switch (returnFiber.tag) {
          case HostRoot:
            didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
            break;
          case HostComponent:
            didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
            break;
        }
        var childToDelete = createFiberFromHostInstanceForDeletion();
        (childToDelete.stateNode = instance),
          (childToDelete.return = returnFiber),
          (childToDelete.effectTag = Deletion),
          returnFiber.lastEffect !== null
            ? ((returnFiber.lastEffect.nextEffect = childToDelete), (returnFiber.lastEffect = childToDelete))
            : (returnFiber.firstEffect = returnFiber.lastEffect = childToDelete);
      }
      function insertNonHydratedInstance(returnFiber, fiber) {
        switch (((fiber.effectTag = (fiber.effectTag & ~Hydrating) | Placement), returnFiber.tag)) {
          case HostRoot: {
            var parentContainer = returnFiber.stateNode.containerInfo;
            switch (fiber.tag) {
              case HostComponent:
                var type = fiber.type,
                  props = fiber.pendingProps;
                didNotFindHydratableContainerInstance(parentContainer, type);
                break;
              case HostText:
                var text = fiber.pendingProps;
                didNotFindHydratableContainerTextInstance(parentContainer, text);
                break;
            }
            break;
          }
          case HostComponent: {
            var parentType = returnFiber.type,
              parentProps = returnFiber.memoizedProps,
              parentInstance = returnFiber.stateNode;
            switch (fiber.tag) {
              case HostComponent:
                var _type = fiber.type,
                  _props = fiber.pendingProps;
                didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type);
                break;
              case HostText:
                var _text = fiber.pendingProps;
                didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                break;
              case SuspenseComponent:
                didNotFindHydratableSuspenseInstance(parentType, parentProps);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
      function tryHydrate(fiber, nextInstance) {
        switch (fiber.tag) {
          case HostComponent: {
            var type = fiber.type,
              props = fiber.pendingProps,
              instance = canHydrateInstance(nextInstance, type);
            return instance !== null ? ((fiber.stateNode = instance), !0) : !1;
          }
          case HostText: {
            var text = fiber.pendingProps,
              textInstance = canHydrateTextInstance(nextInstance, text);
            return textInstance !== null ? ((fiber.stateNode = textInstance), !0) : !1;
          }
          case SuspenseComponent:
            return !1;
          default:
            return !1;
        }
      }
      function tryToClaimNextHydratableInstance(fiber) {
        if (isHydrating) {
          var nextInstance = nextHydratableInstance;
          if (!nextInstance) {
            insertNonHydratedInstance(hydrationParentFiber, fiber), (isHydrating = !1), (hydrationParentFiber = fiber);
            return;
          }
          var firstAttemptedInstance = nextInstance;
          if (!tryHydrate(fiber, nextInstance)) {
            if (
              ((nextInstance = getNextHydratableSibling(firstAttemptedInstance)),
              !nextInstance || !tryHydrate(fiber, nextInstance))
            ) {
              insertNonHydratedInstance(hydrationParentFiber, fiber),
                (isHydrating = !1),
                (hydrationParentFiber = fiber);
              return;
            }
            deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
          }
          (hydrationParentFiber = fiber), (nextHydratableInstance = getFirstHydratableChild(nextInstance));
        }
      }
      function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
        var instance = fiber.stateNode,
          updatePayload = hydrateInstance(
            instance,
            fiber.type,
            fiber.memoizedProps,
            rootContainerInstance,
            hostContext,
            fiber
          );
        return (fiber.updateQueue = updatePayload), updatePayload !== null;
      }
      function prepareToHydrateHostTextInstance(fiber) {
        var textInstance = fiber.stateNode,
          textContent = fiber.memoizedProps,
          shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
        if (shouldUpdate) {
          var returnFiber = hydrationParentFiber;
          if (returnFiber !== null)
            switch (returnFiber.tag) {
              case HostRoot: {
                var parentContainer = returnFiber.stateNode.containerInfo;
                didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
                break;
              }
              case HostComponent: {
                var parentType = returnFiber.type,
                  parentProps = returnFiber.memoizedProps,
                  parentInstance = returnFiber.stateNode;
                didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
                break;
              }
            }
        }
        return shouldUpdate;
      }
      function skipPastDehydratedSuspenseInstance(fiber) {
        var suspenseState = fiber.memoizedState,
          suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
        if (!suspenseInstance)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
      }
      function popToNextHostParent(fiber) {
        for (
          var parent = fiber.return;
          parent !== null &&
          parent.tag !== HostComponent &&
          parent.tag !== HostRoot &&
          parent.tag !== SuspenseComponent;

        )
          parent = parent.return;
        hydrationParentFiber = parent;
      }
      function popHydrationState(fiber) {
        if (fiber !== hydrationParentFiber) return !1;
        if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = !0), !1;
        var type = fiber.type;
        if (
          fiber.tag !== HostComponent ||
          (type !== "head" && type !== "body" && !shouldSetTextContent(type, fiber.memoizedProps))
        )
          for (var nextInstance = nextHydratableInstance; nextInstance; )
            deleteHydratableInstance(fiber, nextInstance), (nextInstance = getNextHydratableSibling(nextInstance));
        return (
          popToNextHostParent(fiber),
          fiber.tag === SuspenseComponent
            ? (nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber))
            : (nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null),
          !0
        );
      }
      function resetHydrationState() {
        (hydrationParentFiber = null), (nextHydratableInstance = null), (isHydrating = !1);
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner,
        didReceiveUpdate = !1,
        didWarnAboutBadClass,
        didWarnAboutModulePatternComponent,
        didWarnAboutContextTypeOnFunctionComponent,
        didWarnAboutGetDerivedStateOnFunctionComponent,
        didWarnAboutFunctionRefs,
        didWarnAboutReassigningProps,
        didWarnAboutRevealOrder,
        didWarnAboutTailOptions;
      (didWarnAboutBadClass = {}),
        (didWarnAboutModulePatternComponent = {}),
        (didWarnAboutContextTypeOnFunctionComponent = {}),
        (didWarnAboutGetDerivedStateOnFunctionComponent = {}),
        (didWarnAboutFunctionRefs = {}),
        (didWarnAboutReassigningProps = !1),
        (didWarnAboutRevealOrder = {}),
        (didWarnAboutTailOptions = {});
      function reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2) {
        current2 === null
          ? (workInProgress2.child = mountChildFibers(workInProgress2, null, nextChildren, renderExpirationTime2))
          : (workInProgress2.child = reconcileChildFibers(
              workInProgress2,
              current2.child,
              nextChildren,
              renderExpirationTime2
            ));
      }
      function forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderExpirationTime2) {
        (workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, null, renderExpirationTime2)),
          (workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderExpirationTime2));
      }
      function updateForwardRef(current2, workInProgress2, Component, nextProps, renderExpirationTime2) {
        if (workInProgress2.type !== workInProgress2.elementType) {
          var innerPropTypes = Component.propTypes;
          innerPropTypes &&
            checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component), getCurrentFiberStackInDev);
        }
        var render2 = Component.render,
          ref = workInProgress2.ref,
          nextChildren;
        return (
          prepareToReadContext(workInProgress2, renderExpirationTime2),
          (ReactCurrentOwner$1.current = workInProgress2),
          setIsRendering(!0),
          (nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderExpirationTime2)),
          workInProgress2.mode & StrictMode &&
            workInProgress2.memoizedState !== null &&
            (nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderExpirationTime2)),
          setIsRendering(!1),
          current2 !== null && !didReceiveUpdate
            ? (bailoutHooks(current2, workInProgress2, renderExpirationTime2),
              bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2))
            : ((workInProgress2.effectTag |= PerformedWork),
              reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2),
              workInProgress2.child)
        );
      }
      function updateMemoComponent(
        current2,
        workInProgress2,
        Component,
        nextProps,
        updateExpirationTime,
        renderExpirationTime2
      ) {
        if (current2 === null) {
          var type = Component.type;
          if (isSimpleFunctionComponent(type) && Component.compare === null && Component.defaultProps === void 0) {
            var resolvedType = type;
            return (
              (resolvedType = resolveFunctionForHotReloading(type)),
              (workInProgress2.tag = SimpleMemoComponent),
              (workInProgress2.type = resolvedType),
              validateFunctionComponentInDev(workInProgress2, type),
              updateSimpleMemoComponent(
                current2,
                workInProgress2,
                resolvedType,
                nextProps,
                updateExpirationTime,
                renderExpirationTime2
              )
            );
          }
          {
            var innerPropTypes = type.propTypes;
            innerPropTypes &&
              checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(type), getCurrentFiberStackInDev);
          }
          var child = createFiberFromTypeAndProps(
            Component.type,
            null,
            nextProps,
            null,
            workInProgress2.mode,
            renderExpirationTime2
          );
          return (
            (child.ref = workInProgress2.ref), (child.return = workInProgress2), (workInProgress2.child = child), child
          );
        }
        {
          var _type = Component.type,
            _innerPropTypes = _type.propTypes;
          _innerPropTypes &&
            checkPropTypes(_innerPropTypes, nextProps, "prop", getComponentName(_type), getCurrentFiberStackInDev);
        }
        var currentChild = current2.child;
        if (updateExpirationTime < renderExpirationTime2) {
          var prevProps = currentChild.memoizedProps,
            compare = Component.compare;
          if (
            ((compare = compare !== null ? compare : shallowEqual),
            compare(prevProps, nextProps) && current2.ref === workInProgress2.ref)
          )
            return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2);
        }
        workInProgress2.effectTag |= PerformedWork;
        var newChild = createWorkInProgress(currentChild, nextProps);
        return (
          (newChild.ref = workInProgress2.ref),
          (newChild.return = workInProgress2),
          (workInProgress2.child = newChild),
          newChild
        );
      }
      function updateSimpleMemoComponent(
        current2,
        workInProgress2,
        Component,
        nextProps,
        updateExpirationTime,
        renderExpirationTime2
      ) {
        if (workInProgress2.type !== workInProgress2.elementType) {
          var outerMemoType = workInProgress2.elementType;
          outerMemoType.$$typeof === REACT_LAZY_TYPE && (outerMemoType = refineResolvedLazyComponent(outerMemoType));
          var outerPropTypes = outerMemoType && outerMemoType.propTypes;
          outerPropTypes &&
            checkPropTypes(
              outerPropTypes,
              nextProps,
              "prop",
              getComponentName(outerMemoType),
              getCurrentFiberStackInDev
            );
        }
        if (current2 !== null) {
          var prevProps = current2.memoizedProps;
          if (
            shallowEqual(prevProps, nextProps) &&
            current2.ref === workInProgress2.ref &&
            workInProgress2.type === current2.type &&
            ((didReceiveUpdate = !1), updateExpirationTime < renderExpirationTime2)
          )
            return (
              (workInProgress2.expirationTime = current2.expirationTime),
              bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2)
            );
        }
        return updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderExpirationTime2);
      }
      function updateFragment(current2, workInProgress2, renderExpirationTime2) {
        var nextChildren = workInProgress2.pendingProps;
        return reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2), workInProgress2.child;
      }
      function updateMode(current2, workInProgress2, renderExpirationTime2) {
        var nextChildren = workInProgress2.pendingProps.children;
        return reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2), workInProgress2.child;
      }
      function updateProfiler(current2, workInProgress2, renderExpirationTime2) {
        workInProgress2.effectTag |= Update;
        var nextProps = workInProgress2.pendingProps,
          nextChildren = nextProps.children;
        return reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2), workInProgress2.child;
      }
      function markRef(current2, workInProgress2) {
        var ref = workInProgress2.ref;
        ((current2 === null && ref !== null) || (current2 !== null && current2.ref !== ref)) &&
          (workInProgress2.effectTag |= Ref);
      }
      function updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderExpirationTime2) {
        if (workInProgress2.type !== workInProgress2.elementType) {
          var innerPropTypes = Component.propTypes;
          innerPropTypes &&
            checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component), getCurrentFiberStackInDev);
        }
        var context;
        {
          var unmaskedContext = getUnmaskedContext(workInProgress2, Component, !0);
          context = getMaskedContext(workInProgress2, unmaskedContext);
        }
        var nextChildren;
        return (
          prepareToReadContext(workInProgress2, renderExpirationTime2),
          (ReactCurrentOwner$1.current = workInProgress2),
          setIsRendering(!0),
          (nextChildren = renderWithHooks(
            current2,
            workInProgress2,
            Component,
            nextProps,
            context,
            renderExpirationTime2
          )),
          workInProgress2.mode & StrictMode &&
            workInProgress2.memoizedState !== null &&
            (nextChildren = renderWithHooks(
              current2,
              workInProgress2,
              Component,
              nextProps,
              context,
              renderExpirationTime2
            )),
          setIsRendering(!1),
          current2 !== null && !didReceiveUpdate
            ? (bailoutHooks(current2, workInProgress2, renderExpirationTime2),
              bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2))
            : ((workInProgress2.effectTag |= PerformedWork),
              reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2),
              workInProgress2.child)
        );
      }
      function updateClassComponent(current2, workInProgress2, Component, nextProps, renderExpirationTime2) {
        if (workInProgress2.type !== workInProgress2.elementType) {
          var innerPropTypes = Component.propTypes;
          innerPropTypes &&
            checkPropTypes(innerPropTypes, nextProps, "prop", getComponentName(Component), getCurrentFiberStackInDev);
        }
        var hasContext;
        isContextProvider(Component) ? ((hasContext = !0), pushContextProvider(workInProgress2)) : (hasContext = !1),
          prepareToReadContext(workInProgress2, renderExpirationTime2);
        var instance = workInProgress2.stateNode,
          shouldUpdate;
        instance === null
          ? (current2 !== null &&
              ((current2.alternate = null),
              (workInProgress2.alternate = null),
              (workInProgress2.effectTag |= Placement)),
            constructClassInstance(workInProgress2, Component, nextProps),
            mountClassInstance(workInProgress2, Component, nextProps, renderExpirationTime2),
            (shouldUpdate = !0))
          : current2 === null
          ? (shouldUpdate = resumeMountClassInstance(workInProgress2, Component, nextProps, renderExpirationTime2))
          : (shouldUpdate = updateClassInstance(
              current2,
              workInProgress2,
              Component,
              nextProps,
              renderExpirationTime2
            ));
        var nextUnitOfWork = finishClassComponent(
          current2,
          workInProgress2,
          Component,
          shouldUpdate,
          hasContext,
          renderExpirationTime2
        );
        {
          var inst = workInProgress2.stateNode;
          inst.props !== nextProps &&
            (didWarnAboutReassigningProps ||
              error(
                "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
                getComponentName(workInProgress2.type) || "a component"
              ),
            (didWarnAboutReassigningProps = !0));
        }
        return nextUnitOfWork;
      }
      function finishClassComponent(
        current2,
        workInProgress2,
        Component,
        shouldUpdate,
        hasContext,
        renderExpirationTime2
      ) {
        markRef(current2, workInProgress2);
        var didCaptureError = (workInProgress2.effectTag & DidCapture) !== NoEffect;
        if (!shouldUpdate && !didCaptureError)
          return (
            hasContext && invalidateContextProvider(workInProgress2, Component, !1),
            bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2)
          );
        var instance = workInProgress2.stateNode;
        ReactCurrentOwner$1.current = workInProgress2;
        var nextChildren;
        return (
          didCaptureError && typeof Component.getDerivedStateFromError != "function"
            ? ((nextChildren = null), stopProfilerTimerIfRunning())
            : (setIsRendering(!0),
              (nextChildren = instance.render()),
              workInProgress2.mode & StrictMode && instance.render(),
              setIsRendering(!1)),
          (workInProgress2.effectTag |= PerformedWork),
          current2 !== null && didCaptureError
            ? forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderExpirationTime2)
            : reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2),
          (workInProgress2.memoizedState = instance.state),
          hasContext && invalidateContextProvider(workInProgress2, Component, !0),
          workInProgress2.child
        );
      }
      function pushHostRootContext(workInProgress2) {
        var root2 = workInProgress2.stateNode;
        root2.pendingContext
          ? pushTopLevelContextObject(workInProgress2, root2.pendingContext, root2.pendingContext !== root2.context)
          : root2.context && pushTopLevelContextObject(workInProgress2, root2.context, !1),
          pushHostContainer(workInProgress2, root2.containerInfo);
      }
      function updateHostRoot(current2, workInProgress2, renderExpirationTime2) {
        pushHostRootContext(workInProgress2);
        var updateQueue = workInProgress2.updateQueue;
        if (!(current2 !== null && updateQueue !== null))
          throw Error(
            "If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue."
          );
        var nextProps = workInProgress2.pendingProps,
          prevState = workInProgress2.memoizedState,
          prevChildren = prevState !== null ? prevState.element : null;
        cloneUpdateQueue(current2, workInProgress2),
          processUpdateQueue(workInProgress2, nextProps, null, renderExpirationTime2);
        var nextState = workInProgress2.memoizedState,
          nextChildren = nextState.element;
        if (nextChildren === prevChildren)
          return resetHydrationState(), bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2);
        var root2 = workInProgress2.stateNode;
        if (root2.hydrate && enterHydrationState(workInProgress2)) {
          var child = mountChildFibers(workInProgress2, null, nextChildren, renderExpirationTime2);
          workInProgress2.child = child;
          for (var node = child; node; )
            (node.effectTag = (node.effectTag & ~Placement) | Hydrating), (node = node.sibling);
        } else reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2), resetHydrationState();
        return workInProgress2.child;
      }
      function updateHostComponent(current2, workInProgress2, renderExpirationTime2) {
        pushHostContext(workInProgress2), current2 === null && tryToClaimNextHydratableInstance(workInProgress2);
        var type = workInProgress2.type,
          nextProps = workInProgress2.pendingProps,
          prevProps = current2 !== null ? current2.memoizedProps : null,
          nextChildren = nextProps.children,
          isDirectTextChild = shouldSetTextContent(type, nextProps);
        return (
          isDirectTextChild
            ? (nextChildren = null)
            : prevProps !== null &&
              shouldSetTextContent(type, prevProps) &&
              (workInProgress2.effectTag |= ContentReset),
          markRef(current2, workInProgress2),
          workInProgress2.mode & ConcurrentMode &&
          renderExpirationTime2 !== Never &&
          shouldDeprioritizeSubtree(type, nextProps)
            ? (markSpawnedWork(Never),
              (workInProgress2.expirationTime = workInProgress2.childExpirationTime = Never),
              null)
            : (reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2), workInProgress2.child)
        );
      }
      function updateHostText(current2, workInProgress2) {
        return current2 === null && tryToClaimNextHydratableInstance(workInProgress2), null;
      }
      function mountLazyComponent(_current, workInProgress2, elementType, updateExpirationTime, renderExpirationTime2) {
        _current !== null &&
          ((_current.alternate = null), (workInProgress2.alternate = null), (workInProgress2.effectTag |= Placement));
        var props = workInProgress2.pendingProps;
        cancelWorkTimer(workInProgress2);
        var Component = readLazyComponentType(elementType);
        workInProgress2.type = Component;
        var resolvedTag = (workInProgress2.tag = resolveLazyComponentTag(Component));
        startWorkTimer(workInProgress2);
        var resolvedProps = resolveDefaultProps(Component, props),
          child;
        switch (resolvedTag) {
          case FunctionComponent:
            return (
              validateFunctionComponentInDev(workInProgress2, Component),
              (workInProgress2.type = Component = resolveFunctionForHotReloading(Component)),
              (child = updateFunctionComponent(null, workInProgress2, Component, resolvedProps, renderExpirationTime2)),
              child
            );
          case ClassComponent:
            return (
              (workInProgress2.type = Component = resolveClassForHotReloading(Component)),
              (child = updateClassComponent(null, workInProgress2, Component, resolvedProps, renderExpirationTime2)),
              child
            );
          case ForwardRef:
            return (
              (workInProgress2.type = Component = resolveForwardRefForHotReloading(Component)),
              (child = updateForwardRef(null, workInProgress2, Component, resolvedProps, renderExpirationTime2)),
              child
            );
          case MemoComponent: {
            if (workInProgress2.type !== workInProgress2.elementType) {
              var outerPropTypes = Component.propTypes;
              outerPropTypes &&
                checkPropTypes(
                  outerPropTypes,
                  resolvedProps,
                  "prop",
                  getComponentName(Component),
                  getCurrentFiberStackInDev
                );
            }
            return (
              (child = updateMemoComponent(
                null,
                workInProgress2,
                Component,
                resolveDefaultProps(Component.type, resolvedProps),
                updateExpirationTime,
                renderExpirationTime2
              )),
              child
            );
          }
        }
        var hint = "";
        throw (
          (Component !== null &&
            typeof Component == "object" &&
            Component.$$typeof === REACT_LAZY_TYPE &&
            (hint = " Did you wrap a component in React.lazy() more than once?"),
          Error(
            "Element type is invalid. Received a promise that resolves to: " +
              Component +
              ". Lazy element type must resolve to a class or function." +
              hint
          ))
        );
      }
      function mountIncompleteClassComponent(_current, workInProgress2, Component, nextProps, renderExpirationTime2) {
        _current !== null &&
          ((_current.alternate = null), (workInProgress2.alternate = null), (workInProgress2.effectTag |= Placement)),
          (workInProgress2.tag = ClassComponent);
        var hasContext;
        return (
          isContextProvider(Component) ? ((hasContext = !0), pushContextProvider(workInProgress2)) : (hasContext = !1),
          prepareToReadContext(workInProgress2, renderExpirationTime2),
          constructClassInstance(workInProgress2, Component, nextProps),
          mountClassInstance(workInProgress2, Component, nextProps, renderExpirationTime2),
          finishClassComponent(null, workInProgress2, Component, !0, hasContext, renderExpirationTime2)
        );
      }
      function mountIndeterminateComponent(_current, workInProgress2, Component, renderExpirationTime2) {
        _current !== null &&
          ((_current.alternate = null), (workInProgress2.alternate = null), (workInProgress2.effectTag |= Placement));
        var props = workInProgress2.pendingProps,
          context;
        {
          var unmaskedContext = getUnmaskedContext(workInProgress2, Component, !1);
          context = getMaskedContext(workInProgress2, unmaskedContext);
        }
        prepareToReadContext(workInProgress2, renderExpirationTime2);
        var value;
        {
          if (Component.prototype && typeof Component.prototype.render == "function") {
            var componentName = getComponentName(Component) || "Unknown";
            didWarnAboutBadClass[componentName] ||
              (error(
                "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
                componentName,
                componentName
              ),
              (didWarnAboutBadClass[componentName] = !0));
          }
          workInProgress2.mode & StrictMode &&
            ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, null),
            setIsRendering(!0),
            (ReactCurrentOwner$1.current = workInProgress2),
            (value = renderWithHooks(null, workInProgress2, Component, props, context, renderExpirationTime2)),
            setIsRendering(!1);
        }
        if (
          ((workInProgress2.effectTag |= PerformedWork),
          typeof value == "object" && value !== null && typeof value.render == "function" && value.$$typeof === void 0)
        ) {
          {
            var _componentName = getComponentName(Component) || "Unknown";
            didWarnAboutModulePatternComponent[_componentName] ||
              (error(
                "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                _componentName,
                _componentName,
                _componentName
              ),
              (didWarnAboutModulePatternComponent[_componentName] = !0));
          }
          (workInProgress2.tag = ClassComponent),
            (workInProgress2.memoizedState = null),
            (workInProgress2.updateQueue = null);
          var hasContext = !1;
          isContextProvider(Component) ? ((hasContext = !0), pushContextProvider(workInProgress2)) : (hasContext = !1),
            (workInProgress2.memoizedState = value.state !== null && value.state !== void 0 ? value.state : null),
            initializeUpdateQueue(workInProgress2);
          var getDerivedStateFromProps = Component.getDerivedStateFromProps;
          return (
            typeof getDerivedStateFromProps == "function" &&
              applyDerivedStateFromProps(workInProgress2, Component, getDerivedStateFromProps, props),
            adoptClassInstance(workInProgress2, value),
            mountClassInstance(workInProgress2, Component, props, renderExpirationTime2),
            finishClassComponent(null, workInProgress2, Component, !0, hasContext, renderExpirationTime2)
          );
        } else
          return (
            (workInProgress2.tag = FunctionComponent),
            workInProgress2.mode & StrictMode &&
              workInProgress2.memoizedState !== null &&
              (value = renderWithHooks(null, workInProgress2, Component, props, context, renderExpirationTime2)),
            reconcileChildren(null, workInProgress2, value, renderExpirationTime2),
            validateFunctionComponentInDev(workInProgress2, Component),
            workInProgress2.child
          );
      }
      function validateFunctionComponentInDev(workInProgress2, Component) {
        {
          if (
            (Component &&
              Component.childContextTypes &&
              error(
                "%s(...): childContextTypes cannot be defined on a function component.",
                Component.displayName || Component.name || "Component"
              ),
            workInProgress2.ref !== null)
          ) {
            var info = "",
              ownerName = getCurrentFiberOwnerNameInDevOrNull();
            ownerName &&
              (info +=
                `

Check the render method of \`` +
                ownerName +
                "`.");
            var warningKey = ownerName || workInProgress2._debugID || "",
              debugSource = workInProgress2._debugSource;
            debugSource && (warningKey = debugSource.fileName + ":" + debugSource.lineNumber),
              didWarnAboutFunctionRefs[warningKey] ||
                ((didWarnAboutFunctionRefs[warningKey] = !0),
                error(
                  "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",
                  info
                ));
          }
          if (typeof Component.getDerivedStateFromProps == "function") {
            var _componentName2 = getComponentName(Component) || "Unknown";
            didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] ||
              (error("%s: Function components do not support getDerivedStateFromProps.", _componentName2),
              (didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] = !0));
          }
          if (typeof Component.contextType == "object" && Component.contextType !== null) {
            var _componentName3 = getComponentName(Component) || "Unknown";
            didWarnAboutContextTypeOnFunctionComponent[_componentName3] ||
              (error("%s: Function components do not support contextType.", _componentName3),
              (didWarnAboutContextTypeOnFunctionComponent[_componentName3] = !0));
          }
        }
      }
      var SUSPENDED_MARKER = { dehydrated: null, retryTime: NoWork };
      function shouldRemainOnFallback(suspenseContext, current2, workInProgress2) {
        return (
          hasSuspenseContext(suspenseContext, ForceSuspenseFallback) &&
          (current2 === null || current2.memoizedState !== null)
        );
      }
      function updateSuspenseComponent(current2, workInProgress2, renderExpirationTime2) {
        var mode = workInProgress2.mode,
          nextProps = workInProgress2.pendingProps;
        shouldSuspend(workInProgress2) && (workInProgress2.effectTag |= DidCapture);
        var suspenseContext = suspenseStackCursor.current,
          nextDidTimeout = !1,
          didSuspend = (workInProgress2.effectTag & DidCapture) !== NoEffect;
        if (
          (didSuspend || shouldRemainOnFallback(suspenseContext, current2)
            ? ((nextDidTimeout = !0), (workInProgress2.effectTag &= ~DidCapture))
            : (current2 === null || current2.memoizedState !== null) &&
              nextProps.fallback !== void 0 &&
              nextProps.unstable_avoidThisFallback !== !0 &&
              (suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext)),
          (suspenseContext = setDefaultShallowSuspenseContext(suspenseContext)),
          pushSuspenseContext(workInProgress2, suspenseContext),
          current2 === null)
        )
          if ((nextProps.fallback !== void 0 && tryToClaimNextHydratableInstance(workInProgress2), nextDidTimeout)) {
            var nextFallbackChildren = nextProps.fallback,
              primaryChildFragment = createFiberFromFragment(null, mode, NoWork, null);
            if (((primaryChildFragment.return = workInProgress2), (workInProgress2.mode & BlockingMode) === NoMode)) {
              var progressedState = workInProgress2.memoizedState,
                progressedPrimaryChild = progressedState !== null ? workInProgress2.child.child : workInProgress2.child;
              primaryChildFragment.child = progressedPrimaryChild;
              for (var progressedChild = progressedPrimaryChild; progressedChild !== null; )
                (progressedChild.return = primaryChildFragment), (progressedChild = progressedChild.sibling);
            }
            var fallbackChildFragment = createFiberFromFragment(
              nextFallbackChildren,
              mode,
              renderExpirationTime2,
              null
            );
            return (
              (fallbackChildFragment.return = workInProgress2),
              (primaryChildFragment.sibling = fallbackChildFragment),
              (workInProgress2.memoizedState = SUSPENDED_MARKER),
              (workInProgress2.child = primaryChildFragment),
              fallbackChildFragment
            );
          } else {
            var nextPrimaryChildren = nextProps.children;
            return (
              (workInProgress2.memoizedState = null),
              (workInProgress2.child = mountChildFibers(
                workInProgress2,
                null,
                nextPrimaryChildren,
                renderExpirationTime2
              ))
            );
          }
        else {
          var prevState = current2.memoizedState;
          if (prevState !== null) {
            var currentPrimaryChildFragment = current2.child,
              currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
            if (nextDidTimeout) {
              var _nextFallbackChildren2 = nextProps.fallback,
                _primaryChildFragment2 = createWorkInProgress(
                  currentPrimaryChildFragment,
                  currentPrimaryChildFragment.pendingProps
                );
              if (
                ((_primaryChildFragment2.return = workInProgress2), (workInProgress2.mode & BlockingMode) === NoMode)
              ) {
                var _progressedState = workInProgress2.memoizedState,
                  _progressedPrimaryChild =
                    _progressedState !== null ? workInProgress2.child.child : workInProgress2.child;
                if (_progressedPrimaryChild !== currentPrimaryChildFragment.child) {
                  _primaryChildFragment2.child = _progressedPrimaryChild;
                  for (var _progressedChild2 = _progressedPrimaryChild; _progressedChild2 !== null; )
                    (_progressedChild2.return = _primaryChildFragment2),
                      (_progressedChild2 = _progressedChild2.sibling);
                }
              }
              if (workInProgress2.mode & ProfileMode) {
                for (var _treeBaseDuration = 0, _hiddenChild = _primaryChildFragment2.child; _hiddenChild !== null; )
                  (_treeBaseDuration += _hiddenChild.treeBaseDuration), (_hiddenChild = _hiddenChild.sibling);
                _primaryChildFragment2.treeBaseDuration = _treeBaseDuration;
              }
              var _fallbackChildFragment2 = createWorkInProgress(currentFallbackChildFragment, _nextFallbackChildren2);
              return (
                (_fallbackChildFragment2.return = workInProgress2),
                (_primaryChildFragment2.sibling = _fallbackChildFragment2),
                (_primaryChildFragment2.childExpirationTime = NoWork),
                (workInProgress2.memoizedState = SUSPENDED_MARKER),
                (workInProgress2.child = _primaryChildFragment2),
                _fallbackChildFragment2
              );
            } else {
              var _nextPrimaryChildren = nextProps.children,
                currentPrimaryChild = currentPrimaryChildFragment.child,
                primaryChild = reconcileChildFibers(
                  workInProgress2,
                  currentPrimaryChild,
                  _nextPrimaryChildren,
                  renderExpirationTime2
                );
              return (workInProgress2.memoizedState = null), (workInProgress2.child = primaryChild);
            }
          } else {
            var _currentPrimaryChild = current2.child;
            if (nextDidTimeout) {
              var _nextFallbackChildren3 = nextProps.fallback,
                _primaryChildFragment3 = createFiberFromFragment(null, mode, NoWork, null);
              if (
                ((_primaryChildFragment3.return = workInProgress2),
                (_primaryChildFragment3.child = _currentPrimaryChild),
                _currentPrimaryChild !== null && (_currentPrimaryChild.return = _primaryChildFragment3),
                (workInProgress2.mode & BlockingMode) === NoMode)
              ) {
                var _progressedState2 = workInProgress2.memoizedState,
                  _progressedPrimaryChild2 =
                    _progressedState2 !== null ? workInProgress2.child.child : workInProgress2.child;
                _primaryChildFragment3.child = _progressedPrimaryChild2;
                for (var _progressedChild3 = _progressedPrimaryChild2; _progressedChild3 !== null; )
                  (_progressedChild3.return = _primaryChildFragment3), (_progressedChild3 = _progressedChild3.sibling);
              }
              if (workInProgress2.mode & ProfileMode) {
                for (var _treeBaseDuration2 = 0, _hiddenChild2 = _primaryChildFragment3.child; _hiddenChild2 !== null; )
                  (_treeBaseDuration2 += _hiddenChild2.treeBaseDuration), (_hiddenChild2 = _hiddenChild2.sibling);
                _primaryChildFragment3.treeBaseDuration = _treeBaseDuration2;
              }
              var _fallbackChildFragment3 = createFiberFromFragment(
                _nextFallbackChildren3,
                mode,
                renderExpirationTime2,
                null
              );
              return (
                (_fallbackChildFragment3.return = workInProgress2),
                (_primaryChildFragment3.sibling = _fallbackChildFragment3),
                (_fallbackChildFragment3.effectTag |= Placement),
                (_primaryChildFragment3.childExpirationTime = NoWork),
                (workInProgress2.memoizedState = SUSPENDED_MARKER),
                (workInProgress2.child = _primaryChildFragment3),
                _fallbackChildFragment3
              );
            } else {
              workInProgress2.memoizedState = null;
              var _nextPrimaryChildren2 = nextProps.children;
              return (workInProgress2.child = reconcileChildFibers(
                workInProgress2,
                _currentPrimaryChild,
                _nextPrimaryChildren2,
                renderExpirationTime2
              ));
            }
          }
        }
      }
      function scheduleWorkOnFiber(fiber, renderExpirationTime2) {
        fiber.expirationTime < renderExpirationTime2 && (fiber.expirationTime = renderExpirationTime2);
        var alternate = fiber.alternate;
        alternate !== null &&
          alternate.expirationTime < renderExpirationTime2 &&
          (alternate.expirationTime = renderExpirationTime2),
          scheduleWorkOnParentPath(fiber.return, renderExpirationTime2);
      }
      function propagateSuspenseContextChange(workInProgress2, firstChild, renderExpirationTime2) {
        for (var node = firstChild; node !== null; ) {
          if (node.tag === SuspenseComponent) {
            var state = node.memoizedState;
            state !== null && scheduleWorkOnFiber(node, renderExpirationTime2);
          } else if (node.tag === SuspenseListComponent) scheduleWorkOnFiber(node, renderExpirationTime2);
          else if (node.child !== null) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === workInProgress2) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === workInProgress2) return;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }
      function findLastContentRow(firstChild) {
        for (var row = firstChild, lastContentRow = null; row !== null; ) {
          var currentRow = row.alternate;
          currentRow !== null && findFirstSuspended(currentRow) === null && (lastContentRow = row), (row = row.sibling);
        }
        return lastContentRow;
      }
      function validateRevealOrder(revealOrder) {
        if (
          revealOrder !== void 0 &&
          revealOrder !== "forwards" &&
          revealOrder !== "backwards" &&
          revealOrder !== "together" &&
          !didWarnAboutRevealOrder[revealOrder]
        )
          if (((didWarnAboutRevealOrder[revealOrder] = !0), typeof revealOrder == "string"))
            switch (revealOrder.toLowerCase()) {
              case "together":
              case "forwards":
              case "backwards": {
                error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                  revealOrder,
                  revealOrder.toLowerCase()
                );
                break;
              }
              case "forward":
              case "backward": {
                error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                  revealOrder,
                  revealOrder.toLowerCase()
                );
                break;
              }
              default:
                error(
                  '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  revealOrder
                );
                break;
            }
          else
            error(
              '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              revealOrder
            );
      }
      function validateTailOptions(tailMode, revealOrder) {
        tailMode !== void 0 &&
          !didWarnAboutTailOptions[tailMode] &&
          (tailMode !== "collapsed" && tailMode !== "hidden"
            ? ((didWarnAboutTailOptions[tailMode] = !0),
              error(
                '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
                tailMode
              ))
            : revealOrder !== "forwards" &&
              revealOrder !== "backwards" &&
              ((didWarnAboutTailOptions[tailMode] = !0),
              error(
                '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                tailMode
              )));
      }
      function validateSuspenseListNestedChild(childSlot, index2) {
        {
          var isArray2 = Array.isArray(childSlot),
            isIterable = !isArray2 && typeof getIteratorFn(childSlot) == "function";
          if (isArray2 || isIterable) {
            var type = isArray2 ? "array" : "iterable";
            return (
              error(
                "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
                type,
                index2,
                type
              ),
              !1
            );
          }
        }
        return !0;
      }
      function validateSuspenseListChildren(children, revealOrder) {
        if (
          (revealOrder === "forwards" || revealOrder === "backwards") &&
          children !== void 0 &&
          children !== null &&
          children !== !1
        )
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) if (!validateSuspenseListNestedChild(children[i], i)) return;
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn == "function") {
              var childrenIterator = iteratorFn.call(children);
              if (childrenIterator)
                for (var step = childrenIterator.next(), _i = 0; !step.done; step = childrenIterator.next()) {
                  if (!validateSuspenseListNestedChild(step.value, _i)) return;
                  _i++;
                }
            } else
              error(
                'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
                revealOrder
              );
          }
      }
      function initSuspenseListRenderState(
        workInProgress2,
        isBackwards,
        tail,
        lastContentRow,
        tailMode,
        lastEffectBeforeRendering
      ) {
        var renderState = workInProgress2.memoizedState;
        renderState === null
          ? (workInProgress2.memoizedState = {
              isBackwards,
              rendering: null,
              renderingStartTime: 0,
              last: lastContentRow,
              tail,
              tailExpiration: 0,
              tailMode,
              lastEffect: lastEffectBeforeRendering,
            })
          : ((renderState.isBackwards = isBackwards),
            (renderState.rendering = null),
            (renderState.renderingStartTime = 0),
            (renderState.last = lastContentRow),
            (renderState.tail = tail),
            (renderState.tailExpiration = 0),
            (renderState.tailMode = tailMode),
            (renderState.lastEffect = lastEffectBeforeRendering));
      }
      function updateSuspenseListComponent(current2, workInProgress2, renderExpirationTime2) {
        var nextProps = workInProgress2.pendingProps,
          revealOrder = nextProps.revealOrder,
          tailMode = nextProps.tail,
          newChildren = nextProps.children;
        validateRevealOrder(revealOrder),
          validateTailOptions(tailMode, revealOrder),
          validateSuspenseListChildren(newChildren, revealOrder),
          reconcileChildren(current2, workInProgress2, newChildren, renderExpirationTime2);
        var suspenseContext = suspenseStackCursor.current,
          shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
        if (shouldForceFallback)
          (suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback)),
            (workInProgress2.effectTag |= DidCapture);
        else {
          var didSuspendBefore = current2 !== null && (current2.effectTag & DidCapture) !== NoEffect;
          didSuspendBefore &&
            propagateSuspenseContextChange(workInProgress2, workInProgress2.child, renderExpirationTime2),
            (suspenseContext = setDefaultShallowSuspenseContext(suspenseContext));
        }
        if ((pushSuspenseContext(workInProgress2, suspenseContext), (workInProgress2.mode & BlockingMode) === NoMode))
          workInProgress2.memoizedState = null;
        else
          switch (revealOrder) {
            case "forwards": {
              var lastContentRow = findLastContentRow(workInProgress2.child),
                tail;
              lastContentRow === null
                ? ((tail = workInProgress2.child), (workInProgress2.child = null))
                : ((tail = lastContentRow.sibling), (lastContentRow.sibling = null)),
                initSuspenseListRenderState(
                  workInProgress2,
                  !1,
                  tail,
                  lastContentRow,
                  tailMode,
                  workInProgress2.lastEffect
                );
              break;
            }
            case "backwards": {
              var _tail = null,
                row = workInProgress2.child;
              for (workInProgress2.child = null; row !== null; ) {
                var currentRow = row.alternate;
                if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                  workInProgress2.child = row;
                  break;
                }
                var nextRow = row.sibling;
                (row.sibling = _tail), (_tail = row), (row = nextRow);
              }
              initSuspenseListRenderState(workInProgress2, !0, _tail, null, tailMode, workInProgress2.lastEffect);
              break;
            }
            case "together": {
              initSuspenseListRenderState(workInProgress2, !1, null, null, void 0, workInProgress2.lastEffect);
              break;
            }
            default:
              workInProgress2.memoizedState = null;
          }
        return workInProgress2.child;
      }
      function updatePortalComponent(current2, workInProgress2, renderExpirationTime2) {
        pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
        var nextChildren = workInProgress2.pendingProps;
        return (
          current2 === null
            ? (workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderExpirationTime2))
            : reconcileChildren(current2, workInProgress2, nextChildren, renderExpirationTime2),
          workInProgress2.child
        );
      }
      function updateContextProvider(current2, workInProgress2, renderExpirationTime2) {
        var providerType = workInProgress2.type,
          context = providerType._context,
          newProps = workInProgress2.pendingProps,
          oldProps = workInProgress2.memoizedProps,
          newValue = newProps.value;
        {
          var providerPropTypes = workInProgress2.type.propTypes;
          providerPropTypes &&
            checkPropTypes(providerPropTypes, newProps, "prop", "Context.Provider", getCurrentFiberStackInDev);
        }
        if ((pushProvider(workInProgress2, newValue), oldProps !== null)) {
          var oldValue = oldProps.value,
            changedBits = calculateChangedBits(context, newValue, oldValue);
          if (changedBits === 0) {
            if (oldProps.children === newProps.children && !hasContextChanged())
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2);
          } else propagateContextChange(workInProgress2, context, changedBits, renderExpirationTime2);
        }
        var newChildren = newProps.children;
        return reconcileChildren(current2, workInProgress2, newChildren, renderExpirationTime2), workInProgress2.child;
      }
      var hasWarnedAboutUsingContextAsConsumer = !1;
      function updateContextConsumer(current2, workInProgress2, renderExpirationTime2) {
        var context = workInProgress2.type;
        context._context === void 0
          ? context !== context.Consumer &&
            (hasWarnedAboutUsingContextAsConsumer ||
              ((hasWarnedAboutUsingContextAsConsumer = !0),
              error(
                "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
              )))
          : (context = context._context);
        var newProps = workInProgress2.pendingProps,
          render2 = newProps.children;
        typeof render2 != "function" &&
          error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ),
          prepareToReadContext(workInProgress2, renderExpirationTime2);
        var newValue = readContext(context, newProps.unstable_observedBits),
          newChildren;
        return (
          (ReactCurrentOwner$1.current = workInProgress2),
          setIsRendering(!0),
          (newChildren = render2(newValue)),
          setIsRendering(!1),
          (workInProgress2.effectTag |= PerformedWork),
          reconcileChildren(current2, workInProgress2, newChildren, renderExpirationTime2),
          workInProgress2.child
        );
      }
      function markWorkInProgressReceivedUpdate() {
        didReceiveUpdate = !0;
      }
      function bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2) {
        cancelWorkTimer(workInProgress2),
          current2 !== null && (workInProgress2.dependencies = current2.dependencies),
          stopProfilerTimerIfRunning();
        var updateExpirationTime = workInProgress2.expirationTime;
        updateExpirationTime !== NoWork && markUnprocessedUpdateTime(updateExpirationTime);
        var childExpirationTime = workInProgress2.childExpirationTime;
        return childExpirationTime < renderExpirationTime2
          ? null
          : (cloneChildFibers(current2, workInProgress2), workInProgress2.child);
      }
      function remountFiber(current2, oldWorkInProgress, newWorkInProgress) {
        {
          var returnFiber = oldWorkInProgress.return;
          if (returnFiber === null) throw new Error("Cannot swap the root fiber.");
          if (
            ((current2.alternate = null),
            (oldWorkInProgress.alternate = null),
            (newWorkInProgress.index = oldWorkInProgress.index),
            (newWorkInProgress.sibling = oldWorkInProgress.sibling),
            (newWorkInProgress.return = oldWorkInProgress.return),
            (newWorkInProgress.ref = oldWorkInProgress.ref),
            oldWorkInProgress === returnFiber.child)
          )
            returnFiber.child = newWorkInProgress;
          else {
            var prevSibling = returnFiber.child;
            if (prevSibling === null) throw new Error("Expected parent to have a child.");
            for (; prevSibling.sibling !== oldWorkInProgress; )
              if (((prevSibling = prevSibling.sibling), prevSibling === null))
                throw new Error("Expected to find the previous sibling.");
            prevSibling.sibling = newWorkInProgress;
          }
          var last = returnFiber.lastEffect;
          return (
            last !== null
              ? ((last.nextEffect = current2), (returnFiber.lastEffect = current2))
              : (returnFiber.firstEffect = returnFiber.lastEffect = current2),
            (current2.nextEffect = null),
            (current2.effectTag = Deletion),
            (newWorkInProgress.effectTag |= Placement),
            newWorkInProgress
          );
        }
      }
      function beginWork(current2, workInProgress2, renderExpirationTime2) {
        var updateExpirationTime = workInProgress2.expirationTime;
        if (workInProgress2._debugNeedsRemount && current2 !== null)
          return remountFiber(
            current2,
            workInProgress2,
            createFiberFromTypeAndProps(
              workInProgress2.type,
              workInProgress2.key,
              workInProgress2.pendingProps,
              workInProgress2._debugOwner || null,
              workInProgress2.mode,
              workInProgress2.expirationTime
            )
          );
        if (current2 !== null) {
          var oldProps = current2.memoizedProps,
            newProps = workInProgress2.pendingProps;
          if (oldProps !== newProps || hasContextChanged() || workInProgress2.type !== current2.type)
            didReceiveUpdate = !0;
          else if (updateExpirationTime < renderExpirationTime2) {
            switch (((didReceiveUpdate = !1), workInProgress2.tag)) {
              case HostRoot:
                pushHostRootContext(workInProgress2), resetHydrationState();
                break;
              case HostComponent:
                if (
                  (pushHostContext(workInProgress2),
                  workInProgress2.mode & ConcurrentMode &&
                    renderExpirationTime2 !== Never &&
                    shouldDeprioritizeSubtree(workInProgress2.type, newProps))
                )
                  return (
                    markSpawnedWork(Never),
                    (workInProgress2.expirationTime = workInProgress2.childExpirationTime = Never),
                    null
                  );
                break;
              case ClassComponent: {
                var Component = workInProgress2.type;
                isContextProvider(Component) && pushContextProvider(workInProgress2);
                break;
              }
              case HostPortal:
                pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
                break;
              case ContextProvider: {
                var newValue = workInProgress2.memoizedProps.value;
                pushProvider(workInProgress2, newValue);
                break;
              }
              case Profiler:
                {
                  var hasChildWork = workInProgress2.childExpirationTime >= renderExpirationTime2;
                  hasChildWork && (workInProgress2.effectTag |= Update);
                }
                break;
              case SuspenseComponent: {
                var state = workInProgress2.memoizedState;
                if (state !== null) {
                  var primaryChildFragment = workInProgress2.child,
                    primaryChildExpirationTime = primaryChildFragment.childExpirationTime;
                  if (primaryChildExpirationTime !== NoWork && primaryChildExpirationTime >= renderExpirationTime2)
                    return updateSuspenseComponent(current2, workInProgress2, renderExpirationTime2);
                  pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                  var child = bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2);
                  return child !== null ? child.sibling : null;
                } else
                  pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                break;
              }
              case SuspenseListComponent: {
                var didSuspendBefore = (current2.effectTag & DidCapture) !== NoEffect,
                  _hasChildWork = workInProgress2.childExpirationTime >= renderExpirationTime2;
                if (didSuspendBefore) {
                  if (_hasChildWork)
                    return updateSuspenseListComponent(current2, workInProgress2, renderExpirationTime2);
                  workInProgress2.effectTag |= DidCapture;
                }
                var renderState = workInProgress2.memoizedState;
                if (
                  (renderState !== null && ((renderState.rendering = null), (renderState.tail = null)),
                  pushSuspenseContext(workInProgress2, suspenseStackCursor.current),
                  _hasChildWork)
                )
                  break;
                return null;
              }
            }
            return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderExpirationTime2);
          } else didReceiveUpdate = !1;
        } else didReceiveUpdate = !1;
        switch (((workInProgress2.expirationTime = NoWork), workInProgress2.tag)) {
          case IndeterminateComponent:
            return mountIndeterminateComponent(current2, workInProgress2, workInProgress2.type, renderExpirationTime2);
          case LazyComponent: {
            var elementType = workInProgress2.elementType;
            return mountLazyComponent(
              current2,
              workInProgress2,
              elementType,
              updateExpirationTime,
              renderExpirationTime2
            );
          }
          case FunctionComponent: {
            var _Component = workInProgress2.type,
              unresolvedProps = workInProgress2.pendingProps,
              resolvedProps =
                workInProgress2.elementType === _Component
                  ? unresolvedProps
                  : resolveDefaultProps(_Component, unresolvedProps);
            return updateFunctionComponent(current2, workInProgress2, _Component, resolvedProps, renderExpirationTime2);
          }
          case ClassComponent: {
            var _Component2 = workInProgress2.type,
              _unresolvedProps = workInProgress2.pendingProps,
              _resolvedProps =
                workInProgress2.elementType === _Component2
                  ? _unresolvedProps
                  : resolveDefaultProps(_Component2, _unresolvedProps);
            return updateClassComponent(current2, workInProgress2, _Component2, _resolvedProps, renderExpirationTime2);
          }
          case HostRoot:
            return updateHostRoot(current2, workInProgress2, renderExpirationTime2);
          case HostComponent:
            return updateHostComponent(current2, workInProgress2, renderExpirationTime2);
          case HostText:
            return updateHostText(current2, workInProgress2);
          case SuspenseComponent:
            return updateSuspenseComponent(current2, workInProgress2, renderExpirationTime2);
          case HostPortal:
            return updatePortalComponent(current2, workInProgress2, renderExpirationTime2);
          case ForwardRef: {
            var type = workInProgress2.type,
              _unresolvedProps2 = workInProgress2.pendingProps,
              _resolvedProps2 =
                workInProgress2.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);
            return updateForwardRef(current2, workInProgress2, type, _resolvedProps2, renderExpirationTime2);
          }
          case Fragment:
            return updateFragment(current2, workInProgress2, renderExpirationTime2);
          case Mode:
            return updateMode(current2, workInProgress2, renderExpirationTime2);
          case Profiler:
            return updateProfiler(current2, workInProgress2, renderExpirationTime2);
          case ContextProvider:
            return updateContextProvider(current2, workInProgress2, renderExpirationTime2);
          case ContextConsumer:
            return updateContextConsumer(current2, workInProgress2, renderExpirationTime2);
          case MemoComponent: {
            var _type2 = workInProgress2.type,
              _unresolvedProps3 = workInProgress2.pendingProps,
              _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);
            if (workInProgress2.type !== workInProgress2.elementType) {
              var outerPropTypes = _type2.propTypes;
              outerPropTypes &&
                checkPropTypes(
                  outerPropTypes,
                  _resolvedProps3,
                  "prop",
                  getComponentName(_type2),
                  getCurrentFiberStackInDev
                );
            }
            return (
              (_resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3)),
              updateMemoComponent(
                current2,
                workInProgress2,
                _type2,
                _resolvedProps3,
                updateExpirationTime,
                renderExpirationTime2
              )
            );
          }
          case SimpleMemoComponent:
            return updateSimpleMemoComponent(
              current2,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              updateExpirationTime,
              renderExpirationTime2
            );
          case IncompleteClassComponent: {
            var _Component3 = workInProgress2.type,
              _unresolvedProps4 = workInProgress2.pendingProps,
              _resolvedProps4 =
                workInProgress2.elementType === _Component3
                  ? _unresolvedProps4
                  : resolveDefaultProps(_Component3, _unresolvedProps4);
            return mountIncompleteClassComponent(
              current2,
              workInProgress2,
              _Component3,
              _resolvedProps4,
              renderExpirationTime2
            );
          }
          case SuspenseListComponent:
            return updateSuspenseListComponent(current2, workInProgress2, renderExpirationTime2);
        }
        throw Error(
          "Unknown unit of work tag (" +
            workInProgress2.tag +
            "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function markUpdate(workInProgress2) {
        workInProgress2.effectTag |= Update;
      }
      function markRef$1(workInProgress2) {
        workInProgress2.effectTag |= Ref;
      }
      var appendAllChildren, updateHostContainer, updateHostComponent$1, updateHostText$1;
      (appendAllChildren = function (parent, workInProgress2, needsVisibilityToggle, isHidden) {
        for (var node = workInProgress2.child; node !== null; ) {
          if (node.tag === HostComponent || node.tag === HostText) appendInitialChild(parent, node.stateNode);
          else if (node.tag !== HostPortal) {
            if (node.child !== null) {
              (node.child.return = node), (node = node.child);
              continue;
            }
          }
          if (node === workInProgress2) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === workInProgress2) return;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }),
        (updateHostContainer = function (workInProgress2) {}),
        (updateHostComponent$1 = function (current2, workInProgress2, type, newProps, rootContainerInstance) {
          var oldProps = current2.memoizedProps;
          if (oldProps !== newProps) {
            var instance = workInProgress2.stateNode,
              currentHostContext = getHostContext(),
              updatePayload = prepareUpdate(
                instance,
                type,
                oldProps,
                newProps,
                rootContainerInstance,
                currentHostContext
              );
            (workInProgress2.updateQueue = updatePayload), updatePayload && markUpdate(workInProgress2);
          }
        }),
        (updateHostText$1 = function (current2, workInProgress2, oldText, newText) {
          oldText !== newText && markUpdate(workInProgress2);
        });
      function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
        switch (renderState.tailMode) {
          case "hidden": {
            for (var tailNode = renderState.tail, lastTailNode = null; tailNode !== null; )
              tailNode.alternate !== null && (lastTailNode = tailNode), (tailNode = tailNode.sibling);
            lastTailNode === null ? (renderState.tail = null) : (lastTailNode.sibling = null);
            break;
          }
          case "collapsed": {
            for (var _tailNode = renderState.tail, _lastTailNode = null; _tailNode !== null; )
              _tailNode.alternate !== null && (_lastTailNode = _tailNode), (_tailNode = _tailNode.sibling);
            _lastTailNode === null
              ? !hasRenderedATailFallback && renderState.tail !== null
                ? (renderState.tail.sibling = null)
                : (renderState.tail = null)
              : (_lastTailNode.sibling = null);
            break;
          }
        }
      }
      function completeWork(current2, workInProgress2, renderExpirationTime2) {
        var newProps = workInProgress2.pendingProps;
        switch (workInProgress2.tag) {
          case IndeterminateComponent:
          case LazyComponent:
          case SimpleMemoComponent:
          case FunctionComponent:
          case ForwardRef:
          case Fragment:
          case Mode:
          case Profiler:
          case ContextConsumer:
          case MemoComponent:
            return null;
          case ClassComponent: {
            var Component = workInProgress2.type;
            return isContextProvider(Component) && popContext(workInProgress2), null;
          }
          case HostRoot: {
            popHostContainer(workInProgress2), popTopLevelContextObject(workInProgress2);
            var fiberRoot = workInProgress2.stateNode;
            if (
              (fiberRoot.pendingContext &&
                ((fiberRoot.context = fiberRoot.pendingContext), (fiberRoot.pendingContext = null)),
              current2 === null || current2.child === null)
            ) {
              var wasHydrated = popHydrationState(workInProgress2);
              wasHydrated && markUpdate(workInProgress2);
            }
            return updateHostContainer(workInProgress2), null;
          }
          case HostComponent: {
            popHostContext(workInProgress2);
            var rootContainerInstance = getRootHostContainer(),
              type = workInProgress2.type;
            if (current2 !== null && workInProgress2.stateNode != null)
              updateHostComponent$1(current2, workInProgress2, type, newProps, rootContainerInstance),
                current2.ref !== workInProgress2.ref && markRef$1(workInProgress2);
            else {
              if (!newProps) {
                if (workInProgress2.stateNode === null)
                  throw Error(
                    "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                  );
                return null;
              }
              var currentHostContext = getHostContext(),
                _wasHydrated = popHydrationState(workInProgress2);
              if (_wasHydrated)
                prepareToHydrateHostInstance(workInProgress2, rootContainerInstance, currentHostContext) &&
                  markUpdate(workInProgress2);
              else {
                var instance = createInstance(
                  type,
                  newProps,
                  rootContainerInstance,
                  currentHostContext,
                  workInProgress2
                );
                appendAllChildren(instance, workInProgress2, !1, !1),
                  (workInProgress2.stateNode = instance),
                  finalizeInitialChildren(instance, type, newProps, rootContainerInstance) &&
                    markUpdate(workInProgress2);
              }
              workInProgress2.ref !== null && markRef$1(workInProgress2);
            }
            return null;
          }
          case HostText: {
            var newText = newProps;
            if (current2 && workInProgress2.stateNode != null) {
              var oldText = current2.memoizedProps;
              updateHostText$1(current2, workInProgress2, oldText, newText);
            } else {
              if (typeof newText != "string" && workInProgress2.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              var _rootContainerInstance = getRootHostContainer(),
                _currentHostContext = getHostContext(),
                _wasHydrated2 = popHydrationState(workInProgress2);
              _wasHydrated2
                ? prepareToHydrateHostTextInstance(workInProgress2) && markUpdate(workInProgress2)
                : (workInProgress2.stateNode = createTextInstance(
                    newText,
                    _rootContainerInstance,
                    _currentHostContext,
                    workInProgress2
                  ));
            }
            return null;
          }
          case SuspenseComponent: {
            popSuspenseContext(workInProgress2);
            var nextState = workInProgress2.memoizedState;
            if ((workInProgress2.effectTag & DidCapture) !== NoEffect)
              return (workInProgress2.expirationTime = renderExpirationTime2), workInProgress2;
            var nextDidTimeout = nextState !== null,
              prevDidTimeout = !1;
            if (current2 === null)
              workInProgress2.memoizedProps.fallback !== void 0 && popHydrationState(workInProgress2);
            else {
              var prevState = current2.memoizedState;
              if (((prevDidTimeout = prevState !== null), !nextDidTimeout && prevState !== null)) {
                var currentFallbackChild = current2.child.sibling;
                if (currentFallbackChild !== null) {
                  var first = workInProgress2.firstEffect;
                  first !== null
                    ? ((workInProgress2.firstEffect = currentFallbackChild), (currentFallbackChild.nextEffect = first))
                    : ((workInProgress2.firstEffect = workInProgress2.lastEffect = currentFallbackChild),
                      (currentFallbackChild.nextEffect = null)),
                    (currentFallbackChild.effectTag = Deletion);
                }
              }
            }
            if (nextDidTimeout && !prevDidTimeout && (workInProgress2.mode & BlockingMode) !== NoMode) {
              var hasInvisibleChildContext =
                current2 === null && workInProgress2.memoizedProps.unstable_avoidThisFallback !== !0;
              hasInvisibleChildContext ||
              hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)
                ? renderDidSuspend()
                : renderDidSuspendDelayIfPossible();
            }
            return (nextDidTimeout || prevDidTimeout) && (workInProgress2.effectTag |= Update), null;
          }
          case HostPortal:
            return popHostContainer(workInProgress2), updateHostContainer(workInProgress2), null;
          case ContextProvider:
            return popProvider(workInProgress2), null;
          case IncompleteClassComponent: {
            var _Component = workInProgress2.type;
            return isContextProvider(_Component) && popContext(workInProgress2), null;
          }
          case SuspenseListComponent: {
            popSuspenseContext(workInProgress2);
            var renderState = workInProgress2.memoizedState;
            if (renderState === null) return null;
            var didSuspendAlready = (workInProgress2.effectTag & DidCapture) !== NoEffect,
              renderedTail = renderState.rendering;
            if (renderedTail === null)
              if (didSuspendAlready) cutOffTailIfNeeded(renderState, !1);
              else {
                var cannotBeSuspended =
                  renderHasNotSuspendedYet() && (current2 === null || (current2.effectTag & DidCapture) === NoEffect);
                if (!cannotBeSuspended)
                  for (var row = workInProgress2.child; row !== null; ) {
                    var suspended = findFirstSuspended(row);
                    if (suspended !== null) {
                      (didSuspendAlready = !0),
                        (workInProgress2.effectTag |= DidCapture),
                        cutOffTailIfNeeded(renderState, !1);
                      var newThennables = suspended.updateQueue;
                      return (
                        newThennables !== null &&
                          ((workInProgress2.updateQueue = newThennables), (workInProgress2.effectTag |= Update)),
                        renderState.lastEffect === null && (workInProgress2.firstEffect = null),
                        (workInProgress2.lastEffect = renderState.lastEffect),
                        resetChildFibers(workInProgress2, renderExpirationTime2),
                        pushSuspenseContext(
                          workInProgress2,
                          setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback)
                        ),
                        workInProgress2.child
                      );
                    }
                    row = row.sibling;
                  }
              }
            else {
              if (!didSuspendAlready) {
                var _suspended = findFirstSuspended(renderedTail);
                if (_suspended !== null) {
                  (workInProgress2.effectTag |= DidCapture), (didSuspendAlready = !0);
                  var _newThennables = _suspended.updateQueue;
                  if (
                    (_newThennables !== null &&
                      ((workInProgress2.updateQueue = _newThennables), (workInProgress2.effectTag |= Update)),
                    cutOffTailIfNeeded(renderState, !0),
                    renderState.tail === null && renderState.tailMode === "hidden" && !renderedTail.alternate)
                  ) {
                    var lastEffect = (workInProgress2.lastEffect = renderState.lastEffect);
                    return lastEffect !== null && (lastEffect.nextEffect = null), null;
                  }
                } else if (
                  now() * 2 - renderState.renderingStartTime > renderState.tailExpiration &&
                  renderExpirationTime2 > Never
                ) {
                  (workInProgress2.effectTag |= DidCapture),
                    (didSuspendAlready = !0),
                    cutOffTailIfNeeded(renderState, !1);
                  var nextPriority = renderExpirationTime2 - 1;
                  (workInProgress2.expirationTime = workInProgress2.childExpirationTime = nextPriority),
                    markSpawnedWork(nextPriority);
                }
              }
              if (renderState.isBackwards)
                (renderedTail.sibling = workInProgress2.child), (workInProgress2.child = renderedTail);
              else {
                var previousSibling = renderState.last;
                previousSibling !== null
                  ? (previousSibling.sibling = renderedTail)
                  : (workInProgress2.child = renderedTail),
                  (renderState.last = renderedTail);
              }
            }
            if (renderState.tail !== null) {
              if (renderState.tailExpiration === 0) {
                var TAIL_EXPIRATION_TIMEOUT_MS = 500;
                renderState.tailExpiration = now() + TAIL_EXPIRATION_TIMEOUT_MS;
              }
              var next = renderState.tail;
              (renderState.rendering = next),
                (renderState.tail = next.sibling),
                (renderState.lastEffect = workInProgress2.lastEffect),
                (renderState.renderingStartTime = now()),
                (next.sibling = null);
              var suspenseContext = suspenseStackCursor.current;
              return (
                didSuspendAlready
                  ? (suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback))
                  : (suspenseContext = setDefaultShallowSuspenseContext(suspenseContext)),
                pushSuspenseContext(workInProgress2, suspenseContext),
                next
              );
            }
            return null;
          }
        }
        throw Error(
          "Unknown unit of work tag (" +
            workInProgress2.tag +
            "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function unwindWork(workInProgress2, renderExpirationTime2) {
        switch (workInProgress2.tag) {
          case ClassComponent: {
            var Component = workInProgress2.type;
            isContextProvider(Component) && popContext(workInProgress2);
            var effectTag = workInProgress2.effectTag;
            return effectTag & ShouldCapture
              ? ((workInProgress2.effectTag = (effectTag & ~ShouldCapture) | DidCapture), workInProgress2)
              : null;
          }
          case HostRoot: {
            popHostContainer(workInProgress2), popTopLevelContextObject(workInProgress2);
            var _effectTag = workInProgress2.effectTag;
            if ((_effectTag & DidCapture) !== NoEffect)
              throw Error(
                "The root failed to unmount after an error. This is likely a bug in React. Please file an issue."
              );
            return (workInProgress2.effectTag = (_effectTag & ~ShouldCapture) | DidCapture), workInProgress2;
          }
          case HostComponent:
            return popHostContext(workInProgress2), null;
          case SuspenseComponent: {
            popSuspenseContext(workInProgress2);
            var _effectTag2 = workInProgress2.effectTag;
            return _effectTag2 & ShouldCapture
              ? ((workInProgress2.effectTag = (_effectTag2 & ~ShouldCapture) | DidCapture), workInProgress2)
              : null;
          }
          case SuspenseListComponent:
            return popSuspenseContext(workInProgress2), null;
          case HostPortal:
            return popHostContainer(workInProgress2), null;
          case ContextProvider:
            return popProvider(workInProgress2), null;
          default:
            return null;
        }
      }
      function unwindInterruptedWork(interruptedWork) {
        switch (interruptedWork.tag) {
          case ClassComponent: {
            var childContextTypes = interruptedWork.type.childContextTypes;
            childContextTypes != null && popContext(interruptedWork);
            break;
          }
          case HostRoot: {
            popHostContainer(interruptedWork), popTopLevelContextObject(interruptedWork);
            break;
          }
          case HostComponent: {
            popHostContext(interruptedWork);
            break;
          }
          case HostPortal:
            popHostContainer(interruptedWork);
            break;
          case SuspenseComponent:
            popSuspenseContext(interruptedWork);
            break;
          case SuspenseListComponent:
            popSuspenseContext(interruptedWork);
            break;
          case ContextProvider:
            popProvider(interruptedWork);
            break;
        }
      }
      function createCapturedValue(value, source) {
        return { value, source, stack: getStackByFiberInDevAndProd(source) };
      }
      function logCapturedError(capturedError) {
        var error2 = capturedError.error;
        {
          var componentName = capturedError.componentName,
            componentStack = capturedError.componentStack,
            errorBoundaryName = capturedError.errorBoundaryName,
            errorBoundaryFound = capturedError.errorBoundaryFound,
            willRetry = capturedError.willRetry;
          if (error2 != null && error2._suppressLogging) {
            if (errorBoundaryFound && willRetry) return;
            console.error(error2);
          }
          var componentNameMessage = componentName
              ? "The above error occurred in the <" + componentName + "> component:"
              : "The above error occurred in one of your React components:",
            errorBoundaryMessage;
          errorBoundaryFound && errorBoundaryName
            ? willRetry
              ? (errorBoundaryMessage =
                  "React will try to recreate this component tree from scratch " +
                  ("using the error boundary you provided, " + errorBoundaryName + "."))
              : (errorBoundaryMessage =
                  "This error was initially handled by the error boundary " +
                  errorBoundaryName +
                  `.
Recreating the tree from scratch failed so React will unmount the tree.`)
            : (errorBoundaryMessage = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.`);
          var combinedMessage =
            "" +
            componentNameMessage +
            componentStack +
            `

` +
            ("" + errorBoundaryMessage);
          console.error(combinedMessage);
        }
      }
      var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
      didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
      var PossiblyWeakSet = typeof WeakSet == "function" ? WeakSet : Set;
      function logError(boundary, errorInfo) {
        var source = errorInfo.source,
          stack = errorInfo.stack;
        stack === null && source !== null && (stack = getStackByFiberInDevAndProd(source));
        var capturedError = {
          componentName: source !== null ? getComponentName(source.type) : null,
          componentStack: stack !== null ? stack : "",
          error: errorInfo.value,
          errorBoundary: null,
          errorBoundaryName: null,
          errorBoundaryFound: !1,
          willRetry: !1,
        };
        boundary !== null &&
          boundary.tag === ClassComponent &&
          ((capturedError.errorBoundary = boundary.stateNode),
          (capturedError.errorBoundaryName = getComponentName(boundary.type)),
          (capturedError.errorBoundaryFound = !0),
          (capturedError.willRetry = !0));
        try {
          logCapturedError(capturedError);
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      var callComponentWillUnmountWithTimer = function (current2, instance) {
        startPhaseTimer(current2, "componentWillUnmount"),
          (instance.props = current2.memoizedProps),
          (instance.state = current2.memoizedState),
          instance.componentWillUnmount(),
          stopPhaseTimer();
      };
      function safelyCallComponentWillUnmount(current2, instance) {
        if (
          (invokeGuardedCallback(null, callComponentWillUnmountWithTimer, null, current2, instance), hasCaughtError())
        ) {
          var unmountError = clearCaughtError();
          captureCommitPhaseError(current2, unmountError);
        }
      }
      function safelyDetachRef(current2) {
        var ref = current2.ref;
        if (ref !== null)
          if (typeof ref == "function") {
            if ((invokeGuardedCallback(null, ref, null, null), hasCaughtError())) {
              var refError = clearCaughtError();
              captureCommitPhaseError(current2, refError);
            }
          } else ref.current = null;
      }
      function safelyCallDestroy(current2, destroy) {
        if ((invokeGuardedCallback(null, destroy, null), hasCaughtError())) {
          var error2 = clearCaughtError();
          captureCommitPhaseError(current2, error2);
        }
      }
      function commitBeforeMutationLifeCycles(current2, finishedWork) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent:
          case Block:
            return;
          case ClassComponent: {
            if (finishedWork.effectTag & Snapshot && current2 !== null) {
              var prevProps = current2.memoizedProps,
                prevState = current2.memoizedState;
              startPhaseTimer(finishedWork, "getSnapshotBeforeUpdate");
              var instance = finishedWork.stateNode;
              finishedWork.type === finishedWork.elementType &&
                !didWarnAboutReassigningProps &&
                (instance.props !== finishedWork.memoizedProps &&
                  error(
                    "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                    getComponentName(finishedWork.type) || "instance"
                  ),
                instance.state !== finishedWork.memoizedState &&
                  error(
                    "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                    getComponentName(finishedWork.type) || "instance"
                  ));
              var snapshot = instance.getSnapshotBeforeUpdate(
                finishedWork.elementType === finishedWork.type
                  ? prevProps
                  : resolveDefaultProps(finishedWork.type, prevProps),
                prevState
              );
              {
                var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
                snapshot === void 0 &&
                  !didWarnSet.has(finishedWork.type) &&
                  (didWarnSet.add(finishedWork.type),
                  error(
                    "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
                    getComponentName(finishedWork.type)
                  ));
              }
              (instance.__reactInternalSnapshotBeforeUpdate = snapshot), stopPhaseTimer();
            }
            return;
          }
          case HostRoot:
          case HostComponent:
          case HostText:
          case HostPortal:
          case IncompleteClassComponent:
            return;
        }
        throw Error(
          "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function commitHookEffectListUnmount(tag, finishedWork) {
        var updateQueue = finishedWork.updateQueue,
          lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
        if (lastEffect !== null) {
          var firstEffect = lastEffect.next,
            effect4 = firstEffect;
          do {
            if ((effect4.tag & tag) === tag) {
              var destroy = effect4.destroy;
              (effect4.destroy = void 0), destroy !== void 0 && destroy();
            }
            effect4 = effect4.next;
          } while (effect4 !== firstEffect);
        }
      }
      function commitHookEffectListMount(tag, finishedWork) {
        var updateQueue = finishedWork.updateQueue,
          lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
        if (lastEffect !== null) {
          var firstEffect = lastEffect.next,
            effect4 = firstEffect;
          do {
            if ((effect4.tag & tag) === tag) {
              var create = effect4.create;
              effect4.destroy = create();
              {
                var destroy = effect4.destroy;
                if (destroy !== void 0 && typeof destroy != "function") {
                  var addendum = void 0;
                  destroy === null
                    ? (addendum =
                        " You returned null. If your effect does not require clean up, return undefined (or nothing).")
                    : typeof destroy.then == "function"
                    ? (addendum = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching`)
                    : (addendum = " You returned: " + destroy),
                    error(
                      "An effect function must not return anything besides a function, which is used for clean-up.%s%s",
                      addendum,
                      getStackByFiberInDevAndProd(finishedWork)
                    );
                }
              }
            }
            effect4 = effect4.next;
          } while (effect4 !== firstEffect);
        }
      }
      function commitPassiveHookEffects(finishedWork) {
        if ((finishedWork.effectTag & Passive) !== NoEffect)
          switch (finishedWork.tag) {
            case FunctionComponent:
            case ForwardRef:
            case SimpleMemoComponent:
            case Block: {
              commitHookEffectListUnmount(Passive$1 | HasEffect, finishedWork),
                commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
              break;
            }
          }
      }
      function commitLifeCycles(finishedRoot, current2, finishedWork, committedExpirationTime) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent:
          case Block: {
            commitHookEffectListMount(Layout | HasEffect, finishedWork);
            return;
          }
          case ClassComponent: {
            var instance = finishedWork.stateNode;
            if (finishedWork.effectTag & Update)
              if (current2 === null)
                startPhaseTimer(finishedWork, "componentDidMount"),
                  finishedWork.type === finishedWork.elementType &&
                    !didWarnAboutReassigningProps &&
                    (instance.props !== finishedWork.memoizedProps &&
                      error(
                        "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        getComponentName(finishedWork.type) || "instance"
                      ),
                    instance.state !== finishedWork.memoizedState &&
                      error(
                        "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        getComponentName(finishedWork.type) || "instance"
                      )),
                  instance.componentDidMount(),
                  stopPhaseTimer();
              else {
                var prevProps =
                    finishedWork.elementType === finishedWork.type
                      ? current2.memoizedProps
                      : resolveDefaultProps(finishedWork.type, current2.memoizedProps),
                  prevState = current2.memoizedState;
                startPhaseTimer(finishedWork, "componentDidUpdate"),
                  finishedWork.type === finishedWork.elementType &&
                    !didWarnAboutReassigningProps &&
                    (instance.props !== finishedWork.memoizedProps &&
                      error(
                        "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        getComponentName(finishedWork.type) || "instance"
                      ),
                    instance.state !== finishedWork.memoizedState &&
                      error(
                        "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        getComponentName(finishedWork.type) || "instance"
                      )),
                  instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate),
                  stopPhaseTimer();
              }
            var updateQueue = finishedWork.updateQueue;
            updateQueue !== null &&
              (finishedWork.type === finishedWork.elementType &&
                !didWarnAboutReassigningProps &&
                (instance.props !== finishedWork.memoizedProps &&
                  error(
                    "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                    getComponentName(finishedWork.type) || "instance"
                  ),
                instance.state !== finishedWork.memoizedState &&
                  error(
                    "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                    getComponentName(finishedWork.type) || "instance"
                  )),
              commitUpdateQueue(finishedWork, updateQueue, instance));
            return;
          }
          case HostRoot: {
            var _updateQueue = finishedWork.updateQueue;
            if (_updateQueue !== null) {
              var _instance = null;
              if (finishedWork.child !== null)
                switch (finishedWork.child.tag) {
                  case HostComponent:
                    _instance = finishedWork.child.stateNode;
                    break;
                  case ClassComponent:
                    _instance = finishedWork.child.stateNode;
                    break;
                }
              commitUpdateQueue(finishedWork, _updateQueue, _instance);
            }
            return;
          }
          case HostComponent: {
            var _instance2 = finishedWork.stateNode;
            if (current2 === null && finishedWork.effectTag & Update) {
              var type = finishedWork.type,
                props = finishedWork.memoizedProps;
              commitMount(_instance2, type, props);
            }
            return;
          }
          case HostText:
            return;
          case HostPortal:
            return;
          case Profiler: {
            {
              var onRender = finishedWork.memoizedProps.onRender;
              typeof onRender == "function" &&
                onRender(
                  finishedWork.memoizedProps.id,
                  current2 === null ? "mount" : "update",
                  finishedWork.actualDuration,
                  finishedWork.treeBaseDuration,
                  finishedWork.actualStartTime,
                  getCommitTime(),
                  finishedRoot.memoizedInteractions
                );
            }
            return;
          }
          case SuspenseComponent: {
            commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            return;
          }
          case SuspenseListComponent:
          case IncompleteClassComponent:
          case FundamentalComponent:
          case ScopeComponent:
            return;
        }
        throw Error(
          "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function hideOrUnhideAllChildren(finishedWork, isHidden) {
        for (var node = finishedWork; ; ) {
          if (node.tag === HostComponent) {
            var instance = node.stateNode;
            isHidden ? hideInstance(instance) : unhideInstance(node.stateNode, node.memoizedProps);
          } else if (node.tag === HostText) {
            var _instance3 = node.stateNode;
            isHidden ? hideTextInstance(_instance3) : unhideTextInstance(_instance3, node.memoizedProps);
          } else if (
            node.tag === SuspenseComponent &&
            node.memoizedState !== null &&
            node.memoizedState.dehydrated === null
          ) {
            var fallbackChildFragment = node.child.sibling;
            (fallbackChildFragment.return = node), (node = fallbackChildFragment);
            continue;
          } else if (node.child !== null) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === finishedWork) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === finishedWork) return;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }
      function commitAttachRef(finishedWork) {
        var ref = finishedWork.ref;
        if (ref !== null) {
          var instance = finishedWork.stateNode,
            instanceToUse;
          switch (finishedWork.tag) {
            case HostComponent:
              instanceToUse = instance;
              break;
            default:
              instanceToUse = instance;
          }
          typeof ref == "function"
            ? ref(instanceToUse)
            : (ref.hasOwnProperty("current") ||
                error(
                  "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s",
                  getComponentName(finishedWork.type),
                  getStackByFiberInDevAndProd(finishedWork)
                ),
              (ref.current = instanceToUse));
        }
      }
      function commitDetachRef(current2) {
        var currentRef = current2.ref;
        currentRef !== null && (typeof currentRef == "function" ? currentRef(null) : (currentRef.current = null));
      }
      function commitUnmount(finishedRoot, current2, renderPriorityLevel) {
        switch ((onCommitUnmount(current2), current2.tag)) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent:
          case Block: {
            var updateQueue = current2.updateQueue;
            if (updateQueue !== null) {
              var lastEffect = updateQueue.lastEffect;
              if (lastEffect !== null) {
                var firstEffect = lastEffect.next;
                {
                  var priorityLevel = renderPriorityLevel > NormalPriority ? NormalPriority : renderPriorityLevel;
                  runWithPriority$1(priorityLevel, function () {
                    var effect4 = firstEffect;
                    do {
                      var _destroy = effect4.destroy;
                      _destroy !== void 0 && safelyCallDestroy(current2, _destroy), (effect4 = effect4.next);
                    } while (effect4 !== firstEffect);
                  });
                }
              }
            }
            return;
          }
          case ClassComponent: {
            safelyDetachRef(current2);
            var instance = current2.stateNode;
            typeof instance.componentWillUnmount == "function" && safelyCallComponentWillUnmount(current2, instance);
            return;
          }
          case HostComponent: {
            safelyDetachRef(current2);
            return;
          }
          case HostPortal: {
            unmountHostComponents(finishedRoot, current2, renderPriorityLevel);
            return;
          }
          case FundamentalComponent:
            return;
          case DehydratedFragment:
            return;
          case ScopeComponent:
            return;
        }
      }
      function commitNestedUnmounts(finishedRoot, root2, renderPriorityLevel) {
        for (var node = root2; ; ) {
          if (
            (commitUnmount(finishedRoot, node, renderPriorityLevel), node.child !== null && node.tag !== HostPortal)
          ) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === root2) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === root2) return;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }
      function detachFiber(current2) {
        var alternate = current2.alternate;
        (current2.return = null),
          (current2.child = null),
          (current2.memoizedState = null),
          (current2.updateQueue = null),
          (current2.dependencies = null),
          (current2.alternate = null),
          (current2.firstEffect = null),
          (current2.lastEffect = null),
          (current2.pendingProps = null),
          (current2.memoizedProps = null),
          (current2.stateNode = null),
          alternate !== null && detachFiber(alternate);
      }
      function getHostParentFiber(fiber) {
        for (var parent = fiber.return; parent !== null; ) {
          if (isHostParent(parent)) return parent;
          parent = parent.return;
        }
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function isHostParent(fiber) {
        return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
      }
      function getHostSibling(fiber) {
        var node = fiber;
        siblings: for (;;) {
          for (; node.sibling === null; ) {
            if (node.return === null || isHostParent(node.return)) return null;
            node = node.return;
          }
          for (
            node.sibling.return = node.return, node = node.sibling;
            node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment;

          ) {
            if (node.effectTag & Placement || node.child === null || node.tag === HostPortal) continue siblings;
            (node.child.return = node), (node = node.child);
          }
          if (!(node.effectTag & Placement)) return node.stateNode;
        }
      }
      function commitPlacement(finishedWork) {
        var parentFiber = getHostParentFiber(finishedWork),
          parent,
          isContainer,
          parentStateNode = parentFiber.stateNode;
        switch (parentFiber.tag) {
          case HostComponent:
            (parent = parentStateNode), (isContainer = !1);
            break;
          case HostRoot:
            (parent = parentStateNode.containerInfo), (isContainer = !0);
            break;
          case HostPortal:
            (parent = parentStateNode.containerInfo), (isContainer = !0);
            break;
          case FundamentalComponent:
          default:
            throw Error(
              "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        parentFiber.effectTag & ContentReset && (resetTextContent(parent), (parentFiber.effectTag &= ~ContentReset));
        var before = getHostSibling(finishedWork);
        isContainer
          ? insertOrAppendPlacementNodeIntoContainer(finishedWork, before, parent)
          : insertOrAppendPlacementNode(finishedWork, before, parent);
      }
      function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
        var tag = node.tag,
          isHost = tag === HostComponent || tag === HostText;
        if (isHost || enableFundamentalAPI) {
          var stateNode = isHost ? node.stateNode : node.stateNode.instance;
          before ? insertInContainerBefore(parent, stateNode, before) : appendChildToContainer(parent, stateNode);
        } else if (tag !== HostPortal) {
          var child = node.child;
          if (child !== null) {
            insertOrAppendPlacementNodeIntoContainer(child, before, parent);
            for (var sibling = child.sibling; sibling !== null; )
              insertOrAppendPlacementNodeIntoContainer(sibling, before, parent), (sibling = sibling.sibling);
          }
        }
      }
      function insertOrAppendPlacementNode(node, before, parent) {
        var tag = node.tag,
          isHost = tag === HostComponent || tag === HostText;
        if (isHost || enableFundamentalAPI) {
          var stateNode = isHost ? node.stateNode : node.stateNode.instance;
          before ? insertBefore(parent, stateNode, before) : appendChild(parent, stateNode);
        } else if (tag !== HostPortal) {
          var child = node.child;
          if (child !== null) {
            insertOrAppendPlacementNode(child, before, parent);
            for (var sibling = child.sibling; sibling !== null; )
              insertOrAppendPlacementNode(sibling, before, parent), (sibling = sibling.sibling);
          }
        }
      }
      function unmountHostComponents(finishedRoot, current2, renderPriorityLevel) {
        for (var node = current2, currentParentIsValid = !1, currentParent, currentParentIsContainer; ; ) {
          if (!currentParentIsValid) {
            var parent = node.return;
            findParent: for (;;) {
              if (parent === null)
                throw Error(
                  "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
                );
              var parentStateNode = parent.stateNode;
              switch (parent.tag) {
                case HostComponent:
                  (currentParent = parentStateNode), (currentParentIsContainer = !1);
                  break findParent;
                case HostRoot:
                  (currentParent = parentStateNode.containerInfo), (currentParentIsContainer = !0);
                  break findParent;
                case HostPortal:
                  (currentParent = parentStateNode.containerInfo), (currentParentIsContainer = !0);
                  break findParent;
              }
              parent = parent.return;
            }
            currentParentIsValid = !0;
          }
          if (node.tag === HostComponent || node.tag === HostText)
            commitNestedUnmounts(finishedRoot, node, renderPriorityLevel),
              currentParentIsContainer
                ? removeChildFromContainer(currentParent, node.stateNode)
                : removeChild(currentParent, node.stateNode);
          else if (node.tag === HostPortal) {
            if (node.child !== null) {
              (currentParent = node.stateNode.containerInfo),
                (currentParentIsContainer = !0),
                (node.child.return = node),
                (node = node.child);
              continue;
            }
          } else if ((commitUnmount(finishedRoot, node, renderPriorityLevel), node.child !== null)) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === current2) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === current2) return;
            (node = node.return), node.tag === HostPortal && (currentParentIsValid = !1);
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }
      function commitDeletion(finishedRoot, current2, renderPriorityLevel) {
        unmountHostComponents(finishedRoot, current2, renderPriorityLevel), detachFiber(current2);
      }
      function commitWork(current2, finishedWork) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent:
          case Block: {
            commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
            return;
          }
          case ClassComponent:
            return;
          case HostComponent: {
            var instance = finishedWork.stateNode;
            if (instance != null) {
              var newProps = finishedWork.memoizedProps,
                oldProps = current2 !== null ? current2.memoizedProps : newProps,
                type = finishedWork.type,
                updatePayload = finishedWork.updateQueue;
              (finishedWork.updateQueue = null),
                updatePayload !== null && commitUpdate(instance, updatePayload, type, oldProps, newProps);
            }
            return;
          }
          case HostText: {
            if (finishedWork.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            var textInstance = finishedWork.stateNode,
              newText = finishedWork.memoizedProps,
              oldText = current2 !== null ? current2.memoizedProps : newText;
            commitTextUpdate(textInstance, oldText, newText);
            return;
          }
          case HostRoot: {
            {
              var _root = finishedWork.stateNode;
              _root.hydrate && ((_root.hydrate = !1), commitHydratedContainer(_root.containerInfo));
            }
            return;
          }
          case Profiler:
            return;
          case SuspenseComponent: {
            commitSuspenseComponent(finishedWork), attachSuspenseRetryListeners(finishedWork);
            return;
          }
          case SuspenseListComponent: {
            attachSuspenseRetryListeners(finishedWork);
            return;
          }
          case IncompleteClassComponent:
            return;
        }
        throw Error(
          "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function commitSuspenseComponent(finishedWork) {
        var newState = finishedWork.memoizedState,
          newDidTimeout,
          primaryChildParent = finishedWork;
        newState === null
          ? (newDidTimeout = !1)
          : ((newDidTimeout = !0), (primaryChildParent = finishedWork.child), markCommitTimeOfFallback()),
          primaryChildParent !== null && hideOrUnhideAllChildren(primaryChildParent, newDidTimeout);
      }
      function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
        var newState = finishedWork.memoizedState;
        if (newState === null) {
          var current2 = finishedWork.alternate;
          if (current2 !== null) {
            var prevState = current2.memoizedState;
            if (prevState !== null) {
              var suspenseInstance = prevState.dehydrated;
              suspenseInstance !== null && commitHydratedSuspenseInstance(suspenseInstance);
            }
          }
        }
      }
      function attachSuspenseRetryListeners(finishedWork) {
        var thenables = finishedWork.updateQueue;
        if (thenables !== null) {
          finishedWork.updateQueue = null;
          var retryCache = finishedWork.stateNode;
          retryCache === null && (retryCache = finishedWork.stateNode = new PossiblyWeakSet()),
            thenables.forEach(function (thenable) {
              var retry = resolveRetryThenable.bind(null, finishedWork, thenable);
              retryCache.has(thenable) ||
                (thenable.__reactDoNotTraceInteractions !== !0 && (retry = tracing.unstable_wrap(retry)),
                retryCache.add(thenable),
                thenable.then(retry, retry));
            });
        }
      }
      function commitResetTextContent(current2) {
        resetTextContent(current2.stateNode);
      }
      var PossiblyWeakMap$1 = typeof WeakMap == "function" ? WeakMap : Map;
      function createRootErrorUpdate(fiber, errorInfo, expirationTime) {
        var update = createUpdate(expirationTime, null);
        (update.tag = CaptureUpdate), (update.payload = { element: null });
        var error2 = errorInfo.value;
        return (
          (update.callback = function () {
            onUncaughtError(error2), logError(fiber, errorInfo);
          }),
          update
        );
      }
      function createClassErrorUpdate(fiber, errorInfo, expirationTime) {
        var update = createUpdate(expirationTime, null);
        update.tag = CaptureUpdate;
        var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
        if (typeof getDerivedStateFromError == "function") {
          var error$1 = errorInfo.value;
          update.payload = function () {
            return logError(fiber, errorInfo), getDerivedStateFromError(error$1);
          };
        }
        var inst = fiber.stateNode;
        return (
          inst !== null && typeof inst.componentDidCatch == "function"
            ? (update.callback = function () {
                markFailedErrorBoundaryForHotReloading(fiber),
                  typeof getDerivedStateFromError != "function" &&
                    (markLegacyErrorBoundaryAsFailed(this), logError(fiber, errorInfo));
                var error$12 = errorInfo.value,
                  stack = errorInfo.stack;
                this.componentDidCatch(error$12, { componentStack: stack !== null ? stack : "" }),
                  typeof getDerivedStateFromError != "function" &&
                    fiber.expirationTime !== Sync &&
                    error(
                      "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
                      getComponentName(fiber.type) || "Unknown"
                    );
              })
            : (update.callback = function () {
                markFailedErrorBoundaryForHotReloading(fiber);
              }),
          update
        );
      }
      function attachPingListener(root2, renderExpirationTime2, thenable) {
        var pingCache = root2.pingCache,
          threadIDs;
        if (
          (pingCache === null
            ? ((pingCache = root2.pingCache = new PossiblyWeakMap$1()),
              (threadIDs = new Set()),
              pingCache.set(thenable, threadIDs))
            : ((threadIDs = pingCache.get(thenable)),
              threadIDs === void 0 && ((threadIDs = new Set()), pingCache.set(thenable, threadIDs))),
          !threadIDs.has(renderExpirationTime2))
        ) {
          threadIDs.add(renderExpirationTime2);
          var ping = pingSuspendedRoot.bind(null, root2, thenable, renderExpirationTime2);
          thenable.then(ping, ping);
        }
      }
      function throwException(root2, returnFiber, sourceFiber, value, renderExpirationTime2) {
        if (
          ((sourceFiber.effectTag |= Incomplete),
          (sourceFiber.firstEffect = sourceFiber.lastEffect = null),
          value !== null && typeof value == "object" && typeof value.then == "function")
        ) {
          var thenable = value;
          if ((sourceFiber.mode & BlockingMode) === NoMode) {
            var currentSource = sourceFiber.alternate;
            currentSource
              ? ((sourceFiber.updateQueue = currentSource.updateQueue),
                (sourceFiber.memoizedState = currentSource.memoizedState),
                (sourceFiber.expirationTime = currentSource.expirationTime))
              : ((sourceFiber.updateQueue = null), (sourceFiber.memoizedState = null));
          }
          var hasInvisibleParentBoundary = hasSuspenseContext(
              suspenseStackCursor.current,
              InvisibleParentSuspenseContext
            ),
            _workInProgress = returnFiber;
          do {
            if (
              _workInProgress.tag === SuspenseComponent &&
              shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)
            ) {
              var thenables = _workInProgress.updateQueue;
              if (thenables === null) {
                var updateQueue = new Set();
                updateQueue.add(thenable), (_workInProgress.updateQueue = updateQueue);
              } else thenables.add(thenable);
              if ((_workInProgress.mode & BlockingMode) === NoMode) {
                if (
                  ((_workInProgress.effectTag |= DidCapture),
                  (sourceFiber.effectTag &= ~(LifecycleEffectMask | Incomplete)),
                  sourceFiber.tag === ClassComponent)
                ) {
                  var currentSourceFiber = sourceFiber.alternate;
                  if (currentSourceFiber === null) sourceFiber.tag = IncompleteClassComponent;
                  else {
                    var update = createUpdate(Sync, null);
                    (update.tag = ForceUpdate), enqueueUpdate(sourceFiber, update);
                  }
                }
                sourceFiber.expirationTime = Sync;
                return;
              }
              attachPingListener(root2, renderExpirationTime2, thenable),
                (_workInProgress.effectTag |= ShouldCapture),
                (_workInProgress.expirationTime = renderExpirationTime2);
              return;
            }
            _workInProgress = _workInProgress.return;
          } while (_workInProgress !== null);
          value = new Error(
            (getComponentName(sourceFiber.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a isLoading indicator or placeholder to display.` +
              getStackByFiberInDevAndProd(sourceFiber)
          );
        }
        renderDidError(), (value = createCapturedValue(value, sourceFiber));
        var workInProgress2 = returnFiber;
        do {
          switch (workInProgress2.tag) {
            case HostRoot: {
              var _errorInfo = value;
              (workInProgress2.effectTag |= ShouldCapture), (workInProgress2.expirationTime = renderExpirationTime2);
              var _update = createRootErrorUpdate(workInProgress2, _errorInfo, renderExpirationTime2);
              enqueueCapturedUpdate(workInProgress2, _update);
              return;
            }
            case ClassComponent:
              var errorInfo = value,
                ctor = workInProgress2.type,
                instance = workInProgress2.stateNode;
              if (
                (workInProgress2.effectTag & DidCapture) === NoEffect &&
                (typeof ctor.getDerivedStateFromError == "function" ||
                  (instance !== null &&
                    typeof instance.componentDidCatch == "function" &&
                    !isAlreadyFailedLegacyErrorBoundary(instance)))
              ) {
                (workInProgress2.effectTag |= ShouldCapture), (workInProgress2.expirationTime = renderExpirationTime2);
                var _update2 = createClassErrorUpdate(workInProgress2, errorInfo, renderExpirationTime2);
                enqueueCapturedUpdate(workInProgress2, _update2);
                return;
              }
              break;
          }
          workInProgress2 = workInProgress2.return;
        } while (workInProgress2 !== null);
      }
      var ceil = Math.ceil,
        ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
        ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner,
        IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing,
        NoContext = 0,
        BatchedContext = 1,
        EventContext = 2,
        DiscreteEventContext = 4,
        LegacyUnbatchedContext = 8,
        RenderContext = 16,
        CommitContext = 32,
        RootIncomplete = 0,
        RootFatalErrored = 1,
        RootErrored = 2,
        RootSuspended = 3,
        RootSuspendedWithDelay = 4,
        RootCompleted = 5,
        executionContext = NoContext,
        workInProgressRoot = null,
        workInProgress = null,
        renderExpirationTime$1 = NoWork,
        workInProgressRootExitStatus = RootIncomplete,
        workInProgressRootFatalError = null,
        workInProgressRootLatestProcessedExpirationTime = Sync,
        workInProgressRootLatestSuspenseTimeout = Sync,
        workInProgressRootCanSuspendUsingConfig = null,
        workInProgressRootNextUnprocessedUpdateTime = NoWork,
        workInProgressRootHasPendingPing = !1,
        globalMostRecentFallbackTime = 0,
        FALLBACK_THROTTLE_MS = 500,
        nextEffect = null,
        hasUncaughtError = !1,
        firstUncaughtError = null,
        legacyErrorBoundariesThatAlreadyFailed = null,
        rootDoesHavePassiveEffects = !1,
        rootWithPendingPassiveEffects = null,
        pendingPassiveEffectsRenderPriority = NoPriority,
        pendingPassiveEffectsExpirationTime = NoWork,
        rootsWithPendingDiscreteUpdates = null,
        NESTED_UPDATE_LIMIT = 50,
        nestedUpdateCount = 0,
        rootWithNestedUpdates = null,
        NESTED_PASSIVE_UPDATE_LIMIT = 50,
        nestedPassiveUpdateCount = 0,
        interruptedBy = null,
        spawnedWorkDuringRender = null,
        currentEventTime = NoWork;
      function requestCurrentTimeForUpdate() {
        return (executionContext & (RenderContext | CommitContext)) !== NoContext
          ? msToExpirationTime(now())
          : (currentEventTime !== NoWork || (currentEventTime = msToExpirationTime(now())), currentEventTime);
      }
      function getCurrentTime() {
        return msToExpirationTime(now());
      }
      function computeExpirationForFiber(currentTime, fiber, suspenseConfig) {
        var mode = fiber.mode;
        if ((mode & BlockingMode) === NoMode) return Sync;
        var priorityLevel = getCurrentPriorityLevel();
        if ((mode & ConcurrentMode) === NoMode) return priorityLevel === ImmediatePriority ? Sync : Batched;
        if ((executionContext & RenderContext) !== NoContext) return renderExpirationTime$1;
        var expirationTime;
        if (suspenseConfig !== null)
          expirationTime = computeSuspenseExpiration(
            currentTime,
            suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION
          );
        else
          switch (priorityLevel) {
            case ImmediatePriority:
              expirationTime = Sync;
              break;
            case UserBlockingPriority$1:
              expirationTime = computeInteractiveExpiration(currentTime);
              break;
            case NormalPriority:
            case LowPriority:
              expirationTime = computeAsyncExpiration(currentTime);
              break;
            case IdlePriority:
              expirationTime = Idle;
              break;
            default:
              throw Error("Expected a valid priority level");
          }
        return (
          workInProgressRoot !== null && expirationTime === renderExpirationTime$1 && (expirationTime -= 1),
          expirationTime
        );
      }
      function scheduleUpdateOnFiber(fiber, expirationTime) {
        checkForNestedUpdates(), warnAboutRenderPhaseUpdatesInDEV(fiber);
        var root2 = markUpdateTimeFromFiberToRoot(fiber, expirationTime);
        if (root2 === null) {
          warnAboutUpdateOnUnmountedFiberInDEV(fiber);
          return;
        }
        checkForInterruption(fiber, expirationTime), recordScheduleUpdate();
        var priorityLevel = getCurrentPriorityLevel();
        if (
          (expirationTime === Sync
            ? (executionContext & LegacyUnbatchedContext) !== NoContext &&
              (executionContext & (RenderContext | CommitContext)) === NoContext
              ? (schedulePendingInteractions(root2, expirationTime), performSyncWorkOnRoot(root2))
              : (ensureRootIsScheduled(root2),
                schedulePendingInteractions(root2, expirationTime),
                executionContext === NoContext && flushSyncCallbackQueue())
            : (ensureRootIsScheduled(root2), schedulePendingInteractions(root2, expirationTime)),
          (executionContext & DiscreteEventContext) !== NoContext &&
            (priorityLevel === UserBlockingPriority$1 || priorityLevel === ImmediatePriority))
        )
          if (rootsWithPendingDiscreteUpdates === null)
            rootsWithPendingDiscreteUpdates = new Map([[root2, expirationTime]]);
          else {
            var lastDiscreteTime = rootsWithPendingDiscreteUpdates.get(root2);
            (lastDiscreteTime === void 0 || lastDiscreteTime > expirationTime) &&
              rootsWithPendingDiscreteUpdates.set(root2, expirationTime);
          }
      }
      var scheduleWork = scheduleUpdateOnFiber;
      function markUpdateTimeFromFiberToRoot(fiber, expirationTime) {
        fiber.expirationTime < expirationTime && (fiber.expirationTime = expirationTime);
        var alternate = fiber.alternate;
        alternate !== null && alternate.expirationTime < expirationTime && (alternate.expirationTime = expirationTime);
        var node = fiber.return,
          root2 = null;
        if (node === null && fiber.tag === HostRoot) root2 = fiber.stateNode;
        else
          for (; node !== null; ) {
            if (
              ((alternate = node.alternate),
              node.childExpirationTime < expirationTime && (node.childExpirationTime = expirationTime),
              alternate !== null &&
                alternate.childExpirationTime < expirationTime &&
                (alternate.childExpirationTime = expirationTime),
              node.return === null && node.tag === HostRoot)
            ) {
              root2 = node.stateNode;
              break;
            }
            node = node.return;
          }
        return (
          root2 !== null &&
            (workInProgressRoot === root2 &&
              (markUnprocessedUpdateTime(expirationTime),
              workInProgressRootExitStatus === RootSuspendedWithDelay &&
                markRootSuspendedAtTime(root2, renderExpirationTime$1)),
            markRootUpdatedAtTime(root2, expirationTime)),
          root2
        );
      }
      function getNextRootExpirationTimeToWorkOn(root2) {
        var lastExpiredTime = root2.lastExpiredTime;
        if (lastExpiredTime !== NoWork) return lastExpiredTime;
        var firstPendingTime = root2.firstPendingTime;
        if (!isRootSuspendedAtTime(root2, firstPendingTime)) return firstPendingTime;
        var lastPingedTime = root2.lastPingedTime,
          nextKnownPendingLevel = root2.nextKnownPendingLevel,
          nextLevel = lastPingedTime > nextKnownPendingLevel ? lastPingedTime : nextKnownPendingLevel;
        return nextLevel <= Idle && firstPendingTime !== nextLevel ? NoWork : nextLevel;
      }
      function ensureRootIsScheduled(root2) {
        var lastExpiredTime = root2.lastExpiredTime;
        if (lastExpiredTime !== NoWork) {
          (root2.callbackExpirationTime = Sync),
            (root2.callbackPriority = ImmediatePriority),
            (root2.callbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root2)));
          return;
        }
        var expirationTime = getNextRootExpirationTimeToWorkOn(root2),
          existingCallbackNode = root2.callbackNode;
        if (expirationTime === NoWork) {
          existingCallbackNode !== null &&
            ((root2.callbackNode = null),
            (root2.callbackExpirationTime = NoWork),
            (root2.callbackPriority = NoPriority));
          return;
        }
        var currentTime = requestCurrentTimeForUpdate(),
          priorityLevel = inferPriorityFromExpirationTime(currentTime, expirationTime);
        if (existingCallbackNode !== null) {
          var existingCallbackPriority = root2.callbackPriority,
            existingCallbackExpirationTime = root2.callbackExpirationTime;
          if (existingCallbackExpirationTime === expirationTime && existingCallbackPriority >= priorityLevel) return;
          cancelCallback(existingCallbackNode);
        }
        (root2.callbackExpirationTime = expirationTime), (root2.callbackPriority = priorityLevel);
        var callbackNode;
        expirationTime === Sync
          ? (callbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root2)))
          : (callbackNode = scheduleCallback(priorityLevel, performConcurrentWorkOnRoot.bind(null, root2), {
              timeout: expirationTimeToMs(expirationTime) - now(),
            })),
          (root2.callbackNode = callbackNode);
      }
      function performConcurrentWorkOnRoot(root2, didTimeout) {
        if (((currentEventTime = NoWork), didTimeout)) {
          var currentTime = requestCurrentTimeForUpdate();
          return markRootExpiredAtTime(root2, currentTime), ensureRootIsScheduled(root2), null;
        }
        var expirationTime = getNextRootExpirationTimeToWorkOn(root2);
        if (expirationTime !== NoWork) {
          var originalCallbackNode = root2.callbackNode;
          if ((executionContext & (RenderContext | CommitContext)) !== NoContext)
            throw Error("Should not already be working.");
          if (
            (flushPassiveEffects(),
            (root2 !== workInProgressRoot || expirationTime !== renderExpirationTime$1) &&
              (prepareFreshStack(root2, expirationTime), startWorkOnPendingInteractions(root2, expirationTime)),
            workInProgress !== null)
          ) {
            var prevExecutionContext = executionContext;
            executionContext |= RenderContext;
            var prevDispatcher = pushDispatcher(),
              prevInteractions = pushInteractions(root2);
            startWorkLoopTimer(workInProgress);
            do
              try {
                workLoopConcurrent();
                break;
              } catch (thrownValue) {
                handleError(root2, thrownValue);
              }
            while (!0);
            if (
              (resetContextDependencies(),
              (executionContext = prevExecutionContext),
              popDispatcher(prevDispatcher),
              popInteractions(prevInteractions),
              workInProgressRootExitStatus === RootFatalErrored)
            ) {
              var fatalError = workInProgressRootFatalError;
              throw (
                (stopInterruptedWorkLoopTimer(),
                prepareFreshStack(root2, expirationTime),
                markRootSuspendedAtTime(root2, expirationTime),
                ensureRootIsScheduled(root2),
                fatalError)
              );
            }
            if (workInProgress !== null) stopInterruptedWorkLoopTimer();
            else {
              stopFinishedWorkLoopTimer();
              var finishedWork = (root2.finishedWork = root2.current.alternate);
              (root2.finishedExpirationTime = expirationTime),
                finishConcurrentRender(root2, finishedWork, workInProgressRootExitStatus, expirationTime);
            }
            if ((ensureRootIsScheduled(root2), root2.callbackNode === originalCallbackNode))
              return performConcurrentWorkOnRoot.bind(null, root2);
          }
        }
        return null;
      }
      function finishConcurrentRender(root2, finishedWork, exitStatus, expirationTime) {
        switch (((workInProgressRoot = null), exitStatus)) {
          case RootIncomplete:
          case RootFatalErrored:
            throw Error("Root did not complete. This is a bug in React.");
          case RootErrored: {
            markRootExpiredAtTime(root2, expirationTime > Idle ? Idle : expirationTime);
            break;
          }
          case RootSuspended: {
            markRootSuspendedAtTime(root2, expirationTime);
            var lastSuspendedTime = root2.lastSuspendedTime;
            expirationTime === lastSuspendedTime &&
              (root2.nextKnownPendingLevel = getRemainingExpirationTime(finishedWork));
            var hasNotProcessedNewUpdates = workInProgressRootLatestProcessedExpirationTime === Sync;
            if (hasNotProcessedNewUpdates && !IsThisRendererActing.current) {
              var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now();
              if (msUntilTimeout > 10) {
                if (workInProgressRootHasPendingPing) {
                  var lastPingedTime = root2.lastPingedTime;
                  if (lastPingedTime === NoWork || lastPingedTime >= expirationTime) {
                    (root2.lastPingedTime = expirationTime), prepareFreshStack(root2, expirationTime);
                    break;
                  }
                }
                var nextTime = getNextRootExpirationTimeToWorkOn(root2);
                if (nextTime !== NoWork && nextTime !== expirationTime) break;
                if (lastSuspendedTime !== NoWork && lastSuspendedTime !== expirationTime) {
                  root2.lastPingedTime = lastSuspendedTime;
                  break;
                }
                root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), msUntilTimeout);
                break;
              }
            }
            commitRoot(root2);
            break;
          }
          case RootSuspendedWithDelay: {
            markRootSuspendedAtTime(root2, expirationTime);
            var _lastSuspendedTime = root2.lastSuspendedTime;
            if (
              (expirationTime === _lastSuspendedTime &&
                (root2.nextKnownPendingLevel = getRemainingExpirationTime(finishedWork)),
              !IsThisRendererActing.current)
            ) {
              if (workInProgressRootHasPendingPing) {
                var _lastPingedTime = root2.lastPingedTime;
                if (_lastPingedTime === NoWork || _lastPingedTime >= expirationTime) {
                  (root2.lastPingedTime = expirationTime), prepareFreshStack(root2, expirationTime);
                  break;
                }
              }
              var _nextTime = getNextRootExpirationTimeToWorkOn(root2);
              if (_nextTime !== NoWork && _nextTime !== expirationTime) break;
              if (_lastSuspendedTime !== NoWork && _lastSuspendedTime !== expirationTime) {
                root2.lastPingedTime = _lastSuspendedTime;
                break;
              }
              var _msUntilTimeout;
              if (workInProgressRootLatestSuspenseTimeout !== Sync)
                _msUntilTimeout = expirationTimeToMs(workInProgressRootLatestSuspenseTimeout) - now();
              else if (workInProgressRootLatestProcessedExpirationTime === Sync) _msUntilTimeout = 0;
              else {
                var eventTimeMs = inferTimeFromExpirationTime(workInProgressRootLatestProcessedExpirationTime),
                  currentTimeMs = now(),
                  timeUntilExpirationMs = expirationTimeToMs(expirationTime) - currentTimeMs,
                  timeElapsed = currentTimeMs - eventTimeMs;
                timeElapsed < 0 && (timeElapsed = 0),
                  (_msUntilTimeout = jnd(timeElapsed) - timeElapsed),
                  timeUntilExpirationMs < _msUntilTimeout && (_msUntilTimeout = timeUntilExpirationMs);
              }
              if (_msUntilTimeout > 10) {
                root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), _msUntilTimeout);
                break;
              }
            }
            commitRoot(root2);
            break;
          }
          case RootCompleted: {
            if (
              !IsThisRendererActing.current &&
              workInProgressRootLatestProcessedExpirationTime !== Sync &&
              workInProgressRootCanSuspendUsingConfig !== null
            ) {
              var _msUntilTimeout2 = computeMsUntilSuspenseLoadingDelay(
                workInProgressRootLatestProcessedExpirationTime,
                expirationTime,
                workInProgressRootCanSuspendUsingConfig
              );
              if (_msUntilTimeout2 > 10) {
                markRootSuspendedAtTime(root2, expirationTime),
                  (root2.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root2), _msUntilTimeout2));
                break;
              }
            }
            commitRoot(root2);
            break;
          }
          default:
            throw Error("Unknown root exit status.");
        }
      }
      function performSyncWorkOnRoot(root2) {
        var lastExpiredTime = root2.lastExpiredTime,
          expirationTime = lastExpiredTime !== NoWork ? lastExpiredTime : Sync;
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext)
          throw Error("Should not already be working.");
        if (
          (flushPassiveEffects(),
          (root2 !== workInProgressRoot || expirationTime !== renderExpirationTime$1) &&
            (prepareFreshStack(root2, expirationTime), startWorkOnPendingInteractions(root2, expirationTime)),
          workInProgress !== null)
        ) {
          var prevExecutionContext = executionContext;
          executionContext |= RenderContext;
          var prevDispatcher = pushDispatcher(),
            prevInteractions = pushInteractions(root2);
          startWorkLoopTimer(workInProgress);
          do
            try {
              workLoopSync();
              break;
            } catch (thrownValue) {
              handleError(root2, thrownValue);
            }
          while (!0);
          if (
            (resetContextDependencies(),
            (executionContext = prevExecutionContext),
            popDispatcher(prevDispatcher),
            popInteractions(prevInteractions),
            workInProgressRootExitStatus === RootFatalErrored)
          ) {
            var fatalError = workInProgressRootFatalError;
            throw (
              (stopInterruptedWorkLoopTimer(),
              prepareFreshStack(root2, expirationTime),
              markRootSuspendedAtTime(root2, expirationTime),
              ensureRootIsScheduled(root2),
              fatalError)
            );
          }
          if (workInProgress !== null)
            throw Error(
              "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."
            );
          stopFinishedWorkLoopTimer(),
            (root2.finishedWork = root2.current.alternate),
            (root2.finishedExpirationTime = expirationTime),
            finishSyncRender(root2),
            ensureRootIsScheduled(root2);
        }
        return null;
      }
      function finishSyncRender(root2) {
        (workInProgressRoot = null), commitRoot(root2);
      }
      function flushDiscreteUpdates() {
        if ((executionContext & (BatchedContext | RenderContext | CommitContext)) !== NoContext) {
          (executionContext & RenderContext) !== NoContext &&
            error("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
          return;
        }
        flushPendingDiscreteUpdates(), flushPassiveEffects();
      }
      function syncUpdates(fn, a, b, c) {
        return runWithPriority$1(ImmediatePriority, fn.bind(null, a, b, c));
      }
      function flushPendingDiscreteUpdates() {
        if (rootsWithPendingDiscreteUpdates !== null) {
          var roots = rootsWithPendingDiscreteUpdates;
          (rootsWithPendingDiscreteUpdates = null),
            roots.forEach(function (expirationTime, root2) {
              markRootExpiredAtTime(root2, expirationTime), ensureRootIsScheduled(root2);
            }),
            flushSyncCallbackQueue();
        }
      }
      function batchedUpdates$1(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext |= BatchedContext;
        try {
          return fn(a);
        } finally {
          (executionContext = prevExecutionContext), executionContext === NoContext && flushSyncCallbackQueue();
        }
      }
      function batchedEventUpdates$1(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext |= EventContext;
        try {
          return fn(a);
        } finally {
          (executionContext = prevExecutionContext), executionContext === NoContext && flushSyncCallbackQueue();
        }
      }
      function discreteUpdates$1(fn, a, b, c, d) {
        var prevExecutionContext = executionContext;
        executionContext |= DiscreteEventContext;
        try {
          return runWithPriority$1(UserBlockingPriority$1, fn.bind(null, a, b, c, d));
        } finally {
          (executionContext = prevExecutionContext), executionContext === NoContext && flushSyncCallbackQueue();
        }
      }
      function unbatchedUpdates(fn, a) {
        var prevExecutionContext = executionContext;
        (executionContext &= ~BatchedContext), (executionContext |= LegacyUnbatchedContext);
        try {
          return fn(a);
        } finally {
          (executionContext = prevExecutionContext), executionContext === NoContext && flushSyncCallbackQueue();
        }
      }
      function flushSync2(fn, a) {
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext)
          throw Error(
            "flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering."
          );
        var prevExecutionContext = executionContext;
        executionContext |= BatchedContext;
        try {
          return runWithPriority$1(ImmediatePriority, fn.bind(null, a));
        } finally {
          (executionContext = prevExecutionContext), flushSyncCallbackQueue();
        }
      }
      function prepareFreshStack(root2, expirationTime) {
        (root2.finishedWork = null), (root2.finishedExpirationTime = NoWork);
        var timeoutHandle = root2.timeoutHandle;
        if (
          (timeoutHandle !== noTimeout && ((root2.timeoutHandle = noTimeout), cancelTimeout(timeoutHandle)),
          workInProgress !== null)
        )
          for (var interruptedWork = workInProgress.return; interruptedWork !== null; )
            unwindInterruptedWork(interruptedWork), (interruptedWork = interruptedWork.return);
        (workInProgressRoot = root2),
          (workInProgress = createWorkInProgress(root2.current, null)),
          (renderExpirationTime$1 = expirationTime),
          (workInProgressRootExitStatus = RootIncomplete),
          (workInProgressRootFatalError = null),
          (workInProgressRootLatestProcessedExpirationTime = Sync),
          (workInProgressRootLatestSuspenseTimeout = Sync),
          (workInProgressRootCanSuspendUsingConfig = null),
          (workInProgressRootNextUnprocessedUpdateTime = NoWork),
          (workInProgressRootHasPendingPing = !1),
          (spawnedWorkDuringRender = null),
          ReactStrictModeWarnings.discardPendingWarnings();
      }
      function handleError(root2, thrownValue) {
        do {
          try {
            if (
              (resetContextDependencies(),
              resetHooksAfterThrow(),
              resetCurrentFiber(),
              workInProgress === null || workInProgress.return === null)
            )
              return (
                (workInProgressRootExitStatus = RootFatalErrored),
                (workInProgressRootFatalError = thrownValue),
                (workInProgress = null),
                null
              );
            enableProfilerTimer &&
              workInProgress.mode & ProfileMode &&
              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, !0),
              throwException(root2, workInProgress.return, workInProgress, thrownValue, renderExpirationTime$1),
              (workInProgress = completeUnitOfWork(workInProgress));
          } catch (yetAnotherThrownValue) {
            thrownValue = yetAnotherThrownValue;
            continue;
          }
          return;
        } while (!0);
      }
      function pushDispatcher(root2) {
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        return (
          (ReactCurrentDispatcher$1.current = ContextOnlyDispatcher),
          prevDispatcher === null ? ContextOnlyDispatcher : prevDispatcher
        );
      }
      function popDispatcher(prevDispatcher) {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
      function pushInteractions(root2) {
        {
          var prevInteractions = tracing.__interactionsRef.current;
          return (tracing.__interactionsRef.current = root2.memoizedInteractions), prevInteractions;
        }
      }
      function popInteractions(prevInteractions) {
        tracing.__interactionsRef.current = prevInteractions;
      }
      function markCommitTimeOfFallback() {
        globalMostRecentFallbackTime = now();
      }
      function markRenderEventTimeAndConfig(expirationTime, suspenseConfig) {
        expirationTime < workInProgressRootLatestProcessedExpirationTime &&
          expirationTime > Idle &&
          (workInProgressRootLatestProcessedExpirationTime = expirationTime),
          suspenseConfig !== null &&
            expirationTime < workInProgressRootLatestSuspenseTimeout &&
            expirationTime > Idle &&
            ((workInProgressRootLatestSuspenseTimeout = expirationTime),
            (workInProgressRootCanSuspendUsingConfig = suspenseConfig));
      }
      function markUnprocessedUpdateTime(expirationTime) {
        expirationTime > workInProgressRootNextUnprocessedUpdateTime &&
          (workInProgressRootNextUnprocessedUpdateTime = expirationTime);
      }
      function renderDidSuspend() {
        workInProgressRootExitStatus === RootIncomplete && (workInProgressRootExitStatus = RootSuspended);
      }
      function renderDidSuspendDelayIfPossible() {
        (workInProgressRootExitStatus === RootIncomplete || workInProgressRootExitStatus === RootSuspended) &&
          (workInProgressRootExitStatus = RootSuspendedWithDelay),
          workInProgressRootNextUnprocessedUpdateTime !== NoWork &&
            workInProgressRoot !== null &&
            (markRootSuspendedAtTime(workInProgressRoot, renderExpirationTime$1),
            markRootUpdatedAtTime(workInProgressRoot, workInProgressRootNextUnprocessedUpdateTime));
      }
      function renderDidError() {
        workInProgressRootExitStatus !== RootCompleted && (workInProgressRootExitStatus = RootErrored);
      }
      function renderHasNotSuspendedYet() {
        return workInProgressRootExitStatus === RootIncomplete;
      }
      function inferTimeFromExpirationTime(expirationTime) {
        var earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
        return earliestExpirationTimeMs - LOW_PRIORITY_EXPIRATION;
      }
      function inferTimeFromExpirationTimeWithSuspenseConfig(expirationTime, suspenseConfig) {
        var earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
        return earliestExpirationTimeMs - (suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION);
      }
      function workLoopSync() {
        for (; workInProgress !== null; ) workInProgress = performUnitOfWork(workInProgress);
      }
      function workLoopConcurrent() {
        for (; workInProgress !== null && !shouldYield(); ) workInProgress = performUnitOfWork(workInProgress);
      }
      function performUnitOfWork(unitOfWork) {
        var current2 = unitOfWork.alternate;
        startWorkTimer(unitOfWork), setCurrentFiber(unitOfWork);
        var next;
        return (
          (unitOfWork.mode & ProfileMode) !== NoMode
            ? (startProfilerTimer(unitOfWork),
              (next = beginWork$1(current2, unitOfWork, renderExpirationTime$1)),
              stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, !0))
            : (next = beginWork$1(current2, unitOfWork, renderExpirationTime$1)),
          resetCurrentFiber(),
          (unitOfWork.memoizedProps = unitOfWork.pendingProps),
          next === null && (next = completeUnitOfWork(unitOfWork)),
          (ReactCurrentOwner$2.current = null),
          next
        );
      }
      function completeUnitOfWork(unitOfWork) {
        workInProgress = unitOfWork;
        do {
          var current2 = workInProgress.alternate,
            returnFiber = workInProgress.return;
          if ((workInProgress.effectTag & Incomplete) === NoEffect) {
            setCurrentFiber(workInProgress);
            var next = void 0;
            if (
              ((workInProgress.mode & ProfileMode) === NoMode
                ? (next = completeWork(current2, workInProgress, renderExpirationTime$1))
                : (startProfilerTimer(workInProgress),
                  (next = completeWork(current2, workInProgress, renderExpirationTime$1)),
                  stopProfilerTimerIfRunningAndRecordDelta(workInProgress, !1)),
              stopWorkTimer(workInProgress),
              resetCurrentFiber(),
              resetChildExpirationTime(workInProgress),
              next !== null)
            )
              return next;
            if (returnFiber !== null && (returnFiber.effectTag & Incomplete) === NoEffect) {
              returnFiber.firstEffect === null && (returnFiber.firstEffect = workInProgress.firstEffect),
                workInProgress.lastEffect !== null &&
                  (returnFiber.lastEffect !== null && (returnFiber.lastEffect.nextEffect = workInProgress.firstEffect),
                  (returnFiber.lastEffect = workInProgress.lastEffect));
              var effectTag = workInProgress.effectTag;
              effectTag > PerformedWork &&
                (returnFiber.lastEffect !== null
                  ? (returnFiber.lastEffect.nextEffect = workInProgress)
                  : (returnFiber.firstEffect = workInProgress),
                (returnFiber.lastEffect = workInProgress));
            }
          } else {
            var _next = unwindWork(workInProgress);
            if ((workInProgress.mode & ProfileMode) !== NoMode) {
              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, !1);
              for (var actualDuration = workInProgress.actualDuration, child = workInProgress.child; child !== null; )
                (actualDuration += child.actualDuration), (child = child.sibling);
              workInProgress.actualDuration = actualDuration;
            }
            if (_next !== null) return stopFailedWorkTimer(workInProgress), (_next.effectTag &= HostEffectMask), _next;
            stopWorkTimer(workInProgress),
              returnFiber !== null &&
                ((returnFiber.firstEffect = returnFiber.lastEffect = null), (returnFiber.effectTag |= Incomplete));
          }
          var siblingFiber = workInProgress.sibling;
          if (siblingFiber !== null) return siblingFiber;
          workInProgress = returnFiber;
        } while (workInProgress !== null);
        return workInProgressRootExitStatus === RootIncomplete && (workInProgressRootExitStatus = RootCompleted), null;
      }
      function getRemainingExpirationTime(fiber) {
        var updateExpirationTime = fiber.expirationTime,
          childExpirationTime = fiber.childExpirationTime;
        return updateExpirationTime > childExpirationTime ? updateExpirationTime : childExpirationTime;
      }
      function resetChildExpirationTime(completedWork) {
        if (!(renderExpirationTime$1 !== Never && completedWork.childExpirationTime === Never)) {
          var newChildExpirationTime = NoWork;
          if ((completedWork.mode & ProfileMode) !== NoMode) {
            for (
              var actualDuration = completedWork.actualDuration,
                treeBaseDuration = completedWork.selfBaseDuration,
                shouldBubbleActualDurations =
                  completedWork.alternate === null || completedWork.child !== completedWork.alternate.child,
                child = completedWork.child;
              child !== null;

            ) {
              var childUpdateExpirationTime = child.expirationTime,
                childChildExpirationTime = child.childExpirationTime;
              childUpdateExpirationTime > newChildExpirationTime &&
                (newChildExpirationTime = childUpdateExpirationTime),
                childChildExpirationTime > newChildExpirationTime &&
                  (newChildExpirationTime = childChildExpirationTime),
                shouldBubbleActualDurations && (actualDuration += child.actualDuration),
                (treeBaseDuration += child.treeBaseDuration),
                (child = child.sibling);
            }
            (completedWork.actualDuration = actualDuration), (completedWork.treeBaseDuration = treeBaseDuration);
          } else
            for (var _child = completedWork.child; _child !== null; ) {
              var _childUpdateExpirationTime = _child.expirationTime,
                _childChildExpirationTime = _child.childExpirationTime;
              _childUpdateExpirationTime > newChildExpirationTime &&
                (newChildExpirationTime = _childUpdateExpirationTime),
                _childChildExpirationTime > newChildExpirationTime &&
                  (newChildExpirationTime = _childChildExpirationTime),
                (_child = _child.sibling);
            }
          completedWork.childExpirationTime = newChildExpirationTime;
        }
      }
      function commitRoot(root2) {
        var renderPriorityLevel = getCurrentPriorityLevel();
        return runWithPriority$1(ImmediatePriority, commitRootImpl.bind(null, root2, renderPriorityLevel)), null;
      }
      function commitRootImpl(root2, renderPriorityLevel) {
        do flushPassiveEffects();
        while (rootWithPendingPassiveEffects !== null);
        if (
          (flushRenderPhaseStrictModeWarningsInDEV(),
          (executionContext & (RenderContext | CommitContext)) !== NoContext)
        )
          throw Error("Should not already be working.");
        var finishedWork = root2.finishedWork,
          expirationTime = root2.finishedExpirationTime;
        if (finishedWork === null) return null;
        if (((root2.finishedWork = null), (root2.finishedExpirationTime = NoWork), finishedWork === root2.current))
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        (root2.callbackNode = null),
          (root2.callbackExpirationTime = NoWork),
          (root2.callbackPriority = NoPriority),
          (root2.nextKnownPendingLevel = NoWork),
          startCommitTimer();
        var remainingExpirationTimeBeforeCommit = getRemainingExpirationTime(finishedWork);
        markRootFinishedAtTime(root2, expirationTime, remainingExpirationTimeBeforeCommit),
          root2 === workInProgressRoot &&
            ((workInProgressRoot = null), (workInProgress = null), (renderExpirationTime$1 = NoWork));
        var firstEffect;
        if (
          (finishedWork.effectTag > PerformedWork
            ? finishedWork.lastEffect !== null
              ? ((finishedWork.lastEffect.nextEffect = finishedWork), (firstEffect = finishedWork.firstEffect))
              : (firstEffect = finishedWork)
            : (firstEffect = finishedWork.firstEffect),
          firstEffect !== null)
        ) {
          var prevExecutionContext = executionContext;
          executionContext |= CommitContext;
          var prevInteractions = pushInteractions(root2);
          (ReactCurrentOwner$2.current = null),
            startCommitSnapshotEffectsTimer(),
            prepareForCommit(root2.containerInfo),
            (nextEffect = firstEffect);
          do
            if ((invokeGuardedCallback(null, commitBeforeMutationEffects, null), hasCaughtError())) {
              if (nextEffect === null) throw Error("Should be working on an effect.");
              var error2 = clearCaughtError();
              captureCommitPhaseError(nextEffect, error2), (nextEffect = nextEffect.nextEffect);
            }
          while (nextEffect !== null);
          stopCommitSnapshotEffectsTimer(),
            recordCommitTime(),
            startCommitHostEffectsTimer(),
            (nextEffect = firstEffect);
          do
            if (
              (invokeGuardedCallback(null, commitMutationEffects, null, root2, renderPriorityLevel), hasCaughtError())
            ) {
              if (nextEffect === null) throw Error("Should be working on an effect.");
              var _error = clearCaughtError();
              captureCommitPhaseError(nextEffect, _error), (nextEffect = nextEffect.nextEffect);
            }
          while (nextEffect !== null);
          stopCommitHostEffectsTimer(),
            resetAfterCommit(root2.containerInfo),
            (root2.current = finishedWork),
            startCommitLifeCyclesTimer(),
            (nextEffect = firstEffect);
          do
            if ((invokeGuardedCallback(null, commitLayoutEffects, null, root2, expirationTime), hasCaughtError())) {
              if (nextEffect === null) throw Error("Should be working on an effect.");
              var _error2 = clearCaughtError();
              captureCommitPhaseError(nextEffect, _error2), (nextEffect = nextEffect.nextEffect);
            }
          while (nextEffect !== null);
          stopCommitLifeCyclesTimer(),
            (nextEffect = null),
            requestPaint(),
            popInteractions(prevInteractions),
            (executionContext = prevExecutionContext);
        } else
          (root2.current = finishedWork),
            startCommitSnapshotEffectsTimer(),
            stopCommitSnapshotEffectsTimer(),
            recordCommitTime(),
            startCommitHostEffectsTimer(),
            stopCommitHostEffectsTimer(),
            startCommitLifeCyclesTimer(),
            stopCommitLifeCyclesTimer();
        stopCommitTimer();
        var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
        if (rootDoesHavePassiveEffects)
          (rootDoesHavePassiveEffects = !1),
            (rootWithPendingPassiveEffects = root2),
            (pendingPassiveEffectsExpirationTime = expirationTime),
            (pendingPassiveEffectsRenderPriority = renderPriorityLevel);
        else
          for (nextEffect = firstEffect; nextEffect !== null; ) {
            var nextNextEffect = nextEffect.nextEffect;
            (nextEffect.nextEffect = null), (nextEffect = nextNextEffect);
          }
        var remainingExpirationTime = root2.firstPendingTime;
        if (remainingExpirationTime !== NoWork) {
          if (spawnedWorkDuringRender !== null) {
            var expirationTimes = spawnedWorkDuringRender;
            spawnedWorkDuringRender = null;
            for (var i = 0; i < expirationTimes.length; i++)
              scheduleInteractions(root2, expirationTimes[i], root2.memoizedInteractions);
          }
          schedulePendingInteractions(root2, remainingExpirationTime);
        } else legacyErrorBoundariesThatAlreadyFailed = null;
        if (
          (rootDidHavePassiveEffects || finishPendingInteractions(root2, expirationTime),
          remainingExpirationTime === Sync
            ? root2 === rootWithNestedUpdates
              ? nestedUpdateCount++
              : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root2))
            : (nestedUpdateCount = 0),
          onCommitRoot(finishedWork.stateNode, expirationTime),
          ensureRootIsScheduled(root2),
          hasUncaughtError)
        ) {
          hasUncaughtError = !1;
          var _error3 = firstUncaughtError;
          throw ((firstUncaughtError = null), _error3);
        }
        return (executionContext & LegacyUnbatchedContext) !== NoContext || flushSyncCallbackQueue(), null;
      }
      function commitBeforeMutationEffects() {
        for (; nextEffect !== null; ) {
          var effectTag = nextEffect.effectTag;
          if ((effectTag & Snapshot) !== NoEffect) {
            setCurrentFiber(nextEffect), recordEffect();
            var current2 = nextEffect.alternate;
            commitBeforeMutationLifeCycles(current2, nextEffect), resetCurrentFiber();
          }
          (effectTag & Passive) !== NoEffect &&
            (rootDoesHavePassiveEffects ||
              ((rootDoesHavePassiveEffects = !0),
              scheduleCallback(NormalPriority, function () {
                return flushPassiveEffects(), null;
              }))),
            (nextEffect = nextEffect.nextEffect);
        }
      }
      function commitMutationEffects(root2, renderPriorityLevel) {
        for (; nextEffect !== null; ) {
          setCurrentFiber(nextEffect);
          var effectTag = nextEffect.effectTag;
          if ((effectTag & ContentReset && commitResetTextContent(nextEffect), effectTag & Ref)) {
            var current2 = nextEffect.alternate;
            current2 !== null && commitDetachRef(current2);
          }
          var primaryEffectTag = effectTag & (Placement | Update | Deletion | Hydrating);
          switch (primaryEffectTag) {
            case Placement: {
              commitPlacement(nextEffect), (nextEffect.effectTag &= ~Placement);
              break;
            }
            case PlacementAndUpdate: {
              commitPlacement(nextEffect), (nextEffect.effectTag &= ~Placement);
              var _current = nextEffect.alternate;
              commitWork(_current, nextEffect);
              break;
            }
            case Hydrating: {
              nextEffect.effectTag &= ~Hydrating;
              break;
            }
            case HydratingAndUpdate: {
              nextEffect.effectTag &= ~Hydrating;
              var _current2 = nextEffect.alternate;
              commitWork(_current2, nextEffect);
              break;
            }
            case Update: {
              var _current3 = nextEffect.alternate;
              commitWork(_current3, nextEffect);
              break;
            }
            case Deletion: {
              commitDeletion(root2, nextEffect, renderPriorityLevel);
              break;
            }
          }
          recordEffect(), resetCurrentFiber(), (nextEffect = nextEffect.nextEffect);
        }
      }
      function commitLayoutEffects(root2, committedExpirationTime) {
        for (; nextEffect !== null; ) {
          setCurrentFiber(nextEffect);
          var effectTag = nextEffect.effectTag;
          if (effectTag & (Update | Callback)) {
            recordEffect();
            var current2 = nextEffect.alternate;
            commitLifeCycles(root2, current2, nextEffect);
          }
          effectTag & Ref && (recordEffect(), commitAttachRef(nextEffect)),
            resetCurrentFiber(),
            (nextEffect = nextEffect.nextEffect);
        }
      }
      function flushPassiveEffects() {
        if (pendingPassiveEffectsRenderPriority !== NoPriority) {
          var priorityLevel =
            pendingPassiveEffectsRenderPriority > NormalPriority ? NormalPriority : pendingPassiveEffectsRenderPriority;
          return (
            (pendingPassiveEffectsRenderPriority = NoPriority),
            runWithPriority$1(priorityLevel, flushPassiveEffectsImpl)
          );
        }
      }
      function flushPassiveEffectsImpl() {
        if (rootWithPendingPassiveEffects === null) return !1;
        var root2 = rootWithPendingPassiveEffects,
          expirationTime = pendingPassiveEffectsExpirationTime;
        if (
          ((rootWithPendingPassiveEffects = null),
          (pendingPassiveEffectsExpirationTime = NoWork),
          (executionContext & (RenderContext | CommitContext)) !== NoContext)
        )
          throw Error("Cannot flush passive effects while already rendering.");
        var prevExecutionContext = executionContext;
        executionContext |= CommitContext;
        for (
          var prevInteractions = pushInteractions(root2), _effect2 = root2.current.firstEffect;
          _effect2 !== null;

        ) {
          {
            if (
              (setCurrentFiber(_effect2),
              invokeGuardedCallback(null, commitPassiveHookEffects, null, _effect2),
              hasCaughtError())
            ) {
              if (_effect2 === null) throw Error("Should be working on an effect.");
              var _error5 = clearCaughtError();
              captureCommitPhaseError(_effect2, _error5);
            }
            resetCurrentFiber();
          }
          var nextNextEffect = _effect2.nextEffect;
          (_effect2.nextEffect = null), (_effect2 = nextNextEffect);
        }
        return (
          popInteractions(prevInteractions),
          finishPendingInteractions(root2, expirationTime),
          (executionContext = prevExecutionContext),
          flushSyncCallbackQueue(),
          (nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1),
          !0
        );
      }
      function isAlreadyFailedLegacyErrorBoundary(instance) {
        return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
      }
      function markLegacyErrorBoundaryAsFailed(instance) {
        legacyErrorBoundariesThatAlreadyFailed === null
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([instance]))
          : legacyErrorBoundariesThatAlreadyFailed.add(instance);
      }
      function prepareToThrowUncaughtError(error2) {
        hasUncaughtError || ((hasUncaughtError = !0), (firstUncaughtError = error2));
      }
      var onUncaughtError = prepareToThrowUncaughtError;
      function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error2) {
        var errorInfo = createCapturedValue(error2, sourceFiber),
          update = createRootErrorUpdate(rootFiber, errorInfo, Sync);
        enqueueUpdate(rootFiber, update);
        var root2 = markUpdateTimeFromFiberToRoot(rootFiber, Sync);
        root2 !== null && (ensureRootIsScheduled(root2), schedulePendingInteractions(root2, Sync));
      }
      function captureCommitPhaseError(sourceFiber, error2) {
        if (sourceFiber.tag === HostRoot) {
          captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error2);
          return;
        }
        for (var fiber = sourceFiber.return; fiber !== null; ) {
          if (fiber.tag === HostRoot) {
            captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error2);
            return;
          } else if (fiber.tag === ClassComponent) {
            var ctor = fiber.type,
              instance = fiber.stateNode;
            if (
              typeof ctor.getDerivedStateFromError == "function" ||
              (typeof instance.componentDidCatch == "function" && !isAlreadyFailedLegacyErrorBoundary(instance))
            ) {
              var errorInfo = createCapturedValue(error2, sourceFiber),
                update = createClassErrorUpdate(fiber, errorInfo, Sync);
              enqueueUpdate(fiber, update);
              var root2 = markUpdateTimeFromFiberToRoot(fiber, Sync);
              root2 !== null && (ensureRootIsScheduled(root2), schedulePendingInteractions(root2, Sync));
              return;
            }
          }
          fiber = fiber.return;
        }
      }
      function pingSuspendedRoot(root2, thenable, suspendedTime) {
        var pingCache = root2.pingCache;
        if (
          (pingCache !== null && pingCache.delete(thenable),
          workInProgressRoot === root2 && renderExpirationTime$1 === suspendedTime)
        ) {
          workInProgressRootExitStatus === RootSuspendedWithDelay ||
          (workInProgressRootExitStatus === RootSuspended &&
            workInProgressRootLatestProcessedExpirationTime === Sync &&
            now() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS)
            ? prepareFreshStack(root2, renderExpirationTime$1)
            : (workInProgressRootHasPendingPing = !0);
          return;
        }
        if (isRootSuspendedAtTime(root2, suspendedTime)) {
          var lastPingedTime = root2.lastPingedTime;
          (lastPingedTime !== NoWork && lastPingedTime < suspendedTime) ||
            ((root2.lastPingedTime = suspendedTime),
            ensureRootIsScheduled(root2),
            schedulePendingInteractions(root2, suspendedTime));
        }
      }
      function retryTimedOutBoundary(boundaryFiber, retryTime) {
        if (retryTime === NoWork) {
          var suspenseConfig = null,
            currentTime = requestCurrentTimeForUpdate();
          retryTime = computeExpirationForFiber(currentTime, boundaryFiber, suspenseConfig);
        }
        var root2 = markUpdateTimeFromFiberToRoot(boundaryFiber, retryTime);
        root2 !== null && (ensureRootIsScheduled(root2), schedulePendingInteractions(root2, retryTime));
      }
      function resolveRetryThenable(boundaryFiber, thenable) {
        var retryTime = NoWork,
          retryCache;
        (retryCache = boundaryFiber.stateNode),
          retryCache !== null && retryCache.delete(thenable),
          retryTimedOutBoundary(boundaryFiber, retryTime);
      }
      function jnd(timeElapsed) {
        return timeElapsed < 120
          ? 120
          : timeElapsed < 480
          ? 480
          : timeElapsed < 1080
          ? 1080
          : timeElapsed < 1920
          ? 1920
          : timeElapsed < 3e3
          ? 3e3
          : timeElapsed < 4320
          ? 4320
          : ceil(timeElapsed / 1960) * 1960;
      }
      function computeMsUntilSuspenseLoadingDelay(mostRecentEventTime, committedExpirationTime, suspenseConfig) {
        var busyMinDurationMs = suspenseConfig.busyMinDurationMs | 0;
        if (busyMinDurationMs <= 0) return 0;
        var busyDelayMs = suspenseConfig.busyDelayMs | 0,
          currentTimeMs = now(),
          eventTimeMs = inferTimeFromExpirationTimeWithSuspenseConfig(mostRecentEventTime, suspenseConfig),
          timeElapsed = currentTimeMs - eventTimeMs;
        if (timeElapsed <= busyDelayMs) return 0;
        var msUntilTimeout = busyDelayMs + busyMinDurationMs - timeElapsed;
        return msUntilTimeout;
      }
      function checkForNestedUpdates() {
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT)
          throw (
            ((nestedUpdateCount = 0),
            (rootWithNestedUpdates = null),
            Error(
              "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
            ))
          );
        nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT &&
          ((nestedPassiveUpdateCount = 0),
          error(
            "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
          ));
      }
      function flushRenderPhaseStrictModeWarningsInDEV() {
        ReactStrictModeWarnings.flushLegacyContextWarning(),
          ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
      }
      function stopFinishedWorkLoopTimer() {
        var didCompleteRoot = !0;
        stopWorkLoopTimer(interruptedBy, didCompleteRoot), (interruptedBy = null);
      }
      function stopInterruptedWorkLoopTimer() {
        var didCompleteRoot = !1;
        stopWorkLoopTimer(interruptedBy, didCompleteRoot), (interruptedBy = null);
      }
      function checkForInterruption(fiberThatReceivedUpdate, updateExpirationTime) {
        workInProgressRoot !== null &&
          updateExpirationTime > renderExpirationTime$1 &&
          (interruptedBy = fiberThatReceivedUpdate);
      }
      var didWarnStateUpdateForUnmountedComponent = null;
      function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
        {
          var tag = fiber.tag;
          if (
            tag !== HostRoot &&
            tag !== ClassComponent &&
            tag !== FunctionComponent &&
            tag !== ForwardRef &&
            tag !== MemoComponent &&
            tag !== SimpleMemoComponent &&
            tag !== Block
          )
            return;
          var componentName = getComponentName(fiber.type) || "ReactComponent";
          if (didWarnStateUpdateForUnmountedComponent !== null) {
            if (didWarnStateUpdateForUnmountedComponent.has(componentName)) return;
            didWarnStateUpdateForUnmountedComponent.add(componentName);
          } else didWarnStateUpdateForUnmountedComponent = new Set([componentName]);
          error(
            "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s",
            tag === ClassComponent ? "the componentWillUnmount method" : "a useEffect cleanup function",
            getStackByFiberInDevAndProd(fiber)
          );
        }
      }
      var beginWork$1;
      {
        var dummyFiber = null;
        beginWork$1 = function (current2, unitOfWork, expirationTime) {
          var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);
          try {
            return beginWork(current2, unitOfWork, expirationTime);
          } catch (originalError) {
            if (originalError !== null && typeof originalError == "object" && typeof originalError.then == "function")
              throw originalError;
            if (
              (resetContextDependencies(),
              resetHooksAfterThrow(),
              unwindInterruptedWork(unitOfWork),
              assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy),
              unitOfWork.mode & ProfileMode && startProfilerTimer(unitOfWork),
              invokeGuardedCallback(null, beginWork, null, current2, unitOfWork, expirationTime),
              hasCaughtError())
            ) {
              var replayError = clearCaughtError();
              throw replayError;
            } else throw originalError;
          }
        };
      }
      var didWarnAboutUpdateInRender = !1,
        didWarnAboutUpdateInRenderForAnotherComponent;
      didWarnAboutUpdateInRenderForAnotherComponent = new Set();
      function warnAboutRenderPhaseUpdatesInDEV(fiber) {
        if (isRendering && (executionContext & RenderContext) !== NoContext)
          switch (fiber.tag) {
            case FunctionComponent:
            case ForwardRef:
            case SimpleMemoComponent: {
              var renderingComponentName = (workInProgress && getComponentName(workInProgress.type)) || "Unknown",
                dedupeKey = renderingComponentName;
              if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
                didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
                var setStateComponentName = getComponentName(fiber.type) || "Unknown";
                error(
                  "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://fb.me/setstate-in-render",
                  setStateComponentName,
                  renderingComponentName,
                  renderingComponentName
                );
              }
              break;
            }
            case ClassComponent: {
              didWarnAboutUpdateInRender ||
                (error(
                  "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
                ),
                (didWarnAboutUpdateInRender = !0));
              break;
            }
          }
      }
      var IsThisRendererActing = { current: !1 };
      function warnIfNotScopedWithMatchingAct(fiber) {
        IsSomeRendererActing.current === !0 &&
          IsThisRendererActing.current !== !0 &&
          error(
            `It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);%s`,
            getStackByFiberInDevAndProd(fiber)
          );
      }
      function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
        (fiber.mode & StrictMode) !== NoMode &&
          IsSomeRendererActing.current === !1 &&
          IsThisRendererActing.current === !1 &&
          error(
            `An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`,
            getComponentName(fiber.type),
            getStackByFiberInDevAndProd(fiber)
          );
      }
      function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
        executionContext === NoContext &&
          IsSomeRendererActing.current === !1 &&
          IsThisRendererActing.current === !1 &&
          error(
            `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`,
            getComponentName(fiber.type),
            getStackByFiberInDevAndProd(fiber)
          );
      }
      var warnIfNotCurrentlyActingUpdatesInDev = warnIfNotCurrentlyActingUpdatesInDEV,
        didWarnAboutUnmockedScheduler = !1;
      function warnIfUnmockedScheduler(fiber) {
        didWarnAboutUnmockedScheduler === !1 &&
          Scheduler.unstable_flushAllWithoutAsserting === void 0 &&
          (fiber.mode & BlockingMode || fiber.mode & ConcurrentMode) &&
          ((didWarnAboutUnmockedScheduler = !0),
          error(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://fb.me/react-mock-scheduler`));
      }
      function computeThreadID(root2, expirationTime) {
        return expirationTime * 1e3 + root2.interactionThreadID;
      }
      function markSpawnedWork(expirationTime) {
        spawnedWorkDuringRender === null
          ? (spawnedWorkDuringRender = [expirationTime])
          : spawnedWorkDuringRender.push(expirationTime);
      }
      function scheduleInteractions(root2, expirationTime, interactions) {
        if (interactions.size > 0) {
          var pendingInteractionMap = root2.pendingInteractionMap,
            pendingInteractions = pendingInteractionMap.get(expirationTime);
          pendingInteractions != null
            ? interactions.forEach(function (interaction) {
                pendingInteractions.has(interaction) || interaction.__count++, pendingInteractions.add(interaction);
              })
            : (pendingInteractionMap.set(expirationTime, new Set(interactions)),
              interactions.forEach(function (interaction) {
                interaction.__count++;
              }));
          var subscriber = tracing.__subscriberRef.current;
          if (subscriber !== null) {
            var threadID = computeThreadID(root2, expirationTime);
            subscriber.onWorkScheduled(interactions, threadID);
          }
        }
      }
      function schedulePendingInteractions(root2, expirationTime) {
        scheduleInteractions(root2, expirationTime, tracing.__interactionsRef.current);
      }
      function startWorkOnPendingInteractions(root2, expirationTime) {
        var interactions = new Set();
        if (
          (root2.pendingInteractionMap.forEach(function (scheduledInteractions, scheduledExpirationTime) {
            scheduledExpirationTime >= expirationTime &&
              scheduledInteractions.forEach(function (interaction) {
                return interactions.add(interaction);
              });
          }),
          (root2.memoizedInteractions = interactions),
          interactions.size > 0)
        ) {
          var subscriber = tracing.__subscriberRef.current;
          if (subscriber !== null) {
            var threadID = computeThreadID(root2, expirationTime);
            try {
              subscriber.onWorkStarted(interactions, threadID);
            } catch (error2) {
              scheduleCallback(ImmediatePriority, function () {
                throw error2;
              });
            }
          }
        }
      }
      function finishPendingInteractions(root2, committedExpirationTime) {
        var earliestRemainingTimeAfterCommit = root2.firstPendingTime,
          subscriber;
        try {
          if (
            ((subscriber = tracing.__subscriberRef.current), subscriber !== null && root2.memoizedInteractions.size > 0)
          ) {
            var threadID = computeThreadID(root2, committedExpirationTime);
            subscriber.onWorkStopped(root2.memoizedInteractions, threadID);
          }
        } catch (error2) {
          scheduleCallback(ImmediatePriority, function () {
            throw error2;
          });
        } finally {
          var pendingInteractionMap = root2.pendingInteractionMap;
          pendingInteractionMap.forEach(function (scheduledInteractions, scheduledExpirationTime) {
            scheduledExpirationTime > earliestRemainingTimeAfterCommit &&
              (pendingInteractionMap.delete(scheduledExpirationTime),
              scheduledInteractions.forEach(function (interaction) {
                if ((interaction.__count--, subscriber !== null && interaction.__count === 0))
                  try {
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
                  } catch (error2) {
                    scheduleCallback(ImmediatePriority, function () {
                      throw error2;
                    });
                  }
              }));
          });
        }
      }
      var onScheduleFiberRoot = null,
        onCommitFiberRoot = null,
        onCommitFiberUnmount = null,
        hasLoggedError = !1,
        isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
      function injectInternals(internals) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
        var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook.isDisabled) return !0;
        if (!hook.supportsFiber)
          return (
            error(
              "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools"
            ),
            !0
          );
        try {
          var rendererID = hook.inject(internals);
          typeof hook.onScheduleFiberRoot == "function" &&
            (onScheduleFiberRoot = function (root2, children) {
              try {
                hook.onScheduleFiberRoot(rendererID, root2, children);
              } catch (err) {
                hasLoggedError || ((hasLoggedError = !0), error("React instrumentation encountered an error: %s", err));
              }
            }),
            (onCommitFiberRoot = function (root2, expirationTime) {
              try {
                var didError = (root2.current.effectTag & DidCapture) === DidCapture;
                if (enableProfilerTimer) {
                  var currentTime = getCurrentTime(),
                    priorityLevel = inferPriorityFromExpirationTime(currentTime, expirationTime);
                  hook.onCommitFiberRoot(rendererID, root2, priorityLevel, didError);
                } else hook.onCommitFiberRoot(rendererID, root2, void 0, didError);
              } catch (err) {
                hasLoggedError || ((hasLoggedError = !0), error("React instrumentation encountered an error: %s", err));
              }
            }),
            (onCommitFiberUnmount = function (fiber) {
              try {
                hook.onCommitFiberUnmount(rendererID, fiber);
              } catch (err) {
                hasLoggedError || ((hasLoggedError = !0), error("React instrumentation encountered an error: %s", err));
              }
            });
        } catch (err) {
          error("React instrumentation encountered an error: %s.", err);
        }
        return !0;
      }
      function onScheduleRoot(root2, children) {
        typeof onScheduleFiberRoot == "function" && onScheduleFiberRoot(root2, children);
      }
      function onCommitRoot(root2, expirationTime) {
        typeof onCommitFiberRoot == "function" && onCommitFiberRoot(root2, expirationTime);
      }
      function onCommitUnmount(fiber) {
        typeof onCommitFiberUnmount == "function" && onCommitFiberUnmount(fiber);
      }
      var hasBadMapPolyfill;
      {
        hasBadMapPolyfill = !1;
        try {
          var nonExtensibleObject = Object.preventExtensions({}),
            testMap = new Map([[nonExtensibleObject, null]]),
            testSet = new Set([nonExtensibleObject]);
          testMap.set(0, 0), testSet.add(0);
        } catch {
          hasBadMapPolyfill = !0;
        }
      }
      var debugCounter = 1;
      function FiberNode(tag, pendingProps, key, mode) {
        (this.tag = tag),
          (this.key = key),
          (this.elementType = null),
          (this.type = null),
          (this.stateNode = null),
          (this.return = null),
          (this.child = null),
          (this.sibling = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = pendingProps),
          (this.memoizedProps = null),
          (this.updateQueue = null),
          (this.memoizedState = null),
          (this.dependencies = null),
          (this.mode = mode),
          (this.effectTag = NoEffect),
          (this.nextEffect = null),
          (this.firstEffect = null),
          (this.lastEffect = null),
          (this.expirationTime = NoWork),
          (this.childExpirationTime = NoWork),
          (this.alternate = null),
          (this.actualDuration = Number.NaN),
          (this.actualStartTime = Number.NaN),
          (this.selfBaseDuration = Number.NaN),
          (this.treeBaseDuration = Number.NaN),
          (this.actualDuration = 0),
          (this.actualStartTime = -1),
          (this.selfBaseDuration = 0),
          (this.treeBaseDuration = 0),
          (this._debugID = debugCounter++),
          (this._debugIsCurrentlyTiming = !1),
          (this._debugSource = null),
          (this._debugOwner = null),
          (this._debugNeedsRemount = !1),
          (this._debugHookTypes = null),
          !hasBadMapPolyfill && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
      }
      var createFiber = function (tag, pendingProps, key, mode) {
        return new FiberNode(tag, pendingProps, key, mode);
      };
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function isSimpleFunctionComponent(type) {
        return typeof type == "function" && !shouldConstruct(type) && type.defaultProps === void 0;
      }
      function resolveLazyComponentTag(Component) {
        if (typeof Component == "function") return shouldConstruct(Component) ? ClassComponent : FunctionComponent;
        if (Component != null) {
          var $$typeof = Component.$$typeof;
          if ($$typeof === REACT_FORWARD_REF_TYPE) return ForwardRef;
          if ($$typeof === REACT_MEMO_TYPE) return MemoComponent;
        }
        return IndeterminateComponent;
      }
      function createWorkInProgress(current2, pendingProps) {
        var workInProgress2 = current2.alternate;
        workInProgress2 === null
          ? ((workInProgress2 = createFiber(current2.tag, pendingProps, current2.key, current2.mode)),
            (workInProgress2.elementType = current2.elementType),
            (workInProgress2.type = current2.type),
            (workInProgress2.stateNode = current2.stateNode),
            (workInProgress2._debugID = current2._debugID),
            (workInProgress2._debugSource = current2._debugSource),
            (workInProgress2._debugOwner = current2._debugOwner),
            (workInProgress2._debugHookTypes = current2._debugHookTypes),
            (workInProgress2.alternate = current2),
            (current2.alternate = workInProgress2))
          : ((workInProgress2.pendingProps = pendingProps),
            (workInProgress2.effectTag = NoEffect),
            (workInProgress2.nextEffect = null),
            (workInProgress2.firstEffect = null),
            (workInProgress2.lastEffect = null),
            (workInProgress2.actualDuration = 0),
            (workInProgress2.actualStartTime = -1)),
          (workInProgress2.childExpirationTime = current2.childExpirationTime),
          (workInProgress2.expirationTime = current2.expirationTime),
          (workInProgress2.child = current2.child),
          (workInProgress2.memoizedProps = current2.memoizedProps),
          (workInProgress2.memoizedState = current2.memoizedState),
          (workInProgress2.updateQueue = current2.updateQueue);
        var currentDependencies = current2.dependencies;
        switch (
          ((workInProgress2.dependencies =
            currentDependencies === null
              ? null
              : {
                  expirationTime: currentDependencies.expirationTime,
                  firstContext: currentDependencies.firstContext,
                  responders: currentDependencies.responders,
                }),
          (workInProgress2.sibling = current2.sibling),
          (workInProgress2.index = current2.index),
          (workInProgress2.ref = current2.ref),
          (workInProgress2.selfBaseDuration = current2.selfBaseDuration),
          (workInProgress2.treeBaseDuration = current2.treeBaseDuration),
          (workInProgress2._debugNeedsRemount = current2._debugNeedsRemount),
          workInProgress2.tag)
        ) {
          case IndeterminateComponent:
          case FunctionComponent:
          case SimpleMemoComponent:
            workInProgress2.type = resolveFunctionForHotReloading(current2.type);
            break;
          case ClassComponent:
            workInProgress2.type = resolveClassForHotReloading(current2.type);
            break;
          case ForwardRef:
            workInProgress2.type = resolveForwardRefForHotReloading(current2.type);
            break;
        }
        return workInProgress2;
      }
      function resetWorkInProgress(workInProgress2, renderExpirationTime2) {
        (workInProgress2.effectTag &= Placement),
          (workInProgress2.nextEffect = null),
          (workInProgress2.firstEffect = null),
          (workInProgress2.lastEffect = null);
        var current2 = workInProgress2.alternate;
        if (current2 === null)
          (workInProgress2.childExpirationTime = NoWork),
            (workInProgress2.expirationTime = renderExpirationTime2),
            (workInProgress2.child = null),
            (workInProgress2.memoizedProps = null),
            (workInProgress2.memoizedState = null),
            (workInProgress2.updateQueue = null),
            (workInProgress2.dependencies = null),
            (workInProgress2.selfBaseDuration = 0),
            (workInProgress2.treeBaseDuration = 0);
        else {
          (workInProgress2.childExpirationTime = current2.childExpirationTime),
            (workInProgress2.expirationTime = current2.expirationTime),
            (workInProgress2.child = current2.child),
            (workInProgress2.memoizedProps = current2.memoizedProps),
            (workInProgress2.memoizedState = current2.memoizedState),
            (workInProgress2.updateQueue = current2.updateQueue);
          var currentDependencies = current2.dependencies;
          (workInProgress2.dependencies =
            currentDependencies === null
              ? null
              : {
                  expirationTime: currentDependencies.expirationTime,
                  firstContext: currentDependencies.firstContext,
                  responders: currentDependencies.responders,
                }),
            (workInProgress2.selfBaseDuration = current2.selfBaseDuration),
            (workInProgress2.treeBaseDuration = current2.treeBaseDuration);
        }
        return workInProgress2;
      }
      function createHostRootFiber(tag) {
        var mode;
        return (
          tag === ConcurrentRoot
            ? (mode = ConcurrentMode | BlockingMode | StrictMode)
            : tag === BlockingRoot
            ? (mode = BlockingMode | StrictMode)
            : (mode = NoMode),
          isDevToolsPresent && (mode |= ProfileMode),
          createFiber(HostRoot, null, null, mode)
        );
      }
      function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, expirationTime) {
        var fiber,
          fiberTag = IndeterminateComponent,
          resolvedType = type;
        if (typeof type == "function")
          shouldConstruct(type)
            ? ((fiberTag = ClassComponent), (resolvedType = resolveClassForHotReloading(resolvedType)))
            : (resolvedType = resolveFunctionForHotReloading(resolvedType));
        else if (typeof type == "string") fiberTag = HostComponent;
        else {
          getTag: switch (type) {
            case REACT_FRAGMENT_TYPE:
              return createFiberFromFragment(pendingProps.children, mode, expirationTime, key);
            case REACT_CONCURRENT_MODE_TYPE:
              (fiberTag = Mode), (mode |= ConcurrentMode | BlockingMode | StrictMode);
              break;
            case REACT_STRICT_MODE_TYPE:
              (fiberTag = Mode), (mode |= StrictMode);
              break;
            case REACT_PROFILER_TYPE:
              return createFiberFromProfiler(pendingProps, mode, expirationTime, key);
            case REACT_SUSPENSE_TYPE:
              return createFiberFromSuspense(pendingProps, mode, expirationTime, key);
            case REACT_SUSPENSE_LIST_TYPE:
              return createFiberFromSuspenseList(pendingProps, mode, expirationTime, key);
            default: {
              if (typeof type == "object" && type !== null)
                switch (type.$$typeof) {
                  case REACT_PROVIDER_TYPE:
                    fiberTag = ContextProvider;
                    break getTag;
                  case REACT_CONTEXT_TYPE:
                    fiberTag = ContextConsumer;
                    break getTag;
                  case REACT_FORWARD_REF_TYPE:
                    (fiberTag = ForwardRef), (resolvedType = resolveForwardRefForHotReloading(resolvedType));
                    break getTag;
                  case REACT_MEMO_TYPE:
                    fiberTag = MemoComponent;
                    break getTag;
                  case REACT_LAZY_TYPE:
                    (fiberTag = LazyComponent), (resolvedType = null);
                    break getTag;
                  case REACT_BLOCK_TYPE:
                    fiberTag = Block;
                    break getTag;
                }
              var info = "";
              {
                (type === void 0 || (typeof type == "object" && type !== null && Object.keys(type).length === 0)) &&
                  (info +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var ownerName = owner ? getComponentName(owner.type) : null;
                ownerName &&
                  (info +=
                    `

Check the render method of \`` +
                    ownerName +
                    "`.");
              }
              throw Error(
                "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
                  (type == null ? type : typeof type) +
                  "." +
                  info
              );
            }
          }
        }
        return (
          (fiber = createFiber(fiberTag, pendingProps, key, mode)),
          (fiber.elementType = type),
          (fiber.type = resolvedType),
          (fiber.expirationTime = expirationTime),
          fiber
        );
      }
      function createFiberFromElement(element, mode, expirationTime) {
        var owner = null;
        owner = element._owner;
        var type = element.type,
          key = element.key,
          pendingProps = element.props,
          fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, expirationTime);
        return (fiber._debugSource = element._source), (fiber._debugOwner = element._owner), fiber;
      }
      function createFiberFromFragment(elements, mode, expirationTime, key) {
        var fiber = createFiber(Fragment, elements, key, mode);
        return (fiber.expirationTime = expirationTime), fiber;
      }
      function createFiberFromProfiler(pendingProps, mode, expirationTime, key) {
        (typeof pendingProps.id != "string" || typeof pendingProps.onRender != "function") &&
          error('Profiler must specify an "id" string and "onRender" function as props');
        var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
        return (
          (fiber.elementType = REACT_PROFILER_TYPE),
          (fiber.type = REACT_PROFILER_TYPE),
          (fiber.expirationTime = expirationTime),
          fiber
        );
      }
      function createFiberFromSuspense(pendingProps, mode, expirationTime, key) {
        var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
        return (
          (fiber.type = REACT_SUSPENSE_TYPE),
          (fiber.elementType = REACT_SUSPENSE_TYPE),
          (fiber.expirationTime = expirationTime),
          fiber
        );
      }
      function createFiberFromSuspenseList(pendingProps, mode, expirationTime, key) {
        var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
        return (
          (fiber.type = REACT_SUSPENSE_LIST_TYPE),
          (fiber.elementType = REACT_SUSPENSE_LIST_TYPE),
          (fiber.expirationTime = expirationTime),
          fiber
        );
      }
      function createFiberFromText(content, mode, expirationTime) {
        var fiber = createFiber(HostText, content, null, mode);
        return (fiber.expirationTime = expirationTime), fiber;
      }
      function createFiberFromHostInstanceForDeletion() {
        var fiber = createFiber(HostComponent, null, null, NoMode);
        return (fiber.elementType = "DELETED"), (fiber.type = "DELETED"), fiber;
      }
      function createFiberFromPortal(portal, mode, expirationTime) {
        var pendingProps = portal.children !== null ? portal.children : [],
          fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
        return (
          (fiber.expirationTime = expirationTime),
          (fiber.stateNode = {
            containerInfo: portal.containerInfo,
            pendingChildren: null,
            implementation: portal.implementation,
          }),
          fiber
        );
      }
      function assignFiberPropertiesInDEV(target, source) {
        return (
          target === null && (target = createFiber(IndeterminateComponent, null, null, NoMode)),
          (target.tag = source.tag),
          (target.key = source.key),
          (target.elementType = source.elementType),
          (target.type = source.type),
          (target.stateNode = source.stateNode),
          (target.return = source.return),
          (target.child = source.child),
          (target.sibling = source.sibling),
          (target.index = source.index),
          (target.ref = source.ref),
          (target.pendingProps = source.pendingProps),
          (target.memoizedProps = source.memoizedProps),
          (target.updateQueue = source.updateQueue),
          (target.memoizedState = source.memoizedState),
          (target.dependencies = source.dependencies),
          (target.mode = source.mode),
          (target.effectTag = source.effectTag),
          (target.nextEffect = source.nextEffect),
          (target.firstEffect = source.firstEffect),
          (target.lastEffect = source.lastEffect),
          (target.expirationTime = source.expirationTime),
          (target.childExpirationTime = source.childExpirationTime),
          (target.alternate = source.alternate),
          (target.actualDuration = source.actualDuration),
          (target.actualStartTime = source.actualStartTime),
          (target.selfBaseDuration = source.selfBaseDuration),
          (target.treeBaseDuration = source.treeBaseDuration),
          (target._debugID = source._debugID),
          (target._debugSource = source._debugSource),
          (target._debugOwner = source._debugOwner),
          (target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming),
          (target._debugNeedsRemount = source._debugNeedsRemount),
          (target._debugHookTypes = source._debugHookTypes),
          target
        );
      }
      function FiberRootNode(containerInfo, tag, hydrate2) {
        (this.tag = tag),
          (this.current = null),
          (this.containerInfo = containerInfo),
          (this.pendingChildren = null),
          (this.pingCache = null),
          (this.finishedExpirationTime = NoWork),
          (this.finishedWork = null),
          (this.timeoutHandle = noTimeout),
          (this.context = null),
          (this.pendingContext = null),
          (this.hydrate = hydrate2),
          (this.callbackNode = null),
          (this.callbackPriority = NoPriority),
          (this.firstPendingTime = NoWork),
          (this.firstSuspendedTime = NoWork),
          (this.lastSuspendedTime = NoWork),
          (this.nextKnownPendingLevel = NoWork),
          (this.lastPingedTime = NoWork),
          (this.lastExpiredTime = NoWork),
          (this.interactionThreadID = tracing.unstable_getThreadID()),
          (this.memoizedInteractions = new Set()),
          (this.pendingInteractionMap = new Map());
      }
      function createFiberRoot(containerInfo, tag, hydrate2, hydrationCallbacks) {
        var root2 = new FiberRootNode(containerInfo, tag, hydrate2),
          uninitializedFiber = createHostRootFiber(tag);
        return (
          (root2.current = uninitializedFiber),
          (uninitializedFiber.stateNode = root2),
          initializeUpdateQueue(uninitializedFiber),
          root2
        );
      }
      function isRootSuspendedAtTime(root2, expirationTime) {
        var firstSuspendedTime = root2.firstSuspendedTime,
          lastSuspendedTime = root2.lastSuspendedTime;
        return (
          firstSuspendedTime !== NoWork && firstSuspendedTime >= expirationTime && lastSuspendedTime <= expirationTime
        );
      }
      function markRootSuspendedAtTime(root2, expirationTime) {
        var firstSuspendedTime = root2.firstSuspendedTime,
          lastSuspendedTime = root2.lastSuspendedTime;
        firstSuspendedTime < expirationTime && (root2.firstSuspendedTime = expirationTime),
          (lastSuspendedTime > expirationTime || firstSuspendedTime === NoWork) &&
            (root2.lastSuspendedTime = expirationTime),
          expirationTime <= root2.lastPingedTime && (root2.lastPingedTime = NoWork),
          expirationTime <= root2.lastExpiredTime && (root2.lastExpiredTime = NoWork);
      }
      function markRootUpdatedAtTime(root2, expirationTime) {
        var firstPendingTime = root2.firstPendingTime;
        expirationTime > firstPendingTime && (root2.firstPendingTime = expirationTime);
        var firstSuspendedTime = root2.firstSuspendedTime;
        firstSuspendedTime !== NoWork &&
          (expirationTime >= firstSuspendedTime
            ? (root2.firstSuspendedTime = root2.lastSuspendedTime = root2.nextKnownPendingLevel = NoWork)
            : expirationTime >= root2.lastSuspendedTime && (root2.lastSuspendedTime = expirationTime + 1),
          expirationTime > root2.nextKnownPendingLevel && (root2.nextKnownPendingLevel = expirationTime));
      }
      function markRootFinishedAtTime(root2, finishedExpirationTime, remainingExpirationTime) {
        (root2.firstPendingTime = remainingExpirationTime),
          finishedExpirationTime <= root2.lastSuspendedTime
            ? (root2.firstSuspendedTime = root2.lastSuspendedTime = root2.nextKnownPendingLevel = NoWork)
            : finishedExpirationTime <= root2.firstSuspendedTime &&
              (root2.firstSuspendedTime = finishedExpirationTime - 1),
          finishedExpirationTime <= root2.lastPingedTime && (root2.lastPingedTime = NoWork),
          finishedExpirationTime <= root2.lastExpiredTime && (root2.lastExpiredTime = NoWork);
      }
      function markRootExpiredAtTime(root2, expirationTime) {
        var lastExpiredTime = root2.lastExpiredTime;
        (lastExpiredTime === NoWork || lastExpiredTime > expirationTime) && (root2.lastExpiredTime = expirationTime);
      }
      var didWarnAboutNestedUpdates, didWarnAboutFindNodeInStrictMode;
      (didWarnAboutNestedUpdates = !1), (didWarnAboutFindNodeInStrictMode = {});
      function getContextForSubtree(parentComponent) {
        if (!parentComponent) return emptyContextObject;
        var fiber = get(parentComponent),
          parentContext = findCurrentUnmaskedContext(fiber);
        if (fiber.tag === ClassComponent) {
          var Component = fiber.type;
          if (isContextProvider(Component)) return processChildContext(fiber, Component, parentContext);
        }
        return parentContext;
      }
      function findHostInstanceWithWarning(component, methodName) {
        {
          var fiber = get(component);
          if (fiber === void 0)
            throw typeof component.render == "function"
              ? Error("Unable to find node on an unmounted component.")
              : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(component));
          var hostFiber = findCurrentHostFiber(fiber);
          if (hostFiber === null) return null;
          if (hostFiber.mode & StrictMode) {
            var componentName = getComponentName(fiber.type) || "Component";
            didWarnAboutFindNodeInStrictMode[componentName] ||
              ((didWarnAboutFindNodeInStrictMode[componentName] = !0),
              fiber.mode & StrictMode
                ? error(
                    "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s",
                    methodName,
                    methodName,
                    componentName,
                    getStackByFiberInDevAndProd(hostFiber)
                  )
                : error(
                    "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s",
                    methodName,
                    methodName,
                    componentName,
                    getStackByFiberInDevAndProd(hostFiber)
                  ));
          }
          return hostFiber.stateNode;
        }
      }
      function createContainer(containerInfo, tag, hydrate2, hydrationCallbacks) {
        return createFiberRoot(containerInfo, tag, hydrate2);
      }
      function updateContainer(element, container, parentComponent, callback) {
        onScheduleRoot(container, element);
        var current$1 = container.current,
          currentTime = requestCurrentTimeForUpdate();
        typeof jest < "u" && (warnIfUnmockedScheduler(current$1), warnIfNotScopedWithMatchingAct(current$1));
        var suspenseConfig = requestCurrentSuspenseConfig(),
          expirationTime = computeExpirationForFiber(currentTime, current$1, suspenseConfig),
          context = getContextForSubtree(parentComponent);
        container.context === null ? (container.context = context) : (container.pendingContext = context),
          isRendering &&
            current !== null &&
            !didWarnAboutNestedUpdates &&
            ((didWarnAboutNestedUpdates = !0),
            error(
              `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
              getComponentName(current.type) || "Unknown"
            ));
        var update = createUpdate(expirationTime, suspenseConfig);
        return (
          (update.payload = { element }),
          (callback = callback === void 0 ? null : callback),
          callback !== null &&
            (typeof callback != "function" &&
              error(
                "render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                callback
              ),
            (update.callback = callback)),
          enqueueUpdate(current$1, update),
          scheduleWork(current$1, expirationTime),
          expirationTime
        );
      }
      function getPublicRootInstance(container) {
        var containerFiber = container.current;
        if (!containerFiber.child) return null;
        switch (containerFiber.child.tag) {
          case HostComponent:
            return containerFiber.child.stateNode;
          default:
            return containerFiber.child.stateNode;
        }
      }
      function markRetryTimeImpl(fiber, retryTime) {
        var suspenseState = fiber.memoizedState;
        suspenseState !== null &&
          suspenseState.dehydrated !== null &&
          suspenseState.retryTime < retryTime &&
          (suspenseState.retryTime = retryTime);
      }
      function markRetryTimeIfNotHydrated(fiber, retryTime) {
        markRetryTimeImpl(fiber, retryTime);
        var alternate = fiber.alternate;
        alternate && markRetryTimeImpl(alternate, retryTime);
      }
      function attemptUserBlockingHydration$1(fiber) {
        if (fiber.tag === SuspenseComponent) {
          var expTime = computeInteractiveExpiration(requestCurrentTimeForUpdate());
          scheduleWork(fiber, expTime), markRetryTimeIfNotHydrated(fiber, expTime);
        }
      }
      function attemptContinuousHydration$1(fiber) {
        fiber.tag === SuspenseComponent &&
          (scheduleWork(fiber, ContinuousHydration), markRetryTimeIfNotHydrated(fiber, ContinuousHydration));
      }
      function attemptHydrationAtCurrentPriority$1(fiber) {
        if (fiber.tag === SuspenseComponent) {
          var currentTime = requestCurrentTimeForUpdate(),
            expTime = computeExpirationForFiber(currentTime, fiber, null);
          scheduleWork(fiber, expTime), markRetryTimeIfNotHydrated(fiber, expTime);
        }
      }
      function findHostInstanceWithNoPortals(fiber) {
        var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
        return hostFiber === null
          ? null
          : hostFiber.tag === FundamentalComponent
          ? hostFiber.stateNode.instance
          : hostFiber.stateNode;
      }
      var shouldSuspendImpl = function (fiber) {
        return !1;
      };
      function shouldSuspend(fiber) {
        return shouldSuspendImpl(fiber);
      }
      var overrideHookState = null,
        overrideProps = null,
        scheduleUpdate = null,
        setSuspenseHandler = null;
      {
        var copyWithSetImpl = function (obj, path, idx, value) {
            if (idx >= path.length) return value;
            var key = path[idx],
              updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
            return (updated[key] = copyWithSetImpl(obj[key], path, idx + 1, value)), updated;
          },
          copyWithSet = function (obj, path, value) {
            return copyWithSetImpl(obj, path, 0, value);
          };
        (overrideHookState = function (fiber, id, path, value) {
          for (var currentHook2 = fiber.memoizedState; currentHook2 !== null && id > 0; )
            (currentHook2 = currentHook2.next), id--;
          if (currentHook2 !== null) {
            var newState = copyWithSet(currentHook2.memoizedState, path, value);
            (currentHook2.memoizedState = newState),
              (currentHook2.baseState = newState),
              (fiber.memoizedProps = _assign({}, fiber.memoizedProps)),
              scheduleWork(fiber, Sync);
          }
        }),
          (overrideProps = function (fiber, path, value) {
            (fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value)),
              fiber.alternate && (fiber.alternate.pendingProps = fiber.pendingProps),
              scheduleWork(fiber, Sync);
          }),
          (scheduleUpdate = function (fiber) {
            scheduleWork(fiber, Sync);
          }),
          (setSuspenseHandler = function (newShouldSuspendImpl) {
            shouldSuspendImpl = newShouldSuspendImpl;
          });
      }
      function injectIntoDevTools(devToolsConfig) {
        var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance,
          ReactCurrentDispatcher2 = ReactSharedInternals.ReactCurrentDispatcher;
        return injectInternals(
          _assign({}, devToolsConfig, {
            overrideHookState,
            overrideProps,
            setSuspenseHandler,
            scheduleUpdate,
            currentDispatcherRef: ReactCurrentDispatcher2,
            findHostInstanceByFiber: function (fiber) {
              var hostFiber = findCurrentHostFiber(fiber);
              return hostFiber === null ? null : hostFiber.stateNode;
            },
            findFiberByHostInstance: function (instance) {
              return findFiberByHostInstance ? findFiberByHostInstance(instance) : null;
            },
            findHostInstancesForRefresh,
            scheduleRefresh,
            scheduleRoot,
            setRefreshHandler,
            getCurrentFiber: function () {
              return current;
            },
          })
        );
      }
      var IsSomeRendererActing$1 = ReactSharedInternals.IsSomeRendererActing;
      function ReactDOMRoot(container, options) {
        this._internalRoot = createRootImpl(container, ConcurrentRoot, options);
      }
      function ReactDOMBlockingRoot(container, tag, options) {
        this._internalRoot = createRootImpl(container, tag, options);
      }
      (ReactDOMRoot.prototype.render = ReactDOMBlockingRoot.prototype.render =
        function (children) {
          var root2 = this._internalRoot;
          {
            typeof arguments[1] == "function" &&
              error(
                "render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
              );
            var container = root2.containerInfo;
            if (container.nodeType !== COMMENT_NODE) {
              var hostInstance = findHostInstanceWithNoPortals(root2.current);
              hostInstance &&
                hostInstance.parentNode !== container &&
                error(
                  "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
                );
            }
          }
          updateContainer(children, root2, null, null);
        }),
        (ReactDOMRoot.prototype.unmount = ReactDOMBlockingRoot.prototype.unmount =
          function () {
            typeof arguments[0] == "function" &&
              error(
                "unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
              );
            var root2 = this._internalRoot,
              container = root2.containerInfo;
            updateContainer(null, root2, null, function () {
              unmarkContainerAsRoot(container);
            });
          });
      function createRootImpl(container, tag, options) {
        var hydrate2 = options != null && options.hydrate === !0,
          hydrationCallbacks = (options != null && options.hydrationOptions) || null,
          root2 = createContainer(container, tag, hydrate2);
        if ((markContainerAsRoot(root2.current, container), hydrate2 && tag !== LegacyRoot)) {
          var doc = container.nodeType === DOCUMENT_NODE ? container : container.ownerDocument;
          eagerlyTrapReplayableEvents(container, doc);
        }
        return root2;
      }
      function createLegacyRoot(container, options) {
        return new ReactDOMBlockingRoot(container, LegacyRoot, options);
      }
      function isValidContainer(node) {
        return !!(
          node &&
          (node.nodeType === ELEMENT_NODE ||
            node.nodeType === DOCUMENT_NODE ||
            node.nodeType === DOCUMENT_FRAGMENT_NODE ||
            (node.nodeType === COMMENT_NODE && node.nodeValue === " react-mount-point-unstable "))
        );
      }
      var ReactCurrentOwner$3 = ReactSharedInternals.ReactCurrentOwner,
        topLevelUpdateWarnings,
        warnedAboutHydrateAPI = !1;
      topLevelUpdateWarnings = function (container) {
        if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
          var hostInstance = findHostInstanceWithNoPortals(container._reactRootContainer._internalRoot.current);
          hostInstance &&
            hostInstance.parentNode !== container &&
            error(
              "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container."
            );
        }
        var isRootRenderedBySomeReact = !!container._reactRootContainer,
          rootEl = getReactRootElementInContainer(container),
          hasNonRootReactChild = !!(rootEl && getInstanceFromNode$1(rootEl));
        hasNonRootReactChild &&
          !isRootRenderedBySomeReact &&
          error(
            "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."
          ),
          container.nodeType === ELEMENT_NODE &&
            container.tagName &&
            container.tagName.toUpperCase() === "BODY" &&
            error(
              "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app."
            );
      };
      function getReactRootElementInContainer(container) {
        return container
          ? container.nodeType === DOCUMENT_NODE
            ? container.documentElement
            : container.firstChild
          : null;
      }
      function shouldHydrateDueToLegacyHeuristic(container) {
        var rootElement = getReactRootElementInContainer(container);
        return !!(
          rootElement &&
          rootElement.nodeType === ELEMENT_NODE &&
          rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME)
        );
      }
      function legacyCreateRootFromDOMContainer(container, forceHydrate) {
        var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
        if (!shouldHydrate)
          for (var warned = !1, rootSibling; (rootSibling = container.lastChild); )
            !warned &&
              rootSibling.nodeType === ELEMENT_NODE &&
              rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME) &&
              ((warned = !0),
              error(
                "render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup."
              )),
              container.removeChild(rootSibling);
        return (
          shouldHydrate &&
            !forceHydrate &&
            !warnedAboutHydrateAPI &&
            ((warnedAboutHydrateAPI = !0),
            warn(
              "render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML."
            )),
          createLegacyRoot(container, shouldHydrate ? { hydrate: !0 } : void 0)
        );
      }
      function warnOnInvalidCallback$1(callback, callerName) {
        callback !== null &&
          typeof callback != "function" &&
          error(
            "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
            callerName,
            callback
          );
      }
      function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
        topLevelUpdateWarnings(container), warnOnInvalidCallback$1(callback === void 0 ? null : callback, "render");
        var root2 = container._reactRootContainer,
          fiberRoot;
        if (root2) {
          if (((fiberRoot = root2._internalRoot), typeof callback == "function")) {
            var _originalCallback = callback;
            callback = function () {
              var instance = getPublicRootInstance(fiberRoot);
              _originalCallback.call(instance);
            };
          }
          updateContainer(children, fiberRoot, parentComponent, callback);
        } else {
          if (
            ((root2 = container._reactRootContainer = legacyCreateRootFromDOMContainer(container, forceHydrate)),
            (fiberRoot = root2._internalRoot),
            typeof callback == "function")
          ) {
            var originalCallback = callback;
            callback = function () {
              var instance = getPublicRootInstance(fiberRoot);
              originalCallback.call(instance);
            };
          }
          unbatchedUpdates(function () {
            updateContainer(children, fiberRoot, parentComponent, callback);
          });
        }
        return getPublicRootInstance(fiberRoot);
      }
      function findDOMNode(componentOrElement) {
        {
          var owner = ReactCurrentOwner$3.current;
          if (owner !== null && owner.stateNode !== null) {
            var warnedAboutRefsInRender = owner.stateNode._warnedAboutRefsInRender;
            warnedAboutRefsInRender ||
              error(
                "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                getComponentName(owner.type) || "A component"
              ),
              (owner.stateNode._warnedAboutRefsInRender = !0);
          }
        }
        return componentOrElement == null
          ? null
          : componentOrElement.nodeType === ELEMENT_NODE
          ? componentOrElement
          : findHostInstanceWithWarning(componentOrElement, "findDOMNode");
      }
      function hydrate(element, container, callback) {
        if (!isValidContainer(container)) throw Error("Target container is not a DOM element.");
        {
          var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === void 0;
          isModernRoot &&
            error(
              "You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?"
            );
        }
        return legacyRenderSubtreeIntoContainer(null, element, container, !0, callback);
      }
      function render(element, container, callback) {
        if (!isValidContainer(container)) throw Error("Target container is not a DOM element.");
        {
          var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === void 0;
          isModernRoot &&
            error(
              "You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?"
            );
        }
        return legacyRenderSubtreeIntoContainer(null, element, container, !1, callback);
      }
      function unstable_renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
        if (!isValidContainer(containerNode)) throw Error("Target container is not a DOM element.");
        if (!(parentComponent != null && has(parentComponent)))
          throw Error("parentComponent must be a valid React Component");
        return legacyRenderSubtreeIntoContainer(parentComponent, element, containerNode, !1, callback);
      }
      function unmountComponentAtNode(container) {
        if (!isValidContainer(container))
          throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
        {
          var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === void 0;
          isModernRoot &&
            error(
              "You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?"
            );
        }
        if (container._reactRootContainer) {
          {
            var rootEl = getReactRootElementInContainer(container),
              renderedByDifferentReact = rootEl && !getInstanceFromNode$1(rootEl);
            renderedByDifferentReact &&
              error(
                "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
              );
          }
          return (
            unbatchedUpdates(function () {
              legacyRenderSubtreeIntoContainer(null, null, container, !1, function () {
                (container._reactRootContainer = null), unmarkContainerAsRoot(container);
              });
            }),
            !0
          );
        } else {
          {
            var _rootEl = getReactRootElementInContainer(container),
              hasNonRootReactChild = !!(_rootEl && getInstanceFromNode$1(_rootEl)),
              isContainerReactRoot =
                container.nodeType === ELEMENT_NODE &&
                isValidContainer(container.parentNode) &&
                !!container.parentNode._reactRootContainer;
            hasNonRootReactChild &&
              error(
                "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
                isContainerReactRoot
                  ? "You may have accidentally passed in a React root node instead of its container."
                  : "Instead, have the parent component update its state and rerender in order to remove this component."
              );
          }
          return !1;
        }
      }
      function createPortal(children, containerInfo, implementation) {
        var key = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: key == null ? null : "" + key,
          children,
          containerInfo,
          implementation,
        };
      }
      var ReactVersion = "16.14.0";
      setAttemptUserBlockingHydration(attemptUserBlockingHydration$1),
        setAttemptContinuousHydration(attemptContinuousHydration$1),
        setAttemptHydrationAtCurrentPriority(attemptHydrationAtCurrentPriority$1);
      var didWarnAboutUnstableCreatePortal = !1;
      (typeof Map != "function" ||
        Map.prototype == null ||
        typeof Map.prototype.forEach != "function" ||
        typeof Set != "function" ||
        Set.prototype == null ||
        typeof Set.prototype.clear != "function" ||
        typeof Set.prototype.forEach != "function") &&
        error(
          "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
        ),
        setRestoreImplementation(restoreControlledState$3),
        setBatchingImplementation(batchedUpdates$1, discreteUpdates$1, flushDiscreteUpdates, batchedEventUpdates$1);
      function createPortal$1(children, container) {
        var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!isValidContainer(container)) throw Error("Target container is not a DOM element.");
        return createPortal(children, container, null, key);
      }
      function renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
        return unstable_renderSubtreeIntoContainer(parentComponent, element, containerNode, callback);
      }
      function unstable_createPortal(children, container) {
        var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        return (
          didWarnAboutUnstableCreatePortal ||
            ((didWarnAboutUnstableCreatePortal = !0),
            warn(
              'The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.'
            )),
          createPortal$1(children, container, key)
        );
      }
      var Internals = {
          Events: [
            getInstanceFromNode$1,
            getNodeFromInstance$1,
            getFiberCurrentPropsFromNode$1,
            injectEventPluginsByName,
            eventNameDispatchConfigs,
            accumulateTwoPhaseDispatches,
            accumulateDirectDispatches,
            enqueueStateRestore,
            restoreStateIfNeeded,
            dispatchEvent,
            runEventsInBatch,
            flushPassiveEffects,
            IsThisRendererActing,
          ],
        },
        foundDevTools = injectIntoDevTools({
          findFiberByHostInstance: getClosestInstanceFromNode,
          bundleType: 1,
          version: ReactVersion,
          rendererPackageName: "react-dom",
        });
      if (
        !foundDevTools &&
        canUseDOM &&
        window.top === window.self &&
        ((navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1) ||
          navigator.userAgent.indexOf("Firefox") > -1)
      ) {
        var protocol = window.location.protocol;
        /^(https?|file):$/.test(protocol) &&
          console.info(
            "%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools" +
              (protocol === "file:"
                ? `
You might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq`
                : ""),
            "font-weight:bold"
          );
      }
      (exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals),
        (exports.createPortal = createPortal$1),
        (exports.findDOMNode = findDOMNode),
        (exports.flushSync = flushSync2),
        (exports.hydrate = hydrate),
        (exports.render = render),
        (exports.unmountComponentAtNode = unmountComponentAtNode),
        (exports.unstable_batchedUpdates = batchedUpdates$1),
        (exports.unstable_createPortal = unstable_createPortal),
        (exports.unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer),
        (exports.version = ReactVersion);
    })();
  },
});
var require_react_dom = __commonJS({
  "../../node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    module.exports = require_react_dom_development();
  },
});
var React3 = __toESM(require_react(), 1),
  import_react = __toESM(require_react(), 1),
  ReactDOM = __toESM(require_react_dom(), 1),
  import_react_dom = __toESM(require_react_dom(), 1);
var import_memoizerific = __toESM(require_memoizerific(), 1),
  require_react_fast_compare = __commonJS2({
    "../../node_modules/react-fast-compare/index.js"(exports, module) {
      var hasElementType = typeof Element < "u",
        hasMap = typeof Map == "function",
        hasSet = typeof Set == "function",
        hasArrayBuffer = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
      function equal(a, b) {
        if (a === b) return !0;
        if (a && b && typeof a == "object" && typeof b == "object") {
          if (a.constructor !== b.constructor) return !1;
          var length, i, keys;
          if (Array.isArray(a)) {
            if (((length = a.length), length != b.length)) return !1;
            for (i = length; i-- !== 0; ) if (!equal(a[i], b[i])) return !1;
            return !0;
          }
          var it;
          if (hasMap && a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return !1;
            for (it = a.entries(); !(i = it.next()).done; ) if (!b.has(i.value[0])) return !1;
            for (it = a.entries(); !(i = it.next()).done; ) if (!equal(i.value[1], b.get(i.value[0]))) return !1;
            return !0;
          }
          if (hasSet && a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return !1;
            for (it = a.entries(); !(i = it.next()).done; ) if (!b.has(i.value[0])) return !1;
            return !0;
          }
          if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            if (((length = a.length), length != b.length)) return !1;
            for (i = length; i-- !== 0; ) if (a[i] !== b[i]) return !1;
            return !0;
          }
          if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
          if (
            a.valueOf !== Object.prototype.valueOf &&
            typeof a.valueOf == "function" &&
            typeof b.valueOf == "function"
          )
            return a.valueOf() === b.valueOf();
          if (
            a.toString !== Object.prototype.toString &&
            typeof a.toString == "function" &&
            typeof b.toString == "function"
          )
            return a.toString() === b.toString();
          if (((keys = Object.keys(a)), (length = keys.length), length !== Object.keys(b).length)) return !1;
          for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return !1;
          if (hasElementType && a instanceof Element) return !1;
          for (i = length; i-- !== 0; )
            if (
              !((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) &&
              !equal(a[keys[i]], b[keys[i]])
            )
              return !1;
          return !0;
        }
        return a !== a && b !== b;
      }
      module.exports = function (a, b) {
        try {
          return equal(a, b);
        } catch (error) {
          if ((error.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"), !1;
          throw error;
        }
      };
    },
  }),
  fromEntries = function (entries) {
    return entries.reduce(function (acc, _ref) {
      var key = _ref[0],
        value = _ref[1];
      return (acc[key] = value), acc;
    }, {});
  },
  useIsomorphicLayoutEffect =
    typeof window < "u" && window.document && window.document.createElement ? React3.useLayoutEffect : React3.useEffect,
  top = "top",
  bottom = "bottom",
  right = "right",
  left = "left",
  auto = "auto",
  basePlacements = [top, bottom, right, left],
  start = "start",
  end = "end",
  clippingParents = "clippingParents",
  viewport = "viewport",
  popper = "popper",
  reference = "reference",
  variationPlacements = basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []),
  placements = [].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []),
  beforeRead = "beforeRead",
  read = "read",
  afterRead = "afterRead",
  beforeMain = "beforeMain",
  main = "main",
  afterMain = "afterMain",
  beforeWrite = "beforeWrite",
  write = "write",
  afterWrite = "afterWrite",
  modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) return window;
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return (ownerDocument && ownerDocument.defaultView) || window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot > "u") return !1;
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {},
      attributes = state.attributes[name] || {},
      element = state.elements[name];
    !isHTMLElement(element) ||
      !getNodeName(element) ||
      (Object.assign(element.style, style),
      Object.keys(attributes).forEach(function (name2) {
        var value = attributes[name2];
        value === !1 ? element.removeAttribute(name2) : element.setAttribute(name2, value === !0 ? "" : value);
      }));
  });
}
function effect(_ref2) {
  var state = _ref2.state,
    initialStyles = {
      popper: { position: state.options.strategy, left: "0", top: "0", margin: "0" },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(state.elements.popper.style, initialStyles.popper),
    (state.styles = initialStyles),
    state.elements.arrow && Object.assign(state.elements.arrow.style, initialStyles.arrow),
    function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name],
          attributes = state.attributes[name] || {},
          styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]),
          style = styleProperties.reduce(function (style2, property) {
            return (style2[property] = ""), style2;
          }, {});
        !isHTMLElement(element) ||
          !getNodeName(element) ||
          (Object.assign(element.style, style),
          Object.keys(attributes).forEach(function (attribute) {
            element.removeAttribute(attribute);
          }));
      });
    }
  );
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"],
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max,
  min = Math.min,
  round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  return uaData != null && uaData.brands && Array.isArray(uaData.brands)
    ? uaData.brands
        .map(function (item) {
          return item.brand + "/" + item.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  includeScale === void 0 && (includeScale = !1), isFixedStrategy === void 0 && (isFixedStrategy = !1);
  var clientRect = element.getBoundingClientRect(),
    scaleX = 1,
    scaleY = 1;
  includeScale &&
    isHTMLElement(element) &&
    ((scaleX = (element.offsetWidth > 0 && round(clientRect.width) / element.offsetWidth) || 1),
    (scaleY = (element.offsetHeight > 0 && round(clientRect.height) / element.offsetHeight) || 1));
  var _ref = isElement(element) ? getWindow(element) : window,
    visualViewport = _ref.visualViewport,
    addVisualOffsets = !isLayoutViewport() && isFixedStrategy,
    x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX,
    y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY,
    width = clientRect.width / scaleX,
    height = clientRect.height / scaleY;
  return { width, height, top: y, right: x + width, bottom: y + height, left: x, x, y };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element),
    width = element.offsetWidth,
    height = element.offsetHeight;
  return (
    Math.abs(clientRect.width - width) <= 1 && (width = clientRect.width),
    Math.abs(clientRect.height - height) <= 1 && (height = clientRect.height),
    { x: element.offsetLeft, y: element.offsetTop, width, height }
  );
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) return !0;
  if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) return !0;
      next = next.parentNode || next.host;
    } while (next);
  }
  return !1;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  return getNodeName(element) === "html"
    ? element
    : element.assignedSlot ||
        element.parentNode ||
        (isShadowRoot(element) ? element.host : null) ||
        getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  return !isHTMLElement(element) || getComputedStyle(element).position === "fixed" ? null : element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString()),
    isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") return null;
  }
  var currentNode = getParentNode(element);
  for (
    isShadowRoot(currentNode) && (currentNode = currentNode.host);
    isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0;

  ) {
    var css = getComputedStyle(currentNode);
    if (
      css.transform !== "none" ||
      css.perspective !== "none" ||
      css.contain === "paint" ||
      ["transform", "perspective"].indexOf(css.willChange) !== -1 ||
      (isFirefox && css.willChange === "filter") ||
      (isFirefox && css.filter && css.filter !== "none")
    )
      return currentNode;
    currentNode = currentNode.parentNode;
  }
  return null;
}
function getOffsetParent(element) {
  for (
    var window2 = getWindow(element), offsetParent = getTrueOffsetParent(element);
    offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static";

  )
    offsetParent = getTrueOffsetParent(offsetParent);
  return offsetParent &&
    (getNodeName(offsetParent) === "html" ||
      (getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static"))
    ? window2
    : offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    return (hashMap[key] = value), hashMap;
  }, {});
}
var toPaddingObject = function (padding, state) {
  return (
    (padding =
      typeof padding == "function" ? padding(Object.assign({}, state.rects, { placement: state.placement })) : padding),
    mergePaddingObject(typeof padding != "number" ? padding : expandToHashMap(padding, basePlacements))
  );
};
function arrow(_ref) {
  var _state$modifiersData$,
    state = _ref.state,
    name = _ref.name,
    options = _ref.options,
    arrowElement = state.elements.arrow,
    popperOffsets2 = state.modifiersData.popperOffsets,
    basePlacement = getBasePlacement(state.placement),
    axis = getMainAxisFromPlacement(basePlacement),
    isVertical = [left, right].indexOf(basePlacement) >= 0,
    len = isVertical ? "height" : "width";
  if (!(!arrowElement || !popperOffsets2)) {
    var paddingObject = toPaddingObject(options.padding, state),
      arrowRect = getLayoutRect(arrowElement),
      minProp = axis === "y" ? top : left,
      maxProp = axis === "y" ? bottom : right,
      endDiff =
        state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len],
      startDiff = popperOffsets2[axis] - state.rects.reference[axis],
      arrowOffsetParent = getOffsetParent(arrowElement),
      clientSize = arrowOffsetParent
        ? axis === "y"
          ? arrowOffsetParent.clientHeight || 0
          : arrowOffsetParent.clientWidth || 0
        : 0,
      centerToReference = endDiff / 2 - startDiff / 2,
      min2 = paddingObject[minProp],
      max2 = clientSize - arrowRect[len] - paddingObject[maxProp],
      center = clientSize / 2 - arrowRect[len] / 2 + centerToReference,
      offset2 = within(min2, center, max2),
      axisProp = axis;
    state.modifiersData[name] =
      ((_state$modifiersData$ = {}),
      (_state$modifiersData$[axisProp] = offset2),
      (_state$modifiersData$.centerOffset = offset2 - center),
      _state$modifiersData$);
  }
}
function effect2(_ref2) {
  var state = _ref2.state,
    options = _ref2.options,
    _options$element = options.element,
    arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (
    arrowElement != null &&
    !(
      typeof arrowElement == "string" &&
      ((arrowElement = state.elements.popper.querySelector(arrowElement)), !arrowElement)
    )
  ) {
    if (
      (isHTMLElement(arrowElement) ||
        console.error(
          [
            'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
            "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
            "the arrow.",
          ].join(" ")
        ),
      !contains(state.elements.popper, arrowElement))
    ) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    state.elements.arrow = arrowElement;
  }
}
var arrow_default = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
    y = _ref.y,
    dpr = win.devicePixelRatio || 1;
  return { x: round(x * dpr) / dpr || 0, y: round(y * dpr) / dpr || 0 };
}
function mapToStyles(_ref2) {
  var _Object$assign2,
    popper2 = _ref2.popper,
    popperRect = _ref2.popperRect,
    placement = _ref2.placement,
    variation = _ref2.variation,
    offsets = _ref2.offsets,
    position = _ref2.position,
    gpuAcceleration = _ref2.gpuAcceleration,
    adaptive = _ref2.adaptive,
    roundOffsets = _ref2.roundOffsets,
    isFixed = _ref2.isFixed,
    _offsets$x = offsets.x,
    x = _offsets$x === void 0 ? 0 : _offsets$x,
    _offsets$y = offsets.y,
    y = _offsets$y === void 0 ? 0 : _offsets$y,
    _ref3 = typeof roundOffsets == "function" ? roundOffsets({ x, y }) : { x, y };
  (x = _ref3.x), (y = _ref3.y);
  var hasX = offsets.hasOwnProperty("x"),
    hasY = offsets.hasOwnProperty("y"),
    sideX = left,
    sideY = top,
    win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2),
      heightProp = "clientHeight",
      widthProp = "clientWidth";
    if (
      (offsetParent === getWindow(popper2) &&
        ((offsetParent = getDocumentElement(popper2)),
        getComputedStyle(offsetParent).position !== "static" &&
          position === "absolute" &&
          ((heightProp = "scrollHeight"), (widthProp = "scrollWidth"))),
      (offsetParent = offsetParent),
      placement === top || ((placement === left || placement === right) && variation === end))
    ) {
      sideY = bottom;
      var offsetY =
        isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      (y -= offsetY - popperRect.height), (y *= gpuAcceleration ? 1 : -1);
    }
    if (placement === left || ((placement === top || placement === bottom) && variation === end)) {
      sideX = right;
      var offsetX =
        isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      (x -= offsetX - popperRect.width), (x *= gpuAcceleration ? 1 : -1);
    }
  }
  var commonStyles = Object.assign({ position }, adaptive && unsetSides),
    _ref4 = roundOffsets === !0 ? roundOffsetsByDPR({ x, y }, getWindow(popper2)) : { x, y };
  if (((x = _ref4.x), (y = _ref4.y), gpuAcceleration)) {
    var _Object$assign;
    return Object.assign(
      {},
      commonStyles,
      ((_Object$assign = {}),
      (_Object$assign[sideY] = hasY ? "0" : ""),
      (_Object$assign[sideX] = hasX ? "0" : ""),
      (_Object$assign.transform =
        (win.devicePixelRatio || 1) <= 1
          ? "translate(" + x + "px, " + y + "px)"
          : "translate3d(" + x + "px, " + y + "px, 0)"),
      _Object$assign)
    );
  }
  return Object.assign(
    {},
    commonStyles,
    ((_Object$assign2 = {}),
    (_Object$assign2[sideY] = hasY ? y + "px" : ""),
    (_Object$assign2[sideX] = hasX ? x + "px" : ""),
    (_Object$assign2.transform = ""),
    _Object$assign2)
  );
}
function computeStyles(_ref5) {
  var state = _ref5.state,
    options = _ref5.options,
    _options$gpuAccelerat = options.gpuAcceleration,
    gpuAcceleration = _options$gpuAccelerat === void 0 ? !0 : _options$gpuAccelerat,
    _options$adaptive = options.adaptive,
    adaptive = _options$adaptive === void 0 ? !0 : _options$adaptive,
    _options$roundOffsets = options.roundOffsets,
    roundOffsets = _options$roundOffsets === void 0 ? !0 : _options$roundOffsets,
    transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
  adaptive &&
    ["transform", "top", "right", "bottom", "left"].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    }) &&
    console.warn(
      [
        "Popper: Detected CSS transitions on at least one of the following",
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        `

`,
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        "for smooth transitions, or remove these properties from the CSS",
        "transition declaration on the popper element if only transitioning",
        "opacity or background-color for example.",
        `

`,
        "We recommend using the popper element as a wrapper around an inner",
        "element that can have any CSS property transitioned for animations.",
      ].join(" ")
    );
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed",
  };
  state.modifiersData.popperOffsets != null &&
    (state.styles.popper = Object.assign(
      {},
      state.styles.popper,
      mapToStyles(
        Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive,
          roundOffsets,
        })
      )
    )),
    state.modifiersData.arrow != null &&
      (state.styles.arrow = Object.assign(
        {},
        state.styles.arrow,
        mapToStyles(
          Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets,
          })
        )
      )),
    (state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement,
    }));
}
var computeStyles_default = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: computeStyles, data: {} },
  passive = { passive: !0 };
function effect3(_ref) {
  var state = _ref.state,
    instance = _ref.instance,
    options = _ref.options,
    _options$scroll = options.scroll,
    scroll = _options$scroll === void 0 ? !0 : _options$scroll,
    _options$resize = options.resize,
    resize = _options$resize === void 0 ? !0 : _options$resize,
    window2 = getWindow(state.elements.popper),
    scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  return (
    scroll &&
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      }),
    resize && window2.addEventListener("resize", instance.update, passive),
    function () {
      scroll &&
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        }),
        resize && window2.removeEventListener("resize", instance.update, passive);
    }
  );
}
var eventListeners_default = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: effect3,
    data: {},
  },
  hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
var hash2 = { start: "end", end: "start" };
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash2[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node),
    scrollLeft = win.pageXOffset,
    scrollTop = win.pageYOffset;
  return { scrollLeft, scrollTop };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element),
    html = getDocumentElement(element),
    visualViewport = win.visualViewport,
    width = html.clientWidth,
    height = html.clientHeight,
    x = 0,
    y = 0;
  if (visualViewport) {
    (width = visualViewport.width), (height = visualViewport.height);
    var layoutViewport = isLayoutViewport();
    (layoutViewport || (!layoutViewport && strategy === "fixed")) &&
      ((x = visualViewport.offsetLeft), (y = visualViewport.offsetTop));
  }
  return { width, height, x: x + getWindowScrollBarX(element), y };
}
function getDocumentRect(element) {
  var _element$ownerDocumen,
    html = getDocumentElement(element),
    winScroll = getWindowScroll(element),
    body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body,
    width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0),
    height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0),
    x = -winScroll.scrollLeft + getWindowScrollBarX(element),
    y = -winScroll.scrollTop;
  return (
    getComputedStyle(body || html).direction === "rtl" &&
      (x += max(html.clientWidth, body ? body.clientWidth : 0) - width),
    { width, height, x, y }
  );
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element),
    overflow = _getComputedStyle.overflow,
    overflowX = _getComputedStyle.overflowX,
    overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  return ["html", "body", "#document"].indexOf(getNodeName(node)) >= 0
    ? node.ownerDocument.body
    : isHTMLElement(node) && isScrollParent(node)
    ? node
    : getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  list === void 0 && (list = []);
  var scrollParent = getScrollParent(element),
    isBody =
      scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body),
    win = getWindow(scrollParent),
    target = isBody
      ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : [])
      : scrollParent,
    updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, !1, strategy === "fixed");
  return (
    (rect.top = rect.top + element.clientTop),
    (rect.left = rect.left + element.clientLeft),
    (rect.bottom = rect.top + element.clientHeight),
    (rect.right = rect.left + element.clientWidth),
    (rect.width = element.clientWidth),
    (rect.height = element.clientHeight),
    (rect.x = rect.left),
    (rect.y = rect.top),
    rect
  );
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport
    ? rectToClientRect(getViewportRect(element, strategy))
    : isElement(clippingParent)
    ? getInnerBoundingClientRect(clippingParent, strategy)
    : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element)),
    canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0,
    clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  return isElement(clipperElement)
    ? clippingParents2.filter(function (clippingParent) {
        return (
          isElement(clippingParent) &&
          contains(clippingParent, clipperElement) &&
          getNodeName(clippingParent) !== "body"
        );
      })
    : [];
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary),
    clippingParents2 = [].concat(mainClippingParents, [rootBoundary]),
    firstClippingParent = clippingParents2[0],
    clippingRect = clippingParents2.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      return (
        (accRect.top = max(rect.top, accRect.top)),
        (accRect.right = min(rect.right, accRect.right)),
        (accRect.bottom = min(rect.bottom, accRect.bottom)),
        (accRect.left = max(rect.left, accRect.left)),
        accRect
      );
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  return (
    (clippingRect.width = clippingRect.right - clippingRect.left),
    (clippingRect.height = clippingRect.bottom - clippingRect.top),
    (clippingRect.x = clippingRect.left),
    (clippingRect.y = clippingRect.top),
    clippingRect
  );
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference,
    element = _ref.element,
    placement = _ref.placement,
    basePlacement = placement ? getBasePlacement(placement) : null,
    variation = placement ? getVariation(placement) : null,
    commonX = reference2.x + reference2.width / 2 - element.width / 2,
    commonY = reference2.y + reference2.height / 2 - element.height / 2,
    offsets;
  switch (basePlacement) {
    case top:
      offsets = { x: commonX, y: reference2.y - element.height };
      break;
    case bottom:
      offsets = { x: commonX, y: reference2.y + reference2.height };
      break;
    case right:
      offsets = { x: reference2.x + reference2.width, y: commonY };
      break;
    case left:
      offsets = { x: reference2.x - element.width, y: commonY };
      break;
    default:
      offsets = { x: reference2.x, y: reference2.y };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  options === void 0 && (options = {});
  var _options = options,
    _options$placement = _options.placement,
    placement = _options$placement === void 0 ? state.placement : _options$placement,
    _options$strategy = _options.strategy,
    strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
    _options$boundary = _options.boundary,
    boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
    _options$rootBoundary = _options.rootBoundary,
    rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
    _options$elementConte = _options.elementContext,
    elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
    _options$altBoundary = _options.altBoundary,
    altBoundary = _options$altBoundary === void 0 ? !1 : _options$altBoundary,
    _options$padding = _options.padding,
    padding = _options$padding === void 0 ? 0 : _options$padding,
    paddingObject = mergePaddingObject(typeof padding != "number" ? padding : expandToHashMap(padding, basePlacements)),
    altContext = elementContext === popper ? reference : popper,
    popperRect = state.rects.popper,
    element = state.elements[altBoundary ? altContext : elementContext],
    clippingClientRect = getClippingRect(
      isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper),
      boundary,
      rootBoundary,
      strategy
    ),
    referenceClientRect = getBoundingClientRect(state.elements.reference),
    popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement,
    }),
    popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2)),
    elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect,
    overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right,
    },
    offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1,
        axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  options === void 0 && (options = {});
  var _options = options,
    placement = _options.placement,
    boundary = _options.boundary,
    rootBoundary = _options.rootBoundary,
    padding = _options.padding,
    flipVariations = _options.flipVariations,
    _options$allowedAutoP = _options.allowedAutoPlacements,
    allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP,
    variation = getVariation(placement),
    placements2 = variation
      ? flipVariations
        ? variationPlacements
        : variationPlacements.filter(function (placement2) {
            return getVariation(placement2) === variation;
          })
      : basePlacements,
    allowedPlacements = placements2.filter(function (placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
  allowedPlacements.length === 0 &&
    ((allowedPlacements = placements2),
    console.error(
      [
        "Popper: The `allowedAutoPlacements` option did not allow any",
        "placements. Ensure the `placement` option matches the variation",
        "of the allowed placements.",
        'For example, "auto" cannot be used to allow "bottom-start".',
        'Use "auto-start" instead.',
      ].join(" ")
    ));
  var overflows = allowedPlacements.reduce(function (acc, placement2) {
    return (
      (acc[placement2] = detectOverflow(state, { placement: placement2, boundary, rootBoundary, padding })[
        getBasePlacement(placement2)
      ]),
      acc
    );
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) return [];
  var oppositePlacement = getOppositePlacement(placement);
  return [
    getOppositeVariationPlacement(placement),
    oppositePlacement,
    getOppositeVariationPlacement(oppositePlacement),
  ];
}
function flip(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name;
  if (!state.modifiersData[name]._skip) {
    for (
      var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? !0 : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? !0 : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? !0 : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements,
        preferredPlacement = state.options.placement,
        basePlacement = getBasePlacement(preferredPlacement),
        isBasePlacement = basePlacement === preferredPlacement,
        fallbackPlacements =
          specifiedFallbackPlacements ||
          (isBasePlacement || !flipVariations
            ? [getOppositePlacement(preferredPlacement)]
            : getExpandedFallbackPlacements(preferredPlacement)),
        placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement2) {
          return acc.concat(
            getBasePlacement(placement2) === auto
              ? computeAutoPlacement(state, {
                  placement: placement2,
                  boundary,
                  rootBoundary,
                  padding,
                  flipVariations,
                  allowedAutoPlacements,
                })
              : placement2
          );
        }, []),
        referenceRect = state.rects.reference,
        popperRect = state.rects.popper,
        checksMap = new Map(),
        makeFallbackChecks = !0,
        firstFittingPlacement = placements2[0],
        i = 0;
      i < placements2.length;
      i++
    ) {
      var placement = placements2[i],
        _basePlacement = getBasePlacement(placement),
        isStartVariation = getVariation(placement) === start,
        isVertical = [top, bottom].indexOf(_basePlacement) >= 0,
        len = isVertical ? "width" : "height",
        overflow = detectOverflow(state, { placement, boundary, rootBoundary, altBoundary, padding }),
        mainVariationSide = isVertical ? (isStartVariation ? right : left) : isStartVariation ? bottom : top;
      referenceRect[len] > popperRect[len] && (mainVariationSide = getOppositePlacement(mainVariationSide));
      var altVariationSide = getOppositePlacement(mainVariationSide),
        checks = [];
      if (
        (checkMainAxis && checks.push(overflow[_basePlacement] <= 0),
        checkAltAxis && checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0),
        checks.every(function (check) {
          return check;
        }))
      ) {
        (firstFittingPlacement = placement), (makeFallbackChecks = !1);
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks)
      for (
        var numberOfChecks = flipVariations ? 3 : 1,
          _loop = function (_i2) {
            var fittingPlacement = placements2.find(function (placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2)
                return checks2.slice(0, _i2).every(function (check) {
                  return check;
                });
            });
            if (fittingPlacement) return (firstFittingPlacement = fittingPlacement), "break";
          },
          _i = numberOfChecks;
        _i > 0;
        _i--
      ) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    state.placement !== firstFittingPlacement &&
      ((state.modifiersData[name]._skip = !0), (state.placement = firstFittingPlacement), (state.reset = !0));
  }
}
var flip_default = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  return (
    preventedOffsets === void 0 && (preventedOffsets = { x: 0, y: 0 }),
    {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x,
    }
  );
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state,
    name = _ref.name,
    referenceRect = state.rects.reference,
    popperRect = state.rects.popper,
    preventedOffsets = state.modifiersData.preventOverflow,
    referenceOverflow = detectOverflow(state, { elementContext: "reference" }),
    popperAltOverflow = detectOverflow(state, { altBoundary: !0 }),
    referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect),
    popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets),
    isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets),
    hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  (state.modifiersData[name] = { referenceClippingOffsets, popperEscapeOffsets, isReferenceHidden, hasPopperEscaped }),
    (state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped,
    }));
}
var hide_default = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: hide };
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement),
    invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1,
    _ref = typeof offset2 == "function" ? offset2(Object.assign({}, rects, { placement })) : offset2,
    skidding = _ref[0],
    distance = _ref[1];
  return (
    (skidding = skidding || 0),
    (distance = (distance || 0) * invertDistance),
    [left, right].indexOf(basePlacement) >= 0 ? { x: distance, y: skidding } : { x: skidding, y: distance }
  );
}
function offset(_ref2) {
  var state = _ref2.state,
    options = _ref2.options,
    name = _ref2.name,
    _options$offset = options.offset,
    offset2 = _options$offset === void 0 ? [0, 0] : _options$offset,
    data = placements.reduce(function (acc, placement) {
      return (acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2)), acc;
    }, {}),
    _data$state$placement = data[state.placement],
    x = _data$state$placement.x,
    y = _data$state$placement.y;
  state.modifiersData.popperOffsets != null &&
    ((state.modifiersData.popperOffsets.x += x), (state.modifiersData.popperOffsets.y += y)),
    (state.modifiersData[name] = data);
}
var offset_default = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: offset };
function popperOffsets(_ref) {
  var state = _ref.state,
    name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement,
  });
}
var popperOffsets_default = { name: "popperOffsets", enabled: !0, phase: "read", fn: popperOffsets, data: {} };
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name,
    _options$mainAxis = options.mainAxis,
    checkMainAxis = _options$mainAxis === void 0 ? !0 : _options$mainAxis,
    _options$altAxis = options.altAxis,
    checkAltAxis = _options$altAxis === void 0 ? !1 : _options$altAxis,
    boundary = options.boundary,
    rootBoundary = options.rootBoundary,
    altBoundary = options.altBoundary,
    padding = options.padding,
    _options$tether = options.tether,
    tether = _options$tether === void 0 ? !0 : _options$tether,
    _options$tetherOffset = options.tetherOffset,
    tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset,
    overflow = detectOverflow(state, { boundary, rootBoundary, padding, altBoundary }),
    basePlacement = getBasePlacement(state.placement),
    variation = getVariation(state.placement),
    isBasePlacement = !variation,
    mainAxis = getMainAxisFromPlacement(basePlacement),
    altAxis = getAltAxis(mainAxis),
    popperOffsets2 = state.modifiersData.popperOffsets,
    referenceRect = state.rects.reference,
    popperRect = state.rects.popper,
    tetherOffsetValue =
      typeof tetherOffset == "function"
        ? tetherOffset(Object.assign({}, state.rects, { placement: state.placement }))
        : tetherOffset,
    normalizedTetherOffsetValue =
      typeof tetherOffsetValue == "number"
        ? { mainAxis: tetherOffsetValue, altAxis: tetherOffsetValue }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, tetherOffsetValue),
    offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null,
    data = { x: 0, y: 0 };
  if (popperOffsets2) {
    if (checkMainAxis) {
      var _offsetModifierState$,
        mainSide = mainAxis === "y" ? top : left,
        altSide = mainAxis === "y" ? bottom : right,
        len = mainAxis === "y" ? "height" : "width",
        offset2 = popperOffsets2[mainAxis],
        min2 = offset2 + overflow[mainSide],
        max2 = offset2 - overflow[altSide],
        additive = tether ? -popperRect[len] / 2 : 0,
        minLen = variation === start ? referenceRect[len] : popperRect[len],
        maxLen = variation === start ? -popperRect[len] : -referenceRect[len],
        arrowElement = state.elements.arrow,
        arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : { width: 0, height: 0 },
        arrowPaddingObject = state.modifiersData["arrow#persistent"]
          ? state.modifiersData["arrow#persistent"].padding
          : getFreshSideObject(),
        arrowPaddingMin = arrowPaddingObject[mainSide],
        arrowPaddingMax = arrowPaddingObject[altSide],
        arrowLen = within(0, referenceRect[len], arrowRect[len]),
        minOffset = isBasePlacement
          ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis
          : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis,
        maxOffset = isBasePlacement
          ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis
          : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis,
        arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow),
        clientOffset = arrowOffsetParent
          ? mainAxis === "y"
            ? arrowOffsetParent.clientTop || 0
            : arrowOffsetParent.clientLeft || 0
          : 0,
        offsetModifierValue =
          (_offsetModifierState$ = offsetModifierState?.[mainAxis]) != null ? _offsetModifierState$ : 0,
        tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset,
        tetherMax = offset2 + maxOffset - offsetModifierValue,
        preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      (popperOffsets2[mainAxis] = preventedOffset), (data[mainAxis] = preventedOffset - offset2);
    }
    if (checkAltAxis) {
      var _offsetModifierState$2,
        _mainSide = mainAxis === "x" ? top : left,
        _altSide = mainAxis === "x" ? bottom : right,
        _offset = popperOffsets2[altAxis],
        _len = altAxis === "y" ? "height" : "width",
        _min = _offset + overflow[_mainSide],
        _max = _offset - overflow[_altSide],
        isOriginSide = [top, left].indexOf(basePlacement) !== -1,
        _offsetModifierValue =
          (_offsetModifierState$2 = offsetModifierState?.[altAxis]) != null ? _offsetModifierState$2 : 0,
        _tetherMin = isOriginSide
          ? _min
          : _offset -
            referenceRect[_len] -
            popperRect[_len] -
            _offsetModifierValue +
            normalizedTetherOffsetValue.altAxis,
        _tetherMax = isOriginSide
          ? _offset +
            referenceRect[_len] +
            popperRect[_len] -
            _offsetModifierValue -
            normalizedTetherOffsetValue.altAxis
          : _max,
        _preventedOffset =
          tether && isOriginSide
            ? withinMaxClamp(_tetherMin, _offset, _tetherMax)
            : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      (popperOffsets2[altAxis] = _preventedOffset), (data[altAxis] = _preventedOffset - _offset);
    }
    state.modifiersData[name] = data;
  }
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"],
};
function getHTMLElementScroll(element) {
  return { scrollLeft: element.scrollLeft, scrollTop: element.scrollTop };
}
function getNodeScroll(node) {
  return node === getWindow(node) || !isHTMLElement(node) ? getWindowScroll(node) : getHTMLElementScroll(node);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect(),
    scaleX = round(rect.width) / element.offsetWidth || 1,
    scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  isFixed === void 0 && (isFixed = !1);
  var isOffsetParentAnElement = isHTMLElement(offsetParent),
    offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent),
    documentElement = getDocumentElement(offsetParent),
    rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed),
    scroll = { scrollLeft: 0, scrollTop: 0 },
    offsets = { x: 0, y: 0 };
  return (
    (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) &&
      ((getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) &&
        (scroll = getNodeScroll(offsetParent)),
      isHTMLElement(offsetParent)
        ? ((offsets = getBoundingClientRect(offsetParent, !0)),
          (offsets.x += offsetParent.clientLeft),
          (offsets.y += offsetParent.clientTop))
        : documentElement && (offsets.x = getWindowScrollBarX(documentElement))),
    {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height,
    }
  );
}
function order(modifiers) {
  var map = new Map(),
    visited = new Set(),
    result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        depModifier && sort(depModifier);
      }
    }),
      result.push(modifier);
  }
  return (
    modifiers.forEach(function (modifier) {
      visited.has(modifier.name) || sort(modifier);
    }),
    result
  );
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(
      orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      })
    );
  }, []);
}
function debounce(fn2) {
  var pending;
  return function () {
    return (
      pending ||
        (pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            (pending = void 0), resolve(fn2());
          });
        })),
      pending
    );
  };
}
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    args[_key - 1] = arguments[_key];
  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
  MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
  VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    []
      .concat(Object.keys(modifier), VALID_PROPERTIES)
      .filter(function (value, index, self) {
        return self.indexOf(value) === index;
      })
      .forEach(function (key) {
        switch (key) {
          case "name":
            typeof modifier.name != "string" &&
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  String(modifier.name),
                  '"name"',
                  '"string"',
                  '"' + String(modifier.name) + '"'
                )
              );
            break;
          case "enabled":
            typeof modifier.enabled != "boolean" &&
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"enabled"',
                  '"boolean"',
                  '"' + String(modifier.enabled) + '"'
                )
              );
            break;
          case "phase":
            modifierPhases.indexOf(modifier.phase) < 0 &&
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"phase"',
                  "either " + modifierPhases.join(", "),
                  '"' + String(modifier.phase) + '"'
                )
              );
            break;
          case "fn":
            typeof modifier.fn != "function" &&
              console.error(
                format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"')
              );
            break;
          case "effect":
            modifier.effect != null &&
              typeof modifier.effect != "function" &&
              console.error(
                format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"')
              );
            break;
          case "requires":
            modifier.requires != null &&
              !Array.isArray(modifier.requires) &&
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"requires"',
                  '"array"',
                  '"' + String(modifier.requires) + '"'
                )
              );
            break;
          case "requiresIfExists":
            Array.isArray(modifier.requiresIfExists) ||
              console.error(
                format(
                  INVALID_MODIFIER_ERROR,
                  modifier.name,
                  '"requiresIfExists"',
                  '"array"',
                  '"' + String(modifier.requiresIfExists) + '"'
                )
              );
            break;
          case "options":
          case "data":
            break;
          default:
            console.error(
              'PopperJS: an invalid property has been provided to the "' +
                modifier.name +
                '" modifier, valid properties are ' +
                VALID_PROPERTIES.map(function (s) {
                  return '"' + s + '"';
                }).join(", ") +
                '; but "' +
                key +
                '" was provided.'
            );
        }
        modifier.requires &&
          modifier.requires.forEach(function (requirement) {
            modifiers.find(function (mod) {
              return mod.name === requirement;
            }) == null &&
              console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
          });
      });
  });
}
function uniqueBy(arr, fn2) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) return identifiers.add(identifier), !0;
  });
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged2, current) {
    var existing = merged2[current.name];
    return (
      (merged2[current.name] = existing
        ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data),
          })
        : current),
      merged2
    );
  }, {});
  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
var INVALID_ELEMENT_ERROR =
    "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
  INFINITE_LOOP_ERROR =
    "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
  DEFAULT_OPTIONS = { placement: "bottom", modifiers: [], strategy: "absolute" };
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect == "function");
  });
}
function popperGenerator(generatorOptions) {
  generatorOptions === void 0 && (generatorOptions = {});
  var _generatorOptions = generatorOptions,
    _generatorOptions$def = _generatorOptions.defaultModifiers,
    defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
    _generatorOptions$def2 = _generatorOptions.defaultOptions,
    defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function (reference2, popper2, options) {
    options === void 0 && (options = defaultOptions);
    var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: { reference: reference2, popper: popper2 },
        attributes: {},
        styles: {},
      },
      effectCleanupFns = [],
      isDestroyed = !1,
      instance = {
        state,
        setOptions: function (setOptionsAction) {
          var options2 = typeof setOptionsAction == "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects(),
            (state.options = Object.assign({}, defaultOptions, state.options, options2)),
            (state.scrollParents = {
              reference: isElement(reference2)
                ? listScrollParents(reference2)
                : reference2.contextElement
                ? listScrollParents(reference2.contextElement)
                : [],
              popper: listScrollParents(popper2),
            });
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          });
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          if ((validateModifiers(modifiers), getBasePlacement(state.options.placement) === auto)) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            flipModifier ||
              console.error(
                ['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" ")
              );
          }
          var _getComputedStyle = getComputedStyle(popper2),
            marginTop = _getComputedStyle.marginTop,
            marginRight = _getComputedStyle.marginRight,
            marginBottom = _getComputedStyle.marginBottom,
            marginLeft = _getComputedStyle.marginLeft;
          return (
            [marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
              return parseFloat(margin);
            }) &&
              console.warn(
                [
                  'Popper: CSS "margin" styles cannot be used to apply padding',
                  "between the popper and its reference element or boundary.",
                  "To replicate margin, use the `offset` modifier, as well as",
                  "the `padding` option in the `preventOverflow` and `flip`",
                  "modifiers.",
                ].join(" ")
              ),
            runModifierEffects(),
            instance.update()
          );
        },
        forceUpdate: function () {
          if (!isDestroyed) {
            var _state$elements = state.elements,
              reference3 = _state$elements.reference,
              popper3 = _state$elements.popper;
            if (!areValidElements(reference3, popper3)) {
              console.error(INVALID_ELEMENT_ERROR);
              return;
            }
            (state.rects = {
              reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
              popper: getLayoutRect(popper3),
            }),
              (state.reset = !1),
              (state.placement = state.options.placement),
              state.orderedModifiers.forEach(function (modifier) {
                return (state.modifiersData[modifier.name] = Object.assign({}, modifier.data));
              });
            for (var __debug_loops__ = 0, index = 0; index < state.orderedModifiers.length; index++) {
              if (((__debug_loops__ += 1), __debug_loops__ > 100)) {
                console.error(INFINITE_LOOP_ERROR);
                break;
              }
              if (state.reset === !0) {
                (state.reset = !1), (index = -1);
                continue;
              }
              var _state$orderedModifie = state.orderedModifiers[index],
                fn2 = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;
              typeof fn2 == "function" && (state = fn2({ state, options: _options, name, instance }) || state);
            }
          }
        },
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate(), resolve(state);
          });
        }),
        destroy: function () {
          cleanupModifierEffects(), (isDestroyed = !0);
        },
      };
    if (!areValidElements(reference2, popper2)) return console.error(INVALID_ELEMENT_ERROR), instance;
    instance.setOptions(options).then(function (state2) {
      !isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state2);
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
          _ref3$options = _ref3.options,
          options2 = _ref3$options === void 0 ? {} : _ref3$options,
          effect4 = _ref3.effect;
        if (typeof effect4 == "function") {
          var cleanupFn = effect4({ state, name, instance, options: options2 }),
            noopFn = function () {};
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn2) {
        return fn2();
      }),
        (effectCleanupFns = []);
    }
    return instance;
  };
}
var defaultModifiers = [
    eventListeners_default,
    popperOffsets_default,
    computeStyles_default,
    applyStyles_default,
    offset_default,
    flip_default,
    preventOverflow_default,
    arrow_default,
    hide_default,
  ],
  createPopper = popperGenerator({ defaultModifiers }),
  import_react_fast_compare = __toESM2(require_react_fast_compare()),
  EMPTY_MODIFIERS = [],
  usePopper = function (referenceElement, popperElement, options) {
    options === void 0 && (options = {});
    var prevOptions = React3.useRef(null),
      optionsWithDefaults = {
        onFirstUpdate: options.onFirstUpdate,
        placement: options.placement || "bottom",
        strategy: options.strategy || "absolute",
        modifiers: options.modifiers || EMPTY_MODIFIERS,
      },
      _React$useState = React3.useState({
        styles: {
          popper: { position: optionsWithDefaults.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      state = _React$useState[0],
      setState = _React$useState[1],
      updateStateModifier = React3.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (_ref) {
            var state2 = _ref.state,
              elements = Object.keys(state2.elements);
            ReactDOM.flushSync(function () {
              setState({
                styles: fromEntries(
                  elements.map(function (element) {
                    return [element, state2.styles[element] || {}];
                  })
                ),
                attributes: fromEntries(
                  elements.map(function (element) {
                    return [element, state2.attributes[element]];
                  })
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      popperOptions = React3.useMemo(
        function () {
          var newOptions = {
            onFirstUpdate: optionsWithDefaults.onFirstUpdate,
            placement: optionsWithDefaults.placement,
            strategy: optionsWithDefaults.strategy,
            modifiers: [].concat(optionsWithDefaults.modifiers, [
              updateStateModifier,
              { name: "applyStyles", enabled: !1 },
            ]),
          };
          return (0, import_react_fast_compare.default)(prevOptions.current, newOptions)
            ? prevOptions.current || newOptions
            : ((prevOptions.current = newOptions), newOptions);
        },
        [
          optionsWithDefaults.onFirstUpdate,
          optionsWithDefaults.placement,
          optionsWithDefaults.strategy,
          optionsWithDefaults.modifiers,
          updateStateModifier,
        ]
      ),
      popperInstanceRef = React3.useRef();
    return (
      useIsomorphicLayoutEffect(
        function () {
          popperInstanceRef.current && popperInstanceRef.current.setOptions(popperOptions);
        },
        [popperOptions]
      ),
      useIsomorphicLayoutEffect(
        function () {
          if (!(referenceElement == null || popperElement == null)) {
            var createPopper2 = options.createPopper || createPopper,
              popperInstance = createPopper2(referenceElement, popperElement, popperOptions);
            return (
              (popperInstanceRef.current = popperInstance),
              function () {
                popperInstance.destroy(), (popperInstanceRef.current = null);
              }
            );
          }
        },
        [referenceElement, popperElement, options.createPopper]
      ),
      {
        state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
        styles: state.styles,
        attributes: state.attributes,
        update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
        forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null,
      }
    );
  };
function useGetLatest(val) {
  var ref = React3.useRef(val);
  return (
    (ref.current = val),
    React3.useCallback(function () {
      return ref.current;
    }, [])
  );
}
var noop = function () {};
function useControlledState(_ref) {
  var initial = _ref.initial,
    value = _ref.value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? noop : _ref$onChange;
  if (initial === void 0 && value === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var _React$useState = React3.useState(initial),
    state = _React$useState[0],
    setState = _React$useState[1],
    getLatest = useGetLatest(state),
    set = React3.useCallback(
      function (updater) {
        var state2 = getLatest(),
          updatedState = typeof updater == "function" ? updater(state2) : updater;
        typeof updatedState.persist == "function" && updatedState.persist(),
          setState(updatedState),
          typeof onChange == "function" && onChange(updatedState);
      },
      [getLatest, onChange]
    ),
    isControlled = value !== void 0;
  return [isControlled ? value : state, isControlled ? onChange : set];
}
function generateBoundingClientRect(x, y) {
  return (
    x === void 0 && (x = 0),
    y === void 0 && (y = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: y,
        right: x,
        bottom: y,
        left: x,
        x: 0,
        y: 0,
        toJSON: function () {
          return null;
        },
      };
    }
  );
}
var _excluded = ["styles", "attributes"],
  virtualElement = { getBoundingClientRect: generateBoundingClientRect() },
  defaultConfig = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 },
    offset: [0, 6],
    trigger: "hover",
  };
function usePopperTooltip(config, popperOptions) {
  var _popperProps$state, _popperProps$state$mo, _popperProps$state$mo2;
  config === void 0 && (config = {}), popperOptions === void 0 && (popperOptions = {});
  var finalConfig = Object.keys(defaultConfig).reduce(function (config2, key) {
      var _extends2;
      return _extends(
        {},
        config2,
        ((_extends2 = {}), (_extends2[key] = config2[key] !== void 0 ? config2[key] : defaultConfig[key]), _extends2)
      );
    }, config),
    defaultModifiers2 = React3.useMemo(
      function () {
        return [{ name: "offset", options: { offset: finalConfig.offset } }];
      },
      Array.isArray(finalConfig.offset) ? finalConfig.offset : []
    ),
    finalPopperOptions = _extends({}, popperOptions, {
      placement: popperOptions.placement || finalConfig.placement,
      modifiers: popperOptions.modifiers || defaultModifiers2,
    }),
    _React$useState = React3.useState(null),
    triggerRef = _React$useState[0],
    setTriggerRef = _React$useState[1],
    _React$useState2 = React3.useState(null),
    tooltipRef = _React$useState2[0],
    setTooltipRef = _React$useState2[1],
    _useControlledState = useControlledState({
      initial: finalConfig.defaultVisible,
      value: finalConfig.visible,
      onChange: finalConfig.onVisibleChange,
    }),
    visible = _useControlledState[0],
    setVisible = _useControlledState[1],
    timer = React3.useRef();
  React3.useEffect(function () {
    return function () {
      return clearTimeout(timer.current);
    };
  }, []);
  var _usePopper = usePopper(finalConfig.followCursor ? virtualElement : triggerRef, tooltipRef, finalPopperOptions),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes,
    popperProps = _objectWithoutPropertiesLoose(_usePopper, _excluded),
    update = popperProps.update,
    getLatest = useGetLatest({ visible, triggerRef, tooltipRef, finalConfig }),
    isTriggeredBy = React3.useCallback(
      function (trigger) {
        return Array.isArray(finalConfig.trigger)
          ? finalConfig.trigger.includes(trigger)
          : finalConfig.trigger === trigger;
      },
      Array.isArray(finalConfig.trigger) ? finalConfig.trigger : [finalConfig.trigger]
    ),
    hideTooltip = React3.useCallback(
      function () {
        clearTimeout(timer.current),
          (timer.current = window.setTimeout(function () {
            return setVisible(!1);
          }, finalConfig.delayHide));
      },
      [finalConfig.delayHide, setVisible]
    ),
    showTooltip = React3.useCallback(
      function () {
        clearTimeout(timer.current),
          (timer.current = window.setTimeout(function () {
            return setVisible(!0);
          }, finalConfig.delayShow));
      },
      [finalConfig.delayShow, setVisible]
    ),
    toggleTooltip = React3.useCallback(
      function () {
        getLatest().visible ? hideTooltip() : showTooltip();
      },
      [getLatest, hideTooltip, showTooltip]
    );
  React3.useEffect(
    function () {
      if (getLatest().finalConfig.closeOnOutsideClick) {
        var handleClickOutside = function (event) {
          var _event$composedPath,
            _getLatest = getLatest(),
            tooltipRef2 = _getLatest.tooltipRef,
            triggerRef2 = _getLatest.triggerRef,
            target =
              (event.composedPath == null || (_event$composedPath = event.composedPath()) == null
                ? void 0
                : _event$composedPath[0]) || event.target;
          target instanceof Node &&
            tooltipRef2 != null &&
            triggerRef2 != null &&
            !tooltipRef2.contains(target) &&
            !triggerRef2.contains(target) &&
            hideTooltip();
        };
        return (
          document.addEventListener("mousedown", handleClickOutside),
          function () {
            return document.removeEventListener("mousedown", handleClickOutside);
          }
        );
      }
    },
    [getLatest, hideTooltip]
  ),
    React3.useEffect(
      function () {
        if (!(triggerRef == null || !isTriggeredBy("click")))
          return (
            triggerRef.addEventListener("click", toggleTooltip),
            function () {
              return triggerRef.removeEventListener("click", toggleTooltip);
            }
          );
      },
      [triggerRef, isTriggeredBy, toggleTooltip]
    ),
    React3.useEffect(
      function () {
        if (!(triggerRef == null || !isTriggeredBy("double-click")))
          return (
            triggerRef.addEventListener("dblclick", toggleTooltip),
            function () {
              return triggerRef.removeEventListener("dblclick", toggleTooltip);
            }
          );
      },
      [triggerRef, isTriggeredBy, toggleTooltip]
    ),
    React3.useEffect(
      function () {
        if (!(triggerRef == null || !isTriggeredBy("right-click"))) {
          var preventDefaultAndToggle = function (event) {
            event.preventDefault(), toggleTooltip();
          };
          return (
            triggerRef.addEventListener("contextmenu", preventDefaultAndToggle),
            function () {
              return triggerRef.removeEventListener("contextmenu", preventDefaultAndToggle);
            }
          );
        }
      },
      [triggerRef, isTriggeredBy, toggleTooltip]
    ),
    React3.useEffect(
      function () {
        if (!(triggerRef == null || !isTriggeredBy("focus")))
          return (
            triggerRef.addEventListener("focus", showTooltip),
            triggerRef.addEventListener("blur", hideTooltip),
            function () {
              triggerRef.removeEventListener("focus", showTooltip), triggerRef.removeEventListener("blur", hideTooltip);
            }
          );
      },
      [triggerRef, isTriggeredBy, showTooltip, hideTooltip]
    ),
    React3.useEffect(
      function () {
        if (!(triggerRef == null || !isTriggeredBy("hover")))
          return (
            triggerRef.addEventListener("mouseenter", showTooltip),
            triggerRef.addEventListener("mouseleave", hideTooltip),
            function () {
              triggerRef.removeEventListener("mouseenter", showTooltip),
                triggerRef.removeEventListener("mouseleave", hideTooltip);
            }
          );
      },
      [triggerRef, isTriggeredBy, showTooltip, hideTooltip]
    ),
    React3.useEffect(
      function () {
        if (!(tooltipRef == null || !isTriggeredBy("hover") || !getLatest().finalConfig.interactive))
          return (
            tooltipRef.addEventListener("mouseenter", showTooltip),
            tooltipRef.addEventListener("mouseleave", hideTooltip),
            function () {
              tooltipRef.removeEventListener("mouseenter", showTooltip),
                tooltipRef.removeEventListener("mouseleave", hideTooltip);
            }
          );
      },
      [tooltipRef, isTriggeredBy, showTooltip, hideTooltip, getLatest]
    );
  var isReferenceHidden =
    popperProps == null ||
    (_popperProps$state = popperProps.state) == null ||
    (_popperProps$state$mo = _popperProps$state.modifiersData) == null ||
    (_popperProps$state$mo2 = _popperProps$state$mo.hide) == null
      ? void 0
      : _popperProps$state$mo2.isReferenceHidden;
  React3.useEffect(
    function () {
      finalConfig.closeOnTriggerHidden && isReferenceHidden && hideTooltip();
    },
    [finalConfig.closeOnTriggerHidden, hideTooltip, isReferenceHidden]
  ),
    React3.useEffect(
      function () {
        if (!finalConfig.followCursor || triggerRef == null) return;
        function setMousePosition(_ref) {
          var clientX = _ref.clientX,
            clientY = _ref.clientY;
          (virtualElement.getBoundingClientRect = generateBoundingClientRect(clientX, clientY)), update?.();
        }
        return (
          triggerRef.addEventListener("mousemove", setMousePosition),
          function () {
            return triggerRef.removeEventListener("mousemove", setMousePosition);
          }
        );
      },
      [finalConfig.followCursor, triggerRef, update]
    ),
    React3.useEffect(
      function () {
        if (!(tooltipRef == null || update == null || finalConfig.mutationObserverOptions == null)) {
          var observer = new MutationObserver(update);
          return (
            observer.observe(tooltipRef, finalConfig.mutationObserverOptions),
            function () {
              return observer.disconnect();
            }
          );
        }
      },
      [finalConfig.mutationObserverOptions, tooltipRef, update]
    );
  var getTooltipProps = function (args) {
      return (
        args === void 0 && (args = {}),
        _extends({}, args, { style: _extends({}, args.style, styles.popper) }, attributes.popper, {
          "data-popper-interactive": finalConfig.interactive,
        })
      );
    },
    getArrowProps = function (args) {
      return (
        args === void 0 && (args = {}),
        _extends({}, args, attributes.arrow, { style: _extends({}, args.style, styles.arrow), "data-popper-arrow": !0 })
      );
    };
  return _extends(
    { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, tooltipRef, triggerRef, visible },
    popperProps
  );
}
var match = (0, import_memoizerific.default)(1e3)((requests, actual, value, fallback = 0) =>
    actual.split("-")[0] === requests ? value : fallback
  ),
  ArrowSpacing = 8,
  Arrow = emotion_styled_browser_esm_default.div(
    { position: "absolute", borderStyle: "solid" },
    ({ placement }) => {
      let x = 0,
        y = 0;
      switch (!0) {
        case placement.startsWith("left") || placement.startsWith("right"): {
          y = 8;
          break;
        }
        case placement.startsWith("top") || placement.startsWith("bottom"): {
          x = 8;
          break;
        }
      }
      return { transform: `translate3d(${x}px, ${y}px, 0px)` };
    },
    ({ theme, color, placement }) => ({
      bottom: `${match("top", placement, `${ArrowSpacing * -1}px`, "auto")}`,
      top: `${match("bottom", placement, `${ArrowSpacing * -1}px`, "auto")}`,
      right: `${match("left", placement, `${ArrowSpacing * -1}px`, "auto")}`,
      left: `${match("right", placement, `${ArrowSpacing * -1}px`, "auto")}`,
      borderBottomWidth: `${match("top", placement, "0", ArrowSpacing)}px`,
      borderTopWidth: `${match("bottom", placement, "0", ArrowSpacing)}px`,
      borderRightWidth: `${match("left", placement, "0", ArrowSpacing)}px`,
      borderLeftWidth: `${match("right", placement, "0", ArrowSpacing)}px`,
      borderTopColor: match(
        "top",
        placement,
        theme.color[color] || color || theme.base === "light"
          ? lightenColor(theme.background.app)
          : theme.background.app,
        "transparent"
      ),
      borderBottomColor: match(
        "bottom",
        placement,
        theme.color[color] || color || theme.base === "light"
          ? lightenColor(theme.background.app)
          : theme.background.app,
        "transparent"
      ),
      borderLeftColor: match(
        "left",
        placement,
        theme.color[color] || color || theme.base === "light"
          ? lightenColor(theme.background.app)
          : theme.background.app,
        "transparent"
      ),
      borderRightColor: match(
        "right",
        placement,
        theme.color[color] || color || theme.base === "light"
          ? lightenColor(theme.background.app)
          : theme.background.app,
        "transparent"
      ),
    })
  ),
  Wrapper = emotion_styled_browser_esm_default.div(
    ({ hidden }) => ({ display: hidden ? "none" : "inline-block", zIndex: 2147483647 }),
    ({ theme, color, hasChrome }) =>
      hasChrome
        ? {
            background:
              theme.color[color] || color || theme.base === "light"
                ? lightenColor(theme.background.app)
                : theme.background.app,
            filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
            borderRadius: theme.appBorderRadius,
            fontSize: theme.typography.size.s1,
          }
        : {}
  ),
  Tooltip = import_react.default.forwardRef(
    ({ placement, hasChrome, children, arrowProps, tooltipRef, color, withArrows, ...props }, ref) =>
      import_react.default.createElement(
        Wrapper,
        { "data-testid": "tooltip", hasChrome, ref, ...props, color },
        hasChrome && withArrows && import_react.default.createElement(Arrow, { placement, ...arrowProps, color }),
        children
      )
  );
Tooltip.displayName = "Tooltip";
Tooltip.defaultProps = { color: void 0, tooltipRef: void 0, hasChrome: !0, placement: "top", arrowProps: {} };
var { document: document2 } = scope,
  TargetContainer = emotion_styled_browser_esm_default.div`
  display: inline-block;
  cursor: ${(props) => (props.trigger === "hover" || props.trigger.includes("hover") ? "default" : "pointer")};
`,
  TargetSvgContainer = emotion_styled_browser_esm_default.g`
  cursor: ${(props) => (props.trigger === "hover" || props.trigger.includes("hover") ? "default" : "pointer")};
`,
  WithTooltipPure = ({
    svg,
    trigger,
    closeOnOutsideClick,
    placement,
    hasChrome,
    withArrows,
    offset: offset2,
    tooltip,
    children,
    closeOnTriggerHidden,
    mutationObserverOptions,
    closeOnClick,
    tooltipShown,
    onVisibilityChange,
    defaultVisible,
    delayHide,
    visible,
    interactive,
    delayShow,
    modifiers,
    strategy,
    followCursor,
    onVisibleChange,
    ...props
  }) => {
    let Container = svg ? TargetSvgContainer : TargetContainer,
      {
        getArrowProps,
        getTooltipProps,
        setTooltipRef,
        setTriggerRef,
        visible: isVisible,
        state,
      } = usePopperTooltip(
        {
          trigger,
          placement,
          defaultVisible: defaultVisible ?? tooltipShown,
          delayHide,
          interactive,
          closeOnOutsideClick: closeOnOutsideClick ?? closeOnClick,
          closeOnTriggerHidden,
          onVisibleChange: (_isVisible) => {
            onVisibilityChange?.(_isVisible), onVisibleChange?.(_isVisible);
          },
          delayShow,
          followCursor,
          mutationObserverOptions,
          visible,
          offset: offset2,
        },
        { modifiers, strategy }
      ),
      tooltipComponent = import_react.default.createElement(
        Tooltip,
        {
          placement: state?.placement,
          ref: setTooltipRef,
          hasChrome,
          arrowProps: getArrowProps(),
          withArrows,
          ...getTooltipProps(),
        },
        typeof tooltip == "function" ? tooltip({ onHide: () => onVisibleChange(!1) }) : tooltip
      );
    return import_react.default.createElement(
      import_react.default.Fragment,
      null,
      import_react.default.createElement(Container, { trigger, ref: setTriggerRef, ...props }, children),
      isVisible && import_react_dom.default.createPortal(tooltipComponent, document2.body)
    );
  };
WithTooltipPure.defaultProps = {
  svg: !1,
  trigger: "click",
  closeOnOutsideClick: !1,
  placement: "top",
  modifiers: [
    { name: "preventOverflow", options: { padding: 8 } },
    { name: "offset", options: { offset: [8, 8] } },
    { name: "arrow", options: { padding: 8 } },
  ],
  hasChrome: !0,
  defaultVisible: !1,
};
var WithToolTipState = ({ startOpen = !1, onVisibleChange: onChange, ...rest }) => {
  let [tooltipShown, setTooltipShown] = (0, import_react.useState)(startOpen),
    onVisibilityChange = (0, import_react.useCallback)(
      (visibility) => {
        (onChange && onChange(visibility) === !1) || setTooltipShown(visibility);
      },
      [onChange]
    );
  return (
    (0, import_react.useEffect)(() => {
      let hide2 = () => onVisibilityChange(!1);
      document2.addEventListener("keydown", hide2, !1);
      let iframes = Array.from(document2.getElementsByTagName("iframe")),
        unbinders = [];
      return (
        iframes.forEach((iframe) => {
          let bind = () => {
            try {
              iframe.contentWindow.document &&
                (iframe.contentWindow.document.addEventListener("click", hide2),
                unbinders.push(() => {
                  try {
                    iframe.contentWindow.document.removeEventListener("click", hide2);
                  } catch {}
                }));
            } catch {}
          };
          bind(),
            iframe.addEventListener("load", bind),
            unbinders.push(() => {
              iframe.removeEventListener("load", bind);
            });
        }),
        () => {
          document2.removeEventListener("keydown", hide2),
            unbinders.forEach((unbind) => {
              unbind();
            });
        }
      );
    }),
    import_react.default.createElement(WithTooltipPure, {
      ...rest,
      visible: tooltipShown,
      onVisibleChange: onVisibilityChange,
    })
  );
};
export { require_react_dom, auto, WithTooltipPure, WithToolTipState };

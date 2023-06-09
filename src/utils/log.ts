/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-prototype-builtins */
/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-spread */
type Options = {
  bgColor: string;
  logColor: string;
  infoColor: string;
  warnColor: string;
  errorColor: string;
  fontSize: string;
  freeConsole: boolean;
  css: string;
  autoScroll: boolean;
};

export function log() {
  let logEl: Element;
  let isInitialized = false;
  const _console: any = {}; // backup console obj to contain references of overridden fns.
  let _options: Options = {
    bgColor: "black",
    logColor: "lightgreen",
    infoColor: "blue",
    warnColor: "orange",
    errorColor: "red",
    fontSize: "1em",
    freeConsole: false,
    css: "",
    autoScroll: true,
  };

  function createElement(tag: string, css: string) {
    const element = document.createElement(tag);
    element.style.cssText = css;
    return element;
  }

  function createPanel() {
    const div = createElement(
      "div",
      "z-index:2147483647;font-family:Helvetica,Arial,sans-serif;font-size:" +
        _options.fontSize +
        ";padding:5px;text-align:left;opacity:0.8;position:fixed;right:0;top:0;min-width:200px;max-height:50vh;overflow:auto;background:" +
        _options.bgColor +
        ";" +
        _options.css
    );
    return div;
  }

  function genericLogger(color: string, ...args: unknown[]) {
    const el = createElement(
      "div",
      "line-height:1.7em;min-height:1.7em;background:" +
        (logEl.children.length % 2 ? "rgba(255,255,255,0.1)" : "") +
        ";color:" +
        color
    ); // zebra lines
    const val = [].slice.call(args).reduce(function (prev, arg) {
      return prev + " " + (typeof arg === "object" ? JSON.stringify(arg) : arg);
    }, "");
    el.textContent = val;
    logEl.appendChild(el);

    // Scroll to last element, if autoScroll option is set.
    if (_options.autoScroll) {
      logEl.scrollTop = logEl.scrollHeight - logEl.clientHeight;
    }
  }

  function clear() {
    logEl.innerHTML = "";
  }

  function log(args: unknown[]) {
    return genericLogger(_options.logColor, ...args);
  }

  function info(args: unknown[]) {
    return genericLogger(_options.infoColor, ...args);
  }

  function warn(args: unknown[]) {
    return genericLogger(_options.warnColor, ...args);
  }

  function error(args: unknown[]) {
    return genericLogger(_options.errorColor, ...args);
  }

  function setOptions(options: Partial<Options>): void {
    _options = {
      ..._options,
      ...options,
    };
  }

  function init(options: Partial<Options> = {}) {
    if (isInitialized) {
      return;
    }

    isInitialized = true;

    if (options) {
      setOptions(options);
    }

    logEl = createPanel();
    document.body.appendChild(logEl);

    if (!_options.freeConsole) {
      // Backup actual fns to keep it working together
      _console.log = console.log;
      _console.clear = console.clear;
      _console.info = console.info;
      _console.warn = console.warn;
      _console.error = console.error;
      console.log = originalFnCallDecorator(log, "log") as (
        ...data: any[]
      ) => void;
      console.clear = originalFnCallDecorator(clear, "clear") as () => void;
      console.info = originalFnCallDecorator(info, "info") as (
        ...data: any[]
      ) => void;
      console.warn = originalFnCallDecorator(warn, "warn") as (
        ...data: any[]
      ) => void;
      console.error = originalFnCallDecorator(error, "error") as (
        ...data: any[]
      ) => void;
    }
  }

  function destroy() {
    isInitialized = false;
    console.log = _console.log;
    console.clear = _console.clear;
    console.info = _console.info;
    console.warn = _console.warn;
    console.error = _console.error;
    logEl.remove();
  }

  /**
   * Checking if isInitialized is set
   */
  function checkInitialized() {
    if (!isInitialized) {
      throw "You need to call `screenLog.init()` first.";
    }
  }

  function checkInitDecorator(fn: Function): Function {
    return function (this: any, ...args: any[]): any {
      checkInitialized();
      return fn.apply(this, args);
    };
  }

  function originalFnCallDecorator(fn: Function, fnName: string): Function {
    return function (this: any, ...args: any[]): any {
      fn.apply(this, args);
      if (typeof _console[fnName] === "function") {
        _console[fnName].apply(console, args);
      }
    };
  }

  // Public API
  return {
    init: init,
    log: originalFnCallDecorator(checkInitDecorator(log), "log"),
    clear: originalFnCallDecorator(checkInitDecorator(clear), "clear"),
    info: originalFnCallDecorator(checkInitDecorator(clear), "info"),
    warn: originalFnCallDecorator(checkInitDecorator(warn), "warn"),
    error: originalFnCallDecorator(checkInitDecorator(error), "error"),
    destroy: checkInitDecorator(destroy),
  };
}

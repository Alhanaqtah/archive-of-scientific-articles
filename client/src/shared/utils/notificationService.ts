export class NotificationService {
  static dispatchEvent(eventName: string) {
    const event = new Event(eventName);
    document.dispatchEvent(event);
  }

  static subscribe(eventName: string, fn: () => void) {
    document.addEventListener(eventName, fn);
  }

  static unsubscribe(eventName: string, fn: () => void) {
    document.removeEventListener(eventName, fn);
  }
}

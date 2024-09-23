import { ModalOptions } from 'ng-zorro-antd/modal';
import { DecoratorService } from '../services';

export function Confirmable(options?: ModalOptions) {
  const modalService = DecoratorService.getNzModalService();

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // the usual, caching the original implementation
    const originalMethod = descriptor.value;
    // default values for our config, we’ll overwrite this with our options parameter
    let config: ModalOptions = {
      nzTitle: 'შეკითხვა',
      nzContent: 'ნამდვილად გსურთ ამ მოქმედების განხორციელება?',
      nzOkText: 'დიახ',
      nzCancelText: 'არა',
      nzCentered: true,
    };

    // overwrite any keys passed in to our decorator in the config object

    if (options) {
      config = {
        ...config,
        ...options,
      };
    }

    descriptor.value = function (...args: any) {
      // ask for confirmation
      modalService.confirm({
        ...config,
        nzOnOk: () => {
          // run original implementation if user confirms
          const result = originalMethod.apply(this, args);
          return result;
        },
        nzOnCancel: () => {
          return descriptor;
        },
      });
    };
  };
}

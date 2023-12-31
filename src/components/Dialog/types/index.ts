export interface DialogAttribute {
  modelValue: boolean;
  title: string;
  width?: string | number;
  fullscreen?: boolean;
  modal?: boolean;
  modelClose?: boolean;
  escClose?: boolean;
  draggable?: boolean;
  aCenter?: boolean;
  /** 底部操作行 */
  operationRow?: boolean;
}

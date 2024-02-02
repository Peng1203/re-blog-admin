import Table from '@/components/Table';
import Form from '@/components/Form';
import Dialog from '@/components/Dialog';
import Skeleton from '@/components/Skeleton';

declare module 'vue' {
  interface GlobalComponents {
    Table: typeof Table;
    PengTable: typeof Table;
    'Peng-Table': typeof Table;

    Form: typeof Form;
    PengForm: typeof Form;
    'Peng-Form': typeof Form;

    Dialog: typeof Dialog;
    PengDialog: typeof Dialog;
    'Peng-Dialog': typeof Dialog;

    Skeleton: typeof Skeleton;
    PengSkeleton: typeof Skeleton;
    'Peng-Skeleton': typeof Skeleton;
  }
}

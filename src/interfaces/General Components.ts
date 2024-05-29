import { DefaultSelect } from "./Queries";

export interface BreadcrumbsCustomProps {
    title: string;
    icon: JSX.Element;
    linkName: string;
    linkUrl: string;
    separator: string;
}

export interface LoadingCustomProps {
    isLoading: boolean;
}

export interface FilterModalProps {
    open: boolean;
    setOpen: Function;
    selectOptions: SelectOption[];
    applyFilters: (filters: string) => void;
    isRe: boolean;
}

export interface SelectOption {
    name: string;
    options: DefaultSelect[];
}

export interface QuestionDialogCustomProps {
    open: boolean;
    setOpen: Function;
    title: any;
    handleCancel: Function;
    colorCancel: any;
    colorSubmit: any;
    handleSubmit: Function;
    cancelTitle: string;
    submitTitle: string;
    handleSecondary?: Function;
    colorSecondary?: any;
    secondaryTitle?: string;
}

export interface SearchFieldCustomProps {
    placeholder: string;
    handleSearch: (event: React.KeyboardEvent) => void;
    handleSearchValue: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface SearchFieldMainCustomProps {
    placeholder: string;
    value: string;
    handleSearch: (event: React.KeyboardEvent) => void;
    handleSearchValue: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface FormDialogCustomProps {
    open: boolean;
    handleClose: () => void;
    form: JSX.Element;
}

export interface ApiError {
    status: number;
    msg: string;
}

// export interface CalendarTableProps {
//     title: string; 
//     type: number;
//     data: MonthlyElementPost[]; 
//     totalRow: number[];
//     handleChangeRightInputMany: (id: number, Year: number, value: number[]) => void; 
//     handleChangeCellInput: (id: number, Year: number, value: number) => void;
//     period: number;
// }

// export interface CalendarTable1Props {
//     title: string;
//     data: FormItem[];
//     period: number;
// }

// export interface CalendarShowTableProps {
//     title: string; 
//     data: MonthlyElementPost[]; 
//     totalRow: number[];
//     period: number;
// }
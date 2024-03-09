/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RespCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
};
export declare type RespCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RespCreateFormOverridesProps = {
    RespCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RespCreateFormProps = React.PropsWithChildren<{
    overrides?: RespCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RespCreateFormInputValues) => RespCreateFormInputValues;
    onSuccess?: (fields: RespCreateFormInputValues) => void;
    onError?: (fields: RespCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RespCreateFormInputValues) => RespCreateFormInputValues;
    onValidate?: RespCreateFormValidationValues;
} & React.CSSProperties>;
export default function RespCreateForm(props: RespCreateFormProps): React.ReactElement;

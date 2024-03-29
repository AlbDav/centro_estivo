/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Group } from "../API.ts";
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
export declare type GroupUpdateFormInputValues = {
    name?: string;
    color?: string;
    age?: number;
};
export declare type GroupUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupUpdateFormOverridesProps = {
    GroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: GroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    group?: Group;
    onSubmit?: (fields: GroupUpdateFormInputValues) => GroupUpdateFormInputValues;
    onSuccess?: (fields: GroupUpdateFormInputValues) => void;
    onError?: (fields: GroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupUpdateFormInputValues) => GroupUpdateFormInputValues;
    onValidate?: GroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GroupUpdateForm(props: GroupUpdateFormProps): React.ReactElement;

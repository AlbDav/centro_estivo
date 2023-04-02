/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RuleCreateFormInputValues = {
    title?: string;
    description?: string;
    points?: number;
    pointDescription?: string;
};
export declare type RuleCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
    pointDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RuleCreateFormOverridesProps = {
    RuleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    pointDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RuleCreateFormProps = React.PropsWithChildren<{
    overrides?: RuleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RuleCreateFormInputValues) => RuleCreateFormInputValues;
    onSuccess?: (fields: RuleCreateFormInputValues) => void;
    onError?: (fields: RuleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RuleCreateFormInputValues) => RuleCreateFormInputValues;
    onValidate?: RuleCreateFormValidationValues;
} & React.CSSProperties>;
export default function RuleCreateForm(props: RuleCreateFormProps): React.ReactElement;

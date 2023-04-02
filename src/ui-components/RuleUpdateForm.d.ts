/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Rule } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RuleUpdateFormInputValues = {
    title?: string;
    description?: string;
    points?: number;
    pointDescription?: string;
};
export declare type RuleUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
    pointDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RuleUpdateFormOverridesProps = {
    RuleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    pointDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RuleUpdateFormProps = React.PropsWithChildren<{
    overrides?: RuleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rule?: Rule;
    onSubmit?: (fields: RuleUpdateFormInputValues) => RuleUpdateFormInputValues;
    onSuccess?: (fields: RuleUpdateFormInputValues) => void;
    onError?: (fields: RuleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RuleUpdateFormInputValues) => RuleUpdateFormInputValues;
    onValidate?: RuleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RuleUpdateForm(props: RuleUpdateFormProps): React.ReactElement;

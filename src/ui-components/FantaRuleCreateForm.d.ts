/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type FantaRuleCreateFormInputValues = {
    title?: string;
    description?: string;
    points?: number;
    pointDescription?: string;
    isResp?: boolean;
};
export declare type FantaRuleCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
    pointDescription?: ValidationFunction<string>;
    isResp?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FantaRuleCreateFormOverridesProps = {
    FantaRuleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    pointDescription?: PrimitiveOverrideProps<TextFieldProps>;
    isResp?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type FantaRuleCreateFormProps = React.PropsWithChildren<{
    overrides?: FantaRuleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FantaRuleCreateFormInputValues) => FantaRuleCreateFormInputValues;
    onSuccess?: (fields: FantaRuleCreateFormInputValues) => void;
    onError?: (fields: FantaRuleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FantaRuleCreateFormInputValues) => FantaRuleCreateFormInputValues;
    onValidate?: FantaRuleCreateFormValidationValues;
} & React.CSSProperties>;
export default function FantaRuleCreateForm(props: FantaRuleCreateFormProps): React.ReactElement;

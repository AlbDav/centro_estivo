/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FantaRule } from "../API.ts";
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
export declare type FantaRuleUpdateFormInputValues = {
    title?: string;
    description?: string;
    points?: number;
    pointDescription?: string;
};
export declare type FantaRuleUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
    pointDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FantaRuleUpdateFormOverridesProps = {
    FantaRuleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    pointDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FantaRuleUpdateFormProps = React.PropsWithChildren<{
    overrides?: FantaRuleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fantaRule?: FantaRule;
    onSubmit?: (fields: FantaRuleUpdateFormInputValues) => FantaRuleUpdateFormInputValues;
    onSuccess?: (fields: FantaRuleUpdateFormInputValues) => void;
    onError?: (fields: FantaRuleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FantaRuleUpdateFormInputValues) => FantaRuleUpdateFormInputValues;
    onValidate?: FantaRuleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FantaRuleUpdateForm(props: FantaRuleUpdateFormProps): React.ReactElement;

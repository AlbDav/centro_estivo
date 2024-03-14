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
export declare type FantaTeamCreateFormInputValues = {
    name?: string;
    ownerUserId?: string;
};
export declare type FantaTeamCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    ownerUserId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FantaTeamCreateFormOverridesProps = {
    FantaTeamCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    ownerUserId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FantaTeamCreateFormProps = React.PropsWithChildren<{
    overrides?: FantaTeamCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FantaTeamCreateFormInputValues) => FantaTeamCreateFormInputValues;
    onSuccess?: (fields: FantaTeamCreateFormInputValues) => void;
    onError?: (fields: FantaTeamCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FantaTeamCreateFormInputValues) => FantaTeamCreateFormInputValues;
    onValidate?: FantaTeamCreateFormValidationValues;
} & React.CSSProperties>;
export default function FantaTeamCreateForm(props: FantaTeamCreateFormProps): React.ReactElement;

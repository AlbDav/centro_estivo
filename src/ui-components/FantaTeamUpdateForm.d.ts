/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FantaTeam } from "../API.ts";
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
export declare type FantaTeamUpdateFormInputValues = {
    name?: string;
};
export declare type FantaTeamUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FantaTeamUpdateFormOverridesProps = {
    FantaTeamUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FantaTeamUpdateFormProps = React.PropsWithChildren<{
    overrides?: FantaTeamUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fantaTeam?: FantaTeam;
    onSubmit?: (fields: FantaTeamUpdateFormInputValues) => FantaTeamUpdateFormInputValues;
    onSuccess?: (fields: FantaTeamUpdateFormInputValues) => void;
    onError?: (fields: FantaTeamUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FantaTeamUpdateFormInputValues) => FantaTeamUpdateFormInputValues;
    onValidate?: FantaTeamUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FantaTeamUpdateForm(props: FantaTeamUpdateFormProps): React.ReactElement;

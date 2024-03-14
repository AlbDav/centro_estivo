/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getFantaRule } from "../graphql/queries";
import { updateFantaRule } from "../graphql/mutations";
export default function FantaRuleUpdateForm(props) {
  const {
    id: idProp,
    fantaRule: fantaRuleModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    description: "",
    points: "",
    pointDescription: "",
    isResp: false,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [points, setPoints] = React.useState(initialValues.points);
  const [pointDescription, setPointDescription] = React.useState(
    initialValues.pointDescription
  );
  const [isResp, setIsResp] = React.useState(initialValues.isResp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fantaRuleRecord
      ? { ...initialValues, ...fantaRuleRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setPoints(cleanValues.points);
    setPointDescription(cleanValues.pointDescription);
    setIsResp(cleanValues.isResp);
    setErrors({});
  };
  const [fantaRuleRecord, setFantaRuleRecord] =
    React.useState(fantaRuleModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getFantaRule.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFantaRule
        : fantaRuleModelProp;
      setFantaRuleRecord(record);
    };
    queryData();
  }, [idProp, fantaRuleModelProp]);
  React.useEffect(resetStateValues, [fantaRuleRecord]);
  const validations = {
    title: [{ type: "Required" }],
    description: [{ type: "Required" }],
    points: [{ type: "Required" }],
    pointDescription: [{ type: "Required" }],
    isResp: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          description,
          points,
          pointDescription,
          isResp,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateFantaRule.replaceAll("__typename", ""),
            variables: {
              input: {
                id: fantaRuleRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FantaRuleUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              points,
              pointDescription,
              isResp,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              points,
              pointDescription,
              isResp,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Points"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={points}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              description,
              points: value,
              pointDescription,
              isResp,
            };
            const result = onChange(modelFields);
            value = result?.points ?? value;
          }
          if (errors.points?.hasError) {
            runValidationTasks("points", value);
          }
          setPoints(value);
        }}
        onBlur={() => runValidationTasks("points", points)}
        errorMessage={errors.points?.errorMessage}
        hasError={errors.points?.hasError}
        {...getOverrideProps(overrides, "points")}
      ></TextField>
      <TextField
        label="Point description"
        isRequired={true}
        isReadOnly={false}
        value={pointDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              points,
              pointDescription: value,
              isResp,
            };
            const result = onChange(modelFields);
            value = result?.pointDescription ?? value;
          }
          if (errors.pointDescription?.hasError) {
            runValidationTasks("pointDescription", value);
          }
          setPointDescription(value);
        }}
        onBlur={() => runValidationTasks("pointDescription", pointDescription)}
        errorMessage={errors.pointDescription?.errorMessage}
        hasError={errors.pointDescription?.hasError}
        {...getOverrideProps(overrides, "pointDescription")}
      ></TextField>
      <SwitchField
        label="Is resp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isResp}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              description,
              points,
              pointDescription,
              isResp: value,
            };
            const result = onChange(modelFields);
            value = result?.isResp ?? value;
          }
          if (errors.isResp?.hasError) {
            runValidationTasks("isResp", value);
          }
          setIsResp(value);
        }}
        onBlur={() => runValidationTasks("isResp", isResp)}
        errorMessage={errors.isResp?.errorMessage}
        hasError={errors.isResp?.hasError}
        {...getOverrideProps(overrides, "isResp")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || fantaRuleModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || fantaRuleModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

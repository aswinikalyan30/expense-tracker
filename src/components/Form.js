/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
import './../scss/Form.scss';

const Form = (props) => {
  const { setShowForm, categoriesData, addRecord } = props;
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const watchRecordType = watch("recordType", "income");

  const onSubmit = (data) => {
    addRecord(data);
  };

  return (
    <div id="form-div">
      <form id="add-record-form" onSubmit={handleSubmit(onSubmit)}>

        <select {...register("recordType", { required: true })}>
          <option value="">income or expense</option>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>
        {errors.recordType && <span>Is it an income or expense</span>}

        {
          watchRecordType === "income" ? 
          
          <select {...register("category")}>
            <option value="">What's the income?</option>
            <option value="salary">salary</option>
            <option value="gift">gift</option>
          </select>
          
          : <select {...register("category")}>
            <option value="">What's the expense?</option>
            <option value="food">food</option>
            <option value="clothes">clothes</option>
          </select>
        }

        <input type="number" placeholder="What's the amount?" {...register("amount", { required: true, valueAsNumber: true, })} />
        {errors.amount && <span>What's the amount?</span>}

        <textarea placeholder="Add some comments" {...register("description")}></textarea>

        <input type="submit" value="Add"></input>
      </form>
      <button onClick={() => setShowForm(false)}>cancel</button>
    </div>
  );
};

export default Form;

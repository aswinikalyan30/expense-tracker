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

        <label>Income or Expense?</label>
        <select {...register("recordType", { required: true })}>
          <option value="" style={{display: "none"}} className="placeholder-text">Please select a value</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {errors.recordType && <span>Please select one option?</span>}
        {
          watchRecordType === "income" || watchRecordType === "" ? 
          <>
          <label>What is the income?</label>
          <select {...register("category", { required: true })}>
            <option value="" style={{display: "none"}} className="placeholder-text">Please select a value</option>
            <option value="salary">Salary</option>
            <option value="gift">Gift</option>
          </select>
          </>
          
          :
          <> 
          <label>What is the expense?</label>
          <select {...register("category", { required: true })}>
            <option value="" style={{display: "none"}} className="placeholder-text">Please select a value</option>
            <option value="food">Food</option>
            <option value="clothes">Clothing</option>
          </select>
          </>
        }
        
        <label>What is the amount?</label>
        <input type="number" placeholder="What's the amount?" {...register("amount", { required: true, valueAsNumber: true, })} />
        {errors.amount && <span>Please enter a value?</span>}

        <label>When did you get your salary?</label>
        <input type="date" {...register("date", { required: true})} />
        {errors.date && <span>Did you enter the date?</span>}

        <button>Add {watchRecordType}</button>
        <button onClick={() => setShowForm(false)}>cancel</button>
      </form>

    </div>
  );
};

export default Form;
